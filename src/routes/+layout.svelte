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
		/* Tufte's core layout requirements */
		width: 87.5%;
		margin-left: auto;
		margin-right: auto;
		max-width: 1400px;
		counter-reset: sidenote-counter;
	}
</style>
