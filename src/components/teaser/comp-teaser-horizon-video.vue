<template>
    <!-- horizon-video-wrap -->
    <section class="horizon-video-wrap">
        <!-- inner-wrap -->
        <div class="inner-wrap">
            <div class="horizon-video video-01">
                <video class="img-mb" :src="contents.video_loop_mb" type="video/mp4" autoplay loop playsinline muted></video>
                <video class="img-pc" :src="contents.video_loop_pc" type="video/mp4" loop playsinline muted></video>
            </div>

            <div class="horizon-video video-02">
                <video class="img-mb" :src="contents.video_house_mb" type="video/mp4" playsinline muted></video>
                <video class="img-pc" :src="contents.video_house_pc" type="video/mp4" playsinline muted></video>
            </div>
        </div>
        <!--//inner-wrap -->
    </section>
    <!--//horizon-video-wrap -->
</template>

<script>
    export default {
        name: "comp-teaser-horizon-media",
        data(){
            return{

            }
        },

        created() {
            this.contents = this.$t( "contents.horizon-video" );
        }
    }
</script>

<style scoped lang="scss">
    .horizon-video-wrap {
        .inner-wrap {
            position: relative;
            .horizon-video {
                width: 100%;
                height: 100vh;
                video {
                    width: 100%;
                    height: 100vh;
                    object-fit: cover;
                    object-position: center bottom;
                }

                &.video-01 {
                    opacity: 1;
                }

                &.video-02 {
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: 0;
                    display: none;
                }
            }
        }
    }

    @media screen and (orientation: landscape) {
        .mobile {
            .horizon-video-wrap {
                .inner-wrap {
                    .horizon-video {
                        video {
                            height: 151vh;
                        }

                        &.video-01 {
                        }

                        &.video-02 {
                        }
                    }
                }
            }
        }
    }

    .desktop, .tablet {
        .horizon-video-wrap {
            .inner-wrap {
                width: 100%;
                min-width: 1280px;
                .horizon-video {
                    min-width: 1200px;
                    img {  // 영상 들어오면 수정

                    }

                    video {
                    }

                    &.video-01 {
                    }

                    &.video-02 {

                    }
                }
            }
        }
    }
</style>