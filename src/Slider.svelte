<script>
    import { createEventDispatcher, onMount } from "svelte";
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
        bottomRow.scrollLeft = 72 * 13;
    });
    const handleScroll = (e) => {
            rotationFactor = Math.floor((e.target.scrollLeft / 72) % 26);
            if (e.target.scrollLeft % 72 < 2) dispatch(rotationFactor);
    };
</script>

<section>
    <div id="top">
        <div class="inner">
            {#each Array(alphabet.length) as _, i}
                <span>{alphabet[i]}</span>
            {/each}
        </div>
    </div>
    <div
        id="bottom"
        bind:this={bottomRow}
        on:scroll={(e) => handleScroll(e)}
        tabindex="0"
    >
        <div class="inner">
            {#each Array(alphabet.length * 3) as _, i}
                <span>{alphabet[i % 26]}</span>
            {/each}
        </div>
    </div>
</section>

<style>
    @font-face {
        font-family: "PosterCut";
        src: url("../PosterCutRegular.woff2") format("woff2");
    }
    section {
        overflow: hidden;
        width: 100vw;

        font-family: "PosterCut", monospace;
        color: #f4f4f4;
        font-size: 3em;
    }

    div {
        white-space: nowrap;
    }

    #bottom {
        margin-top: 0.5rem;
        overflow-x: scroll;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        overscroll-behavior: none;
    }

    #bottom::-webkit-scrollbar {
        display: none;
    }

    #bottom .inner {
        padding: 1rem 0;
        width: max-content;
        background-image: url("../Union.svg");
        background-repeat: repeat-x;
        background-size: 19%;
        background-position-y: center;
    }

    .inner span {
        display: inline-block;
        width: 1em;
        height: 1em;
        text-align: center;
        transform: translateY(0.1em);
        scroll-snap-align: start;
    }

    #bottom .inner span {
        transform: translateY(0.1em);
    }
</style>
