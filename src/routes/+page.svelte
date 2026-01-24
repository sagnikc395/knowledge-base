<script lang="ts">
	import { base } from '$app/paths';
	let { data } = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section>
	<h1 class="title">💡 Knowledge Base</h1>
	<p class="subtitle">A collection of scratch notes and write-ups.</p>

	<div class="content">
		<div class="categories-grid">
			{#each Object.entries(data.menu) as [category, items] (category)}
				<div class="category-card">
					<h2>{category.toUpperCase()}</h2>
					<ul>
						{#each items as item (item.slug)}
							<li>
								<a href="{base}/notes/{item.slug}">{item.title}</a>
								{#if item.date}
									<span class="date">
										— {new Date(item.date).toLocaleDateString()}
									</span>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.categories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.category-card h2 {
		font-size: 1.2rem;
		border-bottom: 1px solid #ccc;
		padding-bottom: 0.5rem;
		margin-top: 0;
	}

	.date {
		font-size: 0.8rem;
		color: #666;
	}

	@media (prefers-color-scheme: dark) {
		.date {
			color: #aaa;
		}
	}
</style>
