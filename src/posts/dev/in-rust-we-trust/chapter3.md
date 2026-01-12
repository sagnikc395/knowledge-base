---
title: Ownership in Rust
tags:
  - PL
  - rust
  - ownership
  - memory-management
  - memory-safety
date: 5/7/25
---
- Ownership is the most unique feature in Rust and has deep implications for the rest of the language.
- It enables Rust to make meory safety gurantees without needing a garbage collector, so important to understand how ownership works.
- Also cover several related features like:
	- borrowing 
	- slices 
	- how Rust lays data out in memory

### What is Ownership ?
- Ownership is a set if rules that govern how a Rust program manages the memory.
- All programs have to manage the way they use a computer's memory while running.
	- Some languages have GC that regularly looks for no-longer-used memory as the program runs.
	- In other languages, the programmer must explicitly allocate and free the memory.
- Rust uses a **third approach**
	- Memory is managed through a system of ownership with a set of rules that the compiler checks.
	- If any of the rules are violated -> the program won't compile. 
	- None of the features of ownership will slow down our program while its running.

### Stack and Heap:
- For most programming lang, they dont require us to think about the stack and the heap very often.
- Rust being a systems programming language, whether a value is on the stack or the heap affects how the language behaves and why we would have to make certain decisions.
- Both stack and the heap are parts of memory available to our code to use at runtime , but they are structured in different ways.
- **Stack**:
	- Stores values in the order it gets them and removes the value in the opposite order. LIFO policy.
	- Adding data is called pushing onto the stack , and removing data is calling popping off the stack.
	- All the data stored on the stack must have a known , fixed size. 
	- Data with a unknown size at compile time or a size that might change must be stored on the heap instead.
- **Heap**:
	- Less organized , when we put data on the heap, we request a certain amount of space. The memory allocator finds an empty spot in the heap that is big enough , marks it as being in use, and returns a pointer - address of that location.
	- Since the pointer to the heap is a known, fixed size, we can store the pointer on the stck, but when we want the actual data, we must follow the pointer.

- Pushing to the stack is faster than allocating on the heap since the allocator never has to search for a plate to store new data -> that location is always at the top os the stack.
- Allocating on the heap requires more work since the allocator must first find a big enough space to hold the data and then perform bookkeeping to prepare for the next allocation.

- Keeping track of what parts of code are using what data on the heap, minimizing the amount of duplicate data on the heap, and cleaning up unused data on the heap so we don't run out of space are all problems that ownership addresses.


### Ownership Rules:
- **Each value in Rust has a owner**.
- **There can only be one owner at a time**.
- **When the owner goes out of scope, the value will be dropped**.

### Variable Scope
TBD 