<template>
	<dl class="personal-form__item-content">
		<dt>
			<strong>
				<slot name="question"></slot>
			</strong>
			<div class="bg-wrap">
				<div class="img-pc bg-pc" :style="{backgroundImage:'url(../img/sustainabilitytest/m-question-bg.png)'}"></div>
				<div class="img-mb bg-m" :style="{backgroundImage:'url(../img/sustainabilitytest/m-question-bg.png)'}"></div>
			</div>
		</dt>
		<dd>
			<slot name="list"></slot>
		</dd>
	</dl>
</template>

<script>

export default {
	name: "comp-test-list",
}
</script>

<style scoped lang="scss">
.personal-form__item-content {
	position: absolute;

	dt {
		position: relative;
		display: flex;
		align-items: center;
		width: pxtovw414(370);
		height: pxtovw414(230);
		margin: 0 auto;
		text-align: center;

		strong {
			z-index: 3;
			position: absolute;
			width: 100%;
			font-family: $font-family-bold;
			font-size: pxtovw414(24);
			color: #fff;
			line-height: 1.375;
			box-sizing: border-box;
		}

		.bg-wrap {
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 1;
			width: 100%;
			height: 100%;

			.bg-m {
				width: 100%;
				height: 100%;
				background-repeat: no-repeat;
				background-position: center 0;
				background-size: cover;
			}
		}
	}

	dd {
		width: pxtovw414(370);
		padding: 0 pxtovw414(15);
		margin-top: pxtovw414(50);
		box-sizing: border-box;
	}
}

.desktop, .tablet {
	.personal-form__item-content {
		display: flex;
		justify-content: center;
		align-items: center;

		dt {
			flex-shrink: 0;
			width: 600px;
			height: 373px;
			margin-right: 120px;

			strong {
				font-size: $font-size-me;
				line-height: 42px;
			}

			.bg-wrap {
				.bg-pc {
					width: 100%;
					height: 100%;
					background-repeat: no-repeat;
					background-position: center 0;
					background-size: cover;
				}
			}
		}

		dd {
			display: flex;
			flex-direction: column;
			flex-basis: 333px;
			width: 100%;
			padding: 0;
			margin-top: 0;
		}
	}
}

@media screen and (orientation: landscape) {
	.mobile {
		.personal-form__item-content {
			dt {
				width: pxtovw414(200);
				height: pxtovw414(125);

				strong {
					font-size: pxtovw414(12);
					line-height: 1.375;
				}

				.bg-wrap {
					.bg-m {
					}
				}
			}

			dd {
				padding: 0 pxtovw414(10);
				margin-top: pxtovw414(20);
			}
		}
	}

	.en {
		&.mobile {
			.personal-form__item-content {
				dt {
					strong {
						padding: 0 pxtovw414(8);
						font-size: pxtovw414(10);
						line-height: 1.375;
					}
				}
			}
		}
	}
}

.en {
	.personal-form__item-content {
		dt {
			strong {
				padding: 0 pxtovw414(24);
				font-size: pxtovw414(21);
			}
		}

		dd {
			margin-top: pxtovw414(38);
		}
	}

	&.desktop, &.tablet {
		.personal-form__item-content {
			width: 1280px;
			margin: 0 auto;

			dt {
				strong {
					padding: 0;
					font-size: $font-size-me;
				}
			}

			dd {
				flex-basis: auto;
				margin-top: 0;
			}
		}
	}
}


</style>