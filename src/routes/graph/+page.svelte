<script lang="ts">
    import Graph from '$lib/components/Graph.svelte';
    
    interface Props {
        data: {
            nodes: any[];
            links: any[];
        }
    }

    let { data }: Props = $props();
</script>

<svelte:head>
    <title>Knowledge Graph</title>
</svelte:head>

<section>
    <h1>Knowledge Graph</h1>
    <p>Visualizing connections between notes.</p>
    
    <Graph nodes={data.nodes} links={data.links} />
</section>

<style>
    section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }
    h1 {
        margin-bottom: 0.5rem;
    }
    p {
        margin-bottom: 2rem;
        color: #666;
    }
    @media (prefers-color-scheme: dark) {
        p {
            color: #aaa;
        }
    }
</style>
