<template>
    <div class="detail-bamboo">
        <div class="inner-wrap">
            <CompDetailKv>
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/detail/bamboo/bamboo-pc-main.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/detail/bamboo/bamboo-m-main.mp4`" muted playsinline autoplay loop></video>
                </template>
            </CompDetailKv>

            <div class="content">
                <CompDetailInfo class="section-padding-top_me">
                    <template #title>
                        <span v-html="contents.recycle.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.recycle.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>
                </CompDetailInfo>

                <CompDetailReason>
                    <template #title>
                        <span v-html="contents.reason.title"></span>
                    </template>

                    <template #img>
                        <img :src="`../img/detail/bamboo/bamboo-select-circle-img.jpg`" alt="">
                    </template>

                    <template #list>
                        <ItemReason v-for="( description, index ) in contents.reason.list" :key="index">
                            <template #description>
                                <span v-html="description"></span>
                            </template>
                        </ItemReason>
                    </template>

                    <template #media>
                        <img class="img-pc" :src="`../img/detail/bamboo/bamboo-pc-select-img.jpg`" alt="">
                        <img class="img-mb" :src="`../img/detail/bamboo/bamboo-m-select-img.jpg`" alt="">
                    </template>
                </CompDetailReason>

                <CompDetailInfo :isYear="true" :yearValue="contents.info_year_0.txt_year">
                    <!-- :isYear="true" -->
                    <template #year>
                        <div class="detail-info__year-value" :style="{ backgroundImage : ( `url( ../img/detail/bamboo/bamboo-year-bg.jpg )`)}">
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
                            <img class="img-pc" :src="`../img/detail/bamboo/bamboo-pc-year-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/bamboo/bamboo-m-year-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info0.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info0.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <!-- 비디오 -->
                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <video class="img-pc" :src="contents.info0.video[ 0 ].video_pc" playsinline muted loop autoplay></video>
                            <video class="img-mb" :src="contents.info0.video[ 0 ].video_mb" playsinline muted loop autoplay></video>
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo class="section-margin_s">
                    <template #title>
                        <span v-html="contents.info1.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info1.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/bamboo/bamboo-pc-idea-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/bamboo/bamboo-m-idea-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailProduct :isRepresent="false" class="section-margin_s">
                    <template #list>
                        <ItemProduct v-for="( item, index ) in contents.product_0.list" :key="index" :link="item.link">
                            <template #sale-description v-if="item.sale">
                                <span v-html="item.sale.description"></span>
                            </template>

                            <template #sale-price v-if="item.sale">
                                {{ item.sale.price }}
                            </template>

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

                <CompDetailReply>
                    <template #reply>
                        <span v-html="contents.reply.title"></span>
                    </template>

                    <template #user>
                        <span v-html="contents.reply.description"></span>
                    </template>

                    <template #material>
                        <img :src="`../img/detail/bamboo/bamboo-reply-img.jpg`" alt="">
                    </template>
                </CompDetailReply>

            </div>
        </div>
    </div>
</template>

<script>
import CompDetailKv from "@/components/detail/detailcomponents/comp-detail-kv";

import CompDetailRecycle from "@/components/detail/detailcomponents/comp-detail-recycle";

import CompDetailReason from "@/components/detail/detailcomponents/comp-detail-reason";
import ItemReason from "@/components/detail/detailcomponents/contentsitem/item-reason";

import CompDetailInfo from "@/components/detail/detailcomponents/comp-detail-info";

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProduct from "@/components/detail/detailcomponents/contentsitem/item-product";
import CompDetailReply from "@/components/detail/detailcomponents/comp-detail-reply";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: "Bamboo",
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

        CompDetailRecycle,

        CompDetailReason,
        ItemReason,

        CompDetailInfo,

        CompDetailProduct,
        ItemProduct,

        CompDetailReply

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
.detail-bamboo{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>