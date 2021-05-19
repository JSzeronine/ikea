<template>
	<section class="detail-reason">
		<div class="inner-wrap">
			<div class="contents">
				<div class="reason-info">
					<div class="reason-info__title-bx">
						<div class="reason-info__title">
							<slot name="title"></slot>
						</div>

						<div class="reason-info__img">
							<slot name="img"></slot>
						</div>
					</div>

					<div class="reason-info__list">
						<ul>
							<slot name="list"></slot>
						</ul>
					</div>
				</div>

				<div class="reason-media__bx">
					<div class="reason-media">
						<slot name="media"></slot>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {gsap, Cubic} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {EventBus} from "@/components/common/EventBus";

export default {
	name: "comp-detail-reason",
	mounted() {
		EventBus.$on(EventBus.LOAD_COMPLETE_EVENT, this.loadComplete);
	},

	methods: {
		loadComplete() {
			gsap.registerPlugin(ScrollTrigger);

			let Tl = gsap.timeline({});

			let imgBx = this.$el.querySelector(".reason-info__img");
			let img = imgBx.querySelectorAll("img");

			Tl.fromTo(img, {
				scale: 1.3,
			}, {
				scale: 1,
				ease: Cubic.easeOut,
				scrollTrigger: {
					trigger: imgBx,
					start: "top bottom",
					end: "center center",
					scrub: 0.5,
				}
			});

			let mediaBx = this.$el.querySelector(".reason-media__bx");
			let mediaContainer = mediaBx.querySelector(".reason-media");
			let mediaImg = mediaContainer.querySelectorAll("img");

			if (!mediaImg.length) {
				mediaImg = mediaContainer.querySelectorAll("video");
			}

			Tl.fromTo(mediaContainer, {
				y: 100,
			}, {
				y: 0,
				ease: Cubic.easeOut,
				scrollTrigger: {
					trigger: mediaBx,
					start: "top bottom",
					end: "center center",
					scrub: 0.5,
				}
			});

			if (mediaImg.length) {
				Tl.fromTo(mediaImg, {
					scale: 1.2,
				}, {
					scale: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: mediaBx,
						start: "top bottom",
						end: "center center",
						scrub: 0.5,
					}
				});
			}
		}
	}
}
</script>

<style scoped lang="scss">
.detail-reason {
	margin: pxtovw414(160) 0;

	.inner-wrap {
		.contents {
			.reason-info {
				padding: 0 pxtovw414(40);
				margin-bottom: pxtovw414(50);

				.reason-info__title-bx {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: pxtovw414(34);

					.reason-info__title {
						font-size: pxtovw414(28);
						line-height: pxtovw414(38);
						font-family: $font-family-bold;
						color: #000;
					}

					.reason-info__img {
						width: pxtovw414(103);
						height: pxtovw414(103);
						overflow: hidden;
						border-radius: 100%;
						transform: translate3d(0, 0, 0);

						img {
							width: 100%;
						}
					}
				}

				.reason-info__list {
					ul {
						border-top: 1px solid $color-set-green;
					}
				}
			}


			.reason-media {
				margin-left: pxtovw414(40);
				overflow: hidden;

				img, video {
					width: 100%;
				}
			}
		}
	}
}

.desktop, .tablet {
	.detail-reason {
		margin: 220px 0;

		.inner-wrap {
			min-width: 1280px;
			width: 100%;
			margin: 0 auto;

			.contents {
				width: 1200px;
				margin: 0 auto;

				.reason-info {
					padding: 0 170px;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					margin-bottom: 80px;

					.reason-info__title-bx {
						display: block;
						margin-bottom: 0;

						.reason-info__title {
							font-size: $font-size-xl;
							line-height: 56px;
							margin-bottom: 45px;
						}

						.reason-info__img {
							width: 200px;
							height: 200px;

							img {
							}
						}
					}

					.reason-info__list {
						width: 444px;

						ul {
							border-top: 1px solid $color-set-green;
						}
					}
				}

				.reason-media {
					margin-left: 170px;

					img, video {
					}
				}
			}
		}
	}
}

.en {
	.detail-reason {
		.inner-wrap {
			.contents {
				.reason-info {
					.reason-info__title-bx {
						.reason-info__title {
							width: pxtovw414(200);
						}
					}
				}
			}
		}
	}


	&.desktop, &.tablet {
		.detail-reason {
			.inner-wrap {
				.contents {
					.reason-info {
						.reason-info__title-bx {
							.reason-info__title {
								width: auto;
							}
						}
					}
				}
			}
		}
	}
}
</style>