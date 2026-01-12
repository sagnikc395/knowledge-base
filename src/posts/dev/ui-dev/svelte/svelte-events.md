---
title: Svelte Events
tags:
  - svelte
  - ui
  - frontend
  - DOM
date: 31/7/25
---
### DOM Events:
- We can listen to any DOM event on an element (such as click or `pointermove`) with a `on<name>` function.
```svelte 
<div onpointermove={onpointermove}>
	The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>
```
- Like any other property where the name matches the value, we also use the short form.
```svelte 
<script>
	let m = $state({ x: 0, y: 0 });

	function onpointermove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div {onpointermove}>
	The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>

<style>
	div {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>
```