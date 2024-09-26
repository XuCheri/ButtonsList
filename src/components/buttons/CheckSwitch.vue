<script setup>
import { onMounted, nextTick } from "vue";
onMounted(() => {
    document.querySelectorAll(".switch").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            let active = elem.classList.contains("active");
            gsap.to(elem, {
                "--c-background-top": active ? "#75757D" : "#F0F0F0",
                "--c-background-bottom": active ? "#45454C" : "#E9E9E9",
                "--c-background-top-shadow": active ? "rgba(255, 255, 255, .45)" : "#fff",
                "--c-background-bottom-shadow": active
                    ? "rgba(0, 0, 0, .3)"
                    : "rgba(0, 0, 0, .18)",
                "--c-stroke-top": active ? "#262626" : "#E7E7E7",
                "--c-stroke-bottom": active ? "#3D3D43" : "#D0D0D0",
                "--c-inner": active ? "#6D6D6D" : "#EAEAEA",
                "--c-inner-top-shadow": active ? "rgba(0, 0, 0, .3)" : "rgba(156, 56, 0, .42)",
                "--c-inner-bottom-shadow": active ? "rgba(255, 255, 255, .18)" : "#FFF3E5",
                "--c-inner-inset-shadow": active ? "rgba(0, 0, 0, .14)" : "rgba(0, 0, 0, .2)",
                "--c-knob-stroke-top": active ? "#515151" : "#cc4528",
                "--c-knob-stroke-bottom": active ? "#acacac" : "#f05f21",
                "--c-knob-inner-top": active ? "#8A8A8A" : "#E94714",
                "--c-knob-inner-middle-top": active ? "#A1A1A1" : "#E85617",
                "--c-knob-inner-middle-bottom": active ? "#B4B4B4" : "#FF7324",
                "--c-knob-inner-bottom": active ? "#BABABA" : "#FF844F",
                "--c-knob-inner-shadow-top": active
                    ? "rgba(255, 255, 255, .25)"
                    : "rgba(255, 170, 109, .44)",
                "--c-knob-inner-shadow-bottom": active
                    ? "rgba(0, 0, 0, .3)"
                    : "rgba(244, 44, 0, .9)",
                "--c-knob-shadow-1": active ? "rgba( 7, 7, 37, .16)" : "rgba(255, 180, 175, .7)",

                "--shine-top-y": active ? "-5px" : "0px",
                "--shine-bottom-y": active ? "0px" : "5px",
                "--knob-inner-shadow-top-y": active ? "2.5px" : "5.5px",
                "--knob-inner-shadow-bottom-y": active ? "-5.5px" : "-1.5px",
                "--knob-shadow-1-y": active ? "20px" : "0px",
                "--knob-shadow-1-blur": active ? "20px" : "2px",
                "--knob-shadow-1-spread": active ? "0px" : "5px",
                "--knob-shadow-2-y": active ? "12.5px" : "6.5px",
                "--knob-shadow-2-blur": active ? "8.5px" : "4.5px",
                "--knob-shadow-3-y": active ? "6.5px" : "3.5px",
                "--knob-shadow-3-blur": active ? "4.5px" : "2.5px",
                "--knob-shadow-4-y": active ? "4px" : "2px",
                "--knob-shadow-4-blur": active ? "2.5px" : "1.5px",
                "--knob-shadow-7-y": active ? "15px" : "5px",
                "--top-shadow-blur": active ? "5px" : "3px",
                "--inner-bottom-shadow-blur": active ? "1.25px" : "1px",
                "--shine-top-opacity": active ? 0 : 1,
                "--shine-bottom-opacity": active ? 1 : 0,
                duration: 0.15,
                ease: "power1.in",
                onStart() {
                    new Audio("https://assets.codepen.io/165585/switch.mp3").play();
                    elem.dataset.c = (parseInt(elem.dataset.c) || 0) + 1;
                },
                onComplete() {
                    elem.classList.toggle("active");
                },
            });

            document.getElementById("body").classList.toggle("active");
        });
    });
    //# sourceURL=pen.js
});
</script>

<template>

    <div id="body">
        <button class="switch">
            <div class="inner">
                <div class="shine"></div>
            </div>
        </button>

        <svg width="0" height="0">
            <defs>
                <clipPath id="shape">
                    <path
                        d="M120 60C120 69.6429 119.357 79.2857 118.393 87.6429C116.786 104.036 104.036 116.786 87.75 118.393C79.2857 119.357 69.6429 120 60 120C50.3571 120 40.7143 119.357 32.3571 118.393C15.9643 116.786 3.32143 104.036 1.60714 87.6429C0.642857 79.2857 0 69.6429 0 60C0 50.3571 0.642857 40.7143 1.60714 32.25C3.32143 15.9643 15.9643 3.21429 32.3571 1.60714C40.7143 0.642857 50.3571 0 60 0C69.6429 0 79.2857 0.642857 87.75 1.60714C104.036 3.21429 116.786 15.9643 118.393 32.25C119.357 40.7143 120 50.3571 120 60Z">
                    </path>
                </clipPath>
                <clipPath id="shape-outer">
                    <path
                        d="M124 62C124 71.9643 123.336 81.9286 122.339 90.5643C120.679 107.504 107.504 120.679 90.675 122.339C81.9286 123.336 71.9643 124 62 124C52.0357 124 42.0714 123.336 33.4357 122.339C16.4964 120.679 3.43214 107.504 1.66071 90.5643C0.664286 81.9286 0 71.9643 0 62C0 52.0357 0.664286 42.0714 1.66071 33.325C3.43214 16.4964 16.4964 3.32143 33.4357 1.66071C42.0714 0.664286 52.0357 0 62 0C71.9643 0 81.9286 0.664286 90.675 1.66071C107.504 3.32143 120.679 16.4964 122.339 33.325C123.336 42.0714 124 52.0357 124 62Z">
                    </path>
                </clipPath>
            </defs>
        </svg>
    </div>
</template>

<style scoped>
.switch {
    --c-background-top: #75757d;
    --c-background-bottom: #45454c;
    --c-background-top-shadow: rgba(255, 255, 255, 0.45);
    --c-background-bottom-shadow: rgba(0, 0, 0, 0.3);
    --c-stroke-top: #262626;
    --c-stroke-bottom: #3d3d43;
    --c-inner: #6d6d6d;
    --c-inner-top-shadow: rgba(0, 0, 0, 0.3);
    --c-inner-bottom-shadow: rgba(255, 255, 255, 0.18);
    --c-inner-inset-shadow: rgba(0, 0, 0, 0.14);
    --c-knob-stroke-top: #515151;
    --c-knob-stroke-bottom: #acacac;
    --c-knob-inner-top: #8a8a8a;
    --c-knob-inner-middle-top: #a1a1a1;
    --c-knob-inner-middle-bottom: #b4b4b4;
    --c-knob-inner-bottom: #bababa;
    --c-knob-inner-shadow-top: rgba(255, 255, 255, 0.25);
    --c-knob-inner-shadow-bottom: rgba(0, 0, 0, 0.3);
    --c-knob-shadow-1: rgba(7, 7, 37, 0.16);
    --knob-inner-shadow-top-y: 2.5px;
    --knob-inner-shadow-bottom-y: -5.5px;
    --knob-shadow-1-y: 20px;
    --knob-shadow-1-blur: 20px;
    --knob-shadow-1-spread: 0;
    --knob-shadow-2-y: 12.5px;
    --knob-shadow-2-blur: 8.5px;
    --knob-shadow-3-y: 6.5px;
    --knob-shadow-3-blur: 4.5px;
    --knob-shadow-4-y: 4px;
    --knob-shadow-4-blur: 2.5px;
    --knob-shadow-7-y: 15px;
    --top-shadow-blur: 5px;
    --inner-bottom-shadow-blur: 1.25px;
    --shine-top-opacity: 0;
    --shine-top-y: -5px;
    --shine-bottom-opacity: 1;
    --shine-bottom-y: 0px;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    outline: none;
    position: relative;
    cursor: pointer;
    border-radius: 36px;
    box-shadow: 0 4px 2.5px rgba(0, 0, 0, 0.0525), 0 8px 4.5px rgba(0, 0, 0, 0.065),
        0 12px 8px rgba(0, 0, 0, 0.17), 0 22.5px 14.5px rgba(0, 0, 0, 0.07),
        0 35px 25px rgba(0, 0, 0, 0.08), 0 20px 15px rgba(0, 0, 0, 0.05);
}

.switch.active {
    --c-background-top: #f0f0f0;
    --c-background-bottom: #e9e9e9;
    --c-background-top-shadow: #fff;
    --c-background-bottom-shadow: rgba(0, 0, 0, 0.18);
    --c-stroke-top: #e7e7e7;
    --c-stroke-bottom: #d0d0d0;
    --c-inner: #eaeaea;
    --c-inner-top-shadow: rgba(156, 56, 0, 0.42);
    --c-inner-bottom-shadow: #fff3e5;
    --c-inner-inset-shadow: rgba(0, 0, 0, 0.2);
    --c-knob-stroke-top: #cc4528;
    --c-knob-stroke-bottom: #f05f21;
    --c-knob-inner-top: #e94714;
    --c-knob-inner-middle-top: #e85617;
    --c-knob-inner-middle-bottom: #ff7324;
    --c-knob-inner-bottom: #ff844f;
    --c-knob-inner-shadow-top: rgba(255, 170, 109, 0.45);
    --c-knob-inner-shadow-bottom: rgba(244, 44, 0, 0.9);
    --c-knob-shadow-1: rgba(255, 180, 175, 0.7);
    --knob-inner-shadow-top-y: 5.5px;
    --knob-inner-shadow-bottom-y: -1.5px;
    --knob-shadow-1-y: 0;
    --knob-shadow-1-blur: 2px;
    --knob-shadow-1-spread: 5px;
    --knob-shadow-2-y: 6.5px;
    --knob-shadow-2-blur: 4.5px;
    --knob-shadow-3-y: 3.5px;
    --knob-shadow-3-blur: 2.5px;
    --knob-shadow-4-y: 2px;
    --knob-shadow-4-blur: 1.5px;
    --knob-shadow-7-y: 5px;
    --top-shadow-blur: 3px;
    --inner-bottom-shadow-blur: 1px;
    --shine-top-opacity: 1;
    --shine-top-y: 0px;
    --shine-bottom-opacity: 0;
    --shine-bottom-y: 5px;
}

.switch:before,
.switch:after {
    content: "";
    display: block;
    width: var(--size, 120px);
    height: var(--size, 120px);
    -webkit-clip-path: url(#shape);
    clip-path: url(#shape);
}

.switch:before {
    --size: 124px;
    background: linear-gradient(var(--c-stroke-top), var(--c-stroke-bottom));
    position: absolute;
    left: -2px;
    top: -2px;
    -webkit-clip-path: url(#shape-outer);
    clip-path: url(#shape-outer);
}

.switch:after {
    box-shadow: inset 0 3px var(--top-shadow-blur) var(--c-background-top-shadow),
        inset 0 -5px 5px var(--c-background-bottom-shadow);
    background: linear-gradient(var(--c-background-top), var(--c-background-bottom));
    border-radius: 36px;
}

.switch .inner {
    width: 40px;
    height: 60px;
    padding: 5px;
    border-radius: 12.5px;
    position: absolute;
    left: 40px;
    top: 30px;
    z-index: 1;
    background: var(--c-inner);
    box-shadow: 0 -1.5px 1.5px var(--c-inner-top-shadow),
        0 1.5px var(--inner-bottom-shadow-blur) var(--c-inner-bottom-shadow),
        inset 0 5px 14px var(--c-inner-inset-shadow);
}

.switch .inner:before,
.switch .inner:after {
    content: "";
    display: block;
}

.switch .inner:before {
    width: 30px;
    height: 50px;
    border-radius: 9px;
    background: linear-gradient(var(--c-knob-stroke-top), var(--c-knob-stroke-bottom));
    box-shadow: 0 var(--knob-shadow-1-y) var(--knob-shadow-1-blur) var(--knob-shadow-1-spread) var(--c-knob-shadow-1),
        0 var(--knob-shadow-2-y) var(--knob-shadow-2-blur) rgba(7, 7, 37, 0.07),
        0 var(--knob-shadow-3-y) var(--knob-shadow-3-blur) rgba(7, 7, 37, 0.13),
        0 var(--knob-shadow-4-y) var(--knob-shadow-4-blur) rgba(7, 7, 37, 0.11),
        0 2px 1.5px rgba(7, 7, 37, 0.09), 0 0.85px 0.5px rgba(7, 7, 37, 0.05),
        0 var(--knob-shadow-7-y) 15px rgba(0, 0, 0, 0.25);
}

.switch .inner:after {
    width: 28px;
    height: 48px;
    border-radius: 8.5px;
    position: absolute;
    left: 6px;
    top: 6px;
    background: linear-gradient(var(--c-knob-inner-top),
            var(--c-knob-inner-middle-top),
            var(--c-knob-inner-middle-bottom),
            var(--c-knob-inner-bottom));
    box-shadow: inset 0 var(--knob-inner-shadow-top-y) 1.5px var(--c-knob-inner-shadow-top),
        inset 0 var(--knob-inner-shadow-bottom-y) 1.25px var(--c-knob-inner-shadow-bottom);
}

.switch .inner .shine {
    position: absolute;
    left: 6px;
    right: 6px;
    top: 0;
    bottom: 0;
    z-index: 1;
    border-left: 1px solid;
    border-right: 1px solid;
    -o-border-image: linear-gradient(rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0) 70%) 1 100%;
    border-image: linear-gradient(rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0) 70%) 1 100%;
}

.switch .inner .shine:before,
.switch .inner .shine:after {
    content: "";
    position: absolute;
    left: -1px;
    right: -1px;
    height: 9px;
    -webkit-mask-image: linear-gradient(to left,
            transparent 0%,
            black 14px,
            black 50%,
            black calc(100% - 14px),
            transparent 100%);
    mask-image: linear-gradient(to left,
            transparent 0%,
            black 14px,
            black 50%,
            black calc(100% - 14px),
            transparent 100%);
}

.switch .inner .shine:before {
    border-radius: 11px 11px 0 0;
    border-top: 1px solid #fff;
    top: 11px;
    opacity: var(--shine-top-opacity);
    transform: translateY(var(--shine-top-y));
}

.switch .inner .shine:after {
    border-radius: 0 0 11px 11px;
    border-bottom: 1px solid #fff;
    bottom: 11px;
    opacity: var(--shine-bottom-opacity);
    transform: translateY(var(--shine-bottom-y));
}

.hint {
    width: 228px;
    font-size: 16px;
    line-height: 1.65;
    font-weight: 500;
    position: absolute;
    left: 50%;
    top: 50%;
    color: #93939f;
    white-space: nowrap;
    text-align: center;
    transform: translate(-50%, 100px);
    -webkit-animation: show 0.35s linear forwards;
    animation: show 0.35s linear forwards;
}

.hint a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #1ca2f1;
}

.hint a svg {
    width: 71px;
    height: 38px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 5px) translateZ(0);
    fill: none;
    stroke: #1ca2f1;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke-dasharray: var(--offset, 69px) 278px;
    stroke-dashoffset: 361px;
    transition: stroke 0.25s ease var(--stroke-delay, 0s), stroke-dasharray 0.35s;
}

.hint a:hover {
    --stroke-delay: 0.1s;
    --offset: 180px;
}

@-webkit-keyframes show {
    from {
        opacity: 0;
    }
}

@keyframes show {
    from {
        opacity: 0;
    }
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

* {
    box-sizing: inherit;
}

*:before,
*:after {
    box-sizing: inherit;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #27272b;
    font-family: "Inter", Arial, sans-serif;
    transition: background 0.15s cubic-bezier(0.532, 0, 0.924, 0.862);
}

body.active {
    background: #f6f6f6;
}
</style>
