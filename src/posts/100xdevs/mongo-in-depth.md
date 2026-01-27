---
title: MongoDB in Depth
tags:
  - 100xdevs
  - dbs
  - mongodb
date: 1/26/26
---
## mongodb in depth 
- understanding CRUD, mongoose and building an e2e authenticated app
- what is a database 
	- place where data is stored persistently 
	- ![[Screenshot 2026-01-26 at 8.52.39 PM.png]]
	- servers go and up all the time, databases are persistent 
	- databases are also replicated multiple places so that it is safe.
	- usually a cluster of servers where the data is stored.
	- once we have bought them up, they usually stay there in the server.
- generally where there is a single server where this things are stored.
- Examples of data stored in db:
	- Ex for Linkedin 
		- user data 
		- users posts
		- users connection relationships
		- messages history between two people
	- request goes as :
		- ![[Screenshot 2026-01-26 at 8.55.18 PM.png]]
- Good questions to have:
	- Why dont we let the users hit the databases directly ?
	- What extra does the http server provide exactly ?
		- Databases were created using protocols that browsers dont understand.
		- Databases dont have granular access as a first class citizen. Ver hard to do user specific access in them.
		- There are some databases (firebase) that lets us get rid of the http server and they try their best to provide granular access.
- Databases usually allow access to 4 primitives:
	- Create data 
	- Read data
	- Update data
	- Delete data 
	- popularly called as CRUD 
- In mongoose, first we have to define the schema 
- Mongoose is schemaless, but mongoose makes us define schema for things like autocompletions and validating data before it goes in the DB to make sure that we are doing things right 
- Schemaless DBs can be very dangerous , using schemas in Mongo makes it slightly less dangerous.
- In production , we use an ORM like Prisma.
- Schema means the structure of the data that we are putting in there in the first place.
- Eg: we want to define a course selling app , where we have two entities - user schema and course schema 
```js 
const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	purchasedCourses: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Course'
	}]
});

const CourseSchema = new mongoose.Schema({
	title: String,
	price: 5999
});

// and then we can use them as 
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);
```

-  SQL databases dont let us put nested , transitivite objects - we would have to do joins on the table to get the data.
	- Mongodb lets us do it.
- The way to do relationships in Mongodb , is to create an array of things to be done.
	- These strings are what creates a table in the Mongodb Compass.
#### CRUD Operations on MongoDB:
- Insert data into the database using mongoose:
- ```js 
	  User.create({
		  username: req.body.username,
		  password: req.body.password
	  });
```
- Find users by Id
```js 
	  User.findById("1");
	  User.findOne({
		  username: "sagnikc@gmail.com"
	  });
	  //find any 
	  User.find({
	  username: "sagnikc@gmail.com"
	  });
```
- Update one , using the given id
```js 
	  User.updateOne({
	  "id": "1"},
	  {$push: {purchasedCourses: courseId}});
```

- To add a new entry to the database, `$push` is the syntax to do it with the given course id.
- Delete 
```js 
User.deleteMany({});

User.deleteOne({
	username:"sagnikc@gmail.com"
});
```


#### Jargons to know in DB:
- Cluster
	- A bought a machine, where we can write multiple databases.
- Database
	- A collections of seperate table where things are actually kept.
- Table 
	- Where the data is actually stored.