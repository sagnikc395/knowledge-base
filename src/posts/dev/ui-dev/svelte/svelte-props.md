---
title: Svelte Props
date: 26/7/25
tags:
  - frontend
  - svelte
  - ui
  - props
  - state
---
### Declaring Props:
- In any real application, we'll need to pass data from one component down to its children. 
- To do that , we need to declare properties, generally shortened to 'props'. 
- In Svelte, we do that with the `$props` rune. 
```svelte 
<!--  Nested.svelte -->
<script>
	let { answer,desc } = $props();
</script>

<p>The answer is {answer}</p>
<p>Another {desc} </p>

<!-- -->
<script>
	import Nested from './Nested.svelte';
</script>

<Nested answer={42}/>
<Nested answer={69} desc={"Some Description"} />
```

### Default Values:
- We can easily specify default values for props in `Nested.svelte`.
```svelte 
<script lang="ts">
	let {answer = 'another ans'} = $props();
</script>
```

- Now if we add a second component without an answer prop, it will fall back to the default!

### Spread Props:
- We need not explicitly use all the various properties of the sent object via props.
- But if the properties of sent props maps to the expected props , we can 'spread' them onto the component instead.
```svelte 
<!-- PackgeInfo.sv-->
<script>
	let { name, version, description, website } = $props();
</script>

<p>
	The <code>{name}</code> package is {description}. Download version {version} from
	<a href="https://www.npmjs.com/package/{name}">npm</a> and <a href={website}>learn more here</a>
</p>

<!-- App.svelte -->
<script>
import PackageInfo from './PackageInfo.svelte';

const pkg = {
	name : 'svelte',
	version: 5,
	description: 'blazing fast',
	website: 'https://svelte.dev'
};
</script>


<PackageInfo {...pkg} />
```

- Similarly in `PackageInfo.svelte` we can get an object containing all the props that were passed into a component using a rest property:
```svelte 
<script>
	let {name, ...stuff} = $props();
</script>
```

- Or we can skip the destructuring altogether and access the properties by their object paths.
- 