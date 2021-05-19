<template>
    <section class="comp-sub__info">
        <div class="inner-wrap">
            <div class="contents">
                <div class="comp-sub__text">
                    <dl>
                        <dt>
                            <slot name="title"></slot>
                        </dt>
                        <dd>
                            <slot name="description"></slot>
                        </dd>
                    </dl>

                    <p class="sub-info__img">
                        <slot name="img"></slot>
                    </p>
                </div>

                <div class="comp-sub__material">
                    <div class="comp-sub__material-content">
                        <div class="comp-sub__material-title">
                            <slot name="material-title"></slot>
                        </div>

                        <div class="comp-sub__material-icons">
                            <ul>
                                <slot name="material-icon-list"></slot>
                            </ul>
                        </div>
                    </div>

                    <div class="comp-sub__material-scroll__trigger">
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div class="comp-sub__material-list">
                    <div class="comp-sub__material-list__bx">
                        <ul>
                            <slot name="material-list"></slot>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "comp-sub-info",
    mounted() {
        gsap.registerPlugin( ScrollTrigger );

        const scrollGuide = this.$el.querySelector( ".comp-sub__material-scroll__trigger" );
        const scrollGuideList = scrollGuide.querySelectorAll( "li" );
        const Tl = gsap.timeline( {} );


        const txtParent = this.$el.querySelector( ".comp-sub__text" );
        const title = txtParent.querySelector( "dt" );
        const description = txtParent.querySelector( "dd" );

        const titleMaterial = this.$el.querySelector( ".comp-sub__material-title" );
        const materialBx = this.$el.querySelector( ".comp-sub__material-icons" );

        if( isMobile ){
            Tl.fromTo( title, {
                y:25,
                opacity : 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : txtParent.querySelector( "dl" ),
                    start : "top, 90%",
                    end : "bottom center",
                    scrub : true,
                }
            });

            Tl.fromTo( description, {
                y:25,
                opacity : 0,
            }, {
                y:0,
                opacity : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : txtParent.querySelector( "dl" ),
                    start : "top, 90%",
                    end : "bottom center",
                    scrub : true
                }
            });

            Tl.fromTo( ".comp-sub__info .sub-info__img img", {
                scale : 1.3,
            }, {
                scale : 1,
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : ".comp-sub__text",
                    start : "start bottom",
                    end : "center center",
                    scrub : .5,
                }
            });

            Tl.fromTo( titleMaterial, {
                y: "10vh",
            }, {
                y:"-10vh",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : scrollGuide,
                    start : "top bottom",
                    end : "bottom top",
                    scrub : true,
                }
            });

            /*Tl.fromTo( materialBx, {
                y:"100vh",
            }, {
                y:"-80vh",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : scrollGuideList[ 1 ],
                    start : "top bottom",
                    end : "bottom bottom",
                    scrub : true,
                }
            });*/




            Tl.fromTo( this.$el.querySelector( ".comp-sub__material-icons li:nth-child(1)" ), {
                y:"100vh", rotation:0, x:0,
            }, {
                y:"-60vh", rotation:70, x:"10vw",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : scrollGuideList[ 1 ],
                    start : "top bottom",
                    end : "bottom bottom",
                    scrub : true,
                }
            });

            Tl.fromTo( this.$el.querySelector( ".comp-sub__material-icons li:nth-child(2)" ), {
                y:"110vh", rotation:0, x:0,
            }, {
                y:"-85vh", rotation:-20, x:"-10vw",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : scrollGuideList[ 1 ],
                    start : "10% bottom",
                    end : "bottom bottom",
                    scrub : true,
                }
            });

            Tl.fromTo( this.$el.querySelector( ".comp-sub__material-icons li:nth-child(3)" ), {
                y:"80vh", rotation:0, x:0,
            }, {
                y:"-60vh", rotation:-10, x:"5vw",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : scrollGuideList[ 1 ],
                    start : "10% bottom",
                    end : "bottom bottom",
                    scrub : true,
                }
            });

            Tl.fromTo( this.$el.querySelector( ".comp-sub__material-icons li:nth-child(4)" ), {
                y:"120vh", rotation:0, x:0,
            }, {
                y:"-115vh", rotation:30, x:"0vw",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : scrollGuideList[ 1 ],
                    start : "20% bottom",
                    end : "bottom bottom",
                    scrub : true,
                }
            });




            return;
        }

        Tl.fromTo( title, {
            y:25,
            opacity : 0,
        }, {
            y:0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : txtParent.querySelector( "dl" ),
                start : "top, 90%",
                end : "bottom center",
                scrub : true
            }
        });

        Tl.fromTo( description, {
            y:25,
            opacity : 0,
        }, {
            y:0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : txtParent.querySelector( "dl" ),
                start : "top, 90%",
                end : "bottom center",
                scrub : true
            }
        });

        Tl.fromTo( ".comp-sub__info .sub-info__img", {
            y:100,
        }, {
            y:0,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : ".comp-sub__text",
                start : "top bottom",
                end : "center center",
                scrub : .5,
            }
        });

        Tl.fromTo( ".comp-sub__info .sub-info__img img", {
            y:-55,
            scale : 1.15,
        }, {
            y:0,
            scale : 1,
            ease:Linear.easeNone,
            scrollTrigger : {
                trigger : ".comp-sub__text",
                start : "start bottom",
                end : "bottom top",
                scrub : .5,
            }
        });

        Tl.fromTo( titleMaterial, {
            y: "5vh",
        }, {
            y:"-5vh",
            ease:Linear.easeNone,
            scrollTrigger : {
                trigger : scrollGuide,
                start : "top bottom",
                end : "bottom top",
                scrub : true,
            }
        });

        Tl.fromTo( materialBx, {
            y:"100vh",
        }, {
            y:"-70vh",
            ease:Linear.easeNone,
            scrollTrigger : {
                trigger : scrollGuideList[ 1 ],
                start : "top bottom",
                end : "bottom bottom",
                scrub : true,
            }
        });
    }
}
</script>

<style scoped lang="scss">
    .comp-sub__info{
        .inner-wrap{
            .contents{
                padding: pxtovw414( 166 ) 0 pxtovw414( 160 ) 0;
                .comp-sub__text{
                    dl{
                        padding: 0 pxtovw414( 40 ) 0;
                        margin-bottom: pxtovw414( 75 );
                        dt{
                            font-size: pxtovw414( 30 );
                            line-height: pxtovw414( 42 );
                            margin-bottom: pxtovw414( 20 );
                            font-family: $font-family-bold;
                            span{
                                display: inline-block;
                            }
                        }
                        dd{
                            font-size: pxtovw414( 16 );
                            line-height: pxtovw414( 24 );
                            span{
                                display: inline-block;
                            }
                        }
                    }

                    .sub-info__img{
                        overflow: hidden;
                        margin-left: pxtovw414( 40 );
                        box-sizing: border-box;
                        img{
                            width: 100%;
                        }
                    }
                }

                .comp-sub__material{
                    width: 100%;
                    position: relative;
                    margin-top: pxtovh414( -180 );

                    .comp-sub__material-scroll__trigger{
                        margin-top: calc(var(--vh, 1vh) * -100);
                        ul{
                            li{
                                width: 0%;
                                height: calc(var(--vh, 1vh) * 100);
                                background-color: rgba( 0, 0, 0, 0.1 );

                                &:nth-child( 2 ){
                                    height: calc(var(--vh, 1vh) * 200);
                                }
                            }
                        }
                    }

                    .comp-sub__material-content{
                        position: sticky;
                        left: 0;
                        top: 0;

                        .comp-sub__material-title{
                            position: relative;
                            text-align: center;
                            z-index: 6;
                            width: 100%;
                            height: calc(var(--vh, 1vh) * 100);
                            font-size: pxtovw414( 30 );
                            line-height: pxtovw414( 42 );
                            font-family: $font-family-bold;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .comp-sub__material-icons{
                            width: 100%; height: 100vh;
                            z-index: 5;
                            position: absolute;
                            overflow: hidden;
                            left: 0;
                            top: 0;
                            ul{
                                li{
                                    img{
                                        position: relative;
                                        display: inline-block;
                                    }

                                    &:nth-child( 1 ){
                                        margin-bottom: pxtovh414( 142 );

                                        img{
                                            width: pxtovw414( 48 );
                                            left: pxtovw414( 151 );
                                            transform-origin: top right;
                                            animation-name: animation-material-0;
                                            animation-duration: 4s;
                                            animation-iteration-count: infinite;
                                            animation-direction: alternate;
                                            animation-timing-function : ease-in-out;
                                        }
                                    }
                                    
                                    &:nth-child( 2 ){
                                        margin-bottom: pxtovw414( 124 );
                                        img{
                                            width: pxtovw414( 56 );
                                            left: pxtovw414( 85 );
                                            transform-origin: top right;
                                            animation-name: animation-material-0;
                                            animation-duration: 3.5s;
                                            animation-iteration-count: infinite;
                                            animation-direction: alternate;
                                            animation-timing-function : ease-in-out;
                                        }
                                    }

                                    &:nth-child( 3 ){
                                        transform-origin: bottom left;
                                        /*animation-name: animation-material-2-rotate;*/
                                        /*animation-duration: 3s;*/
                                        /*animation-iteration-count: infinite;*/
                                        /*animation-direction: alternate;*/
                                        /*animation-timing-function : ease-in-out;*/

                                        img{
                                            width: pxtovw414( 264 );
                                            left: pxtovw414( -27 );
                                            animation-name: animation-material-2-y;
                                            animation-duration: 2s;
                                            animation-iteration-count: infinite;
                                            animation-direction: alternate;
                                            animation-timing-function : ease-in-out;
                                        }
                                    }

                                    &:nth-child( 4 ){
                                        /*animation-name: animation-material-4-y;*/
                                        /*animation-duration: 4s;*/
                                        /*animation-iteration-count: infinite;*/
                                        /*animation-direction: alternate;*/
                                        /*animation-timing-function : ease-in-out;*/

                                        img{
                                            width: pxtovw414( 94 );
                                            left: pxtovw414( 292 );
                                        }
                                    }

                                    @keyframes animation-material-0 {
                                        from{ transform: translateY( 3vh ) rotate( 10deg ); }
                                        to{ transform: translateY( 0vh ) rotate( 0deg ); }
                                    }

                                    @keyframes animation-material-2-y {
                                        from{ transform: translateY( 0vh ); }
                                        to{ transform: translateY( 4vh ); }
                                    }

                                    @keyframes animation-material-2-rotate {
                                        from{ transform: rotate( -2deg ); }
                                        to{ transform: rotate( 0deg ); }
                                    }

                                    @keyframes animation-material-4-y {
                                        from{ transform: translateY( 0vh ); }
                                        to{ transform: translateY( -3vh ); }
                                    }
                                }
                            }
                        }
                    }
                }

                .comp-sub__material-list{
                    padding: 0 pxtovw414( 40 ) 0;
                    box-sizing: border-box;
                    margin-top: pxtovh414( -190 );
                    .comp-sub__material-list__bx{
                        ul{

                        }
                    }
                }
            }
        }
    }

    @media screen and (orientation: landscape){
        .mobile {
            .comp-sub__info{
                .inner-wrap{
                    .contents{
                        padding: pxtovw414( 63 ) 0 pxtovw414( 30 ) 0;
                        .comp-sub__text{
                            dl{
                                padding: 0 pxtovw414( 40 ) 0;
                                margin-bottom: pxtovw414( 30 );
                                dt{
                                    font-size: pxtovw414( 15 );
                                    line-height: pxtovw414( 21 );
                                    margin-bottom: pxtovw414( 10 );
                                }
                                dd{
                                    font-size: pxtovw414( 10 );
                                    line-height: pxtovw414( 14 );
                                }
                            }

                            .sub-info__img{
                                margin-left: pxtovh414( 90 );
                                img{
                                }
                            }
                        }

                        .comp-sub__material{
                            margin-top: 0;

                            .comp-sub__material-scroll__trigger{
                                margin-top: calc(var(--vh, 1vh) * -50);
                                ul{
                                    li{
                                        width: 0%;
                                        height: calc(var(--vh, 1vh) * 50);

                                        &:nth-child( 2 ){
                                            height: calc(var(--vh, 1vh) * 100);
                                        }
                                    }
                                }
                            }

                            .comp-sub__material-content{
                                .comp-sub__material-title{
                                    height: calc(var(--vh, 1vh) * 80);
                                    font-size: pxtovw414( 15 );
                                    line-height: pxtovw414( 21 );
                                }

                                .comp-sub__material-icons{
                                    ul{
                                        li{
                                            img{
                                            }

                                            &:nth-child( 1 ){
                                                margin-bottom: pxtovh414( 71 );

                                                img{
                                                    width: pxtovw414( 24 );
                                                    left: pxtovw414( 75 );
                                                }
                                            }

                                            &:nth-child( 2 ){
                                                margin-bottom: pxtovw414( 62 );
                                                img{
                                                    width: pxtovw414( 28 );
                                                    left: pxtovw414( 42 );
                                                }
                                            }

                                            &:nth-child( 3 ){
                                                img{
                                                    width: pxtovw414( 132 );
                                                    left: pxtovw414( -14 );
                                                }
                                            }

                                            &:nth-child( 4 ){
                                                img{
                                                    width: pxtovw414( 47 );
                                                    left: pxtovw414( 146 );
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .comp-sub__material-list{
                            padding: 0 pxtovw414( 40 ) 0;
                            margin-top: pxtovh414( -95 );
                            .comp-sub__material-list__bx{
                                ul{

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .comp-sub__info{
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;
                .contents{
                    width: 1200px;
                    margin: 0 auto;
                    padding: 200px 0;
                    .comp-sub__text{
                        box-sizing: border-box;
                        padding-left: 170px;

                        dl{
                            margin-bottom: 91px;
                            padding: 0;
                            dt{

                                font-size: 42px;
                                line-height: 56px;
                                margin-bottom: 22px;
                            }
                            dd{
                                width: 860px;
                                font-size: $font-size-xs;
                                line-height: 28px;
                            }
                        }

                        .sub-info__img{
                            padding: 0;
                            margin: 0;
                            width: 100%;
                            height: 610px;
                            img{
                            }
                        }
                    }

                    .comp-sub__material{
                        margin-bottom: 0;
                        margin-top: -180px;

                        .comp-sub__material-content{

                            .comp-sub__material-title{
                                font-size: 42px;
                                line-height: 56px;
                                margin-bottom: 280px;
                            }

                            .comp-sub__material-icons{
                                padding-bottom: 70vh;
                                ul{
                                    li{
                                        img{
                                        }

                                        &:nth-child( 1 ){
                                            margin-bottom: 44px;
                                            img{
                                                width: 96px;
                                                left: 908px;
                                            }
                                        }

                                        &:nth-child( 2 ){
                                            margin-bottom: 271px;
                                            img{
                                                width: 112px;
                                                left: 216px;
                                            }
                                        }

                                        &:nth-child( 3 ){
                                            img{
                                                width: 528px;
                                                left: 20px;
                                            }
                                        }

                                        &:nth-child( 4 ){
                                            margin-top: -433px;
                                            img{
                                                left: 936px;
                                                width: 188px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .comp-sub__material-list{
                        padding: 0 145px;
                        margin-top: -280px;
                        .comp-sub__material-list__bx{
                            ul{
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-between;
                            }
                        }
                    }

                }
            }
        }
    }
</style>