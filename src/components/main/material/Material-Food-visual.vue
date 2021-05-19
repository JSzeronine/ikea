
<template>
    <div class="visual-wrap food">
        <div class="visual-con">


            <div class="step-wrap step-a">
                <!-- food -->
                <div class="dish-wrap">
                    <div class="dish-con">
                        <div class="img-wrap obj-dish"><img :src="'./img/main/food-dishes.png'" alt=""></div>
                        <div class="img-wrap obj4"><img :src="'./img/main/food-obj4.png'" alt=""></div>
                        <div class="img-wrap obj5"><img :src="'./img/main/food-obj5.png'" alt=""></div>
                        <div class="img-wrap obj6"><img :src="'./img/main/food-obj6.png'" alt=""></div>
                        <div class="img-wrap obj3"><img :src="'./img/main/food-obj3.png'" alt=""></div>
                        <div class="img-wrap obj2"><img :src="'./img/main/food-obj2.png'" alt=""></div>
                        <div class="img-wrap obj-beef"><img :src="'./img/main/food-beef.png'" alt=""></div>
                        <div class="img-wrap obj1"><img :src="'./img/main/food-obj1.png'" alt=""></div>
                        <div class="img-wrap obj0"><img :src="'./img/main/food-obj0.png'" alt=""></div>
                    </div>
                </div>


            </div>


            <div class="step-wrap step-b">
                <!-- cow -->
                <div class="cow-wrap">
                    <div class="cow-con">
                        <div class="img-wrap smoke0"><img :src="'./img/main/food-smoke_0.png'" alt=""></div>
                        <div class="img-wrap smoke1"><img :src="'./img/main/food-smoke_1.png'" alt=""></div>
                        <div class="img-wrap smoke2"><img :src="'./img/main/food-smoke_2.png'" alt=""></div>
                        <div class="img-wrap smoke3"><img :src="'./img/main/food-smoke_3.png'" alt=""></div>

                        <div class="img-wrap cow4 out-cow"><img :src="'./img/main/food-cow-4.png'" alt=""></div>
                        <div class="img-wrap cow5 out-cow"><img :src="'./img/main/food-cow-4.png'" alt=""></div>
                        <div class="img-wrap cow6 out-cow"><img :src="'./img/main/food-cow-1.png'" alt=""></div>
                        <div class="img-wrap cow3 out-cow"><img :src="'./img/main/food-cow-3.png'" alt=""></div>
                        <div class="img-wrap cow0 "><img :src="'./img/main/food-cow-0.png'" alt=""></div>
                        <div class="img-wrap cow1 out-cow"><img :src="'./img/main/food-cow-1.png'" alt=""></div>
                        <div class="img-wrap cow2 out-cow"><img :src="'./img/main/food-cow-2.png'" alt=""></div>

                        <div class="img-wrap smoke-over"><img :src="'./img/main/food-smoke_over.png'" alt=""></div>
                    </div>
                </div>

            </div>

            <div class="step-wrap step-d video-wrap">
                <div class="circle"></div>
                <div class="video-con" v-show="onStage">
                    <video class="img-mb" autoplay playsinline muted loop :src="'./img/main/m_food_content.mp4'"></video>
                    <video class="img-pc" autoplay playsinline muted loop :src="'./img/main/food_content.mp4'"></video>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import { isMobile, isIE, isChrome } from "mobile-device-detect";
    import { Power2, Power3, Linear, Bounce } from "gsap";

    export default {
        name: "Material-food-visual",

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
                const food = this.$el.querySelectorAll(".food .step-a .dish-con .img-wrap");

                let index = 0;
                const timeArr = [2, 1.6, 1.2, 1.4, 1.1, 1.8, 1.7, 1.9, 1.47];
                const rotateArr = [-20,-15,-10,20,-12,12,-25,50,20];
                this.timeline.to(food[0], {duration: 2.5});
                Array.prototype.slice.call(food).forEach(function(entry){

                    _this.timeline.to(entry, {duration: timeArr[index], rotation:rotateArr[index], y:"-100vh", opacity:1, ease: Power2.easeIn}, "<");
                    index++;
                });
                this.timeline.to(food[0], {duration: 1.5});
                this.timeline.pause();



                this.timeline_b = gsap.timeline();
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow0"), {duration: 3.2});
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow0"), {duration: (isMobile ? 3.5 : 2), y:"100%", opacity:1, ease: Power2.easeOut});
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow2"), {duration: 2, x:"-50%", opacity:0, ease: Power2.easeOut}, "<0.7");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow6"), {duration: 2, x:"-10%", opacity:0, ease: Power2.easeOut}, "<0.4");

                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow1"), {duration: 1.5, x:"-15%", opacity:0, ease: Power2.easeOut}, "<0.2");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow5"), {duration: 2, x:"50%", opacity:0, ease: Power2.easeOut}, "<");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow3"), {duration: 2, x:"20%", opacity:0, ease: Power2.easeOut}, "<0.1");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.cow4"), {duration: 2, x:"-45%", opacity:0, ease: Power2.easeOut}, "<");

                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.smoke0"), {duration: 4, y:"12%", scale:0.8, rotation:-15, opacity:0, ease: Power2.easeOut}, "<-0.3");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.smoke1"), {duration: 4.5, y:"20%", scale:0.7, rotation:-30, opacity:0, ease: Power2.easeOut}, "<");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.smoke2"), {duration: 3, y:"15%", scale:0.8, rotation:-40, opacity:0, ease: Power2.easeOut}, "<");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.smoke3"), {duration: 3.5, y:"25%", scale:0.7, rotation:20, opacity:0, ease: Power2.easeOut}, "<");
                _this.timeline_b.from(this.$el.querySelectorAll(".food .step-b .cow-con .img-wrap.smoke-over"), {duration: 3, y:"25%", scale:0.8, opacity:0, ease: Power2.easeOut}, "<");
                this.timeline_b.pause();

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

                const stP = isMobile ? 0.0 : 0.0;
                const stepP = isMobile ? 0.35 : 0.35;

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

                gsap.to(".cow-con .out-cow", 0.5,{y:tgY, scale:tgS})
                gsap.to(cow, 0.5,{y:tgY, x:tgX, scale:tgS})
            },



            controlVideoCircle(){
                // play / stop video

                if(this.stepIndex == 3){
                    const computeLength = (x, y) => (x**2 + y**2)**0.5;
                    const cirScale = Math.ceil(computeLength(this.$el.offsetWidth, this.$el.offsetHeight) / 100 )

                    let sc = gsap.utils.mapRange(0, 0.5, 0, 1, this.stepProgress);
                    sc = sc < 0 ? 0 : sc;

                    let op = gsap.utils.mapRange(0.6, 0.9, 1, 0, this.stepProgress);
                    gsap.set(".food .video-wrap .circle", {scale:sc * cirScale, opacity:op});
                    gsap.set(".food .video-wrap .video-con", {opacity:(1-op)*5});
                } else {
                    //reset
                    gsap.set(".food .video-wrap .video-con", {opacity:0});
                    gsap.set(".food .video-wrap .circle", {scale:0, opacity:0})
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

            transform-origin: 50% 100%;



            .step-wrap {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                z-index: 0;


                &.step-a {
                    .dish-con {
                        position: absolute;
                        left: pxtovw414(64);
                        bottom: pxtovw414(400);
                        .img-wrap {
                            position: absolute;
                            width: pxtovw414(200);

                            &.obj0 {
                                left: pxtovw414(290);
                                top: pxtovw414(125);
                                width: pxtovw414(103);
                            }

                            &.obj1 {
                                left: pxtovw414(355);
                                top: pxtovw414(110);
                                width: pxtovw414(45);
                            }

                            &.obj2 {
                                left: pxtovw414(90);
                                top: pxtovw414(42);
                                width: pxtovw414(80);
                            }

                            &.obj3 {
                                left: pxtovw414(5);
                                top: pxtovw414(55);
                                width: pxtovw414(110);
                            }

                            &.obj4 {
                                left: pxtovw414(165);
                                top: pxtovw414(20);
                                width: pxtovw414(109);
                            }

                            &.obj5 {
                                left: pxtovw414(165);
                                top: pxtovw414(25);
                                width: pxtovw414(103);
                            }

                            &.obj6 {
                                left: pxtovw414(85);
                                top: pxtovw414(10);
                                width: pxtovw414(152);
                            }

                            &.obj-beef {
                                left: pxtovw414(65);
                                top: pxtovw414(15);
                                width: pxtovw414(450);
                            }

                            &.obj-dish {
                                left: pxtovw414(0);
                                top: pxtovw414(16);
                                width: pxtovw414(549);
                            }



                            img{
                                width: 100%;
                            }

                        }

                    }
                }

                &.step-b {

                    .cow-con {
                        position: absolute;
                        left: pxtovw414(-492);
                        bottom: pxtovw414(568);


                        .img-wrap {
                            position: absolute;
                            width: pxtovw414(470);

                            &.cow0 {
                                left: pxtovw414(600);
                                top: pxtovw414(248);
                                width: pxtovw414(476);
                            }

                            &.cow1 {
                                left: pxtovw414(838);
                                top: pxtovw414(336);
                                width: pxtovw414(440);
                            }
                            &.cow2 {
                                left: pxtovw414(215);
                                top: pxtovw414(296);
                                width: pxtovw414(500);
                            }
                            &.cow3 {
                                left: pxtovw414(213);
                                top: pxtovw414(302);
                                width: pxtovw414(500);
                            }
                            &.cow4 {
                                left: pxtovw414(383);
                                top: pxtovw414(311);
                                width: pxtovw414(200);
                            }
                            &.cow5 {
                                left: pxtovw414(770);
                                top: pxtovw414(307);
                                width: pxtovw414(203);
                            }
                            &.cow6 {
                                left: pxtovw414(283);
                                top: pxtovw414(315);
                                width: pxtovw414(440);
                            }

                            &.smoke0 {
                                left: pxtovw414(0);
                                top: pxtovw414(0);
                                width: pxtovw414(1010);
                                img{
                                    animation-duration: 20s;
                                    animation-iteration-count: infinite;
                                    animation-direction: alternate-reverse;
                                    animation-name: smoke;
                                }
                            }
                            &.smoke1 {
                                left: pxtovw414(0);
                                top: pxtovw414(0);
                                width: pxtovw414(1010);
                                img{
                                    animation-duration: 25s;
                                    animation-iteration-count: infinite;
                                    animation-direction: alternate-reverse;
                                    animation-name: smoke;
                                }

                            }
                            &.smoke2 {
                                left: pxtovw414(0);
                                top: pxtovw414(0);
                                width: pxtovw414(1010);
                                img{
                                    animation-duration: 22s;
                                    animation-iteration-count: infinite;
                                    animation-direction: alternate-reverse;
                                    animation-name: smoke;
                                }

                            }
                            &.smoke3 {
                                left: pxtovw414(0);
                                top: pxtovw414(0);
                                width: pxtovw414(1010);
                                img{
                                    animation-duration: 18s;
                                    animation-iteration-count: infinite;
                                    animation-direction: alternate-reverse;
                                    animation-name: smoke;
                                }
                            }
                            &.smoke-over {
                                left: pxtovw414(236);
                                top: pxtovw414(342);
                                width: pxtovw414(912);
                            }


                            img{
                                width: 100%;
                            }
                        }

                    }
                }

                @keyframes smoke {
                    from {
                        transform: scale(0.80);
                    }
                    to {
                        transform: scale(1.0);
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

    @media screen and (orientation: landscape) {
        .mobile {
            .visual-wrap {
                .visual-con {
                    .step-wrap {
                        &.step-a {
                            .dish-con {
                                bottom: pxtovw414(200);

                            }
                        }
                        &.step-b {

                            .cow-con {
                                left: pxtovw414(-492);
                                bottom: pxtovw414(420);
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


                        .dish-wrap {
                            position: relative;
                            width: 1200px;
                            margin: 0 auto;
                            height: 100vh;


                            .dish-con {
                                left: 502px;
                                padding-top: 360px;
                                bottom: 80px;
                                .img-wrap {
                                    width: 767px;

                                    &.obj0 {
                                        left: 406px;
                                        top: 175px;
                                        width: 144px;
                                    }

                                    &.obj1 {
                                        left: 497px;
                                        top: 154px;
                                        width: 63px;
                                    }

                                    &.obj2 {
                                        left: 126px;
                                        top: 59px;
                                        width: 112px;
                                    }

                                    &.obj3 {
                                        left: 7px;
                                        top: 77px;
                                        width: 154px;
                                    }

                                    &.obj4 {
                                        left: 231px;
                                        top: 28px;
                                        width: 153px;
                                    }

                                    &.obj5 {
                                        left: 231px;
                                        top: 35px;
                                        width: 144px;
                                    }

                                    &.obj6 {
                                        left: 120px;
                                        top: 14px;
                                        width: 213px;
                                    }

                                    &.obj-beef {
                                        left: 120px;
                                        top: 21px;
                                        width: 630px;
                                    }

                                    &.obj-dish {
                                        left: 0;
                                        top: 22px;
                                        width: 768px;
                                    }



                                    img{
                                        width: 100%;
                                    }

                                }

                            }
                        }

                    }

                    &.step-b {

                        .cow-wrap {
                            position: relative;
                            width: 1200px;
                            margin: 0 auto;
                            height: 100vh;

                            .cow-con {
                                position: absolute;
                                left: -320px;
                                bottom: 800px;
                                width: 100%;
                                transform-origin: 50% 100%;


                                .img-wrap {
                                    position: absolute;
                                    width: 470px;

                                    &.out-cow {
                                        transform-origin: 50% 0;
                                    }

                                    &.cow0 {
                                        left: 858px;
                                        top: 347px;
                                        width: 680px;
                                    }

                                    &.cow1 {
                                        left: 1198px;
                                        top: 480px;
                                        width: 629px;
                                    }
                                    &.cow2 {
                                        left: 307px;
                                        top: 423px;
                                        width: 715px;
                                    }
                                    &.cow3 {
                                        left: 304px;
                                        top: 432px;
                                        width: 715px;
                                    }
                                    &.cow4 {
                                        left: 548px;
                                        top: 445px;
                                        width: 286px;
                                    }
                                    &.cow5 {
                                        left: 1100px;
                                        top: 439px;
                                        width: 290px;
                                    }
                                    &.cow6 {
                                        left: 405px;
                                        top: 450px;
                                        width: 629px;
                                    }

                                    &.smoke0 {
                                        left: pxtovw414(0);
                                        top: pxtovw414(0);
                                        width: 1440px;
                                        img{
                                            animation-duration: 10s;
                                            animation-iteration-count: infinite;
                                            animation-direction: alternate-reverse;
                                            animation-name: smoke;
                                            transform-origin: 100% 50%;
                                        }
                                    }
                                    &.smoke1 {
                                        left: pxtovw414(0);
                                        top: pxtovw414(0);
                                        width: 1440px;
                                        img{
                                            animation-duration: 15s;
                                            animation-iteration-count: infinite;
                                            animation-direction: alternate-reverse;
                                            animation-name: smoke;
                                        }

                                    }
                                    &.smoke2 {
                                        left: pxtovw414(0);
                                        top: pxtovw414(0);
                                        width: 1440px;
                                        img{
                                            animation-duration: 12s;
                                            animation-iteration-count: infinite;
                                            animation-direction: alternate-reverse;
                                            animation-name: smoke;
                                        }

                                    }
                                    &.smoke3 {
                                        left: pxtovw414(0);
                                        top: pxtovw414(0);
                                        width: 1440px;
                                        img{
                                            animation-duration: 18s;
                                            animation-iteration-count: infinite;
                                            animation-direction: alternate-reverse;
                                            animation-name: smoke;
                                        }
                                    }
                                    &.smoke-over {
                                        left: 228px;
                                        top: 522px;
                                        width: 1118px;
                                    }


                                    img{
                                        width: 100%;
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