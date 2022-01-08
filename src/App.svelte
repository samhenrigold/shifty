<script>
	import { rotateStr } from "./rotate.js";
	import Slider from "./Slider.svelte";
	let decoded = "";
	let placeholder = "Enter text";
	let rotationFactor = 13;
	$: encoded = rotateStr(decoded, rotationFactor);
</script>

<main>
	<section>
		<textarea
			name="output"
			id="out"
			value={encoded}
			readonly
			placeholder={rotateStr(placeholder, rotationFactor)}
		/>
		<span id="rotationFactor">{rotationFactor}</span>
	</section>
	<section id="slider">
		<Slider bind:rotationFactor />
	</section>
	<section>
		<textarea name="input" id="in" bind:value={decoded} {placeholder} />
	</section>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Special+Elite&display=swap");

	:root {
		--black: #212121;
		--white: #f4f4f4;
		--red: #d14735;
	}
	main {
		background-color: var(--black);
		font-size: 1.5em;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-evenly;
		align-items: center;
	}

	section {
		position: relative;
	}

	textarea, #rotationFactor {
		font-family: "Special Elite", monospace;
		text-shadow: 0px -1px 1px rgba(147, 140, 128, 0.7),
		0px 1px 1px rgba(250, 250, 249, 0.3);
	}

	textarea {
		position: relative;
		width: clamp(100px, 90vw, 1200px);
		height: clamp(32px, 33vh, 30vh);
		display: block;
		resize: none;
		padding: 1em;
		background: url("./letterpress-texture.png"), var(--white);
		background-size: 64px;
		color: var(--black);
		caret-color: var(--red);
	}
	textarea#out {
		clip-path: polygon(1% 0, 100% 0, 99% 100%, 0% 100%);
		position: relative;
	}
	textarea#in {
		clip-path: polygon(1% 0%, 26% 2%, 100% 0%, 97% 98%, 78% 97%, 2% 99%);
	}

	#rotationFactor {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		color: var(--red);
		font-size: smaller;
	}
</style>
