---
title: Svelte Basics
tags:
  - frontend
  - svelte
  - ui
  - svelte-basics
date: 31/5/25
---

### What is Svelte ?
- Svelte is a tool for building web applications.
- Like other UI frameworks, it allows us to build our app declaratively out of components that combine markup, styles and behaviours.
- These components are then compiled into small, efficient JS modules that eliminate overhead traditionally associated with UI frameworks.
- Can build our entire app with Svelte, or we can add it incrementally to an existing codebase.
- We can also ship components as standalone packages that will work anywhere.

### Making our First Component
- In Svelte, an application is composed from one or more components.
- A component is a reusuable self-contained block of code that encapsulates HTML,CSS and Javascript that belongs together, written into a single `.svelte` file.
```svelte 
<h1> Hello world!</h1>
```
- Adding a script tag to our component and declaring a name variable:
```svelte 
<script lang="ts">
	let name = "Svelte";
</script>

<h1> Hello world , this is {name}! </h1>
```
- We can then refer to the name in the markup.
- We can also do some computation inside our components like:
```svelte
<script lang="ts">
	let time = Date.now();
	let computedName = `the name is ${time}`;
</script>

<h1>Hello world!</h1>
<h2>{computedName.toLowerCase()}</h2>
```

- Inside the curly brackets, we can put any JS that we want. 

### Dynamic Attributes
- Just like we can use curly braces to control text, we can use them to control element attributes.
- Svelte seriously considers making web more usuable and accessible to the broadest possible userbase, including people with (ex) impaired vision or motion, or people without powerful hardware or good internet connections.
- Accessibility (a11y) isnt always easy to get right, but Svelte will help us by warning us if we write inaccessible markup.
```svelte 
<script>
	let src = '/etc/image.gif';
</script>

<img src={src} alt="never gonna give you up"/>
```
- We can use curly braces inside attributes. 
- It's not uncommon to have an attribute where the name and value are the same, like src={src}. So we can write a convenient shorthand for that as:
```svelte 
<img {src} alt="{name} dances." />
```

### Styling:
- Like in HTML we can add a `<style>` tag to our component.
- Can add some styles to our custom `<p>` as:
```svelte 
<p> This is a paragraph. </p>

<style>
p {
	color: goldenrod;
	font-family:'Comic Sans MS',cursive;
	font-size: 2em;
}
</style>
```
- This CSS rules are only scoped to the component.
- We won't accidentally change the style of `<p>` elements elsewhere in our app.

### Nested Components:
- It would be impractical to put our entire app in a single component.
- Instead ,  we can import components from other files and include them in our markup.
- We can then import a component using normal JS, import tag using the script tag.
```svelte
<script lang="ts">
import Nested from './Nested.svelte';
</script>
```

- And then in the file we can include `<Nested />` as a component.
- Also notice that even though `Nested.svelte` has a `<p>` element, the styles from `App.svelte` doesn't leak in.
- Components names are capitalized, to distinguish them from HTML elements.
```svelte 
<!-- App.svelte -->
<script>
	import Nested from './Nested.Svelte';
</script>

<Nested />

<!-- Nested.svelte -->
<p> This is another paragraph.</p>
```

### HTML tags:
- Normally , strings are inserted as plain text, meaning characters like `<` and `>` have no special meaning.
- Sometimes we need to render HTML directly into a component.
- Eg: words we have been reading right now exist in a markdown file that gets included on this page as a blob of HTML.
- In Svelte, we do this with the special `@{html...}` tag.
- ***IMP***:
	- Svelte doesn't perform any sanitization of the expression inside `@{html...}` before it gets inserted into DOM.
	- This isn't an issue if the content is something we trust like an article like we wrote ourself.
	- However if this is some untrusted user content eg: a comment on an article , then it's critical that we manually escape it , else we risk exposing our users to XSS ( Cross Site scripting) attacks.
 
```svelte
<script>
	let string = `this is some other string <p>another string</p> NO JS !!!!`;
</script>

<p>{@html string}</p>
```


