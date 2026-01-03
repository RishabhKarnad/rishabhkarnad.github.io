<script>
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Rishabh Karnad</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>
	<div class="content-container">
		{@render children()}
	</div>
</main>
<Footer />

<style>
	:global(body) {
		margin: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background-color: var(--color-background);
		color: var(--color-text);
	}

	:root {
		--color-background: #ffffff;
		--color-text: #333333;
	}

	@media (prefers-color-scheme: dark) {
		:root:not([data-theme='light']) {
			--color-background: #333333;
			--color-text: #ffffff;
		}
	}

	:root[data-theme='dark'] {
		--color-background: #333333;
		--color-text: #ffffff;
	}

	main {
		padding: 80px 0px 0 0px;
		max-width: 768px;
		margin: 0 auto;
	}

	main .content-container {
		padding: 0 24px;
	}
</style>
