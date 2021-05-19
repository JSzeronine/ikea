<template>
    <div class="visual-wrap plastic">
        <div class="visual-con">

            <div class="step-wrap step-b">

                <div class="ground-bg" :style="isMobile ? {} : { backgroundImage : `url( ./img/main/ground_bg.png )`}">
                    <div class="img-wrap">
                        <img class="img-mb" :src="'./img/main/m_plastic_ground_bg.png'" alt="">
                        <img class="img-pc" :src="'./img/main/plastic-ground_bg_cut.png'" alt="">
                    </div>

                    <!--<div class="img-wrap">
                        <img class="img-mb" :src="'./img/main/m_plastic_ground_bg.png'" alt="">
                        <img class="img-pc" :src="'./img/main/plastic_ground_bg.png'" alt="">
                    </div>-->
                </div>

                <div class="plastic-obj">
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-2.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-2_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-3.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-3_tr.png'" alt="">
                    </div>
                    <div class="img-wrap">
                        <img class="def-img" :src="'./img/main/plastic_img-4.png'" alt="">
                        <img class="trash-img" :src="'./img/main/plastic_img-4_tr.png'" alt="">
                    </div>


                </div>

                <div class="ground-over">
                    <div class="img-wrap">
                        <img class="img-mb" :src="'./img/main/m_plastic_ground_over.png'" alt="">
                        <img class="img-pc" :src="'./img/main/plastic_ground_over.png'" alt="">
                    </div>
                </div>

            </div>

            <div class="step-wrap step-a">
                <div class="img-wrap">
                    <img :src="'./img/main/plastic_img-1.png'" alt="">
                </div>
            </div>

            <div class="step-wrap step-d video-wrap">
                <div class="circle"></div>
                <div class="video-con" v-show="onStage">
                    <video class="img-mb" autoplay playsinline muted loop :src="'./img/main/m_plastic_content.mp4'"></video>
                    <video class="img-pc" autoplay playsinline muted loop :src="'./img/main/plastic_content.mp4'"></video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap";
    import { Power2 } from "gsap";
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';

    export default {
        name: "Material-Plastic-visual",

        data(){
            return {
                isMobile:isMobile,
                isFirst:true,
                images:'',
                timeline:[],
                easeProgress:0
            }
        },

        props:[
            "onStage","stepIndex", "stepProgress"

        ],

        watch: {
            'onStage' (to, from) {
                if(to){
                    this.startRender();
                } else {
                    this.stopRender();
                }
            },

            'stepIndex' (to, from) {
                this.changeStep();
            },
            'stepProgress' (to, from) {
                this.changeProgress();
            }
        },


        mounted() {
            this.setting();
        },

        methods: {
            setting(){
                const _this = this;
                let index = 0, i=0;

                this.images = this.$el.querySelectorAll(".step-b .plastic-obj .img-wrap");
                Array.prototype.slice.call(this.images).forEach(function(entry){

                    const left = isMobile ? index * (window.innerWidth * 0.18) -30 : index * (540 * 0.18) + 600;
                    const top = Math.random() * -100 - (window.innerHeight*1);
                    // const top = Math.random() * -80 - 700;//Math.random() * -200;
                    const ranRo = Math.random()*360 - 180;
                    const addRanRo = gsap.utils.random([10,-20, -30, 30, 40, 50]);

                    gsap.set(entry, {x:left, y:top, rotation:ranRo });

                    entry.dataset.index = i++;
                    index = (index+1)%4;

                    let bottle_tgY = isMobile ? ( 60 - (Math.random() * 20 - 5) ) : ( 70 - (Math.random() * 16 - 3) );

                    // set drop bottle
                    let tl = gsap.timeline();
                    tl.to(entry, {duration: 2, ease: Power2.easeIn, delay:Math.random() * 5,
                        y: bottle_tgY+"vh", rotation:ranRo + (addRanRo)});
                    tl.to(entry.querySelector(".trash-img"), {duration: 0.1, opacity:1});

                    tl.to(entry, {duration: Math.random() * 2});
                    // tl.to(entry, {y:"+="+Math.random()*5, duration: 0.03, scale:0.49, rotation:ranRo + (addRanRo) + Math.random() * 2 - 1});

                    tl.pause();
                    _this.timeline.push(tl)
                })
            },

            startRender(){
                this.render();
            },

            stopRender(){

            },

            render(){
                if(this.isFirst) {
                    this.isFirst = false;
                }

                this.controlVisual_step_a();
                this.controlVisual_step_b();
                this.controlVisual_step_c();

                // ikea section
                this.controlVideoCircle();

                if(this.onStage){
                    window.requestAnimationFrame(this.render);
                }
            },

            controlVisual_step_a(){

                let obj = {};
                if(this.stepIndex == 1) {
                    obj = {
                        y: 100 * (easeInCirc(this.stepProgress)) + "%",
                        rotate: -10 * (easeInCirc(this.stepProgress)) + "deg"
                    }
                } else {
                    obj = {
                        y: 100 + "%",
                        rotate: -10 + "deg"
                    }
                }

                const tg = this.$el.querySelector(".step-a .img-wrap");
                gsap.to(tg, 0.2, obj);


                // easing func
                function easeInCirc(x) { return  1 - Math.sqrt(1 - Math.pow(x, 2));}
                function easeInExpo(x) { return x === 0 ? 0 : Math.pow(2, 10 * x - 10);}
            },

            controlVisual_step_b(){

                const visualObjs = this.$el.querySelectorAll(".step-b .plastic-obj .img-wrap");
                const _this = this;

                const stP = 0.2;
                const stepP = 0.25;
                const lastP = 0.905;

                let tgP = 1;
                if(this.stepIndex == 1){
                    tgP = this.stepProgress * stepP + stP;
                } else if(this.stepIndex == 2){
                    tgP = ( this.stepProgress * (lastP - (stP + stepP) )) + (stP + stepP);
                } else if(this.stepIndex == 3){
                    tgP = this.stepProgress * (1 - lastP) + lastP;
                }

                gsap.to(this, 0.5, {easeProgress:tgP});

                Array.prototype.slice.call(visualObjs).forEach(function(obj){
                    const index = parseInt(obj.dataset.index);
                    _this.timeline[index].progress(_this.easeProgress);
                });



            },

            controlVisual_step_c(){
                const visual = this.$el.querySelectorAll(".step-b");

                const ground = this.$el.querySelector(".ground-bg");
                const ground_cover = this.$el.querySelector(".ground-over");

                let calcPer = gsap.utils.mapRange(0, 0.7, 0, 1, this.stepProgress)
                calcPer = calcPer > 1 ? 1 : easeOutQuart(calcPer);

                let visualY = 30;
                let visualS = 1;

                let tgAlpha=0, tgS=1, tgY=0, tgR=0;
                if(this.stepIndex == 3){
                    tgY = (1-calcPer) * 150;
                    tgS = (1-calcPer) * 0.2 + 1;
                    tgR = (1-calcPer) * -30;
                    tgAlpha = 1;

                    visualY = 30 - calcPer * 30;

                } else if(this.stepIndex == 4){
                    tgAlpha = 1;
                    visualY = easeInCubic(this.stepProgress) * 150;
                    visualS = (easeInCubic(this.stepProgress) * 0.5) + 1;

                } else {
                    tgR = 0;
                    tgS = 1.2;
                    tgY = 150;
                }

                tgR=0


                function easeOutQuart(x) {
                    return 1 - Math.pow(1 - x, 4);
                }

                function easeInCubic(x) {
                    return x * x * x;
                }


                gsap.to(visual, 0, {y:visualY+"vh", scale:visualS});

                gsap.to(ground, 0.3,{opacity:tgAlpha});
                gsap.to(ground, 0,{scale:tgS, y:tgY, rotationX:tgR});
                gsap.to(ground_cover, 0.3,{opacity:tgAlpha});
                gsap.to(ground_cover, 0,{scale:tgS, y:tgY*0.1});

            },



            controlVideoCircle(){
                // play / stop video

                let video = isMobile ? this.$el.querySelector(".plastic .video-wrap .video-con .img-mb") : this.$el.querySelector(".plastic .video-wrap .video-con .img-pc");

                if(this.stepIndex == 4){
                    const computeLength = (x, y) => (x**2 + y**2)**0.5;
                    const cirScale = Math.ceil(computeLength(this.$el.offsetWidth, this.$el.offsetHeight) / 100 )

                    let sc = gsap.utils.mapRange(0, 0.5, 0, 1, this.stepProgress);
                    sc = sc < 0 ? 0 : sc;

                    let op = gsap.utils.mapRange(0.6, 0.9, 1, 0, this.stepProgress);
                    gsap.set(".plastic .video-wrap .circle", {scale:sc * cirScale, opacity:op});
                    gsap.set(".plastic .video-wrap .video-con", {opacity:(1-op)*5});

                    if(video && video.paused) { video.play(); }

                } else {
                    //reset
                    gsap.set(".plastic .video-wrap .video-con", {opacity:0});
                    gsap.set(".plastic .video-wrap .circle", {scale:0, opacity:0})

                    if(video && !video.paused) { video.pause(); }
                }
            },



            changeStep(){
                if(this.isFirst){
                    this.render();
                }
            },

            changeProgress(){
            }
        }

    }
</script>

<style scoped lang="scss">

    .visual-wrap {
        position: absolute;
        top:0;
        width: 100%; height: 100%;
        background-color: #fff;
        overflow: hidden;

        .visual-con {
            color: white;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;



            .step-wrap {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                z-index: 0;

                &.step-a {
                    .img-wrap {
                        font-size: 0;
                        position: absolute;
                        width: pxtovw414( 263 );
                        bottom: pxtovw414( -85 ); right: pxtovw414( -25 );
                        img{
                            width: 100%;
                        }
                    }
                }

                &.step-b {
                    position: absolute;
                    top: 0%;

                    .img-wrap {
                        position: absolute;
                        font-size: 0;
                        img {
                            width: 100%;
                        }
                    }


                    .ground-bg {
                        /*opacity: 0;*/
                        position: absolute;
                        width: 100%; height: 100%;
                        transform-origin: 50% 100%;
                        transform: scale(1.1);
                        perspective: 1000px;
                        .img-wrap {
                            bottom: 0;

                        }
                    }

                    .plastic-obj {
                        position: absolute;
                        width: 100%; height: 100%;
                        .img-wrap {
                            transform:scale(0.5);
                            transform-origin: 50% 50%;
                            img {

                            }
                            .def-img {

                            }

                            .trash-img {
                                opacity: 0;
                                position: absolute;
                                top: 0; left: 0;
                            }
                        }



                    }

                    .ground-over {
                        /*opacity: 0;*/
                        position: absolute;
                        width: 100%; height: 100%;
                        transform-origin: 50% 100%;
                        .img-wrap {
                            bottom: 0;
                        }

                    }



                }

                &.step-d {
                    &.video-wrap {
                        overflow: hidden;
                        pointer-events: none;

                        .circle {
                            position: absolute;
                            background-color: $color-set-green;
                            width: 100px; height: 100px;
                            left: 50%; top: 50%;
                            border-radius: 1500px;
                            transform: translate3d(-50%, -50%, 0) scale(0);

                        }


                        .video-con {
                            opacity: 0;
                            &:after {
                                position: absolute;
                                width: 100%; height: 100%;
                                background-color: rgba(0,0,0,0.2);
                                content: ""; font-size: 0;
                            }
                            video {
                                position: absolute;
                                object-fit: cover;
                                width: 100%; height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }


    .desktop, .tablet {
        .visual-wrap {
            .visual-con {

                .step-wrap {

                    &.step-a {
                        position: relative;
                        width: 1200px;
                        margin: 0 auto;
                        padding: 0;

                        .img-wrap {
                            width: 342px;
                            bottom: -50px; right: 34px;
                        }
                    }

                    &.step-b {
                        transform-origin: 60% 50%;
                        .img-wrap {

                        }


                        .ground-bg {
                            /*opacity: 0;*/
                            position: absolute;
                            width: 100%; height: 100%;
                            transform-origin: 70% 100%;
                            transform: scale(1.1);
                            display: flex;
                            justify-content: center;

                            background-repeat: repeat-x;
                            background-position: 0 100%;


                            .img-wrap {
                                width: 1100px;
                                padding-left: 500px;
                                bottom: -410px;


                            }
                        }

                        .plastic-obj {
                            position: absolute;
                            height: 100%;
                            width: 1200px;
                            left: 50%; transform: translateX(-50%);
                            .img-wrap {
                                transform:scale(0.5);
                                transform-origin: 50% 50%;
                                /*background-color: rgba(0,0,0,0.1);*/
                                img {
                                    /*position: absolute;*/
                                    /*width: 100%;*/
                                    /*margin-top: 550px;*/
                                    /*width: 100%;
                                    transform: translate3d(-50%, -50%, 0);*/
                                }
                                .def-img {

                                }

                                .trash-img {
                                    opacity: 0;
                                    position: absolute;
                                    top: 0; left: 0;
                                }
                            }



                        }

                        .ground-over {
                            /*opacity: 0;*/
                            position: absolute;
                            width: 100%; height: 100%;
                            transform-origin: 70% 100%;
                            display: flex;
                            justify-content: center;
                            .img-wrap {
                                width: 890px;
                                bottom: -50px;
                                padding-left: 500px;
                            }

                        }



                    }


                    &.step-d {
                        &.video-wrap {
                            .circle {
                            }
                            video {
                            }
                        }

                    }
                }
            }
        }

    }
</style>