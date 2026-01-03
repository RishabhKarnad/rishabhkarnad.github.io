<script>
	import DarkModeSwitch from './DarkModeSwitch.svelte';

	const links = [
		{ name: 'About', href: '/' },
		{ name: 'Writings', href: '/writings' },
		{ name: 'Gallery', href: '/gallery' }
	];
</script>

<nav class="header">
	<div class="nav-container">
		<div class="links-container">
			{#each links as link}
				<a href={link.href} class="nav-link">{link.name}</a>
			{/each}
		</div>
		<DarkModeSwitch />
	</div>
</nav>

<style>
	.header {
		width: 100%;
		height: 60px;
		background-color: var(--color-background);
		display: flex;
		align-items: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		position: fixed;
		top: 0;
	}

	.nav-link {
		margin: 6px 12px;
		text-decoration: none;
		color: var(--color-text);
		font-weight: bold;
	}

	.header .nav-container {
		width: 100%;
		max-width: 768px;
		margin: auto;
		display: flex;
		align-items: center;
	}

	.header .nav-container .links-container {
		width: 100%;
		margin: auto 12px;
		display: flex;
		align-items: center;
	}
</style>
