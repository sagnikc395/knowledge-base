<script lang="ts">
	let { data } = $props();
</script>

<section>
	<h1>All Notes</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<a href="/notes/{post.slug}">{post.title}</a>
				{#if post.date}
					<span class="date">
						— {new Date(post.date).toLocaleDateString()}
					</span>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
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
