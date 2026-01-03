<script>
	import profilePic from '$lib/assets/profile.jpg';
	import Github from '$lib/components/Github.svelte';
	import LinkedIn from '$lib/components/LinkedIn.svelte';
</script>

<picture>
	<img src={profilePic} alt="Rishabh Karnad" class="profile-pic" />
</picture>
<h1>Rishabh Karnad</h1>
<p>
	I'm a data scientist and machine learning engineer with an interest in causal learning, Bayesian
	learning, AI as a tool in mitigating climate change and AI for Good. I completed my Master's
	degree in at <a href="https://iith.ac.in/">IIT Hyderabad</a>, while working as a research
	assistant under <a href="https://sites.google.com/view/brainiith/home">Dr. Srijith P.K</a>. I have
	also worked as a software developer and have built web and mobile apps at scale.
</p>
<div class="socials-container">
	<Github />
	<LinkedIn />
</div>

<style>
	.profile-pic {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		object-fit: cover;
		display: block;
		margin: 20px auto;
	}

	h1 {
		text-align: center;
		font-size: 2.5em;
		margin: 20px auto;
	}

	p {
		margin: 20px auto;
		text-align: justify;
	}

	a {
		color: var(--color-text);
		text-decoration: underline;
	}

	.socials-container {
		display: flex;
		justify-content: center;
		margin: 20px auto;
	}
</style>
