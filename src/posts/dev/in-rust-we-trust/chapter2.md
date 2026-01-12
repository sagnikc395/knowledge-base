---
title: Common Programming Concepts
tags:
  - rust
  - PL
  - basic-programming
date: 29/6/25
---
- covers concepts that appear in almost every programming language and how they work in Rust.
- none of them are unique to Rust, but using them in the context of Rust and explain the conventions around using these concepts.
- learn about variables, basic types, functions, comments and control flow. These foundations will be in every Rust program and learning them early will give us a strong core to start from.

### Variables and Mutability:
- Variables are immutable by default in Rust. Many nudges in Rust that give us to write our code in a way that takes advantage of the safety and easy concurrency that Rust offers. 
- However, we still have the option to make our variables mutable.
- When a variable is immutable , once a value is bound to a name, we can't just simply change that value.
- Mutability can be very useuful , and can make our code more convinient to write. Although variables are immutable by default, we can make them mutable by adding `mut` in front of the variable name. Adding `mut` also conveys the intent to future readers of the code that other parts of the code will be changing this variable's value.
```rust
fn main() {
	let mut x = 5;
	println!("The value of x is : {x}");
	x = 6;
	println!("The value of x is : {x}");
}
```

### Constants :
- Constants are values that are bound to a name and are not allowed to change, but there are a few differences between constants and variables.
- First , not allowed to use `mut` with constants. Constants aren't just immutable by default - they are always immutable. We declare constants using the `const` keyword instead of the `let` keyword and the type of the value must be annotated.
- Constants can be declared in any scope, including the global scope, making them useful for values that many parts of code need to know about.
- Constants may be only set to a constant expression, not the result of a value that could only be computed at runtime.
```rust 
const THREE_HOURS_IN_SECONDS: u32 = 60 *60 * 3 ; 
```
- Rust's naming convention for constants is to use all uppercase with underscores between words.
- The compiler is able to evaluate a limited set of operations at compile time, which lets us choose to write out this value in a way that's easier to understand and verify , rather than setting this constant to the value 10800.
- Constants are valid for the entire time a program runs, within the scope in which they were declared. This property makes constants useful for values in our application domain that multiple parts of the program might need to know about it, like the maxm num of points any plaer of a game is allowed to earn, or the speed of light.
- Naming hardcoded values used throughout our program as constants is useful in conveying the meaning of that value to future maintainers of the code. It also helps to have only one place in our code that would need to change if the hardcoded value needed to be updated in the future.

### Shadowing:
- We can declare a new variable with the same name as a previous variable -> Rustecean will say that the first variable is shadowed by the second, which means that the second variable is what the compiler will see when we use the name of the variable.
- Shadowing is different from marking a variable as `mut` since we'' get a compile-time error if we accidentally try to reassign to this variable without using the `let` keyword. By using `let`, we can perform a few transformations on a value, but have the variable as immutable after those transformations have been completed.
```rust

fn main() {
let x = 5;
let x = x + 1 ;

{
	let x = x* 5;
	println!("The value of x in the inner scop is : {x}");
}

println!("The value of x is :{x}");
}
```

- The other difference between mut and shadowing is that because we are effecitvily creating a new variable when we use the let keyword again, we can change the type of the value but reuse the same name.
```rust

let spaces = "   ";
let spaces = spaces.len();
```

- However, if we use a mutable type for spaces variable, and assign to `spaces.len()` , we would get an error saying we are mutating the variable's type.

### Data Types:
- Every value in Rust is of a certain data type, which tells Rust what kind of data is being specified so it knows how to work with that data.
- Rust is a statically typed language, which means that it must know the types of all variables at compile time. The compiler can usually infer what type we want to use based on the value and how we use it.
- In cases when many types are possible, like we converted a `String` to a numeric type using `parse` we must add a type annotation:
```rust
let guess: u32 = "42".parse().expect("Not a number!");
```
- If we dont add the type information, Rust will complain that the compiler needs more information and then error out.

### Scalar Types:
- Represents a single value. Rust has 4 primary scalar types:
	- integers
	- floating-point
	- booleans
	- characters
- Integer Types:
	- number without a fractional component.
	- Each variant can be either signed or unsigned and has a explicit size. Signed and unsigned refer to whethter its possible for the number to be negative - in other words, whether the number needs to have a a sign with it(signed) or whether it will only ever be positive and can therefore be represented without a sign(unsigned).
	- isize and usize types depend on the architecture of the computer on what our program is running on, denoted as "arch".
- Floating Types:
	- 2 primitive types for floating-point numbers, which are numbers with decimal points.
	- Rust's floating point types are f32 and f64, which are 32 bits and 64 bits in size resp.
	- Default type is f64 because on modern CPUs, its roughly the same speed as f32 but is capable of more precision.
- Numeric Operations:
	- Rust supports basic mathmatical operations we would expect fro all the number types: addn, subtraction, multiplication , div and remainder.
	- Integer division truncates towards zero to the nearest integer.
	- Each expression uses a mathematical operator and evaluates to a single value , which is then bound to a variable.
- Boolean Type:
	- Boolean type in Rust has 2 possible values: true and false.
	- Booleans are only 1 byte in size.
	- Boolean type in Rust is specified using `bool`.
- Character Type:
	- `char` type is the language's most primitive alphabetic type.
	- We specify `char` literals with single quotes, as opposed to string literals, which use double quotes.
	- Rust's `char` type is 4 bytes in size and represents a Unicode scalar value, meaning it can represent a lot more than just ASCII.

### Compound Types:
- Compound types can group multiple values into 1 type. 
- Rust has 2 primitive compound types:
	- Tuples 
	- Arrays 
#### Tuple Type:
- Tuple is a general way to group together a number of values with a variety of types into 1 compound type.
- Tuples have fixed length: once declared, they cannot grow or shrink in size.
- We create tuples by writing a comma-seperated list of values inside parentheses.
- Each position has a type, and that types of the different values in the tuple don't have to the same.
- Variable `tup` will bind to the entire tuple because a tuple is considered a single compound element.
- To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value.
- Tuple without any values has a special name, `unit`. This value and its corresponding type are both written `()` and represent an empty value or an empty return type.
- Expressions implicitly return the unit value if they don't return any other value.

#### Array Type:
- Another way to have a collection of multiple values is with a array.
- Unlike a tuple, every element of an array must have the same type.
- Unlike list in Python, arrays in Rust have a fixed length.
- We write the values in an array as a comma separated list inside square brackets.
- Arrays are useful when we want our data allocated on the stack , rather than on the heap.
- Also useful when we want to ensure we always have a fixed number of elements.
- A vector is a similar collection type provided by the standard library that is allowed to grow or shrink in size.
- We write a array's type using square brackets with the type of each element, a semicolon and then the number of elements in the array.
```rust 
let a : [i32;5] = [1,2,3,4,5];
```
- For init an array to contain the same value for each element, by specifying initial value:
```rust 
let a = [3;5];
```

- An array is a single chunk of memory of a known , fixed size that can be allocated on the stack. We can access elements of an array using indexing:
```rust 
let first = a[0];
```

### Functions:
- Lots of places where functions are used in Rust to isolate behaviour.
- Rust code uses snake case as the conventional style for function and variable names, in which all letters are lowercase and underscores seperates the words.
- We define a function in Rust by entering `fn` followed by a function name and a set of parentheses.
- Curly brackets tell the compiler where the function body begins and ends.
- We can call any function we have defined by entering its name followed by a set of parentheses. 
	- Since `another_function` is defined in the program, it can be called from inside the `main` function.
- Rust doesnt care where you define your functions, only that they are defined somewhere in a scope that can be seen by the caller.
#### Parameters:
- We can define functions to have parameters, which are special variables that are part of a function's signature. When a function has parameters, we can provide it with concrete values for those parameters.
- Concrete values are called arguments.
- In function signatures, we must declare the type of each parameter. This is a deliberate decision in Rust's design:
	- requiring type annotations in function definitions means the compiler almost never needs us to use them elsewhere in the code to figure out what type we mean.
	- Compiler also is able to give more helpful error messages if it knows what types the function expects.
- When defining multiple parameters, separate the parameter declarations with commas.

#### Statements and Expressions:
- Function bodies are made up of a series of statements optionally ending in an expression.
- Since Rust is a expression based language, this is an important distinction to understand. Other lanaguages don't have the same distinctions.
- **Statements** -> Instructions that perform some action and do not return a value.
- Expressions -> evaluate to a resultant value.
- Function definitions are also statements; the entire preceding example is a statement in itself.
	- Statements dont return values, therefore we can't assign a `let` statement to another variable.
	- `let x = (let y = 5) + 1`; is wrong as `let y` doesn't return a value, so there isn't anything for x to bind to.
- Expressions evaluate to a value and make up most of the rest of the code that we'll write in Rust.
	- calling a function is an expression 
	- calling a macro is an expression 
	- a new scope block created with curly brackets is an expression.
- **Expressions do not include ending semicolons. If we add a semicolon to the end of an expression, we turn it into a statement, and it will then not return a value**.

#### Functions with Return Values:
- Functions can return values to the code that calls them.
- We don't name return values, but we must declare their type after an arrow `->`.
- In Rust, the return value of the function is synonymous with the value of the final expression in the block of the body of a function.
- We can return early from a function by using the `return` keyword and specifying a value, but most functions return the last expression implicitly.

### Comments:
- Single line comments are //
- Multiple line comments are /* \*/. 
- Another type of comment called as documentation comments.

### Control Flow:
- ability to run some code depending on whether a condition is true and to run some code repeatedly while a condition is true are basic building blocks in most programming languages.

#### if Expressions:
- Allows us to branch our code depending on conditions.
- We provide a condition and then state ,"If this condition is met, run this block of code. If the condition is not met, do not run this block of code"
- All if expressions start with the keyword if , followed by a condition.
- We place the block of code to execute if the condition is true immediately after the condition inside the curly brackets.
- Blocks of code associated with the conditions in `if` expressions are sometimes called arms, just like arms in `match` expressions.

#### else if expressions:
- we can use multiple conditions by combining if and else in an `else if` expression.
- tbh using too many `else if` expression can clutter your code, so if having more than one, might consider to refactor code.
- Another powerful Rust branching construct mechanism is called `match` for these cases.

#### using if in a let stmt:
- Since `if` is an expression , we can use it on the right side of a `let` statement to assign the outcome to a variable.
- Since blocks of code evaluate to the last expression in them , and numbers by themselves are also expressions. This means the values that have the potential to be results from each arm of the if must be the same type.
- However the type of the if expressions has to be the same type and Rust needs to know at compile time what type the `number` variables is.
- Knowing the type of `number` lets the compiler verify the type is valid everywhere we use `number`. Rust wouldn't be able to do that if the type of `number` was only determined at runtime.


### Loops:
- Often useful to execute a block of code more than once. For this task, Rust provides several loops, which will run through the code inside the loop body to the end and start back immediately back at the beginning.

#### Repeating code with loop:
- `loop` keyword tells Rust to execute a block of code over and over again forever or until we explicitly tell it to stop.
- Fortunately provides a way to break out of loop using the `break` keyword within the loop to tell the program when to stop executing the loop.
- Another keyword `continue` in a loop tells the program to skip over any remaining code in this iteration of the loop and go to the next iteration.


#### Returning Values from Loops:
- One of the uses of a `loop` is to retry an operation we know might fail,like checking if a thread has completed its job or not.
- We might also need to pass the result of that operation out of the loop to the rest of the code.
- To do this, we can add the value we want returned after the break expression we use to stop the loop.
- We can also `return` from inside a loop. While `break` only exits from the current loop, `return` always exits the current function.

#### loop labels for checking for multiple loops:
- If we have loops within loops, `break` and `continue` apply to the innermost loop at that point.
- We can optionally specify a loop label on a loop that we can then use with `break` or `continue` to specify that those keywords apply to the labelled loop instead of the innermost loop.

#### conditional loops with while:
- A program will often need to evaluate a condition within a loop.
- while the condition is true, the loop will then run. 
- When the condition ceases to be true, the program calls break,stopping the loop.
- using a `while` loop for this seems ideal.
- This construct eliminates a lot of nesting that would be necessary if we would have used `loop` ,`if`, `else` and `break` and its cleaner way to write.

#### looping through a collection with for:
- while we can also use `while` to run over a collection, its much easier to use for loop and much cleaner syntax.
- Also using the while loop approach is error prone : we could cause the program to panic if the index value or test condition is incorrect.
- Ex: if we changed the definition of the `a` array to have 4 elements but forgot to update conditions , the code would panic.
- Also slow, because the compiler adds runtime code to perform the conditional check of whether the index is within the bounds of the array on every iteration through the loop.
- Using the for loop, we wouldn't need to remember to change any other code if we had change the number of values in the array.
- Safety and conciseness of `for` loops make them the most commonly used loop construct in Rust. Even in situations in which we want to run some code a certain number of times, most Rustaceans would use a `for` loop. 
	- The way to do that would be to use a `Range` , provided by the standard library , which generates all the numbers in sequence starting from one number and ending before another number.