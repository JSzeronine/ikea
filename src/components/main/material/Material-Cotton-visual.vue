
<template>
    <div class="visual-wrap cotton">
        <div class="visual-con">


            <div class="step-wrap step-a">
                <!-- cotton -->
                <div class="fly-wrap">
                    <div class="fly-con">
                        <div class="img-wrap"><img :src="'./img/main/cotton_obj_0.png'" alt=""></div>
                        <div class="img-wrap"><img :src="'./img/main/cotton_obj_1.png'" alt=""></div>
                        <div class="img-wrap"><img :src="'./img/main/cotton_obj_2.png'" alt=""></div>
                    </div>
                </div>


            </div>


            <div class="step-wrap step-b">
                <!-- cow -->
                <div class="ground-wrap">
                    <div class="ground-con">
                        <div class="ground-box">
                            <div class="ground">
                                <div class="img-wrap scene-0" :style="{ backgroundImage : `url( ./img/main/cotton_gr_0.png )`}"></div>
                                <div class="img-wrap scene-1" :style="{ backgroundImage : `url( ./img/main/cotton_gr_1.png )`}"></div>
                                <div class="img-wrap scene-2" :style="{ backgroundImage : `url( ./img/main/cotton_gr_2.png )`}"></div>
                            </div>
                            <div class="obj">
                                <div class="img-wrap"><img :src="'./img/main/cotton-obj.png'" alt=""></div>
                            </div>
                            <div class="obj-ground">
                                <div class="img-wrap scene-1"><img :src="'./img/main/cotton_obj_gr_1.png'" alt=""></div>
                                <div class="img-wrap scene-2"><img :src="'./img/main/cotton_obj_gr_2.png'" alt=""></div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <div class="step-wrap step-d video-wrap">
                <div class="circle"></div>
                <div class="video-con" v-show="onStage">
                    <video class="img-mb" autoplay playsinline muted loop :src="'./img/main/m_cotton_content.mp4'"></video>
                    <video class="img-pc" autoplay playsinline muted loop :src="'./img/main/cotton_content.mp4'"></video>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import { isMobile, isIE, isChrome } from "mobile-device-detect";
    import { Power2, Power3, Power1, Linear } from "gsap";

    export default {
        name: "Material-cotton-visual",

        data(){
            return {
                isFirst:true,
                timeline:"",
                timeline_b:"",
                easeProgress:1
            }
        },

        props:[
            "onStage", "stepIndex", "stepProgress"
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
                this.timeline = gsap.timeline();
                const cotton = this.$el.querySelectorAll(".cotton .step-a .fly-con .img-wrap");

                let index = 0;
                let delayArr = [0.3, 0, 0.6, 1.4];
                let timeArr = [3, 2.6, 3.2, 1.4];
                let rotateArr = [50,35,-30,20];
                let leftArr = [10, -10, 15];

                if(!isMobile) {
                    delayArr = [0.3, 0, 0.6, 1.4];
                    timeArr = [3, 2.6, 3.2, 1.4];
                    rotateArr = [50,35,-30,20];
                    leftArr = [10, -10, 15];
                }
                // this.timeline.to(cotton[0], {duration: 2.5});
                Array.prototype.slice.call(cotton).forEach(function(entry){
                    _this.timeline.from(entry, {duration: timeArr[index], delay:delayArr[index], x:leftArr[index]+"vw", rotation:rotateArr[index], y:"120vh", opacity:1, ease: Power2.easeIn}, "<");
                    index++;
                });
                this.timeline.to(cotton[0], {duration: 10.0});
                this.timeline.pause();

                this.timeline_b = gsap.timeline();
                const ground = this.$el.querySelectorAll(".cotton .step-b .ground-con");
                this.timeline_b.to(ground, {duration: 3.0});
                this.timeline_b.to(ground, {duration: 0, scale:isMobile ? "1.5" : "1.25", x:isMobile ? "20vw" : 0, ease: Power2.easeOut});
                this.timeline_b.from(ground, {duration: 2, y:"100vh", ease: Power2.easeOut});

                this.timeline_b.to(ground, {duration: 1.9, delay:0.1, y:"-23vh", ease: Power1.easeInOut}, ">1");
                this.timeline_b.to(ground, {duration: 1.21, x:0, scale:1, ease: Power1.easeInOut}, "<");


                this.timeline_b.from(".cotton .step-b .ground-box .obj-ground", {duration: 1.0, alpha:0, ease: Linear.easeNone}, "<1.0");
                this.timeline_b.from(".cotton .step-b .ground-box .ground .scene-1", {duration: 1.0, alpha:0, ease: Linear.easeNone}, "<");
                // this.timeline_b.from(".cotton .step-b .ground-box .ground .scene-2", {duration: 1.0, alpha:0, ease: Linear.easeNone}, "<");
                // this.timeline_b.from(".cotton .step-b .ground-box .ground .scene-1", {duration: 1.0, alpha:0, ease: Linear.easeNone}, "<");
                this.timeline_b.to(ground, {duration: 3, x:0, scale:isMobile ? 0.8 : 0.95, ease: Power1.easeInOut}, "<1.2");
                this.timeline_b.to(".cotton .step-b .ground-box .obj-ground .scene-2", {duration: 1.0, alpha:0, ease: Linear.easeNone}, "<1.2");
                this.timeline_b.from(".cotton .step-b .ground-box .ground .scene-2", {duration: 1.0, alpha:0, ease: Linear.easeNone}, "<");

                this.timeline_b.to(ground, {duration: 1.0});
                this.timeline_b.pause();

                // this.timeline.pause();

                /*const _this = this;
                this.timeline = gsap.timeline();
                const cotton = this.$el.querySelectorAll(".cotton .step-a .dish-con .img-wrap");

                let index = 0;
                const timeArr = [2, 1.6, 1.2, 1.4, 1.1, 1.8, 1.7, 1.9, 1.47];
                const rotateArr = [-20,-15,-10,20,-12,12,-25,50,20];
                this.timeline.to(cotton[0], {duration: 2.5});
                Array.prototype.slice.call(cotton).forEach(function(entry){

                    _this.timeline.to(entry, {duration: timeArr[index], rotation:rotateArr[index], y:"-100vh", opacity:1, ease: Power2.easeIn}, "<");
                    index++;
                });
                this.timeline.to(cotton[0], {duration: 1.5});
                this.timeline.pause();



                this.timeline_b = gsap.timeline();
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow0"), {duration: 3.2});
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow0"), {duration: 1.5, y:"100%", opacity:1, ease: Power2.easeOut});
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow2"), {duration: 2, x:"-50%", opacity:0, ease: Power2.easeOut}, "<0.7");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow6"), {duration: 2, x:"-10%", opacity:0, ease: Power2.easeOut}, "<0.4");

                this.timeline_b.pause();*/

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

                // food
                this.controlVisual_step();
                this.controlVisual_step_c();

                // ikea section
                this.controlVideoCircle();

                if(this.onStage){
                    window.requestAnimationFrame(this.render);
                }
            },



            controlVisual_step(){

                // console.log(this.stepIndex, this.stepProgress)

                const stP = isMobile ? 0.0 : 0.0;
                const stepP = isMobile ? 0.5 : 0.5;

                let tgP = 0;

                if(this.stepIndex == 1){
                    tgP = (this.stepProgress * stepP);
                } else if(this.stepIndex == 2){
                    tgP = (stepP+stP) + (this.stepProgress * (1-(stepP+stP)));
                } else if(this.stepIndex == 3){
                    tgP = 1
                }

                const _this = this;
                gsap.killTweensOf(this);
                gsap.to( this, 0.1, {easeProgress:tgP, onUpdate:function(){
                        _this.timeline.progress(_this.easeProgress);
                        _this.timeline_b.progress(_this.easeProgress);
                    }} );

                function easeIn(x) {
                    return x * x * x;
                }
            },


            controlVisual_step_c(){

                const cow = this.$el.querySelector(".cow-con");

                let tgS = 1, tgX = 0, tgY = 0;
                if(this.stepIndex == 3){
                    let easePer = this.stepProgress;
                    tgS = isMobile  ? 1-(easePer * 0.1) : 1-(easePer * 0.1);
                    tgY = isMobile ? easePer * 60 : easePer * 80;
                    tgX = isMobile ? easePer * 60 : easePer * 40;

                } else {

                }

                // gsap.to(".cow-con .out-cow", 0.5,{y:tgY, scale:tgS})
                // gsap.to(cow, 0.5,{y:tgY, x:tgX, scale:tgS})
            },



            controlVideoCircle(){
                // play / stop video

                if(this.stepIndex == 3){
                    const computeLength = (x, y) => (x**2 + y**2)**0.5;
                    const cirScale = Math.ceil(computeLength(this.$el.offsetWidth, this.$el.offsetHeight) / 100 )

                    let sc = gsap.utils.mapRange(0, 0.5, 0, 1, this.stepProgress);
                    sc = sc < 0 ? 0 : sc;

                    let op = gsap.utils.mapRange(0.6, 0.9, 1, 0, this.stepProgress);
                    gsap.set(".cotton .video-wrap .circle", {scale:sc * cirScale, opacity:op});
                    gsap.set(".cotton .video-wrap .video-con", {opacity:(1-op)*5});
                } else {
                    //reset
                    gsap.set(".cotton .video-wrap .video-con", {opacity:0});
                    gsap.set(".cotton .video-wrap .circle", {scale:0, opacity:0})
                }



            },

            changeStep(){
                if(this.isFirst){
                    this.render();
                }
            },

            changeProgress(){
                this.stepProgress;
                let obj = {}

                if(this.stepIndex == 1){

                } else if(this.stepIndex == 2){

                } else if(this.stepIndex == 3){

                }
            }

        }

    }
</script>

<style scoped lang="scss">

    .visual-wrap.cotton {
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

            transform-origin: 50% 100%;



            .step-wrap {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                z-index: 0;


                &.step-a {
                    .fly-wrap {
                        position: absolute;
                        left: pxtovw414(0);
                        top: 0;
                        .fly-con {
                            position: absolute;
                            width: pxtovw414(200);

                            .img-wrap {
                                position: absolute;
                                top: pxtovw414(-100);
                            }

                            .img-wrap:nth-child(1) {
                                width: pxtovw414(76);
                                left:  pxtovw414(60);
                            }
                            .img-wrap:nth-child(2) {
                                width: pxtovw414(69);
                                left:  pxtovw414(300);
                            }
                            .img-wrap:nth-child(3) {
                                width: pxtovw414(86);
                                left:  pxtovw414(150);
                            }

                            img{
                                width: 100%;
                            }

                        }

                    }
                }

                &.step-b {

                    .ground-wrap {
                        .ground-con {
                            position: absolute;
                            left: pxtovw414(0);
                            bottom: pxtovw414(0);
                            width: 100%;


                            .img-wrap {
                                position: absolute;
                                width: 100%;

                                img{
                                    width: 100%;
                                }
                            }

                            .ground-box {
                                height: 0;
                                .ground {
                                    position: absolute;
                                    width: 200%;
                                    left: -50%;
                                    height: pxtovw414(265);

                                    .img-wrap {
                                        height: 100%;
                                        background-size: contain;
                                        background-repeat: repeat-x;
                                        background-position-y: -1px;
                                    }
                                }

                                .obj-ground {
                                    position: absolute;
                                    top: 0; width: 100%;
                                }

                                .obj {
                                    position: absolute;
                                    width: 100%;
                                    top: 0;
                                    display: flex;
                                    justify-content: center;

                                    .img-wrap {
                                        width: pxtovw414(210);
                                        transform: translate3d(0,-96%,0);
                                    }

                                }
                            }

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
                        .fly-wrap {
                            position: relative;
                            margin: 0 auto;
                            width: $stage-contents-width;
                            height: 100%;


                            .fly-con {
                                position: absolute;
                                left: 50%;
                                width: 50%;

                                .img-wrap {
                                    position: absolute;
                                    top: -180px;
                                }

                                .img-wrap:nth-child(1) {
                                    width: 140px;
                                    left:  60px;
                                }
                                .img-wrap:nth-child(2) {
                                    width: 120px;
                                    left:  500px;
                                }
                                .img-wrap:nth-child(3) {
                                    width: 135px;
                                    left:  250px;
                                }

                                img{
                                    width: 100%;
                                }

                            }

                        }
                    }

                    &.step-b {

                        .ground-wrap {
                            .ground-con {
                                width: 100%;


                                .img-wrap {

                                    img{
                                        width: 100%;
                                    }
                                }

                                .ground-box {
                                    height: 0;
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                    .ground {
                                        position: absolute;
                                        width: 150%;
                                        left: -20%;
                                        height: 306px;

                                        .img-wrap {
                                            height: 100%;
                                            background-size: contain;
                                            background-repeat: repeat-x;
                                            background-position-y: -1px;
                                        }
                                    }

                                    .obj-ground {
                                        position: absolute;
                                        top: 0; width: 414px;
                                        left: calc(50% + 70px);
                                    }

                                    .obj {
                                        position: absolute;
                                        top: 0; width: 414px;
                                        left: calc(50% + 70px);
                                        display: flex;
                                        justify-content: center;

                                        .img-wrap {
                                            width: 338px;
                                            transform: translate3d(0,-96%,0);
                                        }

                                    }
                                }

                            }
                        }

                    }




                    &.step-d {
                        &.video-wrap {
                            width: 100%;

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