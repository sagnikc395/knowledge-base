---
title: Functional Programming In Python
tags:
  - functional-programming
  - python
---

_Note: For completing this lecture, you might wanna first read through [[Python From Scratch]] and [[Object Oriented Programming in Python]]_

### what is functional programming ?

- Functional programming is a style (or "paradigm" if you're pretentious) of programming where we compose functions instead of mutating state (updating the value of variables).

- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming) is more about declaring *what* you want to happen, rather than *how* you want it to happen.
- [Imperative](https://en.wikipedia.org/wiki/Imperative_programming) (or procedural) programming declares both the *what* and the *how*.

- **Example of imperative code:**

```python
car = create_car()
car.add_gas(10)
car.clean_windows()
```

- **Example of functional code:**

```python
return clean_windows(add_gas(create_car()))
```

- In the functional example, we never change the value of the `car` variable, we just compose functions that return new values, with the outermost function, `clean_windows` in this case, returning the final result.

### Python is not the best for functional programming:

- Python is *not* the best language for functional programming. Reasons include:

1. No [static typing](https://developer.mozilla.org/en-US/docs/Glossary/Static_typing).
2. Everything is [mutable](https://en.wikipedia.org/wiki/Immutable_object).
3. No [tail call optimization](https://exploringjs.com/es6/ch_tail-calls.html).
4. [Side effects](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>) are common.
5. Imperative and OOP styles abound in popular libraries.
6. [Purity](https://en.wikipedia.org/wiki/Pure_function) is not enforced (and sometimes not even encouraged).
7. [Sum Types](https://en.wikipedia.org/wiki/Algebraic_data_type) are hard to define.
8. [Pattern matching](https://en.wikipedia.org/wiki/Pattern_matching) is weak at best.

So seriously, why are we using Python?

- cause we already know it

### Immutability:

- In FP, we strive to make data *[immutable](https://en.wikipedia.org/wiki/Immutable_object)*. Once a value is created, it cannot be changed. *Mutable* data, on the other hand, can be changed after it's created.
- Why ?
  - Immutable data is easier to think about and work with. When 10 different functions have access to the same variable, and you're debugging a problem with that variable, you have to consider the possibility that any of those functions could have changed the value.
  - When a variable is immutable, you can be sure that it hasn't changed since it was created. It's a helluva lot easier to work with.
- _Generally speaking, immutability means fewer bugs and more maintainable code._
- Tuples vs Lists
  - Tuples and lists are both ordered collections of values, but tuples are *immutable* and lists are *mutable*.
- You can append to a list, but you can *not* append to a tuple. You can create a *new copy* of a tuple using values from an existing tuple, but you can't change the existing tuple.
- Lists are mutable

```python
ages = [16, 21, 30]
# 'ages' is being changed in place
ages.append(80)
# [16, 21, 30, 80]
```

- Tuples are immutable

```python
ages = (16, 21, 30)
more_ages = (80,) # note the comma! It's required for a single-element tuple
# 'all_ages' is a brand new tuple
all_ages = ages + more_ages
# (16, 21, 30, 80)
```

- Functional programming aims to be *declarative*. We prefer to declare *what* we want the computer to do, rather than muck around with the details of *how* to do it.
- Declarative Programming:
  - It does *not* execute line-by-line like an imperative language. Instead, it simply declares the desired style, and it's up to a web browser to figure out how to apply and display it.(CSS)
- Unlike functional programming (and CSS), a lot of code is *imperative*. We write out the exact step-by-step implementation details. This Python script draws a red button on a screen using the [Tkinter](https://docs.python.org/3/library/tkinter.html) library:

```python
from tkinter import * # first, import the library
master = Tk() # create a window
master.geometry("200x100") # set the window size
button = Button(master, text="Submit", fg="red").pack() # create a button
master.mainloop() # start the event loop
```

### It's just math:

- Functional programming tends to be popular amongst developers with a strong mathematical background. After all, a math equation isn't procedural: it's declarative. Take the following math equation:

```
	avg = Σx/N
```

- To put this calculation in plain English:
  1.  `Σ` is just the Greek letter [Sigma](https://en.wikipedia.org/wiki/Sigma), and it represents "the [sum](https://en.wikipedia.org/wiki/Summation) of a collection".
  2.  `x` is the collection of numbers we're averaging.
  3.  `N` is the number of elements in the collection.
  4.  `avg` is equal to the sum of all the numbers in collection "x" divided by the number of elements in collection "x".

- So, the equation really just says that `avg` is the average of all the numbers in collection "x". This math equation is a *declarative* way of writing "calculate the average of a list of numbers". Here's some *imperative Python code* that does the same thing:

```python
def get_average(nums):
    total = 0
    for num in nums:
        total += num
    return total / len(nums)
```

- with functional programming, we would write code that's *a bit more* declarative:

```python
def get_average(nums):
    return sum(nums) / len(nums)
```

### Classes vs Functions:

- I run into new developers who, after learning about classes, want to use them *everywhere*. They assume that because they learned about functions first, functions are somehow inferior.
- **If you're unsure, default to functions.** I find myself reaching for classes when I need something long-lived and stateful that would be easier to model if I could share behavior *and data structure* via inheritance. This is often the case for:
  - Video games
  - Simulations
  - GUIs
- The difference is:
  > **Classes** encourage you to think about the world as a hierarchical collection of objects. Objects bundle behavior, data, and state together in a way that draws boundaries between instances of things, like chess pieces on a board.

> **Functions** encourage you to think about the world as a series of data transformations. Functions take data as input and return a transformed output. For example, a function might take the entire state of a chess board and a move as inputs, and return the new state of the board as output.

### Debugging FP:

- Need to paruse code for debugging.

### Functional vs OOP:

- Functional programming and object-oriented programming are **styles for writing code**. One isn't inherently superior to the other, but to be a well-rounded developer you should understand both well and use ideas from each when appropriate.
- You'll encounter developers who love functional programming and others who love object-oriented programming. However, contrary to popular opinion, FP and OOP are *not* always at odds with one another. They aren't opposites. Of the four pillars of OOP, [inheritance](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) is the only one that doesn't fit with functional programming.
- Inheritance isn't seen in functional code due to the mutable classes that come along with it. Encapsulation, polymorphism and abstraction are still used all the time in functional programming.

### Functions as Values:

- In Python, functions are just values, like strings, integers, or objects. For example, we can assign an existing function to a variable:

```python
def add(x, y):
    return x + y

# assign the function to a new variable
# called "addition". It behaves the same
# as the original "add" function
addition = add
print(addition(2, 5))
```

### Anonymous Functions:

- Anonymous functions have *no name*, and in Python, they're called [lambda functions](https://docs.python.org/3/reference/expressions.html#lambda) after [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus). Here's a lambda function that takes a single argument `x` and returns the result of `x + 1`:

```python
lambda x: x + 1
```

- Notice that the [expression](https://docs.python.org/3/reference/expressions.html#expressions) `x + 1` is returned *automatically*, no need for a `return` statement. And because functions are just values, we can assign the function to a variable named `add_one`:

```python
add_one = lambda x: x + 1
print(add_one(2))
```

- Because they simply return the result of an expression, they're often used for small, simple evaluations. Here's an example that uses a lambda to get a value from a dictionary:

```python
get_age = lambda name: {
    "lane": 29,
    "hunter": 69,
    "allan": 17
}.get(name, "not found")
print(get_age("lane"))
```

### First Class and Higher Order Functions:

- A programming language "supports first-class functions" when functions are treated like any other variable. That means functions can be passed as arguments to other functions, can be returned by other functions, and can be assigned to variables.
- **First-class function:** A function that is treated like any other value
- **Higher-order function:** A function that accepts another function as an argument or returns a function
- Python supports first-class and higher-order functions.

```python
def square(x):
    return x * x

# Assign function to a variable
f = square

print(f(5))
# 25
```

- Higher Order Example:

```python
def square(x):
    return x * x

def my_map(func, arg_list):
    result = []
    for i in arg_list:
        result.append(func(i))
    return result

squares = my_map(square, [1, 2, 3, 4, 5])
print(squares)
# [1, 4, 9, 16, 25]
```

### Map:

- "Map", "filter", and "reduce" are three commonly used [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) in functional programming.
- In Python, the built-in [map](https://docs.python.org/3/library/functions.html#map) function takes a function and an [iterable](https://docs.python.org/3/glossary.html#term-iterable) (in this case a list) as inputs. It returns an iterator that applies the function to every item, yielding the results.
- With map, we can operate on lists without using loops and nasty stateful variables.

```python
def square(x):
    return x * x

nums = [1, 2, 3, 4, 5]
squared_nums = map(square, nums)
print(list(squared_nums))
# [1, 4, 9, 16, 25]
```

- The [list type constructor](https://docs.python.org/3/library/stdtypes.html#list), `list()` converts the `map` object back into a standard list.

### Filter:

- The built-in [filter](https://docs.python.org/3/library/functions.html#filter) function takes a function and an iterable (in this case a list) and returns a *new* iterable that only contains elements from the original iterable where the result of the function on that item returned `True`.

```python
def is_even(x):
    return x % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(is_even, numbers))
print(evens)
# [2, 4, 6]
```

### Reduce:

- The built-in [functools.reduce()](https://docs.python.org/3/library/functools.html#functools.reduce) function takes a function and a list of values, and applies the function to each value in the list, *accumulating a single result* as it goes.

```python
# import functools from the standard library
import functools

def add(sum_so_far, x):
    print(f"sum_so_far: {sum_so_far}, x: {x}")
    return sum_so_far + x

numbers = [1, 2, 3, 4]
sum = functools.reduce(add, numbers)
# sum_so_far: 1, x: 2
# sum_so_far: 3, x: 3
# sum_so_far: 6, x: 4
# 10 doesn't print, it's just the final result
print(sum)
# 10
```

### zip:

- [zip](https://docs.python.org/3/library/functions.html#zip) function takes two iterables (in this case lists), and returns a *new* iterable where each element is a tuple containing one element from each of the original iterables.

```py
a = [1, 2, 3]
b = [4, 5, 6]

c = list(zip(a, b))
print(c)
# [(1, 4), (2, 5), (3, 6)]
```

### Pure Functions:

- If you take nothing else away from this course, *please* take this: **[Pure functions](https://en.wikipedia.org/wiki/Pure_function) are fantastic.** They have two properties:
  - They *always* return the same value given the same arguments.
  - Running them causes no side effects
- In short: **pure functions don't do anything with anything that exists outside of their scope.**

```python
def find_max(nums):
	max_val = float("-inf")
	for num in nums:
		if max_val < num:
			max_val = num
	return max_val
```

### Reference vs Value:

- When you pass a value into a function as an argument, one of two things can happen:
  - It's passed by **reference**: The function has access to the original value and can change it
  - It's passed by **value**: The function only has access to a copy. Changes to the copy within the function don't affect the original
- There is a bit more nuance, but this explanation mostly works.
- These types are passed by **reference**:
  - Lists
  - Dictionaries
  - Sets
- These types are passed by **value**:
  - Integers
  - Floats
  - Strings
  - Booleans
  - Tuples
- Most collection types are passed by reference (except for tuples) and most primitive types are passed by value.
- Simply assigning a new variable to an existing dictionary doesn't copy that dictionary, it points to the same dictonary. Instead use the [.copy()](https://docs.python.org/3/library/copy.html) method to create a new copy of a dictionary.

### Input and Output:

- The term "i/o" stands for input/output. In the context of writing programs, i/o refers to anything in our code that interacts with the "outside world". "Outside world" just means anything that's not stored in our application's memory (like variables).
- Examples of I/O:
  - Reading form or writing to a file on the hard drive.
  - Accessing the internet
  - Reading from or writing to a database
  - Even simply printing to the console is considered i/o.
- In functional programming, i/o is viewed as *dirty* but *necessary*. We know we can't *eliminate* i/o from our code, so we just *contain* it as much as possible. There should be a clear place in your project that does nasty i/o stuff, and the rest of your code can be pure.

- For example, a Python program might:
  1.  Read a file from the hard drive as the program starts
  2.  Run a bunch of pure functions to analyze the data
  3.  Write the results of the analysis to a file on the hard drive at the end

### No-op:

- A [no-op](<https://en.wikipedia.org/wiki/NOP_(code)>) is an operation that does... nothing.
- If a function doesn't return anything, it's probably impure. If it doesn't return anything, the only reason for it to exist is to perform a side effect.
- This function performs a useless computation because it doesn't return anything or perform a side-effect. It's a no-op.

```python
def square(x):
    x * x
```

- This function performs a side effect. It changes the value of the `y` variable that is outside of its scope. It's impure.

```python
y = 5
def add_to_y(x):
    global y
    y += x

add_to_y(3)
# y = 8
```

- The [`global`](https://docs.python.org/3/reference/simple_stmts.html#global) keyword just tells Python to allow access to the outer-scoped `y` variable.

### Memoization:

- At its core, [memoization](https://en.wikipedia.org/wiki/Memoization) is just [caching](<https://en.wikipedia.org/wiki/Cache_(computing)>) (storing a copy of) the result of a computation so that we don't have to compute it again in the future.
- For example, take this simple function:

```python
def add(x, y):
    return x + y
```

- A call to `add(5, 7)` will *always* evaluate to `12`. So, if you think about it, once we know that `add(5, 7)` can be replaced with `12`, we can just store the value `12` somewhere in memory so that we don't have to do the addition operation again in the future. Then, if we need to `add(5, 7)` again, we can just look up the value `12` instead of doing a (potentially expensive) CPU operation.
- The slower and more complex the function, the more memoization can help speed things up.
- _Note: It's pronounced "memOization", not "memORization". This confused me for quite a while in college, I thought my professor just didn't speak goodly.._

### Referential Transparency:

- Pure functions are always [referentially transparent](https://www.baeldung.com/cs/referential-transparency#referential-transparency).
- "Referential transparency" is a fancy way of saying that a function call can be replaced by its would-be return value because it's the same every time. **Referentially transparent functions can be safely memoized.** For example `add(2, 3)` can be smartly replaced by the value `5`.
- The great thing about pure functions is that they can always be *safely* memoized. Impure functions can't be because they might do something in addition to returning a static value, or they might return different values given the same arguments.
- No! Memoization is a *tradeoff* between memory and speed. If your function is fast to execute, it's probably not worth memoizing, because the amount of RAM (memory) your program will need to store the results will go way up.
- It's also a bunch of extra code to write, so you should only do it if you have a good reason to.

### Recursion:

- [Recursion](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>) is a famously tricky concept to grasp, but it's honestly quite simple - don't let it intimidate you! A recursive function is just a function that calls itself!

> Recursion is the process of defining something in terms of itself.

- If you thought loops were the only way to iterate over a list, you were wrong! Recursion is fundamental to functional programming because it's how we iterate over lists while avoiding stateful loops. Take a look at this function that sums the numbers in a list:

```python
def sum_nums(nums):
    if len(nums) == 0:
        return 0
    return nums[0] + sum_nums(nums[1:])

print(sum_nums([1, 2, 3, 4, 5]))
# 15
```

- Steps: - Solve a small problem : - Our goal is to sum all the numbers in a list, but we're not allowed to loop. So, we start by solving the smallest possible problem: summing the first number in the list with the rest of the list:

      	```python

  return nums[0] + sum_nums(nums[1:])

  ```

      - Recurse   :
      	- So, what actually happens when we call `sum_nums(nums[1:])`? Well, we're just calling `sum_nums` with a smaller list! In the first call, the `nums` input was `[1, 2, 3, 4, 5]`, but in the next call it's just `[2, 3, 4, 5]`. We just keep calling `sum_nums` with smaller and smaller lists.
      - The base case :
      	- So what happens when we get to the "end"? `sum_nums(nums[1:])` is called, but `nums[1:]` is an empty list because we ran out of numbers. We need to write a base case to stop the madness.
  ```

```python
if len(nums) == 0:
    return 0
```

- recursively add the size of the items of a fs clone:

```python
def sum_nested_list(lst):
    total_size = 0
    for item in lst:
        if isinstance(item,int):
            total_size += item
        else:
            total_size += sum_nested_list(item)
    return total_size
```

- Recursion is *so dang useful* with tree-like structures because we don't always know how deep they're nested. Stop and think about how you would write nested loops to traverse a tree of arbitrary depth... it's not easy, is it?

### Dangers of Recursion:

- Recursion is great because it's simple and elegant, often being the most straightforward way to solve a problem. But there are some things to watch out for:
  1.  **Stack Overflow**: Each function call requires a bit of memory. So, if you recurse too deeply, you can run out of ["stack" memory](https://en.wikipedia.org/wiki/Stack-based_memory_allocation) which will crash your program. (This is what the famous [website](https://stackoverflow.com/) is named after)
  2.  If you don't have a solid base case, you can end up in an infinite loop (which will likely lead to a stack overflow).
  3.  Recursion (especially in a language like Python) is often slower than a `for` loop because each function call requires some memory. [Tail call optimization](https://exploringjs.com/es6/ch_tail-calls.html) can help with this, but Python doesn't support it.
  - Recursive String Reversal:

```python
	def recurse_reverse_string(s,k):
    if k < 1:
        return ''
    rev_string = ""
    if k == 1:
        return s[0]
    else:
        return s[k-1] + recurse_reverse_string(s,k-1)
	def reverse_string(s):
	    return recurse_reverse_string(s,len(s))
```

### Function Transformations:

- "Function transformation" is just a more concise way to describe a specific type of [higher order function](https://en.wikipedia.org/wiki/Higher-order_function). It's when a function takes a function (or functions) as input and returns a *new* function.

```python
def multiply(x, y):
    return x * y

def add(x, y):
    return x + y

# self_math is a higher order function
# input: a function that takes two arguments and returns a value
# output: a new function that takes one argument and returns a value
def self_math(math_func):
    def inner_func(x):
        return math_func(x, x)
    return inner_func

square_func = self_math(multiply)
double_func = self_math(add)

print(square_func(5))
# prints 25

print(double_func(5))
# prints 10
```

- Why Function Transformations:
  - "When would I use function transformations in the real world?"
  - "Isn't it simpler to just define functions at the top level of the code, and call them as needed?"

- Good questions. To be clear, we don't just transform functions at [runtime](<https://en.wikipedia.org/wiki/Execution_(computing)#Runtime>) for the fun of it! We only use advanced techniques like function transformations when they make our code *simpler than it would otherwise be*.

### Code Reusability

- Creating variations of the same function dynamically can make it a lot easier to share common functionality. Take a look at this `formatter` function. It accepts a "pattern" and returns a new function that formats text according to that pattern:

```python
def formatter(pattern):
    def inner_func(text):
        result = ""
        i = 0
        while i < len(pattern):
            if pattern[i:i+2] == '{}':
                result += text
                i += 2
            else:
                result += pattern[i]
                i += 1
        return result
    return inner_func
```

- Now we can create new formatters easily:

```python
bold_formatter = formatter("**{}**")
italic_formatter = formatter("*{}*")
bullet_point_formatter = formatter("* {}")
```

- And use them like this:

```python
print(bold_formatter("Hello"))
# **Hello**
print(italic_formatter("Hello"))
# *Hello*
print(bullet_point_formatter("Hello"))
# * Hello
```

### Closures:

- A [closure](<https://en.wikipedia.org/wiki/Closure_(computer_programming)>) is a function that references variables from outside its own function body. The function definition *and its environment* are bundled together into a single entity.
- Put simply, a closure is just a function that **keeps track of some values** from the place where it was *defined*, no matter where it is executed later on.

```python
def concatter():
	doc = ""
	def doc_builder(word):
		# "nonlocal" tells Python to use the 'doc'
		# variable from the enclosing scope
		nonlocal doc
		doc += word + " "
		return doc
	return doc_builder

# save the returned 'doc_builder' function
# to the new function 'harry_potter_aggregator'
harry_potter_aggregator = concatter()
harry_potter_aggregator("Mr.")
harry_potter_aggregator("and")
harry_potter_aggregator("Mrs.")
harry_potter_aggregator("Dursley")
harry_potter_aggregator("of")
harry_potter_aggregator("number")
harry_potter_aggregator("four,")
harry_potter_aggregator("Privet")

print(harry_potter_aggregator("Drive"))
# Mr. and Mrs. Dursley of number four, Privet Drive
```

- Python has a keyword called [nonlocal](https://docs.python.org/3/reference/simple_stmts.html#nonlocal) that's required to modify a variable from an enclosing scope. Most programming languages don't require this keyword, but Python does.
- The whole point of a closure is that it's *stateful*. It's a function that "remembers" the values from the enclosing scope even after the enclosing scope has finished executing.
- It's as if you're saving the state of a function at a particular point in time, and then you can use and update that state later on.
- When not to use the `nonlocal` keyword: when the variable is mutable (such as a list, dictionary or set), and you are modifying its contents rather than reassigning the variable. You only need the `nonlocal` keyword if you are reassigning a variable instead of modifying its contents (which you must do to change immutable values such as strings and integers).

### Currying:

- Function [currying](https://en.wikipedia.org/wiki/Currying) is a specific *kind* of function transformation where we translate a single function that accepts multiple arguments into *multiple* functions that each accept a *single* argument.

```python
def sum(a):
  def inner_sum(b):
    return a + b
  return inner_sum

print(sum(1)(2))
# prints 3
```

- The `sum` function only takes a *single* input, `a`. It returns a *new* function that takes a single input, `b`. This new function when called with a value for `b` will return the sum of `a` and `b`. *We'll talk later about why this is useful.*

### Why Curry ?

- Well, currying is often used to **change a function's signature** to make it conform to a specific shape. For example:

```python
def colorize(converter, doc):
  # ...
  converter(doc)
  # ...
```

- `colorize` function accepts a function called `converter` as input, and at some point during its execution, it calls `converter` with a single argument. That means that it expects `converter` to accept exactly one argument. So, if I have a conversion function like this:

```python
def markdown_to_html(doc, asterisk_style):
  # ...
```

- I can't pass `markdown_to_html` to `colorize` because `markdown_to_html` wants *two* arguments. To solve this problem, I can curry `markdown_to_html` into a function that takes a single argument:

```python
def markdown_to_html(asterisk_style):
  def asterisk_md_to_html(doc):
    # do stuff with doc and asterisk_style...

  return asterisk_md_to_html

markdown_to_html_italic = markdown_to_html('italic')
colorize(markdown_to_html_italic, doc)
```

### Decorators:

- [Python decorators](https://book.pythontips.com/en/latest/decorators.html) are just [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function).

```python
def vowel_counter(func_to_decorate):
    vowel_count = 0
    def wrapper(doc):
        nonlocal vowel_count
        vowels = "aeiou"
        for char in doc:
            if char in vowels:
                vowel_count += 1
        print(f"Vowel count: {vowel_count}")
        return func_to_decorate(doc)
    return wrapper

@vowel_counter
def process_doc(doc):
    print(f"Document: {doc}")

process_doc("What")
# Vowel count: 1
# Document: What

process_doc("a wonderful")
# Vowel count: 5
# Document: a wonderful

process_doc("world")
# Vowel count: 6
# Document: world
```

- `@vowel_counter` line is "decorating" the `process_doc` function with the `vowel_counter` function. `vowel_counter` is called once when `process_doc` is defined with the `@` syntax, but the `wrapper` function that it returns is called every time `process_doc` is called. That's why `vowel_count` is preserved and printed after each time.
- Python decorators are just another (sometimes simpler) way of writing a higher-order function. These two pieces of code are *identical*:
- With Decorator

```python
@vowel_counter
def process_doc(doc):
    print(f"Document: {doc}")

process_doc("Something wicked this way comes")
```

- Without decorator

```python
def process(doc):
    print(f"Document: {doc}")

process_doc = vowel_counter(process)
process_doc("Something wicked this way comes")
```

### Args and Kwargs:

- In Python, [`*args` and `**kwargs`](https://book.pythontips.com/en/latest/args_and_kwargs.html) allow a function to accept and deal with a *variable* number of arguments.
  - `*args` collects positional arguments into a *tuple*
  - `**kwargs` collects keyword (named) arguments into a *dictionary*

```python
def print_arguments(*args, **kwargs):
    print(f"Positional arguments: {args}")
    print(f"Keyword arguments: {kwargs}")

print_arguments("hello", "world", a=1, b=2)
# Positional arguments: ('hello', 'world')
# Keyword arguments: {'a': 1, 'b': 2}
```

- Positional arguments are the ones you're already familiar with, where the order of the arguments matters. Like this:

```python
def sub(a, b):
    return a - b

# a=3, b=2
res = sub(3, 2)
# res = 1
```

- [Keyword arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments) are passed in by name. *Order does not matter*. Like this:

```python
def sub(a, b):
    return a - b

res = sub(b=3, a=2)
# res = -1
res = sub(a=3, b=2)
# res = 1
```

- Any positional arguments *must come before* keyword arguments. This will *not* work:

```python
sub(b=3, 2)
```

```python
def args_logger(*args, **kwargs):
    # ?
    counter = 1
    for args in args:
        print(f"{counter}. {args}")
        counter += 1
    for key in sorted(kwargs.keys()):
        print(f"* {key}: {kwargs[key]}")
```

- The `*args` and `**kwargs` syntax is great for decorators that are intended to work on functions with different [signatures](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function).
- The `log_call_count` function below doesn't care about the number or type of the decorated function's (`func_to_decorate`) arguments. It just wants to count how many times the function is called. However, it still needs to pass any arguments through to the wrapped function.

```python
def log_call_count(func_to_decorate):
    count = 0

    def wrapper(*args, **kwargs):
        nonlocal count
        count += 1
        print(f"Called {count} times")
        # The * and ** syntax unpacks the arguments
        # and passes them to the decorated function
        return func_to_decorate(*args, **kwargs)
    return wrapper
```

### Enums:

- Doing the admittedly weird `class` and `isinstance()` thing works, but it turns out, there's a better way in some cases. If you're trying to represent a fixed set of values (but not store additional data within them) [enums](https://docs.python.org/3/library/enum.html) are the way to go.

```python
from enum import Enum

Color = Enum('Color', ['RED', 'GREEN', 'BLUE'])
print(Color.RED)  # this works, prints 'Color.RED'
print(Color.TEAL) # this raises an exception
```

- Unfortunately, Python does *not* support sum types as well as some of the other [statically typed](https://developer.mozilla.org/en-US/docs/Glossary/Static_typing) languages.
- Python [does not enforce](https://docs.python.org/3/library/typing.html) your types before your code runs. That's why we need this line here to `raise` an `Exception` if a color is invalid:

```python
def color_to_hex(color):
    if color == Color.GREEN:
        return '#00FF00'
    elif color == Color.BLUE:
        return '#0000FF'
    elif color == Color.RED:
        return '#FF0000'
    # handle the case where the color is invalid
    raise Exception('Unknown color')
```

### Match stmt:

- Python has a `match` statement that tends to be a lot cleaner than a series of `if/else/elif` statements when we're working with a fixed set of possible values (like a sum type, or more specifically an enum):

```python
def get_hex(color):
    match color:
        case Color.RED:
            return "#FF0000"
        case Color.GREEN:
            return "#00FF00"
        case Color.BLUE:
            return "#0000FF"

        # default case
        # (invalid Color)
        case _:
            return "#FFFFFF"
```

### Functools Module: 
- ref: https://martinheinz.dev/blog/52
- functool module offers many useful higher order functions that act on or return other functions, which we can leverage to implement function caching, overloading, creating decorators and in general to make our code much more functional.
- experiments: https://github.com/sagnikc395/functools-explore

#### Caching :
- there are caching functions - `lru_cache`, `cache` and `cached_property`.
- `lru_cache` as the name suggests provides the least recently used cache of function results or in other words - memoization of results.
- can inspect the cache info of our function using the `cache_info` method and which shows number of cache hits or misses.
- Decorator also provides a `clear_cache` and a`cache_parameters` methods for invalidating cached results and inspecting parameters respectively.
- For more granular caching, can pass the parameter `typed=True` argument, which makes it so that arguments of different types are cached separately.
- Another caching decorator in `functools` is a function simply called `cache`. 
	- Simple wrapper on top of the `lru_cache` which will omit the `max_size` argument making it smaller and after as it doesn't need to evict old values.
- `cached_property` decorator 
	- used for caching the results of class attributes.
	- useful if we have property that is expensive to compute while also immutable.
	- Use Case: cache rendered HTML page which would get returned to user over-and-over again. Same could be done for certain database queries or long mathematical computation.
	- only runs on lookups, therefore allowing us to modify the attribute.
	- after the attribute is modified, the previously cached value won't be used , instead new value will be computed and cached.
#### comparing and ordering:
 - luckily, functools, module includes `@total_ordering` decorator that can help us with that. - all we need to do , is implement `__eq__` and one of the remaining methods and rest will be automatically providedd by the decorator.

#### partial:
- many external libraries and frameworks provide functions and interfaces that require us to pass in callback functions.
- What if we need to also pass in some arguments along with the callback functions.
	- thats where `functools.partial` comes in handy - `partial` can be used to freeze some (or all) of the function's arguments, creating new object with simplified function signatures.

