<template>
    <div class="sub-page-kv">
        <div class="sub-kv__content">
            <div class="sub-kv__title">
                <slot name="title"></slot>
            </div>

            <div class="sub-kv__content-bg">
                <slot name="video"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "comp-kv"
}
</script>

<style scoped lang="scss">
    .sub-page-kv{
        .sub-kv__content{
            position: relative;
            width: 100%;
            height: 100vh;

            .sub-kv__title{
                position: relative;
                z-index: 6;
                padding: pxtovw414( 142 ) pxtovw414( 40 ) 0;
                box-sizing: border-box;
                font-size: pxtovw414( 30 );
                line-height: pxtovw414( 40 );
                font-family: $font-family-bold;
                color: #fff;
            }

            .sub-kv__content-bg{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100vh;
                z-index: 5;
                video{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .desktop, .tablet{
        .sub-page-kv{
            width: 100%;
            min-width: 1280px;
            .sub-kv__content{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .sub-kv__title{
                    width: 1200px;
                    margin: 0px auto 24px;
                    padding: 0;
                    font-size: $font-size-xl;
                    line-height: 56px;
                    box-sizing: border-box;
                    padding: 0 170px;
                }
            }
        }
    }
</style>