<template>
    <div v-if="isIE">
        <VersionUpdate />
    </div>
    <div v-else id="app">
        <TeaserHeader :isLab="false" />

        <div class="content">
            <TeaserKv class="teaser-kv" v-if="isKv"></TeaserKv>

            <TeaserDay :isDayShow="isDay"></TeaserDay>

            <div class="teaser-info">
                <div class="teaser-info__bx">
                    <div class="teaser-info__bx-content">
                        <TeaserHorizonText class="teaser-info__txt"></TeaserHorizonText>
                        <TeaserHorizonVideo class="teaser-info__video"></TeaserHorizonVideo>
                    </div>
                </div>

                <ul class="teaser-info__guide">
                    <li class="teaser-info__guide-out"></li>
                    <li class="teaser-info__guide-in"></li>
                    <li class="teaser-info__guide-out"></li>
                    <li class="teaser-info__guide-in"></li>
                    <li class="teaser-info__guide-out"></li>
                    <li class="teaser-info__guide-in"></li>
                    <li></li>
                </ul>
            </div>

            <TeaserFuture></TeaserFuture>
            <TeaserPlay></TeaserPlay>
        </div>

        <TeaserFooter />
    </div>
</template>

<script>
import VersionUpdate from "@/components/main/VersionUpdate";
    
import TeaserHeader from "@/components/common/comp-teaser-header";
import TeaserKv from "@/components/teaser/comp-teaser-intro";
import TeaserDay from "@/components/teaser/comp-teaser-day";
import TeaserHorizonText from "@/components/teaser/comp-teaser-horizon-text";
import TeaserHorizonVideo from "@/components/teaser/comp-teaser-horizon-video";
import TeaserFuture from "@/components/teaser/comp-teaser-future";
import TeaserPlay from "@/components/teaser/comp-teaser-play";


// import TeaserFooter from "@/components/common/comp-teaser-footer";
import TeaserFooter from "@/components/common/comp-footer";

import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Cubic, Back } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: 'Teaser',
    data(){
        return{
            isKv : true,
            isDay:false,
            isIE : isIE,
        }
    },

    components: {
        VersionUpdate,

        TeaserHeader,
        TeaserKv,
        TeaserDay,
        TeaserHorizonText,
        TeaserHorizonVideo,
        TeaserFuture,
        TeaserPlay,

        TeaserFooter
    },

    created() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    },

    mounted() {
        if( this.isIE ) return;

        this.showKv();

        // this.isKv = false;
        // document.querySelector( "html" ).classList.remove( "init-scroll" );

        gsap.registerPlugin( ScrollTrigger );

        if( isMobile ){
            this.showMobile();
        }

        const TL = gsap.timeline({});

        let gs = this.$el.querySelectorAll( ".teaser-info__guide li" );

        let t0 = this.$el.querySelector( ".text-01" );
        let t1 = this.$el.querySelector( ".text-02" );
        let t2 = this.$el.querySelector( ".text-03" );
        let t3 = this.$el.querySelector( ".text-04" );

        let v0Container = this.$el.querySelector( ".video-01" );
        let v1Container = this.$el.querySelector( ".video-02" );

        let video0 = ( isMobile ) ? v0Container.querySelector( ".img-mb" ) : v0Container.querySelector( ".img-pc" );
        let video1 = ( isMobile ) ? v1Container.querySelector( ".img-mb" ) : v1Container.querySelector( ".img-pc" );

        TL.fromTo( t0, {

        }, {
            scrollTrigger : {
                trigger : this.$el.querySelector( ".teaser-info" ),
                start : "top center",
                end : "top 49%",
                onEnter : () => {
                    video0.currentTime = 0;
                    video0.play();
                },

                onEnterBack : () => {
                    video0.pause();
                    video0.currentTime = 0;
                }
            }
        });

        TL.fromTo( t0, {
            y:0,
            opacity : 1,
        }, {
            y: -50,
            opacity : 0,
            ease:Cubic.easeIn,
            scrollTrigger : {
                trigger : gs[ 0 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
                onEnter : () => {
                    // video0.play();
                    // console.log( "start" );
                }
            }
        });

        TL.fromTo( t1, {
            y:50,
            opacity : 0,
        }, {
            y: 0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : gs[ 1 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t1, {
            y:0,
            opacity : 1,
        }, {
            y: -50,
            opacity : 0,
            ease:Cubic.easeIn,
            scrollTrigger : {
                trigger : gs[ 2 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t2, {
            y:50,
            opacity : 0,
        }, {
            y: 0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : gs[ 3 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t2, {
            y:0,
            opacity : 1,
        }, {
            y: -50,
            opacity : 0,
            ease:Cubic.easeIn,
            scrollTrigger : {
                trigger : gs[ 4 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t3, {
            y:50,
            opacity : 0,
        }, {
            y: 0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : gs[ 5 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
                onEnter : () => {
                    video1.play();

                    gsap.killTweensOf( v1Container );
                    gsap.to( v1Container, 0.5, { opacity:1, display:"block", onComplete:() => {
                            video0.pause();
                            video0.currentTime = 0;
                        }});
                },

                onLeaveBack : () => {
                    video0.pause();
                    video0.currentTime = 0;
                    video0.play();

                    gsap.killTweensOf( v1Container );
                    gsap.to( v1Container, 0.5, { opacity:0, display:"none", onComplete: () => {
                            video1.pause();
                            video1.currentTime = 0;
                        }});
                }
            }
        });

        gsap.set( t1, { opacity : 0, y:-50 });
        gsap.set( t2, { opacity : 0, y:-50  });
        gsap.set( t3, { opacity : 0, y:-50  });
    },

    methods : {
        showMobile(){

        },

        showKv(){
            let teaserKv = this.$el.querySelector( ".teaser-kv__wrap" );
            let container = teaserKv.querySelector( ".teaser-kv__content" );

            let intro = teaserKv.querySelector( ".teaser-kv__intro" );
            let content = intro.querySelector( "ul" );

            let scale = ( isMobile ) ? "200vh" : "200vw";

            const _this = this;

            const TL = gsap.timeline({});

            TL
                .to( container, 0.3, { })
                .from( container, { duration:0.6, scale:50/content.offsetWidth, ease:Back.easeOut })
                .to( content, 1, { y:"-33.3333%", ease:Cubic.easeInOut }, "< 0.75" )
                .to( content, 1, { y:"-66.6666%", ease:Cubic.easeInOut, onComplete:function(){
                        _this.isDay = true;
                    } }, "> 0.25" )


                .to( content, 1, { y:"-100%", ease:Cubic.easeInOut }, "> 0.25" )
                .to( intro, 1, { opacity:0, display:"none", ease:Cubic.easeInOut, onComplete:() => {}}, "< 0.25" )
                .to( container, 1, { width:scale, height:scale, ease:Cubic.easeInOut, onComplete:() => {
                    this.isKv = false;

                    document.querySelector( "html" ).classList.remove( "init-scroll" );
                }}, "< 0.5" )
                .to( container, 1, { onComplete:() => {
                        if( isMobile ){

                            let tl = this.$el.querySelector( ".day-wrap .title-wrap" )
                            let dday = this.$el.querySelector( ".day-wrap .d-day-m-wrap" );

                            dday.classList.add( "on" );
                            tl.classList.add( "on" );
                        }
                    }}, "< -1" );
        }
    },
}
</script>

<style lang="scss" scoped>
#app{
    .content{
        position: relative;
        .teaser-info{
            position: relative;
            margin-top: -1px;
            .teaser-info__bx{
                left: 0;
                top: 0;
                position: sticky;
                position: -webkit-sticky;
                width: 100%;
                height: 100vh;
                .teaser-info__bx-content{
                    position: relative;
                    .teaser-info__txt{
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                    }

                    .teaser-info__video{
                        position: relative;
                    }
                }
            }

            .teaser-info__guide{
                left: 0;
                top: 0;
                position: relative;
                width: 0%;
                margin-top: -80vh;
                li{
                    width: 0%;
                    height: 50vh;
                    margin-bottom: 20vh;
                    //border: 1px solid #000;
                    //background-color: rgba( 0, 0, 0, 0.5 );

                    &.teaser-info__guide-in{

                    }

                    &.teaser-info__guide-out{
                        margin-bottom: 5vh;
                    }

                    &:last-child{
                        height: 100vh;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}

.mobile{
    #app{
        .content{
            position: relative;
            .teaser-info{
                width: 100%;
                position: relative;
                .teaser-info__bx{
                    position: sticky;
                    position: -webkit-sticky;
                    width: 100%;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    .teaser-info__bx-content{
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        .teaser-info__txt{

                        }

                        .teaser-info__video{

                        }
                    }
                }

                .teaser-info__guide{
                    li{

                    }
                }
            }
        }
    }

}


@media screen and (orientation: landscape) {
    .mobile{
        #app{
            .content{
                .teaser-info{
                    .teaser-info__bx{
                        .teaser-info__bx-content{
                            position: relative;
                            width: 100%;
                            height: 100vh;
                            .teaser-info__txt{

                            }

                            .teaser-info__video{

                            }
                        }
                    }

                    .teaser-info__guide{
                        li{

                        }
                    }
                }
            }
        }

    }
}
</style>
