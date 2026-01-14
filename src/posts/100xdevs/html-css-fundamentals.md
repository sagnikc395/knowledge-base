---
title: HTML,CSS Fundamentals for learning web dev
tags:
  - 100xdevs
  - html
  - css
date: 1/13/25
---
## HTML Basics: 
	- 2 jargons that we need to know
		- tags
		- attributes
	- defines the structure of your website
	- what all things to be placed on your website
	- popular tags	
```
	<html>
	<head>
	<title>
	<body> 
	<div> / <span>
	<h1> ... <h6>
	<p>
	<img>
	<a>
	input 
	<button>
	<b> / <i>
	<center>
```
- div will take the whole width of the page.
	- if very long, just overflow onto the next line.
- html -> a tag to put all the text / code inside ; not that important, even if we dont write it issoaky
	- structure everyything on the website -> put some metadata info in head tag and context in body tag 
	- head contains some metadata -> like the title tag 
	- it is whatever is rendered inside , gets rendered in the meta tag -> inside the head tag.
- meat of the codebase
	- texts,spans,divs, spans 
	- div -> takes 100% of the space 
		- can nest them 
	- add some style to change the outer div and what the inner div has '

- to take only required space 
	- use spans 
	- only take as much space that i need 
- texts that are bigger
	- h1.... h6 -> h1 being the biggest ; heading 1 and so on
	- p -> really long text, paragraph 
	- these are the primitives that people developed back in theday, nobody really follows
- img 
	- img tag
	- self closing tag 
	- bring to my machine and render what we like 

- center
	- center tag nobody uses, but good to know 
	- to align the items centrally
- linking page 
	- a tag -> when the click on a button to link to another page

- bold,italics
	- b -> bold 
	- i -> italic 
	- can also do bothj of them,
- to get user input
	- input tag 

- attributes 
	- properties for different tags that change the functionality 
	- some common are:
		- img -> src
		- a -> href
		- button -> onclick -> basically in this we write some javascript and the button triggers the action event for that 
		- input -> id 
	- different from tags
	- tags are top-level things that define the structure
	- each tag have multiple attribute that define what they can do.

## CSS :
- to add styles to our websites
- used for positioning things on the page and making it accessible to users.
- only way to style inside our browser is using CSS.
- add using the style tags -> to add different styles
	- like background-color
	- color 
	- etc.
- common styling attributes:
	- color
	- background
	- border-radius -> gives it a better radius to make it style better
	- border  -> adding border to the div to segregate the things 
	- padding / margin -> spacing 
	- box-shadow -> shadowing effect -> similar to border -> can tweak the direction and how it appears , unlike borders
- to debug spaces / any UI thing can check from the chrome dev tools.
- the right way to position something n the screen is to use it via flexbox
	- display: flex 
	- on parent 
	- makes all the div siblings reside in the same line 
- display: flex 
	- tells the parent tag to use the flexbox
	- the children elements need to be positioned someway , right next to each other
	- even if we put div inside it , it will come right next to each other
	- always have the parent be a flexbox and the children will be peers
- to make it equidistant:
	- justify-content:
	- default is flex start
	- end is end starting
	- space-between -> all tyhe children should be equidistant
- the default is absolute-positioning and we align them using float: left and float:right
- 