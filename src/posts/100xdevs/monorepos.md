---
title: Monorepos
tags:
  - monorepos
  - full-stack
  - 100xdevs
date: 3/17/26
---
- turborepo and monorepo are a little different
- monorepo -> a single repository that holds all of our frontend, backend and devops code.
- Eg: cal.com
- apps, packages in tld is a popular convention 
- most of the time it is usally setup already by the tooling team.
- why monorepos ?
	- why can't just store services(backend,frontend etc) in various top-leve folders
	- we can and should if our
		- services are highly decoupled (dont share any code)
		- services dont depend on each other.