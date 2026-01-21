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
	- 