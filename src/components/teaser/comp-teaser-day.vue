<template>
    <!-- day-wrap -->
    <section class="day-wrap">
        <div class="comp-header__sound_wrap">
            <a href="javascript:;" class="comp-header__sound" @click="onClickSound">
                <h1 class="blind">sound icon</h1>
                <img v-if="soundPlay" :src="`../img/teaser/teaser_header_sound_icon_off.png`" alt="">
                <img v-else :src="`../img/teaser/teaser_header_sound_icon_on.png`" alt="">
            </a>
        </div>

        <!-- bg-wrap : 모바일용 -->
        <div class="bg-wrap" v-if="isMobile">
            <div class="img-mb bg-m">
                <div class="bg-visual">
                    <video class="video-play-mb video-play img-mb" :src="contents.video_mb" type="video/mp4" autoplay loop playsinline muted></video>
                </div>
                <div class="d-day-m-wrap">
                    <div class="day-circle">
                        <h2>D-{{openDays}}</h2>
                    </div>
                    <div class="day-bottom">
                        <ul>
                            <li>
                                <p>{{openHour}}</p>
                                <span>HOUR</span>
                            </li>
                            <li>
                                <p>{{openMin}}</p>
                                <span>MIN</span>
                            </li>
                            <li>
                                <p>{{openSec}}</p>
                                <span>SEC</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--   </div>-->
        </div>
        <!-- //bg-wrap : 모바일용 -->

        <!-- title-wrap -->
        <section class="title-wrap">
            <div class="inner-wrap">
                <div class="day-top">
                    <div class="day-title">
                        <p v-html="contents.title"></p>
                        <span>{{ openDate }}</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- //title-wrap -->

        <!-- time-wrap -->
        <section class="time-wrap" v-if="!isMobile">
            <!-- bg-wrap  : pc 용 -->
            <div class="bg-wrap">
                <div class="img-pc bg-pc">
                    <div class="bg-visual">
                        <video class="video-play-pc video-play img-pc" :src="contents.video_pc" type="video/mp4" autoplay loop playsinline muted></video>
                    </div>
                    <div class="d-day-pc-wrap">
                        <div class="day-circle">
                            <h2>D-{{openDays}}</h2>
                        </div>
                        <div class="day-bottom">
                            <ul>
                                <li>
                                    <p>{{openHour}}</p>
                                    <span>HOUR</span>
                                </li>
                                <li>
                                    <p>{{openMin}}</p>
                                    <span>MIN</span>
                                </li>
                                <li>
                                    <p>{{openSec}}</p>
                                    <span>SEC</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //bg-wrap  : pc 용 -->

        </section>

        <div class="arrow-btn">
            <div class="mouse-icon">
                <img :src="'../img/common/scroll-mouse.png'" alt="화살표 버튼">
            </div>
            <a href="javascript:;">
                <img :src="'../img/teaser/teaser_arrow_btn.png'" alt="화살표 버튼">
                <img :src="'../img/teaser/teaser_arrow_btn.png'" alt="화살표 버튼">
            </a>
        </div>
        <!--//time-wrap -->

    </section>
    <!--//day-wrap -->
</template>

<script>
import * as moment from 'moment';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import { isMobile, isChrome, isIE } from "mobile-device-detect";

export default {
    name: "comp-teaser-day.vue",
    data() {
        return {
            contents : null,
            isMobile:isMobile,

            dday:"2020-11-05", //오픈날짜
            ddayTime:"00:00",
            openDate: null,
            openDays: null,
            openHour: null,
            openMin: null,
            openSec: null,
            isMuted: true, //사운드 소리
            soundPlay : true, //사운드 이미지,
            video : null,
        }
    },
    watch: {
        'isDayShow'(to, from) {
            if (to) {
                gsap.to(this.$el, 0.2, {opacity:1});
            }
        }
    },

    created() {
        this.contents = this.$t( "contents.day" );
    },

    props:["isDayShow"],

    mounted() {
        this.updateDate();
        this.dayCount();

        gsap.registerPlugin( ScrollTrigger );

            this.video = ( isMobile ) ? this.$el.querySelector( ".video-play-mb" ) : this.$el.querySelector( ".video-play-pc" )

        let TL = gsap.timeline({});

        TL.fromTo(this.$el,{

        }, {
            scrollTrigger : {
                trigger : this.$el,
                start: 'top bottom',
                end : 'bottom top',
                onEnter: () => this.playVideo(),
                onLeave: () => this.stopVideo(),
                // onLeaveBack : () => this.stopVideo(video),
                onEnterBack : () => this.playVideo()
            }
        })
    },

    methods: {
        onClickSound : function () {
            this.isMuted = !this.isMuted; //사운드 소리 on/off
            this.video.muted = this.isMuted;
            this.soundPlay = !this.soundPlay; //사운드 이미지 변경
        },

        soundOff(){
            this.isMuted = true;
            this.video.muted = this.isMuted;
            this.soundPlay = true;
        },

        playVideo() {
            if(!this.video) return;
            this.video.play();
            this.video.style.display = "block";
        },

        stopVideo() {
            if(!this.video) return;
            this.video.style.display = "none";

            this.soundOff();

            const isPlaying = this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > 2;

            if (isPlaying) {
                this.video.pause();
            }
        },

        updateDate: function () {
            this.openDate = moment(this.dday).format('YYYY.MM.DD');
        },

        dayCount: function () {
            const momentDay = this.dday + " " + this.ddayTime;
            const openDay = moment(momentDay);
            const currentDay = moment(Date.now());
            const diff = openDay.diff(currentDay);
            const duration = moment.duration(diff);

            const diffTime = {
                days: Math.floor(duration.asDays() + 1),
                hour: duration.hours(),
                minute: duration.minutes(),
                second: duration.seconds()
            };

            this.openDays = diffTime.days;
            this.openHour = diffTime.hour;
            this.openMin = diffTime.minute;
            this.openSec = diffTime.second;

            setTimeout(() => this.dayCount(diffTime.second), 1 * 1000);
        },
    }
}



</script>

<style scoped lang="scss">
.day-wrap {
    opacity: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    height: calc(var(--vh, 1vh) * 100);

    .comp-header__sound_wrap {
        position: absolute;
        top: pxtovw414(6);
        right: pxtovw414(10);
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        .comp-header__sound {
            display: inline-block;
            width: pxtovw414( 30 );
            height: pxtovw414( 26 );
            padding: pxtovw414(30);
            -webkit-tap-highlight-color: transparent;
            img{
                width: 100%;
            }

        }
    }

    .bg-wrap {
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 100%;
        height: 100vh;

        .bg-m {
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            /*width: 100%;
            height: 100%;
            background: no-repeat center center;
            background-size: cover;*/

            .bg-visual {
                width: 100%;
                height: 100vh;
                background: no-repeat center center;
                background-size: cover;

                /* 동영상 dim 처리 */
                &::after {
                    position: absolute;
                    left: 0;
                    top: 0;
                    content: '';
                    width: 100%;
                    height: 100%;
                    font-size: 0;
                    background-color: rgba(0,0,0,0.2);

                }

                video {
                    object-fit: cover;
                    width: 100%; height: 100%;
                }
            }

            .d-day-m-wrap {
                position: absolute;
                top: 15vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                height: 100vh;
                transition: top 0.7s $vars_easeInOutCubic;

                &.on{
                    top: 0;
                }

                .day-circle {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: pxtovw414(120);
                    height: pxtovw414(120);
                    margin-bottom: pxtovw414(50);
                    border-radius: 50%;
                    background-size: pxtovw414(120) pxtovw414(120);
                    background-color: #fff;
                    color: #000;
                    mix-blend-mode: screen;
                    transform: translate3d(0,0,0);
                    h2 {
                        font-size: pxtovw414(40);
                        font-family: $font-family-bold;
                    }
                }
                .day-bottom {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: calc(var(--vh, 1vh) * 12);
                    /*margin-bottom: pxtovw414(105);*/

                    ul {
                        display: flex;
                        justify-content: space-between;
                        width: pxtovw414( 330 );
                        color: #fff;

                        li {
                            width: pxtovw414( 110 );
                            text-align: center;

                            &:nth-child( 2 ) {
                                border-right: 1px solid #fff;
                                border-left: 1px solid #fff;
                            }

                            p {
                                font-size: pxtovw414(40);
                                line-height: pxtovw414(55);
                                font-family: $font-family-bold;
                            }

                            span {
                                font-size: pxtovw414(14);
                                line-height: pxtovw414(19);
                                font-family: $font-family-bold;
                            }
                        }
                    }
                }
            }
        }
    }

    .title-wrap {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 50vh;
        z-index: 1;
        position: relative;
        transform: translateY( -15vh );
        transition: transform 0.7s $vars_easeInOutCubic;
        &.on{
            transform: translateY( 0 );
        }

        .inner-wrap {
            position: relative;
            z-index: 2;
            //margin-top: pxtovw414(190);
            margin-top: calc(var(--vh, 1vh) * 17);
            box-sizing: border-box;

            .day-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;

                .day-title {
                    width: 100%;
                    text-align: center;
                    color: #fff;

                    p {
                        position: relative;
                        margin-bottom: pxtovw414(10);
                        padding-bottom: pxtovw414(20);
                        font-size: pxtovw414(24);
                        line-height: pxtovw414(33);
                        text-align: center;
                        font-family: $font-family-bold;

                        &::after {
                            position: absolute;
                            left: 50%;
                            bottom: 0;
                            content: '';
                            width: pxtovw414(195);
                            height: 1px;
                            margin-left: pxtovw414(-98);
                            background-color: #fff;
                        }
                    }

                    span {
                        display: block;
                        font-size: pxtovw414(46);
                        line-height: pxtovw414(62);
                        font-family: $font-family-bold;
                    }
                }
            }
        }
    }

    .time-wrap {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 50vh;

        .bg-wrap {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            width: 100%;
            height: 100%;

            .bg-pc {
                display: none;
            }
        }
    }

    .arrow-btn {
        position: absolute;
        bottom: pxtovw414(40);
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
}

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


@media screen and (orientation: landscape) {
    .mobile {
        .day-wrap {
            height: calc(var(--vh, 1vh) * 150);
            .comp-header__sound_wrap {
                top: pxtovw414(3);
                right: pxtovw414(5);
                .comp-header__sound {
                    width: pxtovw414( 15 );
                    height: pxtovw414( 13 );
                    padding: pxtovw414(15);
                    img{
                    }

                }
            }

            .bg-wrap {
                height: 150vh;

                .bg-m {
                    .bg-visual {
                        height: 150vh;
                        /* 동영상 dim 처리 */
                        &::after {

                        }

                        video {
                        }
                    }

                    .d-day-m-wrap {
                        /*top: 15vh;*/
                        height: 140vh;
                        &.on{
                        }

                        .day-circle {
                            width: pxtovw414(60);
                            height: pxtovw414(60);
                            margin-bottom: pxtovw414(10);
                            border-radius: 50%;
                            background-size: pxtovw414(60) pxtovw414(60);
                            h2 {
                                font-size: pxtovw414(18);
                            }
                        }
                        .day-bottom {
                            margin-bottom: calc(var(--vh, 1vh) * 12);
                            ul {
                                width: pxtovw414( 165 );
                                li {
                                    width: pxtovw414( 155 );
                                    &:nth-child( 2 ) {
                                    }

                                    p {
                                        font-size: pxtovw414(18);
                                        line-height: pxtovw414(26);
                                    }

                                    span {
                                        font-size: pxtovw414(7);
                                        line-height: pxtovw414(10);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .title-wrap {
                height: 50vh;
                transform: translateY( -15vh );
                &.on{
                }

                .inner-wrap {
                    margin-top: calc(var(--vh, 1vh) * 30);
                    .day-top {
                        .day-title {
                            p {
                                margin-bottom: pxtovw414(5);
                                padding-bottom: pxtovw414(10);
                                font-size: pxtovw414(12);
                                line-height: pxtovw414(17);

                                &::after {
                                    width: pxtovw414(98);
                                    margin-left: pxtovw414(-49);
                                }
                            }

                            span {
                                font-size: pxtovw414(20);
                                line-height: pxtovw414(25);
                            }
                        }
                    }
                }
            }

            .time-wrap {
                height: 50vh;

                .bg-wrap {
                    .bg-pc {
                    }
                }
            }

            .arrow-btn {
                bottom: pxtovw414(10);
                width: pxtovw414(14);
                height: pxtovw414(8);

                img {
                    &:nth-child(2) {
                    }
                }


            }
        }
    }
}


.desktop, .tablet {
    .day-wrap {
        flex-direction: initial;
        width: 100%;
        min-width: $stage-min-width;
        height: 100vh;

        .comp-header__sound_wrap {
            top: 40px;
            right: 40px;
            .comp-header__sound {
                width: 30px;
                height: 26px;
                padding: 20px;
            }
        }


        .bg-wrap {
            .bg-m {
                display: none;
            }
        }

        .title-wrap {
            align-items: center;
            width: 40%;
            height: 100vh;
            opacity: 1;
            transform: translateY( 0 );

            .inner-wrap {
                margin: 0 auto;

                .day-top {
                    .day-title {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 340px;
                        color: #000;

                        p {
                            margin-bottom: 20px;
                            padding-bottom: 30px;
                            font-size: $font-size-me;
                            line-height: 40px;

                            &::after {
                                width: 230px;
                                margin-left: -114px;
                                background-color: #000;
                            }
                        }

                        span {
                            font-size: $font-size-xl;
                            line-height: 55px;
                        }
                    }
                }
            }

        }

        .time-wrap {
            align-items: center;
            width: 60%;
            height: 100vh;

            .bg-wrap {
                height: 100vh;

                .bg-pc {
                    display: block;
                    min-width: 100%;
                    min-height: 100%;
                    width: auto;
                    height: auto;
                    .bg-visual {
                        width: 100%;
                        height: 100vh;
                        background: no-repeat center center;
                        background-size: cover;

                        /* 동영상 dim 처리 */
                        &::after {
                            position: absolute;
                            left: 0;
                            top: 0;
                            content: '';
                            width: 100%;
                            height: 100%;
                            font-size: 0;
                            background-color: rgba(0,0,0,0.2);

                        }

                        video {
                            object-fit: cover;
                            width: 100%; height: 100%;
                        }
                    }

                    .d-day-pc-wrap {
                        position: absolute;
                        top: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        width: 100%;
                        height: 100vh;

                        .day-circle {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 144px;
                            height: 144px;
                            margin: 0 auto;
                            margin-bottom: 60px;
                            border-radius: 50%;
                            background-color: #fff;
                            color: #000;
                            mix-blend-mode: screen;
                            h2 {
                                font-size: $font-size-xl;
                                line-height: 55px;
                                font-family: $font-family-bold;
                            }
                        }


                        .day-bottom {
                            margin-bottom: 0;

                            ul {
                                display: flex;
                                justify-content: space-between;
                                width: 330px;
                                color: #fff;

                                li {
                                    text-align: center;
                                    width: 110px;

                                    &:nth-child(2) {
                                        border-right: 1px solid #fff;
                                        border-left: 1px solid #fff;
                                    }

                                    p {
                                        font-size: $font-size-xl;
                                        line-height: 55px;
                                        font-family: $font-family-bold;
                                    }

                                    span {
                                        display: block;
                                        font-size: $font-size-2xs;
                                        line-height: 19px;
                                        font-family: $font-family-bold;
                                    }
                                }
                            }
                        }
                    }
                }
            }


        }

        .arrow-btn {
            bottom: 60px;
            width: 18px;
            height: 15px;
            left: 70%;

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
    }
}

</style>