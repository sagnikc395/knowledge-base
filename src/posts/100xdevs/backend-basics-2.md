---
title: Middlewares, Global Catches, Data Validation and Auth Basics
tags:
  - middlewares
  - zod
  - jwt
date: 1/21/26
---
### middlewares
- what is the best place to do these prechecks ?
- eg: authentication and input validation 
- do we need to write custom logic each time to check ? hint: for some things yes!
- this is the job of middlewares - to do things that is either business logic or something that is not part of the main routing and request logic that can't be handled by express.
- the dumb way of input validation is to take everything in query parameters or headers, and do it in the routing logic itself without seperating into business logic.
```js
//a scratch middleware
app.get("/health-checkup", (req, res) => {
//auth for now

const userName = req.headers.userName;

const passwd = req.headers.passwd;

const kidneyId = req.query.kidneyId;

  

if (!userName === "sagnik" && passwd === "pass") {

res.status(403).json({

msg: " something wrong with inputs",

});

return;

}

if (kidneyId != 1 || kidneyId != 2) {

res.status(403).json({

msg: "something wrong with inputs",

});

return;

}
res.status(200).json({
msg: "input validataion done!",
});
//a scratch middleware
app.get("/health-checkup", (req, res) => {
  //auth for now
  const userName = req.headers.userName;
  const passwd = req.headers.passwd;
  const kidneyId = req.query.kidneyId;

  if (!userName === "sagnik" && passwd === "pass") {
    res.status(403).json({
      msg: " something wrong with inputs",
    });
    return;
  }
  if (kidneyId != 1 || kidneyId != 2) {
    res.status(403).json({
      msg: "something wrong with inputs",
    });
    return;
  }

  res.status(200).json({
    msg: "input validataion done!",
  });
});
});
```
- what if we tell you to introduce another route that does kidney replacement ? inputs need to be the same 
	- it would be a post route 
	- we would again need to do input validation there again 
	- violates the DRY principle 
	- best if we abstract that logic elsewhere and check it there itself.
- the real optimum to do all these things is to do prechecks using middlewares 
	- middlewares is just another function that is specialized for that.
	- we can also then pick and choose various different middlewares for different things 
- How does middlewares pass that information to the other middleware  and how does it interact with other middleware ?
	- In the express http functions, instead of one callback functions, we can in fact give a range of callback functions.
	- there are 3 inputs to the callbacks, res,req,next 
		- next we can call , if we think the things are fine
		- req, res used for pre-checks 
		- if things are fine , then we chain it back to next 
		- under the hood, express handles this 
	- there can be multiple functions , instead of just one handler.
- `app.use()` 
	- only then can we catch any body that the response sends in the POST body handler.
	- this middleware is going to be called everywhere.
	- instead of passing it explictly, anything that comes after the `app.use()` line will have th middleware inside it.

### input-validation
- need some checks on the data that we are sending.
- a very basic way is to catch the fields that we are passing in the request parameters and we check on that.
- cause backends are open and people can send request with any type of inputs / wrong inputs.
- as a application developer, its our duty to do sanity checks and do input validation so that server doesnt crash.
- another type of middleware in js 
	- Problem: someone else can read your exception eg: end-client can read the exception.
	- end user should see a clean repr of what happened.
	- express handles this under the hood
	- but better way to do is to use a global catches.
	- so we put `app.use(express.json())` before all the code 
	- so any exception that is being caused, is handled in the global catches.
	- error handling middlewares:
		- Special type of middleware function in Express that has 4 arguments instead of three `(rerr,req,res,next)` 
		- Express will recognize this as an error handling middleware because of these 4 arguments.
- zod library:
	- to do input validation.
	- better way to do validation 
	- prebuilt template and logic to check how to do input validation.
	- In Zod , what we are doing basically is parsing the input and checking on that
		- We define the schema on what the data should be like and zod will parse based on that.
	- zod gives us everything and gives us a bunch of error messages
		- super useful if you wanna show that in the UI.
		- some methods are present that we need to use it and use `safeParse` and the success object to check if validation passed or not.
### authentication and JWT 
- anyone can send requests to your backend 
- how to ensure that this user has access to a certain resource ?
- dumb way - ask user to send username and password
- Better way-
	- give the user back a token on signup / login
	- ask the user to send back the token in all future requests 
	- when the user logs out, ask the user to forget the token (or revoke it from the backend)
- ![[Screenshot 2026-01-21 at 6.23.32 PM.png]]
- Either an authorization header and this token is how we do signin / signup in websites.
- User will creating this request and this is how we do authorization for it.
- Project :
	- let people sign up to your website 
	- only allowed signed in users to see people( create a dummy people list)
	- only allowed the signin users can access the content.
- before we learn authentication, some cryptography jargon:
	- hashing 
		- before we save the passwords to the db , we hash it, so that only users can access that.
		- and the hashed password will be stored in database 
		- hashing -> converting a simple string to complicated gibberish, so that its only one way ; can never guess -> can never decrypt back to password.
		- how does the backend server validate this ?
			- backend server reconverts back to the string and compares it.
			- first inmemory we convert it back to the string and check if it is the same thing 
			- one way (convert a string to hash )
	- Encryption 
		- this is 2 way 
		- can always convert the hashed result to the original string , provided we have some key.
		- hashing doesnt really require a password, encryption requires a password.
		- a string is encrypted using a password 
		- string can also be decrypted using the same password.
	- JSON web tokens 
		- some hashing function, but only works for JSON input 
		- gives more structured data -> more longer string 
		- in the end if we look at it, it is significantly different from hashing and encryption.
		- takes JSON as a input 
		- Token:
			- it takes this and creates a token in the end 
			- JWT 
			- by default whoever has this input , can convert it back to the original object that we see.
			- anyone who has the string , can look at the original string that was formatted.
			- conversion anyone can do , but verification of this string can only be done by authorized backend servers that has created it.
				- given the string and the password, can pass it through a verification function and only return the original data , if the original thing was used to verify that.
			- `jwt.verify(<passwd>)` and can verified, only then we can authenticate the user.
			- very similar to encryption and decryption.
			- ![[Screenshot 2026-01-21 at 8.13.01 PM.png]]
			- `jwt.verify()` will only allow if the user if true, otherwise not.
		- its neither of encryption or hashing (its technically a digital signature)
		- anyone can see the original output given the signature 
		- signature can be verified only using the password.
	- Local Storage 
		- a place in your browser where we can store some data 
		- usually things that are stored include:
			- authentication tokens 
			- user language preferences 
			- user theme preferences 
			- etc
### fetch
- to actually send requests from frontend to backend 
- hitting the endpoint either by a browser or insomnia 
- how to send a request when the button is sent.
- part of browser API , to hit to the backend server 
- browsers expose something call fetch that hits the backend servers.
- ![[Screenshot 2026-01-21 at 6.47.06 PM.png]]
- using the `fetch` api globally to fetch the responses 
- on right clicking and clicking on the console, we can see the response.
- Eg: using the `faker` api , we can try for free some data and see their response.
- whenever the data resolves, the promise should reach there.
- fetch will return a Promise and using the promisified response to resolve based on that.
### Databases
- until now, we have been storing data in memory , bad for a few reasons
	- data can't be dynamic , if we update in memory objects, the updates are lost if the process restarts 
	- there are multiple servers in the real world 
- databases also support for querying and for optimized storage of the data.
- In the real world, you dont have a single backend server, you have a cluster
	- ![[Screenshot 2026-01-21 at 9.00.31 PM.png]]
	- for most purposes we have multiple servers and connected to a single db (well not really in prod!), but still
	- BE server fleet do business logic, do auth and other things.
	- user hits the backend 
	- backend hits the database 
	- user doesnt have access to the database/ can't talk to the DB.
- how is the db exposed, how does be knows where to connect and etc?
	- only the backend server knows the URL of the databases
	- need to store secrets and also other things 
- there are various types of databases, depending on querying and the type of data that we want to store 
	- graph dbs 
	- vector dbs 
	- sql dbs 
	- nosql dbs
- very famous nosql db -> mongodb 
#### MongoDB
- MongoDB lets us create databases
- In each DB, it lets us create tables(collections)
- in each table, it lets us dump JSON data.
- It is schemaless
- It scales well and is a decent choice for most use cases.
- How to work with it ?
	- create a mongodb instance 
	- get our mongodb connection URL 
	- download mongodb compass and explore the DB
- while creating databases we have to create database-table and a collection name for the same.
	- can create multiple database and create multiple collections(tables)
- create a new signup endpoint that users can come and hit it to enter the details to our database.
- can then do CRUD operations in the database.
- How does backend connects to the database ?
	- using libraries !
	- express lets u create an HTTP server
	- jsonwebtokens library lets us create jwts
	- mongoose lets us connect to your database
- mongodb is schemaless, but for normal CRUD operations we need some abstraction to add to item to a mongodb database 
	- use the mongoose library to give schema and structure to it.
 