<template>
    <section class="version-wrap">
        <div class="inner-wrap">

            <div class="version-txt">
                <div class="ikea-logo">
                    <a href="javascript:;">
                        <img :src="convertLink( `./img/versionUpdate/version-ikea-logo.png` )" alt="이케아 로고">

                    </a>
                </div>
                <h2>브라우저를 업데이트하세요.</h2>
                <p>
                    지원하지 않는 Internet Explorer 버전을 사용 중입니다.
                    더 나은 사용 경험을 위해 아래의 사이트 중 하나를 방문해서
                    최신 버전의 브라우저를 설치하세요.
                </p>
            </div>

            <div class="version-recommend">
                <h3>권장 브라우저</h3>
                <ul>
                    <li>
                        <div class="browser">
                            <a href="https://www.google.com/intl/ko/chrome/" target="_blank">
                                <img :src="convertLink(`./img/versionUpdate/google-chrome.png` )" alt="구글 크롬">
                            </a>
                        </div>
                        <span>Goole Chrome</span>
                    </li>
                    <li>
                        <div class="browser">
                            <a href="https://www.mozilla.org/ko/firefox/new/" target="_blank">
                                <img :src="convertLink(`./img/versionUpdate/mozilla-firefox.png` )" alt="모질라 파이어폭스">
                            </a>
                        </div>
                        <span>Mozilla Firefiox</span>
                    </li>
                    <li>
                        <div class="browser">
                            <a href="microsoft-edge:http://doubledot.co.kr/ikea/ko/" target="_self">
<!--                            <a href="https://www.microsoft.com/ko-kr/edge" target="_blank"> -->
                                <img :src="convertLink(`./img/versionUpdate/microsoft-edge.png` )" alt="마이크로소프트 엣지">
                            </a>
                        </div>
                        <span>Microsoft Edge</span>
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: "versionUpdate",

    data () {
        return {
        }
    },

    props : {
        isMain : {
            type : Boolean,
            default : false,
        }
    },

    methods : {

        convertLink(link){
            let convert = link;
            if(!this.isMain){
                convert = "."+link;
            }
            return convert;
        },

    }

}
</script>

<style scoped lang="scss">
    .version-wrap {
        height: 100%;
        .inner-wrap {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            padding: pxtovw414(90) pxtovw414(47) pxtovw414(80) pxtovw414(47);
            box-sizing: border-box;

            .version-txt {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
                .ikea-logo {
                    width: pxtovw414(70);
                    height: pxtovw414(30);
                    margin-bottom: pxtovw414(20);
                    a {
                        display: inline-block;


                        img {
                            width: 100%;
                        }
                    }
                }

                h2 {
                    margin-bottom: pxtovw414(20);

                    font-size: pxtovw414(30);
                    line-height: pxtovw414(40);
                    font-family: $font-family-bold;

                }

                p {
                    margin-bottom: pxtovw414(45);

                    font-family: $font-family-regular;
                    font-size: pxtovw414(16);
                    line-height: pxtovw414(24);
                }
            }

            .version-recommend {
                text-align: center;
                h3 {
                    position: relative;
                    margin-bottom: pxtovw414(40);

                    font-size: pxtovw414(16);
                    line-height: pxtovw414(24);
                    font-family: $font-family-bold;

                    &::before {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        content: '';
                        width: pxtovw414(96);
                        height: 1px;
                        background-color: #D8D8D8;

                    }

                    &::after {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        content: '';
                        width: pxtovw414(96);
                        height: 1px;
                        background-color: #D8D8D8;
                    }
                }

                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin-bottom: pxtovw414(44);
                        &:last-child {
                            margin-bottom: 0;
                        }


                        .browser {
                            width: pxtovw414(65);
                            height: pxtovw414(65);
                            margin-bottom: pxtovw414(10);
                            a {
                                display: inline-block;
                                img {
                                    width: 100%;
                                }
                            }
                        }
                        span {
                            display: block;

                            font-family: $font-family-regular;
                            font-size: pxtovw414(14);
                            line-height: pxtovw414(19);
                        }
                    }
                }
            }
        }
    }


    .desktop, .tablet {
        .version-wrap {
            height: 100vh;
            .inner-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: $stage-min-width;
                height: 100%;
                margin: 0 auto;
                padding: 0 40px;

                .version-txt {
                    .ikea-logo {
                        width: 85px;
                        height: 35px;
                        margin-bottom: 30px;
                        a {
                            img {
                            }
                        }
                    }

                    h2 {
                        margin-bottom: 20px;

                        font-size: $font-size-xl;
                        line-height: 58px;

                    }

                    p {
                        width: 440px;
                        margin-bottom: 80px;

                        font-size: $font-size-xs;
                        line-height: 28px;
                    }
                }

                .version-recommend {
                    h3 {
                        width: 533px;
                        margin-bottom: 40px;

                        font-size: 16px;
                        line-height: 24px;

                        &::before {
                            width: 200px;
                        }

                        &::after {
                            width: 200px;
                        }
                    }

                    ul {
                        flex-direction: initial;
                        li {
                            margin-bottom: 0;
                            margin-right: 80px;
                            &:last-child {
                                margin-right: 0;
                            }
                            .browser {
                                width: 72px;
                                height: 72px;
                                margin-bottom:20px;
                                a {
                                    img {
                                    }
                                }
                            }
                            span {
                                font-family: $font-family-bold;
                                font-size: $font-size-2xs;
                                line-height: 19px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>