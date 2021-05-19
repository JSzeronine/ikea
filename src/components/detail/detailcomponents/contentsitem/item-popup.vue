<template>
    <li>
        <div class="popup-content__bx">
            <div class="popup-content__btn-close">
                <a href="javascript:;">
                    <img :src="`../img/common/icon-x-black.png`" alt="">
                </a>
            </div>

            <div class="popup-content">
                <p>
                    <slot name="img"></slot>
                </p>
                <dl>
                    <dt>
                        <slot name="title"></slot>
                    </dt>
                    <dd>
                        <slot name="description"></slot>
                    </dd>
                </dl>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: "item-popup"

    }
</script>

<style scoped lang="scss">

    li{
        width: pxtovw414( 374 );
        background-color: #fff;
        display: none;

        &.on{ display: block; }

        .popup-content__bx{
            position: relative;
            .popup-content__btn-close{
                position: absolute;
                width: 100%;
                text-align: right;

                a{
                    display: inline-block;
                    width: pxtovw414( 37 );
                    height: pxtovw414( 37 );
                    margin-top: pxtovw414( 10 );
                    margin-right: pxtovw414( 10 );
                    img{
                        width: 100%;
                    }
                }
            }

            .popup-content{
                box-sizing: border-box;
                padding: pxtovw414( 36 ) pxtovw414( 30 );

                > p{
                    margin-bottom: pxtovw414( 24 );
                    img{
                        width: 100%;
                    }
                }

                dl{
                    dt{
                        font-size: pxtovw414( 18 );
                        line-height: pxtovw414( 24 );
                        font-family: $font-family-bold;
                        margin-bottom: pxtovw414( 10 );
                    }

                    dd{
                        font-size: pxtovw414( 16 );
                        line-height: pxtovw414( 24 );
                    }
                }
            }
        }
    }

    .desktop, .tablet{
        li{
            position: relative;
            width: 374px;

            &.on{

            }

            .popup-content__bx{
                .popup-content__btn-close{
                    a{
                        width: 37px;
                        margin-top: 10px;
                        margin-right: 10px;
                        img{

                        }
                    }
                }
            }

            .popup-content{
                padding: 36px 30px;
                > p{
                    margin-bottom: 30px;
                    img{
                    }
                }

                dl{
                    dt{
                        font-size: $font-size-xs;
                        line-height: 24px;
                        margin-bottom: 10px;
                    }

                    dd{
                        font-size: $font-size-base;
                        line-height: 24px;
                    }
                }
            }
        }
    }
</style>