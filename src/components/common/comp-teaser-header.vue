<template>
    <section class="comp-header">
        <!-- 가이드 선 삭제 : style="display:none;" -->
        <div class="guide-line" style="display: none;">
            <div><div></div></div>
        </div>
        <!-- // 가이드 선 삭제 : style="display:none;" -->

        <div class="inner-wrap">
            <div class="contents">
                <a class="comp-header__logo" :href="convertLink( contents.link_home )">
                    <h1 class="blind">IKEA</h1>
                    <img :src="convertLink( `./img/common/logo.png` )" alt="">
                </a>

                <a v-if="isLab" class="comp-header__btn-lab" :href="convertLink( contents.link_lab )">
                    <video :src="`../img/common/btn-lab.mp4`" autoplay playsinline muted loop></video>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            contents : null,
            sY : -1,
        }
    },

    props : {
        isMain : {
            type : Boolean,
            default : false,
        },

        isLab : {
            type : Boolean,
            default: true,
        }
    },

    created() {
        this.contents = this.$t( "common.header" );
    },

    mounted() {
        window.addEventListener( "scroll", this.scrollListener );
    },

    methods : {
        convertLink(link){
            let convert = link;
            if(!this.isMain){
                convert = "."+link;
            }
            return convert;
        },

        scrollListener( $e ){
            let scrollY = window.scrollY;

            if( this.sY < 0 ){
                this.sY = scrollY;
            }

            let logo = this.$el.querySelector( ".comp-header__logo" );
            if( scrollY > this.sY ){
                logo.classList.add( "on" );
            }else{
                logo.classList.remove( "on" );
            }

            this.sY = scrollY;
        }
    }
}
</script>

<style scoped lang="scss">
    .comp-header{
        position: fixed;
        z-index: $z-index-header;
        width: 0;
        height: 100%;

        .guide-line{
            pointer-events: none;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;

            > div {
                width: 100%;
                height: 100vh;
                padding: 0 pxtovw414( 40 );
                box-sizing: border-box;
                box-shadow: rgba( 0, 0, 0, 0.1 ) 0px 0px 0px, rgba( 0, 0, 0, 0.1 ) 0px 0px 0px, rgba( 0, 0, 0, 0.1 ) 0px 0px 0px, rgba( 0, 0, 0, 0.1 ) 0px 0px 1px, rgba( 0, 0, 0, 0.1 ) 0px 0px 1px, rgba( 0, 0, 0, 0.1 ) 0px 0px 1px;
                border-top: none;
                border-bottom: none;

                > div {
                    width: 100%;
                    height: 100vh;
                    box-shadow: rgba( 0, 0, 0, 0.2 ) 0px 0px 0px, rgba( 0, 0, 0, 0.2 ) 0px 0px 0px, rgba( 0, 0, 0, 0.2 ) 0px 0px 0px, rgba( 0, 0, 0, 0.2 ) 0px 0px 1px, rgba( 0, 0, 0, 0.2 ) 0px 0px 1px, rgba( 0, 0, 0, 0.2 ) 0px 0px 1px;
                    border-top: none;
                    border-bottom: none;
                }
            }
        }

        .inner-wrap{
            .contents{
                position: absolute;
                left: 0;
                top: 0;
                width: 0px;
                height: 100%;
                .comp-header__logo{
                    position: absolute;
                    padding-top: pxtovw414( 31 );
                    padding-left: pxtovw414( 40 );
                    left: 0;
                    top: 0;
                    display: inline-block;
                    width: pxtovw414( 86 );
                    transition: transform 0.5s $vars_easeOutCubic;
                    transform: translateY( 0 );

                    &.on{
                        transform: translateY( -110% );
                    }

                    img{
                        width: 100%;
                    }
                }

                .comp-header__btn-lab{
                    width: pxtovw414( 96 );
                    height: pxtovw414( 96 );
                    position: absolute;
                    bottom: pxtovw414( 31 );
                    left: pxtovw414( 40 );
                    overflow: hidden;
                    border-radius: 100%;
                    video{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }


    @media screen and (orientation: landscape) {
        .mobile {
            .comp-header {
                width: 100%;
                pointer-events: none;

                .inner-wrap {

                    .contents {
                        width: 100%;
                        height: 0px;

                        .comp-header__logo {
                            pointer-events: auto;
                            padding-top: pxtovw414(15);
                            padding-left: pxtovw414(30);
                            width: pxtovw414(43);
                            transform: translateY(0);
                            &.on{
                                transform: translateY( -110% );
                            }
                        }

                        .comp-header__btn-lab {
                            pointer-events: auto;
                            width: pxtovw414(35);
                            height: pxtovw414(35);
                            top: pxtovw414(10);
                            right: pxtovw414(10);
                            left: initial;

                            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);

                            video {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }

        }

    }

    .desktop, .tablet{
        .comp-header{
            width: 100%;
            height: 0px;

            .guide-line{
                pointer-events: none;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                min-width: $stage-min-width;
                height: 100vh;

                > div {
                    width: 1200px;
                    height: 100vh;
                    margin: 0 auto;
                    padding: 0 170px;
                    box-sizing: border-box;

                    > div {
                        width: 100%;
                        height: 100vh;
                    }
                }
            }

            .inner-wrap{

                .contents{
                    width: 100%;
                    height: 0px;
                    .comp-header__logo{
                        width: 86px;
                        height: auto;
                        left: 0;
                        top: 0;
                        padding-top: 60px;
                        padding-left: 60px;
                        transition: transform 0.5s $vars_easeOutCubic;
                        transform: translateY( 0 );

                        &.on{
                            transform: translateY( -110% );
                        }

                        img{

                        }
                    }

                    .comp-header__btn-lab{
                        width: 90px;
                        height: 90px;
                        top: 30px;
                        right: 30px;
                        left: initial;
                        bottom: initial;
                        video{
                        }
                    }
                }
            }
        }
    }
</style>