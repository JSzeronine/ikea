<template>
    <div class="item-product swiper-slide">
        <!--        <a :href="link" target="_blank">-->
        <div class="detail-product__img">
            <slot name="img"></slot>
        </div>

        <dl>
            <dt class="detail-product__title">
                <slot name="name"></slot>
            </dt>

            <dd class="detail-product__price">
                <div class="detail-product__price-won">￦</div>
                <div class="detail-product__price-value">
                    <slot name="price"></slot>
                </div>
            </dd>

            <dd class="detail-product-sub">
                <slot name="sub-title"></slot>
            </dd>
        </dl>
        <!--        </a>-->
    </div>
</template>

<script>
// import { swiperSlide } from 'vue-awesome-swiper'

import {EventBus} from "@/components/common/EventBus";
import {gsap, Cubic} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
    name: "item-product-food",
    props: {
        link: String
    },

    components: {
        // swiperSlide
    },

    mounted() {
        EventBus.$on(EventBus.LOAD_COMPLETE_EVENT, this.loadComplete);
    },

    methods: {
        loadComplete() {
            gsap.registerPlugin(ScrollTrigger);

            let Tl = gsap.timeline({});

            let imgBx = this.$el.querySelector(".detail-product__img");
            let img = imgBx.querySelector("img");

            Tl.fromTo(img, {
                scale: 1.2,
            }, {
                scale: 1,
                ease: Cubic.easeOut,
                scrollTrigger: {
                    trigger: imgBx,
                    start: "top bottom",
                    end: "center center",
                    scrub: 0.5,
                }
            })
        }
    }
}
</script>


<style scoped lang="scss">
.item-product {
    width: pxtovw414(280);
    margin-right: pxtovw414(54);

    &:last-child {
        margin-right: 0;
    }

    .detail-product__img {
        height: pxtovw414(280);
        border-radius: 100%;
        margin-bottom: pxtovw414(50);
        overflow: hidden;
        background-color: #F7F7F7;
        transform: translate3d(0, 0, 0);

        img {
            width: 100%;
        }
    }

    dl {
        dt {
            p {
                font-size: pxtovw414(20);
                font-family: $font-family-regular;
                line-height: pxtovw414(27);
                margin-bottom: pxtovw414(5);
            }

            font-size: pxtovw414(24);
            line-height: pxtovw414(33);
            font-family: $font-family-bold;
            margin-bottom: pxtovw414(8);
        }

        dd {
            &.detail-product__price {
                display: flex;
                justify-content: flex-start;
                margin-bottom: pxtovw414(40);

                .detail-product__price-won {
                    font-size: pxtovw414(20);
                    line-height: pxtovw414(27);
                    font-family: $font-family-regular;
                }

                .detail-product__price-value {
                    display: flex;
                    align-items: flex-end;
                    font-size: pxtovw414(20);
                    font-family: $font-family-regular;
                    line-height: pxtovw414(27);

                    span {
                        font-size: pxtovw414(16);
                        font-family: $font-family-regular;
                        line-height: pxtovw414(24);
                        display: inline-block;
                        margin-left: pxtovw414(4);
                    }
                }
            }

            &.detail-product-sub {
                font-size: pxtovw414(16);
                line-height: pxtovw414(24);
            }
        }
    }
}

.desktop, .tablet {
    .item-product {
        width: 308px;
        margin-right: 52px;

        &:last-child {
            margin-right: 0;
        }

        .detail-product__img {
            width: 308px;
            height: 308px;
            margin-bottom: 50px;

            img {

            }
        }

        dl {
            dt {
                p {
                    font-size: $font-size-xs;
                    line-height: 24px;
                    margin-bottom: 6px;
                }

                font-size: $font-size-xs;
                line-height: 24px;
                margin-bottom: 6px;
            }

            dd {
                &.detail-product__price {
                    margin-bottom: 40px;

                    .detail-product__price-won {
                        font-size: $font-size-xs;
                        line-height: 24px;
                    }

                    .detail-product__price-value {
                        font-size: $font-size-xs;
                        line-height: 24px;

                        span {
                            font-size: $font-size-base;
                            line-height: 22px;
                            margin-left: 4px;
                        }
                    }
                }

                &.detail-product-sub {
                    font-size: $font-size-base;
                    line-height: 22px;
                }
            }
        }
    }
}
</style>