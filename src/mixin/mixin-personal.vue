<template>
	<div class="comp-result">
	</div>
</template>

<script>
export default {
	name: "Personal-Test",

	data() {
		return {
			contents: null,
			isModalVisible: false,
			slideIndex: 0
		}
	},

	created() {
		this.contents = this.$t("contents")
	},

	mounted() {
		this.controlSlide();
	},

	methods: {
		showModal(isModalVisible) {
			this.isModalVisible = isModalVisible;

			const html = document.querySelector("html");
			html.classList.add("not-scroll");
		},

		hideModal() {
			this.isModalVisible = false;
			const html = document.querySelector("html");
			html.classList.remove("not-scroll");
		},

		controlSlide(){
			const slides = this.$el.querySelectorAll('.type-info__product-wrap ul li');
			let totalSlides = slides.length;

			this.slideIndex = (this.slideIndex+1) % totalSlides;

			setTimeout(this.controlSlide, 1800);
		}
	}
}
</script>

<style scoped lang="scss">
.comp-result {
	width: 100%;
	padding-bottom: pxtovw414(74);

	.type-info {
		position: relative;
		width: 100%;

		.type-info__visual {
			position: relative;
			width: 100%;
			height: pxtovw414(414);

			.bg-wrap {
				z-index: 1;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				.bg-m {
					background-repeat: no-repeat;
					background-position: top center;
					background-size: 100%;
					width: 100%;
					height: 100%;
				}
			}
		}

		.type-info__content {
			padding: pxtovw414(50) pxtovw414(40) pxtovw414(80);

			.type-info__product-list {
				li {
					overflow: hidden;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					box-sizing: border-box;

					img {
						width: 100%;
					}
				}
			}

			.btn-view {
				display: flex;
				justify-content: center;
				align-items: center;
				width: pxtovw414(60);
				height: pxtovw414(60);
				margin-top: pxtovw414(40);
				border-radius: 100%;
				background-color: #000;

				img {
					display: block;
					width: pxtovw414(17);
					height: pxtovw414(20);
				}
			}
		}
	}

	.type-info-utils {
		width: 100%;
		padding: 0 pxtovw414(20);
		box-sizing: border-box;
	}
}

.desktop, .tablet {
	.comp-result {
		min-width: 1280px;
		padding-bottom: 174px;

		.type-info {
			.type-info__visual {
				height: 581px;
				background-color: #2D4853;

				.bg-wrap {
					.bg-pc {
						width: 100%;
						height: 100%;
						background-repeat: no-repeat;
						background-position: center 100%;
						background-size: auto 581px;
					}
				}
			}

			.type-info__content {
				width: 1200px;
				padding: 0 170px;
				margin: 0 auto;
				box-sizing: border-box;

				.btn-view {
					width: 60px;
					height: 60px;
					margin-top: 20px;
					line-height: 56px;

					img {
						width: 17px;
						height: 20px;
					}
				}
			}
		}

		.type-info-utils {
			position: relative;
			width: 1200px;
			padding: 60px 0 0 0;
			margin: 56px auto 0;

			&:before {
				content:"";
				display: inline-block;
				position: absolute;
				top: 0;
				left: 50%;
				width: 860px;
				height: 1px;
				margin-left: -430px;
				background-color: #9D9D9D;
			}
		}
	}
}

@media screen and (orientation: landscape ) {
	.mobile {
		.comp-result {
			padding-bottom: pxtovw414(16);

			.type-info {
				.type-info__content {
					padding: pxtovw414(25) pxtovw414(20) pxtovw414(40);

					.btn-view {
						width: pxtovw414(30);
						height: pxtovw414(30);
						margin-top: pxtovw414(20);

						img {
							display: block;
							width: pxtovw414(9);
							height: pxtovw414(10);
						}
					}
				}
			}

			.type-info-utils {
				padding: 0 pxtovw414(10);
			}
		}
	}
}

$move-time:0.9s;

.fade-enter { //enter : 1 (enter 시작)
	transform: translateX(50%);
	opacity: 0;
}

.fade-enter-active { //enter-active : 2 (enter 시작에서 끝 중간 변화 시점 - 이징)
	transition: opacity $move-time, transform $move-time cubic-bezier(0.65, 0, 0.35, 1);
}

.fade-enter-to { //enter-to : 3 (enter 끝)
	transform: translateX(0%);
	opacity: 1;
}

.fade-leave { //leave : 4 (leave 시작)
	transform: translateX(0%);
	border-radius: 50%;
}

.fade-leave-active {  //leave-active : 5 (leave 시작에서 끝 중간 변화 시점 - 이징)
	transition: transform $move-time cubic-bezier(0.65, 0, 0.35, 1);
	z-index: 1;
	border-radius: 50%;
	transform-origin: 100% 50%;
}

.fade-leave-to { //leave-to : 6 (leave 끝)
	transform: translateX(-100%) scale(1.1);
}
</style>
