<template>
    <section class="detail-certification">
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
    name: "comp-detail-certification"
}
</script>

<style scoped lang="scss">
    .detail-certification{
        margin: pxtovw414( 160 ) 0;
        .inner-wrap{
            .content{
                ul{
                }
            }
        }
    }

    .desktop, .tablet{
        .detail-certification{
            margin: 220px 0;
            .inner-wrap{
                min-width: 1280px;
                width: 100%;
                margin: 0 auto;
                .content{
                    width: 1200px;
                    margin: 0 auto;
                    padding: 0 170px;
                    box-sizing: border-box;

                    ul{
                    }
                }
            }
        }
    }
</style>