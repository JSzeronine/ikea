<template>
    <section class="comp-header">
        <!-- 가이드 선 삭제 : style="display:none;" -->
        <div class="guide-line" style="display: none;">
            <div><div></div></div>
        </div>
        <!-- // 가이드 선 삭제 : style="display:none;" -->

        <div class="inner-wrap">
            <div class="contents">
                <a class="comp-header__logo" :href="convertLink( `./` )">
                    <h1 class="blind">IKEA</h1>
                    <img :src="convertLink( `./img/common/logo.png` )" alt="">
                </a>

<!--                <a v-if="isLab" class="comp-header__btn-lab" :href="convertLink( `./` )">-->
<!--                    <video :src="convertLink(`./img/common/btn-lab.mp4`)" autoplay playsinline muted loop></video>-->
<!--                </a>-->

                <div v-if="isLab" class="comp-header__lab noselect" @mouseover="onMouseOver" @mouseout="onMouseOut" @mousedown="onMouseDown" @mouseup="onMouseUp" @mouseleave="onMouseLeave">
                    <div class="comp-header__lab-rolling">
                        <ul class="rolling-wrap" :class="isRollingOpen ? 'open' : ''">
                            <li v-for="( item, index ) in contents.banner" :key="index">
                                <a :href="item.link" v-html="item.text" ></a>
                            </li>
                        </ul>
                        <div class="deco-wrap">
                            <img class="deco-img" :src="convertLink( `./img/common/rolling_deco-img.png` )" alt="">
                        </div>

                    </div>


                    <a class="comp-header__lab-btn" href="javascript:;" @click="onClick" >
                         <video :src="convertLink(`./img/common/btn-lab.mp4`)" autoplay playsinline muted loop></video>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from "mobile-device-detect";
    import { gsap, Cubic, Power0, Power1, Power2 } from "gsap";

export default {
    name: "Header",
    data(){
        return{
            sY : -1,
            isRollingOpen:false,
            rollingTime:2,
            rollingTot:0,
            rollingIndex:0
        }
    },

    props : {
        isMain : {
            type : Boolean,
            default : false,
        },

        isLab : {
            type : Boolean,
            default: false,
        }
    },

    created() {
        this.contents = this.$t( "common.header" );
    },

    mounted() {
        window.addEventListener( "scroll", this.scrollListener );
        if(isMobile) window.addEventListener( "resize", this.onResize );

        if(this.isLab) this.setAutoRolling();
        this.scrollListener();
    },

    methods : {

        setAutoRolling(){
            this.rollingTot = this.$el.querySelectorAll(".rolling-wrap li").length;
            this.rollingIndex = 0;
        },



        onClick(){
            if(this.isRollingOpen){
                this.closeRolling();
            } else {
                this.openRolling();
            }
        },

        openRolling(){
            const rolling = this.$el.querySelector(".comp-header__lab")
            this.isRollingOpen = true;
            rolling.classList.add("open");
            this.autoRollingStart();
        },

        closeRolling(){
            const rolling = this.$el.querySelector(".comp-header__lab")
            this.isRollingOpen = false;
            rolling.classList.remove("open");
            this.autoRollingStop();
        },


        onMouseOver(){
            gsap.killTweensOf(this.closeRolling);
            if(!this.isRollingOpen) this.openRolling();

            // gsap.to(".comp-header__lab")
        },

        onMouseOut(){
            if(this.isRollingOpen)
                gsap.delayedCall(0.5, this.closeRolling);
        },


        onMouseDown(){
            if(!isMobile) return;
            const rolling = this.$el.querySelector(".comp-header__lab-btn")
            gsap.to(rolling, 0.1, {scale:0.85});
        },

        onMouseUp(){
            if(!isMobile) return;
            const rolling = this.$el.querySelector(".comp-header__lab-btn")
            gsap.to(rolling, 0.2, {scale:1});
        },

        onMouseLeave(){
            if(!isMobile) return;
            const rolling = this.$el.querySelector(".comp-header__lab-btn")
            gsap.to(rolling, 0.2, {scale:1});
        },




        autoRollingStart(){
            if(this.isRollingOpen) gsap.delayedCall(this.rollingTime, this.rollingBanner);
        },

        autoRollingStop(){
            gsap.killTweensOf(this.rollingBanner);
        },

        rollingBanner(){
            this.rollingIndex = (this.rollingIndex+1) % this.rollingTot;
            // const rolling = this.$el.querySelector(".rolling-wrap li");
            gsap.to(".comp-header .comp-header__lab .rolling-wrap li", 0.7, {y:(this.rollingIndex * -100)+"%", ease:Power2.easeInOut, onComplete:this.autoRollingStart});
            // this.autoRollingStart();
        },






        convertLink(link){
            let convert = link;
            if(!this.isMain){
                convert = "."+link;
            }
            return convert;
        },

        scrollListener( $e ){
            let scrollY = window.scrollY;

            if( this.sY < 0 ){
                this.sY = scrollY;
            }

            let logo = this.$el.querySelector( ".comp-header__logo" );
            if( scrollY > this.sY ){
                logo.classList.add( "on" );
            }else{
                logo.classList.remove( "on" );
            }

            this.sY = scrollY;

            if(this.isRollingOpen) this.onClick();

            if(scrollY < 10 && !this.isRollingOpen && this.isLab){
                this.onClick();
            }

        },

        onResize(){
            let vh = window.innerHeight * 0.01;
            const labBtn = this.$el.querySelector(".comp-header__lab")

            if( labBtn ){
                labBtn.style.top = (vh * 82) + "px";
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .comp-header{
        position: fixed;
        z-index: $z-index-header;
        width: 0;
        height: 100%;

        .guide-line{
            pointer-events: none;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;

            > div {
                width: 100%;
                height: 100vh;
                padding: 0 pxtovw414( 40 );
                box-sizing: border-box;
                box-shadow: rgba( 0, 0, 0, 0.1 ) 0px 0px 0px, rgba( 0, 0, 0, 0.1 ) 0px 0px 0px, rgba( 0, 0, 0, 0.1 ) 0px 0px 0px, rgba( 0, 0, 0, 0.1 ) 0px 0px 1px, rgba( 0, 0, 0, 0.1 ) 0px 0px 1px, rgba( 0, 0, 0, 0.1 ) 0px 0px 1px;
                border-top: none;
                border-bottom: none;

                > div {
                    width: 100%;
                    height: 100vh;
                    box-shadow: rgba( 0, 0, 0, 0.2 ) 0px 0px 0px, rgba( 0, 0, 0, 0.2 ) 0px 0px 0px, rgba( 0, 0, 0, 0.2 ) 0px 0px 0px, rgba( 0, 0, 0, 0.2 ) 0px 0px 1px, rgba( 0, 0, 0, 0.2 ) 0px 0px 1px, rgba( 0, 0, 0, 0.2 ) 0px 0px 1px;
                    border-top: none;
                    border-bottom: none;
                }
            }
        }

        .inner-wrap{
            .contents{
                position: absolute;
                left: 0;
                top: 0;
                width: 0px;
                height: 100%;
                .comp-header__logo{
                    position: absolute;
                    padding-top: pxtovw414( 31 );
                    padding-left: pxtovw414( 40 );
                    left: 0;
                    top: 0;
                    display: inline-block;
                    width: pxtovw414( 86 );
                    transition: transform 0.5s $vars_easeOutCubic;
                    transform: translateY( 0 );

                    &.on{
                        transition: transform 0.5s $vars_easeInCubic ;
                        transform: translateY( -110% );
                    }

                    img{
                        width: 100%;
                    }
                }

                .comp-header__lab {
                    position: absolute;
                    transition: top 0.3s;
                    top: calc(var(--vh, 1vh) * 82);
                    left: pxtovw414( 30 );


                    .comp-header__lab-btn{
                        overflow: hidden;
                        border-radius: 100%;

                        width: pxtovw414( 90 );
                        height: pxtovw414( 90 );
                        position: absolute;

                        box-shadow: 5px 10px 10px rgba(0,0,0,0.1);

                        video{
                            width: 100%;
                            height: 100%;
                        }
                        -webkit-tap-highlight-color: transparent;
                    }

                    .comp-header__lab-rolling {
                        overflow: hidden;
                        border-radius: pxtovw414( 90 );

                        width: pxtovw414( 354 );
                        height: pxtovw414( 90 );
                        position: absolute;

                        transform: translate3d(0,0,0);


                        .rolling-wrap {
                            transform: translate3d(-100%,0,0);
                            width: 100%; height: 100%;
                            border-radius: pxtovw414( 90 );
                            background-color: #2a6835;

                            li {
                                padding-left: pxtovw414( 116 );
                                box-sizing: border-box;
                                width: 100%; height: 100%;
                                display: flex;
                                align-items: center;

                                a {
                                    font-size: pxtovw414(14);
                                    font-weight: $font-weight-bold;
                                    color: white;
                                    line-height: pxtovw414(23);
                                    white-space: nowrap;
                                }
                            }

                            transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);


                        }

                        .deco-wrap {
                            position: absolute;
                            top: 0;
                            transform: translate3d(-100%,0,0);
                            width: 100%; height: 100%;
                            border-radius: pxtovw414( 90 );
                            overflow: hidden;
                            transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
                            pointer-events: none;
                            .deco-img {
                                position: absolute;

                                top:0; right: 0;
                                height: 100%;
                            }
                        }



                    }

                    &.open {
                        .comp-header__lab-rolling {

                            .rolling-wrap {
                                transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                                transform: translate3d(0,0,0);
                            }
                            .deco-wrap {
                                transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                                transform: translate3d(0,0,0);
                            }
                        }
                    }
                }

            }
        }
    }

    @media screen and (orientation: landscape) {
        .mobile {
            .comp-header {
                width: 100%;
                pointer-events: none;

                .inner-wrap {

                    .contents {
                        width: 100%;
                        height: 0px;

                        .comp-header__logo {
                            pointer-events: auto;
                            padding-top: pxtovw414(15);
                            padding-left: pxtovw414(30);
                            width: pxtovw414(43);
                            transform: translateY(0);
                            &.on{
                                transform: translateY( -110% );
                            }
                        }


                        .comp-header__lab {
                            width: 60px; height: 60px;
                            top: 30px;
                            bottom: auto;
                            left:auto; right: 30px;


                            .comp-header__lab-btn{
                                border-radius: 60px;
                                width: 60px;
                                height: 60px;
                            }

                            .comp-header__lab-rolling {
                                border-radius: 60px;
                                width: 294px;
                                height: 60px;
                                pointer-events: none;
                                transform: translate3d(-234px,0,0);

                                .rolling-wrap {
                                    transform: translate3d(100%,0,0);
                                    width: 100%; height: 100%;
                                    border-radius: 60px;
                                    background-color: #2a6835;

                                    li {
                                        padding-left: 86px;
                                        a {
                                            font-size: 14px;
                                            line-height: 23px;
                                        }
                                    }

                                }

                                .deco-wrap {
                                    transform: translate3d(100%,0,0);
                                    border-radius: 90px;
                                    .deco-img {
                                        position: absolute;
                                        transform: scaleX(-1);
                                        top:0; right: auto;
                                        left: 0;
                                        height: 100%;
                                    }
                                }


                            }


                            &.open {

                                .comp-header__lab-rolling {
                                    pointer-events: auto;
                                    .rolling-wrap {
                                        transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                                        transform: translate3d(0,0,0);
                                    }
                                    .deco-wrap {
                                        transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                                        transform: translate3d(0,0,0);
                                    }
                                }
                            }
                        }


                    }
                }
            }

        }

    }

    .desktop, .tablet{
        .comp-header{
            width: 100%;
            height: 0px;

            .guide-line{
                pointer-events: none;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                min-width: $stage-min-width;
                height: 100vh;

                > div {
                    width: 1200px;
                    height: 100vh;
                    margin: 0 auto;
                    padding: 0 170px;
                    box-sizing: border-box;

                    > div {
                        width: 100%;
                        height: 100vh;
                    }
                }
            }

            .inner-wrap{

                .contents{
                    width: 100%;
                    height: 0px;
                    .comp-header__logo{
                        width: 86px;
                        height: auto;
                        left: 0;
                        top: 0;
                        padding-top: 60px;
                        padding-left: 60px;

                        &.on{
                        }

                        img{

                        }
                    }

                    .comp-header__lab {
                        width: 90px; height: 90px;
                        top: 30px;
                        bottom: auto;
                        left:auto; right: 30px;


                        .comp-header__lab-btn{
                            border-radius: 90px;
                            width: 90px;
                            height: 90px;
                        }

                        .comp-header__lab-rolling {
                            border-radius: 90px;
                            width: 354px;
                            height: 90px;
                            pointer-events: none;
                            transform: translate3d(-264px,0,0);

                            .rolling-wrap {
                                transform: translate3d(100%,0,0);
                                width: 100%; height: 100%;
                                border-radius: pxtovw414( 90 );
                                background-color: #2a6835;

                                li {
                                    padding-left: 116px;
                                    a {
                                        font-size: 14px;
                                        line-height: 23px;
                                    }
                                }

                            }

                            .deco-wrap {
                                transform: translate3d(100%,0,0);
                                border-radius: 90px;
                                .deco-img {
                                    position: absolute;
                                    transform: scaleX(-1);
                                    top:0; right: auto;
                                    left: 0;
                                    height: 100%;
                                }
                            }


                        }


                        &.open {

                            .comp-header__lab-rolling {
                                pointer-events: auto;
                                .rolling-wrap {
                                    transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                                    transform: translate3d(0,0,0);
                                }
                                .deco-wrap {
                                    transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                                    transform: translate3d(0,0,0);
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    }
</style>