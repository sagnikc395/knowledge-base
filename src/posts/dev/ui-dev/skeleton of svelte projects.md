---
title: Skeleton of Svelte Projects
tags:
  - svelte
  - ui
  - npm
date: 31/5/25
---
## Skeleton of a Svelte Project

- routes -> +page.svelte; main page that gets loaded for the first time.

<h2>First bit of svelte code:</h2>
<ul>
<li>&lt;\script> -> where we do our imports, setup our js and setup our state.</li>
<li>create our own svelte file:</li>
<li>inside the routes folders.</li>
</ul>
- Component name convention is to use a uppercase named file -> not necessary but use it like that.
- There are techniques which we can use snippets to share code , but for the most part, we are using a single file component -> whatever we write in that file ends up being scoped to that component and that component only.

  

## Props:
- variables when we pass something from a variable to a component.
```svelte

<Header prop={prop_value} />

```

- It means that we can pass one thing down from another. Very common way to pass information from component to component.
- Anything inside brackets is a variable and is a JS expression that can be used anywhere.
## Syntax Highlighting
- Svelte for VSCode extension.
## defining types in Svelte
- pretty similar to how we would use in normal typescript in a variable.
- $ in svelte is called runes. eg: $props() to define props, $state() to define a state.
## state in svelte
- state was previously a value in Svelte.
- In would be dynamically and changed reactivally depending on the state changes on that.
- In Svelte5 they have introduced runes. In previous svelte it was hard to track which variables were changing and which were not and how they were changing.
- $state can be set a default value and due to type suggestions can infer the type.
- In Svelte we update the variable itself and that itself triggers the reactivity , there is no .setState specifically to make those changes.
## other states

- can get into other different scenarios with different types of states.
- value and another value that depends on another value -> reactive state.
- $derive() value is gonna be always be in sync -> state value that will always be in sync along with state.
- Also in a single file, we can only use props just once.
- frozenstate
- derivedstate