<script>
	export let id; //unique id for the checkbox
</script>

<span>
	<label for={id} class="margin-toggle sidenote-number"></label>
	<input type="checkbox" {id} class="margin-toggle" />
	<span class="sidenote">
		<slot />
	</span>
</span>
