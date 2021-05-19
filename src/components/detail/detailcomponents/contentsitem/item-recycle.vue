<template>
    <li>
        <a :href="link" target="_blank" @mouseenter="mOver" @mouseleave="mOut">
            <p class="detail-product__img">
                <slot name="img"></slot>
            </p>

            <dl>
                <dt class="detail-product__title">
                    <slot name="title"></slot>
                </dt>

                <dd class="detail-product__description">
                    <slot name="description"></slot>
                </dd>

                <dd class="detail-product__price">
                    <div class="detail-product__price-won">￦</div>
                    <div class="detail-product__price-value">
                        <slot name="price"></slot>
                    </div>
                </dd>
            </dl>

            <div class="detail-recycle__product-material__bx">
                <div class="detail-recycle__product-material">
                    <img class="detail-recycle__product-material-drink" :src="`../img/common/icon-drink.png`" alt="">
                    <img class="detail-recycle__product-material-x" :src="`../img/common/icon-x.png`" alt="">
                    <div>
                        <dl>
                            <dt><slot name="pet"></slot></dt>
                            <dd>PET</dd>
                        </dl>
                    </div>
                </div>

                <p class="detail-recycle__product-material__description">
                    <slot name="material-description"></slot>
                </p>
            </div>
        </a>
    </li>
</template>

<script>

import { EventBus } from "@/components/common/EventBus";
import { gsap, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "item-recycle",
    props : {
        link : String,
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
                scale : 1.3,
            }, {
                scale : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : imgBx,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });
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
    li{
        margin-bottom: pxtovw414( 80 );
        &:last-child{
            margin-bottom: 0;
        }

        a{
            display: block;

            .detail-product__img{
                font-size: 0;
                width: pxtovw414( 280 );
                height: pxtovw414( 280 );
                overflow: hidden;
                border-radius: 100%;
                margin: 0 auto;
                margin-bottom: pxtovw414( 50 );
                background-color: #F7F7F7;
                transform: translate3d( 0, 0, 0 );
                img{
                    width: 100%;
                }
            }

            > dl{
                box-sizing: border-box;
                padding-left: pxtovw414( 40 );
                margin-bottom: pxtovw414( 30 );
                dt{
                    text-align: left;
                    font-size: pxtovw414( 24 );
                    line-height: pxtovw414( 33 );
                    font-family: $font-family-bold;
                    margin-bottom: pxtovw414( 6 );
                }

                dd{
                    text-align: left;
                    &.detail-product__description{
                        font-size: pxtovw414( 16 );
                        line-height: pxtovw414( 24 );
                        margin-bottom: pxtovw414( 10 );
                    }

                    &.detail-product__price{
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
                                line-height: pxtovw414( 24 );
                                display: inline-block;
                                margin-left: pxtovw414( 4 );
                            }
                        }
                    }
                }
            }

            .detail-recycle__product-material__bx{
                padding: 0 pxtovw414( 40 );
                box-sizing: border-box;
                .detail-recycle__product-material{
                    border-top: 1px solid $color-set-green;
                    border-bottom: 1px solid $color-set-green;
                    padding: pxtovw414( 24 ) 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: pxtovw414( 30 );
                    .detail-recycle__product-material-drink{
                        width: pxtovw414( 22 );
                    }

                    .detail-recycle__product-material-x{
                        width: pxtovw414( 12 );
                        margin: 0 pxtovw414( 25 );
                    }

                    > div{
                        width: pxtovw414( 63 );
                        height: pxtovw414( 63 );
                        background-color: $color-set-green;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;
                        border-radius: 100%;
                        overflow: hidden;

                        dl{
                            text-align: center;
                            dt{
                                font-family: $font-family-bold;
                                width: 100%;
                                text-align: center;
                                font-size: pxtovw414( 24 );
                                line-height: pxtovw414( 33 );
                                color: #fff;
                            }

                            dd{
                                margin-top: pxtovw414( -3 );
                                font-family: $font-family-bold;
                                font-size: pxtovw414( 12 );
                                line-height: pxtovw414( 17 );
                                color: #fff;
                            }
                        }
                    }
                }

                .detail-recycle__product-material__description{
                    font-size: pxtovw414( 16 );
                    line-height: pxtovw414( 24 );
                }
            }
        }
    }


    .desktop, .tablet{
        li{
            margin-right: 0;
            width: 330px;
            margin-bottom: 0;
            &:last-child{
            }

            a{

                .detail-product__img{
                    width: 330px;
                    height: 330px;
                    margin: 0 auto 50px;
                    img{
                    }
                }

                > dl{
                    padding-left: 0;
                    margin-bottom: 30px;
                    dt{
                        font-size: $font-size-s;
                        line-height: 30px;
                        margin-bottom: 6px;
                    }

                    dd{
                        &.detail-product__description{
                            font-size: $font-size-base;
                            line-height: 22px;
                            margin-bottom: 12px;
                        }

                        &.detail-product__price{
                            .detail-product__price-won{
                                font-size: $font-size-base;
                                line-height: 28px;
                                margin-right: 4px;
                            }

                            .detail-product__price-value{
                                font-size: $font-size-s;
                                line-height: 30px;
                                span{

                                }
                            }
                        }
                    }
                }

                .detail-recycle__product-material__bx{
                    padding: 0;
                    .detail-recycle__product-material{
                        padding: 23px 90px;
                        margin-bottom: 30px;
                        .detail-recycle__product-material-drink{
                            width: 30px;
                        }

                        .detail-recycle__product-material-x{
                            width: 20px;
                            margin: 0 18px;
                        }

                        > div{
                            width: 63px;
                            height: 63px;
                            dl{
                                dt{
                                    font-size: 24px;
                                    line-height: 33px;
                                }

                                dd{
                                    margin-top: -3px;
                                    font-size: 12px;
                                    line-height: 17px;
                                }
                            }
                        }
                    }

                    .detail-recycle__product-material__description{
                        font-size: $font-size-base;
                        line-height: 26px;
                    }
                }
            }
        }
    }

</style>