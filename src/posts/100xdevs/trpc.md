---
title: tRPC
date: 3/3/26
tags:
  - trpc
  - typescript
  - 100xdevs
  - backend
---
### trpc
- moderately hard concept 
- will require marination 
- is not used everywhere 
- why trpc ?
	- automatic types on FE and BE 
	- generic codes that can be converted to express backend , nextjs backend 
- on frontend we never did strict typechecking on frontend, we just fetched that thing and did it 
	- unlike backend which we did it with zod 
- instead of rewriting a bunch of code, it would be better, if we write it as write our code once, we can add adapters of writing the generic code converts to express or nextjs etc.
- the way to do is to use adapters 
	- like standalone, express, fastify, nextjs etc.
- In RPC, we either create 
	- Procedure -> things end users can run 
		- Query -> to get data from the backend 
		- Mutation -> update data on the backend
	- Router -> collection of procedures ; similar to the app variable in express
- flow:
	- init trpc
	- define your router
	- use the adapter to serve the API
- Context and Middlewares
	- very important and very useuful across a variety of frameworks
	- when initializing our router, tRPC allows us to:
		- setup request context 
		- assign metadata to procedures
		- format and bundle errors 
		- transform data as needed 
		- customize the runtime configuration 
- Timestamp: 1:23:24 