---
title: Learning Memory Management
date: 12/1/25
tags:
  - boot-dev
  - c
  - memory-management
  - fundamentals
---

### Memory Management:

- Understanding how your *software* runs on *hardware* is important for writing fast, performant code. In this course we'll be talking all about one of the main aspects of software performance: **memory management**.
- Goals:
  1.  **Understand how and where programs store data in memory**. Variables, functions and objects don't get to exist for free. Where do they live as your code runs?
  2.  **Learn how to make programs more efficient**. Most performance related problems in backend software are memory related (at least in my experience). Learn how it all works so you can troubleshoot and optimize.
  3.  **Practice programming in a lower-level language**. C gets you much closer to the hardware than Python, JavaScript, or Go. By writing C, you'll learn a lot about how software works closer to the metal.
  4.  **Learn about garbage collection (and build your own)**. You will likely work in a garbage collected language at some point, whether that's Python, Go, JavaScript or something else. Best to understand what trade-offs are being made.

### C Basics:

- Hello world in C:

```c
#include <stdio.h>

int main() {
    printf("Starting the Sneklang interpreter...\n");
    return 0;
}

```

-  Python interpreter then executes that file top-to-bottom. If you have a `print()` at the top level, then it will print something.
- The entire file is *interpreted line by line*, *but that's not how C works*.
- The simplest C program is essentially:

```c
int main() {
    return 0;
}
```

- - A function named `main` is *always* the entry point to a [C program](https://www.youtube.com/watch?v=tas0O586t80) (unlike Python, which enters at the top of the file).
- `int` is the return type of the function and is short for "integer". Because this is the `main` function, the return value is the [exit code](https://en.wikipedia.org/wiki/Exit_status) of the program. `0` means success, anything else means failure.
  - You'll find a lot of abbreviations in C because 1) programmers are lazy, and 2) it used to matter how many bytes your source code was.
- The opening bracket, `{` is the start of the function's body (C ignores whitespace, so indentation is just for style, not for syntax)
- `return 0` returns the `0` value (an integer) from the function. Again, this is the exit code because it's the `main` function.
  - `0` represents "nothing bad happened" as a return value.
- The pesky `;` at the end of `return 0;` is required in C to terminate statements.
- The closing bracket, `}` denotes the end of the function's body.
- Printing in C:
- It feels very different coming from Python, but printing in C is done with a function called `printf` from the [`stdio.h`](https://www.ibm.com/docs/en/zos/2.4.0?topic=files-stdioh-standard-input-output) (standard input/output) library with a lot of weird formatting rules. To use it, you need an `#include` at the top of your file:

```c
#include <stdio.h>
```

- C is a compiled language:
  - But in C, it crashes *before it can even run*. If there's a problem, the compiler tells us before the program even starts.
  - Now... C doesn't tell us about all the possible problems (read: skill issues) that might arise in our program. But it does tell us about *some* of them.

- In C, there are two ways to write comments:

```c
// This is a single-line comment

/*
This is a multi-line comment
I can just keep adding lines
and it will still be a comment
*/
```

- `/*` and `*/` are used to denote the beginning and end of a multi-line comment.
- Basic Types:
  - `int` - An integer
  - `float` - A floating point number
  - `char` - A character
  - `char *` - An array of characters (more on this later... if you think about it, sounds kinda like a string doesn't it?)
- Most programming languages these days (even compiled ones) have a built-in `string` type of some sort. C... doesn't.
- Instead, C strings are just arrays (like lists) of characters. We'll talk more about the specifics when we talk about arrays and pointers later, but for now know that this is how you get a "string" in C:

```c
char *msg_from_dax = "You still have 0 users";
```

- Instead of:

```python
print(f"Hello, {name}. You're {age} years old.")
```

- We have to tell C *how* we want particular values to be printed using "format specifiers".
- Common [format specifiers](https://cplusplus.com/reference/cstdio/printf/#:~:text=Parameters-,format,-C%20string%20that) are:
  - `%d` - digit (integer)
  - `%c` - character
  - `%f` - floating point number
  - `%s` - string (`char *`)

```c
printf("Hello, %s. You're %d years old.\n", name, age);
```

- The `print()` function in Python automatically adds a [newline character](https://en.wikipedia.org/wiki/Newline) (`\n`) at the end of the string. In C, we have to do this manually.

```c
printf("Hello, world!\n");
```

- Compilation Types:
  - We are probably familiar with the idea of `type`s from Python, but C does them quite a bit differently.

- In Python, it's OK (but still disgusting) to change the type of a variable:

```python
x = 12345
x = "wow, a new type"
x = False
x = None
x = "ok a string again :'("
```

- In C, changing the type of an existing variable is not allowed:

```c
int main() {
    char *max_threads = "5";

    // call badcop
    // this is illegal
    max_threads = 5;
}
```

### Variables:

- As we talked about, variables cannot change *types*:

```c
int main() {
    int x = 5;
    float x = 3.14; // error
}
```

- However, a variable's *value* can change:

```c
int main() {
    int x = 5;
    x = 10; // this is ok
    x = 15; // still ok
}
```

### Constants:

- But what if we want to create a value that *can't* change? We can use the [`const` type qualifier](https://en.cppreference.com/w/c/language/const).

```c
int main() {
    const int x = 5;
    x = 10; // error
}
```

### Functions:

- In C, functions specify the types for their arguments and return value.

```c
float add(int x, int y) {
    return (float)(x + y);
}
```

### Void:

- In C, there's a special type for function signatures: [`void`](https://en.wikipedia.org/wiki/Void_type). There are two primary ways you'll use `void`:
- To explicitly state that a function takes no arguments:

```c
int get_integer(void) {
    return 42;
}
```

- When a function doesn't return anything:

```c
void print_integer(int x) {
    printf("this is an int: %d", x);
}
```

- It's important to note that `void` in C is not like `None` in Python. It's not a value that can be assigned to a variable. *It's just a way to say that a function doesn't return anything or doesn't take any arguments.*

### Unit Testing In C:

- In particular, we'll be using the [µnit (munit)](https://nemequ.github.io/munit/) testing framework. It's a simple, lightweight testing framework for C.
- Take a look at the `main.c` file. You'll notice it's read-only: you can't change the tests (that would make it too easy to cheat- ha!). It [`#include`s](https://en.wikipedia.org/wiki/Include_directive) `exercise.h` at the top.
- Open `exercise.h` and you'll see the *function prototype* (signature) of the function you need to write. In C:
- `.c` files contain the implementation (c code).
- [`.h` files](https://utat-ss.readthedocs.io/en/master/c-programming/c_h_files.html) are header files that contain the function prototypes.
- To import code from another file, you include the `.h` file.
  - `exercise.c` includes `exercise.h`.
  - `main.c` includes `exercise.h`.

- This allows `main.c` to call the functions implemented in `exercise.c`.

### Math Operators:

- All the same operators you'd expect exist in C:

```c
x + y;
x - y;
x * y;
x / y;
```

- If you're coming from Python, `+=`, `-=`, `*=`, `/=` are all the same.
- In addition, there are also the [`++` and `--` operators](https://en.cppreference.com/w/cpp/language/operator_incdec):

```c
x++; // += 1
x--; // -= 1
```

- These increment (`++`) and decrement (`--`) operators can be used in two forms: postfix and prefix.

- **Postfix (`x++` or `x--`)**: The value of `x` is used in the expression first, and then `x` is incremented or decremented. For example:

```c
int a = 5;
int b = a++; // b is assigned 5, then a becomes 6
```

- **Prefix (`++x` or `--x`)**: `x` is incremented or decremented first, and then the new value of `x` is used in the expression. For example:

```c
int a = 5;
int b = ++a; // a becomes 6, then b is assigned 6
```

### if statements:

- If statements are the most basic form of control flow in C: very similar to other languages. Basic syntax:

```c
if (x > 3) {
    printf("x is greater than 3\n");
}
```

- If/else/else if are also available:

```c
if (x > 3) {
    printf("x is greater than 3\n");
} else if (x == 3) {
    printf("x is 3\n");
} else {
    printf("x is less than 3\n");
}
```

### ternary statements:

- Like JavaScript, C has a ternary operator:

```c
int a = 5;
int b = 10;
int max = a > b ? a : b;
printf("max: %d\n", max);
// max: 10
```

- The entire line is a single expression that evaluates to one value. Here's how it works:
  - `a > b` is the condition
  - `a` is the final value if the condition is true
  - `b` is the final value if the condition is false
  - The entire expression (`a > b ? a : b`) evaluates to either `a` or `b`, which is then assigned to `max` in our example.

### type sizes:

- In C, the "size" (in memory) of a type is not guaranteed to be the same on all systems. That's because the size of a type is dependent on the system's architecture. For example, on a 32-bit system, the size of an `int` is usually 4 bytes, while on a 64-bit system, the size of an `int` is usually 8 bytes - of course, you never know until you run `sizeof` with the compiler you plan on using.
- However, some types are always guaranteed to be the same. Here’s a list of the basic C data types along with their typical sizes in bytes. Note that sizes can vary based on the platform (e.g., 32-bit vs. 64-bit systems):
  - **`char`**
    - Size: **1 byte**
    - Represents: Single character.
    - Notes: Always 1 byte, but can be signed or unsigned.
  - **`float`**
    - Size: **4 bytes**
    - Represents: Single-precision floating-point number.
  - **`double`**
    - Size: **8 bytes**
    - Represents: Double-precision floating-point number.

### sizeof:

- C gives us a way to check the size of a type or a variable: [`sizeof`](https://en.cppreference.com/w/c/language/sizeof).
- You can use `sizeof` like a function (although, technically it's a [unary operator](https://en.wikipedia.org/wiki/Unary_operation), but that distinction is generally only useful for winning *super important* internet arguments).
- We'll use the `sizeof` operator in the next few lessons to give us insight into the memory layout of different types in C. This will be particularly useful as we move deeper into C, and essential for understanding pointers.
- The [`size_t` type](https://en.cppreference.com/w/c/types/size_t) is a special type that is guaranteed to be able to represent the size of the largest possible object in the target platform's address space (i.e. can fit any single, non-struct value inside of it).
- It's also the type that `sizeof` returns.

```c
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>

int main() {
  // Use %zu is for printing `sizeof` result

   printf("sizeof(char)    = %zu\n", sizeof(char));
    printf("sizeof(bool)    = %zu\n", sizeof(bool));    // Changed %b to %zu
    printf("sizeof(int)     = %zu\n", sizeof(int));     // Changed %d to %zu
    printf("sizeof(float)   = %zu\n", sizeof(float));   // Changed %f to %zu
    printf("sizeof(double)  = %zu\n", sizeof(double));  // Changed %f to %zu
    printf("sizeof(size_t)  = %zu\n", sizeof(size_t));
}
```

### for loop:

- A `for` loop in C is a control flow statement for repeated execution of a block of code. Very similar to Python, but with a different syntax.
- The syntax of a `for` loop in C consists of three main parts:
  1.  Initialization
  2.  Condition
  3.  Final-expression.
- There is no "for each" (iterables) in C. For example, there is no way to do:

```python
for car in cars:
    print(car)
```

- instead, we have to iterate over the numbers of indices in a list, and then we can access the item using the index.
- Parts of For loop:
  1.  **Initialization**
  - Executed only once at the beginning of the loop.
  - Is typically used to initialize the loop counter: `int i = 0;` for example
  2.  **Condition**
  - Checked before each iteration.
  - If `true`, execute the body. If `false`, terminate the loop
  - Often checks to ensure `i` is less than some value: `i < 5;` for example
  3.  **Final-expression**
  - Executed after each iteration of the loop body.
  - Can be used to update the loop counter or run any other code: `i++` for example
  4.  **Loop Body**
  - The block of code that is executed while the condition is true.

### while loop:

- A `while` loop in C is a control flow statement that allows code to be executed repeatedly based on a given boolean (`true`/`false`) condition. The loop continues to execute as long as the condition remains true.

```c
	while(condition) {
		//body
	}
```

- Parts of for loop:
  1.  **Condition**
  - Checked before each iteration.
  - If `true`, execute the body. If `false`, terminate the loop
  2.  **Loop Body**
  - The block of code that is executed while `condition` is true.
- The condition is evaluated *before* the execution of the loop body.
- If the condition is `false` initially, the loop body will never even start.
- If the condition never becomes `false`, you will get an infinite loop.

### do-while loop:

- A `do while` loop in C is a control flow statement that allows code to be executed repeatedly based on a given boolean condition.
- Unlike the `while` loop, the `do while` loop checks the condition after executing the loop body, so the loop body is **always** executed at least once.

```c
do {
    // Loop Body
} while (condition);
```

1. **Loop Body**
   - The block of code that is executed *before* checking the condition, and then repeatedly as long as the condition is true.
2. **Condition**:
   - Checked *after* each iteration.
   - If `true`, execute the body again.
   - If `false`, terminate the loop

- The `do while` loop guarantees that the loop body is executed at least once, even if the condition is false initially.
- The most common scenario you will see a do-while loop used is in [C macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html) - they let you define a block of code and execute it exactly once in a way that is safe across different compilers, and ensures that the variables created/referenced within the macro do not leak to the surrounding environment.

### pragma once and header guards:

- We saw how `.h` header files are used in a previous lesson, but before we go further let's talk about a potential issue you might run into: multiple inclusions. If the same header file gets included more than once, you can end up with some nasty errors caused by redefining things like functions or structs.
- One simple solution (and the one we'll use for the rest of this course) is `#pragma once`. Adding this line to the top of a header file tells the compiler to include the file only once, even if it's referenced multiple times across your program.

```c
// my_header.h

#pragma once

struct Point {
    int x;
    int y;
};
```

- Another common way to avoid multiple inclusions is with include guards, which use preprocessor directives like this:

```c
#ifndef MY_HEADER_H
#define MY_HEADER_H

// some cool code

#endif
```

- This method works by defining a unique [macro](https://gcc.gnu.org/onlinedocs/cpp/Macros.html) for the header file. If it’s already been included, the guard prevents it from being processed again.

### struct:

- *[Structs](https://en.cppreference.com/w/c/language/struct) solve this.* Here's an example of the syntax:

```c
struct Human {
    int age;
    char *name;
    int is_alive;
};
```

- Unfortunately, there are a few different ways to [initialize a struct](https://en.cppreference.com/w/c/language/struct_initialization), I'll give you an example of each using this struct:

```c
struct City {
  char *name;
  int lat;
  int lon;
};
```

- Zero struct:

```c
int main() {
  struct City c = {0};
}
```

- Positional Initializer:

```c
int main() {
  struct City c = {"San Francisco", 37, -122};
}
```

- Designated Initializer:
  - It's easier to read (has the field names)
  - If the fields change, you don't have to worry about breaking the ordering

```c
int main() {
  struct City c = {
    .name = "San Francisco",
    .lat = 37,
    .lon = -122
  };
}
```

- Accessing a field in a struct is done using the `.` operator.

```c
struct City c;
c.lat = 41; // Set the latitude
printf("Latitude: %d", c.lat); // Print the latitude
```

- Remember how we can **not** return multiple values from a function in C? However, we *can* accomplish effectively the same thing by returning a `struct`:

```c
struct Human become_older(int age, char *name) {
  struct Human h = {.age = age, .name = name};
  h.age++;
  return h;
}
```

- Eg:

```c

#include "coord.h"

struct Coordinate new_coord(int x, int y, int z) {
  struct Coordinate coord = {.x = x, .y = y, .z = z};
  return coord;
}

struct Coordinate scale_coordinate(struct Coordinate coord, int factor) {
  // ?
  struct Coordinate sc = {coord.x = coord.x*factor,
  coord.y = coord.y*factor,
  coord.z = coord.z*factor};
  return sc;
}
```

### Typedef:

- you're probably tired of typing `struct Coordinate` over and over again, and you're wondering "How can I make my struct types easier to write, like `int`?"
- Good news! C can do this with the [`typedef` keyword](https://en.cppreference.com/w/c/language/typedef).

```c
struct Pastry {
    char *name;
    float weight;
};
```

- This can also be written as:

```c
typedef struct Pastry {
    char *name;
    float weight;
} pastry_t;
```

- Now, you can use `pastry_t` wherever before you would have used `struct Pastry`. *Note: The `_t` at the end is a common convention to indicate a type.*
- In fact, you can optionally skip giving the struct a name:

```c
typedef struct {
    char *name;
    float weight;
} pastry_t;
```

- In this case you'd only be able to refer to the type as `pastry_t`. In general, I *do* give the struct an actual name (e.g. `Pastry`), but I only use the `typedef`'d type. *We'll be using this convention in this course.*
- using typedef to define types:

```c
// coord.h
#pragma once

typedef struct Coordinate {
  int x;
  int y;
  int z;
} coordinate_t;

coordinate_t new_coord(int x, int y, int z);
coordinate_t scale_coordinate(coordinate_t coord, int factor);

//coord.c
#include "coord.h"

coordinate_t new_coord(int x, int y, int z) {
   coordinate_t coord = {.x = x, .y = y, .z = z};

  return coord;
}

coordinate_t scale_coordinate(coordinate_t coord, int factor) {
  coordinate_t p = {coord.x *= factor, coord.y *= factor, coord.z *= factor};
  return p;
}
```

### sizeof:

- As we saw earlier, [`sizeof`](https://en.cppreference.com/w/c/language/sizeof) can be used to view the size of a type (for once, programmers thought of a name that was actually helpful). But this isn't just true of builtin types like `int` or `float`, you can also use it to find out the size of `struct`s!

```c
printf("Size of coordinate_t: %zu bytes\n", sizeof(coordinate_t));
```

- Structs are stored contiguously in memory one field after another.

- Mixed type structs:

```c
typedef struct Human{
    char first_inital;
    int age;
    double height;
} human_t;
```

- **Wait**! What is that `padding` doing here?

- It turns out that CPUs don't like accessing data that isn't [aligned](https://en.wikipedia.org/wiki/Data_structure_alignment) (incredible oversimplification alert, since obviously CPUs don't have feelings (yet)), so C inserts padding to maintain alignment (e.g. every 4 bytes in this example).

### struct padding:

- There are a bunch of complicated rules and heuristics that different compilers use to determine how to lay out your structs. But to oversimplify:
  1.  The fields of a struct are laid out in memory contiguously (next to each other)
  2.  Structs can vary in size depending on how they are laid out.
- C is a language that aims to give tight control over memory, so the fact that you can control the layout of your structs is a feature, not a bug.
- Compilers + modern hardware + optimizations + skill issues means that sometimes what you *think* the computer is going to do isn't exactly what it actually *does*. That said, C is designed to get you close to the machine and allows you to dig in and figure out what's going on if you want to for a specific compiler or architecture.
- As a *rule of thumb*, ordering your fields from largest to smallest will help the compiler minimize padding:

```c
typedef struct {
  char a;
  double b;
  char c;
  char d;
  long e;
  char f;
} poorly_aligned_t;

typedef struct {
  double b;
  long e;
  char a;
  char c;
  char d;
  char f;
} better_t;
```

![[Screenshot 2025-01-14 at 12.27.17 PM.png]]

![[Screenshot 2025-01-14 at 12.27.48 PM.png]]

### Memory:

- Before we talk about pointers, we should talk about variables and memory in general. Here are some useful (albeit hand-wavy) mental models:

> Variables are human readable names that refer to some data in memory.

> Memory is a big array of bytes, and data is stored in the array.![[Screenshot 2025-01-14 at 12.26.45 PM.png]]

- A variable is a human readable name that refers to an address in memory, which is an index into the big array of bytes. Here's a diagram:

- In C, you can print the address of a variable by using the address-of-operator: `&`. Here's an example:

```c
#include <stdio.h>

int main() {
  int age = 37;
  printf("The address of age is: %p\n", &age);
  return 0;
}

// The address of age is: 0xfff8
```

- _Note: The [`%p` format specifier](https://en.cppreference.com/w/c/io/fprintf#:~:text=The%20following%20format%20specifiers%20are%20available%3A) will format a pointer (memory address) to be printed._

### What is an Address ?

- So I mentioned in the last lesson that memory can be thought of as a big array of bytes, and each byte has an address.
- That's true, and the beauty is that each address is *literally just a number*. It's not some *mortal* address like "1234 Elm St." or "1600 Pennsylvania Ave." It's **just a number**.
- You might be thinking, "Hey, if it's just a number, why does it look all disgusting like `0xfff8`?"
- That's because `0xfff8` *is* just a number. But:
  1.  It's written in [`hexadecimal`](https://www.wikipedia.org/wiki/Hexadecimal) (base 16) instead of decimal (base 10).
  2.  It's a pretty big number, so it's not very human readable. `0xfff8` is the same as `65,528` in decimal.

### Virtual Address:

- your code probably doesn't have direct access to the physical RAM in your computer.

- Instead, your operating system provides a layer of abstraction called **virtual memory**. Virtual memory makes it seem like your program has direct access to all the memory on the machine, even if it doesn't.
  - **Physical Memory**: The actual RAM sticks in your computer.
  - **Operating System**: The software that manages access to the physical memory.
  - **Your Program**: When it runs, it becomes a [`process`](<https://en.wikipedia.org/wiki/Process_(computing)>) and is given access to a chunk of virtual memory by the operating system.
  - **Virtual Memory**: This abstracted chunk of memory that your program can use.
- ![[Screenshot 2025-01-14 at 12.35.21 PM.png]]
- By only giving processes access to a chunk of virtual memory, the operating system can do some cool things:
  1.  **Isolation**: One process can't access the memory of another process.
  2.  **Security**: The operating system can prevent processes from accessing certain parts of memory.
  3.  **Simplicity**: Developers don't have to worry about managing physical memory and the memory of other processes.
  4.  **Performance**: The operating system can optimize memory access depending on the hardware and needs of the program. For example, by moving data between physical memory and the hard drive.
- At the end of the day, your program has direct access to a virtual chunk of memory.

### Pointers:

- Now that you understand how memory is laid out in an array, a lot of the mystery behind pointers should be gone. Put simply: **a pointer is just a variable that stores a memory address**. It's called a pointer, because it "points" to the address of a variable, which stores the actual data held in that variable.
- A pointer is declared with an asterisk (`*`) after the type. For example, `int *`.

```c
int age = 37;
int *pointer_to_age = &age;
```

- To get the address of a variable so that we can store it *in* a pointer variable, we can use the address-of operator (`&`).
- Why of Pointers ?
  - To illustrate the usefulness of pointers, let's pretend we want to pass a collection of data into a function. Within that function, we want to modify the data. In Python, we could use a class to store the data, and pass an instance of that class into the function:
    - You'll notice that `coordinate_update_x` doesn't update anything, but `coordinate_update_and_return_x` does because it returns a new copy of the struct.
    - In C, structs are passed by *value*. That's why updating a field in the struct does *not* change the original struct from the `main` function.
    - To get the change to "persist", we needed to return the updated struct from the function (a new copy).
    - The memory address of the struct that went *in* to `coordinate_update_and_return_x` was not the same as the address of the struct that was returned. Again, because we created a copy.
- Declare a pointer to an integer:

```c
int *pointer_to_something;
```

- Get the address of a variable:

```c
int meaning_of_life = 42;
int *pointer_to_mol = &meaning_of_life;
// pointer_to_mol now holds the address of meaning_of_life
```

- Dereferencing Pointers:
- Oftentimes we have a pointer, but we want to get access to the data that it points to. Not the address itself, but the value stored at *that* address.
- We can use an asterisk (`*`) to do it. The `*` operator dereferences a pointer.

```c
int meaning_of_life = 42;
int *pointer_to_mol = &meaning_of_life;
int value_at_pointer = *pointer_to_mol;
// value_at_pointer = 42
```

- _It can be a touch confusing, but remember that the asterisk symbol is used for two different things:_
  1.  Declaring a pointer type: `int *pointer_to_thing;`
  2.  Dereferencing a pointer value: `*pointer_to_thing = 20;`
-
