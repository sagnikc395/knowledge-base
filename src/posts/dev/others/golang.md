---
title: Go for Developers
date: 8/2/25
tags:
  - boot-dev
  - golang
---

### Variables:

#### Basic Variables:

- `bool`: a boolean value, either `true` or `false`
- `string`: a sequence of characters
- `int`: a signed integer
- `float64`: a floating-point number
- `byte`: exactly what it sounds like: 8 bits of data

- Declaring a variable the sad way:

```go
var mySkillIssues int
mySkillIssues. = 42
```

- The first line, `var mySkillIssues int`, defaults the `mySkillIssues` variable to its zero value, `0`. On the next line, `42` overwrites the zero value.

#### Short Variable Declarations:

- GOATed variable declaration:

```go
mySkillIssues := 42
```

- The walrus operator, `:=`, declares a new variable and assigns a value to it in one line. Go can infer that `mySkillIssues` is an `int` because of the `42` value. Yay [type inference](https://en.wikipedia.org/wiki/Type_inference)!
- When to use the Walrus Operator ?
  - The `:=`, (walrus operator) should be used instead of [var](https://go.dev/tour/basics/9) style declarations basically anywhere possible. The limitation is that `:=` can’t be used outside of a function (in the [global/package scope](https://dave.cheney.net/2017/06/11/go-without-package-scoped-variables) which we’ll talk about later).
- Type inference is based on the value being assigned.

#### Comments

- Go has two styles of comments:

```go
// This is a single line comment

/*
  This is a multi-line comment
  neither of these comments will execute
  as code
*/
```

#### Go is Statically Typed:

- Go enforces [static typing](https://developer.mozilla.org/en-US/docs/Glossary/Static_typing) meaning variable types are known *before* the code runs. That means your editor and the compiler can display type errors before the code is ever run, making development easier and faster.
- Contrast this with most dynamically typed languages like JavaScript and Python... Dynamic typing often leads to subtle bugs that are hard to detect. The code *must* be run to catch syntax and type errors. (sometimes in production if you're unlucky 😨)
- Two strings can be [concatenated](https://en.wikipedia.org/wiki/Concatenation) with the `+` operator. But the compiler will not allow you to concatenate a `string` variable with an `int` or a `float64`.

#### Compiled vs Interpreted:

- You can run a compiled program *without* the original source code. You don't need the compiler anymore after it's done its job. That's how most video games are distributed! Players don't need to install the correct version of `Go` to run a PC game: they just download the executable game and run it.
- With interpreted languages like Python and Ruby, the code is interpreted at [runtime](<https://en.wikipedia.org/wiki/Runtime_(program_lifecycle_phase)>) by a separate program known as the "interpreter". Distributing code for users to run can be a pain because they need to have an interpreter installed, and they need access to the source code.

#### Compilation Process

- Computers need machine code, they don’t understand English or even Go. We need to convert our high-level (Go) code into machine language, which is really just a set of instructions that some specific hardware can understand. In your case, your CPU.

- The Go compiler’s job is to take Go code and produce machine code, an `.exe` file on Windows or a standard executable on Mac/Linux.

- Go's program structure:
  - `package main` lets the Go compiler know that we want this code to compile and run as a standalone program, as opposed to being a library that’s imported by other programs.
  - `import "fmt"` imports the [`fmt` (formatting) package](https://pkg.go.dev/fmt) from the [standard library](https://pkg.go.dev/std). It allows us to use `fmt.Println` to print to the console.
  - `func main()` defines the `main` function, the entry point for a Go program.
- 2 kinds of bugs:
  - **Compilation Errors**: Occurs when code is compiled. It's generally better to have compilation error because they'll accidently make it into production. You can’t ship a program with a compiler error because the resulting executable won’t even be created.
  - **Runtime errors.** Occur when a program is running. These are generally worse because they can cause your program to crash or behave unexpectedly.

#### Same Line Declarations:

- We can declare multiple variables on the same line in golang.

```go
mileage, compnay := 80276, "Toyota"
```

#### Small Memmory Footprint:

- Go programs are fairly lightweight. Each program includes a small amount of extra code that's included in the executable binary called the [Go Runtime](https://go.dev/doc/faq#runtime). One of the purposes of the Go runtime is to clean up unused memory at runtime. It includes a [garbage collector](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) that automatically frees up memory that's no longer in use.
- As a general rule, Java programs use *more* memory than comparable Go programs. There are several reasons for this, but one of them is that Java uses a virtual machine to interpret bytecode at runtime and typically allocates more on the [heap](https://courses.grainger.illinois.edu/cs225/fa2022/resources/stack-heap/).
- On the other hand, Rust and C programs use slightly *less* memory than Go programs because more control is given to the developer to optimize the memory usage of the program. The Go runtime just handles it for us automatically.

#### Constants:

- Constants are declared with the `const` keyword. They can't use the `:=` short declaration syntax.

```go
const pi = 3.14159
```

- Constants can be primitive types like strings, integers, booleans and floats. They *can not* be more complex types like slices, maps and structs, which are types we will explain later.
- Constants must be known at compile time. They are *usually* declared with a static value.
- However, constants *can be computed* as long as the computation can happen at *compile time*.
- Eg:

```go
const firstName = "Lane"
const lastName = "Wagner"
const fullName = firstName + " " + lastName
```

- you *cannot* declare a constant that can only be computed at run-time like you can in JavaScript.

#### Comparing Go's Speed:

- Go is *generally* faster and more lightweight than interpreted or VM-powered languages like:
  - Python
  - JavaScript
  - PHP
  - Ruby
  - Java
- In terms of execution speed, Go does lag behind some other compiled languages like:
  - C
  - C++
  - Rust
- Go is a bit slower mostly due to its automated memory management, also known as the "Go runtime". Slightly slower speed is the price we pay for memory safety and simple syntax!

#### Formatting Strings in Go:

- Go follows the [printf tradition](https://cplusplus.com/reference/cstdio/printf/) from the C language. In my opinion, string formatting/interpolation in Go is *less* elegant than Python's f-strings, unfortunately.
  - [fmt.Printf](https://pkg.go.dev/fmt#Printf) - Prints a formatted string to [standard out](https://stackoverflow.com/questions/3385201/confused-about-stdin-stdout-and-stderr).
  - [fmt.Sprintf()](https://pkg.go.dev/fmt#Sprintf) - Returns the formatted string
- %v variant prints the Go syntax representation of a value , it's a nice default :

```go
s := fmt.Sprintf("I am %v years old", 10)
// I am 10 years old

s := fmt.Sprintf("I am %v years old", "way too many")
// I am way too many years old
```

- string:

```go
s := fmt.Sprintf("I am %s years old ","way too many")
```

- Integer:

```go
s := fmt.Sprintf("I am %d years old", 10)
// I am 10 years old
```

- Float:

```go
s := fmt.Sprintf("I am %f years old", 10.523)
// I am 10.523000 years old

// The ".2" rounds the number to 2 decimal places
s := fmt.Sprintf("I am %.2f years old", 10.523)
// I am 10.52 years old
```

#### Runes and String Encoding:

- In many programming languages (cough, C, cough), a "character" is a single byte. Using [ASCII](https://www.asciitable.com/) encoding, the standard for the C programming language, we can represent 128 characters with 7 bits. This is enough for the English alphabet, numbers, and some special characters.
- In Go, strings are just sequences of bytes: they can hold arbitrary data. However, Go also has a special type, [`rune`](https://go.dev/blog/strings), which is an alias for `int32`. This means that a `rune` is a 32-bit integer, which is large enough to hold any [Unicode](https://home.unicode.org/) code point.
- When you're working with strings, you need to be aware of the encoding (bytes -> representation). Go uses [UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoding, which is a variable-length encoding.

#### What does this mean ?

- 2 main takeaways here :
  1.  When you need to work with individual characters in a string, you should use the `rune` type. It breaks strings up into their individual characters, which can be more than one byte long.
  2.  We can include a wide variety of Unicode characters in our strings, such as emojis and Chinese characters, and Go will handle them just fine.

### Conditionals:

#### Conditionals:

- `if` statements in Go do not use parentheses around the condition:

```go
if height > 4 {
fmt.Println("You are tall enough !")
}
```

- else if and else are supported as we might expect:

```go
if height > 6 {
	fmt.Println("You are super tall!")
} else if height > 4 {
	fmt.Println("You are tall enough")
} else {
	fmt.Println("You are not tall enough !")
}
```

#### Initial Statement of an If Block:

- An `if` conditional can have an "initial" statement. The variable(s) created in the initial statement are *only* defined within the scope of the `if` body.
- Why to use this ?
  - bit shorter
  - limits the scope of the initialized variable(s) to the if block.

```go
if length := getLength(email);length < 1 {
	fmt.Println("Email is invalid")
}
```

#### Switch :

- Switch statements are a way to compare a value against multiple options. They are similar to if-else statements but are more concise and readable when the number of options is more than 2.
- Notice that in Go, the `break` statement is not required at the end of a `case` to stop it from falling through to the next `case`. The `break` statement is implicit in Go.

```go
func getCreator(os string) string {
	var creator string
	switch os {
		case "linux":
		creator = "Linus Torvalds"
		case "windows":
		creator = "Bill Gates"
		case "mac":
		creator = "A Steve"
		default:
		creator = "Unknown"
	}
	return creator
}
```

- If you *do* want a `case` to fall through to the next `case`, you can use the `fallthrough` keyword.

```go
func getCreator(os string) string {
    var creator string
    switch os {
    case "linux":
        creator = "Linus Torvalds"
    case "windows":
        creator = "Bill Gates"

    // all three of these cases will set creator to "A Steve"
    case "macOS":
        fallthrough
    case "Mac OS X":
        fallthrough
    case "mac":
        creator = "A Steve"

    default:
        creator = "Unknown"
    }
    return creator
}
```

- The `default` case does what you'd expect: it's the case that runs if none of the other cases match.

### Functions:

#### Functions:

- Functions in Go can take zero or more arguments.
- To make code easier to read, the variable type comes *after* the variable name.

```go
func sub(x int ,y int) int {
	return x - y
}
```

- Accepts two integer parameters and returns another integer.

#### Multiple Parameters

- When multiple arguments are of the same type, and are next to each other in the function signature, the type only needs to be declared after the last argument.

```go
func addToDatabase(hp, damage int, name string, level int) {
  // ?
}
```

#### Declaration Syntax

- Go's declarations are clear, you just read them left to right, just like you would in English.
- It's nice for more complex signatures, it makes them easier to read.

```go
f func(func(int,int) int, int) int
```

#### Passing Variables by Value:

- Variables in Go are passed by value (except for a few data types we haven't covered yet). "Pass by value" means that when a variable is passed into a function, that function receives a *copy* of the variable. The function is unable to mutate the caller's original data

```go
func main() {
	x := 5
	increment(x)
	fmt.Println(x)
}

func increment(x int) {
	x++
}
```

#### Ignoring Return Values:

- A function can return a value that the caller doesn't care about. We can explicitly ignore variables by using an underscore, or more precisely, the [blank identifier `_`](https://go.dev/doc/effective_go#blank).
- Even though `getPoint()` returns two values, we can capture the first one and ignore the second. In Go, the blank identifier isn't just a convention; it's a real language feature that completely discards the value.

#### Named Return Values:

- Return values may be given names, and if they are, then they are treated the same as if they were new variables defined at the top of the function.

- Named return values are best thought of as a way to document the purpose of the returned values.
- Use naked returns if it's obvious what the purpose of the returned values is. Otherwise, use named returns for clarity.

```go
func getCoords() (x, y int){
  // x and y are initialized with zero values

  return // automatically returns x and y
}
```

#### Benefits of Named Returns

- Good for Documentation (Understanding)
  - Named return parameters are great for documenting a function. We know what the function is returning directly from its signature, no need for a comment.
  - Named return parameters are particularly important in longer functions with many return values.

```go
func calculator(a, b int) (mul, div int, err error) {
    if b == 0 {
      return 0, 0, errors.New("can't divide by zero")
    }
    mul = a * b
    div = a / b
    return mul, div, nil
}
```

- Less Code (Sometimes)
  - If there are multiple return statements in a function, you don’t need to write all the return values each time, though you *probably* should.
  - When you choose to omit return values, it's called a *naked* return. Naked returns should only be used in short and simple functions.

#### Explicit Returns

- Even though a function has named return values, we can still explicitly return values if we want to.

```go
func getCoords() (x, y int){
  return x, y // this is explicit
}
```

- Using this explicit pattern we can even overwrite the return values:

```go
func getCoords() (x, y int){
  return 5, 6 // this is explicit, x and y are NOT returned
}
```

- Otherwise, if we want to return the values defined in the function signature we can just use a naked `return` (blank return):

```go
func getCoords() (x, y int){
  return // implicitly returns x and y
}
```

- Eg:

```go
package main

func yearsUntilEvents(age int) (yearsUntilAdult, yearsUntilDrinking, yearsUntilCarRental int) {
	yearsUntilAdult = 18 - age
	if yearsUntilAdult < 0 {
		yearsUntilAdult = 0
	}
	yearsUntilDrinking = 21 - age
	if yearsUntilDrinking < 0 {
		yearsUntilDrinking = 0
	}
	yearsUntilCarRental = 25 - age
	if yearsUntilCarRental < 0 {
		yearsUntilCarRental = 0
	}
	return yearsUntilAdult,yearsUntilDrinking,yearsUntilCarRental
}

```

#### Early Returns:

- Go supports the ability to return early from a function. This is a powerful feature that can clean up code, especially when used as guard clauses.
- Guard Clauses leverage the ability to `return` early from a function (or `continue` through a loop) to make nested conditionals one-dimensional. Instead of using if/else chains, we just return early from the function at the end of each conditional block.

```go
func divide(dividend, divisor int) (int, error) {
	if divisor == 0 {
		return 0, errors.New("can't divide by zero")
	}
	return dividend/divisor, nil
}
```

- A better and succient example of using the guard clauses:

```go

func getInsuranceAmount(status insuranceStatus) int {
	if !status.hasInsurance() {
	return 1
	}
	if status.isTotaled() {
		return 10000
	}
	if !status.isDented() {
		return 0
	}
	if status.isBigDent() {
		return 270
	}
	return 160
}
```

- The example above is *much* easier to read and understand. When writing code, it’s important to try to reduce the cognitive load on the reader by reducing the number of entities they need to think about at any given time.

#### Functions as Values:

- Go supports [first-class](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) and higher-order functions, which are just fancy ways of saying "functions as values". Functions are just another type -- like `int`s and `string`s and `bool`s.

```go
func add(x,y int) int {
	return x + y
}

func mul(x,y int ) int {
	return x * y
}
```

- This can be written into a aggregate function that accepts a function as its 4th argument:

```go
func aggregate(a, b, c int, arithmetic func(int, int) int) int {
  firstResult := arithmetic(a, b)
  secondResult := arithmetic(firstResult, c)
  return secondResult
}
```

#### Anonymous Functions:

- Anonymous functions are true to form in that they have *no name*. They're useful when defining a function that will only be used once or to create a quick [closure](<https://en.wikipedia.org/wiki/Closure_(computer_programming)>).

- Let's say we have a function `conversions` that accepts another function, `converter` as input:

```go
func conversions(converter func(int) int, x, y, z int) (int, int, int) {
	convertedX := converter(x)
	convertedY := converter(y)
	convertedZ := converter(z)
	return convertedX, convertedY, convertedZ
}
```

- We can define a function normally and then pass it in by name , by usually easier to just define it anonymosuly:

```go
func double(a int) int {
    return a + a
}

func main() {
    // using a named function
	newX, newY, newZ := conversions(double, 1, 2, 3)
	// newX is 2, newY is 4, newZ is 6

    // using an anonymous function
	newX, newY, newZ = conversions(func(a int) int {
	    return a * a
	}, 1, 2, 3)
	// newX is 1, newY is 4, newZ is 9
}
```

#### Defer:

- The `defer` keyword is a fairly unique feature of Go. It allows a function to be executed automatically *just before* its enclosing function returns. The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.

- Deferred functions are typically used to clean up resources that are no longer being used. Often to close database connections, file handlers and the like.

```go

func GetUsername(dstName, srcName string) (username string, err error) {
	// Open a connection to a database
	conn, _ := db.Open(srcName)

	// Close the connection *anywhere* the GetUsername function returns
	defer conn.Close()

	username, err = db.FetchUser()
	if err != nil {
		// The defer statement is auto-executed if we return here
		return "", err
	}

	// The defer statement is auto-executed if we return here
	return username, nil
}

```

- Defer is a great way to **make sure** that something happens before a function exits, even if there are multiple return statements, a common occurrence in Go.

#### Block Scope:

- Unlike Python, Go is *not* function-scoped, it's [block-scoped](https://go.dev/ref/spec#Declarations_and_scope). Variables declared inside a block are only accessible within that block (and its nested blocks). There's also the package scope. We'll talk about packages later, but for now, you can think of it as the outermost, nearly global scope.

```go
package main

// scoped to the entire "main" package (basically global)
var age = 19

func sendEmail() {
    // scoped to the "sendEmail" function
    name := "Jon Snow"

    for i := 0; i < 5; i++ {
        // scoped to the "for" body
        email := "snow@winterfell.net"
    }
}
```

- It's a bit unusual, but occasionally you'll see a plain old explicit block. It exists for no other reason than to create a new scope.

### Structs:

#### structs in go

- We use [structs](https://go.dev/ref/spec#Struct_types) in Go to represent structured data. It's often convenient to group different types of variables together. For example, if we want to represent a car we could do the following:

```go
type car struct {
	brand      string
	model      string
	doors      int
	mileage    int
}
```

-  creates a new struct type called `car`. All cars have a `brand`, `model`, `doors` and `mileage`.
- Structs in Go are often used to represent data that you might use a dictionary or object for in other languages.

#### nested structs in go

- Structs can be nested to represent more complex entities:

```go
type car struct {
  brand string
  model string
  doors int
  mileage int
  frontWheel wheel
  backWheel wheel
}

type wheel struct {
  radius int
  material string
}
```

- They can then be accessed using the . operator :

```go
myCar := car{}
myCar.frontWheel.radius = 5
```

#### anonymous structs in go

- An anonymous struct is just like a normal struct, but it is defined without a name and therefore cannot be referenced elsewhere in the code.

- To create an anonymous struct, just instantiate the instance immediately using a second pair of brackets after declaring the type:

```go
myCar := struct {
  brand string
  model string
} {
  brand: "Toyota",
  model: "Camry",
}
```

- You can even nest anonymous structs as fields within other structs:

```go
type car struct {
  brand string
  model string
  doors int
  mileage int
  // wheel is a field containing an anonymous struct
  wheel struct {
    radius int
    material string
  }
}
```

- _prefer named structs_. Named structs make it easier to read and understand your code, and they have the nice side-effect of being reusable. I sometimes use anonymous structs when I *know* I won't ever need to use a struct again. For example, sometimes I'll use one to create the shape of some JSON data in HTTP handlers.
- If a struct is only meant to be used once, then it makes sense to declare it in such a way that developers down the road won’t be tempted to accidentally use it again.

#### Embedded Structs:

- Go is not an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) language. However, embedded structs provide a kind of *data-only* inheritance that can be useful at times. Keep in mind, Go doesn't support classes or inheritance in the *complete* sense, but embedded structs are a way to elevate and **share fields between struct definitions.**

```go
type car struct {
  brand string
  model string
}

type truck struct {
  // "car" is embedded, so the definition of a
  // "truck" now also additionally contains all
  // of the fields of the car struct
  car
  bedSize int
}
```

- Unlike nested structs, an embedded struct's fields are accessed at the top level like normal fields.
- Like nested structs, you assign the promoted fields with the embedded struct in a [composite literal](https://golang.org/ref/spec#Composite_literals).

```go
lanesTrack := truck{
	bedSize: 10,
	car: car {
	brand : "Toyota",
	model: "Camry",
	},
}

fmt.Println(lanesTrack.brand)
fmt.Println(lanesTrack.model)
```

- While Go is **not** object-oriented, it does support methods that can be defined on structs. Methods are just functions that have a receiver. A receiver is a special parameter that syntactically goes *before* the name of the function.

```go
type rect struct {
  width int
  height int
}

// area has a receiver of (r rect)
// rect is the struct
// r is the placeholder
func (r rect) area() int {
  return r.width * r.height
}

var r = rect{
  width: 5,
  height: 10,
}

fmt.Println(r.area())
// prints 50
```

- A receiver is just a special kind of function parameter. In the example above, the `r` in `(r rect)` could just as easily have been `rec` or even `x`, `y` or `z`. By convention, Go code will often use the first letter of the struct's name.
- Receivers are important because they will, as you'll learn in the exercises to come, allow us to define interfaces that our structs (and other types) can implement.

#### Memory Layout:

- In Go, structs sit in memory in a contiguous block, with fields placed one after another as defined in the struct. For example this struct:

```go
type stats struct {
	Reach    uint16
	NumPosts uint8
	NumLikes uint8
}
```

- The order of the fields in a struct can have a big impact on memory usage. This is the same struct as above , but poorly designed:

```go
type stats struct {
	NumPosts uint8
	Reach uint16
	NumLikes uint8
}
```

- ![[Screenshot 2025-03-23 at 9.52.48 PM.png]]
- Notice that Go has "aligned" the fields, meaning that it has added some padding (wasted space) to make up for the size difference between the `uint16` and `uint8` types. It's done for execution speed, but it can lead to increased memory usage.

- However, if you have a specific reason to be concerned about memory usage, aligning the fields by size (largest to smallest) can help. You can also use the [reflect package](https://pkg.go.dev/reflect) to debug the memory layout of a struct:

```go
typ := reflect.TypeOf(stats{})
fmt.Printf("Struct is %d bytes\n", typ.Size())
```

#### Empty Structs:

- [Empty structs](https://dave.cheney.net/2014/03/25/the-empty-struct) are used in Go as a [unary](https://en.wikipedia.org/wiki/Unary_operation) value.

```go

// anonymous empty struct type
empty := struct{}{}

// named empty struct type
type emptyStruct struct{}
empty := emptyStruct{}
```

- The cool thing about empty structs is that they're the smallest possible type in Go: they take up **zero bytes of memory**

### Interfaces:

#### Interfaces in Go:

- [Interfaces](https://go.dev/tour/methods/9) allow you to focus on what a type does rather than how it's built. They can help you write more flexible and reusable code by defining behaviors (like methods) that different types can share. This makes it easy to swap out or update parts of your code without changing everything else.
- Interfaces are just collections of method signatures. A type "implements" an interface if it has methods that match the interface's method signatures.

```go
type shape interface {
  area() float64
  perimeter() float64
}

type rect struct {
    width, height float64
}
func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perimeter() float64 {
    return 2*r.width + 2*r.height
}

type circle struct {
    radius float64
}
func (c circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c circle) perimeter() float64 {
    return 2 * math.Pi * c.radius
}
```

- When a type implements an interface, it can then be used as that interface type:

```go
func printShapeData(s shape) {
	fmt.Printf("Area: %v - Perimeter: %v\n",s.area(),s.perimeter())
}
```

- Because we say the input is of type `shape`, we know that any argument must implement the `.area()` and `.perimeter()` methods.
- As an example, because [the empty interface](https://go.dev/tour/methods/14) doesn't require a type to have any methods at all, every type automatically implements the empty interface, written as:

```go
interface{}
```

#### Interfaces Implementation:

- Interfaces are implemented *implicitly*.
- A type never declares that it implements a given interface. If an interface exists and a type has the proper methods defined, then the type automatically fulfills that interface.
- A quick way of checking whether a struct implements an interface is to declare a function that takes an interface as an argument. If the function can take the struct as an argument, then the struct implements the interface.
- A type implements an interface by implementing its methods. Unlike in many other languages, there is no explicit declaration of intent, there is no "implements" keyword.
- Implicit interfaces *decouple* the definition of an interface from its implementation. You may add methods to a type and in the process be unknowingly implementing various interfaces, and *that's okay*.
-  interfaces are collections of method signatures. A type "implements" an interface if it has all of the methods of the given interface defined on it.

```go
type shape interface {
  area() float64
}
```

- If a type in your code implements an `area` method, with the same signature (e.g. accepts nothing and returns a `float64`), then that object is said to *implement* the `shape` interface.

```go
type circle struct{
	radius int
}

func (c circle) area() float64 {
  return 3.14 * c.radius * c.radius
}
```

#### Multiple Interfaces:

- A type can implement any number of interfaces in Go. For example, the [empty interface](https://go.dev/tour/methods/14), `interface{}`, is *always* implemented by every type because it has no requirements.

```go
package main

import "fmt"

func (e email) cost() int {
	// ?
	if ! e.isSubscribed {
		return len(e.body) * 5
	}
	return len(e.body) * 2
}

func (e email) format() string {
	// ?
	var s string
	if ! e.isSubscribed {
		s = fmt.Sprintf("'%s' | Not Subscribed",e.body)
	} else {
		s = fmt.Sprintf("'%s' | Subscribed",e.body)
	}
	return s
}

type expense interface {
	cost() int
}

type formatter interface {
	format() string
}

type email struct {
	isSubscribed bool
	body         string
}

```

#### Name Your Interface Parameters:

- Consider the following interfaces:

```go
type Copier interface {
	Copy(string,string) int
}
```

- We know the function signature expects 2 string types, but what are they? Filenames? URLs? Raw string data? For that matter, what the heck is that `int` that's being returned?
- Let's add some named parameters and return data to make it more clear.

```go
type Copier interface {
  Copy(sourceFile string, destinationFile string) (bytesCopied int)
}
```

#### Type Assertions in Go:

- When working with interfaces in Go, every once-in-awhile you'll need access to the underlying type of an interface value. You can cast an interface to its underlying type using a [type assertion](https://go.dev/tour/methods/15).
- The example below shows how to safely access the `radius` field of `s` when `s` is an unknown type:
  - we want to check if `s` is a `circle` in order to cast it into its underlying concrete type
  - we know `s` is an instance of the `shape` interface, but we do not know if it's also a `circle`
  - `c` is a new `circle` struct cast from `s`
  - `ok` is `true` if `s` is indeed a `circle`, or `false` if `s` is NOT a `circle`

```go
type shape interface {
	area() float64
}

type circle struct {
	radius float64
}

c, ok := s.(circle)
if !ok {
	// log an error if s isn't a circle
	log.Fatal("s is not a circle")
}

radius := c.radius
```

-
