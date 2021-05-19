<template>
    <section class="detail-product">
        <div class="inner-wrap">
            <div class="contents">
                <div class="detail-product__bx">
                    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                        <slot name="list"></slot>
                        <div class="swiper-scrollbar" slot="scrollbar"></div>
                    </swiper>
                </div>

                <div v-if="isDescription" class="detail-product__info">
                    <slot name="description"></slot>
                </div>

                <div v-if="isRepresent" class="detail-product__represent-img">
                    <slot name="represent-img"></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { isMobile, isChrome, isIE, isTablet } from 'mobile-device-detect';

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: "comp-detail-product",
    data() {
        return {
            isMobile : isMobile,
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

    props : {
        isDescription : {
            type : Boolean,
            default : true,
        },

        isRepresent : {
            type : Boolean,
            default: false,
        },
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
    },

    methods : {
    }

}

</script>

<style scoped lang="scss">
    .detail-product{
        width: 100%;
        overflow: hidden;
        margin: pxtovw414( 160 ) 0;
        .inner-wrap{
            .contents{
                .detail-product__bx{
                    width: 100%;

                    .swiper{
                        padding-bottom: pxtovw414( 80 );
                    }
                }

                .detail-product__info{
                    //margin-top: 120px;
                    padding: 0 pxtovw414( 40 ) 0;
                    font-size: pxtovw414( 16 );
                    line-height: pxtovw414( 24 );
                }

                .detail-product__represent-img{
                    margin-top: pxtovw414( 140 );
                    padding-left: pxtovw414( 40 );
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .detail-product{
            width: 100%;
            overflow: hidden;
            min-width: 1280px;


            margin: 220px 0;
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;
                .contents{
                    width: 1200px;
                    margin: 0 auto;
                    padding-left: 170px;
                    box-sizing: border-box;

                    .detail-product__bx{

                        .swiper{
                            padding-bottom: 100px;
                        }
                    }

                    .detail-product__info{
                        width: 1200px;
                        margin: 0 auto;
                        font-size: $font-size-xs;
                        line-height: 28px;
                        padding: 0;
                        padding-left: 170px;
                        box-sizing: border-box;
                    }

                    .detail-product__represent-img{
                        width: 1200px;
                        margin: 0 auto;
                        padding: 0;
                        padding-left: 170px;
                        margin-top: 200px;
                        box-sizing: border-box;
                        img{
                        }
                    }
                }
            }
        }
    }
</style>