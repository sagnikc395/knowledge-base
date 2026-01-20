---
title: Express and Backend
tags:
  - express
  - backend
  - nodejs
date: 1/19/26
---
#### Nodejs and its Runtime 
- ECMAScript vs Javascript 
	- very significant difference 
	- ECMAScript is a specification on which Javascript is based on.
	- guidelines and rules on which it is based.
	- everything that the JS engine / runtime should support 
	- eg: ES2017, ESNext etc. are some of the specification 
- Javascript 
	- javascript is the implementation.
	- not all of the things are used in the js runtime like setTimeout , Date etc. are part of the browser , nodejs provides us etc.
	- Multiple compilers for JS
		- V8 -> Google Chrome 
		- SpiderMonkey -> Firefox
		- V8 -> is completely open source engine for the browser
- Nodejs 
	- JS was meant for the browser and anytime some wants to create website, made using HTML,CSS and JS.
	- Nobody used JS to create the backend
	- Take the V8 engine , add some extra functionality and utility, make JS as a backend language.
	- JS is easier to understand also and also is good runtime -> that can run JS.
	- Faster development cycle than Java, C# etc.
	- Bun is the faster alternative of Node.js
	- Bun is written in Zig. 
	- Outperforms Nodejs in a bunch of tests and metrics.
- Bun is highly backward compatible to Nodejs and eventually we can shift to it.

#### What can we do in Nodejs ?
- Create CLIs
- Create a video player
- Create a game 
- Create an HTTP server

#### What is an HTTP server ?
- Most popular use case of Nodejs
- Hyper Text Transfer Protocol
	- A protocol that is defined for machines to communicate 
	- Specifically for websites, it is the most common way for our website's frontend to talk to its backend.
- Most common way for a website's frontend to talk to the  backend.
- we can write the http server in nodejs and can deploy it anywhere.
- Javascript -> used for frontend, Nodejs -> used for backend 
- Big picture:
	- Client throwing some information at a server 
	- server doing something with that information 
	- server responding back with the final result 
- Things client needs to worry about :
	- Protocol -> HTTP/WS/HTTPS
	- Address -> IP and port 
	- Route 
	- Headers / Body / Query Parameters 
	- Method 
- Things the server needs to worry about:
	- Response Headers 
	- Response Body 
	- Status Codes
- HTTP Protocol: 
	- ![[Screenshot 2026-01-19 at 5.55.03 PM.png]]
	- routes -> specifies what exactly what we want to do
	- headers -> some information we sent, most imp being authentication information, through cookies , one of many headers
	- body -> main argument that we send as a request that we sent out
	- method -> what kind of request that we are sending -> POST,GET,PUT, DELETE etc.
	- sticky sessions created using the token and that saved in cookies , makes the reason we dont need to login for each time.
	- response body -> where we get back the response from the server 
	- status code -> status result  eg: 404 NOT FOUND 
	- ![[Screenshot 2026-01-19 at 6.02.00 PM.png]]
	- Good convention to follow the status code according to the actions that we are performing.
	- **What happens when you press enter in google.com ?**
		- Browser parses the URL
		- Does a DNS lookup i.e converts google.com to an IP address
		- Establishes a connection to the IP address (does a handshake)
	- **DNS Resolution**
		- URLs are just like contacts in our phone 
		- In the end, they will map to an IP
		- If we ever buy a URL of our own, we would need to point it to the iP of our server.
	- Things that happens on your server after the request is received:
		- You get the inputs (route,body,headers)
		- You do some logic on the input, calculate the output 
		- You return the output body, headers and status codes.
	- Common methods you can send to the BE server
		- GET 
		- POST 
		- PUT 
		- DELETE 
	- Common status codes the backend responds with 
		- 200 - everything is OK 
		- 404 - page / route is not found 
		- 403 - authentication issues 
		- 500 - internal server error 
	- While we dont technically need status codes and just return in the body something like success: true/false , these are standard practices , we don't need all of it, but it is what is mentioned in the spec and hence is good to follow.

#### Express
- An library to create HTTP/HTTPS web servers in Node.js
- The first one to kick things off.
- TODO!: Create an HTTP server from scratch in Javascript using the inbuilt library.
- we are using their high level APIs to create an interface to connect.
```js 
const express = require('express');
const port = 3000;

const app = express();

app.get('/',(req,res) => {
res.send('hello world');
});

//listens on this port
app.listen(port,() => {
	console.log(`running on http://localhost:${port}`);
});
```
- it creates an instance of express and we are doing a get request on the / endpoint.
- and then we listen to the endpoint at port 3000.
- we use `app.use(express.json())` to create an middleware and use it to parse the JSON.
- then using the req we can parse the methods as:
```js
app.post("/add-todo", (req, res) => {

const { todoItem, todoDate } = req.body;
console.log(`Recevied Todo: `, req.body);
todos.push({ todoItem: todoItem, todoDate: todoDate });
res.status(201).json({
message: "Todo Added successfully",
data: { todoItem, todoDate },
});
});
app.get("/all-todos", (req, res) => {
res.json(todos);
});
```

- when sending post request, people can send some data along !
	- in the body, in the headers etc.
- can access the headers using the `req.headers` argument.
	- which is an object that logs all the headers that i am sending 
	- can access the authorization using `req.headers["authorization"]`
	- can also check the body 
	- can also check the tokens also.
- express doesnt handle the body by default, it only handles the request
- to actually handle the body inside, use a different library called bodyParser() to handle it -- express doesnt give it to us by default.
	- actually middlewares!
	- in any case body has some json , we use the middleware to first handle the body `app.use(bodyParser.json())` 

#### fetch api
- `fetch(url,{method: methodType}).then(handler)`
- used mostly by frontend to fetch from the backend API.
- 