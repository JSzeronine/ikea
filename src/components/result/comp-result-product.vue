<template>
	<div class="type-info__product">
		<dl class="type-info__product-desc">
			<dt>
				<slot name="title"></slot>
			</dt>
			<dd>
				<div class="type-info__product-wrap">
					<slot name="img"></slot>
				</div>
				<dl class="product-text">
					<dt>
						<strong class="product-text-title-wrap">
							<slot name="product-title"></slot>
							<slot name="product-subtitle"></slot>
						</strong>
						<em class="product-text-price">
							<strong class="product-text-price__integer">
								<slot name="product-price"></slot>
							</strong>
						</em>
					</dt>
					<dd>
						<slot name="desc"></slot>
						<slot name="link"></slot>
					</dd>
				</dl>
			</dd>
		</dl>
	</div>
</template>

<script>
export default {
	name: "comp-type-product.vue"
}
</script>

<style scoped lang="scss">
.type-info__product {
	margin-top: pxtovw414(70);

	.type-info__product-desc {
		> dt {
			position: relative;
			max-width: pxtovw414(226);
			padding-top: pxtovw414(16);
			font-family: $font-family-bold;
			font-size: pxtovw414(22);
			line-height: 1.5;

			&:before {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: pxtovw414(20);
				height: pxtovw414(4);
				background-color: #18DB56;
			}
		}

		> dd {
			margin-top: pxtovw414(34);
			line-height: 1.5;
			font-family: $font-family-regular;
			font-size: pxtovw414(16);

			.type-info__product-wrap {
				overflow: hidden;
				position: relative;
				width: pxtovw414(335);
				height: pxtovw414(335);
				border-radius: 100%;
				-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);

				ul {
					width: pxtovw414(335);
					height: pxtovw414(335);
				}
			}
		}

		.product-text {
			margin-top: pxtovw414(50);

			dt {
				padding-top: 0;

				&:before {
					display: none;
				}

				.product-text-title-wrap {
					display: block;
					line-height: pxtovw414(27);

					.product-text-title {
						font-family: $font-family-bold;
						font-size: pxtovw414(22);
					}

					.product-text-sub {
						display: block;
						font-family: $font-family-regular;
						font-size: pxtovw414(16);
					}
				}

				.product-text-price {
					display: block;
					padding-top: pxtovw414(15);
					line-height: pxtovw414(24);
					font-family: $font-family-bold;
					font-style: normal;

					.product-text-price__symbol {
						display: inline-block;
						margin-right: pxtovw414(5);
						line-height: 1;
						font-family: $font-family-bold;
						font-size: pxtovw414(16);
						vertical-align: top;
					}

					.product-text-price__num {
						display: inline-block;
						font-size: pxtovw414(30);
						vertical-align: top;
					}

					.product-text__integer-mass {
						display: inline-block;
						padding-left: pxtovw414(5);
						font-family: $font-family-regular;
						font-size: pxtovw414(16);
						vertical-align: sub;
					}
				}
			}

			dd {
				margin-top: pxtovw414(28);
				font-size: pxtovw414(16);

				span {
					line-height: 1.5;
				}
			}
		}
	}
}

.desktop, .tablet {
	.type-info__product {
		margin-top: 60px;

		.type-info__product-desc {
			> dt {
				padding-top: 18px;
				font-size: $font-size-s;

				&:before {
					width: 20px;
					height: 4px;
				}
			}

			> dd {
				display: flex;
				align-items: center;
				margin-top: 40px;
				font-size: $font-size-xs;

				.type-info__product-wrap {
					flex-shrink: 0;
					width: 344px;
					height: 344px;
					margin-right: 80px;
				}
			}

			.product-text {
				padding-right: 70px;
				margin-top: 0;

				dt {
					.product-text-title-wrap {
						line-height: 30px;

						.product-text-title {
							font-size: $font-size-s;
						}

						.product-text-sub {
							font-size: $font-size-xs;
						}
					}

					.product-text-price {
						padding-top: 12px;
						line-height: 22px;

						.product-text-price__symbol {
							margin-right: 5px;
							font-size: $font-size-2xs;
						}

						.product-text-price__num {
							font-size: $font-size-me;
						}

						.product-text__integer-mass {
							padding-left: 5px;
							font-size: $font-size-2xs;
						}
					}
				}

				dd {
					margin-top: 25px;
					font-size: $font-size-xs;
				}
			}
		}
	}
}

@media screen and (orientation: landscape) {
	.mobile {
		.type-info__product {
			margin-top: pxtovw414(35);

			.type-info__product-desc {
				> dt {
					max-width: pxtovw414(160);
					padding-top: pxtovw414(8);
					font-size: pxtovw414(16);

					&:before {
						height: pxtovw414(2);
					}
				}

				> dd {
					display: flex;
					flex-direction: row;
					margin-top: pxtovw414(17);
					font-size: pxtovw414(12);

					.type-info__product-wrap {
						flex-shrink: 0;
						width: pxtovw414(167);
						height: pxtovw414(167);
						margin-right: pxtovw414(20);

						ul {
							width: pxtovw414(335);
							height: pxtovw414(335);
						}
					}
				}

				.product-text {
					margin-top: pxtovw414(0);

					dt {
						.product-text-title-wrap {
							line-height: pxtovw414(20);

							.product-text-title {
								font-size: pxtovw414(15);
							}

							.product-text-sub {
								font-size: pxtovw414(11);
							}
						}

						.product-text-price {
							padding-top: pxtovw414(8);
							line-height: pxtovw414(12);

							.product-text-price__symbol {
								font-size: pxtovw414(11);
							}

							.product-text-price__num {
								font-size: pxtovw414(18);
							}

							.product-text__integer-mass {
								font-size: pxtovw414(11);
							}
						}
					}

					dd {
						margin-top: pxtovw414(14);
						font-size: pxtovw414(11);
					}
				}
			}
		}
	}
}

.en {
	.type-info__product {
		.type-info__product-desc {
			> dt {
				max-width: pxtovw414(260);
			}

			.product-text {
				padding-right: 0;
			}
		}
	}
}
</style>