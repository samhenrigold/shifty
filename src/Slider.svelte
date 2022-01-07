<script>
    import { onMount } from 'svelte';
    export let rotationFactor = 13;
    let scrollLeft = 77;
    let bottomRow;
    onMount(async () => {
		await bottomRow;
        bottomRow.scrollLeft = 77;
	});
    const scrollHandler = (e) => {
        // console.log(e.target);
        if (e.target.scrollLeft % 77 == (1 || 0)) {
            console.log("tick")
        }
    };
</script>

<section>
    <div id="top">
        <span style="color: #D14735">A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
        <span>I</span>
        <span>J</span>
        <span>K</span>
        <span>L</span>
        <span>M</span>
        <span>N</span>
        <span>O</span>
        <span>P</span>
        <span>Q</span>
        <span>R</span>
        <span>S</span>
        <span>T</span>
        <span>U</span>
        <span>V</span>
        <span>W</span>
        <span>X</span>
        <span>Y</span>
        <span>Z</span>
    </div>
    <div id="bottom" bind:this={bottomRow} on:scroll={(e) => scrollHandler(e)}>
            <span>Z</span>
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>I</span>
            <span>J</span>
            <span>K</span>
            <span>L</span>
            <span>M</span>
            <span>N</span>
            <span>O</span>
            <span>P</span>
            <span>Q</span>
            <span>R</span>
            <span>S</span>
            <span>T</span>
            <span>U</span>
            <span>V</span>
            <span>W</span>
            <span>X</span>
            <span>Y</span>
            <span>Z</span>
    </div>
</section>

<style>
    section {
        overflow: hidden;
    }

    div {
        width: 375px;
        white-space: nowrap;
    }

    span {
        scroll-snap-align: start;
        display: inline-block;
        font-family: monospace;
        color: #F4F4F4;
        font-size: 72px;
        text-align: center;
        width: 72px;
    }

    #bottom {
        background-color: #D14735;
        overflow: scroll;
        scroll-snap-type: x mandatory;
    }
</style>