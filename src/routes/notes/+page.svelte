<script lang="ts">
	import type { TreeNode } from '$lib/types';
	let { data } = $props();
</script>

{#snippet treeNode(node: TreeNode)}
	<li>
		{#if node.type === 'folder'}
			<details open>
				<summary>{node.name}</summary>
				<ul>
					{#each node.children as child}
						{@render treeNode(child)}
					{/each}
				</ul>
			</details>
		{:else}
			<a href="/notes/{node.post.slug}">{node.name}</a>
			{#if node.post.date}
				<span class="date">
					— {new Date(node.post.date).toLocaleDateString()}
				</span>
			{/if}
		{/if}
	</li>
{/snippet}

<section>
	<h1>All Notes</h1>

	<ul class="tree">
		{#each data.tree as node}
			{@render treeNode(node)}
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

	ul.tree {
		list-style: none;
		padding-left: 1rem;
	}

	/* Reset width for nested lists so they don't shrink too much if tufte applies to all ul */
	:global(ul.tree ul) {
		width: auto;
		padding-left: 1.5rem;
		list-style: none;
	}

	summary {
		cursor: pointer;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}
</style>
