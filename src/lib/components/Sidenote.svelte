<script lang="ts">
	export let id: string;
</script>

<span>
	<label for={id} class="margin-toggle sidenote-number"></label>
	<input type="checkbox" {id} class="margin-toggle" />
	<span class="sidenote">
		<slot />
	</span>
</span>
