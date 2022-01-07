<script>
	import { rotateStr } from "./rotate.js";
	import Slider from './Slider.svelte';
	let decoded = '';
	let placeholder = 'Enter text'
	let rotationFactor = 13;
	$: encoded = rotateStr(decoded, rotationFactor);
</script>
<main>
	<!-- <input type="range" min="0" max="26" step="1" id="rot" bind:value={rotationFactor} style="position: absolute; top: 0; left: 10px;"> -->
	<label for="rot" style="position: absolute; top: 0; left: 0; font-size: small;">{rotationFactor}</label>
	<section>
		<textarea name="output" id="output" value={encoded} readonly placeholder={rotateStr(placeholder, rotationFactor)}/>
	</section>
	<section>
		<Slider bind:rotationFactor/>
	</section>
	<section>
		<textarea name="input" id="input" bind:value={decoded} placeholder={placeholder}/>
	</section>
</main>

<style>
	main {
		background-color: #212121;
		font-size: 1.5em;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-evenly;
		align-items: center;
	}

	textarea {
		width: 90vw;
		height: 200px;
		display: block;
		resize: none;
		font-family: monospace;
	}
</style>
