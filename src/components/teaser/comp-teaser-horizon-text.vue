<template>
    <!-- horizon-text-wrap -->
    <section class="horizon-text-wrap">
        <!-- inner-wrap -->
        <div class="inner-wrap">
            <div v-for="( item, index ) in contents" :class="`horizon-text text-0${ index + 1 }`" v-html="item">
            </div>
        </div>
        <!--//inner-wrap -->
    </section>
    <!--//horizon-text-wrap -->
</template>

<script>
    export default {
        name: "comp-teaser-horizon",
        data(){
            return{
                contents : null,
            }
        },

        created() {
            this.contents = this.$t( 'contents.horizon-text' );
        },
    }
</script>

<style scoped lang="scss">
    .horizon-text-wrap {
        height: 100vh;
        //background-color: #009745;
        .inner-wrap {
            position: relative;
            display: flex;
            justify-content: center;
            height: 100%;
            margin: 0 auto;
            padding: 0 pxtovw414(65);
            box-sizing: border-box;
            text-align: center;
            .horizon-text {
                position: absolute;
                z-index: 1;
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                font-size: pxtovw414(28);
                line-height: pxtovw414(38);
                color: #fff;
                font-family: $font-family-bold;
                box-sizing: border-box;
                padding: pxtovw414( 200 ) pxtovw414( 40 ) 0;
                opacity: 0;
                &.text-01 {
                    opacity: 1;
                }
            }
        }
    }

    .horizon-text-wrap {
        .inner-wrap {
            .horizon-text {
                font-size: pxtovw414(26);
                line-height: pxtovw414(36);
                letter-spacing: 1px;
                &.text-01 {
                }
            }
        }
    }

    @media screen and (orientation: landscape) {
        .mobile {
            .horizon-text-wrap {
                height: 100vh;
                .inner-wrap {
                    height: 100%;
                    padding: 0 pxtovw414(65);
                    .horizon-text {
                        height: 100vh;
                        font-size: pxtovw414(14);
                        line-height: pxtovw414(19);
                        padding-top: pxtovw414( 40 );
                        &.text-01 {
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet {
        .horizon-text-wrap {
            min-width: $stage-contents-width;
            .inner-wrap {
                min-width: $stage-contents-width;
                .horizon-text {
                    padding-top: 0;
                    font-size: $font-size-me;
                    line-height: 45px;
                    align-items: center;
                    padding-bottom: 79px;
                }
            }
        }
    }

</style>