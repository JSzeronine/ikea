<template>
    <div class="visual-wrap wool">
        <div class="visual-con">

            <div class="step-wrap step-b">
                <div class="img-wrap sheep-g" data-move="150"><img :src="'./img/main/wool_img-4.png'" alt=""></div> <!-- l l-->

                <div class="img-wrap sheep-f" data-move="400"><img :src="'./img/main/wool_img-7.png'" alt=""></div> <!-- l l-->
                <div class="img-wrap sheep-e" data-move="-300"><img :src="'./img/main/wool_img-6.png'" alt=""></div> <!-- r r-->
                <div class="img-wrap sheep-c" data-move="200"><img :src="'./img/main/wool_img-4.png'" alt=""></div> <!-- l l-->
                <div class="img-wrap sheep-b" data-move="150"><img :src="'./img/main/wool_img-3.png'" alt=""></div> <!-- l l-->
                <div class="img-wrap sheep-d" data-move="100"><img :src="'./img/main/wool_img-5.png'" alt=""></div> <!-- r l-->
                <div class="img-wrap sheep-a" data-move="50"><img :src="'./img/main/wool_img-2.png'" alt=""></div> <!-- c l-->
            </div>

            <div class="step-wrap step-a">
                <img class="img-wrap" :src="'./img/main/wool_img-1.png'" alt="">
            </div>

            <div class="step-wrap step-d video-wrap">
                <div class="circle"></div>
                <div class="video-con" v-show="onStage">
                    <video class="img-mb" autoplay playsinline muted loop :src="'./img/main/m_wool_content.mp4'"></video>
                    <video class="img-pc" autoplay playsinline muted loop :src="'./img/main/wool_content.mp4'"></video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { isMobile, isIE, isChrome } from "mobile-device-detect";
    import gsap from "gsap"

    export default {
        name: "Material-Wool-visual",

        data(){
            return {
                isFirst:true
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

                // sheep section
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
                let easePer = this.easeOutCubic(this.stepProgress);
                if(this.stepIndex == 1) {
                    if(isMobile){
                        obj = {
                            x: (1-easePer) * 70,
                            scale: (easePer * 0.1) + 0.9
                        }
                    } else {
                        obj = {
                            y: (1-easePer) * 100,
                            scale: (easePer * 0.1) + 0.9
                        }
                    }

                } else {
                    obj = {
                        x: 0,
                        scale:1
                    }
                }

                const tg = this.$el.querySelector(".step-a .img-wrap");
                gsap.to(tg, 0.2, obj);


            },


            controlVisual_step_b(){
                const visualObjs = this.$el.querySelectorAll(".step-b .img-wrap");
                const _this = this;

                let sc=0, tgX=0, tgAlpha=0;

                sc = gsap.utils.mapRange(0.2, 0.8, 1, 0, this.stepProgress);
                sc = sc > 1 ? 1 : (sc < 0 ? 0 : sc );

                Array.prototype.slice.call(visualObjs).forEach(function(obj){

                    if(_this.stepIndex == 2){
                        tgX = sc * obj.dataset.move;
                        tgAlpha = (1-sc) * 5;
                    } else if(_this.stepIndex < 2){
                        tgX = 0;
                        tgAlpha = 0;
                    } else {
                        tgX = 0;
                        tgAlpha = 1;
                    }

                    gsap.to(obj, 0.5,{x:tgX, opacity:tgAlpha})
                });

            },

            controlVisual_step_c(){
                const tgA = this.$el.querySelector(".step-a");
                const tgB = this.$el.querySelector(".step-b");
                let tgS = 1, tgY = 0;
                if(this.stepIndex == 3){
                    let easePer = this.easeOutCubic(this.stepProgress);
                    tgS = 1-(easePer * 0.2);
                    tgY = easePer * 30;

                } else {

                }

                gsap.to(tgA, 0.5,{y:tgY, scale:tgS})
                gsap.to(tgB, 0.5,{y:tgY, scale:tgS})
            },

            controlVideoCircle(){
                // play / stop video

                let video = isMobile ? this.$el.querySelector(".plastic .video-wrap .video-con .img-mb") : this.$el.querySelector(".plastic .video-wrap .video-con .img-pc");

                if(this.stepIndex == 3){
                    const computeLength = (x, y) => (x**2 + y**2)**0.5;
                    const cirScale = Math.ceil(computeLength(this.$el.offsetWidth, this.$el.offsetHeight) / 100 )

                    let sc = gsap.utils.mapRange(0, 0.5, 0, 1, this.stepProgress);
                    sc = sc < 0 ? 0 : sc;

                    let op = gsap.utils.mapRange(0.6, 0.9, 1, 0, this.stepProgress);
                    gsap.set(".wool .video-wrap .circle", {scale:sc * cirScale, opacity:op});
                    gsap.set(".wool .video-wrap .video-con", {opacity:(1-op)*5});

                    if(video && video.paused) { video.play(); }

                } else {
                    //reset
                    gsap.set(".wool .video-wrap .video-con", {opacity:0});
                    gsap.set(".wool .video-wrap .circle", {scale:0, opacity:0})

                    if(video && !video.paused) { video.pause(); }
                }
            },


            changeStep(){
                if(this.isFirst){
                    this.render();
                }
            },

            changeProgress(){

            },



            easeOutCubic(x) {
                return 1 - Math.pow(1 - x, 3);
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

                .img-wrap {
                    img{
                        animation-iteration-count: infinite;
                        animation-direction: alternate;
                        animation-timing-function: linear;
                        transform-origin: 50% 100%;
                    }
                    &:nth-child(even){
                        img{
                            animation-duration: 0.9s;
                            animation-name: sheep;
                        }
                    }
                    &:nth-child(odd){
                        img {
                            animation-duration: 1.2s;
                            animation-name: sheep-rever;
                        }
                    }
                }

                &.step-a {
                    transform-origin: 20% 70%;
                    .img-wrap {
                        position: absolute;
                        width: pxtovw414( 313 );
                        bottom: pxtovw414( -242 ); right: pxtovw414( -12 );
                        img{
                            width: 100%;
                        }
                    }
                }

                &.step-b {
                    position: absolute;
                    left: pxtovw414(-570);
                    top: 100%;
                    margin-top: pxtovw414(-350);
                    transform-origin: 170% 20%;

                    .img-wrap {
                        position: absolute;
                        opacity: 0;
                        img {
                            width: 100%;
                        }

                        &.sheep-a{
                            width: pxtovw414(475);
                            left: pxtovw414(1024);
                            top: pxtovw414(98);
                            opacity: 1;
                        }
                        &.sheep-b{
                            width: pxtovw414(576);
                            left: pxtovw414(314);
                            top: pxtovw414(46);
                            opacity: 1;
                        }
                        &.sheep-c{
                            width: pxtovw414(614);
                            left: pxtovw414(0);
                            top: pxtovw414(58);
                            opacity: 1;
                        }
                        &.sheep-d{
                            width: pxtovw414(608);
                            left: pxtovw414(890);
                            top: pxtovw414(0);
                            opacity: 1;
                        }
                        &.sheep-e{
                            width: pxtovw414(495);
                            left: pxtovw414(827);
                            top: pxtovw414(-30);
                            opacity: 1;
                        }
                        &.sheep-f{
                            width: pxtovw414(483);
                            left: pxtovw414(558);
                            top: pxtovw414(14);
                            opacity: 1;
                        }

                        &.sheep-g{
                            width: pxtovw414(483);
                            left: pxtovw414(500);
                            top: pxtovw414(-5);
                            opacity: 1;
                            transform: scale(0.9);
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

                    .img-wrap {
                        &:nth-child(even){
                            img{
                                /*animation-name: sheep;*/
                            }
                        }
                        &:nth-child(odd){
                            img {
                                /*animation-name: sheep-rever;*/
                            }
                        }
                    }

                    &.step-a {
                        width: 2140px;
                        height: 849px;
                        /*background-color: #009945;*/
                        left: 50%; top:auto; bottom: -425px;
                        transform: translate3d(-50%, 0, 0);
                        transform-origin: 50% 10%;
                        .img-wrap {
                            position: absolute;
                            width: 446px;
                            bottom: 0; left: 978px;
                            img{
                                width: 100%;
                            }
                        }
                    }

                    &.step-b {

                        width: 2140px;
                        height: 849px;

                        left: 50%; top:auto; bottom: -425px;
                        transform: translate3d(-50%, 0, 0);
                        margin-top: 0;
                        transform-origin: 50% 20%;

                        .img-wrap {

                            opacity: 0;


                            &.sheep-a{
                                width: 677px;
                                left: 1464px;
                                top: 139px;
                                opacity: 1;
                            }
                            &.sheep-b{
                                width: 822px;
                                left: 450px;
                                top: 66px;
                                opacity: 1;
                            }
                            &.sheep-c{
                                width: 877px;
                                left: 0px;
                                top: 140px;
                                opacity: 1;
                            }
                            &.sheep-d{
                                width: 868px;
                                left: 1273px;
                                top: 0px;
                                opacity: 1;
                            }
                            &.sheep-e{
                                width: 704px;
                                left: 1273px;
                                top: 0px;
                                opacity: 1;
                            }
                            &.sheep-f{
                                width: 690px;
                                left: 798px;
                                top: 76px;
                                opacity: 1;
                            }



                            &.sheep-g{
                                width: 877px;
                                left: 850px;
                                top: 50px;
                                opacity: 1;
                                transform: scale(0.8);
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


















    @keyframes sheep {
        from {
            transform: translate3d(0px, -7px, 0);
        }
        to {
            transform: translate3d(0px, 0, 0) scale(1.005);
        }
    }
    @keyframes sheep-rever {
        from {
            transform: translate3d(0px, 0, 0) scale(1.005);
        }
        to {
            transform: translate3d(0px, -7px, 0);
        }
    }
</style>