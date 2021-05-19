<template>
    <section class="sustain-wrap">
        <div class="inner-wrap">
            <div class="text-wrap">
                <div class="text-con">
                    <div class="green-box">SUSTAINABILITY</div>
                    <p><span v-html="language.description"></span></p>

                    <a href="./sub/" class="sustain-btn">
<!--                        <img :src="`./img/main/sustainAbility_arrow_btn.png`" alt="화살표 버튼">-->
                        <img :src="`./img/common/btn-arrow-box-black.png`" alt="화살표 버튼">
                    </a>
                </div>

            </div>

            <!-- bg-wrap -->
            <div class="bg-wrap">
                <div class="img-pc bg-pc" :style="{backgroundImage:'url(./img/main/sustainability.jpg)'}"></div>
                <div class="img-mb bg-m" :style="{backgroundImage:'url(./img/main/sustainability_m.jpg)'}"></div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "sustainability",

    data(){
        return {
            language: null
        }
    },

    created() {
        this.language = this.$t( "contents.sustainability" );
    }
}
</script>

<style scoped lang="scss">
.sustain-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    background-color: white;

    .inner-wrap {
        width: 100%;


        .text-wrap {
            padding: pxtovw414(160) pxtovw414(40) pxtovw414(50) pxtovw414(40);
            box-sizing: border-box;

            .text-con {
                .green-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: pxtovw414(135);
                    height: pxtovw414(35);
                    margin-bottom: pxtovw414(30);
                    font-size: pxtovw414(14);
                    line-height: pxtovw414(19);
                    color: #fff;
                    font-family: $font-family-bold;
                    background-color: $color-set-green;
                }

                p {
                    margin-bottom: pxtovw414(30);
                    font-size: pxtovw414(30);
                    line-height: pxtovw414(40);
                    font-family: $font-family-bold;
                }

                .sustain-btn {
                    display: inline-block;
                    width: pxtovw414(60);
                    height: pxtovw414(60);
                    border-radius: 50%;
                    overflow: hidden;
                    transition: transform 0.2s;
                    img {
                        width: 100%;
                        transition: transform 0.2s;
                    }

                    &:hover {
                        transform: scale(0.95);
                        img {
                            transform: scale(1.2) translate3d(0,0,0);
                        }
                    }
                }
            }

        }

        .bg-wrap {
            width: 100%;
            height: 50vh;
            background-color: #BFF5D6;

            .bg-m {
                width: 100%;
                height: 100%;
                background: no-repeat center center;
                background-size: cover;
            }
        }

    }

}

@media screen and (orientation: landscape) {
    .mobile {
        .sustain-wrap {
            .inner-wrap {
                .text-wrap {
                    padding: pxtovw414(80) pxtovw414(40) pxtovw414(25) pxtovw414(40);

                    .text-con {
                        .green-box {
                            width: pxtovw414(68);
                            height: pxtovw414(18);
                            margin-bottom: pxtovw414(15);
                            font-size: pxtovw414(7);
                            line-height: pxtovw414(9);
                        }

                        p {
                            margin-bottom: pxtovw414(15);
                            font-size: pxtovw414(15);
                            line-height: pxtovw414(20);
                        }

                        .sustain-btn {
                            width: pxtovw414(30);
                            height: pxtovw414(30);

                            img {
                            }
                        }
                    }

                }

                .bg-wrap {
                    height: 100vh;

                    .bg-m {
                    }
                }

            }
        }
    }
}


.desktop, .tablet {
    .sustain-wrap {
        min-width: $stage-min-width;
        flex-direction: initial;
        height: 100vh;
        display: block;

        .inner-wrap {
            display: flex;

            .text-wrap {
                flex: 1;
                padding: 0;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;

                .text-con {
                    width: 600px;

                    .green-box {
                        width: 185px;
                        height: 45px;
                        margin-bottom: 50px;
                        font-size: $font-size-xs;
                        line-height: 24px;
                    }

                    p {
                        margin-bottom: 50px;
                        font-size: $font-size-xl;
                        line-height: 56px;
                    }

                    .sustain-btn {
                        width: 60px;
                        height: 60px;

                        img {
                        }
                    }
                }


            }

            .bg-wrap {
                flex: 1;
                height: 100vh;

                .bg-pc {
                    width: 100%;
                    height: 100%;
                    background: no-repeat center center;
                    background-size: cover;
                }
            }
        }


    }
}

</style>