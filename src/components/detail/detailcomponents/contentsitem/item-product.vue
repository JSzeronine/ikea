<template>
    <div class="item-product swiper-slide">
        <a :href="link" target="_blank" @mouseenter="mOver" @mouseleave="mOut">
            <div class="detail-product__img">
                <slot name="img"></slot>
            </div>

            <dl>
                <dt class="detail-product__title">
                    <div class="detail-product__new-message">
                        <slot name="sale-description"></slot>
                    </div>
                    <slot name="name"></slot>
                </dt>

                <dd class="detail-product__description">
                    <slot name="description"></slot>
                </dd>

                <dd class="detail-product__price">
                    <div class="detail-product__sale-bx">
                        <div class="detail-product__sale-value">
                            <slot name="sale-price"></slot>
                        </div>
                    </div>

                    <div class="detail-product__price-bx">
                        <div class="detail-product__price-won">￦</div>
                        <div class="detail-product__price-value">
                            <slot name="price"></slot>
                        </div>
                    </div>
                </dd>

<!--                <dd class="detail-product-sub">-->
<!--                    <slot name="sub-title"></slot>-->
<!--                </dd>-->
            </dl>

            <div class="detail-product-sub">
                <slot name="sub-title"></slot>
            </div>
        </a>
    </div>
</template>

<script>
// import { swiperSlide } from 'vue-awesome-swiper'

import { EventBus } from "@/components/common/EventBus";
import { gsap, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "item-product",
    props : {
        link : String,
    },

    components: {
        // swiperSlide
    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let imgBx = this.$el.querySelector( ".detail-product__img" );
            let img = imgBx.querySelector( "img" );

            Tl.fromTo( img, {
                scale : 1.2,
            }, {
                scale : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : imgBx,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            })
        },

        mOver( $e ){
            let target = $e.target;
            let img = target.querySelector( ".detail-product__img" ).querySelector( "img" );

            gsap.to( img, 0.35, { scale : 1.1, ease:Cubic.easeOut });
        },

        mOut( $e ){
            let target = $e.target;
            let img = target.querySelector( ".detail-product__img" ).querySelector( "img" );

            gsap.to( img, 0.35, { scale : 1, ease:Cubic.easeOut });
        }
    }
}

</script>


<style scoped lang="scss">
.item-product{
    width: pxtovw414( 280 );
    margin-right: pxtovw414( 54 );

    &:last-child{
        margin-right: 0;
    }

    a{
        display: inline-block;
        .detail-product__img{
            height: pxtovw414( 280 );
            border-radius: 100%;
            margin-bottom: pxtovw414( 12 );
            overflow: hidden;
            background-color: #F7F7F7;
            transform: translate3d( 0, 0, 0 );

            img{
                width: 100%;
            }
        }

        dl{
            height: auto;
            padding-top: pxtovw414( 38 );
            position: relative;
            margin-bottom: pxtovw414( 20 );
            dt{
                .detail-product__new-message{
                    position: absolute;
                    left: 0;
                    top: 0;
                    font-size: pxtovw414( 16 );
                    line-height: pxtovw414( 22 );
                    font-family: $font-family-bold;
                    color: #FF0016;
                }

                p{
                    font-size: pxtovw414( 20 );
                    font-family: $font-family-regular;
                    line-height: pxtovw414( 27 );
                    margin-bottom: pxtovw414( 5 );
                }

                font-size: pxtovw414( 24 );
                line-height: pxtovw414( 33 );
                font-family: $font-family-bold;
                margin-bottom: pxtovw414( 8 );
            }

            dd{
                &.detail-product__description{
                    font-size: pxtovw414( 16 );
                    line-height: pxtovw414( 22 );
                    margin-bottom: pxtovw414( 20 );
                }

                &.detail-product__price{
                    //margin-bottom: pxtovw414( 14 );
                    min-height: pxtovw414( 63 );

                    .detail-product__sale-bx{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        .detail-product__sale-value{
                            text-decoration: line-through;
                            display: flex;
                            align-items: flex-end;
                            font-size: pxtovw414( 16 );
                            line-height: pxtovw414( 22 );
                            color: #484848;
                        }
                    }

                    .detail-product__price-bx{
                        display: flex;
                        justify-content: flex-start;

                        .detail-product__price-won{
                            font-size: pxtovw414( 16 );
                            line-height: pxtovw414( 24 );
                            margin-right: pxtovw414( 4 );
                            font-family: $font-family-bold;
                        }

                        .detail-product__price-value{
                            display: flex;
                            align-items: flex-end;
                            font-size: pxtovw414( 30 );
                            font-family: $font-family-bold;
                            line-height: pxtovw414( 30 );

                            span{
                                font-size: pxtovw414( 16 );
                                font-family: $font-family-regular;
                                line-height: pxtovw414( 20 );
                                display: inline-block;
                                margin-left: pxtovw414( 4 );
                            }
                        }
                    }
                }
            }
        }

        .detail-product-sub{
            font-size: pxtovw414( 16 );
            line-height: pxtovw414( 24 );
        }
    }
}

.desktop, .tablet{
    .item-product{
        width: 308px;
        margin-right: 52px;

        &:last-child{
            margin-right: 0;
        }

        a{
            .detail-product__img{
                width: 308px;
                height: 308px;
                margin-bottom: 15px;
                img{

                }
            }

            dl{
                height: auto;
                padding-top: 24px;
                margin-bottom: 20px;
                dt{
                    font-size: $font-size-s;
                    line-height: 30px;
                    margin-bottom: 6px;

                    .detail-product__new-message{
                        font-size: 14px;
                        line-height: 19px;
                    }

                    p{
                        font-size: $font-size-xs;
                        line-height: 24px;
                        margin-bottom: 6px;
                    }
                }

                dd{
                    &.detail-product__description{
                        font-size: $font-size-base;
                        line-height: 22px;
                        margin-bottom: 12px;
                    }

                    &.detail-product__price{
                        //margin-bottom: 14px;
                        min-height: 54px;
                        .detail-product__sale-bx{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            .detail-product__sale-value{
                                text-decoration: line-through;
                                display: flex;
                                align-items: flex-end;
                                font-size: $font-size-base;
                                line-height: 22px;
                                color: #484848;
                            }
                        }

                        .detail-product__price-bx{
                            .detail-product__price-won{
                                font-size: $font-size-base;
                                line-height: 28px;
                                margin-right: 4px;
                            }

                            .detail-product__price-value{
                                font-size: $font-size-s;
                                line-height: 30px;
                                span{
                                    font-size: $font-size-base;
                                    line-height: 24px;
                                    margin-left: 4px;
                                }
                            }
                        }
                    }
                }
            }

            .detail-product-sub{
                font-size: $font-size-base;
                line-height: 22px;
            }
        }
    }
}
</style>