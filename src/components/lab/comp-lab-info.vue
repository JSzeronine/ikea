<template>
    <section class="info-wrap">
        <div class="inner-wrap">

            <div class="event-info__title-bx">
                <p class="event-info__point">
                    <slot name="point"></slot>
                </p>
                <h3 class="event-info__title">
                    <slot name="title"></slot>
                </h3>
            </div>

            <div class="event-info__list-bx">
                <ul>
                    <slot name="list"></slot>
                </ul>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: "comp-lab-info"
}
</script>

<style scoped lang="scss">
    .info-wrap {
        .inner-wrap {
            height: 100%;
            margin: 0 auto;


            .event-info__title-bx{
                margin-bottom: pxtovw414(50);
                padding: 0 pxtovw414(40);
                box-sizing: border-box;
                .event-info__point{
                    > span{
                        display: inline-block;
                        margin-bottom: pxtovw414( 30 );
                        padding: pxtovw414( 7 ) pxtovw414( 10 ) pxtovw414( 8 );
                        box-sizing: border-box;

                        font-size: pxtovw414( 14 );
                        line-height: pxtovw414( 19 );
                        color: #fff;
                        font-family: $font-family-bold;
                        background-color: $color-set-green;
                    }
                }

                .event-info__title{
                    font-size: pxtovw414( 30 );
                    line-height: pxtovw414( 41 );
                    font-family: $font-family-bold;

                }
            }

            .event-info__list-bx{
                ul{

                }
            }
        }
    }
</style>