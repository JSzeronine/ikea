<template>
    <li>
        <div class="event-product__img">
            <slot name="img"></slot>
        </div>

        <div class="event-product__info">
            <slot name="list"></slot>
        </div>
    </li>
</template>

<script>
export default {
    name: "item-info-product"
}
</script>

<style scoped lang="scss">
li{
    text-align: center;
    .event-product__img{
        box-sizing: border-box;
        width: pxtovw414( 280 );
        margin: 0 auto pxtovw414( 85 );
        border-radius: 100%;
        overflow: hidden;
        font-size: 0;
        img{
            width: 100%;
        }
    }

    .event-product__info{
        padding: 0 pxtovw414( 40 );
        dl{
            padding: pxtovw414( 18 ) 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            border-top: 1px solid #DFDFDF;
            text-align: left;


            &:last-child{
                border-bottom: 1px solid #DFDFDF;
            }

            dt{
                width: pxtovw414( 94 );
                flex-shrink: 0;
                font-size: pxtovw414( 16 );
                line-height: pxtovw414( 24 );
                font-family: $font-family-bold;
            }

            dd{
                font-size: pxtovw414( 16 );
                line-height: pxtovw414( 24 );
            }
        }
    }
}

.desktop, .tablet{
    li{
        width: 370px;
        display: inline-block;
        text-align: left;
        .event-product__img{
            padding: 0;
            margin-bottom: 60px;
            width: auto;
            img{

            }
        }

        .event-product__info{
            padding: 0;

            dl{
                padding: 20px 0;
                &:last-child{

                }

                dt{
                    width: 110px;
                    font-size: $font-size-xs;
                    line-height: 24px;
                }

                dd{
                    font-size: $font-size-base;
                    line-height: 22px;
                }
            }
        }
    }
}

</style>