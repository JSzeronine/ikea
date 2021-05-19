<template>
    <div class="detaill-all">
        <div class="inner-wrap">
            <CompDetailKv>
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/sample-video2.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/sample-video.mp4`" muted playsinline autoplay loop></video>
                </template>
            </CompDetailKv>

            <CompDetailKv :isText="true">
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/sample-video2.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/sample-video.mp4`" muted playsinline autoplay loop></video>
                </template>
            </CompDetailKv>

            <div class="content">
                <CompDetailInfo class="section-padding-top_me"
                    :isBuyBack="true" :linkBuyBack="contents.info0.buyback.link"
                    :isEmbrace="true"
                >
                    <template #point>
                        <span v-html="contents.info0.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.info0.title"></span>
                    </template>
                    <template #sub_title>
                        <span v-html="contents.info0.sub_title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info0.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/sample-detailall-info-img-pc.jpg`" alt="">
                            <img class="img-mb" :src="`../img/sample-detailall-info-img.jpg`" alt="">
                        </div>

                        <div class="comp-detail__pos-right">
                            <video class="img-pc" :src="contents.info0.video[ 0 ].video_pc" playsinline muted loop autoplay></video>
                            <video class="img-mb" :src="contents.info0.video[ 0 ].video_mb" playsinline muted loop autoplay></video>
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

                    <!-- :isEmbrace="true" -->
                    <template #embrace>
                        <ItemInfoEmbrace v-for="( item, index ) in contents.info0.embrace" :key="index">
                            <template #img>
                                <img :src="item.img" alt="">
                            </template>

                            <template #description>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemInfoEmbrace>
                    </template>

                    <!-- :isBuyBack="true" -->
                    <template #buyback-title>
                        {{ contents.info0.buyback.title }}
                    </template>

                    <template #txt_link>
                        {{ contents.info0.buyback.txt_link }}
                    </template>
                    <!-- // :isBuyBack="true" -->
                </CompDetailInfo>

                <CompDetailInfo :isYear="true" :yearValue="contents.info_year_0.txt_year">
                    <!-- :isYear="true" -->
                    <template #year>
                        <div class="detail-info__year-value" :style="{ backgroundImage : ( `url( ../img/sample-detailall-info-img.jpg )`)}">
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
                            <img class="img-pc" :src="`../img/sample-detailall-info-img2-pc.jpg`" alt="">
                            <img class="img-mb" :src="`../img/sample-detailall-info-img2.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo :isGreenType="true">
                    <template #title>
                        <span v-html="contents.info_green_0.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.info_green_0.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <!-- :isGreenType="true" -->
                    <template #green-percent>
                        {{ contents.info_green_0.percent.value }}<span class="unit">%</span>
                    </template>

                    <template #green-percent-description>
                        <span v-html="contents.info_green_0.percent.txt_description"></span>
                    </template>

                    <template #green-description>
                        <span v-html="contents.info_green_0.percent.txt_bottom_description"></span>
                    </template>

                    <template #green-img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/sample-detailall-info-img2-pc.jpg`" alt="">
                            <img class="img-mb" :src="`../img/sample-detailall-info-img2.jpg`" alt="">
                        </div>
                    </template>
                    <!-- // :isGreenType="true" -->
                </CompDetailInfo>

                <CompDetailInfo :isWhy="true">
                    <template #title>
                        <span v-html="contents.info_why_0.title"></span>
                    </template>

                    <!-- :isWhy="true" -->
                    <template #listWhy>

                        <ItemInfoWhy v-for="( item, index ) in contents.info_why_0.list" :key="index">
                            <template #img>
                                <img :src="item.img" alt="">
                            </template>

                            <template #title>
                                <span v-html="item.title"></span>
                            </template>

                            <template #description>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemInfoWhy>

                    </template>
                    <!-- // :isWhy="true" -->
                </CompDetailInfo>

                <!--        &lt;!&ndash; 이거 안씀( 혹시 몰라서 일단 갖고 있음 ) &ndash;&gt;-->
                <!--        <CompDetailInfo-->
                <!--            :isTreeType="true"-->
                <!--            :bgTreeType="`../img/detail/icon-tree.png`"-->
                <!--        >-->
                <!--            &lt;!&ndash; :isTreeType="true" &ndash;&gt;-->
                <!--            <template #tree-percent>-->
                <!--                100<span>%</span>-->
                <!--            </template>-->

                <!--            <template #tree-description>-->
                <!--                ATTAINMENT-->
                <!--            </template>-->
                <!--            &lt;!&ndash; // :isTreeType="true" &ndash;&gt;-->

                <!--            <template #title>-->
                <!--                책임감 있는<br>-->
                <!--                산림 관리를 위한 노력-->
                <!--            </template>-->
                <!--            <template #description>-->
                <!--                IKEA는 리테일 업계에서 목재를 가장 많이 사용하는<br class='pc-br'>-->
                <!--                기업 중 하나입니다. 그렇기 때문에 더 현명하게 목재를 소비하고<br class='pc-br'>-->
                <!--                엄격한 기준으로 목재를 공급받을 수 있는 방법을<br class='pc-br'>-->
                <!--                끊임없이 연구하고 있습니다.<br class='pc-br'>-->
                <!--                <br>-->
                <!--                2017년 IKEA는 지속적인 산림 관리 개선을 위해 노력하는<br class='pc-br'>-->
                <!--                국가의 지속 가능한 출처에서 공급받은 목재만을 사용하겠다는<br class='pc-br'>-->
                <!--                목표를 100% 달성했습니다.-->
                <!--            </template>-->
                <!--        </CompDetailInfo>-->
                <!--        &lt;!&ndash; // 이거 안씀( 혹시 몰라서 일단 갖고 있음 ) &ndash;&gt;-->

                <CompDetailProduct :isRepresent="true">
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

                    <template #description>
                        <span v-html="contents.product_0.description"></span>
                    </template>

                    <!-- :isRepresent="true" -->
                    <template #represent-img>
                        <img class="img-pc" :src="`../img/sample-detailall-img1-pc.jpg`" alt="">
                        <img class="img-mb" :src="`../img/sample-detailall-img1.jpg`" alt="">
                    </template>
                    <!--// :isRepresent="true" -->
                </CompDetailProduct>


                <CompDetailProduct>
                    <template #list>

                        <ItemProductFood v-for="( item, index ) in contents.product_food_0.list" :key="index" :link="item.link">
                            <template #img>
                                <img :src="item.img" alt="">
                            </template>

                            <template #name>
                                <p>
                                    <span v-html="item.sub_title"></span>
                                </p>

                                <span v-html="item.title"></span>
                            </template>

                            <template #price>
                                {{ item.price }}<span>{{ item.number }}</span>
                            </template>

                            <template #sub-title>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemProductFood>

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
                        <img :src="`../img/sample-detailall-reply-material.png`" alt="">


                    </template>

                    <template #material-description>
                        <span v-html="contents.reply.material.description"></span>
                    </template>
                </CompDetailReply>


                <CompDetailReply
                    :isPercent="true"
                    :isMaterial="false"
                    :isLine="false"
                    :isBottomImage="true"
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

                <CompDetailReply
                    :isTopImage="true"
                >
                    <template #reply>
                        <span v-html="contents.reply_top_image.title"></span>
                    </template>

                    <template #user>
                        <span v-html="contents.reply_top_image.description"></span>
                    </template>

                    <!-- :isTopImage="true" -->
                    <template #reply-top-view>
                        <img class="img-pc" :src="`../img/sample-detailall-reply-top-img-pc.jpg`" alt="">
                        <img class="img-mb" :src="`../img/sample-detailall-info-img.jpg`" alt="">
                    </template>
                    <!--// :isTopImage="true" -->

                    <template #material>
                        <img :src="`../img/sample-detailall-reply-material.png`" alt="">
                    </template>
                </CompDetailReply>

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
                        <img class="img-pc" :src="`../img/sample-detailall-reply-bottom-img-pc.jpg`" alt="">
                        <img class="img-mb" :src="`../img/sample-detailall-info-img.jpg`" alt="">
                    </template>
                    <!--.. :isBottomImage="true" -->
                </CompDetailReply>

                <CompDetailRecycle>
                    <template #title>
                        <span v-html="contents.recycle.title"></span>
                    </template>

                    <template #description>
                        <span v-html="contents.recycle.description"></span>
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
                                {{ item.txt_year }}<span>{{ item.txt_year_after }}</span>
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

                <CompDetailReason>
                    <template #title>
                        <span v-html="contents.reason.title"></span>
                    </template>

                    <template #img>
                        <img :src="`../img/sample-detailall-reason-icon.png`" alt="">
                    </template>

                    <template #list>
                        <ItemReason v-for="( description, index ) in contents.reason.list" :key="index">
                            <template #description>
                                <span v-html="description"></span>
                            </template>
                        </ItemReason>
                    </template>

                    <template #media>
                        <img class="img-pc" :src="`../img/sample-detailall-img1-pc.jpg`" alt="">
                        <img class="img-mb" :src="`../img/sample-detailall-img1.jpg`" alt="">

                        <video class="img-pc" :src="contents.reason.video_pc" autoplay muted playsinline loop></video>
                        <video class="img-mb" :src="contents.reason.video_mb" autoplay muted playsinline loop></video>
                    </template>
                </CompDetailReason>

                <CompDetailCertification>
                    <template #list>
                        <ItemCertification v-for="( item, index ) in contents.certification.list" :key="index">
                            <template #title>
                                <span v-html="item.title"></span>
                            </template>

                            <template #year v-if="item.year">
                                <dd class="item-certificatioon__year">{{ item.year }}</dd>
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

                <CompDetailCompany>
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
            </div>
        </div>
    </div>
</template>

<script>

import CompDetailKv from "@/components/detail/detailcomponents/comp-detail-kv";

import CompDetailInfo from "@/components/detail/detailcomponents/comp-detail-info";
import ItemInfoWhy from "@/components/detail/detailcomponents/contentsitem/item-info-why";
import ItemInfoEmbrace from "@/components/detail/detailcomponents/contentsitem/item-info-embrace";
import ItemPopup from "@/components/detail/detailcomponents/contentsitem/item-popup";

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProduct from "@/components/detail/detailcomponents/contentsitem/item-product";
import ItemProductFood from "@/components/detail/detailcomponents/contentsitem/item-product-food";

import CompDetailReply from "@/components/detail/detailcomponents/comp-detail-reply";

import CompDetailRecycle from "@/components/detail/detailcomponents/comp-detail-recycle";
import ItemRecycle from "@/components/detail/detailcomponents/contentsitem/item-recycle";

import CompDetailRecycleTotal from "@/components/detail/detailcomponents/comp-detail-recycle-total";
import ItemRecycleTotal from "@/components/detail/detailcomponents/contentsitem/item-recycle-total";

import CompDetailReason from "@/components/detail/detailcomponents/comp-detail-reason";
import ItemReason from "@/components/detail/detailcomponents/contentsitem/item-reason";

import CompDetailCertification from "@/components/detail/detailcomponents/comp-detail-certification";
import ItemCertification from "@/components/detail/detailcomponents/contentsitem/item-certification";

import CompDetailCompany from "@/components/detail/detailcomponents/comp-detail-company";
import ItemCompany from "@/components/detail/detailcomponents/contentsitem/item-company";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: "DetailAll",

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
        ItemInfoWhy,
        ItemInfoEmbrace,
        ItemPopup,

        CompDetailProduct,
        ItemProduct,
        ItemProductFood,

        CompDetailReply,

        CompDetailRecycle,
        ItemRecycle,

        CompDetailRecycleTotal,
        ItemRecycleTotal,

        CompDetailReason,
        ItemReason,

        CompDetailCertification,
        ItemCertification,

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
.detaill-all{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>