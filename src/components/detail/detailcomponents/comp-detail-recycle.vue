<template>
    <section class="detail-recycle">
        <div class="inner-wrap">
            <div class="contents">
                <dl class="detail-recycle__txt">
                    <dt class="detail-recycle__title">
                        <slot name="title"></slot>
                    </dt>
                    <dd class="detail-recycle__description">
                        <slot name="description"></slot>
                    </dd>
                </dl>

                <div class="detail-recycle__product">
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
    name: "comp-detail-recycle",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let txtBx = this.$el.querySelector( ".detail-recycle__txt" );

            Tl.fromTo( txtBx, {
                y:100,
                opacity : 0,
            }, {
                y:0,
                opacity:1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : txtBx,
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

    .detail-recycle{
        margin: pxtovw414( 160 ) 0;
        .inner-wrap{
            .contents{
                .detail-recycle__txt{
                    padding: 0 pxtovw414( 40 );
                    margin-bottom: pxtovw414( 50 );
                    .detail-recycle__title{
                        font-size: pxtovw414( 28 );
                        line-height: pxtovw414( 38 );
                        font-family: $font-family-bold;
                        margin-bottom: pxtovw414( 40 );
                    }

                    .detail-recycle__description{
                        font-size: pxtovw414( 16 );
                        line-height: pxtovw414( 24 );

                        span{
                            margin-bottom: pxtovw414( 20 );

                            &:last-child{
                                margin-bottom: 0;
                            }
                        }
                    }
                }

                .detail-recycle__product{
                    ul{

                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .detail-recycle{
            margin: 220px 0;
            .inner-wrap{
                min-width: 1280px;
                width: 100%;
                margin: 0 auto;
                .contents{
                    width: 1200px;
                    margin: 0 auto;
                    padding: 0 170px;
                    box-sizing: border-box;
                    .detail-recycle__txt{
                        padding: 0;
                        margin: 0;
                        margin-bottom: 80px;
                        .detail-recycle__title{
                            font-size: $font-size-m-3xl;
                            line-height: 56px;
                            margin-bottom: 30px;
                        }

                        .detail-recycle__description{
                            font-size: 18px;
                            line-height: 28px;
                        }
                    }

                    .detail-recycle__product{
                        ul{
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                }
            }
        }
    }

</style>