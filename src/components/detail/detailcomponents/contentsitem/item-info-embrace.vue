<template>
    <li>
        <dl>
            <dt>
                <slot name="img"></slot>
            </dt>
            <dd>
                <slot name="description"></slot>
            </dd>
        </dl>
    </li>
</template>

<script>
export default {
    name: "item-info-embrace"
}
</script>

<style scoped lang="scss">
    li{
        margin-bottom: pxtovw414( 80 );
        dl{
            dt{
                width: pxtovw414(240);
                margin: 0 auto pxtovw414(50);
                img{
                    width: 100%;
                }
            }

            dd{
                width: pxtovw414( 290 );
                font-size: pxtovw414( 16 );
                line-height: pxtovw414( 24 );
                color: #000;
            }
        }
    }

    .desktop, .tablet{
        li{
            margin-bottom: 0;
            width: 310px;
            margin-right: 160px;
            dl{
                dt{
                    width: 240px;
                    margin: 0 auto 58px;
                    img{
                        width: 100%;
                    }
                }

                dd{
                    width: auto;
                    font-size: $font-size-xs;
                    line-height: 28px;
                }
            }
        }
    }
</style>