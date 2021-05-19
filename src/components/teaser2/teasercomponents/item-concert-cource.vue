<template>
    <li class="item-concert__cource">
        <div class="item-concert__list">
            <div class="item-concert__list-photo">
                <slot name="photo"></slot>
            </div>

            <dl class="item-concert__list-info">
                <dt>
                    <slot name="name"></slot>
                </dt>
                <dd>
                    <slot name="description"></slot>
                </dd>
                <dd class="item-concert__list-info__time">
                    <ul>
                        <li>
                            <slot name="topic"></slot>
                        </li>
                        <li>
                            <slot name="time"></slot>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>

        <div v-if="breakInfo" class="item-concert__break">
            <span v-html="breakInfo.title"></span>
            <span v-html="breakInfo.time"></span>
        </div>
    </li>

</template>

<script>
export default {
    name: "item-concert-cource",
    props : {
        breakInfo : Object,
    }
}
</script>

<style scoped lang="scss">
.item-concert__cource{
    padding: pxtovw414( 20 ) 0;
    border-top: 1px solid #DFDFDF;

    &:last-child{
        padding-bottom: 0;
    }

    .item-concert__list{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .item-concert__list-photo{
            width: pxtovw414( 60 );
            margin-right: pxtovw414( 18 );
            flex-shrink: 0;
            img{
                width: 100%;
            }
        }

        .item-concert__list-info{
            dt{
                font-size: pxtovw414( 16 );
                line-height: pxtovw414( 22 );
                font-family: $font-family-bold;
                margin-bottom: pxtovw414( 5 );
            }

            dd{
                font-size: pxtovw414( 14 );
                line-height: pxtovw414( 19 );

                ul{
                    margin-top: pxtovw414( 9 );
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    li{
                        font-size: pxtovw414( 14 );
                        line-height: pxtovw414( 19 );
                        font-family: $font-family-bold;

                        &:first-child{
                            margin-right: pxtovw414( 7 );
                            padding-right: pxtovw414( 7 );
                            position: relative;
                            display: flex;
                            align-items: center;

                            &::after{
                                content: '';
                                display: inline-block;
                                width: 2px;
                                height: pxtovw414( 13 );
                                background-color: #D2D2D2;
                                position: absolute;
                                right: 0;
                            }
                        }

                        &:last-child{
                            font-size: pxtovw414( 13 );
                            line-height: pxtovw414( 18 );
                        }
                    }
                }
            }
        }
    }

    .item-concert__break{
        border-top: 1px solid #DFDFDF;
        padding-top: pxtovw414( 20 );
        margin-top: pxtovw414( 20 );
        display: flex;
        justify-content: center;
        align-items: center;

        span{
            font-size: pxtovw414( 20 );
            line-height: pxtovw414( 27 );
            font-family: $font-family-bold;

            &:first-child{
                font-size: pxtovw414( 22 );
                line-height: pxtovw414( 30 );
                margin-right: pxtovw414( 10 );
            }
        }
    }
}

.desktop, .tablet{
    .item-concert__cource{
        padding: 20px 0;
        &:last-child{
            padding-bottom: 0;
        }

        .item-concert__list{
            .item-concert__list-photo{
                width: 72px;
                margin-right: 18px;
                img{

                }
            }

            .item-concert__list-info{
                dt{
                    font-size: $font-size-xs;
                    line-height: 24px;
                    margin-bottom: 8px;
                }

                dd{
                    font-size: 16px;
                    line-height: 22px;

                    ul{
                        margin-top: 6px;
                        li{
                            font-size: 16px;
                            line-height: 22px;

                            &:first-child{
                                margin-right: 7px;
                                padding-right: 7px;

                                &::after{
                                    width: 1px;
                                    height: 13px;
                                }
                            }

                            &:last-child{
                                font-size: 16px;
                                line-height: 22px;
                            }
                        }
                    }
                }
            }
        }

        .item-concert__break{
            padding-top: 20px;
            margin-top: 20px;
            box-sizing: border-box;
            justify-content: flex-start;
            padding-left: 90px;
            span{
                font-size: $font-size-s;
                line-height: 27px;
                &:first-child{
                    font-size: $font-size-s;
                    line-height: 30px;
                    margin-right: 10px;
                }
            }
        }
    }
}

</style>