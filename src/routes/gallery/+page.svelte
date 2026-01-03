<script>
	import PageHeading from '$lib/components/PageHeading.svelte';
	import academia from '$lib/assets/thumbnails/academia.jpg';
	import blockB from '$lib/assets/thumbnails/block-b.jpg';
	import theInnards from '$lib/assets/thumbnails/the-innards.jpg';
	import happinessDontCostADime from '$lib/assets/thumbnails/happiness-dont-cost-a-dime.jpg';
	import busyAsACat from '$lib/assets/thumbnails/busy-as-a-cat.jpg';
	import fellDownACave from '$lib/assets/thumbnails/fell-down-a-cave.jpg';
	import nihonbashi from '$lib/assets/thumbnails/nihonbashi.jpg';
	import takashimaya from '$lib/assets/thumbnails/takashimaya.jpg';
	import japanStreet from '$lib/assets/thumbnails/japan-street.jpg';
	import ramen from '$lib/assets/thumbnails/ramen.jpg';
	import cookiesAndCream from '$lib/assets/thumbnails/cookies-and-cream.jpg';
	import thatsABigOne from '$lib/assets/thumbnails/thats-a-big-one.jpg';
	import dreamliners from '$lib/assets/thumbnails/dreamliners.jpg';
	import sevenEightySeven from '$lib/assets/thumbnails/787.jpg';
	import wallpaperWorthy from '$lib/assets/thumbnails/wallpaper-worthy.jpg';
	import cyberGatto from '$lib/assets/thumbnails/cyber-gatto.jpg';
	import puppy from '$lib/assets/thumbnails/puppy.jpg';
	import plant from '$lib/assets/thumbnails/plant.jpg';
	import hawnk from '$lib/assets/thumbnails/hawnk.jpg';
	import octobans from '$lib/assets/thumbnails/octobans.jpg';
	import plagueDoctor from '$lib/assets/thumbnails/plague-doctor.jpg';
	import carpeDiem from '$lib/assets/thumbnails/carpe-diem.jpg';
	import cats from '$lib/assets/thumbnails/cats.jpg';
	import stoatOfTheArt from '$lib/assets/thumbnails/stoat-of-the-art.jpg';
	import schemus from '$lib/assets/thumbnails/schemus.jpg';
	import acml2022 from '$lib/assets/thumbnails/acml2022.jpeg';

	const images = [
		{
			title: "IIT Hyderabad's main quadrangle",
			src: academia,
			alt: 'IITH main quad'
		},
		{
			title: 'Academic block B as seen from the terrace of the AI center',
			src: blockB,
			alt: 'IITH Block B'
		},
		{
			title: 'Academic block B - the innards',
			src: theInnards,
			alt: 'IITH Block B inside view'
		},
		{
			title: 'Peace and tranquility',
			src: happinessDontCostADime,
			alt: 'IITH sunset'
		},
		{
			title: "I've been busier than a cat",
			src: busyAsACat,
			alt: 'Somewhere near Vizag'
		},
		{
			title: "Help, I've fallen down a cave",
			src: fellDownACave,
			alt: 'Somewhere inside a cave'
		},
		{
			title: 'Nihonbashi',
			src: nihonbashi,
			alt: 'Nihonbashi street'
		},
		{
			title: 'Inside the Takashimaya shopping center',
			src: takashimaya,
			alt: 'Takashimaya building view of the street'
		},
		{
			title: 'A street in Tokyo',
			src: japanStreet,
			alt: 'A street in Tokyo'
		},
		{
			title: 'Liminal spaces',
			src: ramen,
			alt: 'Another street in Tokyo'
		},
		{
			title: 'Calm as cookies and cream',
			src: cookiesAndCream,
			alt: 'Somewhere above Hyderabad'
		},
		{
			title: "Woah, that's a big one!",
			src: thatsABigOne,
			alt: 'Airbus A380 at Narita'
		},
		{
			title: 'A herd of grazing Dreamliners',
			src: dreamliners,
			alt: 'Boeing 787s at Narita'
		},
		{
			title: "She's a beaut",
			src: sevenEightySeven,
			alt: 'Boeing 787 at Narita'
		},
		{
			title: 'Definitely wallpaper worthy',
			src: wallpaperWorthy,
			alt: 'Mumbai airport arrivals'
		},
		{
			title: 'Cyber-gatto',
			src: cyberGatto,
			alt: 'A cat'
		},
		{
			title: 'I met a puppy and decided to sketch him',
			src: puppy,
			alt: 'A puppy sketch'
		},
		{
			title: 'Plant',
			src: plant,
			alt: 'A plant'
		},
		{
			title: 'Hawnk',
			src: hawnk,
			alt: 'A goose'
		},
		{
			title: 'Pun',
			src: octobans,
			alt: 'The octobans looked different on the description page'
		},
		{
			title: 'SCP-049',
			src: plagueDoctor,
			alt: 'A plague doctor'
		},
		{
			title: 'Another pun',
			src: carpeDiem,
			alt: 'Carp Diem'
		},
		{
			title: 'Cats',
			src: cats,
			alt: 'Three cats'
		},
		{
			title: 'Stoat of the art',
			src: stoatOfTheArt,
			alt: 'A stoat painting a picture'
		},
		{
			title: 'Schemus the Shark',
			src: schemus,
			alt: 'Schemus the Shark'
		},
		{
			title: 'ACML 2022',
			src: acml2022,
			alt: 'ACML 2022'
		}
	];
</script>

<PageHeading title="Gallery" subheading="Pictures and art by yours truly." />
<div class="gallery-container">
	{#each images as image}
		<div class="image-container">
			<enhanced:img src={image.src} alt={image.alt} />
		</div>
	{/each}
</div>

<style>
	.gallery-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		margin-bottom: 40px;
	}

	.image-container {
		height: 240px;
		width: auto;
		display: flex;
	}

	.image-container:hover {
		opacity: 0.5;
		transition: opacity 0.3s ease-in-out;
	}

	enhanced\:img {
		object-fit: cover;
		width: 100%;
	}
</style>
