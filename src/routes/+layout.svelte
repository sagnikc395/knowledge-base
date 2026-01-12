<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/tufte.css';
	import 'katex/dist/katex.min.css';

	let { data, children } = $props();
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="app-shell">
	<button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle Menu">
		☰
	</button>

	<nav class:open={isMenuOpen}>
		<h3><a href="/" onclick={() => (isMenuOpen = false)}>Knowledge Base</a></h3>
		{#each Object.entries(data.menu) as [category, items]}
			<div class="category">
				<p class="category-title"><strong>{category.toUpperCase()}</strong></p>
				<ul>
					{#each items as item}
						<li>
							<a href="/notes/{item.slug}" onclick={() => (isMenuOpen = false)}>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</nav>

	<main onclick={() => (isMenuOpen = false)}>
		{@render children()}
	</main>
</div>

<style>
	/* Global overrides for layout */
	:global(body) {
		padding-left: 0 !important; /* Reset Tufte's left padding to handle our sidebar */
		margin: 0 !important;
		width: 100% !important;
		max-width: 100% !important;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	.app-shell {
		display: flex;
		min-height: 100vh;
		position: relative;
	}

	/* Sidebar Navigation */
	nav {
		width: 250px;
		background: #fffff8; /* Match Tufte bg */
		border-right: 1px solid #eee;
		padding: 2rem 1rem;
		height: 100vh;
		overflow-y: auto;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		transition: transform 0.3s ease;
		font-size: 0.9rem;
	}

	nav h3 {
		margin-top: 0;
		font-size: 1.4rem;
	}

	nav ul {
		list-style: none;
		padding-left: 0;
		margin-top: 0.5rem;
	}

	nav li {
		margin-bottom: 0.5rem;
	}

	nav a {
		text-decoration: none;
		color: #111;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.category-title {
		margin-bottom: 0.5rem;
		margin-top: 1.5rem;
		display: block;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
	}

	/* Main Content Area */
	main {
		flex: 1;
		margin-left: 250px; /* Width of sidebar */
		padding: 2rem 4rem; /* Tufte-ish padding */
		max-width: 1000px; /* Constrain content width for readability */
		width: 100%;
		box-sizing: border-box;
	}

	/* Toggle Button (Mobile) */
	.menu-toggle {
		display: none;
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 200;
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.5rem;
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 4px;
	}

	/* Dark Mode adjustments */
	@media (prefers-color-scheme: dark) {
		nav {
			background-color: #151515;
			border-right-color: #333;
		}
		nav a {
			color: #ddd;
		}
		.menu-toggle {
			color: #ddd;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	/* Responsive Design */
	@media (max-width: 900px) {
		nav {
			transform: translateX(-100%);
			box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		}

		nav.open {
			transform: translateX(0);
		}

		main {
			margin-left: 0;
			padding: 4rem 1.5rem; /* Add top padding for toggle button */
		}

		.menu-toggle {
			display: block;
		}
		
		:global(body) {
			/* Restore Tufte-like behavior on mobile but managed by us */
			width: 100% !important;
		}
	}
</style>
