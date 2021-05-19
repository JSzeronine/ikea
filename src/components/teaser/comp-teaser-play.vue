<template>
    <!-- home-wrap -->
    <section class="home-wrap">
        <div class="play-wrap">
            <div class="inner-wrap" v-if="!pcVideoPlay">
                <div class="home">
                    <div class="home-play">
                        <a href="javascript:;" @click="playBtn">
                            <img :src="`../img/teaser/teaser_play_btn.png`" alt="재생 버튼">
                        </a>
                    </div>

                    <p v-html="contents.title"></p>
                </div>
            </div>

            <div class="play-wrap__bg">
                <div class="home-wrap__bg-video__bx">
                    <video class="img-pc bg-pc" :src="contents.video_preview_pc" autoplay playsinline muted loop></video>
                    <video class="img-mb bg-m" :src="contents.video_preview_mb" autoplay playsinline muted loop></video>
                </div>

                <transition name="fade">
                    <div class="video-player" v-show="pcVideoPlay">
                        <video class="img-pc bg-pc" :src="contents.video_all" type="video/mp4" playsinline controls></video>
                    </div>
                </transition>
            </div>
        </div>

        <transition name="fade">
            <div class="popup" v-show="showPlay">
                <div class="bg-wrap">
                    <div class="popup-content">
                        <div class="close-btn">
                            <a href="javascript:;" @click="playBtn">
                                <img :src="`../img/teaser/teaser-play-close-btn.png`" alt="닫기 버튼">
                            </a>
                        </div>

                        <video class="img-mb bg-m" :src="contents.video_all" type="video/mp4" playsinline controls></video>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Cubic, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "comp-teaser-play",

    data () {
        return {
            contents : null,
            showPlay : false,
            pcVideoPlay : false,
        }
    },

    created() {
        this.contents = this.$t( 'contents.play' );
    },

    mounted() {
        gsap.registerPlugin( ScrollTrigger );

        let title = this.$el.querySelector( ".home" );

        const Tl = gsap.timeline({});
        Tl.fromTo( title, {
            y:"20vh",
        }, {
            y:"-20vh",
            ease:Linear.easeNone,
            scrollTrigger : {
                trigger : this.$el,
                start : "top bottom",
                end : "bottom top",
                scrub : true,
            }
        });

        if( !isMobile ){
            Tl.fromTo( this.$el, {

            }, {
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top bottom",
                    end : "bottom top",
                    onLeaveBack : () => {
                        let pcVideo = this.$el.querySelector( ".play-wrap .video-player video" );
                        pcVideo.pause();
                    }
                }
            })
        }
    },

    computed: {

    },

    methods: {
        playBtn : function () {
            if( isMobile ){
                this.showPlay = !this.showPlay;
                const html = document.querySelector( "html" );

                let mVideo = this.$el.querySelector( ".popup .bg-m" );

                if (this.showPlay) {
                    html.classList.add('not-scroll');
                    mVideo.currentTime = 0;
                    mVideo.play();
                } else {
                    html.classList.remove('not-scroll');
                    mVideo.pause();
                }

                return;
            }

            this.pcVideoPlay = true;
            let pcVideo = this.$el.querySelector( ".play-wrap .video-player video" );
            pcVideo.play();
        },
    }
}
</script>

<style scoped lang="scss">

    .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
    .fade-enter, .fade-leave-to{ opacity: 0; }

    .home-wrap {
        position: relative;

        .play-wrap{
            width: 100%;
            height: 100vh;
            .play-wrap__bg {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                width: 100%;
                height: 100%;
                .home-wrap__bg-video__bx{
                    width: 100%;
                    height: 100%;
                    /* 동영상 dim 처리 */
                    &::after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 1;
                        display: block;
                        content: '';
                        width: 100%;
                        height: 100%;
                        font-size: 0;
                        background-color: rgba(0,0,0,.2);
                        pointer-events: none;
                    }
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }

            .inner-wrap {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2;
                width: 100%;
                height: 100%;
                margin: 0 auto;
                padding: 0 pxtovw414(40);
                box-sizing: border-box;
                .home {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    .home-play {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: pxtovw414(60);
                        height: pxtovw414(60);
                        margin-bottom: pxtovw414(40);
                        border-radius: 50%;

                        a {
                            img {
                                width: 100%;
                            }
                        }
                    }

                    p {
                        font-size: pxtovw414(30);
                        line-height: pxtovw414(40);
                        color: #fff;
                        font-family: $font-family-bold;
                        text-align: center;
                    }
                }
            }
        }

        .popup {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 200; //헤더와 푸터의 z-index : 100
            width: 100%;
            height: 100%;

            .bg-wrap {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #000;
                display: flex;
                justify-content: center;
                align-items: center;

                .popup-content{
                    position: relative;
                    .close-btn {
                        position: absolute;
                        top: pxtovw414( -90 );
                        right: 0;
                        width: pxtovw414( 24 );
                        height: pxtovw414( 24 );
                        padding: pxtovw414( 37 ) pxtovw414( 30 );

                        a {
                            display: block;
                            img {
                                width: 100%;
                            }
                        }
                    }

                    .bg-m {
                        width: 100%;
                    }
                }

            }
        }
    }

    @media screen  and (orientation: landscape) {
        .mobile {
            .home-wrap {
                .play-wrap{
                    .play-wrap__bg {
                        .home-wrap__bg-video__bx{
                            /* 동영상 dim 처리 */
                            &::after {
                            }
                            video {
                            }
                        }
                    }

                    .inner-wrap {
                        padding: 0 pxtovw414(40);
                        .home {
                            .home-play {
                                width: pxtovw414(30);
                                height: pxtovw414(30);
                                margin-bottom: pxtovw414(20);


                                a {
                                    img {
                                    }
                                }
                            }

                            p {
                                font-size: pxtovw414(15);
                                line-height: pxtovw414(20);
                            }
                        }
                    }
                }

                .popup {
                    .bg-wrap {
                        .popup-content{
                            .close-btn {
                                top: 0;
                                width: pxtovw414( 12 );
                                height: pxtovw414( 12 );
                                padding: pxtovw414( 18 ) pxtovw414( 15 );

                                a {
                                    img {
                                    }
                                }
                            }

                            .bg-m {
                            }
                        }

                    }
                }
            }
        }
    }

    .desktop, .tablet {
        .home-wrap {
            width: 100%;
            min-width: $stage-min-width;
            margin: 0 auto;
            .popup {
                display: block;
                min-width: $stage-contents-width;
                .bg-wrap {
                    .bg-pc {
                        object-fit: contain;
                        object-position: center;
                    }
                }

                .close-btn {
                    width: 30px;
                    height: 30px;
                    margin: 50px 50px 0 0;
                    padding: 20px;
                    a {
                        img {

                        }
                    }
                }
            }

            .play-wrap{
                position: relative;
                width: 100%;
                height: 100vh;
                .play-wrap__bg {
                    position: relative;
                    width: 100%;
                    height: 100%;

                    .home-wrap__bg-video__bx{
                        position: relative;
                        width: 100%;
                        height: 100%;

                        .bg-pc {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .video-player{
                        background-color: #000;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;

                        video{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .inner-wrap {
                    position: absolute;
                    left: 0;
                    top: 0;
                    min-width: $stage-contents-width;
                    padding: 0 170px;
                    width: 100%;
                    height: 100vh;
                    .home {
                        .home-play {
                            width: 100px;
                            height: 100px;
                            margin-bottom: 70px;
                            img {

                            }
                        }

                        p {
                            font-size: $font-size-xl;
                            line-height: 60px;
                        }
                    }
                }
            }
        }
    }
</style>