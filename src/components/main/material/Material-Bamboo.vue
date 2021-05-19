<template>
    <div class="material-content bamboo">

        <div class="sticky-wrap">
            <div class="sticky-con">

                <Visual :onStage="onStage" :stepIndex="stepIndex" :stepProgress="stepProgress"></Visual>

                <div class="step-wrap">
                    <div class="step-con step-a" v-show="stepIndex == 1">
                        <div class="title-wrap">
                            <span v-html="language.step_a[0]"></span>
                            <span class="meterial">BAMBOO</span>
                        </div>
                    </div>

                    <div class="step-con step-b" v-show="stepIndex == 2">
                        <div class="title-wrap">
                            <span v-html="language.step_b[0]"></span>
                        </div>
                    </div>

                    <div class="step-con step-d" v-show="stepIndex == 3">
                        <div class="title-wrap">
                            <p><span v-html="language.step_d[0]"></span></p>
                            <p><span v-html="language.step_d[1]"></span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="progress-wrap">
                <div class="progress-con step-a">1</div>
                <div class="progress-con step-b">2</div>
                <div class="progress-con step-d">3</div>
            </div>
        </div>

        <div class="contents-wrap">
            <div class="visual-wrap">
                <div class="product-info">
                    <div class="product-item">
                        <p class="name"><span v-html="language.product.name"></span></p>
                        <p class="info"><span v-html="language.product.info"></span></p>
                        <p class="price">
                            <span class="unit" v-html="language.product.price.unit"></span>
                            <span class="value" v-html="language.product.price.value"></span>
                            <span class="amount" v-html="language.product.price.amount"></span>
                        </p>
                    </div>
                </div>
                <img class="img-pc" :src="'./img/main/bamboo_product_img.jpg'" alt="">
                <img class="img-mb" :src="'./img/main/m_bamboo_product_img.jpg'" alt="">
            </div>
            <div class="text-wrap">
                <p class="title"><span v-html="language.product.detail.title"></span></p>
                <p class="desc"><span v-html="language.product.detail.description"></span></p>
            </div>
        </div>




    </div>
</template>

<script>
    import gsap from "gsap"
    import {Power2} from "gsap"
    import scrollTrigger from "gsap/ScrollTrigger"

    import MixinContents from "@/mixin/mixin-main-meterial"
    import Visual from "@/components/main/material/Material-Bamboo-visual"

    export default {
        name: "Material-Bamboo",

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
                onStage:false
            }
        },

        created() {
            this.language = this.$t( "contents.material.bamboo" );
        },

        mounted() {

            gsap.registerPlugin(scrollTrigger);

            const _this = this;
            const section = this.$el.querySelectorAll(".material-content .progress-wrap .progress-con")
            const timeline = gsap.timeline();

            const scrub = 0.5;

            timeline.fromTo( ".bamboo",
                {}, {
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".bamboo",
                        start:"top bottom",
                        end:"bottom top",
                        onLeave:() => {
                            _this.onStage = false;
                        },
                        onLeaveBack:() => {
                            _this.onStage = false;
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

            timeline.fromTo( ".bamboo .step-con.step-a",
                {opacity:1, y:0}, {opacity:0, y:hideY, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".bamboo .progress-con.step-a",
                        start:"50% bottom",
                        end:"100% bottom"
                    }},
            )


            //step 1
            timeline.fromTo( ".bamboo .step-con.step-b",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".bamboo .progress-con.step-b",
                        start:"top bottom",
                        end:"30% bottom"
                    }},
            )

            timeline.fromTo( ".bamboo .step-con.step-b",
                {opacity:1, y:0}, {opacity:0, y:hideY, ease:Power2.easeIn,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".bamboo .progress-con.step-b",
                        start:"70% bottom",
                        end:"100% bottom"
                    }},
            )


            //step 3
            timeline.fromTo( ".bamboo .step-con.step-d .title-wrap p:nth-child(1)",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".bamboo .progress-con.step-d",
                        start:"top bottom",
                        end:"30% bottom"
                    }},
            )

            timeline.fromTo( ".bamboo .step-con.step-d .title-wrap p:nth-child(2)",
                {opacity:0, y:showY}, {opacity:1, y:0, ease:Power2.easeOut,
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".bamboo .progress-con.step-d",
                        start:"30% bottom",
                        end:"60% bottom"
                    }},
            )

            timeline.fromTo( ".bamboo .step-con.step-d .title-wrap",
                {color:"#000"}, {color:"#fff",
                    scrollTrigger: {
                        scrub: scrub,
                        trigger: ".bamboo .progress-con.step-d",
                        start:"20% bottom",
                        end:"50% bottom"
                    }},
            )

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

                                // console.log("update", _this.stepIndex, _this.stepProgress)
                            }
                        }},
                )
            });




        },

        methods: {
            getElementIndex(element, range) {
                if (!!range) return [].indexOf.call(element, range);
                return [].indexOf.call(element.parentNode.children, element);
            },

            checkScroll(){
                //step 0
                // 0.2 - 1 : text hide

                //step 1
                // 0.0 - 0.2 : text show
                // 0.0 - 0.5 : 500 text show
                // 0.8 - 1.0 : text hide

                //step 2
                // 0.0 - 0.2 : text show
                // 0.8 - 1.0 : circle show
                // 0.8 - 1.0 : text hide

                //step 3
                // 0.0 - 0.2 : text show
                // 0.0 - 0.4 : circle +
                // 0.8 - 1.0 : circle hide


                // (step index, el, option(alpha, transform..), stValue, endValue)


            }

        }

    }
</script>

<style scoped lang="scss">

    .material-content {
        /*height: 300vh;*/
        width: 100%;

        .progress-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: -50vh;
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
                    height: 150vh;
                }

                &.step-b{
                    height: 400vh;
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
                        bottom: auto; right: 0;
                        padding: pxtovw414(130) pxtovw414(76) 0 0;
                        box-sizing: border-box;

                        .name {
                            font-family: $font-family-bold;
                            margin-bottom: pxtovw414(6);
                            line-height: 1.3;
                        }
                        .info {
                            margin-bottom: pxtovw414(10);
                            line-height: 1.3;
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


    @media screen and (orientation: landscape) {
        .mobile {
            .material-content {
                .sticky-wrap {
                    .sticky-con {
                        .step-wrap {
                            padding: 0 pxtovw414( 30 ) 0;
                            .step-con {
                                &:first-child{
                                }
                                .title-wrap {
                                    margin-top: pxtovw414( 40 );
                                    font-size: pxtovw414( 15 );

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
                                padding: pxtovw414(85) pxtovw414(40) 0 0;
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
        .progress-wrap {
            margin-top: -100vh;
        }
        .material-content {
            min-width: $stage-min-width;
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
                                    font-size: 28px;
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
                            margin: 150px 130px;
                            bottom: auto; right: auto;
                            padding: 0;
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