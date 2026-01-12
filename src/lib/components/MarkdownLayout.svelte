<script>
    import Sidenote from './Sidenote.svelte';
    import Marginnote from './Marginnote.svelte';
    import Image from './Image.svelte';
    
    let { children } = $props();
</script>

{@render children()}
