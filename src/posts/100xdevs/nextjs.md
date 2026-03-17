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

### Nextjs Offerings:
- Server side rendering - get rid of SEO problems 
- API Routes - Single codebase with frontend and backend 
	- dont need a seperate express application
- File based routing (no need for react-router-dom)
- Bundle size optimization, static site generation 
- maintained by vercel team
- Downsides:
	- cant de deployed via a cdn, always needs a server running that does `server side rendering` and hence is expensive.
	- very opinionated ,very hard to move out of it.
### Nextjs Frontend :
- Routing in Nextjs
	- in react , we need to use a external package like react router dom to do routing.
	- nextjs is a highly opinionated framework on how to do routing
		- nextjs uses file based routing 
	- https://tanstack.com/router/v1/docs/routing/file-based-routing
	- this means that the way we create our files, describes what renders on a route.
- the initial HTML has all the details 
	- the page put all the things on the server and put those things in the HTML - helpful for the crawler to crawl the pages.
- next applications cannot be made fast via CDN as there is no concept of caching , but we can use edge networks to make them faster.
- page.tsx
	- the default page it hits for a route 
- layouts.tsx 
	- let us wrap our child pages inside some logic.
	- create an layout for all the pages in there 
		- irrespective of what pages are there and exists there 
- when we create a folder structure with`()` inside them, the path is ignored by nextjs in the routes.
- components
	- put all your components in a component directory and use them in the app routes, rather than shoving everything in the route handler
		- create components in the root of the project 
		- add new components there 
		- move the signin logic there 
		- render the SignIn component in `app/(auth)/signin/page.tsx`
- client component
	- adding a onclick handler with a function to call it , makes nextjs very angry
	- very imp in nextjs 
	- as the error suggests:
		- server components are rendered on the server 
		- client components are pushed to the client to be rendered 
	- by default, all components are server components.
	- if we want to mark a component as a `client` component, you need to add the following to the top of the component:
	- `use client`
	- Nextjs expects us to identify all of our components as either `client` or `server`. 
	- need for SEO -> server components, for interactivity -> client component
	- every component by default is a server component, for server component we have to be very explicit about that.
- When to create client component ?
	- whenever we get an error that tells us that need to create an client component 
	- whenever we are using something that the server doesnt understand (useEffect, useState, onClick....)
- rule of thumb: defer the client as much as possible 
### Nextjs Backend:
- Nextjs is a full stack framework, allows us to do both frontend and backend.
- before we had to put frontend in CDN and backend in another EC2 instance.
- The same url in backend in nextjs app, can give the same URL as a JSON.
	- also hitting the database and giving it back to the user.
	- benefit/ feature for the database 
	- both frontend and backend exist on the same CORS in the database
- React talks to a backend server :- datafetching happens 
- hit the backend server , write some react code -> some component that hits the backend server and return some data 
- Eg:
```js 
const URL = "https://api.com"
export const UseCard = () => {
	const [userData, setUserData] = useState<User>();
	const [loading,setLoading] = useState(true);
	
	useEffect(() => {
	axios.get(URL)
	.then(response => {
	setUserData(response.data);
	setLoading(false);
	})
	},[]);
	
	if(loading){
	return <Spinner />
	}
	
	return <div className="flex flex-col justify-center h-screen">
	<div className="flex justify-center">
		<div className="border p-8 rounded">
		<div>
		Name: {userData?.name}
		</div>
		{userData?.email}
		</div>
	</div>
	</div>
}
```
- In Next, we want it like:
	- ![[Screenshot 2026-03-01 at 7.48.26 PM.png]]
	- We want the Nextjs server to talk to the backend server 
	- Nextjs does server side rendering 
- Nextjs allows us to asynchronously fetch data in server components; not a concept in React.
- using this we do server side rendering of the component.
- an opionnated component `layout.tsx` is what gets rendered when the things are getting fetched.
	- can create for every subroute as well
- API Routes in Nextjs:
	- Next lets us writes backend routes, just like express does.
	- Benefits of using Nextjs for backend includes:
		- code in a single repo
		- all standard things we get in a backend framework like express
		- server components can directly talk to the backend.
- also while using prisma with it, use a singleton pattern as it makes maximum code reuse.
	- so as to not make multiple connections to the prisma config.
	- because next dev in dev mode will instantiate a new `PrismaClient` instance each time due to hot reloading that will create a connection to the database. This can quickly exhaust the database connections as each `PrismaClient` instance holds its own connection pool.
- Server Actions 
	- till now we wrote some simple api endpoints.
	- have a slight inconvineience , is that if we want to hit from the server, the request goes out from the browser and then this client is called.
	- to call the same thing on the backend, we have to send a http request in backend to backend communication.
	- server actions let us define functions that we can call both on the client and the server.
	- ![[Screenshot 2026-03-02 at 9.52.36 AM.png]]
	- benefits of server actions:
		- single functions can be used in both client and server components
		- gives us types of the function response on the frontend (like trpc)
		- can be integrated seamlessly with forms 
### Authentication using Cookies:
- 

### NextAuth:


### Middlewares in Nextjs:
- Code that runs before / after our request handler.
- Commonly used for things like:
	- analytics 
	- authentication 
	- redirecting the user
- actually biggest use of middlewares is authorization and  authentication -- which nextauth sort of takes care 
	- ensure that user identity and check session cookies before granting access to specific pages or API routes.
- another big use cases is logging and analytics -> capture and analyze request data for insights before processing by the page or API.
- they expect to have a single miidleware.ts file in the root folder.
	- we can still organize our middleware logic modularly. Break out the middleware functionalities into seperate ts or js files and import them into our main middlware.ts file.
	- allows for cleaner management of route-specific middleware , aggregated in middleware.ts for centralized control.
	- by enforcing a single middleware file, it simplifies configuration, prevents potential conflicts and optimizes performance by avoiding multiple middleware layers.

### CSR VS SSR VS SSG:
- Client Side Rendering
	- modern technique used in web dev where the rendering of a webpage is performed in the browser using js. Instead of the server sending a fully rendered HTML page to the client.
	- Eg: React 
	- ![[Screenshot 2026-03-17 at 11.36.50 AM.png]]
	- Downsides:
		- Not SEO optimized
		- User sees a flash before the page renders 
		- waterfalling problem
- Server Side Rendering 
	-  foundational techniques 
	- when the rendering (process of converting JS components to HTML) happens on the server, called as SSR
	- ![[Screenshot 2026-03-17 at 11.48.11 AM.png]]
	- initial HTML page is popularized
	- Cons:
		- expensive since every request needs to render on the server 
		- harder to scale, can't cache to CDNs
	- 

- Static Side Generation
	- page HTML is generated at build time.
	- that means that in production, page HTML is generated when we run next build.
	- this HTML will then be reused on each request.
	- can be cached by a CDN
	- Why?
		- if we use static site generation, we can defer the expensive operation of rendering a page to the build time so that it only happens once.
	- how ?
		- 