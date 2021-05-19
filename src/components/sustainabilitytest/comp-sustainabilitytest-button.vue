<template>
	<div class="btn-utils">
		<button type="button" class="btn-step" @click="nextQuestion" v-if="currentStep !== totalStep" :disabled="!checked">
			<span v-html="contents.btn_next"></span>
		</button>
		<button type="button" class="btn-step" @click="showResult" v-else :disabled="!checked">
			<span v-html="contents.btn_complete"></span>
		</button>
	</div>
</template>

<script>
export default {
	name: "comp-personaltest-button",

	props: {
		checked: {
			type: Boolean,
			default: false,
		},
		currentStep: {
			type: Number,
			default: function () {
				return 0;
			}
		},

		totalStep: {
			type: Number,
			default: function () {
				return 0;
			}
		}
	},

	data() {
		return {
			contents : null
		}
	},

	created() {
		this.contents = this.$t( "contents.button" );
	},

	methods: {
		nextQuestion() {
			this.$emit('next');
		},

		showResult() {
			this.$emit('result');
		}
	}
}
</script>

<style scoped lang="scss">
.btn-utils {
	margin-top: pxtovw414(24);

	.btn-step {
		display: inline-block;
		width: 100%;
		height: pxtovw414(100);
		background-color: #00F47A;
		font-family: $font-family-bold;
		font-size: pxtovw414(18);
		transition: background-color 0.1s;
		cursor: pointer;
		outline: 0;

		&:disabled {
			background-color: #41756D;
			span {
				opacity: 0.5;
			}
		}
	}
}

.desktop, .tablet {
	.btn-utils {
		width: 330px;
		margin-top: 40px;

		.btn-step {
			display: block;
			width: 100%;
			height: 70px;
			background-color: #18DB56;
			font-family: $font-family-bold;
			font-size: $font-size-s;

			&:disabled {
				background-color: #41756D;
			}
		}
	}
}


@media screen and (orientation: landscape) {
	.mobile {
		.btn-utils {
			margin-top: pxtovw414(12);

			.btn-step {
				height: pxtovw414(40);
				font-size: pxtovw414(9);
			}
		}
	}
}
</style>