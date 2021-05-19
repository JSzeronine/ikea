<template>
	<section class="detail-reply">
		<div class="inner-wrap">
			<div class="contents">
				<div v-if="isTopImage" class="detail-reply__view detail-reply__view-top">
					<slot name="reply-top-view"></slot>
				</div>

				<div class="detail-reply__content">
					<div class="detail-reply__info">
						<div class="detail-reply__description">
							<slot name="reply"></slot>
						</div>

						<div v-if="isLine" class="detail-reply__line"></div>

						<div class="detail-reply__user">
							<slot name="user"></slot>
						</div>

						<!-- pc 퍼센트 내용 노출 태그-->
						<div v-if="isPercent" class="detail-reply__percent-description">
							<slot name="percent-description"></slot>
						</div>
					</div>

					<div v-if="isMaterial" class="detail-reply__img-material-bx">
						<div class="detail-reply__img-material">
							<slot name="material"></slot>
						</div>

						<div class="detail-reply__img-materail__description">
							<slot name="material-description"></slot>
						</div>
					</div>

					<div v-if="isPercent" class="detail-reply__percent">
						<div class="detail-reply__percent-txt">
							<dl>
								<dt>
									<slot name="percent"></slot>
									<span>%</span>
								</dt>
								<dd>
									<slot name="percent-title"></slot>
								</dd>
							</dl>
						</div>

						<!-- mobile 퍼센트 내용 노출 태그-->
						<!--                        <div class="detail-reply__percent-description">-->
						<!--                            <slot name="percent-description"></slot>-->
						<!--                        </div>-->
					</div>
				</div>

				<div v-if="isBottomImage" class="detail-reply__view detail-reply__view-bottom">
					<slot name="reply-bottom-view"></slot>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {Cubic, gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {EventBus} from "@/components/common/EventBus";

export default {
	name: "comp-detail-reply",
	props: {
		isLine: {
			type: Boolean,
			default: true,
		},

		isMaterial: {
			type: Boolean,
			default: true,
		},

		isPercent: {
			type: Boolean,
			default: false,
		},

		isTopImage: {
			type: Boolean,
			default: false,
		},

		isBottomImage: {
			type: Boolean,
			default: false,
		},
	},

	mounted() {
		EventBus.$on(EventBus.LOAD_COMPLETE_EVENT, this.loadComplete);
	},

	methods: {
		loadComplete() {
			gsap.registerPlugin(ScrollTrigger);
			const Tl = gsap.timeline({});

			let info = this.$el.querySelector(".detail-reply__info");

			Tl.fromTo(info, {
				y: 100,
				opacity: 0,
			}, {
				y: 1,
				opacity: 1,
				ease: Cubic.easeOut,
				scrollTrigger: {
					trigger: info,
					start: "top bottom",
					end: "center center",
					scrub: 0.5
				}
			});

			if (this.isMaterial) {
				let materialBx = this.$el.querySelector(".detail-reply__img-material-bx");
				let materialContent = materialBx.querySelector(".detail-reply__img-material").querySelector("img");

				if (materialContent == null) {
					materialContent = materialBx.querySelector(".detail-reply__img-material").querySelector("video");
				}

				Tl.fromTo(materialBx, {
					y: 100,
					opacity: 0,
				}, {
					y: 1,
					opacity: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: materialBx,
						start: "top bottom",
						end: "center center",
						scrub: 0.5
					}
				});

				Tl.fromTo(materialContent, {
					scale: 1.3,
				}, {
					scale: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: materialBx,
						start: "top bottom",
						end: "center center",
						scrub: 0.5
					}
				});
			}

			if (this.isPercent) {
				let percentBx = this.$el.querySelector(".detail-reply__percent");
				let percentTxtBx = percentBx.querySelector(".detail-reply__percent-txt");
				let percentTxt = percentTxtBx.querySelector("dl");

				Tl.fromTo(percentTxtBx, {
					y: 100,
					opacity: 0,
				}, {
					y: 1,
					opacity: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: percentBx,
						start: "top bottom",
						end: "center center",
						scrub: 0.5
					}
				});

				Tl.fromTo(percentTxt, {
					scale: 1.2
				}, {
					scale: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: percentBx,
						start: "top bottom",
						end: "center center",
						scrub: 0.5
					}
				});
			}

			if (this.isTopImage) {
				let topBx = this.$el.querySelector(".detail-reply__view-top");
				let topVideo = topBx.querySelectorAll("video");

				Tl.fromTo(topVideo, {
					scale: 1.3
				}, {
					scale: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: topBx,
						start: "top bottom",
						end: "center center",
						scrub: 0.5
					}
				});
			}

			if (this.isBottomImage) {
				let bottomBx = this.$el.querySelector(".detail-reply__view-bottom");
				let bottomImg = bottomBx.querySelectorAll("img");

				Tl.fromTo(bottomImg, {
					scale: 1.3
				}, {
					scale: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: bottomBx,
						start: "top bottom",
						end: "center center",
						scrub: 0.5
					}
				});
			}
		}
	}
}
</script>

<style scoped lang="scss">
.detail-reply {
	margin: pxtovw414(160) 0;

	.inner-wrap {
		background-color: $color-set-green;

		.contents {

			.detail-reply__content {
				.detail-reply__info {
					padding: pxtovw414(100) pxtovw414(40) 0;

					.detail-reply__description {
						font-size: pxtovw414(24);
						line-height: pxtovw414(33);
						color: #fff;
						font-family: $font-family-bold;
						margin-bottom: pxtovw414(30);
						letter-spacing: -0.3px;
					}

					.detail-reply__line {
						width: pxtovw414(30);
						height: 1px;
						background-color: #fff;
						margin-bottom: pxtovw414(30);
					}

					.detail-reply__user {
						font-size: pxtovw414(16);
						line-height: pxtovw414(24);
						color: #fff;
					}

					.detail-reply__percent-description {
						display: none;
					}
				}

				.detail-reply__img-material-bx {
					padding-bottom: pxtovw414(100);
					margin-top: pxtovw414(80);
					display: flex;
					justify-content: center;
					flex-wrap: wrap;

					.detail-reply__img-material {
						width: pxtovw414(220);
						height: pxtovw414(220);
						overflow: hidden;
						border-radius: 100%;
						transform: translate3d(0, 0, 0);

						video {
							width: 100%;
							height: auto;
						}

						img {
							width: 100%;
						}
					}

					.detail-reply__img-materail__description {
						margin-top: pxtovh414(40);
						font-size: pxtovw414(16);
						line-height: pxtovw414(24);
						color: #fff;
						font-family: $font-family-bold;
					}
				}

				.detail-reply__percent {
					margin-top: pxtovw414(50);
					//padding-bottom: pxtovw414( 100 );
					.detail-reply__percent-txt {
						background-color: #fff;
						width: pxtovw414(292);
						margin: 0 auto;
						height: pxtovw414(292);
						overflow: hidden;
						border-radius: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						//margin-bottom: pxtovw414( 50 );

						dl {
							dt {
								display: flex;
								justify-content: center;
								align-items: flex-end;
								font-size: pxtovw414(98);
								line-height: pxtovw414(114);
								font-family: $font-family-bold;
								color: $color-set-green;

								span {
									font-size: pxtovw414(70);
									line-height: pxtovw414(94);
								}
							}

							dd {
								text-align: center;
								font-size: pxtovw414(18);
								line-height: pxtovw414(24);
								font-family: $font-family-bold;
								color: $color-set-green;
							}
						}
					}

					.detail-reply__percent-description {
						padding: 0 pxtovw414(40);
						font-size: pxtovw414(16);
						line-height: pxtovw414(24);
						color: #fff;
					}
				}
			}


			.detail-reply__view {
				margin-top: pxtovw414(110);
				width: 100%;

				&.detail-reply__view-top {
					overflow: hidden;
					margin-top: 0;
				}

				&.detail-reply__view-bottom {
					overflow: hidden;
				}

				video {
					width: 100%;
					height: auto;
				}

				img {
					width: 100%;
				}
			}
		}
	}
}

.desktop, .tablet {
	.detail-reply {
		margin: 220px 0;

		.inner-wrap {
			width: 100%;
			min-width: 1280px;
			margin: 0 auto;

			.contents {
				.detail-reply__content {
					width: 1200px;
					margin: 0 auto;

					padding: 180px 170px;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.detail-reply__info {
						//padding: 180px 0 180px 170px;
						padding: 0;
						width: 452px;

						.detail-reply__description {
							font-size: $font-size-me;
							line-height: 40px;
							margin-bottom: 40px;
						}

						.detail-reply__line {
							width: 30px;
							margin-bottom: 40px;
						}

						.detail-reply__user {
							font-size: $font-size-xs;
							line-height: 28px;
						}

						.detail-reply__percent-description {
							display: block;
							font-size: $font-size-xs;
							line-height: 28px;
							color: #fff;
						}
					}

					.detail-reply__percent {
						margin: 0;
						padding: 0;

						.detail-reply__percent-txt {
							width: 288px;
							height: 288px;
							margin: 0;

							dl {
								dt {
									font-size: 110px;
									line-height: 129px;

									span {
										font-size: 70px;
										line-height: 100px;
									}
								}

								dd {
									font-size: 18px;
									line-height: 24px;
								}
							}
						}

						.detail-reply__percent-description {
							display: none;
						}
					}

					.detail-reply__img-material-bx {
						width: 288px;
						margin-top: 0;
						padding: 0;

						.detail-reply__img-material {
							width: 288px;
							height: 288px;

							video {

							}

							img {

							}
						}

						.detail-reply__img-materail__description {
							margin-top: 51px;
							font-size: $font-size-xs;
							line-height: 28px;
							letter-spacing: -0.2px;
						}
					}
				}

				.detail-reply__view {
					margin-top: 0;

					&.detail-reply__view-top {
					}

					img {
					}
				}
			}
		}
	}
}

.en {
	.detail-reply {
		.inner-wrap {
			.contents {
				.detail-reply__content {
					.detail-reply__img-material-bx {
						.detail-reply__img-materail__description {
							span {
								display: block;
								padding: 0 pxtovw414( 40 );
							}
						}
					}
				}
			}
		}
	}

	&.desktop, &.tablet {
		.detail-reply {
			.inner-wrap {
				.contents {
					.detail-reply__content {
						.detail-reply__img-material-bx {
							.detail-reply__img-materail__description {
								span {
									padding: 0;
								}
							}
						}
					}
				}
			}
		}
	}
}

</style>