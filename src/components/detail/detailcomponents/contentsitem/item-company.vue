<template>
    <li>
        <dl>
            <dt><slot name="value"></slot></dt>
            <dd><slot name="description"></slot></dd>
        </dl>

        <div class="company-icon"><slot name="icon"></slot></div>
    </li>
</template>

<script>
import { gsap, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventBus } from "@/components/common/EventBus";

export default {
    name: "item-company",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods :{
        loadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let txt = this.$el.querySelector( "dl" );
            let img = this.$el.querySelector( ".company-icon" );

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
        padding-bottom: pxtovw414( 50 );
        border-bottom: 1px solid $color-set-green;
        margin-bottom: pxtovw414( 31 );
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:last-child{
            padding-bottom: 0;
            margin-bottom: 0;
            border-bottom: none;
        }

        dl{
            width: pxtovw414( 206 );
            dt{
                font-size: pxtovw414( 54 );
                line-height: pxtovw414( 76 );
                color: $color-set-green;
                font-family: $font-family-bold;
            }

            dd{
				padding-top: pxtovw414(10);
                font-size: pxtovw414( 18 );
                line-height: pxtovw414( 28 );
                color: $color-set-green;
                font-family: $font-family-bold;
            }
        }

        > div{
            width: pxtovw414( 80 );
            img{
                width: 100%;
            }
        }
    }

    .desktop, .tablet{
        li{
            box-sizing: border-box;
            padding: 0 59px 80px 60px;
            align-items: center;
            margin-bottom: 60px;
            &:last-child{
                margin-bottom: 0;
            }

            dl{
                dt{
                    font-size: 60px;
                    line-height: 82px;
                    margin-bottom: 8px;
                }

                dd{
					padding-top: 4px;
                    font-size: 22px;
                    line-height: 30px;
                }
            }

            > div{
                width: 112px;
                img{
                }
            }
        }
    }
</style>