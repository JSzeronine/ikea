<template>
    <div class="detail-wood">
        <div class="inner-wrap">
            <CompDetailKv>
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/detail/wood/wood-pc-main.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/detail/wood/wood-m-main.mp4`" muted playsinline autoplay loop></video>
                </template>
            </CompDetailKv>

            <div class="content">
                <CompDetailInfo class="section-padding-top_me">
                    <template #title>
                        <span v-html="contents.info0.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info0.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/wood/wood-pc-effort-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/wood/wood-m-effort-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo :isYear="true" :yearValue="contents.info_year_0.txt_year">
                    <!-- :isYear="true" -->
                    <template #year>
                        <div class="detail-info__year-value" :style="{ backgroundImage : ( `url( ../img/detail/wood/wood-year-bg.jpg )`)}">
                            <span v-html="contents.info_year_0.txt_year"></span>
                        </div>
                    </template>
                    <template #year-txt>
                        <span v-html="contents.info_year_0.txt_year_after"></span>
                    </template>
                    <!-- // :isYear="true" -->

                    <template #title>
                        <span v-html="contents.info_year_0.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info_year_0.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 왼쪽 정렬 class="comp-detail__pos-left" -->
                        <div class="comp-detail__pos-left">
                            <img class="img-pc" :src="`../img/detail/wood/wood-pc-year-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/wood/wood-m-year-img.jpg`" alt="">
                        </div>
                    </template>

                    <template #popup-content>
                        <ItemPopup v-for="( item, index ) in contents.info_year_0.popup" :key="index">
                            <template #img>
                                <img :src="item.img" alt="">
                            </template>

                            <template #title>
                                <span v-html="item.title"></span>
                            </template>

                            <template #description>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemPopup>
                    </template>
                </CompDetailInfo>

                <CompDetailCertification>
                    <template #list>
                        <ItemCertification v-for="( item, index ) in contents.certification.list">
                            <template #title>
                                <span v-html="item.title"></span>
                            </template>

                            <template #description>
                                <span v-html="item.description"></span>
                            </template>

                            <template #img>
                                <img :src="item.img" alt="">
                            </template>
                        </ItemCertification>
                    </template>
                </CompDetailCertification>

                <CompDetailReply
                    :isTopImage="true"
                    class="section-margin_s"
                >
                    <template #reply>
                        <span v-html="contents.reply_top_image.title"></span>
                    </template>

                    <template #user>
                        <span v-html="contents.reply_top_image.description"></span>
                    </template>

                    <!-- 비디오 -->
                    <!-- :isTopImage="true" -->
                    <template #reply-top-view>
                        <video class="img-pc" :src="`../img/detail/wood/wood-pc-reply-top-video.mp4`" muted playsinline autoplay loop></video>
                        <video class="img-mb" :src="`../img/detail/wood/wood-m-reply-top-video.mp4`" muted playsinline autoplay loop></video>
                    </template>
                    <!--// :isTopImage="true" -->

                    <template #material>
                        <img :src="`../img/detail/wood/wood-reply-img.jpg`" alt="">
                    </template>
                </CompDetailReply>

                <CompDetailProduct :isRepresent="false" class="section-margin_s">
                    <template #list>
                        <ItemProduct v-for="( item, index ) in contents.product_0.list" :key="index" :link="item.link">
                            <template #img>
                                <img :src="item.img" alt="">
                            </template>
                            <template #name>
                                <span v-html="item.title"></span>
                            </template>

                            <template #description>
                                <span v-html="item.keyword"></span>
                            </template>

                            <template #price>
                                {{ item.price }}<span>{{ item.number }}</span>
                            </template>

                            <template #sub-title>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemProduct>
                    </template>
                </CompDetailProduct>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info1.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info1.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/wood/wood-pc-seed-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/wood/wood-m-seed-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

            </div>
        </div>
    </div>
</template>

<script>
import CompDetailKv from "@/components/detail/detailcomponents/comp-detail-kv";

import CompDetailInfo from "@/components/detail/detailcomponents/comp-detail-info";

import CompDetailCertification from "@/components/detail/detailcomponents/comp-detail-certification";
import ItemCertification from "@/components/detail/detailcomponents/contentsitem/item-certification";

import CompDetailReply from "@/components/detail/detailcomponents/comp-detail-reply";

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProduct from "@/components/detail/detailcomponents/contentsitem/item-product";
import ItemPopup from "@/components/detail/detailcomponents/contentsitem/item-popup";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: "Wood",
    data(){
        return{
            contents : null,
        }
    },

    mixins : [
        MixinImgLoad
    ],

    components : {
        CompDetailKv,

        CompDetailInfo,

        CompDetailCertification,
        ItemCertification,

        CompDetailReply,

        CompDetailProduct,
        ItemProduct,
        ItemPopup
    },

    created() {
        this.contents = this.$t( "contents" );
    },

    mounted() {
        this.showLoad();
    }
}
</script>

<style scoped lang="scss">
.detail-wood{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>