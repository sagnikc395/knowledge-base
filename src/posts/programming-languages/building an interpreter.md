---
title: Building an Interpreter from Scratch - Monkey
tags:
  - programming-languages
  - monkey
date: 1/14/25
---
- Building to parse and evaluate our own language called Monkey.
###  Design Spec:
- Monkey has the following features:
	- C-Like syntax 
	- variable bindings 
	- integers and booleans 
	- arithmatic expressions 
	- built-in functions 
	- first-class and higher-order functions 
	- closures
	- a string data structure 
	- an array data structure 
	- a hash data structure 
- let statements can also be used to bind functions to names.
- Monkey not only supports return statements. Implicit return values are also possible, which means we can leave out the return if we want to.
- Monkey also supports a special type of functions, called higher order functions. These are functions that take other functions as arguments.
- We can use functions as arguments in function calls. Functions in monkey are just values, like integers or strings.
- The interpreter will tokenize and parse Monkey source code in a REPL, build up the internal representation of the code called as Abstract Syntax Tree and then evaluate this tree.
- Few major parts of the interpreter:
	- lexer
	- parser
	- abstract syntax tree (AST)
	- internal object system 
	- evaluator.

### Lexing:
- Need: we need to represent our source code in other forms than text that are easier to work with. We are going to change the representation of our source code 2 times before we evaluate it.
```
	Source code -> Tokens -> Abstract Syntax Tree
```
- The first part i.e source code -> tokens is called as lexical analysis or lexing for short.
	- Done by a lexer (also called tokenizer or scanner).
- Tokens itself are small, easily categorizable data structures that are fed to the parser, which then turn the tokens into an "Abstract Syntax Tree"(AST).
- What exactly consist as a "token" varies between different lexer implementations. Some lexers only convert the "5" to an integer in the parsing stage, or even later, and not when constructing tokens.
- For our language we dont consider whitespace characters as tokens.
- A production ready lexer will also add the line number, column number and filename to a token -- for debugging purposes.
- Defining the Token structure:
	```go 
	type TokenType string 
	type Token struct {
		Type TokenType 
		Literal string
	}
	```
	- the "type" attribute is needed , so that we can distinguish between "integers" and "right bracket".
	- "literal" attribute is used so we can reuse it later to know the information whether a "number" token is a 5 or a 10.
	- we have defined a TokenType to be a string - can take a performance hit , as compared to `[]byte` , but on the flipside easier to debug without a lot of boilerplate and helper functions : we can just print a string.
	- Also there are a limited number of different token types , that we can define as possible TokenTypes as constants.
- Lexer:
	- `NewLexer()` returns a new instance of a lexer 
	- think of it as a state machine that returns the instance on top of it.
	- `position` field is used to access characters in input by using them as a index.
	- these 2 pointers will help us peek further into the input and look after the current character to see what comes up next.
	- `readChar()` methods makes use of these fields to make it easier to understand.
		- give us the next character and advanced our position in the input string.
		- First thing it does is to check whether we have reached the end of input.
		- If that is true, it will set l.ch to 0, ASCII for NULL, and signifies either we havent read anything yet or eof.
			- But if we haven't reached the end of input yet it will set l.ch to the next character by accessing `l.input[l.readPosition]`.
			- 