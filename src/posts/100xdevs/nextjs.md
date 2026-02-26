---
title: Nextjs Tutorial
tags:
  - nextjs
date: 2/25/26
---
### Next JS Intro, Prereqs
- Need to understand basic Frontend before proceeding with this
- need to create with React and provide with things that React doesnt able to create around it.

#### Intro:
- Next was built for the following things that React didnt support out of the box:
	- in react project, we still had to maintain a seperate backend project for our api routes.
	- react does not provide out of the box routing (have to install third party libraries like react-router-dom)
	- react is not seo optimized 
		- not exactly true today because of react server components 
		- how google rank pages ?
			- crawler crawls the internet and constantly crawling the web and bunch of machines that are hitting websites and trying to understand what the website is doing and trying to rank them 
			- react is served from cdn and crawler will hit the website and will try to visit the website and try to get back from the CDN -> html,css and js and need to figure from html what this page does 
				- the bundled js is ignored 
				- if the initial HTML doesnt have any of this, then it would not be able to figure this out 
				- JS can figure this out and put things on the DOM, but crawlers dont really put it on the whole website to render to figure out what is this website
			- react doesnt give all the content in the html file 
			- nextjs fixes this
	- *waterfalling problem*
		- making a medium like website, what all request goes out ?
			- request goes out to get the index.html file (1st request) that goes out.
			- in the html , since there is a request for JS file, a request for JS file goes, and so on...
			- they dont happen parallely, happens one after the other.
			- in real world,we have to check if users are logged in or not, else send to signup page.
			- if they are logged in, then send the request to get the blog
			- waterfalls things and goes back.
		- the whole thing feels very flow, it would be nice, if in a single request we get back all the blogs and the content.
	- the initial HTML that we get back, has all the blogs, they dont have to waterfall , one after the other.

### Nextjs Frontend :

### Nextjs Backend:

### Middlewares in Nextjs:

### CSR VS SSR VS SSG:
