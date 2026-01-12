<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<section>
	<h1 class="title">{data.meta.title}</h1>
	<p class="subtitle">{data.meta.date}</p>

	<div class="content">
		<svelte:component this={data.content} />
	</div>
</section>
