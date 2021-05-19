<template>
    <section class="comp-detail__kv">
        <div class="inner-wrap">
            <div class="contents">
                <div class="comp-kv__content">
                    <div v-if="!isText" class="comp-kv__content-txt on">
                        <h2>
                            <slot name="title"></slot>
                        </h2>
                    </div>

                    <div v-if="isText" class="comp-kv__text-type on">
                        <h2>
                            <slot name="title"></slot>
                        </h2>
                    </div>
                </div>

                <div class="detail-kv__bg-bx on">
                    <slot name="img"></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { isMobile, isIE, isChrome } from "mobile-device-detect";
import { gsap, Linear, Back, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EventBus } from "@/components/common/EventBus";

export default {
    name: "comp-detail-kv",

    props : {
        isText : {
            type : Boolean,
            default : false,
        }
    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods : {
        // 로딩 완료
        imgLoadComplete(){
            let content = this.$el.querySelector( ".contents" );

            let kv = content.querySelector( ".comp-kv__content" );
            let kvTxt = kv.querySelector( ".comp-kv__content-txt" );

            let videoBx = content.querySelector( ".detail-kv__bg-bx" );

            gsap.registerPlugin( ScrollTrigger );

            let IntroTl = gsap.timeline({});
            let Tl = gsap.timeline({});

            if( this.isText ){
                // earth, community 페이지
                content.classList.add( "on-text-type" );

                let textType = kv.querySelector( "h2" );

                IntroTl
                    .set( textType, { y:70, opacity:0 })
                    .to( kv, 0.5, { backgroundColor : "rgba( 255, 255, 255, 0 )", ease:Linear.easeOut })
                    .to( textType, 0.5, { y:0, opacity:1, ease:Cubic.easeOut })

            }else{
                // 6개 소재 페이지
                content.classList.add( "on" );

                IntroTl
                    .to( kvTxt, 0.5, { width:160, height:160, ease:Back.easeOut, })
                    .to( kvTxt.querySelector( "h2" ), 0.5, { y:0 })
                    .to( kv, 0.5, { backgroundColor : "rgba( 255, 255, 255, 0 )", ease:Linear.easeOut });
            }


            if( kvTxt == null ){
                kvTxt = kv.querySelector( ".comp-kv__text-type" );
            }

            Tl.fromTo( kvTxt, {
                y:0,
            }, {
                y: "-50vh",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top top",
                    end : "bottom top",
                    scrub : true,
                }
            });

            Tl.fromTo( videoBx, {
                y:0,
            }, {
                y:"-30vh",
                ease:Linear.easeNone,
                scrollTrigger : {
                    trigger : this.$el,
                    start : "top top",
                    end : "bottom top",
                    scrub : true,
                    onEnterBack : () => {
                        videoBx.classList.add( "on" )
                        kvTxt.classList.add( "on" );
                    },

                    onLeave : () => {
                        videoBx.classList.remove( "on" )
                        kvTxt.classList.remove( "on" );
                    }
                }
            });

        },

        shareNaver( $title ){
            // Naver Blog Share TEST( 알아서 지울께요. zeronine )

            let pW = 500;
            let pH = 500;
            let pX = window.screenX + ( window.innerWidth - pW ) / 2;
            let pY= window.screenY + ( window.innerHeight - pH ) / 2;

            let url = encodeURI(encodeURIComponent('http://doubledot.co.kr/ikea/detailall'));
            let title = $title;
            let shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;

            let features = "width=" + pW +", height=" + pH + ", menubar=no, status=no, toolbar=no, left=" + pX +", top=" + pY;
            window.open( shareURL, "AIA", features );
        }
    }
}
</script>

<style scoped lang="scss">
    .comp-detail__kv{
        .inner-wrap{
            .contents{
                position: relative;

                &.on{
                    .comp-kv__content{
                        .comp-kv__content-txt{
                            animation-name:none;
                            opacity: 1;
                            h2{
                            }
                        }
                    }

                    .detail-kv__bg-bx{
                        .detail-kv__bg{
                        }
                    }
                }

                &.on-text-type{
                    .comp-kv__content{
                        .comp-kv__text-type{
                            h2{
                                opacity: 1;
                            }
                        }
                    }
                }

                .comp-kv__content{
                    width: 100%;
                    //height: 100vh;
                    height: calc(var(--vh, 1vh) * 100);
                    position: relative;
                    left: 0;
                    top: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 5;
                    background-color: rgba( 255, 255, 255, 1 );

                    .comp-kv__content-txt{
                        position: fixed;

                        justify-content: center;
                        align-items: center;
                        //width: pxtovw414( 160 );
                        //height: pxtovw414( 160 );
                        text-align: center;

                        width: 50px;
                        height: 50px;
                        background-color: $color-set-green;
                        border-radius: 100%;
                        overflow: hidden;

                        animation-duration: 1s;
                        animation-name: loading-logo;
                        animation-iteration-count: infinite;
                        animation-direction: alternate-reverse;
                        opacity: 0.5;
                        display: none;

                        &.on{
                            display: flex;
                        }

                        @keyframes loading-logo {
                            0% {  opacity: 0.5;  }
                            100% {  opacity: 1;  }
                        }

                        h2{
                            color: #fff;
                            //font-size: pxtovw414( 30 );
                            //line-height: pxtovw414( 41 );

                            font-size: 30px;
                            line-height: 41px;
                            font-family: $font-family-bold;
                            transform: translateY( 150px );
                        }
                    }

                    .comp-kv__text-type{
                        width: 100%;
                        box-sizing: border-box;
                        padding: 0 pxtovw414( 40 );
                        margin-bottom: pxtovw414( 200 );
                        position: fixed;
                        display: none;

                        &.on{
                            display: block;
                        }

                        h2{
                            font-size: pxtovw414( 30 );
                            line-height: pxtovw414( 40 );
                            color: #fff;
                            font-family: $font-family-bold;
                            opacity: 0;
                            //transform: translateY( 150px );
                            transition: transform 0s;
                        }
                    }
                }

                .detail-kv__bg-bx{
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    display: none;

                    &.on{
                        display: block;
                    }

                    .detail-kv__bg{
                        width: 100%;
                        height: 100vh;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .comp-detail__kv{
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;
                .contents{
                    width: 100%;
                    min-width: $stage-contents-width;
                    margin: 0 auto;
                    .comp-kv__content{
                        .comp-kv__content-txt{
                            //width: 160px;
                            //height: 160px;

                            //width: 50px;
                            //height: 50px;

                            h2{
                                font-size: $font-size-m-2xl;
                                line-height: 41px;
                            }
                        }

                        .comp-kv__text-type{
                            padding: 0;
                            margin-bottom: 0;
                            h2{
                                width: 1200px;
                                padding-left: 170px;
                                box-sizing: border-box;
                                margin: 0 auto;
                                font-size: 40px;
                                line-height: 56px;
                            }
                        }
                    }

                    .detail-kv__bg-bx{
                        overflow: hidden;
                        .detail-kv__bg{
                        }
                    }
                }
            }
        }
    }
</style>