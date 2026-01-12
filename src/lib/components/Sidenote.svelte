<script>
	let { id, children } = $props();
</script>

<span>
	<label for={id} class="margin-toggle sidenote-number"></label>
	<input type="checkbox" {id} class="margin-toggle" />
	<span class="sidenote">
		{@render children()}
	</span>
</span>
