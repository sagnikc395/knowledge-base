---
title: React
tags:
  - react
  - 100xdevs
  - frontend
date: 1/22/26
---
### before react 
- why was react written a certain way
- generating the foundations for react 
- makes the process easier to learn harder concepts down the line 
- internet has static and dynamic websites
	- more things get appended to the bottom 
	- the html that we got back from the server initially is slowly getting appended 
	- through DOM manipulation are people able to create websites -> before React 
	- as they scroll and add more posts , append new posts, DOM manipulation , updating things on the DOM ,without us hard refreshing the page
	- all of this HTML being injected in the DOM via javascript
	- update the DOM when we clicked on the button
- DOM manipulation is very hard to write as a developer, Making dynamic websites, with the primitives that DOM provides us is very hard.
	- thats why react came into the picture.
	- `document.createElement`
	- `document.appendChild`
	- `document.setAttribute`
	- `element.children`
- adding title, description , followed by a button and we add a method addTodo to do onclick handler.
- ugly approach on updating :
	- add the whole HTML in the innerHTML tag and fit in that 
	```js 
	document.getElementElementById('container').innerHTML = `
	<div>
		<div>${title}</div>
		<div>${description}</div>
		<button>Mark as Done</button>
	</div>`;
	```
	- appendChild -> add this item as a child on the DOM Tree
- instead of manually updating it by setting `innerHTML`, its better to set the items using by first setting an outerDiv and then adding elements to it.
- the goals is to create something in memory and then eventually put them in DOM.
- `setAttribute` lets us sets attributes on a specific tag.
- Problem with this approach till now:
	- very hard to add and remove elements , no central state !
	- what if there is a server where these todos are put
	- what if we update a TODO from a mobile app, and get a new array of todos on the frontend, how will we update the DOM then ?
	- We only have a `addTodo` function , we dont have a `updateTodo` or `removeTodo` function yet !
- If we can write a function that takes state as an input and creates the output on right, much more powerful than our original approach.
- DOM Manipulation is the only way to create dynamic websites
	- making it very hard for even writing a simple website 
	- even react under the hood interacts with DOM to make websites.
- the next objective is to given a state , we can render the state on the DOM.
- what we want ideally is to build a diff and only apply the diff to the DOM instead of clearing the screen and building it again.
	- dont clear the DOM upfront, update it based on what has changed.
	- Question is, how does it calculate what all has changed ?
	- Has a TODO been marked as complete ?
	- Has a TODO been removed from the backend ?
	- Hint: Remembering / keeping track of the old todos in a variable (virtual DOM)
- In the real world, given a set of dynamic TODOs, we would have to render and re-render the latest data and update the DOM accordingly.
	- given a state whatever we want on the screen , we need to update the DOM accordingly.
	- ![[Screenshot 2026-01-26 at 8.03.17 PM.png]]
- Better way to update the DOM(according to what React does):
	- Dont clear the DOM upfront, update it based on what has changed.
	- Question is, how does it calculate what all has changed ?
		- Has a todo been marked as complete ?
		- Has a todo been removed from the backend ?
	- You calculate the difference 
		- based on the diff, calculate the diff and its a slightly better way of solving the same problem.
	- We remember the old todos in a variable -> Virtual DOM 
		- Place where they have a storage of the DOM.

### react
- what is the easiest way to create a dynamic frontend website ?
	- update a state variable
		- general developer logic 
	- delegate the task of figuring out the diff to a hefty function 
		- react core library 
	- tell the hefty function how to add, update and remove elements.
		- react dom 
		- react native 
- react takes care of re-rendering the whole thing and figuring out what to print and what to update.
	- our code is pretty lean and we dont have to update the changes here.
- react dom , react native etc. exposes the functionalities to react, whereas react is a diff calculating framework that calculates the things to be put on the DOM.
- virtual dom and real dom the changes are not propogated immediately 
	- react does a bunch of optimizations and does a bunch call
	- batching the changes helps in performance 

### diving deep into react:
- jargon to learn 
	- jsx 
	- class vs classname
	- static vs dynamic websites 
	- state 
	- components 
	- re-rendering 
- why do we need react ?
	- for static websites, you don't
	- dont need for dynamic websites - can do in HTML,CSS and JS.
	- the contents of the page are changing , when we are changing the press buttons.
	- For dynamic websites, these libraries makes us life easier to do DOM Manipulation.
- react is just an easier way to write normal HTML/CSS/JS.
- Its a new syntax, that under the hood gets converted to HTML/CSS/JS.
- People realized that its harder to do DOM manipulation the conventional way.
- new syntax to write frontends.

- how react makes this better at writing frontends?
	- For creating react app, we only need to usually worry about 2 things 
		- State 
			- An object that represents the current state of the application.
			- It represents the dynamic things in our app (things that change)
			- Eg: the value of the counter b
		- Components 
			- things that can be reused in our application and used throughout 
			- how a DOM element should render, given a state.
			- Eg: counter button itself		
			- Eg: Button is a component that takes the state(currentCount) as an input and is supposed to render it accordingly.
- We usually have to define all of our components once , and then all we have to do is to update the state of our application, React will take care of re-rendering the application.
- ![[Screenshot 2026-01-27 at 6.52.32 PM.png]]
- a state change renders a re-render.
	- effectively the function takes a global state and does a re-render of the thing.
	- the function takes a state as an input and spits a state as an output.

### todo app:
- in useState is the initial state value.
- count and setCount are the two state variables that store the value for the same.
- App() is our first component.
- npm run build will generate a static build of all the code 
	- similar to the JS browser / target based code it will generate 
	- we can directly serve it .
- when we want to render a JS variable in JSX we have to wrap it in {} braces. 
- in onClickHandler dont have to call the function , just give the function name and react under the hood knows that we need to call this function.
- react will automatically know when to update the state and given an state it will reconcile into a state it gets the value updated.
-  we give it state and component, and any time the state updates, the component should re-render.
	- because react does not look at every variable as a state variable.
	- if we have to define a state variable then we have to do it a certain way.
	- using useState() hook to define our state, and if we define the state , we can update it.
- `const [count,setCount] = useState(0);`
	- the first value put it in count and the second value put it in setCount.
	- setCount when called , it calls another function that dispatches and re-renders the thing here.
- the right way to use state variables, is that it gave a state variable and with that given value is to call the value.
	- so any time onClickHandler is called , we have to set the state and react re-renders the thing similar to the thing on button press.
- we pass inputs to an custom component is through something called `props`.
	- can create multiple children components and the parent components call pass the values and render it there.
	- can access them using props.obj_name and props.user_name
	- can reuse the component again and again 
- high-level we have defined our own application and reused it.
- `setTodos([...todos,{...` spreads out all the todos and sets all the values from the array here 
	- we want all the original todos and this new todo at the end.
	- can add more items to the state and react takes care of handling of how to add the items to the todos.
- while iterating over the list of objects, react to render would require a key property so that it is unique.
- Any time a parent re-renders , its child re-renders as well.
- to put any css , we put it as an object with 2 curly braces.
```js 
<button style={{}}></button>
```
- todos is a state which is being passed as a component.
	- we can pass todos which is a state variable , compared to the new component.
- vite is one of many ways to bootstrap and bundler to build a react app, others also exist.
	- many such frameworks , to bootstrap our application, watching files, bundling files etc.

### React Deeper Dive :
#### React returns 
- reach component can return a single top-level xml
- Why?
	- makes it easier to do reconciliation 
	- jsx expressions should have one parent div 
	- cannot return an xml that doesnt have a top level parent div 
	- can instead of extra div , we can also add a empty fragment or a React.Fragment.
- react -> dynamic website 
	- the content changes very quickly 
	- react is the easy way to create this
	- create, update and upload anything on the dom is a good way to re-render 
	- whenever the dom updates happen, is called a re-render.
	- in react, we want to minimize the re-renders 
- need to add optimizations to reduce the number of re-renders to make it performant.
#### re-rendering 
- a re-render means that 
	- react did some work to calculate what all should update in this component.
	- the component actually gets called (we can put a logger to confirm this)
	- the inspector shows us a bounding box around the component
- it happens when
	- a state variable that is being used inside a component changes
	- a parent component re-renders triggers all children re-rendering 
- 2 ways of keeping the re-rendering less:
	- pushing the state down 
	- react.memo knows the title has not changed, so we dont need to change it.
- wrapping a component inside react.memo will make it only change it when it has a dynamic state change , not only when there are static changes.
- react has a exact copy of the DOM somewhere else and many times we change the state variable - it creates a new diff ,and based on the diff it decides what it needs to do - like create, update or delete element.
- always push state from parent to child.
#### key 
- each child in a list should have a unique prop.
- thats the way the diffing engine will keep track of changes that have formed.
- key tells react to make the correct updates to the dom and keep track of the changes.
#### wrapper components 
- you can create an meta component, that takes the inner component as an onput.
- not necessary that the component always has to take state as an input.
- whenever we make a component, inside which we pass children, inside that we get access to the whole thing in the children component, inside the variable.
- the structure of the outer thing and inside this what others can write inside this
- using that we can reach the final state of what inside can be written inside it.
### hooks:
- until now we have discussed useState.
- these functions that start with use are called as hooks.
- hooks in react are functions that allow us to hook into react state and lifecycle features from function components.
- other examples of hooks:
	- useEffect
	- useMemo
	- useCallback 
	- useRef
	- useReducer 
	- useContext 
	- useLayoutEffect 
- lifecycle features:
	- earlier react used to be written in a different way.
		- we got access to lifecycle functions 
	- before functional components, we had class based components 
	- `onComponentMount` and `onComponentUnmount` would be two methods associated with it and it will be used to hook onto it.
	- bunch of the lifecycle functions , it re-renders
	- used to be the way in class based components
- harder to do it functional components, so hooks were introduced.
- some jargon:
	- side effects 
		- the operations can affect other components, interact with browser or do asynchronous changes.
		- in react, we have functional components and anything not related to rendering , etc. are considered part of side effects as they are not part of the main react rendering cycle.
		- eg: fetching data from the backend 
		- this asynchronous call can be called as a side effect to the codebase 
		- these need to be seperate from our rendering cycle.
		- eg: setTimeout , fetch, setInterval
		- shouldnt necessarily collude with the rendering cycle
	- hooks 
		- went part of react for the longest time 
		- allows us to use many state management techniques without explicitly calling lifecycle events.
		- they enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in class components.
		- This has lead to a more concise and readable way of writing components in React.
##### useState
- lets us describe the state of our application 
- whenever state updates, it will trigger a re-render which will finally result in a DOM update.
- the problem comes when we have to do some other side effect or hit a backend api etc. which we can't do with the useState.
##### useEffect 
- allows us to do lifecycle event 
- allows us to do things when component is mounted 
- when the component gets put into the dom , is called a mount 
- some things should run when this element is being put there 
- that is the use of the `onComponentMount`
- similarly we would have an action when the things need to be unmounted.
- useEffect lets us hook onto it.
- we are only sending one request when the component mounts 
```js 
const [todos,setTodos] = useState([]);

useEffect(() => {
fetch(url).then(async (res) => {
const json = await res.json();
setTodos[json]})},[]);
```
- for making async useEffect , use the library useAsyncEffect or capsulate it inside another async function.
- useEffect hook serves the same purpose as `componentDidMount` and `componentDidUpdate` and `componentWillUnmount` in react class components, but unified into a single API.
##### useMemo
- 
##### useCallback 
- 
##### useRef 
- 

##### useContext
- 

#### custom hooks
- hooks that we can create on our own and use it 
- can create custom hooks for others to use

#### prop drilling:
- 