<template>
    <div class="detail-plastic">
        <div class="inner-wrap">
            <CompDetailKv class="kv">
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/detail/plastic/plastic-pc-main.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/detail/plastic/plastic-m-main.mp4`" muted playsinline autoplay loop></video>
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

                    <!-- 비디오 -->
                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <video class="img-pc" :src="contents.info0.video[ 0 ].video_pc" playsinline muted loop autoplay></video>
                            <video class="img-mb" :src="contents.info0.video[ 0 ].video_mb" playsinline muted loop autoplay></video>
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo :isYear="true" :yearValue="contents.info_year_0.txt_year">
                    <!-- :isYear="true" -->
                    <template #year>
                        <div class="detail-info__year-value" :style="{ backgroundImage : ( `url( ../img/detail/plastic/plastic-year-bg.jpg )`)}">
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
                            <img class="img-pc" :src="`../img/detail/plastic/plastic-pc-year-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/plastic/plastic-m-year-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info1.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info1.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <!-- 비디오 -->
                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <video class="img-pc" :src="contents.info1.video[ 0 ].video_pc" playsinline muted loop autoplay></video>
                            <video class="img-mb" :src="contents.info1.video[ 0 ].video_mb" playsinline muted loop autoplay></video>
                        </div>

                        <div class="comp-detail__pos-right">
                            <video class="img-pc" :src="contents.info1.video[ 1 ].video_pc" playsinline muted loop autoplay></video>
                            <video class="img-mb" :src="contents.info1.video[ 1 ].video_mb" playsinline muted loop autoplay></video>
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo class="section-margin_s">
                    <template #title>
                        <span v-html="contents.info2.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info2.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <!-- 이미지 -->
                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/plastic/plastic-pc-safe-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/plastic/plastic-m-safe-img.jpg`" alt="">
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

                <CompDetailReply>
                    <template #reply>
                        <span v-html="contents.reply.title"></span>
                    </template>

                    <template #user>
                        <span v-html="contents.reply.description"></span>
                    </template>

                    <template #material>
                        <video :src="`../img/detail/plastic/plastic-reply-video.mp4`" muted playsinline autoplay loop></video>
                    </template>

                    <template #material-description>
                        <span v-html="contents.reply.material.description"></span>
                    </template>
                </CompDetailReply>

                <CompDetailRecycle>
                    <template #title>
                        <span v-html="contents.recycle.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.recycle.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #list>
                        <ItemRecycle v-for="( item, index ) in contents.recycle.list" :key="index" :link="item.link">
                            <template #img>
                                <img :src="item.img_product" alt="">
                            </template>
                            <template #title>
                                <span v-html="item.title"></span>
                            </template>
                            <template #description>
                                <span v-html="item.keyword"></span>
                            </template>
                            <template #price>
                                {{ item.price }}
                            </template>
                            <template #pet>
                                {{ item.txt_pet }}
                            </template>
                            <template #material-description>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemRecycle>
                    </template>
                </CompDetailRecycle>

                <CompDetailRecycleTotal>
                    <template #title>
                        <span v-html="contents.recycletotal.title"></span>
                    </template>
                    <template #list>
                        <ItemRecycleTotal v-for="( item, index ) in contents.recycletotal.list" :key="index">
                            <template #year>
								<strong>{{ item.txt_year }}</strong><span>{{ item.txt_year_after }}</span>
                            </template>
                            <template #img>
                                <img :src="item.img_icon" alt="">
                            </template>
                            <template #description>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemRecycleTotal>
                    </template>
                </CompDetailRecycleTotal>

            </div>
        </div>
    </div>
</template>

<script>
import CompDetailKv from "@/components/detail/detailcomponents/comp-detail-kv";

import CompDetailInfo from "@/components/detail/detailcomponents/comp-detail-info";

import CompDetailReply from "@/components/detail/detailcomponents/comp-detail-reply";

import CompDetailRecycle from "@/components/detail/detailcomponents/comp-detail-recycle";
import ItemRecycle from "@/components/detail/detailcomponents/contentsitem/item-recycle";

import CompDetailRecycleTotal from "@/components/detail/detailcomponents/comp-detail-recycle-total";
import ItemRecycleTotal from "@/components/detail/detailcomponents/contentsitem/item-recycle-total";

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProduct from "@/components/detail/detailcomponents/contentsitem/item-product";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: "Plastic",
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

        CompDetailReply,

        CompDetailRecycle,
        ItemRecycle,

        CompDetailRecycleTotal,
        ItemRecycleTotal,

        CompDetailProduct,
        ItemProduct
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
    .detail-plastic{
        .inner-wrap{
            .content{
                background-color: #fff;
                position: relative;
                z-index: $z-index-kv + 1;
            }
        }
    }
</style>