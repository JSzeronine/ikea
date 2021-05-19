<template>
	<div class="btn-utils">
		<a class="btn-link" href="javascript:void(0);" @click="resetTest">
			<span v-html="contents.buttons[0].btn_restart"></span>
		</a>
		<a class="btn-link" href="javascript:void(0);" @click="showModal">
			<span v-html="contents.buttons[0].btn_share"></span>
		</a>
	</div>
</template>

<script>

export default {
	name: "comp-result-btn.vue",

	data() {
		return {
			contents : null,
			isModalVisible: false
		}
	},

	created() {
		this.contents = this.$t("contents");
	},

	methods: {
		resetTest() {
			location.href = "../sustainabilitytest/";
		},

		showModal() {
			this.isModalVisible = true;
			this.$emit('show', this.isModalVisible);
		}
	}
}
</script>

<style scoped lang="scss">
.btn-utils {
	display: flex;
	justify-content: space-around;
	font-size: 0;

	.btn-link {
		display: inline-block;
		width: calc((100% / 2) - 2px);
		height: pxtovw414(64);
		background-color: #00F47A;
		font-family: $font-family-bold;
		font-size: pxtovw414(18);
		text-align: center;
		line-height: pxtovw414(64);
	}
}

.desktop, .tablet {
	.btn-utils {
		display: block;
		margin-left: -4px;
		text-align: center;

		.btn-link {
			width: 180px;
			height: 60px;
			margin-left: 4px;
			font-size: $font-size-xs;
			line-height: 60px;
		}
	}
}

@media screen and (orientation: landscape ) {
	.mobile {
		.btn-utils {
			.btn-link {
				height: pxtovw414(32);
				font-size: pxtovw414(10);
				line-height: pxtovw414(34);
			}
		}
	}
}
</style>