
<template>
    <div class="visual-wrap wood">
        <div class="visual-con">


            <div class="step-wrap step-a">
                <div class="wood-con" :style="{ transform : 'scale('+resizeScale+')'}">

                    <div class="tree tree-f tree-posi-a">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_b_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_b.png'" alt=""></div>
                        </div>
                    </div>

                    <div class="tree tree-f tree-posi-b">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_a_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_a.png'" alt=""></div>
                        </div>
                    </div>
                    <div class="tree tree-f tree-posi-c">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_a_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_a.png'" alt=""></div>
                        </div>
                    </div>
                    <div class="tree tree-f tree-posi-d">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_c_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_c.png'" alt=""></div>
                        </div>
                    </div>
                    <div class="tree tree-f tree-posi-e">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_a_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_a.png'" alt=""></div>
                        </div>
                    </div>


                    <div class="tree tree-f tree-posi-f">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_b_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_b.png'" alt=""></div>
                        </div>
                    </div>
                    <div class="tree tree-f tree-posi-g">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_b_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_b.png'" alt=""></div>
                        </div>
                    </div>
                    <div class="tree tree-f tree-posi-h">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_a_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_a.png'" alt=""></div>
                        </div>
                    </div>
                    <div class="tree tree-f tree-posi-i">
                        <div class="obj-con">
                            <div class="obj-tree"><img :src="'./img/main/tree_b_bot.png'" alt=""></div>
                            <div class="obj-tree"><img :src="'./img/main/tree_b.png'" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="ground-wrap"  :style="{ backgroundImage : `url( ./img/main/wood_ground.jpg )`}">
                    <img :src="'./img/main/wood_ground.jpg'" alt="">
                </div>
            </div>

            <div class="step-wrap step-d video-wrap">
                <div class="circle"></div>
                <div class="video-con" v-show="onStage">
                    <video class="img-mb" autoplay playsinline muted loop :src="'./img/main/m_wood_content.mp4'"></video>
                    <video class="img-pc" autoplay playsinline muted loop :src="'./img/main/wood_content.mp4'"></video>
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
        name: "Material-Wood-visual",

        data(){
            return {
                isFirst:true,
                timeline:"",
                timeline_treeArr:[],
                easeProgress:1,
                resizeScale:1
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

                this.setTreeInteraction(this.$el.querySelectorAll(".tree-f"));

                let maxH = 0;
                const treeArr = this.$el.querySelectorAll(".wood-con .tree")
                Array.prototype.slice.call(treeArr).forEach(function(obj){
                    maxH = Math.max(obj.offsetHeight, maxH );
                });


                if( isMobile && (maxH > (window.innerHeight  * 0.6)) ){
                    //resize scale
                    const sc = (window.innerHeight  * 0.6) / maxH;
                    this.resizeScale = sc;
                }

            },


            setTreeInteraction(tree, sizeArr, roteArr){
                const _this = this;
                let treeIndex = 0;
                let treeObjIndex = 0;

                Array.prototype.slice.call(tree).forEach(function(obj){
                    let tl = gsap.timeline();
                    const treeObj = obj.querySelectorAll(".obj-con .obj-tree");

                    // scale
                    Array.prototype.slice.call(treeObj).forEach(function(obj){
                        if(sizeArr){
                            // cut leaf - has size arr
                            tl.from(obj, {duration: 1.5, scale:sizeArr[treeObjIndex], rotation:roteArr[treeObjIndex++], ease: Power2.easeInOut}, "> -1.5");
                        } else {
                            // merge leaf
                            if(treeIndex == 6){
                                // first show tree
                                tl.from(obj, {duration: 1.5, scale:1, ease: Power2.easeInOut}, "> -1.5");
                            } else {
                                tl.from(obj, {duration: 1.5, scale:0.0, y:"10vw",  ease: Power2.easeInOut}, "> -1.5");
                            }

                        }
                    });


                    // rotate
                    tl.to(treeObj, {duration: Math.random() + 0.5});

                    treeObjIndex = 0;
                    Array.prototype.slice.call(treeObj).forEach(function(obj){
                        if(treeObjIndex != 0) {
                            let direct = 1;
                            if(treeIndex == 3 || treeIndex == 6) direct = -1;
                            tl.to(obj, {duration: 0.3, rotation:-80 * direct, ease: Power3.easeIn}, "> -0.2");
                        }
                        treeObjIndex++;
                    });

                    tl.to(".visual-con .step-a", {duration: 0.005, scaleY: isMobile ? 1.02 : 1.01, ease: Power3.easeIn}, ">");
                    tl.to(".visual-con .step-a", {duration: 0.005, scaleY:1, ease: Power3.easeIn}, ">");


                    // alpha
                    tl.to(treeObj, {duration: 0.2});

                    treeObjIndex = 0;
                    Array.prototype.slice.call(treeObj).forEach(function(obj){
                        if(treeObjIndex != 0) {
                            tl.to(obj, {duration: 0.1, alpha:0}, "> -0.1");
                        }
                        treeObjIndex++;
                    });

                    tl.to(treeObj, {duration: 0.1});
                    tl.pause();

                    _this.timeline_treeArr.push(tl);
                    treeObjIndex = 0;
                    treeIndex += 1;
                });
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

                // wood
                this.controlVisual_step();
                this.controlVisual_step_c();

                // ikea section
                this.controlVideoCircle();

                if(this.onStage){
                    window.requestAnimationFrame(this.render);
                }
            },



            controlVisual_step(){

                // const stP = isMobile ? 0.15 : 0.0;
                const stP = isMobile ? 0.0 : 0.0;
                const stepP = isMobile ? 0.780 : 0.775;

                let tgP = 0;

                if(this.stepIndex == 1){
                    tgP = 1 - (this.stepProgress * stepP + stP);
                } else if(this.stepIndex == 2){
                    tgP = (1-(stepP+stP)) - (easeIn(this.stepProgress) * (1-(stepP+stP)));
                } else if(this.stepIndex == 3){

                }

                const _this = this;
                gsap.killTweensOf(this);
                gsap.to( this, 0.1, {easeProgress:tgP, onUpdate:function(){
                        // _this.timeline.progress(_this.easeProgress);

                        Array.prototype.slice.call(_this.timeline_treeArr).forEach(function(arr){
                            arr.progress(1-_this.easeProgress);
                        });
                    }} );

                function easeIn(x) {
                    return x * x * x;
                }
            },


            controlVisual_step_c(){

                const tree = this.$el.querySelector(".tree");

                let tgS = 1, tgX = 0, tgY = 0;
                if(this.stepIndex == 3){
                    let easePer = this.stepProgress;
                    tgS = 1-(easePer * 0.2);
                    tgX = easePer * 50;
                    tgY = easePer * 30;

                } else {

                }

                // gsap.to(tree, 0.5,{x:-tgX, y:tgY, scale:tgS})
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
                    gsap.set(".wood .video-wrap .circle", {scale:sc * cirScale, opacity:op});
                    gsap.set(".wood .video-wrap .video-con", {opacity:(1-op)*5});

                    if(video && video.paused) { video.play(); }
                } else {
                    //reset
                    gsap.set(".wood .video-wrap .video-con", {opacity:0});
                    gsap.set(".wood .video-wrap .circle", {scale:0, opacity:0})

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

    .visual-wrap.wood {
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

                .wood-con {
                    height: 100%;
                    transform-origin: 50% 100%;



                    .tree-a {

                    }


                    .tree {
                        font-size: 0;
                        position: absolute;
                        $w:300;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        bottom: pxtovw414(35);
                        .obj-con {
                            img{ width: 100%; }
                            .obj-tree {
                                transform-origin: 47% 94.5%;
                                position: absolute;
                                width: 100%;
                                top: 0;
                            }
                        }
                    }


                    .tree-posi-a {
                        //show desktop
                        $w:218;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( -250 );
                    }

                    .tree-posi-b {
                        //show desktop
                        $w:267;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( -177 );
                    }

                    .tree-posi-c {
                        $w:317;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( -163 );
                    }

                    .tree-posi-d {
                        $w:320;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( -96 );
                    }

                    .tree-posi-e {
                        $w:334;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( -78 );
                    }


                    .tree-posi-f {
                        $w:342;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( 36 );
                    }

                    .tree-posi-g {
                        $w:346;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( 100 );
                    }

                    .tree-posi-h {
                        $w:318;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( 234 );
                    }

                    .tree-posi-i {
                        //show desktop
                        $w:218;
                        width: pxtovw414( $w );
                        padding-top: pxtovw414( $w * 1.5 );
                        margin-left: pxtovw414( 400 );
                    }



                }

                .ground-wrap {
                    position: absolute;
                    width: 200%;
                    transform: translate3d(-25%,0,0);
                    bottom: 0;
                    height: pxtovw414(38);

                    background-repeat: repeat-x;
                    background-position: 0 100%;
                    img {
                        display: none;
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


                    .wood-con {
                        width: 1200px;
                        margin: 0 auto;
                        height: 100%;



                        .tree {
                            bottom: 40px;
                            .obj-con {
                                .obj-tree {
                                }
                            }
                        }


                        .tree-posi-a {
                            //show desktop
                            width: 307px;
                            padding-top: 460px;
                            margin-left: 262px;
                        }

                        .tree-posi-b {
                            //show desktop
                            width: 380px;
                            padding-top: 570px;
                            margin-left: 377px;
                        }

                        .tree-posi-c {
                            $w:317;
                            width: 456px;
                            padding-top: 684px;
                            margin-left: 397px;
                        }

                        .tree-posi-d {
                            $w:320;
                            width: 460px;
                            padding-top: 690px;
                            margin-left: 490px;
                        }

                        .tree-posi-e {
                            $w:334;
                            width: 478px;
                            padding-top: 717px;
                            margin-left: 516px;
                        }


                        .tree-posi-f {
                            width: 493px;
                            padding-top: 740px;
                            margin-left: 680px;
                        }

                        .tree-posi-g {
                            width: 493px;
                            padding-top: 740px;
                            margin-left: 760px;
                        }

                        .tree-posi-h {
                            $w:318;
                            width: 456px;
                            padding-top: 684px;
                            margin-left: 963px;
                        }

                        .tree-posi-i {
                            //show desktop
                            $w:218;
                            width: 295px;
                            padding-top: 442px;
                            margin-left: 1218px;
                        }



                    }


                    .ground-wrap {
                        width: 100%;
                        transform: translate3d(0,0,0);
                        bottom: 0;
                        height: 54px;
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