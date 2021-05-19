<template>
    <div class="detail-earth">
        <div class="inner-wrap">
            <CompDetailKv :isText="true">
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <img class="detail-kv__bg img-pc" :src="`../img/detail/earth/earth-pc-keyvisual.jpg`" alt="">
                    <img class="detail-kv__bg img-mb" :src="`../img/detail/earth/earth-m-keyvisual.jpg`" alt="">
                </template>
            </CompDetailKv>

            <div class="content">
                <CompDetailInfo class="section-padding-top_me">
                    <template #point>
                        <span v-html="contents.info0.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.info0.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info0.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/earth/earth-pc-intro-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/earth/earth-m-intro-img.jpg`" alt="">
                        </div>
                    </template>
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

                <CompDetailInfo class="section-margin_s">
                    <template #title>
                        <span v-html="contents.product_food_0.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.product_food_0.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>
                </CompDetailInfo>

                <CompDetailProduct class="section-margin_s">
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

                <CompDetailInfo>
                    <template #point>
                        <span v-html="contents.info1.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.info1.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info1.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="contents.info1.img[0].img_pc" alt="">
                            <img class="img-mb" :src="contents.info1.img[0].img_mb" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailCertification class="section-margin_s">
                    <template #list>
                        <ItemCertification v-for="( item, index ) in contents.year1.list" :key="index">
                            <template #title>
                                <span v-html="item.title"></span>
                            </template>

                            <template #year v-if="item.year">
                                <dd class="item-certificatioon__year">{{ item.year }}</dd>
                            </template>

                            <template #description>
                                <span v-html="item.description"></span>
                                <!--						<span v-for="( item, index ) in item.description" class="block-mb" v-html="item" :key="index"></span>-->
                            </template>

                            <template #img>
                                <img :src="item.img" alt="">
                            </template>
                        </ItemCertification>
                    </template>
                </CompDetailCertification>

                <CompDetailInfo class="section-margin_s">
                    <template #sub_title>
                        <span v-html="contents.year2.sub_title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.year2.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/earth/earth-pc-year-02.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/earth/earth-m-year-02.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo :isGreenType="true" class="section-margin_s">
                    <template #sub_title>
                        <span v-html="contents.year3.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.year3.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <!-- :isGreenType="true" -->
                    <template #green-percent>
                        {{ contents.year3.percent.value }}<span class="unit">%</span>
                    </template>

                    <template #green-percent-description>
                        <span v-html="contents.year3.percent.txt_description"></span>
                    </template>
                    <!-- // :isGreenType="true" -->
                </CompDetailInfo>

                <CompDetailInfo class="section-margin_s">
                    <template #sub_title>
                        <span v-html="contents.year4.sub_title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.year4.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/earth/earth-pc-year-03.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/earth/earth-m-year-03.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo
                    :isBuyBack="true" :linkBuyBack="contents.info2.buyback.link"
                >
                    <template #point>
                        <span v-html="contents.info2.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.info2.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info2.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/earth/earth-pc-info-02.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/earth/earth-m-info-02.jpg`" alt="">
                        </div>
                    </template>

                    <!-- :isBuyBack="true" -->
                    <template #buyback-title>
                        {{ contents.info2.buyback.title }}
                    </template>

                    <template #txt_link>
                        {{ contents.info2.buyback.txt_link }}
                    </template>
                    <!-- // :isBuyBack="true" -->
                </CompDetailInfo>
            </div>
        </div>
    </div>
</template>

<script>

import CompDetailKv from "@/components/detail/detailcomponents/comp-detail-kv";

import CompDetailInfo from "@/components/detail/detailcomponents/comp-detail-info";
import ItemInfoWhy from "@/components/detail/detailcomponents/contentsitem/item-info-why";

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProductFood from "@/components/detail/detailcomponents/contentsitem/item-product-food";

import CompDetailCertification from "@/components/detail/detailcomponents/comp-detail-certification";
import ItemCertification from "@/components/detail/detailcomponents/contentsitem/item-certification";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
	name: "Earth",

	data() {
		return {
			contents: null
		}
	},

    mixins : [
        MixinImgLoad
    ],

    components: {
		CompDetailKv,

		CompDetailInfo,
		ItemInfoWhy,

		CompDetailProduct,
		ItemProductFood,
		CompDetailCertification,
		ItemCertification
	},

	created() {
		this.contents = this.$t("contents");
	},

    mounted() {
	    this.showLoad();
    }
}
</script>

<style scoped lang="scss">
.detail-earth{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>