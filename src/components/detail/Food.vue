<template>
    <div class="detail-food">
        <div class="inner-wrap">
            <CompDetailKv>
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <video class="detail-kv__bg img-pc" :src="`../img/detail/food/food-pc-main.mp4`" muted playsinline autoplay loop></video>
                    <video class="detail-kv__bg img-mb" :src="`../img/detail/food/food-m-main.mp4`" muted playsinline autoplay loop></video>
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
                            <img class="img-pc" :src="`../img/detail/food/food-pc-faithful-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/food/food-m-faithful-img.jpg`" alt="">
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
                    <!-- // :isGreenType="true" -->
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info1.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info1.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>
렬
                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/food/food-pc-weather-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/food/food-m-weather-img.jpg`" alt="">
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

                    <template #img>
                        <!-- 왼쪽 정렬 class="comp-detail__pos-left" -->
                        <div class="comp-detail__pos-left">
                            <img class="img-pc" :src="`../img/detail/food/food-pc-drop-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/food/food-m-drop-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

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
                        <span v-html="contents.info3.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info3.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/food/food-pc-salmon-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/food/food-m-salmon-img.jpg`" alt="">
                        </div>
                    </template>

                    <template #popup-content>
                        <ItemPopup v-for="( item, index ) in contents.info3.popup" :key="index">
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

                <CompDetailProduct :isRepresent="false" class="section-margin_s">
                    <template #list>
                        <ItemProduct v-for="( item, index ) in contents.product_1.list" :key="index" :link="item.link">
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
                        <span v-html="contents.info4.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info4.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 왼쪽 정렬 class="comp-detail__pos-left" -->
                        <div class="comp-detail__pos-left">
                            <img class="img-pc" :src="`../img/detail/food/food-pc-coffee-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/food/food-m-coffee-img.jpg`" alt="">
                        </div>
                    </template>

                    <template #popup-content>
                        <ItemPopup v-for="( item, index ) in contents.info4.popup" :key="index">
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

                <CompDetailProduct :isRepresent="false" class="section-margin_s">
                    <template #list>
                        <ItemProduct v-for="( item, index ) in contents.product_2.list" :key="index" :link="item.link">
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
                        <span v-html="contents.info5.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info5.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/food/food-pc-choco-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/food/food-m-choco-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailProduct :isRepresent="false" class="section-margin_s">
                    <template #list>
                        <ItemProduct v-for="( item, index ) in contents.product_3.list" :key="index" :link="item.link">
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
            </div>
        </div>
    </div>
</template>

<script>
import CompDetailKv from "@/components/detail/detailcomponents/comp-detail-kv";

import CompDetailInfo from "@/components/detail/detailcomponents/comp-detail-info";

import CompDetailProduct from "@/components/detail/detailcomponents/comp-detail-product";
import ItemProduct from "@/components/detail/detailcomponents/contentsitem/item-product";
import ItemPopup from "@/components/detail/detailcomponents/contentsitem/item-popup";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: "Food",
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

        CompDetailProduct,
        ItemProduct,
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
.detail-food{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>