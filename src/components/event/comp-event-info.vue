<template>
    <section class="event-info">
        <div class="inner-wrap">
            <div class="content">
                <div class="event-info__content">
                    <div class="event-info__title-container">
                        <div v-if="isHeader" class="event-tit">
                            <slot name="header-title"></slot>
                        </div>

                        <div class="event-info__title-bx">
                            <p class="event-info__point">
                                <slot name="point"></slot>
                            </p>

                            <h3 class="event-info__title">
                                <slot name="title"></slot>
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="event-info__list-bx">
                    <ul>
                        <slot name="list"></slot>
                    </ul>
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
    name: "comp-event-info",
    data() {
        return {
        }
    },

    props : {
        isHeader : {
            type : Boolean,
            default: false,
        }
    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods : {
        imgLoadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let content = this.$el.querySelector( ".event-info__content" );

            Tl.fromTo( content.querySelector( ".event-info__title-container" ), {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : content,
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
    .event-info{
        overflow: hidden;
        margin: pxtovw414( 160 ) 0;
        .inner-wrap{
            .content{
                .event-tit {
                    position: relative;
                    margin-left: pxtovw414( 40 );
                    margin-bottom: pxtovw414( 70 );
                    padding-top: pxtovw414( 34 );
                    box-sizing: border-box;
                    padding-right: pxtovw414( 40 );

                    font-size: pxtovw414(30);
                    line-height: pxtovw414(41);
                    font-family: $font-family-bold;

                    &::after {
                        position: absolute;
                        left: 0;
                        top: 0;
                        content: '';
                        display: block;
                        width: pxtovw414(20);
                        height: pxtovw414(4);
                        background-color: $color-set-green;
                    }
                }

                .event-info__title-bx{
                    margin-bottom: pxtovw414(30);
                    box-sizing: border-box;
                    padding: 0 pxtovw414( 40 );
                    .event-info__point{
                        > span{
                            background-color: $color-set-green;
                            font-size: pxtovw414( 14 );
                            line-height: pxtovw414( 19 );
                            color: #fff;
                            box-sizing: border-box;
                            padding: pxtovw414( 7 ) pxtovw414( 10 ) pxtovw414( 8 );
                            display: inline-block;
                            margin-bottom: pxtovw414( 30 );
                            font-family: $font-family-bold;
                        }
                    }

                    .event-info__title{
                        font-size: pxtovw414( 30 );
                        font-family: $font-family-bold;
                        line-height: pxtovw414( 41 );
                    }
                }

                .event-info__list-bx{
                    ul{

                    }
                }

                .activity-concert__bx{
                    width: 100%;
                    box-sizing: border-box;

                    .swiper{
                        padding-bottom: pxtovw414( 50 );
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .event-info{
            overflow: initial;
            margin: 220px 0;
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;

                .content{
                    width: 1200px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    padding-left: 170px;

                    .event-tit {
                        font-size: $font-size-xl;
                        line-height: 56px;
                        padding-top: 30px;
                        margin-left: 0;
                        margin-bottom: 100px;

                        &::after {
                            width: 20px;
                            height: 4px;
                        }
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

                    .event-info__list-bx{
                        ul{

                        }
                    }

                    .activity-concert__bx{
                        box-sizing: border-box;

                        .swiper{
                            padding-bottom: 100px;
                        }
                    }
                }
            }
        }
    }
</style>