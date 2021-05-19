
<template>
    <div class="menifesto">

        <div class="sticky-wrap">
            <div class="menifesto-wrap">
                <p><span v-html="language.description"></span></p>
            </div>

            <div class="sticky-con">


                <div class="video-wrap" v-show="onStage">
                    <video class="img-mb" autoplay playsinline muted loop :src="'./img/main/m_manifesto.mp4'"></video>
                    <video class="img-pc" autoplay playsinline muted loop :src="'./img/main/manifesto.mp4'"></video>
                </div>

                <div class="step-wrap">

                    <div class="circle-icon-wrap">
                        <div class="icon">
                            <img :src="'./img/main/menifesto_icon_0.png'" alt="">
                        </div>
                        <div class="icon">
                            <img :src="'./img/main/menifesto_icon_1.png'" alt="">
                        </div>
                        <div class="icon">
                            <img :src="'./img/main/menifesto_icon_2.png'" alt="">
                        </div>
                    </div>

                    <div class="text-wrap">
                        <div class="step-con step-a">
                            <div class="title-wrap">
                                <span v-html="language.detail[0]"></span>
                            </div>
                        </div>

                        <div class="step-con step-b">
                            <div class="title-wrap">
                                <span v-html="language.detail[1]"></span>
                            </div>
                        </div>

                        <div class="step-con step-c">
                            <div class="title-wrap">
                                <span v-html="language.detail[2]"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mask-wrap">
                    <div class="mask-circle"></div>
                </div>

            </div>

            <div class="progress-wrap">
                <div class="progress-con step-a">1</div>
                <div class="progress-con step-b">2</div>
                <div class="progress-con step-c">3</div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import {Power2, Power3} from "gsap"
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';

    import scrollTrigger from "gsap/ScrollTrigger"

    import MixinContents from "@/mixin/mixin-main-meterial"

    export default {
        name: "Manifesto",

        mixins : [
            MixinContents
        ],

        data(){
            return {
                language: null,
                stepIndex:1,
                stepProgress:0,
                onStage:false
            }
        },

        created() {
            this.language = this.$t( "contents.manifesto" );
        },

        mounted() {

            gsap.registerPlugin(scrollTrigger);

            const _this = this;
            const timeline = gsap.timeline();

            const scrub = 0;

            timeline.fromTo( ".menifesto",
                {}, {
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto",
                        start:"top bottom",
                        end:"bottom top",
                        onLeave:() => {
                            _this.onStage = false;
                            _this.pauseVideo();
                        },
                        onLeaveBack:() => {
                            _this.onStage = false;
                            _this.pauseVideo();
                        },
                        onEnter:() => {
                            _this.onStage = true;
                            _this.playVideo();
                        },
                        onEnterBack:() => {
                            _this.onStage = true;
                            _this.playVideo();
                        }
                    }}
            )

            const hideY = 0+"vh";
            const showY = 15+"vh";


            // circle mask
            timeline.fromTo( ".menifesto .sticky-con .mask-circle",
                {y:10+"vh", width:30+"vh", height:30+"vh", borderWidth:1800+"px"},
                {width:250+"vh", height:250+"vh", borderWidth:200+"px", y:-10+"vh", ease:Power3.easenOut,
                    scrollTrigger: {
                        scrub: 0.1,
                        trigger: ".menifesto .menifesto-wrap",
                        start:"100% bottom",
                        end:"180% top"
                    }},
            )


            //step 1 show
            timeline.fromTo( ".menifesto .step-con.step-a",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-a",
                        start:"top bottom",
                        end:"50% bottom"
                    }},
            )

            timeline.fromTo( ".menifesto .step-wrap .circle-icon-wrap",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-a",
                        start:"top bottom",
                        end:"50% bottom"
                    }},
            )

            timeline.fromTo( ".menifesto .step-wrap .circle-icon-wrap .icon",
                {y:0}, {y:0, ease:Power2.easeInOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-a",
                        start:"top bottom",
                        end:"50% bottom"
                    }},
            )

            //step 1 hide
            timeline.fromTo( ".menifesto .step-con.step-a",
                {opacity:1, y:0}, {opacity:0, y:hideY, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-a",
                        start:"60% bottom",
                        end:"100% bottom"
                    }},
            )

            gsap.set(".menifesto .step-con.step-a", {opacity:0})






            //step 2 show
            timeline.fromTo( ".menifesto .step-con.step-b",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-b",
                        start:"top bottom",
                        end:"50% bottom"
                    }},
            )

            timeline.fromTo( ".menifesto .step-wrap .circle-icon-wrap .icon",
                {y:0}, {y:-100+"%", ease:Power2.easeInOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-b",
                        start:"top bottom",
                        end:"50% bottom"
                    }},
            )

            //step 2 hide
            timeline.fromTo( ".menifesto .step-con.step-b",
                {opacity:1, y:0}, {opacity:0, y:hideY, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub*.3,
                        trigger: ".menifesto .progress-con.step-b",
                        start:"60% bottom",
                        end:"100% bottom"
                    }},
            )

            gsap.set(".menifesto .step-con.step-b", {opacity:0})





            //step 3 show
            timeline.fromTo( ".menifesto .step-con.step-c",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-c",
                        start:"top bottom",
                        end:"50% bottom"
                    }},
            )
            timeline.fromTo( ".menifesto .step-wrap .circle-icon-wrap .icon",
                {y:-100+"%"}, {y:-200+"%", ease:Power2.easeInOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".menifesto .progress-con.step-c",
                        start:"top bottom",
                        end:"50% bottom"
                    }},
            )


            gsap.set(".menifesto .step-con.step-c", {opacity:0})



        },

        methods: {

            playVideo(){
                const video = isMobile ? this.$el.querySelector(".video-wrap .img-mb") : this.$el.querySelector(".video-wrap .img-pc");
                if(video && video.paused) { video.play(); }
            },

            pauseVideo(){
                const video = isMobile ? this.$el.querySelector(".video-wrap .img-mb") : this.$el.querySelector(".video-wrap .img-pc");
                if(video && !video.paused) { video.pause(); }
            }

        }

    }
</script>

<style scoped lang="scss">

    .menifesto {
        width: 100%;
        .progress-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .progress-con {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                outline: solid 1px #000;

                background-color: black;
                color: white;

                opacity: 0.0;
                width: 30%;

                height: 200vh;
            }
        }


        .sticky-wrap {
            .menifesto-wrap {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
                /*background-color: #009945;*/
                padding: pxtovw414(112) pxtovw414(40);
                box-sizing: border-box;
                overflow: hidden;
                p {
                    font-family: $font-family-bold;
                    font-size: pxtovw414(30);
                    line-height: 1.3;
                    color: white;
                    position: relative;

                }


            }
            .sticky-con {
                position: sticky;
                /*overflow: hidden;*/
                /*overflow-x: hidden;*/
                height: 100vh;
                margin-bottom: 30vh;

                top: 0;

                .mask-wrap {
                    position: absolute;
                    width: 100%; height: 100vh;
                    top: 0;
                    overflow: hidden;
                    pointer-events: none;
                    .mask-circle {
                        width: 0vh;
                        height: 0vh;

                        border-radius: 3000px;
                        /*border: 100px solid #E1E1E1;*/
                        border: 800px solid $color-set-green;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate3d(-50%, -50%, 0);
                    }
                }


                .video-wrap {
                    position: fixed;
                    top: 0; width: 100%; height: 100vh;
                    overflow: hidden;
                    /* 동영상 dim 처리 */
                    &:after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%; height: 100%;
                        background-color: rgba(0,0,0,0.2);
                        content: ""; font-size: 0;
                    }
                    video {
                        object-fit: cover;
                        width: 100%; height: 100%;
                    }
                }

                .step-wrap {
                    position: relative;
                    width: 100%;
                    height: 100%;


                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    .circle-icon-wrap {
                        width: pxtovw414(130);
                        height: pxtovw414(130);
                        background-color: $color-set-green;
                        border-radius: pxtovw414(130);
                        overflow: hidden;
                        transform: translateZ(0);
                        .icon {
                            transform: translateZ(0);
                            width: 100%;
                            img {
                                width: 100%;
                            }
                        }

                    }

                    .text-wrap {
                        text-align: center;
                        font-family: $font-family-bold;
                        font-size: pxtovw414(24);
                        line-height: 1.3;
                        color: white;

                        padding-bottom: 44vw;


                        .step-con {
                            position: absolute;
                            width: 100%;
                            left: 0;

                            margin-top: pxtovw414(46);
                            opacity: 0;
                        }

                    }


                }

            }

        }



    }


    @media screen and (orientation: landscape) {
        .mobile {
            .menifesto {
                .sticky-wrap {
                    .menifesto-wrap {
                        padding: pxtovw414(112) pxtovw414(30);
                        p {
                            font-size: pxtovw414(15);
                        }
                    }
                    .sticky-con {
                        height: 100vh;
                        margin-bottom: 30vh;
                        .mask-wrap {
                            .mask-circle {
                            }
                        }
                        .video-wrap {
                            /* 동영상 dim 처리 */
                            &:after {

                            }
                            video {
                            }
                        }
                        .step-wrap {
                            .circle-icon-wrap {
                                width: pxtovw414(65);
                                height: pxtovw414(65);
                                border-radius: pxtovw414(65);
                                .icon {
                                    img {
                                    }
                                }

                            }

                            .text-wrap {
                                font-size: pxtovw414(12);
                                padding-bottom: 24vw;
                                .step-con {
                                    margin-top: pxtovw414(21);
                                }
                            }
                        }
                    }
                }
            }
        }
    }




    .desktop, .tablet {

        .menifesto {
            min-width: $stage-min-width;

            .progress-wrap {
                .progress-con {
                    height: 180vh;
                }
            }


            .sticky-wrap {
                .menifesto-wrap {
                    width: 100%;
                    min-width: 1280px;
                    margin: 0 auto;
                    padding: 0;

                    p {
                        width: 1200px;
                        margin: 0 auto;
                        margin-top: 172px;
                        font-size: 40px;
                    }


                }
                .sticky-con {

                    .mask-wrap {

                        .mask-circle {
                            border-radius: 2000px;
                            border: 1500px solid $color-set-green;
                        }

                    }


                    .video-wrap {
                    }

                    .step-wrap {

                        .circle-icon-wrap {
                            width: 180px;
                            height: 180px;
                            border-radius: 180px;

                            .icon {
                                transform: translateZ(0);
                                width: 100%;
                                img {
                                    width: 100%;
                                }
                            }

                        }

                        .text-wrap {
                            font-size: 28px;
                            padding-bottom: 210px;

                            .step-con {
                                margin-top: 60px;
                            }

                        }


                    }

                }

            }
        }

    }
</style>