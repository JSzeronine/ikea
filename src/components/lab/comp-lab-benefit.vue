<template>
    <section class="benefit-wrap">
        <div class="inner-wrap">
            <div class="lab-benefit__contenet">
                <div class="event-info__title-bx">
                    <p class="event-info__point">
                        <slot name="point"></slot>
                    </p>
                    <h3 class="event-info__title">
                        <slot name="title"></slot>
                    </h3>
                </div>

                <div class="benefit-list-bx">
                    <ul class="benefit-list">
                        <slot name="list"></slot>
                    </ul>

                    <div class="benefit-apply">
                        <slot name="apply"></slot>
                    </div>

                    <div class="benefit-important">
                        <slot name="important"></slot>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {EventBus} from "@/components/common/EventBus";

export default {

    name: "lab-benefit",

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods : {
        imgLoadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            Tl.fromTo( this.$el.querySelector( ".lab-benefit__contenet" ), {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity:1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el.querySelector( ".benefit-wrap .inner-wrap" ),
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });
        }
    }
}

</script>

<style scoped lang="scss">
    .benefit-wrap {
        .inner-wrap {
            height: 100%;
            margin: 0 auto;
            padding: 0 pxtovw414(40);
            box-sizing: border-box;

            .event-info__title-bx{
                margin-bottom: pxtovw414(50);
                box-sizing: border-box;
                .event-info__point{
                    > span{
                        display: inline-block;
                        margin-bottom: pxtovw414( 30 );
                        padding: pxtovw414( 7 ) pxtovw414( 10 ) pxtovw414( 8 );
                        box-sizing: border-box;

                        font-size: pxtovw414( 14 );
                        line-height: pxtovw414( 19 );
                        color: #fff;
                        font-family: $font-family-bold;
                        background-color: #0358A3;
                    }
                }

                .event-info__title{
                    font-size: pxtovw414( 30 );
                    line-height: pxtovw414( 41 );
                    font-family: $font-family-bold;

                }
            }


            .benefit-list-bx {
                .benefit-list {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                }

                .benefit-apply {
                    margin: pxtovw414(10) 0 pxtovw414(30);

                    a {
                        overflow: hidden;
                        display: inline-block;
                        padding: pxtovw414(13) pxtovw414(26);
                        border-radius: 100px;
                        font-size: pxtovw414(18);
                        line-height: pxtovw414(24);
                        font-family: $font-family-bold;
                        color: #fff;
                        background-color: #000;

                    }
                }

                .benefit-important {
                    font-size: pxtovw414(14);
                    line-height: pxtovw414(24);
                    font-family: $font-family-regular;
                }
            }
        }
    }

    .desktop, tablet {
        .benefit-wrap {
            min-width: $stage-min-width;

            .inner-wrap {
                width: $stage-contents-width;
                padding: 0 120px 0 170px;

                .lab-benefit__contenet{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .event-info__title-bx{
                    margin-bottom: 80px;
                    padding: 0;
                    .event-info__point{
                        > span{
                            font-size: $font-size-xs;
                            padding: 10px 20px;
                            line-height: 24px;
                            margin-bottom: 30px;
                        }
                    }

                    .event-info__title{
                        font-size: $font-size-xl;
                        line-height: 56px;
                    }
                }

                .benefit-list-bx {
                    .benefit-list {
                        width: 395px;
                    }

                    .benefit-apply {
                        margin: 10px 0 30px 0;

                        a {
                            padding: 13px 30px;
                            font-size: $font-size-xs;
                            line-height: 24px;
                        }
                    }

                    .benefit-important {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            }
        }
    }
</style>