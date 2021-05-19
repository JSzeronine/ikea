<template>
    <section class="detail-company">
        <div class="inner-wrap">
            <div class="content">
                <ul>
                    <slot name="list"></slot>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "comp-detail-company"
}
</script>

<style scoped lang="scss">
    .detail-company{
        margin: pxtovw414( 160 ) 0;
        .inner-wrap{
            .content{
                padding: 0 pxtovw414( 40 );
                box-sizing: border-box;
                ul{
                }
            }
        }
    }

    .desktop, .tablet{
        .detail-company{
            margin: 220px 0;
            .inner-wrap{
                width: 100%;
                min-width: 1280px;
                margin: 0 auto;
                .content{
                    width: 1200px;
                    margin: 0 auto;
                    padding: 0 170px;

                    ul{

                    }
                }
            }
        }
    }
</style>