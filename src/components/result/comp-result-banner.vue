<template>
	<div class="banner-box">
		<a :href="contents.url" class="banner-box-wrap">
			<div class="banner-box-content">
				<strong v-html="contents.title"></strong>
				<i class="icon-view">
					<img :src="`../img/sustainabilitytest/icon-btn-view-arrow.png`" alt="">
				</i>
				<div class="logo-box">
					<img :src="`../img/sustainabilitytest/img-banner-logo.svg`" alt="">
				</div>
			</div>
			<div class="video-wrap">
				<video class="img-mb" autoplay playsinline muted loop :src="'../img/sustainabilitytest/m-result-banner.mp4'"></video>
				<video class="img-pc" autoplay playsinline muted loop :src="'../img/sustainabilitytest/pc-result-banner.mp4'"></video>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: "comp-result-banner.vue",

	data() {
		return {
			contents: null
		}
	},

	created() {
		this.contents = this.$t("contents.banner")
	}
}
</script>

<style scoped lang="scss">
.banner-box {
	position: relative;
	width: 100%;
	height: pxtovw414(147);
	margin-top: pxtovw414(40);
	overflow: hidden;

	.banner-box-wrap {
		display: block;
		width: 100%;
		height: 100%;

		.banner-box-content {
			z-index: 2;
			position: absolute;
			width: 100%;
			height: 100%;
			padding: pxtovw414(37) pxtovw414(34) pxtovw414(24);
			box-sizing: border-box;

			strong {
				line-height: 1.3888;
				font-family: $font-family-bold;
				font-size: pxtovw414(18);
			}

			.icon-view {
				display: flex;
				justify-content: center;
				align-items: center;
				width: pxtovw414(33);
				height: pxtovw414(33);
				margin-top: pxtovw414(8);
				border-radius: 100%;
				background-color: #000;

				img {
					display: block;
					width: pxtovw414(9);
					height: pxtovw414(11);
				}
			}

			.logo-box {
				position: absolute;
				top: pxtovw414(18);
				right: pxtovw414(18);
				width: pxtovw414(56);
				height: pxtovw414(23);
				text-align: center;

				img {
					width: 100%;
				}
			}
		}

		.video-wrap {
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			.img-mb {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
	}
}

.desktop, .tablet {
	.banner-box {
		width: 860px;
		height: 168px;
		margin: 90px auto 0;

		.banner-box-content {
			padding: 36px 70px 32px;

			strong {
				font-size: $font-size-s;
			}

			.icon-view {
				width: 32px;
				height: 32px;
				margin-top: 10px;
				line-height: 28px;

				img {
					width: 9px;
					height: 10px;
				}
			}

			.logo-box {
				top: 24px;
				right: 24px;
				width: 56px;
				height: 34px;
			}
		}

		.video-wrap {
			.img-pc {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
	}
}

@media screen and (orientation: landscape ) {
	.mobile {
		.banner-box {
			height: pxtovw414(100);
			margin-top: pxtovw414(20);

			.banner-box-wrap {
				.banner-box-content {
					padding: pxtovw414(18) pxtovw414(18) pxtovw414(12) !important;

					strong {
						font-size: pxtovw414(12);
					}

					.icon-view {
						width: pxtovw414(18);
						height: pxtovw414(18);
						margin-top: pxtovw414(8);

						img {
							display: block;
							width: pxtovw414(5);
							height: pxtovw414(7);
						}
					}

					.logo-box {
						width: pxtovw414(38);
						height: pxtovw414(26);
					}
				}

				.video-wrap {
					z-index: 1;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					.img-mb {
						object-fit: cover;
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
}

.en {
	.banner-box {
		.banner-box-wrap {
			.banner-box-content {
				padding: pxtovw414(30) pxtovw414(110) pxtovw414(24) pxtovw414(34);
			}
		}
	}

	&.desktop, .tablet {
		.banner-box {
			.banner-box-wrap {
				.banner-box-content {
					padding: 36px 70px 32px;
				}
			}
		}
	}
}

</style>