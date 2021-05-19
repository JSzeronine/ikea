<template>
    <li>
        <a :href="link" target="_blank">
            <div class="lab-map__link">
                <slot name="img"></slot>
                <slot name="title"></slot>
            </div>

            <img class="lab-map__icon-arrow" :src="`../img/lab/icon-right-arrow.png`" alt="">
        </a>
    </li>
</template>

<script>
export default {
    name: "item-map-link",
    props : {
        link : String,
    }
}
</script>

<style scoped lang="scss">
li{
    margin-bottom: pxtovw414( 10 );

    &:first-child{
        display: none;
    }

    &:last-child{
        margin-bottom: 0;
    }

    a{
        border: 1px solid #DFDFDF;
        display: flex;
        padding: pxtovw414( 14 ) pxtovw414( 21 ) pxtovw414(14) pxtovw414(25);
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;

        .lab-map__link{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                width: pxtovw414( 33 );
                margin-right: pxtovw414( 25 );
            }

            span{
                font-size: pxtovw414( 14 );
                line-height: pxtovw414( 23 );
            }
        }

        > img{
            width: pxtovw414( 6 );
        }
    }
}

.desktop, .tablet {
    li{
        margin-bottom: 9px;
        &:last-child{
            margin-bottom: 0;
        }

        a{
            padding: 15px 30px 15px 20px;
            .lab-map__link{
                img{
                    width: 32px;
                    margin-right: 24px;
                }

                span{
                    font-size: 16px;
                    line-height: 23px;
                }
            }

            > img{
                width: 5px;
            }
        }
    }
}


</style>