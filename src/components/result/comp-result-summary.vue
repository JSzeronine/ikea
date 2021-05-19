<template>
	<div class="type-info__summary">
		<div class="type-info__title">
			<h2>
				<slot name="typeDesc"></slot>
				<slot name="type"></slot>
			</h2>

			<slot name="refText"></slot>

			<div class="type-info__level">
				<slot name="level"></slot>
			</div>
		</div>

		<dl class="type-info__text">
			<dt>
				<slot name="title"></slot>
			</dt>
			<dd>
				<slot name="text"></slot>
			</dd>
		</dl>
	</div>
</template>

<script>
export default {
	name: "comp-info-summary"
}
</script>

<style scoped lang="scss">
.type-info__summary {
	.type-info__title {
		position: relative;
		padding-bottom: pxtovw414(40);

		&:after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: #000;
			width: 100%;
			height: 3px;
		}

		h2 {
			font-family: $font-family-bold;

			em {
				display: block;
				font-size: pxtovw414(16);
				font-style: normal;
			}

			strong {
				display: block;
				width: pxtovw414(174);
				padding-top: pxtovw414(16);
				line-height: 1.34;
				font-size: pxtovw414(30);
			}
		}

		span {
			display: block;
			padding-top: pxtovw414(18);
			font-family: $font-family-regular;
			font-size: pxtovw414(14);
		}

		.type-info__level {
			position: absolute;
			right: 0;
			bottom: pxtovw414(75);
			width: pxtovw414(60);
			height: pxtovw414(66);

			img {
				width: 100%;
			}
		}
	}

	.type-info__text {
		margin-top: pxtovw414(38);

		dt {
			padding-bottom: pxtovw414(20);
			font-family: $font-family-bold;
			font-size: pxtovw414(22);
			line-height: 1.5;
		}

		dd {
			line-height: 1.5;
			font-size: pxtovw414(16);

			span {
				&:first-of-type + span {
					margin-top: pxtovw414(20);
				}
			}
		}
	}
}

.desktop, .tablet {
	.type-info__summary {
		padding-top: 130px;

		.type-info__title {
			padding-bottom: 50px;

			h2 {
				em {
					font-size: $font-size-s;
				}

				strong {
					width: calc(100% - 60px);
					padding-top: 7px;
					font-size: $font-size-xl;
					line-height: 1.375;
				}
			}

			span {
				padding-top: 30px;
				font-size: $font-size-xs;
			}

			.type-info__level {
				bottom: 105px;
				width: 60px;
				height: 66px;
			}
		}

		.type-info__text {
			margin-top: 50px;

			dt {
				padding-bottom: 22px;
				font-size: $font-size-s;
				line-height: 30px;
			}

			dd {
				line-height: 30px;
				font-size: $font-size-xs;

				br {
					display: none;
				}
			}
		}
	}
}

@media screen and (orientation: landscape ) {
	.mobile {
		.type-info__summary {
			.type-info__title {
				padding-bottom: pxtovw414(20);

				h2 {
					em {
						font-size: pxtovw414(12);
					}

					strong {
						width: pxtovw414(260);
						padding-top: pxtovw414(8);
						font-size: pxtovw414(22);
					}
				}

				span {
					padding-top: pxtovw414(9);
					font-size: pxtovw414(10);
				}

				.type-info__level {
					bottom: pxtovw414(45);
					width: pxtovw414(30);
					height: pxtovw414(33);
				}
			}

			.type-info__text {
				margin-top: pxtovw414(25);

				dt {
					padding-bottom: pxtovw414(10);
					font-size: pxtovw414(16);
				}

				dd {
					font-size: pxtovw414(11);
				}
			}
		}
	}

	.en {
		&.mobile {
			.type-info__summary {
				.type-info__title {
					.type-info__level {
						height: auto;
					}
				}
			}
		}
	}
}

.en {
	.type-info__summary {
		.type-info__title {
			h2 {
				strong {
					width: pxtovw414(240);
					font-size: pxtovw414(26);
				}
			}

			.type-info__level {
				height: pxtovw414(51);
			}
		}
	}

	&.desktop, &.tablet {
		.type-info__summary {
			.type-info__title {
				h2 {
					strong {
						width: calc(100% - 60px);
						font-size: $font-size-xl;
					}
				}
				.type-info__level {
					height: 51px;
				}
			}
		}
	}
}
</style>