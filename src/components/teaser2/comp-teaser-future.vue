<template>
    <!-- future-wrap -->
    <section class="future-wrap">

        <div class="loading">
            <div class="circle"></div>
        </div>

        <!-- bg-wrap -->
        <div class="bg-wrap">
            <div class="img-pc bg-pc" :style="{backgroundImage:'url(' + contents.future2.video_bg_pc + ')'}"></div>
            <div class="img-mb bg-m" :style="{backgroundImage:'url(' + contents.future2.video_bg_mb + ')'}"></div>
        </div>
        <!--//bg-wrap -->

        <!-- inner-wrap -->
        <div class="inner-wrap">
            <div class="future-title">
                <div class="tit-top">
                    <p class="tit-01" v-html="contents.future2.title"></p>
                    <p class="tit-02" v-html="contents.future2.lab"></p>
                </div>
                <p class="tit-bottom" v-html="contents.future2.description"></p>
            </div>

            <div v-if="isDot" class="future-dot">
                <div class="future-dot__bx">
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- //inner-wrap -->

    </section>
    <!--//future-wrap -->
</template>

<script>
import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Cubic, Linear,Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EventBus } from "@/components/common/EventBus";

export default {
    name: "comp-teaser-future",
    data(){
        return{
            contents : null,
        }
    },

    props : {
        isDot : {
            type : Boolean,
            default : false,
        }
    },

    created() {
        this.contents = this.$t( "contents" );
    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods: {
        start() {
            gsap.to(".future-wrap .loading", 0.8, {delay:0.5, autoAlpha:0, ease:Linear.easeNone})
            gsap.from(".future-wrap .future-title", 1.2, {delay:0.7, y:130, alpha:0, ease:Cubic.easeOut})
            gsap.from(".future-wrap .future-dot .future-dot__bx li", 1.7, {delay:0.5, stagger:0.3, scale:0.5, y:0, alpha:0, ease:Power3.easeInOut})
        },

        imgLoadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let bg = ( isMobile ) ? this.$el.querySelector( ".bg-m" ) : this.$el.querySelector( ".bg-pc" );
            let title = this.$el.querySelector( ".future-title" );

            const Tl = gsap.timeline({});

            Tl.fromTo( title, {
                y:"20vh",
            }, {
                y:"-20vh",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "bottom top",
                    scrub : true,
                }
            });

            this.start();
        }
    }
}
</script>

<style scoped lang="scss">
    .future-wrap {

        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        .bg-wrap {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            min-width: 100%;
            width: 100%;
            height: 100vh;
            .bg-m {
                width: 100%;
                height: 100%;
                background: no-repeat center center;
                background-size: cover;
            }
        }

        .inner-wrap {
            position: relative;
            z-index: 2;
            width: 100%;
            margin: 0 auto;
            padding: 0 pxtovw414(40);
            box-sizing: border-box;
            position: relative;
            display: flex;
            align-items: center;
            height: 100vh;

            .future-title {
                width: 100%;
                box-sizing: border-box;
                font-size: pxtovw414(24);
                line-height: pxtovw414(33);
                font-family: $font-family-bold;
                color: #fff;
                position: relative;
                z-index: 10;

                .tit-top {
                    position: relative;
                    padding-bottom: pxtovw414(20);

                    &::after {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        content: '';
                        width: pxtovw414(213);
                        height: 1px;
                        background-color: #fff;
                    }

                    .tit-01 {
                    }
                    .tit-02 {
                        font-size: pxtovw414(40);
                        line-height: pxtovw414(55);
                        font-family: $font-family-bold;
                    }
                }

                .tit-bottom {
                    padding-top: pxtovw414(20);
                }
            }

            .future-dot{
                position: absolute;
                z-index: 9;
                left: 0;
                top: 0;
                .future-dot__bx{
                    ul{
                        position: relative;
                        li{
                            background-color: #009945;
                            border-radius: 100%;
                            position: absolute;

                            &:nth-child( 1 ){
                                left: pxtovw414( 382 );
                                top: pxtovw414( 126 );
                                width: pxtovw414( 40 );
                                height: pxtovw414( 40 );
                            }

                            &:nth-child( 2 ){
                                left: pxtovw414( 146 );
                                top: pxtovw414( 510 );
                                width: pxtovw414( 66 );
                                height: pxtovw414( 66 );
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (orientation: landscape) {
        .mobile {
            .future-wrap {
                height: 200vh;
                .bg-wrap {
                    height: 200vh;
                    .bg-m {
                    }
                }

                .inner-wrap {
                    padding: 0 pxtovw414(40);
                    .future-title {
                        padding: pxtovw414(120) 0 pxtovw414(50) 0;
                        font-size: pxtovw414(14);
                        line-height: pxtovw414(20);
                        .tit-top {
                            padding-bottom: pxtovw414(10);
                            &::after {
                                width: pxtovw414(110);
                            }

                            .tit-01 {
                            }
                            .tit-02 {
                                font-size: pxtovw414(25);
                                line-height: pxtovw414(30);
                            }
                        }

                        .tit-bottom {
                            padding-top: pxtovw414(10);
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet {
        .future-wrap {
            min-width: $stage-min-width;
            .bg-wrap {
                .bg-pc {
                    width: 100%;
                    height: 100%;
                    background: no-repeat center center;
                    background-size: cover;
                }
            }

            .inner-wrap {
                width: $stage-contents-width;
                padding: 0 170px;
                .future-title {
                    //padding: 240px 0 445px 0;
                    padding: 0;
                    font-size: $font-size-xl;
                    line-height: 56px;
                    .tit-top {
                        padding-bottom: 30px;

                        &::after {
                            width: 352px;
                        }

                        .tit-01 {
                        }
                        .tit-02 {
                            font-size: 60px;
                            line-height: 56px;
                        }
                    }

                    .tit-bottom {
                        padding-top: 30px;
                    }
                }

                .future-dot{
                    .future-dot__bx{
                        margin-left: 170px;
                        ul{
                            position: relative;
                            li{
                                &:nth-child( 1 ){
                                    left: 1051px;
                                    top: 434px;
                                    width: 53px;
                                    height: 53px;
                                }

                                &:nth-child( 2 ){
                                    left: 534px;
                                    top: 668px;
                                    width: 133px;
                                    height: 133px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>