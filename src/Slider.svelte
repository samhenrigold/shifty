<script>
    "use strict";
    import { onMount } from "svelte";
    import { rotateChar } from "./rotate.js";
    import { debounce } from 'lodash';
    // export let rotationFactor = 13;
    let scrollLeft = 309;
    let bottomRow;
    let firstNode;
    onMount(async () => {
        await bottomRow;
        bottomRow.scrollLeft = (77.25 * 26);
        bottomRow.addEventListener('scroll', debounce((e) => {
            scrollHandler(e)
        }, 50));
    });

    function getFirstNode(childrenArray) {
        childrenArray.forEach(node => {
            const childPos = node.getBoundingClientRect().left - bottomRow.getBoundingClientRect().left;
            if (childPos > -1 && childPos < 1) { //  && 
                firstNode = node;
            }
        });
    }

    const scrollHandler = (event) => {
        scrollLeft = event.target.scrollLeft;
        getFirstNode(Array.from(event.target.children));
        console.log(scrollLeft)
        // console.log();
        if (event.target.children[event.target.children.length-5].getBoundingClientRect().left - bottomRow.getBoundingClientRect().left < 1) {
            let centeredNode = [...document.querySelectorAll('._1')].find(node => node.innerText === "V");
            centeredNode.scrollIntoView({inline: 'start'});
        }
        // scroll to center
        if (!firstNode.classList.contains('_1')) {
            let centeredNode = [...document.querySelectorAll('._1')].find(node => node.innerText === firstNode.innerText);
            centeredNode.scrollIntoView({inline: 'start'});
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
    <div id="bottom" bind:this={bottomRow}>
        <span class="_0">A</span>
        <span class="_0">B</span>
        <span class="_0">C</span>
        <span class="_0">D</span>
        <span class="_0">E</span>
        <span class="_0">F</span>
        <span class="_0">G</span>
        <span class="_0">H</span>
        <span class="_0">I</span>
        <span class="_0">J</span>
        <span class="_0">K</span>
        <span class="_0">L</span>
        <span class="_0">M</span>
        <span class="_0">N</span>
        <span class="_0">O</span>
        <span class="_0">P</span>
        <span class="_0">Q</span>
        <span class="_0">R</span>
        <span class="_0">S</span>
        <span class="_0">T</span>
        <span class="_0">U</span>
        <span class="_0">V</span>
        <span class="_0">W</span>
        <span class="_0">X</span>
        <span class="_0">Y</span>
        <span class="_0">Z</span>
        <span class="_1">A</span>
        <span class="_1">B</span>
        <span class="_1">C</span>
        <span class="_1">D</span>
        <span class="_1">E</span>
        <span class="_1">F</span>
        <span class="_1">G</span>
        <span class="_1">H</span>
        <span class="_1">I</span>
        <span class="_1">J</span>
        <span class="_1">K</span>
        <span class="_1">L</span>
        <span class="_1">M</span>
        <span class="_1">N</span>
        <span class="_1">O</span>
        <span class="_1">P</span>
        <span class="_1">Q</span>
        <span class="_1">R</span>
        <span class="_1">S</span>
        <span class="_1">T</span>
        <span class="_1">U</span>
        <span class="_1">V</span>
        <span class="_1">W</span>
        <span class="_1">X</span>
        <span class="_1">Y</span>
        <span class="_1">Z</span>
        <span class="_2">A</span>
        <span class="_2">B</span>
        <span class="_2">C</span>
        <span class="_2">D</span>
        <span class="_2">E</span>
        <span class="_2">F</span>
        <span class="_2">G</span>
        <span class="_2">H</span>
        <span class="_2">I</span>
        <span class="_2">J</span>
        <span class="_2">K</span>
        <span class="_2">L</span>
        <span class="_2">M</span>
        <span class="_2">N</span>
        <span class="_2">O</span>
        <span class="_2">P</span>
        <span class="_2">Q</span>
        <span class="_2">R</span>
        <span class="_2">S</span>
        <span class="_2">T</span>
        <span class="_2">U</span>
        <span class="_2">V</span>
        <span class="_2">W</span>
        <span class="_2">X</span>
        <span class="_2">Y</span>
        <span class="_2">Z</span>
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
        color: #f4f4f4;
        font-size: 72px;
        text-align: center;
        width: 72px;
    }

    #bottom {
        background-color: #d14735;
        overflow: scroll;
        scroll-snap-type: x mandatory;
    }
</style>
