<template>
    <section class="detail-recycle-total">
        <div class="inner-wrap">
            <div class="contents">
                <h2>
                    <slot name="title"></slot>
                </h2>

                <div>
                    <ul>
                        <slot name="list"></slot>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EventBus } from "@/components/common/EventBus";

export default {
    name: "comp-detail-recycle-total",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let txtBx = this.$el.querySelector( "h2" );
            let txt = txtBx.querySelector( "span" );

            Tl.fromTo( txtBx, {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : txtBx,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            })

        }
    }
}
</script>

<style scoped lang="scss">

    .detail-recycle-total{
        margin: pxtovw414( 160 ) 0;
        .inner-wrap{
            .contents{
                h2{
                    font-size: pxtovw414( 28 );
                    line-height: pxtovw414( 38 );
                    font-family: $font-family-bold;
                    color: #000;
                    margin-bottom: pxtovw414( 100 );
                    box-sizing: border-box;
                    padding: 0 pxtovw414( 40 );
                }

                > div{
                    ul{

                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .detail-recycle-total{
            margin: 220px 0;
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;
                .contents{
                    width: 1200px;
                    margin: 0 auto;
                    padding: 0 170px;
                    box-sizing: border-box;
                    h2{
                        font-size: $font-size-m-3xl;
                        line-height: 56px;
                        margin-bottom: 101px;
                        padding: 0;
                    }

                    > div{
                        ul{

                        }
                    }
                }
            }
        }
    }

</style>