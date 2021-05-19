<template>
    <div class="item-space swiper-slide">
        <div class="item-space__map">
            <slot name="img-map"></slot>
        </div>
        <div class="item-space__img">
            <slot name="img-space"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "item-space"
}
</script>

<style scoped lang="scss">

    .item-space{
        width: pxtovw414( 334 );
        margin-left: pxtovw414( 10 );

        &:first-child{
            margin-left: 0;
        }

        .item-space__map{
            font-size: 0;
            img{
                width: 100%;
            }
        }

        .item-space__img{
            font-size: 0;
            img{
                width: 100%;
            }
        }
    }

    .desktop, .tablet{
        .item-space{
            width: 1030px;
            display: flex;
            flex-wrap: nowrap;
            margin-right: 30px;
            margin-left: 0;

            &:last-child{
                margin-right: 0;
            }

            &:first-child{
                margin-left: 0;
            }

            .item-space__map{
                img{
                    width: 100%;
                }
            }

            .item-space__img{
                img{
                    width: 100%;
                }
            }

        }
    }

</style>