<template>
    <div class="detail-wool">
        <div class="inner-wrap">
            <CompDetailKv>
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/detail/wool/wool-pc-main.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/detail/wool/wool-m-main.mp4`" muted playsinline autoplay loop></video>
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
                            <img class="img-pc" :src="`../img/detail/wool/wool-pc-faith-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/wool/wool-m-faith-img.jpg`" alt="">
                        </div>
                    </template>

                    <template #popup-content>
                        <ItemPopup v-for="( item, index ) in contents.info0.popup" :key="index">
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

                <CompDetailInfo :isYear="true" :yearValue="contents.info_year_0.txt_year">
                    <!-- :isYear="true" -->
                    <template #year>
                        <div class="detail-info__year-value" :style="{ backgroundImage : ( `url( ../img/detail/wool/wool-year-bg.jpg )`)}">
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
                            <video class="img-pc" :src="`../img/detail/wool/wool-pc-year-video.mp4`" muted playsinline autoplay loop></video>
                            <video class="img-mb" :src="`../img/detail/wool/wool-m-year-video.mp4`" muted playsinline autoplay loop></video>
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailReason>
                    <template #title>
                        <span v-html="contents.reason.title"></span>
                    </template>

                    <template #img>
                        <img :src="`../img/detail/wool/wool-select-circle-img.jpg`" alt="">
                    </template>

                    <template #list>
                        <ItemReason v-for="( description, index ) in contents.reason.list" :key="index">
                            <template #description>
                                <span v-html="description"></span>
                            </template>
                        </ItemReason>
                    </template>

                    <!-- 비디오 -->
                    <template #media>
                        <video class="img-pc" :src="contents.reason.video_pc" autoplay muted playsinline loop></video>
                        <video class="img-mb" :src="contents.reason.video_mb" autoplay muted playsinline loop></video>
                    </template>
                </CompDetailReason>

                <CompDetailReply class="section-margin_s">
                    <template #reply>
                        <span v-html="contents.reply.title"></span>
                    </template>

                    <template #user>
                        <span v-html="contents.reply.description"></span>
                    </template>

                    <template #material>
                        <img :src="`../img/detail/wool/wool-reply-img.jpg`" alt="">
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
                            <img class="img-pc" :src="`../img/detail/wool/wool-pc-effort-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/wool/wool-m-effort-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailCompany class="section-margin_s">
                    <template #list>
                        <ItemCompany v-for="( item, index ) in contents.company.list" :key="index">
                            <template #value>
                                {{ item.title }}
                            </template>
                            <template #description>
                                <span v-html="item.description"></span>
                            </template>
                            <template #icon>
                                <img class="img-pc" :src="item.img_icon_pc" alt="">
                                <img class="img-mb" :src="item.img_icon_mb" alt="">
                            </template>
                        </ItemCompany>
                    </template>
                </CompDetailCompany>

                <CompDetailReply
                    :isBottomImage="true"
                    :isMaterial="false"
                >
                    <template #reply>
                        <span v-html="contents.reply_bottom_image.title"></span>
                    </template>

                    <template #user>
                        <span v-html="contents.reply_bottom_image.description"></span>
                    </template>

                    <!-- :isBottomImage="true" -->
                    <template #reply-bottom-view>
                        <img class="img-pc" :src="`../img/detail/wool/wool-pc-reply-bottom.jpg`" alt="">
                        <img class="img-mb" :src="`../img/detail/wool/wool-m-reply-bottom.jpg`" alt="">
                    </template>
                    <!--.. :isBottomImage="true" -->
                </CompDetailReply>
            </div>
        </div>
    </div>
</template>

<script>
import CompDetailKv from "@/components/detail/detailcomponents/comp-detail-kv";

import CompDetailInfo from "@/components/detail/detailcomponents/comp-detail-info";

import CompDetailReason from "@/components/detail/detailcomponents/comp-detail-reason";
import ItemReason from "@/components/detail/detailcomponents/contentsitem/item-reason";

import CompDetailReply from "@/components/detail/detailcomponents/comp-detail-reply";

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProduct from "@/components/detail/detailcomponents/contentsitem/item-product";

import CompDetailCompany from "@/components/detail/detailcomponents/comp-detail-company";
import ItemCompany from "@/components/detail/detailcomponents/contentsitem/item-company";
import ItemPopup from "@/components/detail/detailcomponents/contentsitem/item-popup";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: "Wool",
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
        ItemPopup,

        CompDetailReason,
        ItemReason,

        CompDetailReply,

        CompDetailProduct,
        ItemProduct,

        CompDetailCompany,
        ItemCompany,

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
.detail-wool{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>