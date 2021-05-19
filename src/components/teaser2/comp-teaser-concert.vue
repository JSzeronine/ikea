<template>
    <section class="teaser-concert">
        <div class="inner-wrap">
            <div class="content">
                <div class="activity-concert__bx">
                    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                        <slot name="list-concert"></slot>
                        <div class="swiper-scrollbar" slot="scrollbar"></div>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import {isMobile, isTablet} from "mobile-device-detect";

import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {EventBus} from "@/components/common/EventBus";

export default {
    name: "comp-teaser-concert",
    data() {
        return {
            swiperOption: {
                slidesPerView: 'auto',
                centeredSlides: ( isMobile ) ? true : false,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false,
                }
            }
        }
    },

    components : {
        swiper,
        swiperSlide
    },

    created() {
        if( isTablet ){
            this.swiperOption.centeredSlides = false;
        }
    },


    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods: {
        imgLoadComplete(){
            // window.setTimeout(this.onResize, 1000);
            this.onResize();
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let wrap = this.$el.querySelector( ".inner-wrap" );
            let content = wrap.querySelector( ".content" );

            Tl.fromTo( content, {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity:1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : wrap,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });
        },

        onResize() {
            const wrap = this.$el.querySelector(".activity-concert__bx .swiper-wrapper");
            const items = this.$el.querySelectorAll(".activity-concert__bx .item-concert");
            Array.prototype.slice.call(items).forEach(function(item){
                item.style.height = wrap.offsetHeight + "px"
            });
        }
    }

}
</script>

<style scoped lang="scss">
    .teaser-concert{
        margin: pxtovw414( 160 ) 0;
        overflow: hidden;
        .inner-wrap{
            .content{
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
        .teaser-concert{
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

                    .activity-concert__bx{
                        box-sizing: border-box;

                        .swiper{
                            padding-bottom: 70px;
                        }
                    }
                }
            }
        }
    }

</style>