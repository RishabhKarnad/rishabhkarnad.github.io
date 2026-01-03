<script>
	import PageHeading from '$lib/components/PageHeading.svelte';

	const images = [
		{
			title: "IIT Hyderabad's main quadrangle",
			src: 'src/lib/assets/pictures/academia.jpg',
			alt: 'IITH main quad'
		},
		{
			title: 'Academic block B as seen from the terrace of the AI center',
			src: 'src/lib/assets/pictures/block-b.jpg',
			alt: 'IITH Block B'
		},
		{
			title: 'Academic block B - the innards',
			src: 'src/lib/assets/pictures/the-innards.jpg',
			alt: 'IITH Block B inside view'
		},
		{
			title: 'Peace and tranquility',
			src: 'src/lib/assets/pictures/happiness-dont-cost-a-dime.jpg',
			alt: 'IITH sunset'
		},
		{
			title: "I've been busier than a cat",
			src: 'src/lib/assets/pictures/busy-as-a-cat.jpg',
			alt: 'Somewhere near Vizag'
		},
		{
			title: "Help, I've fallen down a cave",
			src: 'src/lib/assets/pictures/fell-down-a-cave.jpg',
			alt: 'Somewhere inside a cave'
		},
		{
			title: 'Nihonbashi',
			src: 'src/lib/assets/pictures/nihonbashi.jpg',
			alt: 'Nihonbashi street'
		},
		{
			title: 'Inside the Takashimaya shopping center',
			src: 'src/lib/assets/pictures/takashimaya.jpg',
			alt: 'Takashimaya building view of the street'
		},
		{
			title: 'A street in Tokyo',
			src: 'src/lib/assets/pictures/japan-street.jpg',
			alt: 'A street in Tokyo'
		},
		{
			title: 'Liminal spaces',
			src: 'src/lib/assets/pictures/ramen.jpg',
			alt: 'Another street in Tokyo'
		},
		{
			title: 'Calm as cookies and cream',
			src: 'src/lib/assets/pictures/cookies-and-cream.jpg',
			alt: 'Somewhere above Hyderabad'
		},
		{
			title: "Woah, that's a big one!",
			src: 'src/lib/assets/pictures/thats-a-big-one.jpg',
			alt: 'Airbus A380 at Narita'
		},
		{
			title: 'A herd of grazing Dreamliners',
			src: 'src/lib/assets/pictures/dreamliners.jpg',
			alt: 'Boeing 787s at Narita'
		},
		{
			title: "She's a beaut",
			src: 'src/lib/assets/pictures/787.jpg',
			alt: 'Boeing 787 at Narita'
		},
		{
			title: 'Definitely wallpaper worthy',
			src: 'src/lib/assets/pictures/wallpaper-worthy.jpg',
			alt: 'Mumbai airport arrivals'
		},
		{
			title: 'Cyber-gatto',
			src: 'src/lib/assets/pictures/cyber-gatto.jpg',
			alt: 'A cat'
		},
		{
			title: 'I met a puppy and decided to sketch him',
			src: 'src/lib/assets/pictures/puppy.jpg',
			alt: 'A puppy sketch'
		},
		{
			title: 'Plant',
			src: 'src/lib/assets/pictures/plant.jpg',
			alt: 'A plant'
		},
		{
			title: 'Hawnk',
			src: 'src/lib/assets/pictures/hawnk.jpg',
			alt: 'A goose'
		},
		{
			title: 'Pun',
			src: 'src/lib/assets/pictures/octobans.jpg',
			alt: 'The octobans looked different on the description page'
		},
		{
			title: 'SCP-049',
			src: 'src/lib/assets/pictures/plague-doctor.jpg',
			alt: 'A plague doctor'
		},
		{
			title: 'Another pun',
			src: 'src/lib/assets/pictures/carpe-diem.jpg',
			alt: 'Carp Diem'
		},
		{
			title: 'Cats',
			src: 'src/lib/assets/pictures/cats.jpg',
			alt: 'Three cats'
		},
		{
			title: 'Stoat of the art',
			src: 'src/lib/assets/pictures/stoat-of-the-art.jpg',
			alt: 'A stoat painting a picture'
		},
		{
			title: 'Schemus the Shark',
			src: 'src/lib/assets/pictures/schemus.jpg',
			alt: 'Schemus the Shark'
		},
		{
			title: 'ACML 2022',
			src: 'src/lib/assets/pictures/acml2022.jpeg',
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
