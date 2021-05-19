<template>
    <li class="item-gift swiper-slide">
        <p>
            <slot name="img"></slot>
        </p>

        <dl>
            <dt><slot name="value"></slot></dt>
            <dd><slot name="brand"></slot></dd>
            <dd><slot name="title"></slot></dd>
        </dl>
    </li>
</template>

<script>
export default {
    name: "item-info-gift"
}
</script>

<style scoped lang="scss">
    li{
        width: pxtovw414( 280 );
        margin-right: pxtovw414( 50 );
        p{
            width: pxtovw414( 280 );
            height: pxtovw414( 280 );
            overflow: hidden;
            border-radius: 100%;
            margin-bottom: pxtovw414( 40 );
            img{
                width: 100%;
            }
        }

        dl{
            dt{
                font-size: pxtovw414( 20 );
                line-height: pxtovw414( 27 );
                font-family: $font-family-bold;
                margin-bottom: pxtovw414( 5 );
            }

            dd{
                &:nth-child( 2 ){
                    font-size: pxtovw414( 20 );
                    line-height: pxtovw414( 27 );
                    margin-bottom: pxtovw414( 5 );
                }

                &:nth-child( 3 ){
                    font-size: pxtovw414( 20 );
                    line-height: pxtovw414( 27 );
                    font-family: $font-family-bold;
                }
            }
        }
    }

    .desktop, .tablet{
        li{
            width: 300px;
            margin-right: 65px;

            &:last-child{
                margin-right: 0;
            }

            p{
                width: 300px;
                height: 300px;
                margin-bottom: 40px;
            }

            dl{
                dt{
                    font-size: $font-size-s;
                    line-height: 30px;
                    margin-bottom: 6px;
                }

                dd{
                    &:nth-child( 2 ){
                        font-size: $font-size-s;
                        line-height: 30px;
                        margin-bottom: 6px;
                    }

                    &:nth-child( 3 ){
                        font-size: $font-size-s;
                        line-height: 30px;
                    }
                }
            }
        }
    }
</style>