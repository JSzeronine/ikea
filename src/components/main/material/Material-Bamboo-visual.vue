
<template>
    <div class="visual-wrap bamboo">
        <div class="visual-con">


            <div class="step-wrap">
                <div class="bamboo">
                    <div class="step-b">
                        <div class="img-wrap bamboo-10">
                            <img class="pillar" :src="'./img/main/bamboo_10.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-9">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_9.png'" alt="">
                            <img class="pillar" :src="'./img/main/bamboo_9.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-8">
                            <img class="pillar" :src="'./img/main/bamboo_8.png'" alt="">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_8.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-7">
                            <img class="pillar" :src="'./img/main/bamboo_7.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-6">
                            <img class="pillar" :src="'./img/main/bamboo_6.png'" alt="">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_6.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-5">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_5.png'" alt="">
                            <img class="pillar" :src="'./img/main/bamboo_5.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-4">
                            <img class="pillar" :src="'./img/main/bamboo_4.png'" alt="">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_4.png'" alt="">
                        </div>
                    </div>
                    <div class="step-a">
                        <div class="img-wrap bamboo-3">
                            <img class="pillar" :src="'./img/main/bamboo_3.png'" alt="">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_3.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-2">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_2.png'" alt="">
                            <img class="pillar" :src="'./img/main/bamboo_2.png'" alt="">
                        </div>
                        <div class="img-wrap bamboo-1">
                            <img class="pillar" :src="'./img/main/bamboo_1.png'" alt="">
                            <img class="leaf" :src="'./img/main/bamboo_leaf_1.png'" alt="">
                        </div>
                    </div>

                </div>
                <div class="tree">
                    <div class="tree-img-wrap">
<!--                        <img :src="'./img/main/bamboo_tree.png'" alt="">-->
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_0.png'" alt=""></div>
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_1.png'" alt=""></div>
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_2.png'" alt=""></div>
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_3.png'" alt=""></div>
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_4.png'" alt=""></div>
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_5.png'" alt=""></div>
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_6.png'" alt=""></div>
                        <div class="obj-tree"><img :src="'./img/main/bamboo_tree_obj_7.png'" alt=""></div>
                    </div>
                </div>

            </div>

            <div class="step-wrap step-d video-wrap">
                <div class="circle"></div>
                <div class="video-con" v-show="onStage">
                    <video class="img-mb" autoplay playsinline muted loop :src="'./img/main/m_bamboo_content.mp4'"></video>
                    <video class="img-pc" autoplay playsinline muted loop :src="'./img/main/bamboo_content.mp4'"></video>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import gsap from "gsap"
    import { Power2, Linear } from "gsap";
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';

    export default {
        name: "Material-Bamboo-visual",

        data(){
            return {
                isFirst:true,
                timeline:"",
                timeline_tree:"",
                easeProgress:1,
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
                const bamboo = this.$el.querySelectorAll(".bamboo .img-wrap");

                let index = 0;

                Array.prototype.slice.call(bamboo).forEach(function(entry){

                    const time = 0.4;
                    const leafDirec = (index%2) ? -1 : 1;
                    const scX = 0.0;
                    const leafRo = -60;

                    if(index == 0){
                        _this.timeline.to(entry, {duration: 1});
                        _this.timeline.to(entry, {duration: time, y:"400%", opacity:1, scale:scX, ease: Power2.easeInOut});
                        _this.timeline.fromTo( entry.querySelector(".leaf") , { scale : 1, rotation:0 }, { duration: time, scale : 0, rotation:leafRo, ease:Power2.easeInOut }, "<" );
                    } else {
                        _this.timeline.to(entry, {duration: time, y:"400%", opacity:1, scale:scX, ease: Power2.easeInOut}, "> -0.34");
                        _this.timeline.fromTo( entry.querySelector(".leaf") , { scale : 1, rotation:0 }, { duration: time, scale : 0, rotation:leafRo*leafDirec, ease:Power2.easeInOut }, "< -0.13" );
                    }
                    index++;
                })
                this.timeline.pause();
                this.timeline.progress(1)

                const tree = this.$el.querySelector(".tree .tree-img-wrap");
                this.timeline_tree = gsap.timeline();

                this.timeline_tree.from(tree, {duration: 1.5, scale:0.6, y:20+"vh", ease: Power2.easeOut});

                const sizeArr = [0.3, 0.1, 0.01, 0.1, 0.5, 0.1, 0, 0.0];
                const roteArr = [0, -10, 10, -25, 0, 20, 0, 20];
                let treeIndex = 0;

                const treeObj = this.$el.querySelectorAll(".tree .tree-img-wrap .obj-tree");
                Array.prototype.slice.call(treeObj).forEach(function(obj){
                    _this.timeline_tree.from(obj, {duration: 1.5, scale:sizeArr[treeIndex], rotation:roteArr[treeIndex++], ease: Power2.easeOut}, "> -1.5");
                });

                this.timeline_tree.to(tree, {duration: 1.5});
                this.timeline_tree.pause();
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

                // bamboo
                this.controlVisual_step();
                this.controlVisual_step_c();

                // ikea section
                this.controlVideoCircle();

                if(this.onStage){
                    window.requestAnimationFrame(this.render);
                }
            },



            controlVisual_step(){

                const stP = 0.13;
                const stepP = 0.08;

                let tgP = 0;

                if(this.stepIndex == 1){
                    tgP = 1 - (this.stepProgress * stepP + stP);
                } else if(this.stepIndex == 2){
                    tgP = (1-(stepP+stP)) - (easeIn(this.stepProgress) * (1-(stepP+stP)));
                } else if(this.stepIndex == 3){

                }

                const _this = this;
                gsap.killTweensOf(this);
                gsap.to( this, 0.2, {easeProgress:tgP, onUpdate:function(){
                        _this.timeline.progress(_this.easeProgress);
                        _this.timeline_tree.progress(1-_this.easeProgress);
                    }} );

                function easeIn(x) {
                    return x * x * x;
                }
            },


            controlVisual_step_c(){
                const bamboo = this.$el.querySelector(".bamboo");
                const tree = this.$el.querySelector(".tree");

                let tgS = 1, tgX = 0, tgY = 0;
                if(this.stepIndex == 3){
                    let easePer = this.stepProgress;
                    tgS = 1-(easePer * 0.2);
                    tgX = easePer * 50;
                    tgY = easePer * 30;

                } else {

                }

                gsap.to(bamboo, 0.5,{x:tgX, y:tgY, scale:tgS})
                gsap.to(tree, 0.5,{x:-tgX, y:tgY, scale:tgS})
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
                    gsap.set(".bamboo .video-wrap .circle", {scale:sc * cirScale, opacity:op});
                    gsap.set(".bamboo .video-wrap .video-con", {opacity:(1-op)*5});

                    if(video && video.paused) { video.play(); }

                } else {
                    //reset
                    gsap.set(".bamboo .video-wrap .video-con", {opacity:0});
                    gsap.set(".bamboo .video-wrap .circle", {scale:0, opacity:0})

                    if(video && !video.paused) { video.pause(); }
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



            .step-wrap {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                z-index: 0;



                .bamboo {
                    bottom: pxtovw414( 0 ); right: pxtovw414( 0 );
                    height: 100%;
                    width: pxtovw414( 320 );
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    transform-origin: 70% 100%;
                    .img-wrap {
                        /*position: absolute;*/
                        /*width: pxtovw414( 37 );*/
                        box-sizing: border-box;
                        height: pxtovw414( 105 );
                        width: pxtovw414( 34 );
                        transform-origin: 50% 100%;

                        img{
                            position: absolute;
                        }
                        /*.leaf {transform: scale(0.5) rotate(10deg);}*/
                    }
                    .bamboo-10 {
                        height: pxtovw414( 102 );
                        .pillar {
                            width: pxtovw414( 29 );
                        }
                    }

                    .bamboo-9 {
                        height: pxtovw414( 102 );
                        .leaf {
                            width: pxtovw414( 122 );
                            margin-left: pxtovw414( -85 );
                            transform-origin: 80% 0;
                        }
                        .pillar {
                            width: pxtovw414( 29 );
                        }
                    }

                    .bamboo-8 {
                        height: pxtovw414( 102 );
                        .leaf {
                            width: pxtovw414( 84 );
                            margin-left: pxtovw414( 15 );
                            margin-top: pxtovw414( 20 );
                            transform-origin: 20% 0;
                        }
                        .pillar {
                            width: pxtovw414( 30 );
                        }
                    }

                    .bamboo-7 {
                        height: pxtovw414( 100 );
                        .pillar {
                            width: pxtovw414( 31 );
                        }
                    }

                    .bamboo-6 {
                        height: pxtovw414( 106 );
                        .leaf {
                            width: pxtovw414( 72 );
                            margin-left: pxtovw414( -65 );
                            margin-top: pxtovw414( -50 );
                            transform-origin: 100% 50%;
                        }
                        .pillar {
                            width: pxtovw414( 33 );
                        }
                    }

                    .bamboo-5 {

                        .leaf {
                            width: pxtovw414( 122 );
                            margin-left: pxtovw414( 0 );
                            transform-origin: 20% 0;
                        }
                        .pillar {
                            width: pxtovw414( 35 );
                        }
                    }

                    .bamboo-4 {
                        .leaf {
                            width: pxtovw414( 101 );
                            margin-left: pxtovw414( -75 );
                            transform-origin: 85% 0;
                        }
                        .pillar {
                            width: pxtovw414( 35 );
                        }
                    }

                    .bamboo-3 {
                        height: pxtovw414( 93 );
                        .leaf {
                            width: pxtovw414( 74 );
                            margin-left: pxtovw414( 15 );
                            transform-origin: 20% 0;
                        }
                        .pillar {
                            width: pxtovw414( 37 );
                        }
                    }

                    .bamboo-2 {
                        height: pxtovw414( 95 );
                        .leaf {
                            width: pxtovw414( 80 );
                            margin-left: pxtovw414( -60 );
                            transform-origin: 75% 0;
                        }
                        .pillar {
                            width: pxtovw414( 37 );
                        }
                    }

                    .bamboo-1 {
                        height: pxtovw414( 95 );
                        .leaf {
                            width: pxtovw414( 66 );
                            margin-left: pxtovw414( 35 );
                            transform-origin: 0 0;
                        }
                        .pillar {
                            width: pxtovw414( 37 );
                        }
                    }



                    .step-a {
                        .img-wrap {
                            /*height: pxtovw414( 10 );*/
                        }
                    }

                    .step-b {
                        /*opacity: 0;*/
                    }

                    .img-wrap {
                        img{
                            animation-iteration-count: infinite;
                            animation-direction: alternate;
                            animation-timing-function: linear;
                            transform-origin: 50% 100%;
                        }
                        &:nth-child(even){
                            .leaf{
                                /*animation-duration: 1.0s;*/
                                /*animation-name: leaf-rever;*/
                            }
                        }
                        &:nth-child(odd){
                            .leaf {
                                /*animation-duration: 1.5s;*/
                                /*animation-name: leaf;*/
                            }
                        }
                    }
                }

                .tree {
                    font-size: 0;
                    position: absolute;
                    width: 100%; height: 100%;
                    top: 0;
                    transform-origin: 20% 100%;

                    .tree-img-wrap {
                        position: absolute;
                        transform-origin: 50% 100%;

                        width: pxtovw414( 187 );
                        padding-top: pxtovw414( 311 );
                        bottom: pxtovw414( -40 ); left: pxtovw414( 28 );
                        img{
                            width: 100%;
                        }

                        .obj-tree {
                            transform-origin: 50% 80%;
                            position: absolute;
                            width: 100%;
                            top: 0;
                            &:nth-child(1){
                                transform-origin: 50% 100%;
                            }
                            &:nth-child(5){
                                transform-origin: 50% 100%;
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
                    width: 1200px;
                    left: 50%; transform: translate3d(-50%, 0, 0);

                    .bamboo {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0 auto;
                        padding-right: 255px;
                        box-sizing: border-box;


                        .img-wrap {
                            box-sizing: border-box;
                            height: 114px;
                            width: 33px;
                            transform-origin: 50% 100%;

                            img{
                                position: absolute;
                            }
                        }



                        .bamboo-10 {
                            height: 122px;
                            .pillar {
                                width: 34px;
                            }
                        }

                        .bamboo-9 {
                            height: 122px;
                            .leaf {
                                width: 122px;
                                margin-left: -85px;
                                transform-origin: 80% 0;
                            }
                            .pillar {
                                width: 35px;
                            }
                        }

                        .bamboo-8 {
                            height: 120px;
                            .leaf {
                                width: 84px;
                                margin-left: 15px;
                                margin-top: 20px;
                                transform-origin: 20% 0;
                            }
                            .pillar {
                                width: 36px;
                            }
                        }

                        .bamboo-7 {
                            height: 120px;
                            .pillar {
                                width: 37px;
                            }
                        }

                        .bamboo-6 {
                            height: 122px;
                            .leaf {
                                width: 72px;
                                margin-left: -65px;
                                margin-top: -50px;
                                transform-origin: 100% 50%;
                            }
                            .pillar {
                                width: 38px;
                            }
                        }

                        .bamboo-5 {

                            .leaf {
                                width: 122px;
                                margin-left: 0;
                                transform-origin: 20% 0;
                            }
                            .pillar {
                                width: 38px;
                            }
                        }

                        .bamboo-4 {
                            height: 116px;
                            .leaf {
                                width: 101px;
                                margin-left: -75px;
                                transform-origin: 85% 0;
                            }
                            .pillar {
                                width: 39px;
                            }
                        }

                        .bamboo-3 {
                            height: 100px;
                            .leaf {
                                width: 74px;
                                margin-left: 15px;
                                transform-origin: 20% 0;
                            }
                            .pillar {
                                width: 40px;
                            }
                        }

                        .bamboo-2 {
                            height: 104px;
                            .leaf {
                                width: 80px;
                                margin-left: -60px;
                                transform-origin: 75% 0;
                            }
                            .pillar {
                                width: 41px;
                            }
                        }

                        .bamboo-1 {
                            height: 106px;
                            .leaf {
                                width: 66px;
                                margin-left: 35px;
                                transform-origin: 0 0;
                            }
                            .pillar {
                                width: 41px;
                            }
                        }


                    }


                    .tree {
                        .tree-img-wrap {

                            width: 206px;
                            bottom: 0; left: 487px;
                            padding-top: 323px;

                            .obj-tree {
                                transform-origin: 50% 80%;
                                position: absolute;
                                width: 100%;
                                top: 0;
                                &:nth-child(1){
                                    transform-origin: 50% 100%;
                                }
                                &:nth-child(5){
                                    transform-origin: 50% 100%;
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


    @keyframes leaf {
        from {
            transform: rotate(-4deg);
        }
        to {
            transform: rotate(0deg);
        }
    }
    @keyframes leaf-rever {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(2deg);
        }
    }
</style>