<template>
    <!-- future-wrap -->
    <section class="future-wrap">

        <!-- bg-wrap -->
        <div class="bg-wrap">
            <div class="img-pc bg-pc" :style="{backgroundImage:'url(./img/teaser/teaser_future_bg.jpg)'}"></div>
            <div class="img-mb bg-m" :style="{backgroundImage:'url(./img/teaser/m_teaser_future_bg.jpg)'}"></div>
        </div>
        <!--//bg-wrap -->

        <!-- inner-wrap -->
        <div class="inner-wrap">
            <div class="future-title">
                <div class="tit-top">
                    <p class="tit-01" v-html="language.title"></p>
                    <p class="tit-02" v-html="language.lab"></p>
                </div>
                <p class="tit-bottom" v-html="language.description"></p>
<!--                <p class="tit-top">-->
<!--                    <span v-html="language.description"></span>-->
<!--                </p>-->
                <div class="tit-bottom-btn">
                    <a href="./lab/" class="lab-btn">
<!--                        <img :src="`./img/main/mainlab_arrow_btn.png`" alt="화살표 버튼">-->
                        <img :src="`./img/common/btn-arrow-box-white.png`" alt="화살표 버튼">
                    </a>
                </div>
            </div>
        </div>
        <!-- //inner-wrap -->

    </section>
    <!--//future-wrap -->
</template>

<script>
import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Cubic, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "comp-teaser-future",

    data () {
        return {
            language: null
        }
    },

    created() {
        this.language = this.$t( "contents.lab" );
    },

    mounted() {

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
    },
}
</script>

<style scoped lang="scss">
    .future-wrap {
        position: relative;
        height: 100vh;
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

            .future-title {
                width: 100%;
                padding: pxtovw414(195) 0 pxtovw414(70) 0;
                box-sizing: border-box;
                font-size: pxtovw414(24);
                line-height: pxtovw414(33);
                font-family: $font-family-bold;
                color: #fff;

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

                .tit-bottom-btn {
                    padding-top: pxtovw414(30);
                    .lab-btn {
                        display: inline-block;
                        width: pxtovw414(60);
                        height: pxtovw414(60);
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

                    & img {width: 100%; transition: transform 0.2s;}
                }
            }
        }
    }

    @media screen and (orientation: landscape){
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
                        padding-top: pxtovw414(80);
                        font-size: pxtovw414(15);
                        line-height: pxtovw414(20);
                        .tit-top {
                            padding-bottom: pxtovw414(15);
                        }

                        .tit-bottom {
                            .lab-btn {
                                width: pxtovw414(30);
                                height: pxtovw414(30);
                            }

                            & img {}
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
                min-width: $stage-contents-width;
                padding: 0;
                .future-title {
                    padding-top: 270px;
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

                    .tit-bottom-btn {
                        padding-top: 30px;
                        .lab-btn {
                            display: inline-block;
                            width: 60px;
                            height: 60px;
                        }

                        & img {

                        }
                    }

                }
            }
        }
    }

</style>