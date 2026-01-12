<script lang="ts">
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    interface Node {
        id: string;
        title: string;
        group: string;
        x?: number;
        y?: number;
        fx?: number | null;
        fy?: number | null;
    }

    interface Link {
        source: string | Node;
        target: string | Node;
    }

    interface Props {
        nodes: Node[];
        links: Link[];
    }

    let { nodes, links }: Props = $props();

    let container: HTMLDivElement | undefined = $state();
    
    // We rely on the container size
    let width = $state(800);
    let height = $state(600);

    onMount(() => {
        if (!container || !nodes.length) return;

        width = container.clientWidth;
        height = container.clientHeight || 600;

        // Clear previous SVG
        d3.select(container).selectAll('*').remove();

        const svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [0, 0, width, height])
            .style('max-width', '100%')
            .style('height', 'auto');

        // Add a group for the graph content to allow zooming/panning
        const g = svg.append('g');

        const zoom = d3.zoom()
            .scaleExtent([0.1, 8])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom as any)
           .on("dblclick.zoom", null); // Disable double click zoom

        // Color scale
        const categories = Array.from(new Set(nodes.map(d => d.group || 'default')));
        const color = d3.scaleOrdinal(d3.schemeCategory10).domain(categories);

        // Simulation
        // Create copies to avoid mutating props directly
        const simulationNodes = nodes.map(d => ({...d}));
        const simulationLinks = links.map(d => ({...d}));

        const simulation = d3.forceSimulation(simulationNodes)
            .force('link', d3.forceLink(simulationLinks).id((d: any) => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collide', d3.forceCollide().radius(20));

        const link = g.append('g')
            .attr('stroke', 'var(--link-color, #999)')
            .attr('stroke-opacity', 0.8)
            .selectAll('line')
            .data(simulationLinks)
            .join('line')
            .attr('stroke-width', 2);

        const node = g.append('g')
            .attr('stroke', '#fff')
            .attr('stroke-width', 1.5)
            .selectAll('circle')
            .data(simulationNodes)
            .join('circle')
            .attr('r', 6)
            .attr('fill', (d: any) => color(d.group || 'default') as string)
            .style('cursor', 'pointer')
            .call(drag(simulation) as any);

        node.append('title')
            .text((d: any) => d.title);
        
        const labels = g.append('g')
            .attr('class', 'labels')
            .selectAll('text')
            .data(simulationNodes)
            .enter()
            .append('text')
            .text((d: any) => d.title)
            .attr('font-size', '10px')
            .attr('dx', 8)
            .attr('dy', 3)
            .attr('pointer-events', 'none')
            .attr('fill', 'currentColor');

        simulation.on('tick', () => {
            link
                .attr('x1', (d: any) => d.source.x)
                .attr('y1', (d: any) => d.source.y)
                .attr('x2', (d: any) => d.target.x)
                .attr('y2', (d: any) => d.target.y);

            node
                .attr('cx', (d: any) => d.x)
                .attr('cy', (d: any) => d.y);
            
            labels
                .attr('x', (d: any) => d.x)
                .attr('y', (d: any) => d.y);
        });

        function drag(simulation: any) {
            function dragstarted(event: any) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event: any) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event: any) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended);
        }

        node.on('click', (event, d: any) => {
             // Navigate to the note
             window.location.href = `/notes/${d.id}`;
        });

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                 const w = entry.contentRect.width;
                 const h = entry.contentRect.height;
                 svg.attr('width', w).attr('height', h).attr('viewBox', [0, 0, w, h]);
                 simulation.force('center', d3.forceCenter(w / 2, h / 2));
                 simulation.alpha(0.3).restart();
            }
        });
        resizeObserver.observe(container);

        return () => {
            simulation.stop();
            resizeObserver.disconnect();
        };
    });
</script>

<div class="graph-container" bind:this={container}></div>

<style>
    .graph-container {
        width: 100%;
        height: 600px;
        border: 1px solid var(--border-color, #eee);
        border-radius: 8px;
        background: var(--bg-color, #fdfdfd);
        overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
        .graph-container {
            background: #1a1a1a;
            border-color: #333;
            --link-color: #bbb;
        }
        :global(.labels text) {
            fill: #ccc;
            /* Ensure text is visible in dark mode */
        }
    }
</style>
