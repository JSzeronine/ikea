<template>
	<div class="detail-community">
        <div class="inner-wrap">
            <CompDetailKv :isText="true">
                <template #title>
                    <span v-html="contents.kv.title"></span>
                </template>
                <template #img>
                    <img class="detail-kv__bg img-pc" :src="`../img/detail/community/community-pc-keyvisual.jpg`" alt="">
                    <img class="detail-kv__bg img-mb" :src="`../img/detail/community/community-m-keyvisual.jpg`" alt="">
                </template>
            </CompDetailKv>

            <div class="content">
                <CompDetailInfo class="section-padding-top_me">
                    <template #title>
                        <span v-html="contents.info1.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info1.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/community/community-pc-info1-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/community/community-m-info1-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo
                    :isEmbrace="true"
                >
                    <template #title>
                        <span v-html="contents.info2.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.info2.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 왼쪽 정렬 class="comp-detail__pos-left" -->
                        <div class="comp-detail__pos-left">
                            <img class="img-pc" :src="`../img/detail/community/community-pc-info2-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/community/community-m-info2-img.jpg`" alt="">
                        </div>
                    </template>

                    <!-- :isEmbrace="true" -->
                    <template #embrace>
                        <ItemInfoEmbrace v-for="( item, index ) in contents.info2.embrace" :key="index">
                            <template #img>
                                <img :src="item.img" alt="">
                            </template>

                            <template #description>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemInfoEmbrace>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info3.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info3.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/community/community-pc-info3-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/community/community-m-info3-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info4.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.info4.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 왼쪽 정렬 class="comp-detail__pos-left" -->
                        <div class="comp-detail__pos-left">
                            <img class="img-pc" :src="`../img/detail/community/community-pc-info4-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/community/community-m-info4-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info5.title"></span>
                    </template>
                    <template #description>
                        <span v-for="( item, index ) in contents.info5.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 오른쪽 정렬 class="comp-detail__pos-right" -->
                        <div class="comp-detail__pos-right">
                            <img class="img-pc" :src="`../img/detail/community/community-pc-info5-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/community/community-m-info5-img.jpg`" alt="">
                        </div>
                    </template>
                </CompDetailInfo>

                <CompDetailInfo>
                    <template #title>
                        <span v-html="contents.info6.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.info6.description" class="block-mb" v-html="item" :key="index"></span>
                    </template>

                    <template #img>
                        <!-- 왼쪽 정렬 class="comp-detail__pos-left" -->
                        <div class="comp-detail__pos-left">
                            <img class="img-pc" :src="`../img/detail/community/community-pc-info6-img.jpg`" alt="">
                            <img class="img-mb" :src="`../img/detail/community/community-m-info6-img.jpg`" alt="">
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
import ItemInfoEmbrace from "@/components/detail/detailcomponents/contentsitem/item-info-embrace";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
	name: "Community",

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
		ItemInfoEmbrace
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
.detail-community{
    .inner-wrap{
        .content{
            background-color: #fff;
            position: relative;
            z-index: $z-index-kv + 1;
        }
    }
}
</style>