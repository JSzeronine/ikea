<template>
    <li>
        <dl>
            <dt>
                <slot name="title"></slot>
            </dt>
            <dd>
                <slot name="description"></slot>
            </dd>
        </dl>
    </li>
</template>

<script>
export default {
    name: "item-space-text"
}
</script>

<style scoped lang="scss">
    li{
        display: none;

        &.on{
            display: block;
        }

        dl{
            dt{
                margin-bottom: pxtovw414( 10 );
                font-size: pxtovw414( 18 );
                line-height: pxtovw414( 24 );
                font-family: $font-family-bold;
                color: #009945;
            }

            dd{
                font-size: pxtovw414( 16 );
                line-height: pxtovw414( 24 );
            }
        }
    }

    .desktop, .tablet{
        li{
            dl{
                dt{
                    font-size: $font-size-s;
                    line-height: 30px;
                    margin-bottom: 20px;
                }

                dd{
                    font-size: $font-size-base;
                    line-height: 24px;
                }
            }
        }
    }
</style>