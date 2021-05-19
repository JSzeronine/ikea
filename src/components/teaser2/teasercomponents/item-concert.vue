<template>
    <div class="item-concert swiper-slide">
        <div class="inner-wrap">
            <div class="content">
                <div class="item-concert__point">
                    <slot name="week"></slot>
                </div>

                <dl class="item-concert__txt-bx">
                    <dt>
                        <slot name="title"></slot>
                    </dt>
                    <dd>
                        <slot name="date"></slot>
                    </dd>
                </dl>

                <div class="item-concert__list-bx">
                    <ul>
                        <slot name="cource"></slot>
                    </ul>
                </div>

                <div class="item-concert__list-btn__bx">
                    <div class="item-concert__list-btn">
                        <slot name="button"></slot>
                    </div>

                    <div class="item-concert__list-possible">
                        <slot name="possible"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "item-concert",
}
</script>

<style scoped lang="scss">
    .item-concert{
        width: pxtovw414( 346 );
        background-color: #F7F7F7;

        margin-left: pxtovw414( 10 );

        .inner-wrap{
            position: relative;
            box-sizing: border-box;
            padding: pxtovw414( 44 ) pxtovw414( 30 ) pxtovw414( 85 );
            //padding: pxtovw414( 44 ) pxtovw414( 30 ) pxtovw414( 105 );
            height: 100%;
            .content{
                position: relative;
                padding-bottom: pxtovw414( 50 );
                height: 100%;
                .item-concert__point{
                    margin-bottom: pxtovw414( 9 );
                    span{
                        font-size: pxtovw414( 21 );
                        line-height: pxtovw414( 28 );
                        color: #009945;
                        font-family: $font-family-bold;
                    }
                }

                .item-concert__txt-bx{
                    margin-bottom: pxtovw414( 30 );
                    dt{
                        font-size: pxtovw414( 24 );
                        line-height: pxtovw414( 33 );
                        font-family: $font-family-bold;
                        margin-bottom: pxtovw414( 10 );
                    }

                    dd{
                        font-size: pxtovw414( 16 );
                        line-height: pxtovw414( 22 );
                    }
                }

                .item-concert__list-bx{
                    margin-bottom: pxtovw414( 20 );
                    > ul{

                    }
                }

                .item-concert__list-btn__bx{
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: pxtovw414(40);
                    .item-concert__list-btn{
                        a{
                            text-align: center;
                            display: block;
                            font-size: pxtovw414( 18 );
                            line-height: pxtovw414( 24 );
                            color: #fff;
                            background-color: #111111;
                            box-sizing: border-box;
                            padding: pxtovw414( 13 ) 0;
                            border-radius: 100px;

                            img{
                                width: pxtovw414( 48 );
                                margin-right: pxtovw414( 5 );
                            }

                            &.concert-btn__default{

                            }

                            &.concert-btn__now{
                                background-color: #F32C2C;
                            }

                            &.concert-btn__now-replay{
                                background-color: #009945;
                            }

                            &.concert-btn__finish{

                            }

                            &.dimmed{
                                background-color: rgba( #111111, 0.2 );
                            }
                        }
                    }

                    .item-concert__list-possible{
                        position: absolute;
                        left: 0;
                        top: pxtovw414( 65 );
                        font-size: pxtovw414( 13 );
                        line-height: pxtovw414( 24 );
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        .item-concert{
            width: 510px;

            margin-left: 0;
            margin-right: 10px;
            &:last-child{
                margin-right: 0;
            }

            .inner-wrap{
                padding: 54px 70px 54px;
                position: relative;
                .content{
                    margin-bottom: 40px;
                    padding-bottom: 75px;
                    .item-concert__point{
                        margin-bottom: 14px;
                        span{
                            font-size: $font-size-xs;
                            line-height: 24px;
                        }
                    }

                    .item-concert__txt-bx{
                        margin-bottom: 30px;
                        dt{
                            font-size: $font-size-me;
                            line-height: 38px;
                            margin-bottom: 14px;
                        }

                        dd{
                            font-size: $font-size-xs;
                            line-height: 24px;
                        }
                    }

                    .item-concert__list-bx{
                        position: relative;
                        margin-bottom: 20px;
                        > ul{

                        }
                    }

                    .item-concert__list-btn__bx{
                        width: 100%;
                        left: 0;
                        bottom: 100px;

                        .item-concert__list-btn{
                            a{
                                font-size: $font-size-xs;
                                line-height: 24px;
                                padding: 18px 0;

                                img{
                                    width: 48px;
                                    margin-right: 5px;
                                }

                                &.concert-btn__default{

                                }

                                &.concert-btn__now{
                                    background-color: #F32C2C;
                                }

                                &.concert-btn__now-replay{
                                    background-color: #009945;
                                }

                                &.concert-btn__finish{

                                }

                                &.dimmed{
                                    background-color: rgba( #111111, 0.2 );
                                }
                            }
                        }

                        .item-concert__list-possible{
                            left: 0;
                            top: 80px;
                            position: absolute;
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                }
            }
        }
    }
</style>