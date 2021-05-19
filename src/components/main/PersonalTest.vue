<template>
	<section class="personal-text-wrap">
		<!-- inner-wrap -->
		<div class="inner-wrap">
			<div class="hero-box">
				<div class="personal-title">
					<img :src="language.title_img" alt="화살표 버튼">
				</div>
				<div class="personal-que">
					<span v-html="language.description"></span>
				</div>
				<a href="./sustainabilitytest/" class="arrow-btn">
<!--					<img :src="`./img/main/personalTest_arrow_btn.png`" alt="화살표 버튼">-->
					<img :src="`./img/common/btn-arrow-box-green.png`" alt="화살표 버튼">
				</a>
			</div>
		</div>
		<!--//inner-wrap -->

		<!-- bg-wrap -->
		<div class="bg-wrap">
			<div class="img-pc bg-pc" :style="{backgroundImage:'url(./img/main/pc_personalTest_bg.jpg)'}"></div>
			<div class="img-mb bg-m" :style="{backgroundImage:'url(./img/main/m_personalTest_bg.jpg)'}"></div>
		</div>
		<!--//bg-wrap -->
	</section>
</template>

<script>
export default {
	name: "PersonalTest",

	data() {
		return {
			language: null
		}
	},

	created() {
		this.language = this.$t("contents.personaltest");
	},
}
</script>

<style scoped lang="scss">
.personal-text-wrap {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	background-color: white;

	.inner-wrap {
		position: relative;
		z-index: 2;

		width: 100%;
		height: 100%;

		.hero-box {
			display: flex;
			align-items: center;
			flex-direction: column;

			.personal-title {
				/*display: none;*/
				margin-top: pxtovw414(84);
				padding-bottom: pxtovw414(23);
				width: pxtovw414(360);

				img {
					width: 100%;
				}
			}

			.personal-que {
				display: flex;
				justify-content: center;
				align-items: center;
				width: pxtovw414(215);
				height: pxtovw414(35);
				margin-bottom: pxtovw414(16);
				border-radius: pxtovw414(17);
				box-sizing: border-box;
				color: #00F969;
				font-size: pxtovw414(16);
				line-height: pxtovw414(22);
				font-family: $font-family-bold;
				background-color: #17262C;
			}

			.arrow-btn {
				display: inline-block;
				width: pxtovw414(60);
				height: pxtovw414(60);
				border-radius: 50%;
				overflow: hidden;
				transition: transform 0.2s;
				img {
					width: 100%;
					transition: transform 0.2s;
				}

				&:hover {
					transform: scale(0.95);
					img {
						transform: scale(1.2) translate3d(0px,0,0);
					}
				}
			}
		}
	}

	.bg-wrap {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
		min-width: 100%;
		width: 100%;
		height: 100vh;

		.bg-m {
			width: 100%;
			height: 100%;
			background: no-repeat center center;
			background-size: cover;
		}
	}
}

@media screen and (orientation: landscape) {
	.mobile {
		.personal-text-wrap {
			height: 200vh;

			.inner-wrap {
				.hero-box {
					.personal-title {
						margin-top: pxtovw414(25);
						width: pxtovw414(170);

						img {
						}
					}

					.personal-que {
						width: pxtovw414(120);
						height: pxtovw414(18);
						margin-bottom: pxtovw414(20);
						border-radius: pxtovw414(8);
						font-size: pxtovw414(8);
						line-height: pxtovw414(11);
					}

					.arrow-btn {
						width: pxtovw414(30);
						height: pxtovw414(30);

						img {
						}
					}
				}
			}

			.bg-wrap {
				height: 200vh;

				.bg-m {
				}
			}
		}
	}
}

.desktop, .tablet {
	.personal-text-wrap {
		min-width: $stage-min-width;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		background-color: white;

		.inner-wrap {
			position: relative;
			z-index: 2;
			display: flex;
			justify-content: center;
			height: 100%;

			.hero-box {
				display: flex;
				align-items: center;
				flex-direction: column;

				.personal-title {
					display: block;
					width: 420px;
					margin-top: 83px;
					padding-bottom: 19px;

					img {
						width: 100%;
					}
				}

				.personal-que {
					width: 307px;
					height: 52px;
					margin-bottom: 0;
					border-radius: 26px;
					font-size: $font-size-s;
					line-height: 30px;
				}

				.arrow-btn {
					position: absolute;
					bottom: 160px;
					width: 86px;
					height: 84px;
					/*margin-bottom: 56px;*/
					img {

					}
				}
			}
		}

		.bg-wrap {
			.bg-pc {
				width: 100%;
				height: 100%;
				background: no-repeat center center;
				background-size: cover;
			}
		}
	}


	:lang(en) {
		.personal-text-wrap {
			.inner-wrap {
				.hero-box {
					.personal-que {
						width: 380px;
					}
				}
			}
		}
	}

}

:lang(en) {
	.personal-text-wrap {
		.inner-wrap {
			.hero-box {
				.personal-que {
					width: pxtovw414(250);
				}
			}
		}
	}
}

</style>