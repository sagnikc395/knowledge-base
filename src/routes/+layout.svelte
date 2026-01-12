<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import '$lib/tufte.css';
</script>

<main>
	<article>
		{@render children?.()}
	</article>
</main>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global(body) {
		/* Tufte defaults */
		counter-reset: sidenote-counter;
	}

	/* Ensure markdown images don't break the margin */
	:global(article img) {
		max-width: 100%;
	}
</style>
