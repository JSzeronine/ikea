<template>
    <section class="comp-sub__kv">
        <div class="inner-wrap">
            <div class="contents">
                <div class="comp-sub__visual">
                    <div class="comp-sub__visual-bottom">
                        <div class="comp-sub__visual-bottom__video">
                            <slot name="video"></slot>
                        </div>
                        <h2>
                            <slot name="title"></slot>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile, isChrome, isIE } from "mobile-device-detect";

export default {
    name: "comp-sub-kv",

    mounted() {
        gsap.registerPlugin( ScrollTrigger );
        const Tl = gsap.timeline({});

        let title = this.$el.querySelector( "h2" );
        let video = this.$el.querySelector( ".comp-sub__visual-bottom__video" );

        Tl.fromTo( title, {
            y:0,
        }, {
            y: "-50vh",
            ease:Linear.easeNone,
            scrollTrigger : {
                trigger : this.$el,
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        Tl.fromTo( video, {
            y:0,
        }, {
            y: "-30vh",
            ease:Linear.easeNone,
            scrollTrigger : {
                trigger : this.$el,
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });
    }
}

</script>

<style scoped lang="scss">
    .comp-sub__kv{
        position: relative;
        z-index: $z-index-kv;
        .inner-wrap{
            width: 100%;
            height: 100vh;
            .contents{
                .comp-sub__visual{
                    .comp-sub__visual-bottom{
                        position: relative;
                        width: 100%;
                        h2{
                            position: fixed;
                            padding: 0 pxtovw414( 40 ) 0;
                            box-sizing: border-box;
                            z-index: 6;
                            font-size: pxtovw414( 26 );
                            line-height: pxtovw414( 36 );
                            color: #fff;
                            font-family: $font-family-bold;

                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            width: 100%;
                            height: 100vh;
                            opacity: 0;
                        }

                        .comp-sub__visual-bottom__video{
                            position: fixed;
                            width: 100%;
                            height: 100vh;
                            left: 0;
                            top: 0;
                            /* 동영상 dim 처리 */
                            &::after {
                                position: absolute;
                                top: 0;
                                left: 0;
                                display: block;
                                content: '';
                                width: 100%;
                                height: 100%;
                                font-size: 0;
                                background-color: rgba(0,0,0,.2);
                            }

                            video{
                                width: 100%;
                                height: 100vh;
                                object-fit: cover;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (orientation: landscape) {
        .mobile {
            .comp-sub__kv{
                .inner-wrap{
                    .contents{
                        .comp-sub__visual{
                            .comp-sub__visual-bottom{
                                h2{
                                    padding: 0 pxtovw414( 40 ) 0;
                                    font-size: pxtovw414( 15 );
                                    line-height: pxtovw414( 20 );
                                }

                                .comp-sub__visual-bottom__video{
                                    /* 동영상 dim 처리 */
                                    &::after {
                                    }
                                    video{
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .comp-sub__kv{
            .inner-wrap{
                .contents{
                    .comp-sub__visual{
                        .comp-sub__visual-bottom{
                            box-sizing: border-box;
                            width: 1200px;
                            margin: 0 auto;
                            padding-left: 170px;
                            position: relative;

                            h2{
                                padding-left: 0;
                                font-size: $font-size-xl;
                                line-height: 56px;
                            }

                            .comp-sub__visual-bottom__video{
                                min-width: 1280px;
                                video{

                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>