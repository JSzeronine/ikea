<template>
    <section class="better-living-wrap">
        <!-- inner-wrap -->
        <div class="inner-wrap">
            <!-- living-sort -->
            <div class="living-sort">
                <!-- app-text-wrap -->
                <div class="app-text-wrap">
                    <div class="app-logo-tit">
                        <div class="app-logo-img">
                            <img :src="`./img/main/betterApp_ikea_logo.png`" alt="Better living app">
                        </div>
                        <p>Better living app</p>
                    </div>

                    <div class="app-text">
                        <p class="text-tit">
                            <span v-html="language.title"></span>
                        </p>
                        <p class="text-con">
                            <span v-html="language.description"></span>
                        </p>
                    </div>
                </div>
                <!-- //app-text-wrap -->

                <!-- m-play-store : 모바일용 -->
                <div class="m-play-store">
                    <ul>
                        <li>
                            <a :href="app_google" class="google-store" target="_blank">
                                <img :src="`./img/main/betterApp_google_store.png`" alt="구글 플레이 스토어">
                            </a>
                        </li>
                        <li>
                            <a :href="app_ios" class="apple-store" target="_blank">
                                <img :src="`./img/main/betterApp_apple_store.png`" alt="애플 스토어">
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- //m-play-store : 모바일용 -->

                <!-- habit-list-wrap -->
                <div class="habit-list-wrap"> <!-- container -->
                    <div class="habit-img">
                        <transition-group name="fade" tag="ul">
                            <li v-show="slideIndex == 0" key="0"><img :src="`./img/main/betterApp_habit_01.jpg`" alt="조명끄기"></li>
                            <li v-show="slideIndex == 1" key="1"><img :src="`./img/main/betterApp_habit_02.jpg`" alt="물병 채우기"></li>
                            <li v-show="slideIndex == 2" key="2"><img :src="`./img/main/betterApp_habit_03.jpg`" alt="샤워시간 줄이기"></li>
                            <li v-show="slideIndex == 3" key="3"><img :src="`./img/main/betterApp_habit_04.jpg`" alt="하루동안 채식하기"></li>
                            <li v-show="slideIndex == 4" key="4"><img :src="`./img/main/betterApp_habit_05.jpg`" alt="재활용하기"></li>
                        </transition-group>
                    </div>
                    <div class="habit-text">
                        <transition-group name="down" tag="ul">
                            <li v-show="slideIndex == 0" key="5"><p><span v-html="language.detail[0]"></span></p></li>
                            <li v-show="slideIndex == 1" key="6"><p><span v-html="language.detail[1]"></span></p></li>
                            <li v-show="slideIndex == 2" key="7"><p><span v-html="language.detail[2]"></span></p></li>
                            <li v-show="slideIndex == 3" key="8"><p><span v-html="language.detail[3]"></span></p></li>
                            <li v-show="slideIndex == 4" key="9"><p><span v-html="language.detail[4]"></span></p></li>
                        </transition-group>
                    </div>
                </div>
                <!-- //habit-list-wrap -->
            </div>
            <!-- //living-sort -->

            <!-- pc-play-store : pc용 -->
            <div class="pc-play-store">
                <ul>
                    <li>
                        <a :href="app_google" class="google-store" target="_blank">
                            <img :src="`./img/main/betterApp_google_store.png`" alt="구글 플레이 스토어">
                        </a>
                    </li>
                    <li>
                        <a :href="app_ios" class="apple-store" target="_blank">
                            <img :src="`./img/main/betterApp_apple_store.png`" alt="애플 스토어">
                        </a>
                    </li>
                </ul>
            </div>
            <!-- //pc-play-store : pc용 -->
        </div>
        <!-- //inner-wrap -->
    </section>
</template>

<script>
    export default {
        name: "BetterLivingApp",
        data() {
            return {
                language: null,
                slideIndex : 0,
                app_ios:"https://apps.apple.com/us/app/ikea-better-living/id1451701794?ls=1",
                app_google:"https://play.google.com/store/apps/details?id=com.ikea.pbj.bl"
            }
        },

        created() {
            this.language = this.$t( "contents.betterliving_app" );
        },

        mounted() {
            this.controlSlide();
        },

        methods: {


            controlSlide(){

                const slides = this.$el.querySelectorAll('.habit-list-wrap .habit-img ul li');
                let totalSlides = slides.length; //아이템의 갯수

                this.slideIndex = (this.slideIndex+1) % totalSlides;

                setTimeout(this.controlSlide, 1800);
            }



        }
    }
</script>

<style scoped lang="scss">

    $move-time:0.9s;

    //app img motion
    .fade-enter {
        transform: translate3d(50%, 0, 0);
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity $move-time, transform $move-time cubic-bezier(0.65, 0, 0.35, 1);
    }

    .fade-enter-to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }

    .fade-leave {
        transform: translateX(0%);
        border-radius: 50%;
    }

    .fade-leave-active {
        transition: transform $move-time cubic-bezier(0.65, 0, 0.35, 1);
        z-index: 1;
        border-radius: 50%;
        transform-origin: 100% 50%;
    }

    .fade-leave-to {
        transform: translateX(-100%) scale(1.1);
    }


    //app text motion
    .down-enter {
        transform: translateY(-100%);
    }

    .down-enter-active {
        transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
    }

    .down-enter-to {
        opacity: 1;
        transform: translateY(0);
    }

    .down-leave {
        transform: translateY(0);
    }

    .down-leave-active {
        transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
    }

    .down-leave-to {
        opacity: 1;
        transform: translateY(100%);
    }




    .better-living-wrap {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        /*height: 100vh;*/
        background-color: white;

        overflow: hidden;

        .inner-wrap {
            width: 100%;
            height: 100%;
            padding: pxtovw414(110) pxtovw414(60) pxtovw414(60) pxtovw414(60);
            box-sizing: border-box;

            .living-sort {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                .app-text-wrap {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;

                    .app-logo-tit {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        width: 100%;
                        padding-bottom: pxtovw414(20);
                        border-bottom: 1px solid #DCDCDC;
                        box-sizing: border-box;

                        .app-logo-img {
                            width: pxtovw414(96);
                            height: pxtovw414(96);
                            margin-bottom: pxtovw414(15);

                            img {
                                width: 100%;
                            }
                        }

                        p {
                            font-size: pxtovw414(16);
                            line-height: pxtovw414(20);
                            font-family: $font-family-bold;
                        }
                    }

                    .app-text {
                        margin-bottom: pxtovw414(20);
                        padding-top: pxtovw414(20);
                        box-sizing: border-box;
                        text-align: center;

                        .text-tit {
                            margin-bottom: pxtovw414(10);
                            font-size: pxtovw414(24);
                            line-height: pxtovw414(33);
                            font-family: $font-family-bold;
                        }

                        .text-con {
                            font-size: pxtovw414(16);
                            line-height: pxtovw414(24);
                            font-family: $font-family-regular;
                        }
                    }
                }

                /* play-store : 모바일 */
                .m-play-store {
                    width: 100%;
                    margin-bottom: pxtovw414(20);
                    padding: pxtovw414(20) 0;
                    border-top: 1px solid #DCDCDC;
                    border-bottom: 1px solid #DCDCDC;
                    box-sizing: border-box;

                    ul {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        li {
                            &:first-child {
                                position: relative;

                                &::after {
                                    position: absolute;
                                    top: 0;
                                    right: pxtovw414(-16);
                                    content: '';
                                    width: 1px;
                                    height: pxtovw414(30);
                                    background-color: #DCDCDC;
                                }
                            }

                            a {
                                display: inline-block;

                                &.google-store {
                                    width: pxtovw414(130);
                                    height: pxtovw414(34);
                                }

                                &.apple-store {
                                    width: pxtovw414(112);
                                    height: pxtovw414(34);
                                    margin-right: pxtovw414(18);
                                }

                                img {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }

                .habit-list-wrap {
                    overflow: hidden;
                    .habit-img {
                        overflow: hidden;
                        position: relative;
                        width: pxtovw414(220);
                        height: pxtovw414(220);
                        margin-bottom: pxtovw414(20);
                        border-radius: 50%;
                        transform: translate3d(0, 0, 0);
                        ul {
                            width: pxtovw414(220);
                            height: pxtovw414(220);

                            li {
                                overflow: hidden;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: pxtovw414(220);
                                height: pxtovw414(220);
                                box-sizing: border-box;
                                img {
                                    width: 100%;
                                }

                            }
                        }
                    }

                    .habit-text {
                        overflow: hidden;
                        position: relative;
                        width: pxtovw414(220);
                        height: pxtovw414(28);
                        ul {
                            overflow: hidden;
                            width: pxtovw414(220);
                            height: pxtovw414(28);
                            li {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: pxtovw414(220);

                                p {
                                    width: pxtovw414(220);
                                    text-align: center;
                                    font-size: pxtovw414(20);
                                    line-height: pxtovw414(27);
                                    font-family: $font-family-bold;
                                }
                            }
                        }
                    }
                }
            }

        }

        /* play-store : pc */
        .pc-play-store {
            display: none;
        }

    }

    @media screen and (orientation: landscape) {
        .mobile {
            .better-living-wrap {
                .inner-wrap {
                    padding: pxtovw414(35) pxtovw414(30) pxtovw414(35) pxtovw414(30);
                    .living-sort {
                        .app-text-wrap {
                            .app-logo-tit {
                                padding-bottom: pxtovw414(13);
                                .app-logo-img {
                                    width: pxtovw414(60);
                                    height: pxtovw414(60);
                                    margin-bottom: pxtovw414(13);
                                    img {
                                    }
                                }

                                p {
                                    font-size: pxtovw414(11);
                                    line-height: pxtovw414(10);
                                }
                            }

                            .app-text {
                                margin-bottom: pxtovw414(13);
                                padding-top: pxtovw414(13);

                                .text-tit {
                                    margin-bottom: pxtovw414(5);
                                    font-size: pxtovw414(13);
                                    line-height: pxtovw414(18);
                                }

                                .text-con {
                                    font-size: pxtovw414(10);
                                    line-height: pxtovw414(15);
                                }
                            }
                        }

                        /* play-store : 모바일 */
                        .m-play-store {
                            margin-bottom: pxtovw414(15);
                            padding: pxtovw414(8) 0;
                            ul {
                                li {
                                    display: flex;
                                    justify-content: space-around;
                                    flex: 1;
                                    &:first-child {
                                        &::after {
                                            right: 0;
                                            height: pxtovw414(15);
                                        }
                                    }

                                    a {
                                        &.google-store {
                                            width: pxtovw414(65);
                                            height: pxtovw414(17);
                                        }

                                        &.apple-store {
                                            width: pxtovw414(56);
                                            height: pxtovw414(17);
                                            margin-right: pxtovw414(9);
                                        }

                                        img {
                                        }
                                    }
                                }
                            }
                        }

                        .habit-list-wrap {
                            .habit-img {
                                width: pxtovw414(110);
                                height: pxtovw414(110);
                                margin-bottom: pxtovw414(13);
                                ul {
                                    width: pxtovw414(110);
                                    height: pxtovw414(110);

                                    li {
                                        width: pxtovw414(110);
                                        height: pxtovw414(110);
                                        img {
                                        }

                                    }
                                }
                            }

                            .habit-text {
                                width: pxtovw414(110);
                                height: pxtovw414(12);
                                ul {
                                    width: pxtovw414(110);
                                    height: pxtovw414(12);
                                    li {
                                        width: pxtovw414(110);

                                        p {
                                            width: pxtovw414(110);
                                            font-size: pxtovw414(12);
                                            line-height: pxtovw414(13);
                                        }
                                    }
                                }
                            }
                        }
                    }

                }

                /* play-store : pc */
                .pc-play-store {

                }
            }
        }
    }



    .desktop, .tablet {
        .better-living-wrap {
            min-width: $stage-min-width;
            height: 100vh;
            .inner-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 0;

                .living-sort {
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-direction: initial;

                    .app-text-wrap {
                        justify-content: flex-start;
                        width: 285px;
                        margin-right: 100px;
                        margin-bottom: 65px;

                        .app-logo-tit {
                            padding-bottom: 30px;

                            .app-logo-img {
                                width: 120px;
                                height: 120px;
                                margin-bottom: 15px;

                                img {

                                }
                            }

                            p {
                                font-size: $font-size-s;
                                line-height: 30px;
                            }
                        }

                        .app-text {
                            margin-bottom: 0;
                            padding-top: 30px;

                            .text-tit {
                                margin-bottom: 20px;
                                font-size: $font-size-me;
                                line-height: 38px;
                            }

                            .text-con {
                                font-size: $font-size-xs;
                                line-height: 28px;
                            }
                        }
                    }

                    /* play-store : 모바일 */
                    .m-play-store {
                        display: none;
                    }

                    .habit-list-wrap {
                        padding: 55px 0 50px 0;
                        box-sizing: border-box;
                        .habit-img {
                            overflow: hidden;
                            width: 270px;
                            height: 270px;
                            margin-bottom: 25px;
                            border-radius: 50%;
                            ul {
                                width: 270px;
                                height: 270px;
                                li {
                                    width: 270px;
                                    height: 270px;
                                    img {
                                    }

                                }
                            }
                        }

                        .habit-text {
                            width: 270px;
                            height: 30px;
                            ul {
                                width: 270px;
                                height: 30px;
                                li {
                                    width: 270px;
                                    p {
                                        width: 270px;
                                        font-size: $font-size-s;
                                        line-height: 30px;
                                    }
                                }
                            }
                        }
                    }
                }

                /* play-store : pc */
                .pc-play-store {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 750px;
                    margin-bottom: 0;
                    padding: 30px 0;
                    border-top: 1px solid #DCDCDC;
                    border-bottom: 1px solid #DCDCDC;
                    box-sizing: border-box;

                    ul {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 100%;

                        li {
                            &:first-child {
                                position: relative;

                                &::after {
                                    position: absolute;
                                    top: 0;
                                    right: -100px;
                                    content: '';
                                    width: 1px;
                                    height: 40px;
                                    background-color: #DCDCDC;
                                }
                            }

                            a {
                                display: inline-block;

                                &.google-store {
                                    width: 170px;
                                    height: 45px;
                                }

                                &.apple-store {
                                    width: 145px;
                                    height: 45px;
                                }

                                img {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }

            }
        }
    }

.en{
    .habit-text {
        ul {
            li {
                &:nth-child( 4 ){
                    p{
                        font-size: pxtovw414(16) !important;
                    }
                }
            }
        }
    }

    &.desktop, &.tablet{
        .habit-text {
            ul {
                li {
                    &:nth-child( 4 ){
                        p{
                            font-size: $font-size-xs !important;
                        }
                    }
                }
            }
        }
    }
}


</style>
