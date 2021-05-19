<template>
	<li>
		<div class="detail-total__txt">
			<div class="detail-total__year">
				<h3>
					<slot name="year"></slot>
				</h3>
				<p>
					<slot name="sub-txt"></slot>
				</p>
			</div>

			<div class="detail-total__description-pc">
				<slot name="description"></slot>
			</div>
		</div>

		<div class="detail-total__img-bx">
			<div class="detail-total__img">
				<slot name="img"></slot>
			</div>
			<div class="detail-total__img-line">
				<span></span>
			</div>
		</div>

		<div class="detail-total__description-m">
			<slot name="description"></slot>
		</div>
	</li>

</template>

<script>
import {isMobile, isChrome, isIE} from "mobile-device-detect";
import {gsap, Cubic} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {EventBus} from "@/components/common/EventBus";

export default {
	name: "item-recycle-total",

	mounted() {
		EventBus.$on(EventBus.LOAD_COMPLETE_EVENT, this.loadComplete);
	},

	methods: {

		loadComplete() {
			gsap.registerPlugin(ScrollTrigger);

			let Tl = gsap.timeline({});

			let imgBx = this.$el.querySelector(".detail-total__img-bx");
			let img = imgBx.querySelector("img");

			let txt = this.$el.querySelector(".detail-total__txt");

			Tl.fromTo(img, {
				y: img.clientHeight,
				opacity: 0,
			}, {
				y: 0,
				opacity: 1,
				ease: Cubic.easeOut,
				scrollTrigger: {
					trigger: imgBx,
					start: "center bottom",
					end: "center center",
					scrub: true,
				}
			});

			if (isMobile) {
				Tl.fromTo(txt, {
					y: 30,
					opacity: 0,
				}, {
					y: 0,
					opacity: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: imgBx,
						start: "center bottom",
						end: "center center",
						scrub: true,
					}
				});
			} else {
				Tl.fromTo(txt, {
					opacity: 0,
				}, {
					opacity: 1,
					ease: Cubic.easeOut,
					scrollTrigger: {
						trigger: imgBx,
						start: "center bottom",
						end: "center center",
						scrub: true,
					}
				});
			}
		}
	}
}
</script>

<style scoped lang="scss">
li {
	margin-bottom: pxtovw414(100);

	&:last-child {
		margin-bottom: 0;
	}

	.detail-total__txt {
		margin-bottom: pxtovw414(30);

		.detail-total__year {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			flex-wrap: wrap;

			h3 {
				text-align: center;
				width: 100%;
				font-size: pxtovw414(55);
				line-height: pxtovw414(75);
				font-family: $font-family-bold;
				color: $color-set-green;

				span {
					font-size: pxtovw414(20);
					line-height: pxtovw414(24);
					font-family: $font-family-bold;
					color: $color-set-green;
				}
			}

			> p {
				text-align: center;
				font-size: pxtovw414(20);
				line-height: pxtovw414(24);
				font-family: $font-family-bold;
				color: $color-set-green;
			}
		}

		.detail-total__description-pc {
			display: none;
		}
	}

	.detail-total__img-bx {
		margin-bottom: pxtovw414(30);
		padding: 0 pxtovw414(40);
		font-size: 0;

		.detail-total__img {
			overflow: hidden;
			width: 100%;

			img {
				width: 100%;
			}
		}

		.detail-total__img-line {
			span {
				display: block;
				width: 100%;
				height: 2px;
				background-color: $color-set-green;
			}
		}
	}

	.detail-total__description-m {
		display: block;
		text-align: center;
		font-size: pxtovw414(18);
		line-height: pxtovw414(28);
		color: $color-set-green;
		font-family: $font-family-bold;
		padding: 0 pxtovw414(40);
		box-sizing: border-box;
	}
}


.desktop, .tablet {
	li {
		margin-bottom: 52px;
		display: flex;
		justify-content: flex-start;
		flex-direction: row-reverse;
		align-items: flex-end;
		border-bottom: 1px solid $color-set-green;

		&:nth-child( 2n ) {
			flex-direction: row;
		}

		&:last-child {
			margin-bottom: 0;

			.detail-total__txt {
				.detail-total__year {
					h3 {
						//width: 127px;
					}

					> p {
						line-height: 61px;
					}
				}
			}
		}

		.detail-total__txt {
			width: 50%;
			margin-bottom: 0px;
			padding: 0;
			padding-bottom: 46px;
			padding-left: 46px;

			.detail-total__year {
				flex-wrap: nowrap;
				justify-content: start;

				h3 {
					//width: 300px;
					font-size: 64px;
					line-height: 87px;
					text-align: left;
					margin-bottom: 10px;

					span {
						font-size: $font-size-s;
						line-height: 30px;
					}
				}

				> p {
					font-size: $font-size-s;
					line-height: 30px;
					display: inline;
				}
			}

			.detail-total__description-pc {
				display: block;
				font-size: $font-size-s;
				line-height: 30px;
				color: $color-set-green;
				font-family: $font-family-bold;
			}
		}

		.detail-total__img-bx {
			padding: 0 46px;
			width: 50%;
			margin-bottom: 0;

			.detail-total__img {
				img {
				}
			}

			.detail-total__img-line {
				display: none;

				span {
				}
			}
		}

		.detail-total__description-m {
			display: none;
		}
	}
}

.en {
	li {
		.detail-total__txt {
			.detail-total__year {
				display: flex;
				justify-content: center;
				align-items: flex-end;
				flex-wrap: wrap;

				h3 {
					display: flex;
					justify-content: center;
					flex-direction: row-reverse;
					align-items: baseline;

					span {
						margin-right: pxtovw414(8);
					}
				}
			}
		}
	}

	&.desktop, &.tablet {
		li {
			.detail-total__txt {
				.detail-total__year {
					h3 {
						justify-content: flex-end;

						span {
							margin-right: 10px;
						}
					}
				}
			}
		}
	}
}
</style>