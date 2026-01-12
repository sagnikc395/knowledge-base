---
title: getting our house clean
tags:
  - rust
  - PL
  - basic-programming
date: 21/6/25
---
### hello world 
- start by making a directory to store our Rust code.
- Make a new source file and call it main.rs. Rust files always end with the .rs extension. If we are using more than 1 word in our filename, convention is to use an underscore to seperate them.

### Anatomy of a Rust Program:
- main function is special. It always is the first code that runs in every executable Rust program.
- Function body is wrapped in `{}`. Rust requires curly brackets around all function bodies. It’s good style to place the opening curly bracket on the same line as the function declaration, adding 1 space in between.
- println calls a Rust macro. If it was a function call instead it would be entered as println (i.e without the !).
	- using a ! means that we are calling a macro instead of a normal function and the macros don't always follow the same rules as functions.
- Secondly we pass the string `hello, world` as an argument to println! and the string is printed to the screen.
- Third, we end the line with a semicolon`;`, which indicates that this expression is over and the next one is ready to begin.

### Compiling and Running are separate steps
- Before running a Rust program, we must compile it using the Rust compiler by entering the rustc command and passing it the name of our source file.
- Rust is a ahead-of-time compiled language, meaning we can compile a program and give the executable to someone else and they can run it even without having Rust installed. 
- Just compiling with rustc is fine for simple program, but as our project grows, we will want to manage all the options and make it easy to share our code. 
- Everything is a tradeoff in language design.

### Cargo:
- Cargo is Rust's build system and package manager. Most rustacenas use this tool to manage their rust projects because Cargo handles a lot of tasks for us, such as building our code, downloading the libraries our code depends on and building those libraries.
- Can create a new project using:
```shell
cargo new project_name
```
- This will create a new project called project_name is a new directory, and cargo will generate 2 files and one directory for us: Cargo.toml file and the src directory with the main.rs file inside.
- It will also initialized a new Git repo along with a `.gitignore` file. Git files won't be generate if we can run cargo new within an existing Git repo.
#### Cargo.toml:
- Config File for Cargo 
```toml
[package]
name = ""
version = ""
edition = ""

[dependencies]
```
- `[package]` is a section heading that indicates that the following statements are configuring a package. 
- `[dependencies]` is the start of a section for us to list any of our project's dependencies. In Rust, packages of code are referred to as crates.
- Cargo expects the source files to live inside the `src` directory. The top-level project directory is just for README files, config files etc. - anything not related to code. Using Cargo helps us in organizing our projects.

#### Cargo build, Cargo run, cargo check:
- Creates an executable file in target/debug/hello_cargo rather than in our current directory. Since the default build is a debug build , Cargo will put the binary in the directory named debug.
- Running `cargo build` for the first time will also cause Cargo to create a new file at the top level: `Cargo.lock`. This file will keep track of the exact versions of dependencies in our project.
- cargo run can be used to compile the code and run the resultant executable all in 1 command.
- cargo check quickly checks our code to make sure it compiles but it doesn't produce an executable.

#### Building for Release:
- When our project is finally ready for release, we can use `cargo build --release` to compile it with optimizations. This will create an executable in target/release instead of target/debug.
- The optimizations makes our Rust code run faster, but turning them on lengthens the time it takes for our program to compile.

