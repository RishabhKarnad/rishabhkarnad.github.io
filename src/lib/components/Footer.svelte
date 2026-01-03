<script>
	const buildTime = new Date(__BUILD_TIME__);
</script>

<footer>
	© Copyright {buildTime.getFullYear()} Rishabh Karnad. Last updated: {buildTime.toLocaleDateString(
		'en-US',
		{ month: 'long', year: 'numeric', day: 'numeric' }
	)}
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		padding: 6px 0;
		font-size: 12px;
		color: var(--color-text);
		background-color: var(--color-background);
	}
</style>
