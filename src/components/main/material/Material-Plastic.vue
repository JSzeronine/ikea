<template>
    <!-- material-content -->
    <div class="material-content plastic">

        <!-- sticky-wrap -->
        <div class="sticky-wrap">
            <!-- sticky-con -->
            <div class="sticky-con">

                <Visual :onStage="onStage" :stepIndex="stepIndex" :stepProgress="stepProgress"></Visual>
                <!-- step-wrap -->
                <div class="step-wrap">
                    <!-- step-con -->
                    <div class="step-con step-a">
                        <div class="title-wrap">
                            <span v-html="language.step_a[0]"></span>
                            <span class="meterial">PLASTIC</span>
                        </div>
                    </div>
                    <!-- //step-con -->

                    <!-- step-con -->
                    <div class="step-con step-b">
                        <div class="title-wrap">
                            <p><span v-html="language.step_b[0]"></span></p>
                            <p class="year">{{year}}<span v-html="language.step_b[1]"></span></p>
                        </div>
                    </div>
                    <!-- //step-con -->

                    <!-- step-con -->
                    <div class="step-con step-c">
                        <div class="title-wrap">
                            <span v-html="language.step_c[0]"></span>
                        </div>
                    </div>
                    <!-- //step-con -->

                    <!-- step-con -->
                    <div class="step-con step-d">
                        <div class="title-wrap">
                            <p><span v-html="language.step_d[0]"></span></p>
                            <p><span v-html="language.step_d[1]"></span></p>

                        </div>
                    </div><!-- //step-con -->
                </div>
                <!-- //step-wrap -->
            </div>

            <div class="arrow-btn">
                <div class="mouse-icon">
                    <img :src="'./img/common/scroll-mouse-black.png'" alt="화살표 버튼">
                </div>
                <a href="javascript:;">
                    <img :src="'./img/common/scroll_arrow_black.png'" alt="화살표 버튼">
                    <img :src="'./img/common/scroll_arrow_black.png'" alt="화살표 버튼">
                </a>
            </div>
            <!-- //sticky-con -->

            <div class="progress-wrap">
                <div class="progress-con step-a">1</div>
                <div class="progress-con step-b">2</div>
                <div class="progress-con step-c">3</div>
                <div class="progress-con step-d">4</div>
            </div>
        </div>
        <!-- //sticky-wrap -->

        <!-- contents-wrap -->
        <div class="contents-wrap">
            <!-- visual-wrap -->
            <div class="visual-wrap">
                <div class="product-info">
                    <!-- product-item -->
                    <div class="product-item">
                        <p class="name"><span v-html="language.product.name"></span></p>
                        <p class="info"><span v-html="language.product.info"></span></p>
                        <p class="price">
                            <span class="unit" v-html="language.product.price.unit"></span>
                            <span class="value" v-html="language.product.price.value"></span>
                            <span class="amount" v-html="language.product.price.amount"></span>
                        </p>
                    </div>
                    <!-- //product-item -->

                </div>
                <img class="img-pc" :src="'./img/main/plastic_product_img.jpg'" alt="">
                <img class="img-mb" :src="'./img/main/m_plastic_product_img.jpg'" alt="">
            </div>
            <!-- //visual-wrap -->
            <!-- text-wrap -->
            <div class="text-wrap">
                <p class="title"><span v-html="language.product.detail.title"></span></p>
                <p class="desc"><span v-html="language.product.detail.description"></span></p>
            </div>
            <!-- //text-wrap -->
        </div>
        <!-- //contents-wrap -->




    </div>
    <!-- //material-content -->
</template>

<script>
    import gsap from "gsap"
    import {Power2} from "gsap"
    import scrollTrigger from "gsap/ScrollTrigger"

    import MixinContents from "@/mixin/mixin-main-meterial"
    import Visual from "@/components/main/material/Material-Plastic-visual"
    import { EventBus } from "@/components/common/EventBus";

    export default {
        name: "Material-Plastic",

        mixins : [
            MixinContents
        ],

        components: {
            Visual
        },

        data(){
            return {
                language: null,
                stepIndex:1,
                stepProgress:0,
                year:0,
                isYearComp:false,
                onStage:false
            }
        },

        created() {
            this.language = this.$t( "contents.material.plastic" );
        },

        mounted() {
            this.imagesLoader();

            gsap.registerPlugin(scrollTrigger);

            const _this = this;
            const section = this.$el.querySelectorAll(".material-content .progress-wrap .progress-con")
            const timeline = gsap.timeline();

            const scrub = 0.5;

            timeline.fromTo( ".plastic",
                {}, {
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic",
                        start:"top bottom",
                        end:"bottom top",
                        onLeave:() => {
                            _this.onStage = false;
                        },
                        onLeaveBack:() => {

                        },
                        onEnter:() => {
                            _this.onStage = true;
                        },
                        onEnterBack:() => {
                            _this.onStage = true;
                        }
                    }}
            )

            const hideY = -15+"vh";
            const showY = 15+"vh";

            timeline.fromTo( ".plastic .arrow-btn",
                {opacity:1, y:0}, {opacity:0, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-a",
                        start:"top bottom",
                        end:"5s0% bottom"
                    }},
            )

            // step 0 hide
            timeline.fromTo( ".plastic .step-con.step-a",
                {opacity:1, y:0}, {opacity:0, y:hideY, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-a",
                        start:"top bottom",
                        end:"90% bottom"
                    }},
            )


            //step 1 show
            timeline.fromTo( ".plastic .step-con.step-b",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-b",
                        start:"top bottom",
                        end:"30% bottom"
                    }},
            )
            // setp 1 hide
            timeline.fromTo( ".plastic .step-con.step-b",
                {opacity:1, y:0}, {opacity:0, y:hideY, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-b",
                        start:"70% bottom",
                        end:"100% bottom"
                    }},
            )

            // setp 1 year control
            timeline.fromTo( ".plastic .step-con.step-b",
                {}, {
                    scrollTrigger: {
                        scrub: 0,
                        trigger: ".plastic .progress-con.step-b",
                        start:"top bottom",
                        end:"30% bottom",
                        onUpdate:(self) => {
                            if(self.progress > 0.2){
                                _this.startPercent()
                            } else {
                                _this.resetPercent()
                            }
                        }
                    }},
            )

            gsap.set(".plastic .step-con.step-b", {opacity:0})

            //step 2 show
            timeline.fromTo( ".plastic .step-con.step-c",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-c",
                        start:"top bottom",
                        end:"30% bottom"
                    }},
            )

            //step 2 hide
            timeline.fromTo( ".plastic .step-con.step-c",
                {opacity:1, y:0}, {opacity:0, y:hideY, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-c",
                        start:"70% bottom",
                        end:"100% bottom"
                    }},
            )


            gsap.set(".plastic .step-con.step-c", {opacity:0})

            //step 3 show
            timeline.fromTo( ".plastic .step-con.step-d .title-wrap p:nth-child(1)",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-d",
                        start:"top bottom",
                        end:"30% bottom"
                    }},
            )

            //step 3 hide
            timeline.fromTo( ".plastic .step-con.step-d .title-wrap p:nth-child(2)",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-d",
                        start:"30% bottom",
                        end:"60% bottom"
                    }},
            )

            //step 3 text color
            timeline.fromTo( ".plastic .step-con.step-d .title-wrap",
                {color:"#000"}, {color:"#fff",
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".plastic .progress-con.step-d",
                        start:"20% bottom",
                        end:"50% bottom"
                    }},
            )

            gsap.set(".plastic .step-con.step-d .title-wrap p", {opacity:0})


            // get progress
            Array.prototype.slice.call(section).forEach(function(entry){
                timeline.fromTo( entry,
                    {}, {
                        scrollTrigger: {
                            scrub: scrub,
                            trigger: entry,
                            start:"top bottom",
                            end:"bottom bottom",
                            onUpdate: self => {
                                const index = _this.getElementIndex(self.trigger);
                                const progress = self.progress;

                                _this.stepIndex = index + 1;
                                _this.stepProgress = progress;
                            }
                        }},
                )
            });




        },

        methods: {

            imagesLoader(){
                var imgs = this.$el.querySelectorAll("img"),
                    len = imgs.length,
                    counter = 0;

                if(len){
                    [].forEach.call( imgs, function( img ) {
                        if(img.complete)
                            incrementCounter(img);
                        else
                            img.addEventListener( 'load', incrementCounter, false );
                    } );

                    function incrementCounter() {
                        counter++;
                        if ( counter === len ) {
                            EventBus.$emit(EventBus.LOAD_COMPLETE_EVENT);
                        }
                    }
                } else {

                }

            },


            getElementIndex(element, range) {
                if (!!range) return [].indexOf.call(element, range);
                return [].indexOf.call(element.parentNode.children, element);
            },

            checkScroll(){

            },


            startPercent(){
                if(this.isYearComp) return;
                this.isYearComp = true;
                const _this = this;
                gsap.killTweensOf(this);
                gsap.to(this, 0.8, {year:500, ease: Power2.easeOut,
                    onUpdate:function(){
                        if(_this.year)
                            _this.year = _this.year.toFixed(0);
                    }
                });
            },

            resetPercent(){
                if(!this.isYearComp) return;
                this.isYearComp = false;

                const _this = this;
                gsap.killTweensOf(this);
                gsap.to(this, 1.0, {year:0, ease: Power2.easeOut,
                    onUpdate:function(){
                        if(_this.year)
                            _this.year = _this.year.toFixed(0);
                    }
                });
            }

        }

    }
</script>

<style scoped lang="scss">


    @keyframes arrow-scroll {
        0% {
            transform: translate3d(0px, -70%, 0) ;
            opacity: 0;
        }
        50% {
            transform: translate3d(0px, 0, 0);
            opacity: 1;
        }
        100% {
            transform: translate3d(0px, 70%, 0);
            opacity: 0;
        }
    }

    .material-content {
        /*height: 300vh;*/
        width: 100%;

        .arrow-btn {
            position: fixed;
            top: calc(var(--vh, 1vh) * 95);
            left: 50%;
            z-index: 2;
            transform: translateX(-50%);
            width: pxtovw414(35);
            height: pxtovw414(15);

            .mouse-icon {
                display: none;
            }

            a img {
                position: absolute;
                width: 100%;
                display: block;

                $arrowTime:1.2s;
                animation: arrow-scroll $arrowTime linear infinite;

                &:nth-child(2) {
                    animation-delay: $arrowTime*0.5;
                }
            }
        }

        .progress-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .progress-con {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                outline: solid 1px #000;

                background-color: black;
                color: white;

                opacity: 0.0;
                width: 30%;

                &.step-a{
                    height: 50vh;
                }

                &.step-b{
                    height: 300vh;
                }

                &.step-c{
                    height: 200vh;
                }

                &.step-d{
                    height: 300vh;
                }

            }
        }


        .sticky-wrap {
            .sticky-con {
                position: sticky;
                height: 100vh;
                top: 0;

                .step-wrap {
                    position: relative;
                    padding: 0 pxtovw414( 40 ) 0;
                    .step-con {
                        position: absolute;
                        &:first-child{
                            opacity: 1;
                        }

                        .title-wrap {
                            font-family: $font-family-bold;
                            margin-top: pxtovw414( 147 );
                            font-size: pxtovw414( 30 );
                            line-height: 1.3;

                            .year {
                                -webkit-text-stroke: 1px black;
                                -webkit-text-fill-color: white;

                                font-size: pxtovw414(110);
                                span {
                                    font-size: pxtovw414(40);
                                }
                            }

                            .meterial {
                                font-size: pxtovw414(20);
                                margin-top: pxtovw414(40);
                                display: block;
                                color: $color-set-green;

                            }
                        }
                    }

                }

            }

        }



        .contents-wrap {
            position: relative;
            .visual-wrap {
                position: relative;
                width: 100%;
                min-height: pxtovw414(634);
                font-size: 0;

                .product-info {
                    position: absolute;
                    width: 100%; height: 100%;
                    z-index: 1;
                    font-size: pxtovw414(16);

                    .product-item {
                        position: absolute;
                        bottom: 0;
                        padding: pxtovw414(100) pxtovw414(40);
                        box-sizing: border-box;
                        text-shadow: 0px 0px 60px rgba(255,255,255,1);

                        .name {
                            font-family: $font-family-bold;
                            margin-bottom: pxtovw414(6);
                            line-height: 1.3;
                        }
                        .info {
                            margin-bottom: pxtovw414(10);
                            line-height: 1.3;
                            text-shadow: 0px 0px 30px rgba(255,255,255,1);
                        }
                        .price {
                            .unit {
                                font-size: pxtovw414(18);
                                font-family: $font-family-bold;

                                display: inline-block;
                                margin-right: pxtovw414(5);
                                line-height: 1.5;
                                vertical-align: top;
                            }
                            .value {
                                font-size: pxtovw414(40);
                                font-family: $font-family-bold;
                                margin-right: pxtovw414(5);
                            }
                            .amount {
                                font-size: pxtovw414(18);

                            }
                        }
                    }


                    &.white {
                        color: white;
                    }


                }
                img {
                    width: 100%;
                }
            }

            .text-wrap {
                background-color: black;
                color: white;
                padding: pxtovw414( 40 ) pxtovw414( 40 ) pxtovw414( 92 );
                box-sizing: border-box;


                .title {
                    font-size: pxtovw414( 24 );
                    font-family: $font-family-bold;
                    line-height: 1.35;
                }

                .desc {
                    font-family: $font-family-regular;
                    line-height: 1.5;
                    font-size: pxtovw414( 16 );
                    margin-top: pxtovw414( 16 );

                }

            }

        }
    }


    @media screen and (orientation:landscape) {
        /* Your CSS Here*/
        .mobile {
            .material-content {
                .sticky-wrap {
                    .sticky-con {
                        .step-wrap {
                            padding: 0 pxtovw414( 30 ) 0;
                            .step-con {
                                .title-wrap {
                                    margin-top: pxtovw414( 40 );
                                    font-size: pxtovw414( 15 );

                                    .year {
                                        font-size: pxtovw414(55);
                                        span {
                                            font-size: pxtovw414(25);
                                        }
                                    }

                                    .meterial {
                                        font-size: pxtovw414(10);
                                        margin-top: pxtovw414(10);
                                    }
                                }
                            }
                        }
                    }
                }

                .contents-wrap {
                    .visual-wrap {
                        overflow: hidden;
                        min-height: 0;
                        height: 200vh;
                        .product-info {
                            font-size: pxtovw414(13);

                            .product-item {
                                padding: pxtovw414(80) pxtovw414(40);

                                .name {
                                    margin-bottom: pxtovw414(6);
                                }
                                .info {
                                    margin-bottom: pxtovw414(10);
                                }
                                .price {
                                    .unit {
                                        font-size: pxtovw414(11);
                                        margin-right: pxtovw414(5);
                                    }
                                    .value {
                                        font-size: pxtovw414(23);
                                        margin-right: pxtovw414(5);
                                    }
                                    .amount {
                                        font-size: pxtovw414(13);
                                    }
                                }
                            }
                            &.white {
                            }
                        }
                        img {
                        }
                    }

                    .text-wrap {
                        padding: pxtovw414( 40 ) pxtovw414( 30 ) pxtovw414( 40 );
                        .title {
                            font-size: pxtovw414( 12 );
                        }

                        .desc {
                            font-size: pxtovw414( 10 );
                            margin-top: pxtovw414( 8 );
                        }
                    }

                }
            }
        }
    }

    .desktop, .tablet {
        .material-content {
            min-width: $stage-min-width;
            .arrow-btn {
                bottom: 40px;
                width: 18px;
                height: 15px;
                left: 50%;
                top: auto;

                .mouse-icon {
                    display: block;
                    position: absolute;
                    width: 24px;
                    left: 50%;
                    transform: translate3d(-50%,-115%,0);
                    img{
                        width: 100%;
                    }
                }

                img {

                }
            }

            .sticky-wrap {
                .sticky-con {
                    width: 100%;
                    min-width: $stage-min-width;
                    margin: 0 auto;

                    .step-wrap {
                        width: $stage-contents-width;
                        margin: 0 auto;
                        padding: 0;
                        /*background-color: rgba(0,0,0,0.5);*/

                        display: flex;
                        align-items: center;
                        height: 100vh;

                        .step-con {
                            height: 340px;
                            .title-wrap {
                                margin-top: 0;
                                font-size: $font-size-xl;

                                .year {
                                    font-size: 170px;
                                    span {
                                        font-size: 60px;
                                    }
                                }

                                .meterial {
                                    font-size: $font-size-me;
                                    margin-top: 40px;
                                }
                            }
                        }

                    }

                }

            }




            .contents-wrap {
                .visual-wrap {
                    height: calc(100vh - 290px);
                    min-height: 800px;

                    display: flex;
                    justify-content: center;

                    .product-info {
                        font-size: $font-size-base;
                        width: $stage-contents-width;
                        height: 100%;
                        padding: 0;


                        .product-item {
                            position: absolute;
                            margin: 270px 200px;
                            padding: 0;
                            bottom: auto;
                            .name {
                                margin-bottom: 6px;
                            }
                            .info {
                                margin-bottom: 10px;
                            }
                            .price {
                                .unit {
                                    font-size: $font-size-xs;
                                    margin-right: 5px;
                                }
                                .value {
                                    font-size: $font-size-xl;
                                    margin-right: 5px;
                                }
                                .amount {
                                    font-size: $font-size-xs;

                                }
                            }
                        }


                    }


                    img {
                        object-fit: cover;
                        width: 100%; height: 100%;
                    }
                }

                .text-wrap {
                    padding: 70px 0px 110px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .title {
                        width: $stage-contents-width;
                        font-size: $font-size-me;
                    }

                    .desc {
                        width: $stage-contents-width;
                        font-size: $font-size-xs;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
</style>