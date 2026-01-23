---
title: React
tags:
  - react
  - 100xdevs
  - frontend
date: 1/22/26
---
## before react 
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
- 