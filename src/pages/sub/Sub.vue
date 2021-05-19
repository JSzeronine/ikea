<template>
    <div v-if="isIE">
        <VersionUpdate />
    </div>
    <div v-else id="app">
        <Header />
        <SubIntro :showComplete="showComplete"></SubIntro>
        <SubKv>
            <template #video>
                <video class="img-pc" :src="`../img/sub/video-kv-pc.mp4`" playsinline loop muted autoplay></video>
                <video class="img-mb" :src="`../img/sub/video-kv-mb.mp4`" playsinline loop muted autoplay></video>
            </template>

            <template #title>
                <span v-html="contents.kv.title"></span>
            </template>
        </SubKv>

        <div class="content">
            <SubInfo>
                <template #title>
                    <span v-html="contents.info.title"></span>
                </template>
                <template #description>
                    <span v-html="contents.info.description"></span>
                </template>

                <template #img>
                    <img class="img-pc" :src="`../img/sub/img-sub-info-pc.jpg`" alt="">
                    <img class="img-mb" :src="`../img/sub/img-sub-info.jpg`" alt="">
                </template>

                <template #material-title>
                    <span v-html="contents.info.material.title"></span>
                </template>

                <template #material-icon-list>
                    <li><img :src="`../img/sub/icon-material-pc-0.png`" alt=""></li>
                    <li><img :src="`../img/sub/icon-material-pc-1.png`" alt=""></li>
                    <li><img :src="`../img/sub/icon-material-pc-2.png`" alt=""></li>
                    <li><img :src="`../img/sub/icon-material-pc-3.png`" alt=""></li>
                </template>

                <template #material-list>
                    <ItemInfo :link="contents.info.material.list[ 0 ].link" :getClick="itemInfoClick">
                        <template #video>
                            <div class="poster" :style="{ backgroundImage : ( `url(../img/sub/img-video-poster-0.jpg )`)}"></div>
                            <video class="img-pc" :src="`../img/sub/plastic-thumnail.mp4`" playsinline muted loop></video>
                            <video class="img-mb m-video" :src="`../img/sub/plastic-thumnail.mp4`" autoplay playsinline muted loop></video>
                        </template>
                        <template #name>
                            <span class="poster-txt" v-html="contents.info.material.list[ 0 ].title"></span>
                        </template>
                    </ItemInfo>

                    <ItemInfo :link="contents.info.material.list[ 1 ].link" :getClick="itemInfoClick">
                        <template #video>
                            <div class="poster" :style="{ backgroundImage : ( `url(../img/sub/img-video-poster-1.jpg )`)}"></div>
                            <video class="img-pc" :src="`../img/sub/bamboo-thumnail.mp4`" playsinline muted loop></video>
                            <video class="img-mb m-video" :src="`../img/sub/bamboo-thumnail.mp4`" autoplay playsinline muted loop></video>
                        </template>

                        <template #name>
                            <span class="poster-txt" v-html="contents.info.material.list[ 1 ].title"></span>
                        </template>
                    </ItemInfo>

                    <ItemInfo :link="contents.info.material.list[ 2 ].link" :getClick="itemInfoClick">
                        <template #video>
                            <div class="poster" :style="{ backgroundImage : ( `url(../img/sub/img-video-poster-2.jpg )`)}"></div>
                            <video class="img-pc" :src="`../img/sub/wood-thumnail.mp4`" playsinline muted loop></video>
                            <video class="img-mb m-video" :src="`../img/sub/wood-thumnail.mp4`" autoplay playsinline muted loop></video>
                        </template>

                        <template #name>
                            <span class="poster-txt" v-html="contents.info.material.list[ 2 ].title"></span>
                        </template>
                    </ItemInfo>

                    <ItemInfo :link="contents.info.material.list[ 3 ].link" :getClick="itemInfoClick">
                        <template #video>
                            <div class="poster" :style="{ backgroundImage : ( `url(../img/sub/img-video-poster-3.jpg )`)}"></div>
                            <video class="img-pc" :src="`../img/sub/wool-thumnail.mp4`" playsinline muted loop></video>
                            <video class="img-mb m-video" :src="`../img/sub/wool-thumnail.mp4`" autoplay playsinline muted loop></video>
                        </template>

                        <template #name>
                            <span class="poster-txt" v-html="contents.info.material.list[ 3 ].title"></span>
                        </template>
                    </ItemInfo>

                    <ItemInfo :link="contents.info.material.list[ 4 ].link" :getClick="itemInfoClick">
                        <template #video>
                            <div class="poster" :style="{ backgroundImage : ( `url(../img/sub/img-video-poster-4.jpg )`)}"></div>
                            <video class="img-pc" :src="`../img/sub/cotton-thumnail.mp4`" playsinline muted loop></video>
                            <video class="img-mb m-video" :src="`../img/sub/cotton-thumnail.mp4`" autoplay playsinline muted loop></video>
                        </template>

                        <template #name>
                            <span class="poster-txt" v-html="contents.info.material.list[ 4 ].title"></span>
                        </template>
                    </ItemInfo>

                    <ItemInfo :link="contents.info.material.list[ 5 ].link" :getClick="itemInfoClick">
                        <template #video>
                            <div class="poster" :style="{ backgroundImage : ( `url(../img/sub/img-video-poster-5.jpg )`)}"></div>
                            <video class="img-pc" :src="`../img/sub/food-thumnail.mp4`" playsinline muted loop></video>
                            <video class="img-mb m-video" :src="`../img/sub/food-thumnail.mp4`" autoplay playsinline muted loop></video>
                        </template>

                        <template #name>
                            <span class="poster-txt" v-html="contents.info.material.list[ 5 ].title"></span>
                        </template>
                    </ItemInfo>
                </template>
            </SubInfo>

            <SubFuture>
                <template #title>
                    <span v-html="contents.future.title"></span>
                </template>

                <template #future-list>
                    <ItemFuture>
                        <template #img>
                            <img :src="`../img/sub/img-future-list-0.jpg`" alt="">
                        </template>
                        <template #title>
                            <span v-html="contents.future.list[ 0 ].title"></span>
                        </template>
                        <template #link>
                            <a :href="contents.future.list[ 0 ].link">
                                <img :src="`../img/common/btn-arrow-black.png`" alt="">
<!--                                <img :src="`../img/common/btn-arrow-box-black.png`" alt="화살표 버튼">-->
                            </a>
                        </template>
                    </ItemFuture>

                    <ItemFuture>
                        <template #img>
                            <img :src="`../img/sub/img-future-list-1.jpg`" alt="">
                        </template>
                        <template #title>
                            <span v-html="contents.future.list[ 1 ].title"></span>
                        </template>
                        <template #link>
                            <a :href="contents.future.list[ 1 ].link">
                                <img :src="`../img/common/btn-arrow-black.png`" alt="">
<!--                                <img :src="`../img/common/btn-arrow-box-black.png`" alt="화살표 버튼">-->
                            </a>
                        </template>
                    </ItemFuture>
                </template>
            </SubFuture>
        </div>

        <Footer />
    </div>
</template>

<script>

import Header from "@/components/common/comp-header";

import Footer from "@/components/common/comp-footer";
// import Footer from "@/components/common/comp-teaser-footer"

import SubIntro from "@/components/sub/comp-sub-intro";
import SubKv from "@/components/sub/comp-sub-kv";

import SubInfo from "@/components/sub/comp-sub-info";
import ItemInfo from "@/components/sub/contentsitem/item-info";

import SubFuture from "@/components/sub/comp-sub-future";
import ItemFuture from "@/components/sub/contentsitem/item-future";

import { EventBus } from "@/components/common/EventBus";
import MixinImgLoad from "@/mixin/mixin-img-load";

import { gsap, Cubic } from "gsap";
import {isIE} from "mobile-device-detect";
import VersionUpdate from "@/components/main/VersionUpdate";

export default {
    name: 'App',
    mixins : [
        MixinImgLoad
    ],

    data(){
        return{
            contents : null,
            isIE : isIE,
        }
    },

    components: {
        VersionUpdate,
        Header,

        SubIntro,
        SubKv,

        SubInfo,
        ItemInfo,

        SubFuture,
        ItemFuture,

        Footer,
    },

    created() {
        this.contents = this.$t( "contents" );
    },

    mounted() {
        if( isIE ) return;

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // mixin-img-load method 호출
        this.showLoad();
    },

    methods : {
        showComplete(){
            let subKv = this.$el.querySelector( ".comp-sub__kv" );
            let title = subKv.querySelector( "h2" );

            gsap.set( title, { y:130 });
            gsap.to( title, 1.2, { y:0, opacity:1, ease:Cubic.easeOut, onComplete:() => {
                document.querySelector( "html" ).classList.remove( "init-scroll" );
            }});
        },

        itemInfoClick(){
            let posters = this.$el.querySelectorAll( ".poster" );
            console.log( posters );

            gsap.killTweensOf( posters );
            gsap.set( posters, { opacity:1, });
        }
    }
}
</script>

<style scoped lang="scss">
    .content{
        background-color: #fff;
        position: relative;
        z-index: $z-index-kv + 1;
    }

    .desktop, .tablet{
        .content{
            width: 100%;
            min-width: 1280px;
        }
    }
</style>
