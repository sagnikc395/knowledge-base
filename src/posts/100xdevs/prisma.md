---
title: ORMs and Prisma
tags:
  - databases
  - orms
  - prisma
date: 2/24/26
---
### why orms ?
- we have to write raw sql queries 
	- both tedious and unsafe 
	- if not careful can cause SQL attack 
- migrations are hard 
- we dont get the best types out of the box without using orms 

### Prisma
- Prisma Client: Auto generated and type-safe query builders for nodejs and Typescript
- Prisma Migrate : Migration tool to easily evolve your database schema from prototyping to production.
- Prisma Studio: GUI to view and edit data in our database.
#### Auto migrations 
- DB Changes often, we add more columns, add new tables, we have to do MIGRATIONS to keep syncing the DB state
- Pre ORM days - Manually update the prod DB, dev DB 
- There was no log of the changes made to the DB
