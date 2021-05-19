<template>
    <div class="detail-cotton">
        <div class="inner-wrap">
            <CompDetailKv>
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/detail/cotton/cotton-pc-main.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/detail/cotton/cotton-m-main.mp4`" muted playsinline autoplay loop></video>
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
                            <img class="img-pc" :src="`../img/detail/cotton/cotton-pc-promise-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/cotton/cotton-m-promise-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo :isYear="true" :yearValue="contents.info_year_0.txt_year" class="section-margin_s">
                    <!-- :isYear="true" -->
                    <template #year>
                        <div class="detail-info__year-value" :style="{ backgroundImage : ( `url( ../img/detail/cotton/cotton-year-bg.jpg )`)}">
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
                            <img class="img-pc" :src="`../img/detail/cotton/cotton-pc-year-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/cotton/cotton-m-year-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailProduct class="section-margin_s">
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

                <CompDetailReply
                    :isPercent="true"
                    :isLine="false"
                    :isBottomImage="true"
                    :isMaterial="false"
                >
                    <template #reply>
                        <span v-html="contents.reply_percent.title"></span>
                    </template>

                    <template #user>
                        <span v-html="contents.reply_percent.description"></span>
                    </template>

                    <!-- :isPercent="true" -->
                    <template #percent>
                        {{ contents.reply_percent.percent.value }}
                    </template>
                    <template #percent-title>
                        <span v-html="contents.reply_percent.percent.title"></span>
                    </template>
                    <!--// :isPercent="true" -->

                    <!-- :isBottomImage="true" -->
                    <template #reply-bottom-view>
                        <img class="img-pc" :src="`../img/detail/cotton/cotton-pc-reply-bottom.jpg`" alt="">
                        <img class="img-mb" :src="`../img/detail/cotton/cotton-m-reply-bottom.jpg`" alt="">
                    </template>
                    <!--.. :isBottomImage="true" -->
                </CompDetailReply>

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
                            <img class="img-pc" :src="`../img/detail/cotton/cotton-pc-grow-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/cotton/cotton-m-grow-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info2.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info2.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <!-- 비디오 -->
                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <video class="img-pc" :src="contents.info2.video[ 0 ].video_pc" playsinline muted loop autoplay></video>
                            <video class="img-mb" :src="contents.info2.video[ 0 ].video_mb" playsinline muted loop autoplay></video>
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

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProduct from "@/components/detail/detailcomponents/contentsitem/item-product";

import CompDetailReply from "@/components/detail/detailcomponents/comp-detail-reply";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: "Cotton",
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

        CompDetailProduct,
        ItemProduct,

        CompDetailReply,
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
.detail-cotton{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>