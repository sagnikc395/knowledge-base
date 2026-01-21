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
- Either an authorization header and this token is how we do signin/ signup in websites.
- User will creating this request and this is how we do authorization for it.