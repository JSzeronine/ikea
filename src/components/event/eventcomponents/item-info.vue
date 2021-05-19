<template>
    <li>
        <div class="item-info__s-bx">
            <div class="event-list_shortcut">
                <slot name="shortcut"></slot>
            </div>

            <div class="event-list__img">
                <slot name="img"></slot>
            </div>

            <div class="event-list__description__point">
                <slot name="description-point"></slot>
            </div>

            <div class="event-list__description">
                <slot name="description"></slot>
            </div>

            <div class="event-gift__list-bx">
                <slot name="gift"></slot>
            </div>

            <div>
                <slot name="date"></slot>
            </div>

            <div class="event-product__list-bx">
                <slot name="product"></slot>
            </div>

            <div class="event-list__join">
                <slot name="join"></slot>
            </div>

            <div class="event-list__important">
                <slot name="important"></slot>
            </div>

            <div class="event-list__important-list">
                <slot name="important-list"></slot>
            </div>

            <div class="event-list__reservation">
                <slot name="reservation"></slot>
            </div>
        </div>
    </li>
</template>

<script>
import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {EventBus} from "@/components/common/EventBus";

export default {
    name: "item-info",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods : {
        imgLoadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            Tl.fromTo( this.$el.querySelector( ".item-info__s-bx" ), {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity:1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });
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

        .event-list_shortcut {
            margin-bottom: pxtovw414(50);
            padding-left: pxtovw414(40);
            box-sizing: border-box;
            a {
                overflow: hidden;
                display: inline-block;
                width: pxtovw414(60);
                height: pxtovw414(60);
                border-radius: 50%;

                img {
                    width: 100%;
                }
            }
        }

        .event-list__img{
            img{
                width: 100%;
            }
        }

        .event-list__description__point{
            margin: pxtovw414( 40 ) 0;
            padding: 0 pxtovw414( 40 );
            box-sizing: border-box;

            font-size: pxtovw414( 16 );
            line-height: pxtovw414( 24 );
            color: #000;
            font-family: $font-family-bold;
        }

        .event-list__description{
            margin: pxtovw414( 40 ) 0 pxtovw414(30);
            padding: 0 pxtovw414( 40 );
            box-sizing: border-box;

            font-size: pxtovw414( 16 );
            line-height: pxtovw414( 24 );
            color: #000;
        }

        .event-list__date{
            margin: pxtovw414( 40 ) 0;
            box-sizing: border-box;
            padding: 0 pxtovw414( 40 );
            dl{
                display: flex;
                justify-content: flex-start;
                border-top: 1px solid #DFDFDF;
                border-bottom: 1px solid #DFDFDF;
                padding: pxtovw414( 18 ) 0;

                &:first-child{
                    border-top: 1px solid #DFDFDF!important;
                }

                &:last-child{
                    border-top: none;
                }

                dt{
                    //width: pxtovw414(95);
                    width: 30%;
                    margin-right: pxtovw414(15);
                    font-size: pxtovw414( 16 );
                    line-height: pxtovw414( 24 );
                    font-family: $font-family-bold;
                    color: #000;
                }
                dd{
                    //width: pxtovw414(240);
                    width: 70%;

                    font-size: pxtovw414( 16 );
                    line-height: pxtovw414( 24 );
                    color: #000;
                }
            }
        }

        .event-product__list-bx{
            .event-product__list{
                margin: pxtovw414( 80 ) 0;
            }
        }

        .event-list__join{
            box-sizing: border-box;
            padding-left: pxtovw414( 40 );
            a{
                display: inline-block;
                padding: pxtovw414( 16 ) pxtovw414( 26 );
                font-size: pxtovw414( 18 );
                color: #fff;
                background-color: #000;
                overflow: hidden;
                border-radius: 100px;
                font-family: $font-family-bold;
            }
        }

        .event-list__important{
            margin: pxtovw414( 40 ) 0;
            box-sizing: border-box;
            padding: 0 pxtovw414( 40 );
            font-size: pxtovw414( 14 );
            line-height: pxtovw414( 24 );

            span{
                display: block;
                margin-bottom: pxtovw414( 10 );

                .em{
                    font-family: $font-family-bold;
                    font-style: initial;
                    opacity: 0.1;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        .event-list__important-list{
            display: none;
            box-sizing: border-box;
            padding: 0 pxtovw414( 40 );
            dl{
                margin-bottom: pxtovw414( 40 );

                dt{
                    font-size: pxtovw414( 14 );
                    line-height: pxtovw414( 24 );
                    font-family: $font-family-bold;
                    margin-bottom: pxtovw414( 6 );
                }

                dd{
                    font-size: pxtovw414( 14 );
                    line-height: pxtovw414( 24 );
                }
            }
        }

        .event-list__reservation{
            box-sizing: border-box;
            padding-left: pxtovw414( 40 );
            a{
                display: inline-block;
                padding: pxtovw414( 16 ) pxtovw414( 26 );
                font-size: pxtovw414( 18 );
                color: #fff;
                background-color: #000;
                overflow: hidden;
                border-radius: 100px;
                font-family: $font-family-bold;
            }
        }
    }

    .desktop, .tablet{
        li{
            margin-bottom: 120px;
            &:last-child{
                margin: 0;
            }

            .event-list_shortcut {
                margin-bottom: 50px;
                padding-left: 0;
                a {
                    width: 60px;
                    height: 60px;
                }
            }

            .event-list__img{
                margin: 40px 0;
                img{
                    width: 100%;
                }
            }

            .event-list__description__point{
                margin: 40px 0;
                padding: 0;

                font-size: $font-size-xs;
                line-height: 28px;
            }

            .event-list__description{
                width: 100%;
                margin: 40px 0;
                padding-left: 0;
                padding-right: 190px;
                font-size: $font-size-xs;
                line-height: 28px;

            }

            .event-list__date{
                margin: 40px 0;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;

                padding: 20px 0;
                padding-right: 65px;
                border-top: 1px solid #DFDFDF;
                border-bottom: 1px solid #DFDFDF;
                dl{
                    align-items: flex-start;
                    width: 50%;
                    border: none;
                    padding: 0;

                    &:first-child{
                        border-top: none!important;
                    }

                    &:last-child{
                        padding-right: 0;
                    }

                    dt{
                        margin-right: 0;
                        font-size: $font-size-xs;
                        line-height: 24px;
                    }

                    dd{
                        font-size: 16px;
                        line-height: 22px;
                    }
                }
            }

            .event-product__list-bx{
                .event-product__list{
                    margin: 120px 0;
                }
            }

            .event-list__join{
                margin: 40px 0;
                padding-left: 0;
                a{
                    font-size: $font-size-xs;
                    line-height: 24px;
                    padding: 13px 30px;
                }
            }

            .event-list__important{
                margin: 40px 0;
                padding-left: 0;
                span{
                    font-size: 16px;
                    line-height: 24px;
                    margin: 0;
                }
            }

            .event-list__important-list{
                box-sizing: border-box;
                padding: 0;
                dl{
                    margin: 40px 0;

                    &:last-child{
                        margin-bottom: 30px;
                    }

                    dt{
                        font-size: $font-size-base;
                        line-height: 24px;
                        margin-bottom: 6px;
                    }

                    dd{
                        font-size: $font-size-base;
                        line-height: 24px;
                    }
                }
            }

            .event-list__reservation{
                margin: 40px 0;
                padding-left: 0;
                a{
                    font-size: $font-size-xs;
                    line-height: 24px;
                    padding: 13px 30px;
                }
            }

        }
    }

</style>