---
title: Typescript
tags:
  - typescript
  - 100xdevs
date: 2/17/26
---
### Typescript and Types of Languages
- There are various types of languages, there are compiled and loosely typed language.
- another distinction we can make in languages.
	- Eg: Python,JS -> loosely typed languages , C++, Java -> strongly typed language
- In JS, we not only are able to change the value but also the type.
	- In C++ ,it is not allowed, like integer cannot be assigned to integer.
- Starting out coding, loosely typed projects are easier to learn and there is a lower learning curve and easier to get dopamine hits than statically typed language.
- In production, however you want very strong type checking and here the compiler will help and let them know if there is a problem with the code.
	- Less runtime errors.
- JS is a great language, but since it doesnt have types , it is not that great for production.
	- TS was introduced as a new language to add types on top of JS.
- Strict syntactical superset of JS that adds type information on top of it.
- A native JS code , without very strong type checking will almost certainly work with Typescript.
- How does TS code run ?
	- TS code does not work on your browser.
		- TS never runs at all form line to line, JS is the runtime language.
	- TS gets transpiled down to JS.
		- `typescript -> tsc -> javascript -> {browser,nodejs}`
	- it will do all the static checks , this will give a file that will get run in the browser.
	- tsc compiler is supposed to ensure that there is no type errors in the code.
	- if we have an error in our code, it will fail during compilation.
- TS easy to catch at compile time , and the code does what it is supposed to do.
- `tsconfig.json` 
	- config of our typescript
	- `target`
		- specifies the ECMAScript target version to which the Typescript compiler will compile the Typescript code.
	- `rootDir`
		- where should the compiler look for `.ts` files. Good practice is to keep it in the `src` folder.
	- `outDir`
		- where should the compiler look for spit out `.ts` files.
	- `noImplicitAny`
		- To prevent `any` use on the codebase.
	- `removeComments`
		- Whether or not to include comments in the final `js` file.
- `tsc -b` command to generate the corresponding js files from the ts files.
- "use strict" is something that makes our code more strict.
- basic types in typescript:
	- Number 
	- string 
	- boolean 
	- null
	- undefined 
- Typescript can do type inference 
	- we dont have to always give it a return type each time , typescript compiler knows and can infer it 

### Types and Interfaces:
- Interfaces 
	- how to assign types to objects ? 
	- basically a way to combine multiple things into a single object 
	- interfaces have another property that we can implement interfaces as a class
- Types
	- very similar to interfaces
	- let us aggregate data together 
	- but they let us do more composable things than interfaces.
	- Types cannot be used to implement classes.
	- Intersection:
		- what if we want a type that has every property of multiple `types` and `interfaces`
		- use an intersection of types for that 
- Diff bw interfaces and types? 
	- types let us do ors and ands , whereas interfaces let us extend a class.
	- interfaces can't express unions, mapped types or conditional types. Type aliases can express any type.
	- Interfaces can use extends, types can't.
	- When we are working with objects that inherit from each pother, use interfaces. extends makes TS type checker run slightly faster than using &.
	- Interfaces with the same name in the same scope merge their declarations leading to unexpected bugs.
	- Type aliases have an implicit index signature of `Record<PropertyKey,unknown>` , which comes up occasionally.
### Arrays in TS
- If we want to access arrays in TS, simple as adding a annotation next to the type.
- `number[]`
- or `Array<number>` 
- both of them works.


### Enums
- Are a feature that allow us to define a level of named constraints.
- The concept behind enumerations is to create human-readable way to represent a set of constant values , which might otherwise be represented as numbers or strings.
- evaluated at compile times to check this and let us know the error in advance in the types.
- something we use when we know that are a limited set of constrained, constant values.
- the final value stored at runtime is still a number.(default value is 0)
### Generics 
- generics enable us to create components that work with any data type while still providing compile-time type safety.
### Imports and Exports 
- TS follows the ES6 module system using import and export statements to share code between different files.

### Typescript Advance APIs:
#### Pick:
- Allows us to create a new type by selecting a set of properties (keys) from an existing type (Type).
- Image if we have an user model , with several properties, but for a user profile display, we only need a subset of these properties.
#### Partial:
- Makes all properties of a type optional, creating a type with the same properties but each marked as optional.
#### readonly 
- when we have an configuration object  that should not be altered after initialization, making it `ReadOnly` ensures its properties cannot be changed.

#### Record and Map
- Record lets us give a cleaner type to objects.
- Easier way to deal with objects.
- maps gives an even fancier way

#### Exclude
- In a function that can accept several types of inputs , but we want to exclude specific types form being passed to it.
- 