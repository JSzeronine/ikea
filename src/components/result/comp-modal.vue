<template>
	<transition name="modal">
		<div class="modal modal-overlay" @click.self="$emit('close')">
			<div class="modal-wrap">
				<div class="modal-content">
					<slot name="title"></slot>

					<div class="sns-link-wrap">
						<ul class="sns-link-list">
							<li>
								<a href="javascript:void(0);" @click="socialShare('facebook')">
									<span class="blind" v-html="contents.list[0]"></span>
									<img :src="`../img/sustainabilitytest/icon-sns-item-1.png`" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" @click="socialShare('twitter')">
									<span class="blind" v-html="contents.list[1]"></span>
									<img :src="`../img/sustainabilitytest/icon-sns-item-2.png`" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" @click="shareKatalk">
									<span class="blind" v-html="contents.list[2]"></span>
									<img :src="`../img/sustainabilitytest/icon-sns-item-3.png`" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" @click="socialShare('naver')">
									<span class="blind" v-html="contents.list[3]"></span>
									<img :src="`../img/sustainabilitytest/icon-sns-item-4.png`" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" @click="shareStory">
									<span class="blind" v-html="contents.list[4]"></span>
									<img :src="`../img/sustainabilitytest/icon-sns-item-5.png`" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" @click="onClickCopyUrl">
									<span class="blind" v-html="contents.list[5]"></span>
									<img :src="`../img/sustainabilitytest/icon-sns-item-6.png`" alt="">
								</a>
							</li>
						</ul>
					</div>
				</div>
				<footer class="modal-footer">
					<slot name="footer">
						<button type="button" @click="hideModal"><span v-html="contents.btn_close"></span></button>
					</slot>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script>
import {isIE} from 'mobile-device-detect';

export default {
	name: 'comp-modal',

	data() {
		return {
			contents: null,
			isIE: isIE
		}
	},

	created() {
		this.contents = this.$t("contents.modal")
	},

	methods: {
		hideModal() {
			this.$emit('close');
		},

		socialShare(social) {
			const _url = encodeURIComponent(document.URL);

			const SOCIAL_SHARE = {
				facebook: {
					url: "https://www.facebook.com/sharer/sharer.php",
					makeShareUrl: function () {
						return this.url + "?u=" + _url;
					}
				},
				twitter: {
					url: "https://twitter.com/intent/tweet",
					makeShareUrl: function () {
						return this.url + "?text=" + document.title + "&url=" + _url;
					}
				},
				naver: {
					url: "https://share.naver.com/web/shareView.nhn",
					makeShareUrl: function () {
						return this.url + "?url=" + encodeURI(encodeURIComponent(document.URL)) + "&title=" + document.title;
					}
				}
			}
			const service = SOCIAL_SHARE[social];
			if (service) {
				window.open(service.makeShareUrl());
			}
		},

		/*
		  kakao
		  user agent가 변경되는 환경(데스크톱 브라우저 > 모바일 모드)을 지원하지 않는다.
		*/
		shareStory() {
			Kakao.Story.share({
				url: document.URL,
				text: document.title
			})
		},

		shareKatalk() {
			Kakao.Link.sendScrap({
				requestUrl: document.URL
			});
		},

		// url copy
		onClickCopyUrl() {
			const linkUrl = document.URL;

			if (this.isIE) {
				window.clipboardData.setData('Text', linkUrl);
				alert(this.contents.msg[0].copy_success);
			} else {
				const textArea = document.createElement("textarea");
				textArea.value = document.URL;

				// Avoid scrolling to bottom
				textArea.style.top = "0";
				textArea.style.left = "0";
				textArea.style.position = "fixed";

				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();

				/*For IOS */
				textArea.setSelectionRange(0, document.URL.length);

				try {
					const success = document.execCommand("copy");
					const msg = success ? this.contents.msg[0].copy_success : this.contents.msg[0].copy_fail;
					alert(msg);
				} catch (err) {
					// ios 10미만
					prompt(this.contents.msg[0].copy_success, linkUrl);
				}

				document.body.removeChild(textArea);
			}
		}
	}
}
</script>

<style scoped lang="scss">
.modal {
	&.modal-overlay {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 101;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
	}

	.modal-wrap {
		background: #fff;
	}

	.modal-content {
		width: pxtovw414(360);
		height: pxtovw414(294);
		padding: pxtovw414(50) pxtovw414(73) pxtovw414(46);
		box-sizing: border-box;
		text-align: center;

		strong {
			font-size: pxtovw414(19);
			line-height: 1.3684;
		}

		.sns-link-wrap {
			ul {
				margin: pxtovw414(20) 0 0 pxtovw414(-20);

				li {
					display: inline-block;
					width: pxtovw414(54);
					margin: pxtovw414(25) 0 0 pxtovw414(20);

					a {
						display: block;
						width: 100%;
						height: 100%;
					}

					img {
						width: 100%;
					}
				}
			}
		}
	}

	.modal-footer {
		background-color: #18DB56;
		text-align: center;

		button {
			display: block;
			width: 100%;
			height: pxtovw414(70);
			font-family: $font-family-bold;
			font-size: pxtovw414(18);
		}
	}
}

.modal-enter-active, .modal-leave-active {
	transition: opacity 0.4s;

	.modal-wrap {
		transition: opacity 0.4s, transform 0.4s;
	}
}

.modal-leave-active {
	transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
	opacity: 0;

	.modal-wrap {
		opacity: 0;
		transform: translateY(-20px);
	}
}

.desktop, .tablet {
	.modal {
		.modal-content {
			width: 360px;
			height: 294px;
			padding: 55px 74px 50px;

			strong {
				font-size: $font-size-xs;
			}

			.sns-link-wrap {
				ul {
					margin: 25px 0 0 -25px;

					li {
						width: 54px;
						height: 54px;
						margin: 20px 0 0 25px;
					}
				}
			}
		}

		.modal-footer {
			button {
				height: 70px;
				font-size: $font-size-xs;
				outline: 0;
				cursor: pointer;
			}
		}
	}
}

@media screen and (orientation: landscape ) {
	.mobile {
		.modal {
			.modal-content {
				width: pxtovw414(180);
				height: pxtovw414(147);
				padding: pxtovw414(25) pxtovw414(36) pxtovw414(23);

				strong {
					font-size: pxtovw414(10);
				}

				.sns-link-wrap {
					ul {
						margin: pxtovw414(10) 0 0 pxtovw414(-10);

						li {
							width: pxtovw414(27);
							margin: pxtovw414(12) 0 0 pxtovw414(10);
						}
					}
				}
			}

			.modal-footer {
				button {
					height: pxtovw414(35);
					font-size: pxtovw414(9);
				}
			}
		}
	}
}
</style>