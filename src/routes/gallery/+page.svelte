<script>
	import PageHeading from '$lib/components/PageHeading.svelte';

	import academiaThumb from '$lib/assets/thumbnails/academia.jpg';
	import blockBThumb from '$lib/assets/thumbnails/block-b.jpg';
	import theInnardsThumb from '$lib/assets/thumbnails/the-innards.jpg';
	import happinessDontCostADimeThumb from '$lib/assets/thumbnails/happiness-dont-cost-a-dime.jpg';
	import busyAsACatThumb from '$lib/assets/thumbnails/busy-as-a-cat.jpg';
	import fellDownACaveThumb from '$lib/assets/thumbnails/fell-down-a-cave.jpg';
	import nihonbashiThumb from '$lib/assets/thumbnails/nihonbashi.jpg';
	import takashimayaThumb from '$lib/assets/thumbnails/takashimaya.jpg';
	import japanStreetThumb from '$lib/assets/thumbnails/japan-street.jpg';
	import ramenThumb from '$lib/assets/thumbnails/ramen.jpg';
	import cookiesAndCreamThumb from '$lib/assets/thumbnails/cookies-and-cream.jpg';
	import thatsABigOneThumb from '$lib/assets/thumbnails/thats-a-big-one.jpg';
	import dreamlinersThumb from '$lib/assets/thumbnails/dreamliners.jpg';
	import sevenEightySevenThumb from '$lib/assets/thumbnails/787.jpg';
	import wallpaperWorthyThumb from '$lib/assets/thumbnails/wallpaper-worthy.jpg';
	import cyberGattoThumb from '$lib/assets/thumbnails/cyber-gatto.jpg';
	import puppyThumb from '$lib/assets/thumbnails/puppy.jpg';
	import plantThumb from '$lib/assets/thumbnails/plant.jpg';
	import hawnkThumb from '$lib/assets/thumbnails/hawnk.jpg';
	import octobansThumb from '$lib/assets/thumbnails/octobans.jpg';
	import plagueDoctorThumb from '$lib/assets/thumbnails/plague-doctor.jpg';
	import carpeDiemThumb from '$lib/assets/thumbnails/carpe-diem.jpg';
	import catsThumb from '$lib/assets/thumbnails/cats.jpg';
	import stoatOfTheArtThumb from '$lib/assets/thumbnails/stoat-of-the-art.jpg';
	import schemusThumb from '$lib/assets/thumbnails/schemus.jpg';
	import acml2022Thumb from '$lib/assets/thumbnails/acml2022.jpeg';

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

	import ImageModal from '$lib/components/ImageModal.svelte';

	let imageModal = $state(null);

	const images = [
		{
			id: 1,
			title: "IIT Hyderabad's main quadrangle",
			src: academia,
			thumb: academiaThumb,
			alt: 'IITH main quad'
		},
		{
			id: 2,
			title: 'Academic block B as seen from the terrace of the AI center',
			src: blockB,
			thumb: blockBThumb,
			alt: 'IITH Block B'
		},
		{
			id: 3,
			title: 'Academic block B - the innards',
			src: theInnards,
			thumb: theInnardsThumb,
			alt: 'IITH Block B inside view'
		},
		{
			id: 4,
			title: 'Peace and tranquility',
			src: happinessDontCostADime,
			thumb: happinessDontCostADimeThumb,
			alt: 'IITH sunset'
		},
		{
			id: 5,
			title: "I've been busier than a cat",
			src: busyAsACat,
			thumb: busyAsACatThumb,
			alt: 'Somewhere near Vizag'
		},
		{
			id: 6,
			title: "Help, I've fallen down a cave",
			src: fellDownACave,
			thumb: fellDownACaveThumb,
			alt: 'Somewhere inside a cave'
		},
		{
			id: 7,
			title: 'Nihonbashi',
			src: nihonbashi,
			thumb: nihonbashiThumb,
			alt: 'Nihonbashi street'
		},
		{
			id: 8,
			title: 'Inside the Takashimaya shopping center',
			src: takashimaya,
			thumb: takashimayaThumb,
			alt: 'Takashimaya building view of the street'
		},
		{
			id: 9,
			title: 'A street in Tokyo',
			src: japanStreet,
			thumb: japanStreetThumb,
			alt: 'A street in Tokyo'
		},
		{
			id: 10,
			title: 'Liminal spaces',
			src: ramen,
			thumb: ramenThumb,
			alt: 'Another street in Tokyo'
		},
		{
			id: 11,
			title: 'Calm as cookies and cream',
			src: cookiesAndCream,
			thumb: cookiesAndCreamThumb,
			alt: 'Somewhere above Hyderabad'
		},
		{
			id: 12,
			title: "Woah, that's a big one!",
			src: thatsABigOne,
			thumb: thatsABigOneThumb,
			alt: 'Airbus A380 at Narita'
		},
		{
			id: 13,
			title: 'A herd of grazing Dreamliners',
			src: dreamliners,
			thumb: dreamlinersThumb,
			alt: 'Boeing 787s at Narita'
		},
		{
			id: 14,
			title: "She's a beaut",
			src: sevenEightySeven,
			thumb: sevenEightySevenThumb,
			alt: 'Boeing 787 at Narita'
		},
		{
			id: 15,
			title: 'Definitely wallpaper worthy',
			src: wallpaperWorthy,
			thumb: wallpaperWorthyThumb,
			alt: 'Mumbai airport arrivals'
		},
		{
			id: 16,
			title: 'Cyber-gatto',
			src: cyberGatto,
			thumb: cyberGattoThumb,
			alt: 'A cat'
		},
		{
			id: 17,
			title: 'I met a puppy and decided to sketch him',
			src: puppy,
			thumb: puppyThumb,
			alt: 'A puppy sketch'
		},
		{
			id: 18,
			title: 'Plant',
			src: plant,
			thumb: plantThumb,
			alt: 'A plant'
		},
		{
			id: 19,
			title: 'Hawnk',
			src: hawnk,
			thumb: hawnkThumb,
			alt: 'A goose'
		},
		{
			id: 20,
			title: 'Pun',
			src: octobans,
			thumb: octobansThumb,
			alt: 'The octobans looked different on the description page'
		},
		{
			id: 21,
			title: 'SCP-049',
			src: plagueDoctor,
			thumb: plagueDoctorThumb,
			alt: 'A plague doctor'
		},
		{
			id: 22,
			title: 'Another pun',
			src: carpeDiem,
			thumb: carpeDiemThumb,
			alt: 'Carp Diem'
		},
		{
			id: 23,
			title: 'Cats',
			src: cats,
			thumb: catsThumb,
			alt: 'Three cats'
		},
		{
			id: 24,
			title: 'Stoat of the art',
			src: stoatOfTheArt,
			thumb: stoatOfTheArtThumb,
			alt: 'A stoat painting a picture'
		},
		{
			id: 25,
			title: 'Schemus the Shark',
			src: schemus,
			thumb: schemusThumb,
			alt: 'Schemus the Shark'
		},
		{
			id: 26,
			title: 'ACML 2022',
			src: acml2022,
			thumb: acml2022Thumb,
			alt: 'ACML 2022'
		}
	];
</script>

<PageHeading title="Gallery" subheading="Pictures and art by yours truly." />
<div class="gallery-container">
	{#each images as image}
		<button
			aria-label="open-image"
			class="image-container"
			onclick={() => imageModal.open(image.src, image.title, image.alt)}
		>
			<enhanced:img src={image.thumb} alt={image.alt} />
			<div class="image-overlay-container">
				<div class="image-overlay"></div>
				<p class="image-overlay-text">{image.title}</p>
			</div>
		</button>
	{/each}
</div>
<ImageModal bind:this={imageModal} />

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
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		overflow: hidden;
		position: relative;
	}

	.image-container:hover enhanced\:img {
		transform: scale(110%);
		transition: transform 0.3s ease-in-out;
	}

	enhanced\:img {
		object-fit: cover;
		width: 100%;
	}

	.image-container .image-overlay-container {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 5;
		display: flex;
		flex-direction: row;
		align-items: center;
		opacity: 0;
		text-align: left;
		font-size: 18px;
	}

	.image-container:hover .image-overlay-container {
		opacity: 1;
		transition: opacity 0.2s ease-in-out;
	}

	.image-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: var(--color-text);
		opacity: 0.5;
	}

	.image-overlay-text {
		padding: 12px;
		z-index: 5;
		background-color: var(--color-background);
		color: var(--color-text);
	}
</style>
