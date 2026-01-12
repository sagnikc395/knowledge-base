---
title: Svelte Reactivity
date: 25/7/25
tags:
  - svelte
  - frontend
  - reactivity
  - svelte-basics
  - ui
---
### State
- At the heart of Svelte is a powerful system of reactivity for keeping the DOM in sync with our application state - eg: in response to an event.
- We can make the declaration reactive by wrapping the value with `$state(...)`
```svelte 
<script>
	let count = $state(0);

	function incrementCounter(){
		count += 1;
		if(count %5 ==0){
			count = 0;
		}
	}
</script>

<!-- and using it as -->
<button onclick={increment}>
	Clicked {counter}
	{counter === 1 ? 'time': 'times'}
</button>
```
- This is called as a rune, and this is how we tell Svelte that `count` isn't a ordinary variable.
- Runes look like functions , but they are not -- when we use Svelte , they are a language construct itself.

### Deep State:
- State not only reacts to reassignments, but also reacts to mutations - we call this deep reactivity.
- We can also make an array reactive for example.
```svelte 
<script>
let numbers = $state([1,2,3,4,5]);
</script>
```
- And now when we change the array , the component updates. Or better , we can `push` to the array instead.
```svelte 
<script>
function addNumber() {
	numbers[numbers.length] = numbers.length + 1;
}
</script>
```

- I.e better way to push it :
```svelte 
<script>
	function addNumber() {
	numbers.push(numbers.length+1);
	}
</script>
```

- Deep reactivity is implemented using [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and mutations to the proxy itself do not affect the original object.

### Derived State:
- Often, we would need to derive state from other state. For this we have the `$derived` rune.
```svelte 
<script>
let numbers = $state([1,2,3,4,5]);
let total = $derived(numbers.reduce((t,n) => t+n,0));
</script>

<p>{numbers.join(' + ')} = {total}</p>
```

- This expression inside the `$derived` declaration will be re-evaluated whenever its dependencies(here numbers) are updated.

### Inspecting State
- Often useuful to be able to track the value of a piece of state as it changes over time.
- If we add a console.log to a click handler and open the console drawer, well see a warning and a message saying that the message could not be cloned
- This is because `numbers` is a reactive `proxy`. There are a couple of things that we can do 
	- We can create a non-reactive snapshot of the state using `$state.snapshot(...)`
	- Alternatively we can use the `$inspect` rune to automatically log a snapshot of the state whenever it changes.
	- We can customize how the info is displayed by using `$inspect(...)with(fn)` eg: can use `console.trace` to see where the state change originates from
	
````svelte 
	<script>
	$inspect(numbers).with(console.trace);
	</script>
````
- So the full code will be as :
```svelte
<script>
	let numbers = $state([1, 2, 3, 4]);
	let total = $derived(numbers.reduce((t, n) => t + n, 0));

	function addNumber() {
		numbers.push(numbers.length + 1);
		//console.log(numbers);
		console.log($state.snapshot(numbers));
	}
</script>

<p>{numbers.join(' + ')} = {total}</p>

<button onclick={addNumber}>
	Add a number
</button>
```

### Effects:
- We have only talked about reactivity in terms of state.
- But that's only half of the equation - state is only reactive if something is reacting to it, otherwise it's just a sparkling variable.
- The thing that reacts is called an `effect`. 
- Till now we have encountered effects - the ones that Svelte creates on our behalf to update the DOM in response to state changes - but we can also create our own with the `$effect` rune.
- IMP:
	- `$effect` is best thought of as a escape hatch, rather than something to use frequently.
	- If we can put our side effects in an `event handler`, eg: , that's almost always preferable.
- Cleanup function is called immediately before the effect function re-runs when the `interval` changes, and also when the component is destroyed.
- If the effect function doesn't read any state when it runs, it will run once, when the component mounts.

```svelte 
<script>
	let elapsed = $state(0);
	let interval = $state(100);
setInterval(() => {
			elapsed += 1;
		}, interval);
		 //cleanup for the effect
	return () => {
		clearInterval(id);
	};
});
</script>

<button onclick={() => interval /= 2}>speed up</button>
<button onclick={() => interval *= 2}>slow down</button>

<p>elapsed: {elapsed}</p>
```

- Note: Effects do not run during server-side rendering.

### Universal Reactivity:
- We can also use runes outside components, for example to share some global state.
- We can use it as a global context as:
```js
export const counter = $state({
count:0
});
```
- This causes an error, as we can't use runes in normal .js files, only .svelte.js files.
- Renaming the file as shared.svelte.js 
```shared.svelte.js
export const counter = $state({
	count: 0	
});
```
- Counter:
```svelte 
<script>
import { counter} from './shared.svelte.js';
</script>

<button onclick={() => counter.count += 1}>
clicks: {counter.count}
</button>
```

- This will share the state, and when we click any button, all the three will update simultaenously.
- We cannot export a `$state` declaration from a module if the declaration is reassigned (rather than just mutated) because the importers would have no way to know about it.