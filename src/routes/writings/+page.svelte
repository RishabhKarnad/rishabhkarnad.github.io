<script>
	import ArticleLink from '$lib/components/ArticleLink.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';

	const articles = [
		{
			title: 'Recreating Real World Terrain with React ThreeJS and WebGL Shaders',
			date: 'February 22, 2021',
			link: 'https://techblog.geekyants.com/recreating-real-world-terrain-with-react-threejs-and-webgl-shaders-1'
		},
		{
			title: 'Brilliant but Lazy',
			date: 'August 31, 2020',
			link: 'https://geekyants.com/en-us/blog/brilliant-but-lazy'
		},
		{
			title: 'Composition and Lodash FP',
			date: 'April 29, 2020',
			link: 'https://geekyants.com/en-us/blog/composition-and-lodash-fp'
		},
		{
			title: 'Things to keep in mind when using Lodash',
			date: 'February 11, 2020',
			link: 'https://geekyants.com/en-us/blog/things-to-keep-in-mind-when-using-lodash'
		},
		{
			title: 'Create your own Redux with RxJS',
			date: 'February 11, 2020',
			link: 'https://geekyants.com/en-us/blog/create-your-own-redux-with-rxjs'
		}
	];
</script>

<div>
	<PageHeading title="Writings" subheading="Stuff I've written over the years." />

	{#each articles as article}
		<ArticleLink title={article.title} link={article.link} date={article.date} />
	{/each}
</div>
