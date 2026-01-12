<script lang="ts">
	interface Props {
		src: string;
		alt?: string;
		caption?: string;
		full?: boolean;
	}

	let { src, alt = '', caption = '', full = false }: Props = $props();
</script>

<figure class={full ? 'fullwidth' : ''}>
	<img {src} {alt} />
	{#if caption}
		<figcaption class="marginnote">{caption}</figcaption>
	{/if}
</figure>
