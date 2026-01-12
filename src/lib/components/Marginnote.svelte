<script>
	let { id, children } = $props();
</script>

<span>
	<label for={id} class="margin-toggle">&#8553;</label>
	<input type="checkbox" {id} class="margin-toggle" />
	<span class="marginnote">
		{@render children()}
	</span>
</span>
