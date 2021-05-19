<template>
    <div class="comp-sub__intro">
        <div class="inner-wrap">
            <div class="contents">
                <div class="comp-sub__visual-expand">
                    <div class="comp-sub__visual-expand__logo-bx">
                        <img :src="`../img/common/logo-white.png`" alt="">
                    </div>
                    <div class="comp-sub__visual-expand__bg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Cubic, Power0, Power1, Power3 } from "gsap";

import { EventBus } from "@/components/common/EventBus";

export default {
    name: "comp-sub-intro",
    props : {
        showComplete:Function,
    },

    created() {

    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){
            let logo = this.$el.querySelector( ".comp-sub__intro .comp-sub__visual-expand__logo-bx" );
            let bgExpand = this.$el.querySelector( ".comp-sub__intro .comp-sub__visual-expand__bg" );

            bgExpand.classList.add( "off" );

            let Tl = gsap.timeline({});

            const computeLength = (x, y) => (x**2 + y**2)**0.5;
            const cirScale = Math.ceil(computeLength(this.$el.offsetWidth, this.$el.offsetHeight) / 50 )

            gsap.killTweensOf( bgExpand );
            gsap.set( bgExpand, { opacity:1 });

            if( isMobile ){
                Tl
                    .set( logo, { y:15 })
                    .to( this.$el, 0.6, { backgroundColor : "#009945", ease:Cubic.easeOut, })
                    .set( bgExpand, { scale : cirScale })
                    .to( logo, 0.7, { y:0, opacity:1, ease:Cubic.easeOut })
                    .to( this.$el, 0, { backgroundColor : "rgba( 0, 0, 0, 0 )" })
                    .to( bgExpand, 0.45, { scale:0, ease:Power1.easeInOut })
                    .to( logo, 0.5, { scale:0.95, opacity:0, ease:Cubic.easeInOut, onComplete : () => {
                            this.$el.style.display = "none";

                            // 부모한테 신호 전달
                            this.showComplete();

                        }}, "< 0.0" );

                return;
            }

            Tl
                .set( logo, { y:30 })
                .to( this.$el, 0.6, { backgroundColor : "#009945", ease:Cubic.easeOut, })
                .set( bgExpand, { scale : cirScale })
                .to( logo, 0.7, { y:0, opacity:1, ease:Cubic.easeOut })
                .to( this.$el, 0, { backgroundColor : "rgba( 0, 0, 0, 0 )" })
                .to( bgExpand, 0.7, { scale:0, ease:Power3.easeInOut })
                .to( logo, 0.5, { scale:0.95, opacity:0, ease:Cubic.easeInOut, onComplete : () =>{
                        this.$el.style.display = "none";

                        // 부모한테 신호 전달
                        this.showComplete();

                    }}, "< 0.0" );
        }
    }
}
</script>

<style scoped lang="scss">
    .comp-sub__intro{
        position: absolute;
        width: 100%;
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden;
        left: 0;
        top: 0;
        z-index: $z-index-header + 1;
        background-color: #fff;
        .inner-wrap{
            .contents{

                .comp-sub__visual-expand{
                    width: 100%;
                    height: calc(var(--vh, 1vh) * 100);
                    overflow: hidden;
                    position: absolute;
                    z-index: 10;

                    .comp-sub__visual-expand__bg{
                        overflow: hidden;
                        border-radius: 100%;
                        width: 50px;
                        height: 50px;
                        left: 50%;
                        top: 50%;
                        transform: translate3d( -50%, -50%, 0 ) scale( 1 );
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: $color-set-green;
                        position: absolute;
                        z-index: 5;

                        animation-duration: 1s;
                        animation-name: loading-logo;
                        animation-iteration-count: infinite;
                        animation-direction: alternate-reverse;
                        opacity: 0.5;

                        &.off{
                            animation-name: none;
                            opacity: 1;
                        }

                        @keyframes loading-logo {
                            0% {  opacity: 0.5;  }
                            100% {  opacity: 1;  }
                        }
                    }

                    .comp-sub__visual-expand__logo-bx{
                        z-index: 6;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100vh; /* Fallback for browsers that do not support Custom Properties */
                        height: calc(var(--vh, 1vh) * 100);
                        position: relative;
                        opacity: 0;
                        img{
                            width: pxtovw414( 96 );
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .comp-sub__intro{
            .inner-wrap{
                .contents{
                    .comp-sub__visual-expand{
                        .comp-sub__visual-expand__bg{
                            //width: 100px;
                            //height: 100px;
                            width: 50px;
                            height: 50px;
                        }

                        .comp-sub__visual-expand__logo-bx{
                            img{
                                width: 96px;
                            }
                        }
                    }
                }
            }
        }
    }

</style>