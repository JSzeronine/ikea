<template>
    <li>
        <p class="sub-future__img">
            <slot name="img"></slot>
        </p>
        <dl>
            <dt>
                <slot name="title"></slot>
            </dt>
            <dd>
                <slot name="link"></slot>
            </dd>
        </dl>
    </li>
</template>

<script>

import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile, isChrome, isIE } from "mobile-device-detect";

export default {
    name: "item-future",
    mounted() {
        gsap.registerPlugin( ScrollTrigger );

        const Tl = gsap.timeline({});
        const imgBx = this.$el.querySelector( ".sub-future__img" );
        const img = imgBx.querySelector( "img" );

        if( isMobile ){
            Tl.fromTo( img, {
                scale : 1.5,
            }, {
                scale : 1,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "bottom top",
                    scrub : true,
                }
            });

            return;
        }

        Tl.fromTo( img, {
            y:-28,
            scale : 1.5,
        }, {
            y:0,
            scale : 1,
            scrollTrigger : {
                trigger : this.$el,
                start : "top bottom",
                end : "bottom top",
                scrub : true,
            }
        });
    }
}
</script>

<style scoped lang="scss">
    li{
        margin-bottom: pxtovw414( 30 );
        background-color: #fff;

        &:last-child{
            margin-bottom: 0px;
        }

        .sub-future__img{
            width: 100%;
            height: pxtovh414( 280 );
            overflow: hidden;

            img{
                width: 100%;
            }
        }

        dl{
            box-sizing: border-box;
            padding: pxtovw414( 30 );
            dt{
                font-size: pxtovw414( 24 );
                font-family: $font-family-bold;
                color: #000;
                line-height: pxtovw414( 34 );
                margin-bottom: pxtovw414( 20 );
            }

            dd{
                a{
                    display: inline-block;
                    width: pxtovw414( 60 );
                    font-size: 0;
                    img{
                        transition: transform 0.2s;
                        width: 100%;
                    }

                    border-radius: 50%;
                    overflow: hidden;
                    transition: transform 0.2s;

                    &:hover {
                        transform: scale(0.95);
                        img {
                            transform: scale(1.2) translate3d(0px,0,0);
                        }

                    }
                }
            }
        }
    }

    @media screen and (orientation: landscape) {
        .mobile {
            li{
                margin-bottom: pxtovw414( 15 );
                &:last-child{
                }

                .sub-future__img{
                    height: pxtovh414( 200 );
                    img{

                    }
                }

                dl{
                    padding: pxtovw414( 15 );
                    dt{
                        font-size: pxtovw414( 12 );
                        line-height: pxtovw414( 17 );
                        margin-bottom: pxtovw414( 10 );
                    }

                    dd{
                        a{
                            width: pxtovw414( 30 );
                            img{
                            }
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        li{
            width: 420px;
            margin-bottom: 0;
            &:last-child{
            }

            .sub-future__img{
                height: 320px;
                img{
                }
            }

            dl{
                padding: 30px;
                dt{
                    font-size: 24px;
                    line-height: 33px;
                    margin-bottom: 30px;
                }

                dd{
                    a{
                        width: 60px;
                        img{
                        }
                    }
                }
            }
        }
    }

</style>