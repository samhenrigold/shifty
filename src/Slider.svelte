<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { debounce } from "lodash";
    export let rotationFactor = 13;
    const dispatch = createEventDispatcher();
    let bottomRow = "";
    let alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    onMount(async () => {
		bottomRow.scrollLeft = 72*13;
	});
    const handleScroll = (e) => {
        rotationFactor = Math.round(e.target.scrollLeft / 72 % 26)
       if (e.target.scrollLeft % 72 < 2){
          console.log('tick')
          dispatch(rotationFactor)
          if (e.target.scrollLeft > (e.target.scrollWidth / 3)) {
              setTimeout(() => {
                e.target.scrollLeft = rotationFactor * 72;
              }, 50);
          }
       }
    }
</script>

<section>
    <div id="top">
        {#each Array(alphabet.length) as _, i}
            <span>{alphabet[i]}</span>
        {/each}
    </div>
    <div id="bottom" bind:this={bottomRow} on:scroll={(e) => handleScroll(e)}>
        {#each Array(alphabet.length * 3) as _, i}
            <span>{alphabet[i % 26]}</span>
        {/each}
    </div>
</section>

<style>
    :root {
        --font-size: 80px;
    }
    @font-face {
        font-family: "PosterCut";
        src: url("../PosterCutRegular.woff2") format("woff2");
    }

    section {
        overflow: none;
    }

    div {
        width: 100vw;
        white-space: nowrap;
    }

    span {
        font-family: "PosterCut", monospace;
        display: inline-block;
        width: 72px;
        height: 72px;
        font-size: var(--font-size);
        line-height: -50px;
        scroll-snap-align: start;
        color: #f4f4f4;
        text-align: center;
    }

    #bottom {
        padding-top: 12px;
        background-color: #d14735;
        overflow-x: scroll;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
    }
</style>
