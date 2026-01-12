<script>
	export let id;
</script>

<span>
	<label for={id} class="margin-toggle">&#8553;</label>
	<input type="checkbox" {id} class="margin-toggle" />
	<span class="marginnote">
		<slot />
	</span>
</span>
