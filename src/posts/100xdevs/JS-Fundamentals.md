---
title: Javascript Fundamentals
tags:
  - projects
  - javascript
  - 100xdevs
date: 1/19/26
---
###  course notes for 100xDev Javascript Fundamentals.
-  why languages ?
	- computer has ram and storage.
	- whenever we have application locally resides in the SSD
	- when we run something -- it runs in RAM
	- the current things in RAM, other things in SSD 
	- what exactly goes to RAM? Some hardware and circuits - machine at the lowest level only understands a bunch of numbers 
	- RAM doesnt understand programming languages -> represented by 0s and 1s.
	- Using something called compilers -> high level code , compiled to 0s and 1s. by the compiler. Much easier to run for loops, 0s and 1s. High level need of a programming language.
	- Every language has a compiler which convers the developer code into binary.
	- Compilers -> converts high level developer code into binary
- Interpreted vs compiled languages 
	- C++ is compiled -> compiles the code into binary by the compiler
	- JS is interpreted directly. No specific compilation step
	- Goes line by line ; doesn't worry about high level compilation of the whole thing
		-  usually goes line by line 
		- can run partially if the error comes later
- why JS >> Other languages in some use-cases
	- browsers can only understand HTML/CSS/JS.
	- Due to Node.js , Javascript can also be used for "Backend Development".
	- Javascript is loosely typed and it allows us to changes the types of the variables.
	- Project might have runtime errors -> leads to use of Typescript.
		- makes js more static -> same things that we see here, added into Javascript.
	- Strict vs Dynamic Languages
- Single Threaded nature of JS 
	- JS is a single threaded language.
	- the number of cores -> one of the specs of a new machine.
	- one single core -> run code at a single time.
	- the more the number of cores that we have, the more the number of processes that we can run.
	- there is something called context switching -> not everything needs the RAM right now.
	- It is some place that can run some code at the single time.
	- Cannot run parallely.
	- JS is always restricted to a single core.
		- cannot split our program to 2 cores , to split your loads and reduce load -> making it more optimal.
		- This is why it is considered to be a bad language for scalable systems.
		- Practically, JS runs line by line and only one line runs at a time. Go lets your create goroutines, JS doesn't.
- Simple Primitives in JS(number, strings, booleans)
	- covered in the repo.
- Complex Primitives in JS(arrays, objects)
	- arrays -> storage items of the same / different types.
	- objects -> key/value pairs of items and custom values.
	- arrays dont have to be of objects and can be of differnt types mixed together.
- Functions in JS
	- lets us abstract out logic in our program.
	- take arguments in an input
	- return a value as an output
	- can think of them as an independent program that is supposed to do something given an input.
	- functions can take other functions as input -> callbacks.
- Callback functions, event loop, callback queue, asynchronous programming 
	- callback functions -> function take other functions as inputs 
	- can change what function to get called, changed and pass the function as an argument.
	- passing a functions as an arguments.
	- inside the function, we are calling back some other functions 
	- that's why its named as call back function.
	- Eg: setTimeout -> takes a function and calling it after sometime is a callback
	- Single Threaded -> only one thread available for the runtime to use 
	- Non blocking call -> if we make an expensive network call / db call -> it will defer the call until the thread is free to do the execution.
- Callback Hell and Promises 
- Basic JS APIs
	- JS refresher and practice for JS.
- Classes 
	- to abstract away repeated logic to keep an instance of an object 
	- can add properties and methods on the instance
	- giving a structure that is reusable and used in multiple places.
	- define a blueprint of each item of that class.
	- can also have static functions on class 
		- not associated to an object
		- associated with the blueprint itself.
		- can be called without instantiating a object.
- Date Class
	- global date class given by JS.
	- present to use out of the box.
- JSON
	- Javascript Object Notation.
	- `JSON.parse()` to extract the string into a valid JSON object
	- `JSON.stringify()` to encode the object into a string.
	- interchange bw strings and json using this 
	- use case: when we get data from a server when we need to encode and decode the data -> stringify a data into a string , and while interacting with it , turn in back into object.
- Math 
	- `Math.random()` -> gives a random number bw 0 and 1 
	- `Math.floor()`
	- `Math.ceil()`
	- `Math.max()`
	- `Math.min()`
- Objects
	- can set , unset properties on objects.
	- get the original object -> `obj` 
	- get all the keys of the object -> `Object.keys(obj)`
	- get all the values of the object -> `Object.values(obj)`
	- get all the entries of the object -> `Object.entries(obj)` (key-value pairs)
	- check if the property of the object is its own or from parent node -> `obj.hasOwnProperty("property-name")`
	- assign a new key and value to the object -> `Object.assign({},obj,{newProperty: "newValue"})`
- Async functions vs Sync Functions 
	- what does synchronous mean ?
		- together, one after the other or sequential 
		- only one things is happening at a time 
		- async -> opposite of async 
			- happens in parts 
			- multiple things are context switching with each other 
		- eg: human body and brain is single threaded; we can only do one thing at a time -> but we can context switch b/w tasks , or we can delegaet tasks to other people.
	-  async functions 
		- eg: filesystem access in nodejs 
		- net amount of time take to do a task can be decreased using async functions (delegating and context switching)
	- setTimeout is like a global async function that JS provides that we can use it to check it.
	- part of the browser api , very common use 
	- running a specific function after a duration (in ms)
	```javascript 
	setTimeout(() => {
		console.log("ok")},1000
	);
	```
	- one way to make an async function synchronous is to use busywaiting 
	 - ```javascript 
	  function syncSleep() {
		  let a = 1;
		  for(let i=0;i<10000000;i++) {
		  a++;
		  }
	 }
	  
	  syncSleep();
	  ```
  - we can defer the execution of this , by delaying it for some time. 
  - what are the common async functions ?
	  - `setTimeout()`
	  - `fs.readFile` to read a file from your filesystem 
		  - async , because can't read a file immediately
		  - can take some time to access the file 
		  - other process might be executing it
		  - you yourself might be editing it 
		  - when done reading , it will call a callback to us 
	- `fetch` to fetch some data from an API endpoint 
		- async call -> getting data from someone's elses server.
- the console.log after `fs.readFile` is executed function, cause accessing the file takes time, and `fs.readFile` is anyway asynchronous
	- and since it is expensive and async, we proceed do our own thing.
- Real world use of callbacks 
- JS  Architecture in the Browser
	- check this out : http://latentflip.com/loupe/
	- call stack where your code gets places if its synchronous 
	- callback queue 
		- when we become idle, the event loop finally runs 
		- checks if something there in the callback queue or not and then puts it in the callstack
	- every line of reaching there, is reaching the callstack -> what is being put on the stack to run that.
		- only one thing put at a time if all of our code is synchronous.
		- otherwise , the asynchronous code is not put there 
		- when the loop finally exists, the stack can be popped.
		- if we only have synchronous code, all the code is placed on the call stack.
	- for async code:
		- events pushed to callback queue, until the thread is busy.
		- it will be kept waiting, when the call stack is empty, the callback queue will then put the event back into the callback queue.
		- if there is some async task that is completed, it gets pulled from callback queue to the call stack.
- Promises
	- How can we create an asynchronous function of our own ?
	- usually all async function that well write will be on top of JS provided async functions like `setTimeout` of `fs.readFile`
	- leaner way to write it is to use promises than callbacks.
	- rather than user giving a callback to the next one, we use the `.then` method on the promise to resolve it after it has been successful.
	- the data of the promise comes asynchronously when loading the `.then` is called  to know where to send the data.
		- to know the next party knows that the data is here.
	- Promise is just like a class -like Date class.
		- when we initialize it , we have to give the first argument as function and the argument is the resolve argument.
		- ```js
		  var d = new Promise(function(onDone){
		  resolve("some data");
		  });
		  
		  function callback() {
		  console.log(d);
		  }
		  
		  d.then(callback);
		  ```
		- Promise can have 3 states possible ->`Pending`, `Resolved` ,`Rejected`. 
		- `.then()` method called on this promise when it is being resolves.
		- Just a class introduced to cleanup callbacks and to write async way.
- Async Await 
	- Much more cleaner way 
	- Syntactic sugar , under the hood still using callbacks.
	```js
	function sagniksAsyncFunction() {
	let p = new Promise(function(resolve) => {
	resolve("hi there")};
	return p;
	)};
	
	async function main() {
		const value = awit sagniksAsyncFunction(); 
		console.log(value);
	};
	
	await main();
	```
	- 2 keywords and removes the use of all the `.then` syntax and no callbacks syntax is required any more.
	- This control will not go beyond the log.
	- Under the hood it is the same exact logic and the thread is not blocked, it will just queue the async tasks.
- Map,Filter and Arrow Functions:
	-  Map, filter are helper functions when it comes to arrays.
		- map
			- define the transformation that we need to do in a function is added in the function 
			- map is a global function , on the array class, whose first function is a callback and then maps that number with the result.
			- maps the result with a initial input with a transformation function and maps to a new result in memory.
		- filter 
			- it filters an array based on some predicate on the array class.
			- makes the syntax slightly cleaner.
	- Arrow functions are another way to write functions in JS.
		- arrow functions and normal functions are almost same, except when used in callbacks, when it can change.
		- there is a difference in the bindiung of normal functions and arrow functions.
	