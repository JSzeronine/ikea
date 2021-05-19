<template>
    <li>
        <a :href="link">
            <dl @mouseenter="mOver" @mouseleave="mOut" @click="clickHandler">
                <dt>
                    <slot name="video"></slot>
                </dt>
                <dd>
                    <slot name="name"></slot>
                </dd>
            </dl>
        </a>
    </li>
</template>

<script>
import { isMobile, isChrome, isIE } from 'mobile-device-detect';

import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "item-info",
    data(){
        return{}
    },

    props : {
        link : String,
        getClick : Function
    },

    mounted() {
        gsap.registerPlugin( ScrollTrigger );

        let TL = gsap.timeline({});
        let video = this.$el.querySelector( ".m-video" );
        let bx = this.$el.querySelector( "dl" );
        let imgPoster = this.$el.querySelector( ".poster" );

        if( isMobile ){
            TL.fromTo( this.$el, {

            }, {
                scrollTrigger : {
                    trigger : this.$el,
                    start : "center bottom",
                    end : "center top",
                    onEnter : () => this.playVideo( video ),
                    onLeave : () => this.stopVideo( video ),
                    onLeaveBack : () => this.stopVideo( video ),
                    onEnterBack : () => this.playVideo( video ),
                }
            });

            TL.fromTo( video, {
                scale : 2,
            }, {
                scale : 1,
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "center bottom",
                    end : "center center",
                    scrub : true
                }
            });

            return;
        }

        // TL.fromTo( this.$el, {
        //     y:100
        // }, {
        //     y:0,
        //     ease:Linear.easeNone,
        //     scrollTrigger : {
        //         trigger : this.$el,
        //         start : "center bottom",
        //         end : "center center",
        //         scrub : true
        //     }
        // });


        TL.fromTo( imgPoster, {
            scale : 2,
        }, {
            scale : 1,
            ease:Linear.easeNone,
            scrollTrigger : {
                trigger : this.$el,
                start : "center bottom",
                end : "center center",
                scrub : true
            }
        });
    },

    methods : {
        playVideo( $video ){
            // const isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
            //
            // if (isPlaying) {
            //     video.pause();
            //     video.currentTime = 0;
            // }

            $video.play();

            let poster = this.$el.querySelector( ".poster" );
            gsap.to( poster, 0.5, { opacity:0, ease:Cubic.easeOut });
        },

        stopVideo( $video ){
            const video = $video;
            const isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

            if (isPlaying) {
                video.pause();
            }

            let poster = this.$el.querySelector( ".poster" );
            gsap.to( poster, 0.5, { opacity:1, ease:Cubic.easeOut });
        },

        mOver( $e ){
            if( isMobile ) return;
            
            let video = $e.target.querySelector( ".img-pc" );
            this.playVideo( video );

            gsap.set( video, { scale:1.2 });
            gsap.to( video, 0.5, { scale:1, ease:Cubic.easeOut });

            let txt = $e.target.querySelector( "dl span" );
            gsap.to( txt, 0.3, { opacity:0, ease:Cubic.easeOut });
        },

        mOut( $e ){
            let video = $e.target.querySelector( ".img-pc" );
            this.stopVideo( video );

            let poster = this.$el.querySelector( ".poster" );
            gsap.set( poster, { scale:1.2 });
            gsap.to( poster, 0.5, { scale:1, ease:Cubic.easeOut });

            let txt = $e.target.querySelector( "dl span" );
            gsap.to( txt, 0.3, { opacity:1, ease:Cubic.easeOut });
        },

        clickHandler( $e ){
            this.getClick();
        }
    }
}
</script>

<style scoped lang="scss">
    li{
        margin-bottom: pxtovw414( 100 );
        overflow: hidden;
        border-radius: 50%;
        transform: translate3d( 0, 0, 0 );

        &:last-child{
            margin-bottom: 0px;
        }

        a{
            display: block;
            dl{
                position: relative;
                dt{
                    border-radius: 100%;
                    transform: translate3d( 0, 0, 0 );
                    overflow: hidden;
                    width: pxtovw414( 334 );
                    height: pxtovw414( 334 );
                    position: relative;

                    .poster{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        z-index: 10;

                        &.hidden{
                        }
                    }

                    /* 동영상 dim 처리 */
                    &::after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        content: '';
                        width: 100%;
                        height: 100%;
                        font-size: 0;
                        background-color: rgba(0,0,0,.2);
                    }

                    video{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                }

                dd{
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 2;
                    width: pxtovw414( 334 );
                    height: pxtovw414( 334 );
                    font-size: pxtovw414( 24 );
                    line-height: pxtovw414( 33 );
                    font-family: $font-family-bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    text-align: center;
                }
            }
        }
    }

    @media screen and (orientation: landscape ) {
        .mobile {
            li{
                display: flex;
                justify-content: center;
                align-content: center;
                margin-bottom: pxtovw414( 50 );
                border-radius: 0;
                &:last-child{
                }

                dl{
                    dt{
                        width: pxtovw414( 150 );
                        height: pxtovw414( 150 );

                        .poster{
                            &.hidden{
                            }
                        }
                        /* 동영상 dim 처리 */
                        &::after {
                        }

                        video{
                        }

                    }

                    dd{
                        width: pxtovw414( 150 );
                        height: pxtovw414( 150 );
                        font-size: pxtovw414( 12 );
                        line-height: pxtovw414( 16 );
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        li{
            margin-bottom: 60px;
            a{
                dl{
                    dt{
                        width: 250px;
                        height: 250px;
                        video{

                        }
                    }

                    dd{
                        width: 250px;
                        height: 250px;
                        font-size: $font-size-s;
                        line-height: 30px;
                    }
                }
            }

            &:last-child{

            }
        }
    }

</style>