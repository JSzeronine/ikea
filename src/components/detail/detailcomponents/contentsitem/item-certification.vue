<template>
    <li>
        <dl>
            <dt><slot name="title"></slot></dt>
            <slot name="year"></slot>
            <dd><slot name="description"></slot></dd>
        </dl>
        <div class="certification-img"><slot name="img"></slot></div>
    </li>

</template>

<script>
import { gsap, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventBus } from "@/components/common/EventBus";

export default {
    name: "item-certification",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){

            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let txt = this.$el.querySelector( "dl" );
            let img = this.$el.querySelector( ".certification-img" );

            Tl.fromTo( txt, {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });

            Tl.fromTo( img, {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.7,
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
    li{
        margin-bottom: pxtovw414( 160 );
        &:last-child{ margin-bottom: 0; }

        dl{
            padding: 0 pxtovw414( 40 );
            margin-bottom: pxtovw414( 60 );
            dt{
                font-size: pxtovw414( 28 );
                line-height: pxtovw414( 38 );
                font-family: $font-family-bold;
                margin-bottom: pxtovw414( 30 );
            }
            dd{
                font-size: pxtovw414( 16 );
                line-height: pxtovw414( 24 );

                &.item-certificatioon__year{
                    font-size: pxtovw414( 24 );
                    line-height: pxtovw414( 33 );
                    margin-bottom: pxtovw414( 20 );
                    font-family: $font-family-bold;
                }
            }
        }

        > div{
            width: pxtovw414( 249 );
            margin: 0 auto;
            img{
                width: 100%;
            }
        }
    }

    .desktop, .tablet{
        li{
            display: flex;
            margin-bottom: 220px;
            justify-content: space-between;
            align-items: center;
            &:last-child{
                margin-bottom: 0px;
            }

            dl{
                padding: 0;
                margin-bottom: 0;
                dt{
                    font-size: $font-size-xl;
                    line-height: 56px;
                    margin-bottom: 30px;
                }

                dd{
                    font-size: $font-size-base;
                    line-height: 27px;

                    &.item-certificatioon__year{
                        font-size: $font-size-m-lg;
                        line-height: 30px;
                        margin-bottom: 20px;
                        margin-top: 80px;
                    }
                }
            }

            > div{
                width: 249px;
                margin: 0;
                img{

                }
            }
        }
    }

</style>