<template>
    <section class="lab-space">
        <div class="inner-wrap">
            <div class="content">
                <div class="lab-space__content">
                    <div class="lab-space__num-bx">
                    <span>
                        <slot name="depth"></slot>
                    </span>
                    </div>

                    <div class="lab-space__list">
                        <swiper class="swiper" :options="swiperOption" ref="mySwiper" @slideChange="slideChange">
                            <slot name="list"></slot>
                            <div class="swiper-scrollbar" slot="scrollbar"></div>
                        </swiper>

                        <div class="lab-space__list-txt">
                            <ul>
                                <slot name="list-txt"></slot>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { isMobile, isChrome, isIE, isTablet } from 'mobile-device-detect';

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {EventBus} from "@/components/common/EventBus";

export default {
    name: "comp-lab-space",
    data(){
        return{
            swiperOption : {
                slidesPerView : "auto",
                centeredSlides : ( isMobile ) ? true : false,
                // spaceBetween : "2.41546%",
                scrollbar : {
                    el : ".swiper-scrollbar",
                    hide : false,
                },
            },
        }
    },

    components : {
        swiper,
        swiperSlide
    },

    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },

    created() {
        if( isTablet ){
            this.swiperOption.centeredSlides = false;
        }
    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods : {
        imgLoadComplete(){
            this.showChangeText( 0 );

            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let content = this.$el.querySelector( ".content" );

            Tl.fromTo( content.querySelector( ".lab-space__content" ), {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity:1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : content,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });
        },

        slideChange(){
            let activeIndex = this.swiper.activeIndex;
            this.showChangeText( activeIndex );
        },

        showChangeText( $index ){
            let txts = this.$el.querySelectorAll( ".lab-space__list-txt li" );

            Array.prototype.forEach.call( txts, ( $item, $itemIndex ) => {
                $item.classList.remove( "on" );

                if( $index == $itemIndex ){
                    $item.classList.add( "on" );
                }
            });
        }
    },
}
</script>

<style scoped lang="scss">
    .lab-space{
        margin: pxtovw414( 160 ) 0;
        overflow: hidden;
        .inner-wrap{
            .content{
                .lab-space__num-bx{
                    box-sizing: border-box;
                    margin-left: pxtovw414( 40 );
                    width: pxtovw414( 44 );
                    height: pxtovw414( 44 );
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #000;
                    border-radius: 100%;
                    overflow: hidden;
                    margin-bottom: pxtovw414( 30 );
                    span{
                        font-size: pxtovw414( 16 );
                        line-height: pxtovw414( 24 );
                        color: #fff;
                        font-family: $font-family-bold;
                    }
                }

                .lab-space__list{
                    position: relative;
                    .swiper{
                        //padding-left: pxtovw414( 40 );
                        padding-bottom: pxtovw414( 172 );
                    }

                    .lab-space__list-txt{
                        position: absolute;
                        //bottom: pxtovw414( 50 );
                        top: pxtovw414( 500 );
                        left: 0;
                        box-sizing: border-box;
                        padding: 0 pxtovw414( 40 );

                        ul{
                            li{
                                dl{
                                    dt{
                                        margin-bottom: pxtovw414( 10 );
                                        font-size: pxtovw414( 18 );
                                        line-height: pxtovw414( 24 );
                                        font-family: $font-family-bold;
                                        color: #009945;
                                    }

                                    dd{
                                        font-size: pxtovw414( 16 );
                                        line-height: pxtovw414( 24 );
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
        .lab-space{
            width: 100%;
            min-width: 1280px;
            margin: 220px 0;
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;

                .content{
                    width: 1200px;
                    margin: 0 auto;
                    padding-left: 170px;
                    box-sizing: border-box;

                    .lab-space__num-bx{
                        margin-left: 0;
                        width: 44px;
                        height: 44px;
                        margin-bottom: 63px;
                        span{
                            font-size: $font-size-base;
                        }
                    }

                    .lab-space__list{
                        .swiper{
                            padding-left: 0;
                            padding-bottom: 184px;
                        }

                        .lab-space__list-txt{
                            top: 390px;
                            padding: 0;
                            ul{
                                li{
                                    dl{
                                        dt{
                                            font-size: $font-size-s;
                                            line-height: 30px;
                                            margin-bottom: 20px;
                                        }

                                        dd{
                                            font-size: $font-size-base;
                                            line-height: 24px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .en{
        .lab-space{
            .inner-wrap{
                .content{
                    .lab-space__list{
                        .lab-space__list-txt{
                            top: pxtovw414( 470 );
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        &.en{
            .lab-space{
                .inner-wrap{
                    .content{
                        .lab-space__list{
                            .lab-space__list-txt{
                                top: 390px;
                            }
                        }
                    }
                }
            }
        }
    }


</style>