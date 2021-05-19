<template>
    <div class="gift-container">
        <swiper class="swiper" :options="swiperOption" ref="mySwiper">
            <slot name="list"></slot>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
import { isMobile, isChrome, isIE, isTablet } from 'mobile-device-detect';

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: "item-info-gift-container",
    data(){
        return{
            swiperOption : {
                slidesPerView : "auto",
                centeredSlides : ( isMobile ) ? false : false,
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
        if( this.$el.querySelectorAll( "swiper-slide" ).length > 3 ){
            this.$el.querySelector( ".swiper" ).classList.add( "on" );
        }
    }
}
</script>

<style scoped lang="scss">
    .gift-container{
        margin: pxtovw414( 80 ) 0;
        .swiper{
            padding-left: pxtovw414( 40 );
            padding-bottom: pxtovw414( 50 );
        }
    }

    .desktop, .tablet{
        .gift-container{
            margin: 120px 0;
            .swiper{
                padding-left: 0;
                padding-bottom: 0;

                &.on{
                    padding-bottom: 80px;
                }
            }
        }
    }
</style>