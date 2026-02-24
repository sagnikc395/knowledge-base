---
title: SQL and Postgres
tags:
  - databases
  - postgres
  - sql
date: 2/24/26
---
### Types of Databases
- There are a few types of databases,all service different types of use-cases.
- NoSQL databases
	- Store data in a `schema-less` fashion. Extremely lean and fast way to store data.
	- Examples : `MongoDb`
- Graph Databases
	- Data is stored in the form of a graph. Specifically useful where relationships need to be stored in social networks.
	- Eg: Neo4j
- Vector Databases
	- Stored data in the form of vectors
	- Text converted into a embedding and stores that.
- SQL Databases
	- Store data in the form of rows.
	- Most full stack applications will use this
	- Ex: MySQL, Postgres 
- Why not NoSQL
	- Its' schemaless properties make it bootstrapping a project fast.
	- But as our project grows, its schemaless property make it grow corrupted over time.
	- can cause number errors 
	- is too flexible for app , but for production needs strictness.
	- Upsides:
		- can move very fast
		- can change schema very easily
- Why SQL
	- SQL database have strict schema 
		- Define your own schema 
		- Put in data that follows that schema
		- Update the schema as our app changes and performs `migrations`
- 4 parts when dealing with a SQL databases (apart from connecting it to nodejs)
	- running the database
	- using a library that will let us connect and put data onto it
	- creating a library and defining its `schema`
	- run queries on the database to interact with the data (insert/update/delete)
- `psql` 
	- terminal based front end to postgres
- `pg`
	- node library that we can connect in our backend app to store data in the Postgres DB.
- Now defining the schema of our todos
	- to create a table, the command to run is 
	```sql
	CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);
	```
	- `CREATE TABLE users`
		- instantiates the creation of a new table in the database named users.
	- `SERIAL`
		- postgres thing to create an autoupgraded id for the user.
	- `email VARCHAR (255) UNIQUE NOT NULL`
		- `email` : name of the second column , intended to store the user's  username
		- `varchar`: a varchar character string that can store upto 50 char.s It used to limit the length of the field
		- `UNIQUE` : constraint ensures that all values in the `username` column are unique across the table. No 2 users can have the same username.
		- `NOT NULL`: this constraint prevents null values from being inserted into the `username` column.
	- `password VARCHAR(255) NOT NULL`
		- same as above, can be unique 
	- Insertion
		```sql 
		INSERT INTO users (username,email,password)
		VALUES ("username_here", "username@email.com","user_pass");
		```
	- Updation 
		```sql
		UPDATE users 
		SET password="new_password"
		WHERE EMAIL="username@email.com";
		```
	- Deletion 
		```sql
		DELETE FROM users 
		where id = 1;
		```
	- Select :
		```sql
		SELECT * FROM Users
		where id = 1;
		```

### Joins:
- Defining relationships is easy 
- what is hard is joining relationships from one or more tables together.
- Eg: fetch a users details and their addresses , need to join 2 tables
- benefits of using join:
	- reduced latency 
	- simplified application logic 
	- transactional integrity 
- types of joins:
	- INNER JOIN
		- returns rows where there is at least one match in both tables. 
		- if there is no match , the rows are not returned.
		- most common type of join 
- SQL
	- have a strict schema 
	- requires us to 
		- define our schema 
		- put in data that follows that schema 
		- update the schema as our app changes and performs migrations 
	- so there are 4 paths using an SQL database 
		- running the database 
		- using a library that let us connect and put data in it 
		- creating a table and defining its schema 
		- run queries on the database to interact with the data 
	- 