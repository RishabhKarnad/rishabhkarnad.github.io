<script>
	let dialog;
	let imageSrc = '';
	let imageAlt = '';
	let imageTitle = '';

	export function open(src, title, alt = '') {
		imageSrc = src;
		imageAlt = alt;
		imageTitle = title;
		dialog.showModal();
	}

	export function close() {
		dialog.close();
	}
</script>

<dialog
	bind:this={dialog}
	class="image-dialog"
	onclose={() => {
		imageSrc = '';
		imageAlt = '';
	}}
	onkeydown={(e) => {
		if (e.key === 'Escape') close();
	}}
>
	{#if imageSrc}
		<img src={imageSrc} alt={imageAlt} />
		<div class="image-title">{imageTitle}</div>
	{/if}

	<button class="close-btn" onclick={close} aria-label="Close image dialog"> ✕ </button>
</dialog>

<style>
	dialog {
		border: none;
		max-width: 100vw;
		max-height: 100vh;
		background: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	img {
		max-width: 100%;
		max-height: 100vh;
		display: block;
	}

	.image-title {
		position: absolute;
		left: 0;
		bottom: 0;
		padding: 12px;
		font-size: 18px;
		color: var(--color-text);
		background-color: var(--color-background);
	}

	.close-btn {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
		color: var(--color-text);
		background: var(--color-background);
		border: none;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}

	::backdrop {
		background: rgba(0, 0, 0, 0.6);
	}
</style>
