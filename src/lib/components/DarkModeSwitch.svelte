<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import Sun from '$lib/components/Sun.svelte';
	import Moon from '$lib/components/Moon.svelte';
	import HalfCircle from '$lib/components/HalfCircle.svelte';

	let currentTheme = 'light';

	onMount(() => {
		if (browser) {
			const saved = localStorage.getItem('theme') || '';
			localStorage.setItem('theme', saved);
			document.documentElement.setAttribute('data-theme', saved);
			currentTheme = saved;
		}
	});

	function toggle() {
		if (currentTheme === 'light') {
			currentTheme = 'dark';
		} else if (currentTheme === 'dark') {
			currentTheme = '';
		} else {
			currentTheme = 'light';
		}
		document.documentElement.setAttribute('data-theme', currentTheme);
		localStorage.setItem('theme', currentTheme);
	}
</script>

<div class="switch-container">
	<button onclick={toggle}>
		{#if currentTheme == ''}
			<Sun />
		{/if}
		{#if currentTheme == 'light'}
			<Moon />
		{/if}
		{#if currentTheme == 'dark'}
			<HalfCircle />
		{/if}
	</button>
</div>

<style>
	.switch-container {
		padding-right: 18px;
	}

	button {
		background: none;
		height: 30px;
		width: 30px;
		border: none;
		cursor: pointer;
	}
</style>
