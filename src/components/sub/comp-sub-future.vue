<template>
    <section class="comp-sub__future">
        <div class="inner-wrap">
            <div class="content">
                <h2>
                    <slot name="title"></slot>
                </h2>
                <ul>
                    <slot name="future-list"></slot>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile, isChrome, isIE } from "mobile-device-detect";

export default {
    name: "comp-sub-feture",
    mounted() {

        gsap.registerPlugin( ScrollTrigger );

        let Tl = gsap.timeline({});

        let title = this.$el.querySelector( "h2" );

        Tl.fromTo( title.querySelector( "span" ), {
            y:25,
            opacity: 0,
        }, {
            y:0,
            opacity: 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : title,
                start : "top 90%",
                end : "bottom center",
                scrub : true,
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .comp-sub__future{
        position: relative;
        z-index: $z-index-kv + 1;
        .inner-wrap{
            background-color: $color-set-green;
            box-sizing: border-box;
            padding: pxtovw414( 100 ) 0 pxtovw414( 100 ) pxtovw414( 40 );
            .content{
                h2{
                    font-size: pxtovw414( 30 );
                    line-height: pxtovw414( 40 );
                    font-family: $font-family-bold;
                    margin-bottom: pxtovw414( 60 );
                    color: #fff;
                    span{
                        display: inline-block;
                    }
                }

                ul{

                }
            }
        }
    }


    @media screen and (orientation: landscape) {
        .mobile {
            .comp-sub__future{
                .inner-wrap{
                    padding: pxtovw414( 55 ) 0 pxtovw414( 50 ) pxtovw414( 40 );
                    .content{
                        h2{
                            font-size: pxtovw414( 15 );
                            line-height: pxtovw414( 20 );
                            margin-bottom: pxtovw414( 15 );
                        }

                        ul{

                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .comp-sub__future{
            width: 100%;
            .inner-wrap{
                padding: 0;
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;
                height: 100vh;
                display: flex;
                align-items: center;
                .content{
                    width: 1200px;
                    margin: 0 auto;
                    padding: 0px 170px;
                    box-sizing: border-box;
                    h2{
                        font-size: $font-size-xl;
                        line-height: 56px;
                        margin-bottom: 80px;
                    }

                    ul{
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        }
    }

</style>