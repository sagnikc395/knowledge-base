---
title: "Gregory Szorc's Digital Home  | What I've Learned About Optimizing Python"
source: "https://gregoryszorc.com/blog/2019/01/10/what-i've-learned-about-optimizing-python/"
author:
  - "Gregory Szorc"
published:
created: 2026-03-21
description: "Design and Optimzing High Performance Python Code"
tags:
  - "clippings python high-performance-python"
---
January 10, 2019 at 03:00 PM | categories: [Python](https://gregoryszorc.com/blog/category/python)

I've used Python more than any other programming language in the past 4-5 years. Python is the lingua franca for Firefox's build, test, and CI tooling. Mercurial is written in mostly Python. Many of my side-projects are in Python.

Along the way, I've accrued a bit of knowledge about Python performance and how to optimize Python. This post is about sharing that knowledge with the larger community.

My experience with Python is mostly with the CPython interpreter, specifically CPython 2.7. Not all observations apply to all Python distributions or have the same characteristics across Python versions. I'll try to call this out when relevant. And this post is in no way a thorough survey of the Python performance landscape. I mainly want to highlight areas that have particularly plagued me.

## Startup and Module Importing Overhead

Starting a Python interpreter and importing Python modules is relatively slow if you care about milliseconds.

If you need to start hundreds or thousands of Python processes as part of a workload, this overhead will amount to several seconds of overhead.

If you use Python to provide CLI tools, the overhead can cause enough lag to be noticeable by people. If you want *instantaneous* CLI tools, launching a Python interpreter on every invocation will make it very difficult to achieve that with a sufficiently complex tool.

I've written about this problem extensively. My [2014 post on python-dev](https://mail.python.org/pipermail/python-dev/2014-May/134528.html) outlines the problem. Posts in [May 2018](https://mail.python.org/pipermail/python-dev/2018-May/153296.html) and [October 2018](https://mail.python.org/pipermail/python-dev/2018-October/155466.html) restate and refine it.

There's not much you can do to alleviate interpreter startup overhead: fixing this mostly resides with the maintainers of the Python interpreter because they control the code that is taking precious milliseconds to complete. About the best you can do is [disable the site import](https://docs.python.org/3/using/cmdline.html#id3) in your shebangs and invocations to avoid some extra Python code running at startup. However, many applications rely on functionality provided by `site.py`, so use at your own risk.

Related to this is the problem of module importing. What good is a Python interpreter if it doesn't have code to run! And the way code is made available to the interpreter is often through importing modules.

There are multiple steps to importing modules. And there are sources of overhead in each one.

There is overhead in finding modules and reading their data. As I've [demonstrated with PyOxidizer](https://gregoryszorc.com/blog/2019/01/06/pyoxidizer-support-for-windows/), replacing the default *find and load a module from the filesystem* with an architecturally simpler solution of *read the module data from an in-memory data structure* makes importing the Python standard library take 70-80% of its original time! Having a single module per filesystem file introduces filesystem overhead and can slow down Python applications in the critical first milliseconds of execution. Solutions like PyOxidizer can mitigate this. And hopefully the Python community sees the overhead in the current approach and considers moving towards module distribution mechanisms that don't rely so much on separate files per module.

Another source of module importing overhead is executing code in that module at import time. Some modules have code in the module scope outside of functions and classes that runs when the module is imported. This code execution can add overhead to importing. A mitigation for this is to not run as much code at import time: only run code as needed. Python 3.7 supports a module `__getattr__` that will be called when a module attribute is not found. This can be used to lazily populate module attributes on first access.

Another workaround for module importing slowness is lazy module importing. Instead of actually loading a module when it is imported, you register a custom module importer that returns a *stub* for that module instead. When that stub is first accessed, it will load the actual module and mutate itself to be that module.

By avoiding the filesystem and module running overhead for unused modules (modules are typically imported globally and then only used by certain functions in a module), you can easily shave dozens of milliseconds from applications importing several dozens of modules.

But lazy module importers are a bit fragile. Lots of modules have a pattern where they `try: import foo; except ImportError:`. A lazy module importer may never raise `ImportError` here because to do so, it would need to search the filesystem for a module to know if it exists and searching the filesystem would add overhead, so they don't do it! You work around this by accessing an attribute on the imported module. This forces the `ImportError` to be raised if the module doesn't exist but undermines the laziness of the module import! This problem is quite nasty. Mercurial's lazy module importer has to maintain a list of modules that are known to not be lazy importable to work around it. Another issue is the `from foo import x, y` syntax, which also undermines lazy module importing in cases where `foo` is a module (as opposed to a package) because in order to return a reference to `x` and `y`, the module has to be imported.

PyOxidizer, having a fixed set of modules *frozen* into the binary, can be efficient about raising `ImportError`. And Python 3.7's module `__getattr__` provides additional flexibility for lazy module importers. I hope to integrate a robust lazy module importer into `PyOxidizer` so these gains are realized automatically.

The best solution to avoiding the interpreter startup and module import overhead problem is to run a persistent Python process. If you run Python in a daemon process (say for a web server), you pretty much get this for free. Mercurial's solution to this is to run a persistent Python process in the background which exposes a [command server](https://www.mercurial-scm.org/wiki/CommandServer) protocol. `hg` is aliased to a C (or now Rust) executable which connects to that persistent process and dispatches a command. The command server approach is a lot of work and can be a bit fragile and has security concerns. I'm exploring the idea of shipping a command server with `PyOxidizer` so executable can easily gain its benefits and the cost to solving the problem only needs to be paid in one central place: the `PyOxidizer` project.

## Function Call Overhead

Function calls in Python are relatively slow. (This observation applies less to PyPy, which can JIT code execution.)

I've seen literally dozens of patches to Mercurial where we inline code or combine Python functions in order to avoid function call overhead. In the current development cycle, some effort was made to reduce the number of functions called when updating progress bars. (We try to use progress bars for any operation that could take a while so users know what is going on.) The old progress bar update code would dispatch to a handful of functions. [Caching function call results](https://www.mercurial-scm.org/repo/hg/rev/6603de284b0a) and [avoiding simple lookups via functions](https://www.mercurial-scm.org/repo/hg/rev/963462786f6e) shaves dozens to hundreds of milliseconds off execution when we're talking about 1 million executions.

If you have tight loops or recursive functions in Python where hundreds of thousands or more function calls could be in play, you need to be aware of the overhead of calling an individual function, as it can add up quickly! Consider in-lining simple functions and combining functions to avoid the overhead.

## Attribute Lookup Overhead

This problem is similar to function call overhead because it can actually be the same problem!

Resolving an attribute in Python can be relatively slow. (Again, this observation applies less to PyPy.)

Again, working around this issue is something we do a lot in Mercurial.

Say you have the following code:

```
obj = MyObject()
total = 0

for i in len(obj.member):
    total += obj.member[i]
```

Ignoring that there are better ways to write this example (`total = sum(obj.member)` should work), as written, the loop here will need to resolve `obj.member` on every iteration. Python has a relatively complex mechanism for [resolving attributes](https://docs.python.org/3/reference/datamodel.html). For simple types, it can be quite fast. But for complex types, that attribute access can silently be invoking `__getattr__`, `__getattribute__`, various other *dunder* methods, and even custom `@property` functions. What looks like it should be a fast attribute lookup can silently be several function calls, leading to function call overhead! And this overhead can compound if you are doing things like `obj.member1.member2.member3` etc.

Each attribute lookup adds overhead. And since nearly everything in Python is a dictionary, it is somewhat accurate to equate each attribute lookup as a dictionary lookup. And we know from basic data structures that dictionary lookups are intrinsically not as fast as having say a pointer. Yes, there are some tricks in CPython to avoid the dictionary lookup overhead. But the general theme I want to get across is that each attribute lookup is a potential performance sink.

For tight loops - especially those over potentially hundreds of thousands of iterations - you can avoid this measurable attribute lookup overhead by aliasing the value to a local. We would write the example above as:

```
obj = MyObject()
total = 0

member = obj.member
for i in len(member):
    total += member[i]
```

Of course, this is only safe when the aliased item isn't replaced inside the loop! If that happens, your iterator will hold a reference to the old item and things may blow up.

The same trick can be used when calling a method of an object. Instead of:

```
obj = MyObject()

for i in range(1000000):
    obj.process(i)
```

Do the following:

```
obj = MyObject()
fn = obj.process

for i in range(1000000:)
    fn(i)
```

It's also worth noting that in cases where the attribute lookup is used to call a method (such as the previous example), Python 3.7 is [significantly faster](https://bugs.python.org/issue26110) than previous releases. But I'm pretty sure this is due to dispatch overhead to the method function itself, not attribute lookup overhead. So things will be faster yet by avoiding the attribute lookup.

Finally, unless attribute lookup is calling functions to resolve the attribute, attribute lookup is generally less of a problem than function call overhead. And it generally requires eliminating a lot of attribute lookups for you to notice a meaningful improvement. That being said, once you add up all attribute accesses inside a loop, you may be talking about 10 or 20 attributes in the loop alone - before function calls. And loops with only thousands or low tens of thousands of iterations can quickly provide hundreds of thousands or millions of attribute lookups. So be on the lookout!

## Object Overhead

From the perspective of the Python interpreter, every value is an object. In CPython, each value is a `PyObject` struct. Each object managed by the interpreter is on the heap and needs to have its own memory holding its reference count, its type, and other state. Every object is garbage collected. This means that each new object introduces overhead for the reference counting / garbage collection mechanism to process. (Again, PyPy can avoid some of this overhead by being more intelligent about the *lifetimes* of short-lived values.)

As a general rule of thumb, the more unique Python values/objects you create, the slower things are.

For example, say you are iterating over a collection of 1 million objects. You call a function to process that object into a tuple:

```
for x in my_collection:
    a, b, c, d, e, f, g, h = process(x)
```

In this example, `process()` returns an `8-tuple`. It doesn't matter of we destructure the return value or not: this tuple requires the creation of at least 9 Python values: 1 for the tuple itself and 8 for its inner members. OK, in reality there could be fewer values if `process()` returns a reference to an existing value. Or there could be more if the types aren't simple types and require multiple `PyObject` to represent. My point is that under the hood the interpreter is having to juggle multiple objects to represent things.

From my experience, this overhead is only relevant for operations that benefit from speedups when implemented in a native language like C or Rust. The reason is the CPython interpreter is just unable to execute bytecode fast enough for object overhead itself to matter. Instead, you will likely hit performance issues with function call overhead, processing overhead, etc long before object overhead. But there are some exceptions to this, such as constructing tuples or dicts with several members.

As a concrete example of this overhead, Mercurial has C code for parsing some of the lower-level data structures. In terms of raw parsing speed, the C code runs on an order of two magnitudes faster than CPython. But once we have that C code create `PyObject` to present the result, the speedup drops to just a few times faster, if that. In other words, the overhead is coming from creating and managing Python values so they can be used by Python code.

A workaround for this is to produce fewer Python values. If you only need to access a single value, have a function return that single value instead of say a tuple or dict with N values. However, watch out for function call overhead!

When you have a lot of speedup code using the CPython C API and values need to be shared across different modules, pass around Python types that expose data as C structs and have the compiled code access those C structs instead of going through the CPython C API. By avoiding the Python C API for data access, you will be avoiding most of its overhead.

Treating values as data (instead of having functions for accessing everything) is more Pythonic. So another workaround for compiled code is is to lazily create `PyObject` instances. If you create a custom Python type (`PyTypeObject`) to represent your complex values, you can define the [tp\_members](https://docs.python.org/3/c-api/typeobj.html#c.PyTypeObject.tp_members) and/or [tp\_getset](https://docs.python.org/3/c-api/typeobj.html#c.PyTypeObject.tp_getset) fields to register custom C functions to resolve the value for an attribute. If you are say writing a parser and you know that consumers will only access a subset of the parsed fields, you can quickly construct a type holding the raw data, return that type, and have the Python attribute lookup call a C function which resolves the `PyObject`. You can even defer parsing until this function is called, saving additional overhead if a parse is never required! This technique is quite rare (because it requires writing a non-trivial amount of code against the Python C API). But it can result in substantial wins.

## Pre-Sizing Collections

This one applies to the CPython C API.

When creating collections like lists or dicts, use e.g. `PyList_New()` + `PyList_SET_ITEM()` to populate new collections when their size is known at collection creation time. This will pre-size the collection to have capacity to hold the final number of elements. And it skips checks when inserting elements that the collection is large enough to hold them. When creating collections of thousands of elements, this can save a bit of overhead!

## Using Zero-copy in the C API

The CPython C API really likes to make copies of things rather than return references. For example, [PyBytes\_FromStringAndSize()](https://docs.python.org/3.7/c-api/bytes.html#c.PyBytes_FromStringAndSize) copies a `char*` to memory *owned* by Python. If you are doing this for a large number of values or sufficiently large data, we could be talking about gigabytes of memory I/O and associated allocator overhead.

If writing high-performance code against the C API, you'll want to become familiar with the [buffer protocol](https://docs.python.org/3.7/c-api/buffer.html) and related types, like [memoryview](https://docs.python.org/3.7/c-api/memoryview.html).

The *buffer protocol* is implemented by Python types and allows the Python interpreter to *cast* a type to/from bytes. It essentially allows the interpreter's C code to get a handle on a `void*` of certain size representing the object. This allows you to associate any address in memory with a `PyObject`. Many functions operating on binary data transparently accept any object implementing the *buffer protocol*. And if you are coding against the C API and want to accept any object that can be treated as bytes, you should be using the `s*`, `y*` or `w*` [format units](https://docs.python.org/3/c-api/arg.html#strings-and-buffers) when parsing function arguments.

By using the buffer protocol, you give the interpreter the best opportunity possible to be using zero-copy operations and avoiding having to copy bytes around in memory.

By using Python types like [memoryview](https://docs.python.org/3.7/library/stdtypes.html#memoryview), you are also allowing Python to reference slices of memory by reference instead of by copy.

When you have gigabytes of data flowing through your Python program, astute use of Python types that support zero-copy can make a world of difference on performance. I once measured that [python-zstandard](https://github.com/indygreg/python-zstandard) was faster than some Python LZ4 bindings (LZ4 should be faster than zstandard) because I made heavy use of the buffer protocol and avoiding excessive memory I/O in python-zstandard!

## Conclusion

This post has outlined some of the things I've learned optimizing Python programs over the years. This post is by no means a comprehensive overview of Python performance techniques and gotchas. I recognize that my use of Python is probably more demanding than most and that the recommendations I made are not applicable to many Python programs. **You should not mass update your Python code to e.g. inline functions and remove attribute lookups after reading this post.** As always, when it comes to performance optimization, measure first and optimize where things are observed to be slow. I highly recommend [py-spy](https://github.com/benfred/py-spy) for profiling Python applications. That being said, it's hard to attach a time value to low-level activity in the Python interpreter such as calling functions and looking up attributes. So if you e.g. have a loop that you know is tight, experiment with suggestions in this post, and see if you can measure an improvement!

Finally this post should not be interpreted as a dig against Python or its performance properties. Yes, you can make arguments that Python should or shouldn't be used in particular areas because of performance properties. But Python is extremely versatile - especially with PyPy delivering exceptional performance for a dynamic programming language. The performance of Python is probably *good enough* for most people. For better or worse, I have used Python for uses cases that often feel like outliers across all users. And I wanted to share my experiences such that others know what life at the frontier is like. And maybe, just maybe, I can cause the smart people who actually maintain Python distributions to think about the issues I've had in more detail and provide improvements to mitigate them.