---
title: Svelte Logic
tags:
  - svelte
  - frontend
  - ui
  - ui-logic
  - conditional-rendering
date: 26/7/25
---

### if blocks:

- HTML doesn't have a way of expressing logic, like conditionals and loops. Svelte docs.
- To conditionally render some markup, we wrap it in an `if` block.

```svelte
<script>
	let count = $state(0);
	function increment() {
		count += 1;
	}
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count > 100}
	<p>{count} is greater than 100!</p>
{/if}
```

### else blocks:

- Just like in JS, an `if` block can have an `else` block.

```svelte
{#if count > 10}
	<p>{count} is greater than 10</p>
{:else}
	<p>{count} is betwen 0 and 10</p>
{/if}
```

- `{#...}` opens a block. `{/...}` closes a block.
- `{:...}` continues a block.

### else-if blocks:

- Multiple conditions can be `chained` together with a `else if`

```svelte
{#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count < 5}
	<p>{count} is less than 5</p>
{:else}
	<p>{count} is between 5 and 10</p>
{/if}
```

### each blocks:

- When building user interfaces we'll often find ourself working with lists of data.
- Instead of laboriously copying, pasting and editing components, we can get rid of all but the first button , then use an `each` block.
- here colors in this any valid iterable or array-like object.

```svelte
<div>
	{#each colors as color, idx}
		<button
			style="background: {color}"
			aria-label={color}
			aria-current={selected === { color }}
			onclick={() => (selected = { color })}
		>
			{idx + 1}
		</button>
	{/each}
</div>
```

- We can use color in the loop also, and get the current index as a second argument.

### Keyed-each blocks:

- By default, updating the value of an `each` block will add or remove DOM nodes at the end of the block if the size changes, and update the remaining DOM. That might not what we want.
- In Svelte, rendering works differently.
  - The component 'runs' once, and subsequent updates are 'fine-grained'.
  - This makes things faster and gives us more control.
- We can specify a unique 'key' for each iteration of the each block so helps with rendering and only updating specific things.

```svelte
<!-- Thing.svelte -->
<script>
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// `name` is updated whenever the prop value changes...
	let { name } = $props();

	// ...but `emoji` is fixed upon initialisation
	const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>


<!-- App.svelte -->
<script>
let things = $state([
{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
]);
</script>

<button onclick={() => things.shift()}>
	Remove the first thing
</button>

<#each things as thing (thing.id)>
<Thing name={thing.name} />
</each>
```

- We can use any object as the key, as Svelte uses a Map internally i.e can use (thing) instead of the (thing.id) also.
- Using a string or number is generally safer, however, since it means identity persists without referential equality, for ex: when updating with fresh data from an API server.

### await blocks:

- Most web applications have to deal with asynchronous data at some point.
- Svelte makes it easy for us to `await` the value of the promises directly in our markup.
- However, note that only the most recent `promise` is considered, meaning that we don't need to worry about race conditions.
- If we know that our promise can't reject, we can omit the `catch` block. We can also omit the first block if we don't want to show anything until the promise resolved.

```svelte
{#await promise then number}
	<p>You have rolled a {number}</p>
{/await}
```

- So we can write it as :

```svelte
<script>
	async function roll() {
		//fetch a ranom number from 1...6
		return new Promise((fulfill, reject) => {
			setTimeout(() => {
				//simulate a flaky network
				if (Math.random() < 0.5) {
					reject(new Error('Request failed'));
					return;
				}
				fulfil(Math.floor(Math.random() * 6));
			});
		});
	}

	let promise = $state(roll());
</script>

<button onclick={() => (promise = roll())}> roll the dice </button>

<p>...rolling</p>

{#await promise then number}
	<p>You have rolled a {number}</p>
{/await}
```
