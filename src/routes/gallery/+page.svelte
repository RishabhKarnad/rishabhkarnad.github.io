<script>
	import PageHeading from '$lib/components/PageHeading.svelte';
	import academia from '$lib/assets/pictures/academia.jpg';
	import blockB from '$lib/assets/pictures/block-b.jpg';
	import theInnards from '$lib/assets/pictures/the-innards.jpg';
	import happinessDontCostADime from '$lib/assets/pictures/happiness-dont-cost-a-dime.jpg';
	import busyAsACat from '$lib/assets/pictures/busy-as-a-cat.jpg';
	import fellDownACave from '$lib/assets/pictures/fell-down-a-cave.jpg';
	import nihonbashi from '$lib/assets/pictures/nihonbashi.jpg';
	import takashimaya from '$lib/assets/pictures/takashimaya.jpg';
	import japanStreet from '$lib/assets/pictures/japan-street.jpg';
	import ramen from '$lib/assets/pictures/ramen.jpg';
	import cookiesAndCream from '$lib/assets/pictures/cookies-and-cream.jpg';
	import thatsABigOne from '$lib/assets/pictures/thats-a-big-one.jpg';
	import dreamliners from '$lib/assets/pictures/dreamliners.jpg';
	import sevenEightySeven from '$lib/assets/pictures/787.jpg';
	import wallpaperWorthy from '$lib/assets/pictures/wallpaper-worthy.jpg';
	import cyberGatto from '$lib/assets/pictures/cyber-gatto.jpg';
	import puppy from '$lib/assets/pictures/puppy.jpg';
	import plant from '$lib/assets/pictures/plant.jpg';
	import hawnk from '$lib/assets/pictures/hawnk.jpg';
	import octobans from '$lib/assets/pictures/octobans.jpg';
	import plagueDoctor from '$lib/assets/pictures/plague-doctor.jpg';
	import carpeDiem from '$lib/assets/pictures/carpe-diem.jpg';
	import cats from '$lib/assets/pictures/cats.jpg';
	import stoatOfTheArt from '$lib/assets/pictures/stoat-of-the-art.jpg';
	import schemus from '$lib/assets/pictures/schemus.jpg';
	import acml2022 from '$lib/assets/pictures/acml2022.jpeg';

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
