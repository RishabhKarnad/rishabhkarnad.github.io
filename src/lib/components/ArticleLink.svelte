<script>
	const { title, link, date } = $props();
</script>

<div class="article-link-container">
	<a href={link} target="_blank" rel="noopener noreferrer">
		{title}
	</a>
	{date} ({link.replace('https://', '').split('/')[0]})
</div>

<style>
	.article-link-container {
		display: flex;
		flex-direction: column;
		padding: 12px 0;
	}

	.article-link-container a {
		text-decoration: none;
		color: var(--color-primary);
		font-size: 1.2em;
		padding-bottom: 6px;
	}

	.article-link-container a:hover {
		text-decoration: underline;
	}
</style>
