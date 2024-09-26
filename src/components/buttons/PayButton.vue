<script setup>
import { onMounted } from 'vue';
const { to, from, set } = gsap;
onMounted(()=>{
    gsap.registerPlugin(MorphSVGPlugin);

document.querySelectorAll(".button-pay").forEach(button => {
    const backSvg = button.querySelector("svg .back");
    const frontSvg = button.querySelector("svg .front");

    button.addEventListener("click", e => {
        if (button.done) {
            return;
        }

        button.done = true;

        to(button, {
            "--button-money-opacity": 1,
            duration: 0.2
        });


        to(button, {
            keyframes: [
                {
                    "--button-money-x": "-50%",
                    duration: 1.5,
                    ease: "elastic.out(1, .9)"
                },

                {
                    "--button-money-shine-position": "202px",
                    duration: 0.3,
                    delay: 0.25,
                    onStart() {
                        set(button, {
                            "--button-default-opacity": 0,
                            "--button-done-opacity": 1
                        });

                    }
                },

                {
                    "--button-money-scale": 1.1,
                    duration: 0.25
                },

                {
                    "--button-money-scale": 0.9,
                    "--button-money-opacity": 0,
                    duration: 0.2,
                    onComplete() {
                        to(button, {
                            "--button-default-opacity": 1,
                            "--button-done-opacity": 0,
                            duration: 0.25,
                            delay: 3,
                            clearProps: true,
                            onComplete() {
                                button.done = false;

                                set(backSvg, {
                                    morphSVG:
                                        "M0.5 8.08934C0.5 7.08069 1.25638 6.22361 2.26148 6.13899C16.0797 4.97569 20.6421 11.5253 34.2374 10.5477C35.4373 10.4614 36.5 11.3863 36.5 12.5893V28.5582C36.5 29.5668 35.7436 30.4239 34.7385 30.5085C20.9203 31.6718 16.3579 25.1222 2.76264 26.0999C1.56274 26.1861 0.5 25.2612 0.5 24.0582V8.08934Z"
                                });

                                set(frontSvg, {
                                    morphSVG:
                                        "M31.6996 11.3239C19.5 12.3239 17.5 6.32366 5.29962 7.32386C5.29959 9.31195 3.59849 10.9236 1.5 10.9238V21.7238C3.59851 21.724 5.29962 23.3357 5.29962 25.3238C17.5 24.3239 19.5 30.3239 31.6996 29.3239C31.6996 27.3356 33.4009 25.7238 35.4996 25.7238L35.5 14.9238C33.4013 14.9238 31.6996 13.3121 31.6996 11.3239Z"
                                });

                            }
                        });

                    }
                }]
        });




        to(button, {
            keyframes: [
                {
                    "--button-money-dollar-rotate": "-9deg",
                    "--button-money-dollar-y": "-80%",
                    "--button-money-dollar-scale": 0.95,
                    duration: 0.25
                },

                {
                    "--button-money-dollar-rotate": "0deg",
                    "--button-money-dollar-y": "-40%",
                    "--button-money-dollar-scale": 1,
                    duration: 0.25
                },

                {
                    "--button-money-dollar-y": "-50%",
                    duration: 0.25
                }]
        });




        to(backSvg, {
            keyframes: [
                {
                    morphSVG:
                        "M0.5 7.87888C0.5 6.82274 1.32503 5.95187 2.37655 5.85327C16.7297 4.50733 25.533 -1.42449 39.978 1.6477C40.8757 1.83861 41.5 2.64378 41.5 3.56151V19.4384C41.5 20.7395 40.2721 21.6907 38.9933 21.4504C25.2089 18.8605 16.5046 24.4707 2.62621 25.8293C1.47806 25.9417 0.5 25.0247 0.5 23.8711V7.87888Z",
                    duration: 0.25
                },

                {
                    morphSVG:
                        "M0.5 8.26558C0.5 7.06258 1.55966 6.13319 2.75432 6.27465C16.5537 7.90856 24.4463 7.90846 38.2457 6.27463C39.4403 6.13318 40.5 7.06257 40.5 8.26556V24.3401C40.5 25.3026 39.8125 26.13 38.8654 26.301C24.4719 28.8996 16.5281 28.8997 2.13457 26.301C1.18745 26.13 0.5 25.3026 0.5 24.3401V8.26558Z",
                    duration: 0.25
                },

                {
                    morphSVG:
                        "M0.5 8.00002C0.5 6.89545 1.40038 6.00001 2.50495 6.00002C16.5424 6.00011 24.4576 6.00001 38.4951 6.00001C39.5996 6.00001 40.5 6.89544 40.5 8.00001V24C40.5 25.1046 39.5996 26 38.495 26C24.4576 25.9999 16.5424 26 2.50494 26C1.40037 26 0.5 25.1046 0.5 24V8.00002Z",
                    duration: 0.25
                }]
        });




        to(frontSvg, {
            keyframes: [
                {
                    morphSVG:
                        "M36.6996 2.00011C24.5 1.00013 17.5 3.99991 5.29962 7.00011C5.29959 8.9882 3.59849 10.5999 1.5 10.6001V21.4001C3.59851 21.4003 5.29962 23.012 5.29962 25.0001C17.5 22.0001 24.5 19.0001 36.6996 20.0001C36.6996 18.0119 38.4009 16.4001 40.4996 16.4001L40.5 5.60007C38.4013 5.60007 36.6996 3.98832 36.6996 2.00011Z",
                    duration: 0.25
                },

                {
                    morphSVG:
                        "M35.6996 8C23.5 9.00002 17.5 8.9998 5.29962 8C5.29959 9.98808 3.59849 11.5998 1.5 11.6V22.4C3.59851 22.4001 5.29962 24.0119 5.29962 26C18.5 28 22.5 28 35.6996 26C35.6996 24.0118 37.4009 22.4 39.4996 22.4L39.5 11.6C37.4013 11.6 35.6996 9.9882 35.6996 8Z",
                    duration: 0.25
                },

                {
                    morphSVG:
                        "M35.6996 7.00009C23.5 7.0001 17.5 6.99988 5.29962 7.00009C5.29959 8.98817 3.59849 10.5998 1.5 10.6V21.4C3.59851 21.4002 5.29962 23.0119 5.29962 25C17.5 25.0001 23.5 25.0001 35.6996 25.0001C35.6996 23.0119 37.4009 21.4 39.4996 21.4L39.5 10.6C37.4013 10.6 35.6996 8.98829 35.6996 7.00009Z",
                    duration: 0.25
                }]
        });



    });
});
})
//# sourceURL=pen.js

</script>

<template>
    <button class="button-pay">
        <span class="default">Pay</span>
        <span class="done">Done</span>
        <div class="money">
            <svg viewBox="0 0 42 32">
                <path class="back"
                    d="M0.5 8.08934C0.5 7.08069 1.25638 6.22361 2.26148 6.13899C16.0797 4.97569 20.6421 11.5253 34.2374 10.5477C35.4373 10.4614 36.5 11.3863 36.5 12.5893V28.5582C36.5 29.5668 35.7436 30.4239 34.7385 30.5085C20.9203 31.6718 16.3579 25.1222 2.76264 26.0999C1.56274 26.1861 0.5 25.2612 0.5 24.0582V8.08934Z">
                </path>
                <path class="front"
                    d="M31.6996 11.3239C19.5 12.3239 17.5 6.32366 5.29962 7.32386C5.29959 9.31195 3.59849 10.9236 1.5 10.9238V21.7238C3.59851 21.724 5.29962 23.3357 5.29962 25.3238C17.5 24.3239 19.5 30.3239 31.6996 29.3239C31.6996 27.3356 33.4009 25.7238 35.4996 25.7238L35.5 14.9238C33.4013 14.9238 31.6996 13.3121 31.6996 11.3239Z">
                </path>
            </svg>
            <div class="dollar">
                <svg viewBox="0 0 6 10">
                    <path
                        d="M2.84392 1V2M2.84392 9V8M1 6.5C1 6.69698 1.03531 6.89537 1.10483 7.07736C1.17434 7.25935 1.27624 7.42471 1.40469 7.56399C1.53314 7.70328 1.68563 7.81377 1.85346 7.88915C2.02129 7.96453 2.20117 8.00333 2.38282 8.00333H3.39293C3.57068 8.05116 3.75577 8.05756 3.93596 8.0221C4.11616 7.98664 4.28737 7.91013 4.43829 7.79762C4.5892 7.68511 4.71639 7.53916 4.81145 7.36942C4.90651 7.19968 4.96728 7.01 4.98975 6.81291C5.01222 6.61581 4.99587 6.4158 4.94179 6.22606C4.88771 6.03632 4.79712 5.86119 4.67601 5.71222C4.55491 5.56325 4.40603 5.44383 4.23922 5.36186C4.07241 5.27988 3.89146 5.23721 3.70832 5.23667L1.97952 4.76667C1.67332 4.68291 1.40589 4.48076 1.22749 4.19821C1.0491 3.91566 0.972024 3.57218 1.01076 3.23234C1.04951 2.8925 1.20139 2.57971 1.43787 2.35277C1.67434 2.12584 1.97912 2.00038 2.29491 2H3.30502C3.67189 2 4.02374 2.15804 4.28315 2.43934C4.54257 2.72064 4.68831 3.10218 4.68831 3.5">
                    </path>
                </svg>
            </div>
            <div class="shine"></div>
        </div>
    </button>
</template>

<style scoped>
.button-pay {
    --button-default-opacity: 1;
    --button-done-opacity: 0;
    --button-money-x: 125%;
    --button-money-scale: 1;
    --button-money-opacity: 0;
    --button-money-shine-position: 132px;
    --button-money-dollar-y: -35%;
    --button-money-dollar-rotate: 10deg;
    --button-money-dollar-scale: 0.7;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: #394c50;
    color: #fff;
    border-radius: 9px;
    cursor: pointer;
    outline: none;
    margin: 0;
    padding: 12px 24px;
    font-family: "Inter";
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    position: relative;
    min-width: 120px;
    text-align: center;
    transform: translateZ(0);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px 0 rgba(14, 21, 22, 0.25), 0 4px 8px rgba(0, 0, 0, 0.25);
    transition: background-color 0.2s, transform 0.2s;
}

.button-pay:hover {
    background-color: #324347;
}

.button-pay:active {
    transform: scale(0.985, 0.97) translateZ(0);
}

.button-pay span {
    display: block;
    transform: translateZ(0);
}

.button-pay span:not(.default) {
    position: absolute;
    left: 0;
    right: 0;
    top: 12px;
}

.button-pay span.default {
    opacity: var(--button-default-opacity);
}

.button-pay span.done {
    opacity: var(--button-done-opacity);
}

.button-pay .money {
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: var(--button-money-opacity);
    transform: translate(var(--button-money-x), -50%) scale(var(--button-money-scale)) translateZ(0);
}

.button-pay .money .dollar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, var(--button-money-dollar-y)) rotate(var(--button-money-dollar-rotate)) scale(var(--button-money-dollar-scale)) translateZ(0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #237b48;
}

.button-pay .money .dollar:before,
.button-pay .money .dollar:after {
    content: "";
    border-radius: 50%;
    background-color: #237b48;
    position: absolute;
    width: 4px;
    height: 4px;
    top: 5px;
}

.button-pay .money .dollar:before {
    right: 17px;
}

.button-pay .money .dollar:after {
    left: 17px;
}

.button-pay .money .dollar svg {
    display: block;
    width: 6px;
    height: 10px;
    stroke-width: 1.25;
    stroke: #65d996;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
}

.button-pay .money .shine {
    position: absolute;
    left: 1px;
    top: 6px;
    right: 1px;
    bottom: 6px;
    border-radius: 2px;
    background: linear-gradient(to right, transparent 0, rgba(255, 255, 255, 0.15) 15%, transparent 30%);
    background-size: 80px 32px;
    background-position: var(--button-money-shine-position);
}

.button-pay .money svg {
    display: block;
    width: 42px;
    height: 32px;
}

.button-pay .money svg .back {
    fill: #237b48;
}

.button-pay .money svg .front {
    fill: #51ba7d;
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
    min-height: 100vh;
    display: flex;
    font-family: "Inter", Arial;
    justify-content: center;
    align-items: center;
    background: #0d0d0f;
}

body .twitter {
    position: fixed;
    display: block;
    right: 12px;
    bottom: 12px;
}

body .twitter svg {
    width: 32px;
    height: 32px;
    fill: #1da1f2;
}
</style>
