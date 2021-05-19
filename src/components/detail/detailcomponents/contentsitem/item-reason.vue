<template>
    <li>
        <img :src="`../img/common/icon-check-small.png`" alt="">
        <span class="item-reason__txt">
            <slot name="description"></slot>
        </span>
    </li>
</template>

<script>

import { gsap, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventBus } from "@/components/common/EventBus";

export default {
    name: "item-reason",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let txt = this.$el.querySelector( ".item-reason__txt" );
            let img = this.$el.querySelector( "img" );

            Tl.fromTo( txt, {
                y:50,
                opacity : 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center 80%",
                    scrub : 0.5,
                }
            });

            Tl.fromTo( img, {
                y:50,
                opacity : 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center 80%",
                    scrub : 0.5,
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
    li{
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        padding: pxtovw414( 16 ) pxtovw414( 6 );
        box-sizing: border-box;
        border-bottom: 1px solid $color-set-green;
        > img{
            width: pxtovw414( 17 );
            margin-right: pxtovw414( 13 );
        }

        span{
            font-size: pxtovw414( 16 );
            line-height: pxtovw414( 22 );
            font-family: $font-family-bold;
            color: $color-set-green;
        }
    }

    .desktop, .tablet{
        li{
            padding: 24px 6px;
            width: 100%;
            > img{
                width: 17px;
                margin-right: 20px;
            }

            span{
                font-size: 18px;
                line-height: 25px;
            }
        }
    }
</style>