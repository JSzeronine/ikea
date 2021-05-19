<template>
    <section class="effort-wrap">
        <div class="inner-wrap">

            <h2 class="effort-tit">
                <slot name="title"></slot>
            </h2>

            <div class="effort-txt">
                <slot name="description"></slot>
            </div>

        </div>
    </section>
</template>
<script>

import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EventBus } from "@/components/common/EventBus";

export default {
    name: "comp-teaser-effort",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods : {
        imgLoadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});
            let txt = this.$el.querySelector( ".inner-wrap" );

            Tl.fromTo( txt, {
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
    .effort-wrap {
        margin: pxtovw414( 160 ) 0;
        .inner-wrap {
            width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
            padding: 0 pxtovw414( 40 );
            .effort-tit {
                margin-bottom: pxtovw414(45);

                font-size: pxtovw414(30);
                line-height: pxtovw414(41);
                font-family: $font-family-bold;
            }

            .effort-txt {
                span {
                    display: block;
                    margin-bottom: pxtovw414(20);

                    font-size: pxtovw414(16);
                    line-height: pxtovw414(24);
                    font-family: $font-family-regular;
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }


    .desktop, .tablet {
        .effort-wrap {
            margin: 220px 0;
            min-width: $stage-min-width;
            .inner-wrap {
                width: $stage-contents-width;
                padding-left: 170px;
                padding-right: 0;

                .effort-tit {
                    margin-bottom: 45px;

                    font-size: $font-size-xl;
                    line-height: 55px;
                }

                .effort-sub-tit {
                    margin-bottom: 30px;

                    font-size: $font-size-s;
                    line-height: 30px;
                }

                .effort-txt {
                    span{
                        margin-bottom: 0;
                        font-size: $font-size-xs;
                        line-height: 28px;
                    }
                }
            }
        }
    }
</style>