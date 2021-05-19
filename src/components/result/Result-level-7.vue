<template>
	<section class="comp-result">
		<div class="type-info">
			<div class="type-info__visual">
				<div class="bg-wrap">
					<div class="img-pc bg-pc" :style="{backgroundImage:'url('+ contents.visual[ 0 ].img_pc+')'}"></div>
					<div class="img-mb bg-m" :style="{backgroundImage:'url('+ contents.visual[ 0 ].img_mb+')'}"></div>
				</div>
			</div>

			<div class="type-info__content">

				<typeSummary>
					<template #typeDesc>
						<em v-html="contents.summary.type_desc"></em>
					</template>

					<template #type>
						<strong v-html="contents.summary.type_title"></strong>
					</template>

					<template #refText>
						<span v-html="contents.summary.type_ref"></span>
					</template>

					<template #level>
						<img :src="contents.summary.level[0].level_img" :alt="contents.summary.level[0].alt">
					</template>

					<template #title>
						<span v-html="contents.summary.title"></span>
					</template>

					<template #text>
						<span v-for="(item, index) in contents.summary.text" class="block-mb" v-html="item" :key="index"></span>
					</template>
				</typeSummary>

				<div class="type-info__description">
					<typeDetail v-for="(item, index) in contents.detail" :key="index">
						<template #title>
							<span v-html="item.title"></span>
						</template>
						<template #text>
							<span v-html="item.text"></span>
						</template>
					</typeDetail>
				</div>

				<typeProduct>
					<template #title>
						<span v-html="contents.product.title"></span>
					</template>

					<template #img>
						<transition-group name="fade" tag="ul" class="type-info__product-list">
							<li v-show="slideIndex === 0" :key="0"><img :src="`../img/sustainabilitytest/img-product-item7-1.jpg`" alt=""></li>
						</transition-group>
					</template>

					<template #product-title>
						<b class="product-text-title" v-html="contents.product.product_name"></b>
					</template>

					<template #product-subtitle>
						<span class="product-text-sub" v-html="contents.product.product_name_sub"></span>
					</template>

					<template #product-price>
						<span class="product-text-price__symbol" v-html="contents.product.product_price[0].symbol"></span>
						<span class="product-text-price__num" v-html="contents.product.product_price[0].num"></span>
					</template>

					<template #desc><span v-html="contents.product.product_desc"></span></template>

					<template #link>
						<a :href="contents.product.product_link[0].url" class="btn-view" target="_blank">
							<img :src="`../img/sustainabilitytest/icon-btn-view-arrow.png`" alt="">
							<span class="blind" v-html="contents.product.product_link[0].title"></span>
						</a>
					</template>
				</typeProduct>
			</div>
		</div>

		<div class="type-info-utils">
			<ButtonUtil @show="showModal"></ButtonUtil>

			<!-- S: Modal -->
			<Modal @close="hideModal" v-show="isModalVisible">
				<!-- S: Modal Content -->
				<template #title>
					<strong v-html="contents.modal.title"></strong>
				</template>
				<!-- //E: Modal Content -->

				<template #footer></template>
			</Modal>
			<!-- //E: Modal -->
			<Banner/>
		</div>

	</section>
</template>

<script>
import MixinPersonal from "@/mixin/mixin-personal";

import typeSummary from './comp-result-summary';
import typeDetail from './comp-result-detail';
import typeProduct from './comp-result-product';
import ButtonUtil from './comp-result-btn';
import Modal from './comp-modal';
import Banner from './comp-result-banner'


export default {
	components: {
		typeSummary, typeDetail, typeProduct, ButtonUtil, Modal, Banner
	},

	mixins: [
		MixinPersonal
	]
}
</script>