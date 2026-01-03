<script>
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global(body) {
		margin: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background-color: var(--color-background);
		color: var(--color-text);
	}

	:global(:root) {
		--color-background: #ffffff;
		--color-text: #333333;
	}

	main {
		padding-top: 80px;
		max-width: 768px;
		margin: 0 auto;
	}
</style>
