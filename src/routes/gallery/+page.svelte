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

	import academiaThumbWebp from '$lib/assets/thumbnails/academia.webp';
	import blockBThumbWebp from '$lib/assets/thumbnails/block-b.webp';
	import theInnardsThumbWebp from '$lib/assets/thumbnails/the-innards.webp';
	import happinessDontCostADimeThumbWebp from '$lib/assets/thumbnails/happiness-dont-cost-a-dime.webp';
	import busyAsACatThumbWebp from '$lib/assets/thumbnails/busy-as-a-cat.webp';
	import fellDownACaveThumbWebp from '$lib/assets/thumbnails/fell-down-a-cave.webp';
	import nihonbashiThumbWebp from '$lib/assets/thumbnails/nihonbashi.webp';
	import takashimayaThumbWebp from '$lib/assets/thumbnails/takashimaya.webp';
	import japanStreetThumbWebp from '$lib/assets/thumbnails/japan-street.webp';
	import ramenThumbWebp from '$lib/assets/thumbnails/ramen.webp';
	import cookiesAndCreamThumbWebp from '$lib/assets/thumbnails/cookies-and-cream.webp';
	import thatsABigOneThumbWebp from '$lib/assets/thumbnails/thats-a-big-one.webp';
	import dreamlinersThumbWebp from '$lib/assets/thumbnails/dreamliners.webp';
	import sevenEightySevenThumbWebp from '$lib/assets/thumbnails/787.webp';
	import wallpaperWorthyThumbWebp from '$lib/assets/thumbnails/wallpaper-worthy.webp';
	import cyberGattoThumbWebp from '$lib/assets/thumbnails/cyber-gatto.webp';
	import puppyThumbWebp from '$lib/assets/thumbnails/puppy.webp';
	import plantThumbWebp from '$lib/assets/thumbnails/plant.webp';
	import hawnkThumbWebp from '$lib/assets/thumbnails/hawnk.webp';
	import octobansThumbWebp from '$lib/assets/thumbnails/octobans.webp';
	import plagueDoctorThumbWebp from '$lib/assets/thumbnails/plague-doctor.webp';
	import carpeDiemThumbWebp from '$lib/assets/thumbnails/carpe-diem.webp';
	import catsThumbWebp from '$lib/assets/thumbnails/cats.webp';
	import stoatOfTheArtThumbWebp from '$lib/assets/thumbnails/stoat-of-the-art.webp';
	import schemusThumbWebp from '$lib/assets/thumbnails/schemus.webp';
	import acml2022ThumbWebp from '$lib/assets/thumbnails/acml2022.webp';

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

	import academiaWebp from '$lib/assets/pictures/academia.webp';
	import blockBWebp from '$lib/assets/pictures/block-b.webp';
	import theInnardsWebp from '$lib/assets/pictures/the-innards.webp';
	import happinessDontCostADimeWebp from '$lib/assets/pictures/happiness-dont-cost-a-dime.webp';
	import busyAsACatWebp from '$lib/assets/pictures/busy-as-a-cat.webp';
	import fellDownACaveWebp from '$lib/assets/pictures/fell-down-a-cave.webp';
	import nihonbashiWebp from '$lib/assets/pictures/nihonbashi.webp';
	import takashimayaWebp from '$lib/assets/pictures/takashimaya.webp';
	import japanStreetWebp from '$lib/assets/pictures/japan-street.webp';
	import ramenWebp from '$lib/assets/pictures/ramen.webp';
	import cookiesAndCreamWebp from '$lib/assets/pictures/cookies-and-cream.webp';
	import thatsABigOneWebp from '$lib/assets/pictures/thats-a-big-one.webp';
	import dreamlinersWebp from '$lib/assets/pictures/dreamliners.webp';
	import sevenEightySevenWebp from '$lib/assets/pictures/787.webp';
	import wallpaperWorthyWebp from '$lib/assets/pictures/wallpaper-worthy.webp';
	import cyberGattoWebp from '$lib/assets/pictures/cyber-gatto.webp';
	import puppyWebp from '$lib/assets/pictures/puppy.webp';
	import plantWebp from '$lib/assets/pictures/plant.webp';
	import hawnkWebp from '$lib/assets/pictures/hawnk.webp';
	import octobansWebp from '$lib/assets/pictures/octobans.webp';
	import plagueDoctorWebp from '$lib/assets/pictures/plague-doctor.webp';
	import carpeDiemWebp from '$lib/assets/pictures/carpe-diem.webp';
	import catsWebp from '$lib/assets/pictures/cats.webp';
	import stoatOfTheArtWebp from '$lib/assets/pictures/stoat-of-the-art.webp';
	import schemusWebp from '$lib/assets/pictures/schemus.webp';
	import acml2022Webp from '$lib/assets/pictures/acml2022.webp';

	import ImageModal from '$lib/components/ImageModal.svelte';

	let imageModal = $state(null);

	const images = [
		{
			id: 1,
			title: "IIT Hyderabad's main quadrangle",
			src: academia,
			srcWebp: academiaWebp,
			thumb: academiaThumb,
			thumbWebp: academiaThumbWebp,
			alt: 'IITH main quad'
		},
		{
			id: 2,
			title: 'Academic block B as seen from the terrace of the AI center',
			src: blockB,
			srcWebp: blockBWebp,
			thumb: blockBThumb,
			thumbWebp: blockBThumbWebp,
			alt: 'IITH Block B'
		},
		{
			id: 3,
			title: 'Academic block B - the innards',
			src: theInnards,
			srcWebp: theInnardsWebp,
			thumb: theInnardsThumb,
			thumbWebp: theInnardsThumbWebp,
			alt: 'IITH Block B inside view'
		},
		{
			id: 4,
			title: 'Peace and tranquility',
			src: happinessDontCostADime,
			srcWebp: happinessDontCostADimeWebp,
			thumb: happinessDontCostADimeThumb,
			thumbWebp: happinessDontCostADimeThumbWebp,
			alt: 'IITH sunset'
		},
		{
			id: 5,
			title: "I've been busier than a cat",
			src: busyAsACat,
			srcWebp: busyAsACatWebp,
			thumb: busyAsACatThumb,
			thumbWebp: busyAsACatThumbWebp,
			alt: 'Somewhere near Vizag'
		},
		{
			id: 6,
			title: "Help, I've fallen down a cave",
			src: fellDownACave,
			srcWebp: fellDownACaveWebp,
			thumb: fellDownACaveThumb,
			thumbWebp: fellDownACaveThumbWebp,
			alt: 'Somewhere inside a cave'
		},
		{
			id: 7,
			title: 'Nihonbashi',
			src: nihonbashi,
			srcWebp: nihonbashiWebp,
			thumb: nihonbashiThumb,
			thumbWebp: nihonbashiThumbWebp,
			alt: 'Nihonbashi street'
		},
		{
			id: 8,
			title: 'Inside the Takashimaya shopping center',
			src: takashimaya,
			srcWebp: takashimayaWebp,
			thumb: takashimayaThumb,
			thumbWebp: takashimayaThumbWebp,
			alt: 'Takashimaya building view of the street'
		},
		{
			id: 9,
			title: 'A street in Tokyo',
			src: japanStreet,
			srcWebp: japanStreetWebp,
			thumb: japanStreetThumb,
			thumbWebp: japanStreetThumbWebp,
			alt: 'A street in Tokyo'
		},
		{
			id: 10,
			title: 'Liminal spaces',
			src: ramen,
			srcWebp: ramenWebp,
			thumb: ramenThumb,
			thumbWebp: ramenThumbWebp,
			alt: 'Another street in Tokyo'
		},
		{
			id: 11,
			title: 'Calm as cookies and cream',
			src: cookiesAndCream,
			srcWebp: cookiesAndCreamWebp,
			thumb: cookiesAndCreamThumb,
			thumbWebp: cookiesAndCreamThumbWebp,
			alt: 'Somewhere above Hyderabad'
		},
		{
			id: 12,
			title: "Woah, that's a big one!",
			src: thatsABigOne,
			srcWebp: thatsABigOneWebp,
			thumb: thatsABigOneThumb,
			thumbWebp: thatsABigOneThumbWebp,
			alt: 'Airbus A380 at Narita'
		},
		{
			id: 13,
			title: 'A herd of grazing Dreamliners',
			src: dreamliners,
			srcWebp: dreamlinersWebp,
			thumb: dreamlinersThumb,
			thumbWebp: dreamlinersThumbWebp,
			alt: 'Boeing 787s at Narita'
		},
		{
			id: 14,
			title: "She's a beaut",
			src: sevenEightySeven,
			srcWebp: sevenEightySevenWebp,
			thumb: sevenEightySevenThumb,
			thumbWebp: sevenEightySevenThumbWebp,
			alt: 'Boeing 787 at Narita'
		},
		{
			id: 15,
			title: 'Definitely wallpaper worthy',
			src: wallpaperWorthy,
			srcWebp: wallpaperWorthyWebp,
			thumb: wallpaperWorthyThumb,
			thumbWebp: wallpaperWorthyThumbWebp,
			alt: 'Mumbai airport arrivals'
		},
		{
			id: 16,
			title: 'Cyber-gatto',
			src: cyberGatto,
			srcWebp: cyberGattoWebp,
			thumb: cyberGattoThumb,
			thumbWebp: cyberGattoThumbWebp,
			alt: 'A cat'
		},
		{
			id: 17,
			title: 'I met a puppy and decided to sketch him',
			src: puppy,
			srcWebp: puppyWebp,
			thumb: puppyThumb,
			thumbWebp: puppyThumbWebp,
			alt: 'A puppy sketch'
		},
		{
			id: 18,
			title: 'Plant',
			src: plant,
			srcWebp: plantWebp,
			thumb: plantThumb,
			thumbWebp: plantThumbWebp,
			alt: 'A plant'
		},
		{
			id: 19,
			title: 'Hawnk',
			src: hawnk,
			srcWebp: hawnkWebp,
			thumb: hawnkThumb,
			thumbWebp: hawnkThumbWebp,
			alt: 'A goose'
		},
		{
			id: 20,
			title: 'Pun',
			src: octobans,
			srcWebp: octobansWebp,
			thumb: octobansThumb,
			thumbWebp: octobansThumbWebp,
			alt: 'The octobans looked different on the description page'
		},
		{
			id: 21,
			title: 'SCP-049',
			src: plagueDoctor,
			srcWebp: plagueDoctorWebp,
			thumb: plagueDoctorThumb,
			thumbWebp: plagueDoctorThumbWebp,
			alt: 'A plague doctor'
		},
		{
			id: 22,
			title: 'Another pun',
			src: carpeDiem,
			srcWebp: carpeDiemWebp,
			thumb: carpeDiemThumb,
			thumbWebp: carpeDiemThumbWebp,
			alt: 'Carp Diem'
		},
		{
			id: 23,
			title: 'Cats',
			src: cats,
			srcWebp: catsWebp,
			thumb: catsThumb,
			thumbWebp: catsThumbWebp,
			alt: 'Three cats'
		},
		{
			id: 24,
			title: 'Stoat of the art',
			src: stoatOfTheArt,
			srcWebp: stoatOfTheArtWebp,
			thumb: stoatOfTheArtThumb,
			thumbWebp: stoatOfTheArtThumbWebp,
			alt: 'A stoat painting a picture'
		},
		{
			id: 25,
			title: 'Schemus the Shark',
			src: schemus,
			srcWebp: schemusWebp,
			thumb: schemusThumb,
			thumbWebp: schemusThumbWebp,
			alt: 'Schemus the Shark'
		},
		{
			id: 26,
			title: 'ACML 2022',
			src: acml2022,
			srcWebp: acml2022Webp,
			thumb: acml2022Thumb,
			thumbWebp: acml2022ThumbWebp,
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
			onclick={() => imageModal.open(image.srcWebp, image.title, image.alt)}
		>
			<enhanced:img src={image.thumbWebp} alt={image.alt} />
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
