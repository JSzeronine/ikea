<template>
    <section class="detail-info">
        <div class="inner-wrap">
            <div class="contents">
                <div v-if="isYear" class="detail-info__year">
                    <slot name="year"></slot>
                    <div class="detail-info__year-txt">
                        <slot name="year-txt"></slot>
                    </div>
                </div>

                <div class="detail-info__point">
                    <slot name="point"></slot>
                </div>

                <div class="detail-info__txt">
                    <dl>
                        <dt><slot name="title"></slot></dt>
                        <dd class="detail-info__sub-title">
                            <slot name="sub_title"></slot>
                        </dd>
                        <dd><slot name="description"></slot></dd>
                    </dl>
                </div>

                <div class="detail-info__img-bx">
                    <slot name="img"></slot>
                </div>

                <div v-if="isEmbrace" class="detail-embrace">
                    <div class="detail-embrace__bx">
                        <ul>
                            <slot name="embrace"></slot>
                        </ul>
                    </div>
                </div>

                <div v-if="isTreeType" class="detail-info__type-tree">
                    <div class="detail-info__type-tree__txt" :style="{ backgroundImage : ( `url( ${ bgTreeType } )`)}">
                        <dl>
                            <dt><slot name="tree-percent"></slot></dt>
                            <dd><slot name="tree-description"></slot></dd>
                        </dl>
                    </div>
                </div>

                <div v-if="isGreenType">
                    <div class="detail-info__type-green">
                        <div class="detail-info__type-green__txt">
                            <dl>
                                <dt><slot name="green-percent"></slot></dt>
                                <dd><slot name="green-percent-description"></slot></dd>
                            </dl>
                        </div>
                    </div>

                    <div class="detail-info__txt">
                        <dl>
                            <dd><slot name="green-description"></slot></dd>
                        </dl>
                    </div>

                    <div class="detail-info__img-bx">
                        <slot name="green-img"></slot>
                    </div>
                </div>

                <div v-if="isWhy">
                    <div class="detail-info__type-why">
                        <ul>
                            <slot name="listWhy"></slot>
                        </ul>
                    </div>
                </div>

                <div v-if="isBuyBack">
                    <div class="detail-info__buyback">
                        <div class="detail-info__buyback-title">
                            <slot name="buyback-title"></slot>
                        </div>
                        <div class="detail-info__buyback-btn">
                            <a :href="linkBuyBack" target="_blank">
                                <slot name="txt_link"></slot>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup_bx">
            <ul>
                <slot name="popup-content"></slot>
            </ul>

            <div class="popup-bx__dimmed"></div>
        </div>
    </section>

</template>

<script>
import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventBus } from "@/components/common/EventBus";

export default {
    name: "comp-detail-info",
    props : {
        isYear : {
            type : Boolean,
            default: false,
        },

        yearValue : String,
        isEmbrace : {
            type : Boolean,
            default : false,
        },

        isTreeType : {
            type : Boolean,
            default : false,
        },

        isGreenType : {
            type : Boolean,
            default : false,
        },

        bgTreeType : {
            type : String,
            default : "../img/detail/icon-tree.png"
        },

        isWhy : {
            type : Boolean,
            default : false,
        },

        isBuyBack : {
            type : Boolean,
            default : false,
        },

        linkBuyBack : String,
    },

    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.loadComplete );
    },

    methods : {
        loadComplete(){
            this.initPopup();

            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let content = this.$el.querySelector( ".contents" );
            let txtBx = content.querySelector( ".detail-info__txt" );

            Tl.fromTo( txtBx.querySelector( "dl" ), {
                y:100,
                opacity: 0,
            }, {
                y:0,
                opacity:1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : txtBx,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });

            if( this.isYear ){
                let year = content.querySelector( ".detail-info__year" );
                let yearSpan = year.querySelector( "span" );
                let yearObj = {
                    value : 0,
                }

                Tl.fromTo( year, {

                }, {
                    scrollTrigger : {
                        trigger : year,
                        start : "top bottom",
                        end : "top bottom",
                        scrub : true,
                        onUpdate : ( $self ) => {
                            gsap.to( yearObj, 1, { value : this.yearValue * $self.progress, ease:Cubic.easeOut, onUpdate : () => {
                                yearSpan.innerHTML = parseInt( yearObj.value );
                            }})
                        }
                    }
                });
            }

            let imgBx = content.querySelector( ".detail-info__img-bx" );

            let imgBxContainer = imgBx.querySelectorAll( "div" );
            let imgs = imgBx.querySelectorAll( "img" );

            if( !imgs.length ){
                imgs = imgBx.querySelectorAll( "video" );
            }

            if( imgBxContainer.length ){
                Tl.fromTo( imgBxContainer, {
                    y:100,
                }, {
                    y:0,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        trigger : imgBx,
                        start : "top bottom",
                        end : "center center",
                        scrub : 0.5,
                    }
                });
            }

            if( imgs.length ){
                Tl.fromTo( imgs, {
                    scale : 1.2,
                }, {
                    scale : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        trigger : imgBx,
                        start : "top bottom",
                        end : "center center",
                        scrub : 0.5,
                    }
                });
            }

            if( this.isGreenType ){
                let greenBx = this.$el.querySelector( ".detail-info__type-green" );
                let greenTxtBx = greenBx.querySelector( ".detail-info__type-green__txt" );
                let greenTxt = greenTxtBx.querySelector( "dl" );

                Tl.fromTo( greenTxtBx, {
                    y:100,
                    opacity: 0,
                }, {
                    y:1,
                    opacity : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        trigger : greenBx,
                        start : "top bottom",
                        end : "center center",
                        scrub : 0.5
                    }
                });

                Tl.fromTo( greenTxt, {
                    scale : 1.2
                }, {
                    scale : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        trigger : greenBx,
                        start : "top bottom",
                        end : "center center",
                        scrub : 0.5
                    }
                });
            }
        },

        initPopup(){
            let btn = this.$el.querySelectorAll( ".detail-info__txt-btn" );

            let popupBx = this.$el.querySelector( ".popup_bx" );
            let popups = popupBx.querySelectorAll( "li" );
            let popupDimmed = popupBx.querySelector( ".popup-bx__dimmed" );

            Array.prototype.forEach.call( btn, ( $item, $index ) => {

                $item.addEventListener( "click", () => {
                    popupBx.classList.add( "on" );

                    let popup = popups[ $index ];
                    popup.classList.add( "on" );

                    let btnClose = popup.querySelector( ".popup-content__btn-close a" );

                    btnClose.addEventListener( "click", btnCloseClick );
                    popupDimmed.addEventListener( "click", btnCloseClick );

                    function btnCloseClick( $e ){
                        popupBx.classList.remove( "on" );
                        popup.classList.remove( "on" );

                        btnClose.removeEventListener( "click", btnCloseClick );
                        popupDimmed.removeEventListener( "click", btnCloseClick );
                    }
                });
            });
        }
    }
}
</script>

<style scoped lang="scss">

    .detail-info{
        margin: pxtovw414( 160 ) 0;
        .inner-wrap{
            .contents{
                .detail-info__year{
                    padding-left: pxtovw414( 40 );
                    box-sizing: border-box;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-end;
                    margin-bottom: pxtovw414( 50 );

                    .detail-info__year-value{
                        //font-size: 100px;
                        //width: 232px;

                        width: pxtovw414( 232 );
                        font-size: pxtovw414( 100 );

                        font-family: $font-family-bold;

                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                    }

                    .detail-info__year-txt{
                        font-size: pxtovw414( 30 );
                        line-height: pxtovw414( 50 );
                        //font-size: 30px;
                        //line-height: 52px;
                        font-family: $font-family-bold;
                        color: #fff;
                        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
                    }
                }

                .detail-info__point{
                    box-sizing: border-box;
                    padding-left: pxtovw414( 40 );
                    > span{
                        background-color: $color-set-green;
                        font-size: pxtovw414( 14 );
                        line-height: pxtovw414( 19 );
                        color: #fff;
                        box-sizing: border-box;
                        padding: pxtovw414( 7 ) pxtovw414( 10 ) pxtovw414( 8 );
                        display: inline-block;
                        margin-bottom: pxtovw414( 30 );
                        font-family: $font-family-bold;
                    }
                }

                .detail-info__txt{
                    padding: 0 pxtovw414( 40 ) 0;
                    margin-bottom: pxtovw414( 50 );
                    dl{
                        dt{
                            font-size: pxtovw414( 30 );
                            font-family: $font-family-bold;
                            line-height: pxtovw414( 41 );
                            margin-bottom: pxtovw414( 30 );
                        }
                        dd{
                            font-size: pxtovw414( 16 );
                            line-height: pxtovw414( 24 );

                            &.detail-info__sub-title{
                                margin-bottom: pxtovw414( 20 );
                                font-size: pxtovw414( 24 );
                                line-height: pxtovw414( 33 );
                                font-family: $font-family-bold;
                            }

                            span{
                                margin-bottom: pxtovw414( 20 );

                                &:last-child{
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                }

                .detail-info__img-bx{
                    > div{
                        font-size: 0;
                        box-sizing: border-box;
                        margin-bottom: 4px;
                        overflow: hidden;

                        img{
                            width: 100%;
                        }

                        video{
                            width: 100%;
                        }

                        &.comp-detail__pos-left{
                            //padding-right: pxtovw414( 40 );
                            margin-right: pxtovw414( 40 );
                        }

                        &.comp-detail__pos-right{
                            //padding-left: pxtovw414( 40 );
                            margin-left: pxtovw414( 40 );
                        }

                    }
                }

                .detail-embrace{
                    margin-top: pxtovw414( 80 );
                    .detail-embrace__bx{
                        padding: 0 pxtovw414( 40 );
                        box-sizing: border-box;
                    }
                }

                .detail-info__type-tree{
                    .detail-info__type-tree__txt{
                        width: pxtovw414( 313 );
                        margin: 0 auto;
                        height: pxtovw414( 305 );
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        dl{
                            dt{
                                display: flex;
                                justify-content: center;
                                align-items: flex-end;
                                font-size: pxtovw414( 98 );
                                line-height: pxtovw414( 114 );
                                font-family: $font-family-bold;
                                color: #fff;
                                span{
                                    font-size: pxtovw414( 70 );
                                    line-height: pxtovw414( 94 );
                                }
                            }

                            dd{
                                text-align: center;
                                font-size: pxtovw414( 18 );
                                line-height: pxtovw414( 24 );
                                font-family: $font-family-bold;
                                color: #fff;
                            }
                        }
                    }
                }

                .detail-info__type-green{
                    .detail-info__type-green__txt{
                        background-color: $color-set-green;
                        width: pxtovw414( 292 );
                        margin: 0 auto;
                        height: pxtovw414( 292 );
                        border-radius: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;

                        dl{
                            dt{
                                display: flex;
                                justify-content: center;
                                align-items: flex-end;
                                font-size: pxtovw414( 100 );
                                line-height: pxtovw414( 136 );
                                font-family: $font-family-bold;
                                color: #fff;
                                .unit{
                                    font-size: pxtovw414( 70 );
                                    line-height: pxtovw414( 110 );
                                }
                            }

                            dd{
                                text-align: center;
                                font-size: pxtovw414( 18 );
                                line-height: pxtovw414( 24 );
                                font-family: $font-family-bold;
                                color: #fff;
                                position: relative;
                                top: pxtovw414( -14 );
                            }
                        }
                    }
                }

                .detail-info__type-why{
                    box-sizing: border-box;
                    padding: 0 pxtovw414( 40 );
                    ul{

                    }
                }

                .detail-info__buyback{
                    margin-top: pxtovw414( 50 );
                    box-sizing: border-box;
                    padding-left: pxtovw414( 40 );

                    .detail-info__buyback-title{
                        font-size: pxtovw414( 25 );
                        line-height: pxtovw414( 34 );
                        font-family: $font-family-bold;
                        margin-bottom: pxtovw414( 30 );
                    }

                    .detail-info__buyback-btn{
                        a{
                            background-color: #111111;
                            color: #fff;
                            display: inline-block;
                            font-size: pxtovw414( 16 );
                            line-height: pxtovw414( 22 );
                            padding: 14px 30px;
                            overflow: hidden;
                            border-radius: 100px;
                            font-family: $font-family-bold;
                        }
                    }
                }
            }
        }

        .popup_bx{
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: $z-index-header + 100;
            justify-content: center;
            align-items: center;
            display: none;

            &.on{
                display: flex;
            }

            ul{
                position: relative;
                z-index: 11;
            }

            .popup-bx__dimmed{
                position: absolute;
                z-index: 10;
                width: 100%;
                height: 100%;
                background-color: rgba( 0, 0, 0, 0.1 );
            }
        }
    }

    .desktop, .tablet{
        .detail-info{
            margin: 220px 0;
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;
                .contents{
                    width: 1200px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    padding-left: 170px;
                    .detail-info__year{
                        padding-left: 0;
                        margin-bottom: 60px;
                        .detail-info__year-value{
                            width: 488px;
                            font-size: 210px;
                        }

                        .detail-info__year-txt{
                            font-size: 44px;
                            line-height: 80px;
                        }
                    }

                    .detail-info__point{
                        padding: 0;
                        > span{
                            font-size: $font-size-xs;
                            line-height: 24px;
                            padding: 10px 20px;
                            margin-bottom: 0;
                        }
                    }

                    .detail-info__txt{
                        padding: 0;
                        margin-bottom: 80px;
                        dl{
                            dt{
                                font-size: $font-size-xl;
                                line-height: 56px;
                                margin: 30px 0;
                            }

                            dd{
                                width: 860px;
                                font-size: $font-size-xs;
                                line-height: 28px;

                                &.detail-info__sub-title{
                                    font-size: $font-size-m-lg;
                                    line-height: 30px;
                                    margin-bottom: 20px;
                                }
                            }
                        }
                    }

                    .detail-info__img-bx{
                        > div{
                            margin-bottom: 10px;
                            img{
                            }

                            video{
                            }

                            &.comp-detail__pos-left{
                                margin-right: 0;
                                position: relative;
                                left: -170px;
                            }

                            &.comp-detail__pos-right{
                                margin-left: 0;
                            }
                        }
                    }

                    .detail-embrace{
                        margin-top: 127px;
                        .detail-embrace__bx{
                            padding: 0;
                            ul{
                                display: flex;
                            }
                        }
                    }

                    .detail-info__type-tree{
                        padding-right: 170px;
                        box-sizing: border-box;
                        .detail-info__type-tree__txt{
                            width: 430px;
                            height: 420px;
                            dl{
                                dt{
                                    font-size: 130px;
                                    line-height: 177px;
                                    span{
                                        font-size: 90px;
                                        line-height: 145px;
                                    }
                                }

                                dd{
                                    font-size: 18px;
                                    line-height: 24px;
                                }
                            }
                        }
                    }

                    .detail-info__type-green{
                        box-sizing: border-box;
                        .detail-info__type-green__txt{
                            width: 350px;
                            height: 350px;
                            dl{
                                dt{
                                    font-size: 130px;
                                    line-height: 177px;
                                    .unit{
                                        font-size: 60px;
                                        line-height: 122px;
                                    }
                                }

                                dd{
                                    position: relative;
                                    top: -18px;
                                    font-size: 18px;
                                    line-height: 24px;
                                }
                            }
                        }
                    }

                    .detail-info__type-why{
                        padding: 0;
                        ul{
                            display: flex;
                            justify-content: flex-start;
                        }
                    }

                    .detail-info__buyback{
                        margin-top: 80px;
                        padding: 0;
                        .detail-info__buyback-title{
                            font-size: $font-size-xl;
                            line-height: 56px;
                            margin-bottom: 30px;
                        }

                        .detail-info__buyback-btn{
                            a{
                                font-size: $font-size-xs;
                                line-height: 24px;
                                padding: 18px 30px;
                            }
                        }
                    }
                }
            }

            .popup_bx{
                &.on{

                }

                ul{

                }
            }
        }
    }

    /* 영문 */
	.en {
		.detail-info {
			.inner-wrap {
				.contents {
					.detail-info__year {
						justify-content: flex-end;
						flex-direction: row-reverse;

						.detail-info__year-txt {
							margin-right: pxtovw414(12);
						}
					}
				}
			}
		}

		&.desktop, .tablet {
			.detail-info {
				.inner-wrap {
					.contents {
						.detail-info__year {
							.detail-info__year-txt {
								margin-right: 15px;
							}
						}
					}
				}
			}
		}
	}

</style>