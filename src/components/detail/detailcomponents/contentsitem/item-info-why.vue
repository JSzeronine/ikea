<template>
    <li>
        <div class="why-img__bx">
            <slot name="img"></slot>
        </div>
        <dl>
            <dt>
                <slot name="title"></slot>
            </dt>
            <dd>
                <slot name="description"></slot>
            </dd>
        </dl>
    </li>
</template>

<script>
import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventBus } from "@/components/common/EventBus";

export default {
    name: "item-info-why",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){

            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let imgBx = this.$el.querySelector( ".why-img__bx" );
            let img = imgBx.querySelector( "img" );

            let txtBx = this.$el.querySelector( "dl" );

            Tl.fromTo( img, {
                scale : 1.2,
            }, {
                scale : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center center",
                    scrub : true,
                }
            });


            Tl.fromTo( imgBx, {
                y:50,
                opacity: 0,
            }, {
                y:0,
                opacity: 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center center",
                    scrub : true,
                }
            });

            Tl.fromTo( txtBx, {
                y:150,
                opacity: 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center center",
                    scrub : true,
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">

    li{
        text-align: center;
        padding-bottom: pxtovw414( 50 );
        border-bottom: 1px solid #DEDFDE;
        margin-bottom: pxtovw414( 50 );

        &:last-child{
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
        }

        .why-img__bx{
            display: inline-block;
            width: pxtovw414( 200 );
            height: pxtovw414( 200 );
            border-radius: 100%;
            overflow: hidden;
            margin-bottom: pxtovw414( 30 );

            img{ width: 100%; }
        }

        dl{
            text-align: left;
            dt{
                font-size: pxtovw414( 24 );
                line-height: pxtovw414( 33 );
                font-family: $font-family-bold;
                margin-bottom: pxtovw414( 20 );
            }

            dd{
                font-size: pxtovw414( 16 );
                line-height: pxtovw414( 24 );
            }
        }
    }

    .desktop, .tablet{
        li{
            border-bottom: none;
            margin: 0;
            padding: 0;
            width: 250px;
            margin-right: 140px;
            &:last-child{
                margin-right: 0;
            }

            .why-img__bx{
                width: 250px;
                height: 250px;
                margin-bottom: 40px;
                img{

                }
            }

            dl{
                dt{
                    font-size: $font-size-s;
                    line-height: 30px;
                    margin-bottom: 20px;
                }

                dd{
                    font-size: $font-size-base;
                    line-height: 28px;
                }
            }
        }
    }
</style>