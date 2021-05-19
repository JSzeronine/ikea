<template>
    <!-- future-wrap -->
    <section class="future-wrap">

        <!-- bg-wrap -->
        <div class="bg-wrap">
            <div class="img-pc bg-pc" :style="{backgroundImage:'url(' + contents.video_bg_pc + ')'}"></div>
            <div class="img-mb bg-m" :style="{backgroundImage:'url(' + contents.video_bg_mb + ')'}"></div>
        </div>
        <!--//bg-wrap -->

        <!-- inner-wrap -->
        <div class="inner-wrap">
            <div class="future-title">
                <p class="tit-top" v-html="contents.title"></p>
                <p class="tit-bottom" v-html="contents.description"></p>
            </div>


            <div class="address-wrap">
                <div class="address">
                    <h3 class="tit">{{ contents.address.title }}</h3>
                    <p>{{ contents.address.date }}</p>
                </div>

                <div class="time">
                    <h3 class="tit">
                        {{ contents.operation.title }}
                    </h3>
                    <div class="time-wrap">
                        <span>{{ contents.operation.ikea_lab.title }}</span>
                        <p>{{ contents.operation.ikea_lab.time }}</p>
                    </div>
                    <div class="time-wrap">
                        <span>{{ contents.operation.food_lab.title }}</span>
                        <p v-html="contents.operation.food_lab.time">
                        </p>
                    </div>
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
    data(){
        return{
            contents : null,
        }
    },

    created() {
        this.contents = this.$t( "contents.future" );
    },

    mounted() {

        gsap.registerPlugin( ScrollTrigger );

        let bg = ( isMobile ) ? this.$el.querySelector( ".bg-m" ) : this.$el.querySelector( ".bg-pc" );
        let title = this.$el.querySelector( ".future-title" );

        let address = this.$el.querySelector( ".address-wrap" );

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

        Tl.fromTo( address, {
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

            &::before {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15730042016806722) 30%, rgba(0,0,0,0.6) 100%);
            }
        }

        .inner-wrap {
            display: flex;
            align-items: center;
            flex-direction: column;
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            padding: pxtovw414(195) pxtovw414(40) pxtovw414(60) pxtovw414(40);
            box-sizing: border-box;

            .future-title {
                width: 100%;
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
                }

                .tit-bottom {
                    padding-top: pxtovw414(20);
                }
            }

            .address-wrap {
                position: absolute;
                bottom: pxtovw414(60);
                left: 0;
                width: 100%;
                padding: 0 pxtovw414(40) 0 pxtovw414(40);
                box-sizing: border-box;

                color: #fff;
                font-size: pxtovw414(16);
                line-height: pxtovw414(22);
                font-family: $font-family-regular;

                .address {
                    margin-bottom: pxtovw414(30);
                    .tit {
                        margin-bottom: pxtovw414(8);

                        font-family: $font-family-bold;
                    }
                    p {

                    }
                }
                .time {
                    .tit {
                        margin-bottom: pxtovw414(8);

                        font-family: $font-family-bold;
                    }
                    .time-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        span {}
                        p {
                            text-align: right;
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
                    padding: pxtovw414(95) pxtovw414(40) pxtovw414(30) pxtovw414(40);
                    .future-title {
                        font-size: pxtovw414(14);
                        line-height: pxtovw414(20);
                        .tit-top {
                            padding-bottom: pxtovw414(10);
                            &::after {
                                width: pxtovw414(110);
                            }
                        }

                        .tit-bottom {
                            padding-top: pxtovw414(10);
                        }
                    }

                    .address-wrap {
                        font-size: pxtovw414(8);
                        line-height: pxtovw414(11);

                        .address {
                            margin-bottom: pxtovw414(15);
                            .tit {
                                margin-bottom: pxtovw414(4);
                            }
                            p {

                            }
                        }
                        .time {
                            .tit {
                                margin-bottom: pxtovw414(4);
                            }
                            .time-wrap {
                                span {}
                                p {
                                }
                            }
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
                min-height: 700px;
                padding: 0 170px;
                .future-title {
                    padding: 240px 0 0 0;
                    font-size: $font-size-xl;
                    line-height: 56px;
                    .tit-top {
                        padding-bottom: 30px;

                        &::after {
                            width: 352px;
                        }
                    }

                    .tit-bottom {
                        padding-top: 30px;
                    }

                }


                .address-wrap {
                    position: absolute;
                    bottom: 75px;
                    left: 0;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 170px;

                    font-size: $font-size-xs;
                    line-height: 29px;
                    .address {
                        margin-bottom: 0;
                        .tit {
                            margin-bottom: 8px;
                        }
                        p {

                        }
                    }
                    .time {
                        .tit {
                            margin-bottom: 8px;
                        }
                        .time-wrap {

                            span {
                                display: block;
                                margin-right: 60px;
                            }
                            p {

                            }
                        }
                    }
                }
            }
        }
    }

</style>