<template>
	<li class="personal-form__item-answer">
		<label class="radio">
			<input type="radio" :key="num" :name="`question_` + num" :value="score" @change="checkAnswer(score)">
			<i class="radio-icon"></i>
			<i class="radio-icon checked" :style="{backgroundImage:'url(../img/sustainabilitytest/icon-answer-chk.png)'}"></i>
			<span><slot name="answer"></slot></span>
		</label>
	</li>
</template>

<script>
export default {
	name: "comp-test-item",

	data() {
		return {
			checked: false
		}
	},

	props: {
		num: {
			type: Number,
			default: function () {
				return 0;
			}
		},
		score: {
			type: Number,
			default: function () {
				return 0;
			}
		}
	},

	methods: {
		checkAnswer($score) {
			// console.log($score + "점");
			this.checked = true;
			this.$emit("check", this.checked, $score);
		}
	}
}
</script>

<style scoped lang="scss">
.personal-form__item-answer {
	margin-top: pxtovw414(30);

	&:first-child {
		margin-top: 0;
	}

	.radio {
		position: relative;
		display: inline-block;
		padding-left: pxtovw414(44);
		font-family: $font-family-regular;
		font-size: pxtovw414(20);
		color: #CBF3D8;
		line-height: 1.6;
		cursor: pointer;
		pointer-events: auto;
		vertical-align: middle;

		.radio-icon {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: pxtovw414(28);
			height: pxtovw414(28);
			border: 1px solid #00F47A;
			border-radius: 100%;
			background-color: rgba(37, 252, 105, 0.1);

			&.checked {
				display: none;
				border: 0;
				background-size: 100%;
				background-repeat: no-repeat;
			}
		}

		input {
			z-index: 1;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			width: 0;
			height: 0;
			pointer-events: none;
			vertical-align: top;

			&:checked {
				& + .radio-icon {
					display: none;

					& + .checked {
						display: block;
					}
				}

				& ~ {
					span {
						font-family: $font-family-bold;
					}
				}
			}
		}
	}
}

.desktop, .tablet {
	.personal-form__item-answer {
		margin-top: 34px;

		&:first-child {
			margin-top: 0;
		}

		.radio {
			padding-left: 40px;
			font-size: $font-size-s;
			line-height: 1.3;

			.radio-icon {
				width: 28px;
				height: 28px;
			}
		}
	}
}

@media screen and (orientation: landscape) {
	.mobile {
		.personal-form__item-answer {
			margin-top: pxtovw414(10);

			.radio {
				padding-left: pxtovw414(22);
				font-size: pxtovw414(10);
				line-height: pxtovw414(16);

				.radio-icon {
					width: pxtovw414(14);
					height: pxtovw414(14);
					background-color: rgba(37, 252, 105, 0.1);
				}
			}
		}
	}

	.en {
		&.mobile {
			.personal-form__item-answer {
				.radio {
					font-size: pxtovw414(9);
				}
			}
		}
	}
}

.en {
	.personal-form__item-answer {
		margin-top: pxtovw414(18);

		.radio {
			font-size: pxtovw414(18);
			line-height: 1.67;

			input {
				&:checked {
					& ~ {
						span {
							font-family: $font-family-regular;
						}
					}
				}
			}
		}
	}

	&.desktop, &.tablet {
		.personal-form__item-answer {
			margin-top: 34px;

			.radio {
				font-size: $font-size-s;
				line-height: 1.3;
			}
		}
	}
}
</style>