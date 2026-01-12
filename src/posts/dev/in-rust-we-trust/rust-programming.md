---
title: in rust we trust
tags:
  - rust
  - systems-programming
  - PL
date: 21/6/25
---
### Why Rust ?
- wanted to learn a systems programming language that I can be productive in and is memory safe and has industrial support for jobs.

### Who Rust is For ?
#### teams of developers:
- Productive collaborative tool among large teams of developers with varying levels of systems programming knowledge.
- In Rust, the compiler plays a gatekeeper role by refusing to compile code with elusive bugs including concurrency bugs.
- Rust also brings contemporary developer tools to the systems programming world:
	- Cargo -> dependency manager and build tool, makes adding, compiling and managing dependencies painless and consistent across the Rust ecosystem.
	- Rustfmt formatting tool ensures a consistent coding style across developers.
	- rust-analyzer powers IDE integration for code completion and inline error messages.
#### students:
- for students and those who are interested in learning about systems concepts.

#### people who value speed and stability
- Rust is for people who crave speed and stability in a language. 
- Speed in terms of both quikcly how Rust code can run and the speed at which Rust lets us write programs.
- Rust's compiler checks ensures stability through feature additions and refactoring.
- By striving for zero cost abstractions -> higher level features that compile to lower-level code as fast as code written manually - Rust endeavours to make safe code be fast as well.

### Overview of the Chapters:
- [[Chapter1]] installing 'Rust', writing a 'Hello world' using Cargo the package manager and build tool.
- [[Chapter2]] hands on introduction to writing a program in Rust, having us build a number guessing game.
- [[Chapter3]] Rust features and basic primitives 
- [[Chapter4]] Learn about Rust's ownership system.
- [[Chapter5]] Structs and Methods 
- [[Chapter6]] Enums , match expressions and if let control flow construct 
	> Both structs and enums help us making custom data types in Rust.
- [[Chapter7]] Rust's Module System and Privacy rules for organising code and its public API 
- [[Chapter8]] Common collections data structures that the standard library provides like vectors, strings and hash maps.
- [[Chapter9]] Rust's error handling philosophy and techniques 
- [[Chapter10]] Generics , traits and lifetimes , gives us the power to define code that applies to multiple types.
- [[Chapter11]] Testing in Rust (required even with Rust's safety gurantees to ensure our program is logically correct)
- [[Chapter12]] Building our own implementation of a subset of functionality of the `grep` command line tool that will search for text within files.
- [[Chapter13]] Closures and Iterators : functional programming concepts used in Rust.
- [[Chapter14]] Examine Cargo more in depth and best practices for sharing our libraries with others.
- [[Chapter15]] Smart pointers that the standard library provides and the traits that enable their functionality
- [[chapter16]] Different models of concurrent programming and how Rust does fearless concurrency
- [[Chapter17]] Rust's async and await syntax, along with tasks, futures, and streams and their lightweight concurrency model.
- [[Chapter18]] Rust's idioms compare to OOP principles 
- [[Chapter19]] Patterns and pattern matching, powerful ways of expression ideas throughout Rust programs.