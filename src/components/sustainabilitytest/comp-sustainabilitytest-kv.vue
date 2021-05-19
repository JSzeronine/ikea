<template>
	<section class="comp-test-kv">
		<!-- S:Test -->
		<div class="test-wrap" v-if="testShow">
			<!-- S:Main -->
			<div class="personal-main" v-if="mainLoad">
				<div class="main-visual">
					<dl class="main-visual__text">
						<dt>
							<strong class="blind" v-html="contents.kv.title"></strong>
							<div class="img-title">
								<div class="img-pc bg-pc" :style="{backgroundImage:'url(' + contents.kv.title_img[ 0 ].img_pc + ')'}"></div>
								<div class="img-mb bg-m" :style="{backgroundImage:'url(' + contents.kv.title_img[ 0 ].img_mb + ')'}"></div>
							</div>
							<span v-html="contents.kv.title_sub"></span>
						</dt>
						<dd>
							<p v-html="contents.kv.text"></p>
							<div class="btn-start-wrap">
								<button type="button" class="btn-start" @click="startTest" :style="{backgroundImage:'url('+ contents.kv.button[ 0 ].img+')'}">
									<span class="blind" v-html="contents.kv.button[ 0 ].text"></span>
								</button>
							</div>
						</dd>
					</dl>
				</div>
				<div class="bg-wrap">
					<div class="img-pc bg-pc" :style="{backgroundImage:'url(../img/sustainabilitytest/pc-keyvisual-bg.png)'}"></div>
					<div class="img-mb bg-m" :style="{backgroundImage:'url(../img/sustainabilitytest/m-keyvisual-bg.jpg)'}"></div>
				</div>
			</div>
			<!-- //E:Main-->

			<!-- S:Personal Form -->
			<transition name="fade">
			<div class="personal-form" v-if="!loadingShow && !mainLoad">
				<div class="inner-wrap">
					<!-- S: personal-form__item -->
					<div class="personal-form__item">
						<TestList v-if="currentStep === 1">
							<template #question><span v-html="contents.question_1.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_1.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 2">
							<template #question><span v-html="contents.question_2.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_2.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 3">
							<template #question><span v-html="contents.question_3.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_3.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 4">
							<template #question><span v-html="contents.question_4.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_4.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 5">
							<template #question><span v-html="contents.question_5.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_5.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 6">
							<template #question><span v-html="contents.question_6.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_6.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 7">
							<template #question><span v-html="contents.question_7.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_7.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 8">
							<template #question><span v-html="contents.question_8.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_8.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 9">
							<template #question><span v-html="contents.question_9.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_9.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 10">
							<template #question><span v-html="contents.question_10.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_10.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 11">
							<template #question><span v-html="contents.question_11.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_11.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 12">
							<template #question><span v-html="contents.question_12.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_12.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 13">
							<template #question><span v-html="contents.question_13.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_13.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 14">
							<template #question><span v-html="contents.question_14.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_14.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 15">
							<template #question><span v-html="contents.question_15.question"></span></template>

							<template #list>
								<ul>
									<TestItem v-for="(item, index) in contents.question_15.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>

						<TestList v-else-if="currentStep === 16">
							<template #question><span v-html="contents.question_16.question"></span></template>

							<template #list>
								<ul class="personal-form__item-answer">
									<TestItem v-for="(item, index) in contents.question_16.answer" :score=item.score :num=currentStep @check="checkAnswer" :key="index">
										<template #answer><span v-html="item.text"></span></template>
									</TestItem>
								</ul>
								<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="!isMobileOnly"/>
							</template>
						</TestList>
					</div>
					<!-- //E: personal-form__item -->

					<div class="personal-form__utils">
						<div class="personal-progress" v-if="!mainLoad">
							<p class="percent-text"><strong>{{ animatedNumber }}</strong>% <span v-html="contents.percent"></span></p>
							<div class="bar-wrap">
								<span class="bar" v-for="index in totalStep" :key="index" :class="{completed: index <= currentStep - 1 }"></span>
							</div>
						</div>
						<ButtonGroup @next="nextQuestion" @result="showResult" :currentStep="currentStep" :totalStep="totalStep" :checked="checked" v-if="isMobile"/>
<!--						<button type="button" @click="redirectResult(61)" style="color:red; border-bottom:1px solid red;">바로 결과 이동 (개발용)</button>-->
					</div>
				</div>

				<div class="bg-wrap">
					<div class="bg-line bg-before" :style="{backgroundImage:'url(../img/sustainabilitytest/bg-form-top.png)'}"></div>
					<div class="img-pc bg-pc" :style="{backgroundImage:'url(../img/sustainabilitytest/pc-form-bg.jpg)'}"></div>
					<div class="img-mb bg-m" :style="{backgroundImage:'url(../img/sustainabilitytest/m-form-bg.jpg)'}"></div>
					<div class="bg-line bg-after" :style="{backgroundImage:'url(../img/sustainabilitytest/bg-form-bottom.png)'}"></div>
				</div>
				<!-- S:Personal Form -->
			</div>
			</transition>
		</div>
		<!-- //E:Test -->

		<!-- S:Result Loading -->
		<div class="loading-wrap" v-if="loadingShow">
			<div class="loading-content">
				<div class="loading-content__text">
					<div class="loading-content__text-wrap">
						<p v-html="contents.load"></p>
						<div class="bar-wrap">
							<span class="bar" v-for="index in totalStep" :key="index"></span>
						</div>
					</div>
				</div>
				<div class="bg-wrap">
					<div class="img-pc bg-pc" :style="{backgroundImage:'url(../img/sustainabilitytest/pc-question-bg.png)'}"></div>
					<div class="img-mb bg-m" :style="{backgroundImage:'url(../img/sustainabilitytest/m-question-bg.png)'}"></div>
				</div>
			</div>

			<div class="bg-wrap">
				<div class="bg-line bg-before" :style="{backgroundImage:'url(../img/sustainabilitytest/bg-form-top.png)'}"></div>
				<div class="img-pc bg-pc" :style="{backgroundImage:'url(../img/sustainabilitytest/pc-form-bg.jpg)'}"></div>
				<div class="img-mb bg-m" :style="{backgroundImage:'url(../img/sustainabilitytest/m-form-bg.jpg)'}"></div>
				<div class="bg-line bg-after" :style="{backgroundImage:'url(../img/sustainabilitytest/bg-form-bottom.png)'}"></div>
			</div>
		</div>
		<!-- //E:Result Loading -->
	</section>
</template>

<script>
import {isMobile, isMobileOnly} from "mobile-device-detect";
import gsap from "gsap";
import {Power2, Power3} from "gsap";

import TestList from "@/components/sustainabilitytest/comp-sustainabilitytest-list";
import TestItem from "@/components/sustainabilitytest/comp-sustainabilitytest-item";
import ButtonGroup from "@/components/sustainabilitytest/comp-sustainabilitytest-button";

export default {
	name: "comp-test-kv",

	data() {
		return {
			contents: null,

			isMobile: isMobile,
			isMobileOnly: isMobileOnly,
			testShow: true, // 테스트 시작 유무
			mainLoad: true, // 메인 로드 유무
			loadingShow: false, // 로딩 유무

			totalStep: 16, // 총 문항의 수 (총 16개)
			currentStep: 1, // 현재 문항의 번호

			score: 0, // 점수
			scoreArray: [], // 선택한 답의 배열
			totalScore: 0, // 합산된 총점

			checked: false, // 답 선택 여부
			percent: 0,
			tweenPercent: 0
		}
	},

	components: {
		TestList, TestItem, ButtonGroup
	},

	created() {
		this.contents = this.$t( "contents" );
	},

	mounted() {
		this.initTest();
	},

	computed: {
		animatedNumber: function () {
			return this.tweenPercent.toFixed(0);
		}
	},
	watch: {
		percent: function (newValue) {
			gsap.to(this.$data, 0.4, {tweenPercent: newValue});
		},

		loadingShow: function( ) {
			// 데이터갱신 후 UI까지 완료한 뒤에 nextTick에 있는 함수를 최종적으로 수행
			this.$nextTick(function () {
				gsap.fromTo(this.$el.querySelector(".loading-wrap"), 0.8, {
					alpha: 0,
				}, {
					alpha: 1,
					ease: Power3.easeOut
				});
			})
		}
	},

	methods: {
		initTest() {
			const time = 0.7;
			gsap.fromTo('.personal-main > .bg-wrap', time*2.0, {
				alpha: 0,
				y:20, scale:1.05
			}, {
				delay: 0.2,
				alpha: 1,
				y:0, scale:1,
				transformOrigin: '50% 50%',
				ease: Power3.easeOut
			});

			gsap.from('.main-visual__text dt .img-title', time, {
				delay: 0.2,
				opacity: 0,
				y: -20,
				ease: Power3.easeOut
			});

			gsap.from('.main-visual__text dt span', time, {
				delay: 0.5,
				opacity: 0,
				y: 0,
				ease: Power3.easeOut
			});

			gsap.from('.main-visual__text dd p', time, {
				delay: 0.7,
				opacity: 0,
				y: 30,
				ease: Power3.easeOut
			});

			gsap.from('.main-visual__text dd .btn-start-wrap', time, {
				delay: 0.8,
				opacity: 0,
				y: 30,
				ease: Power3.easeOut
			});
		},

		startTest() {
			this.mainLoad = false;
			this.currentStep = 1;

			this.questionShow();
			this.scrollTopMove();
		},

		questionShow() {
			this.$nextTick(function () {
				// form question
				gsap.fromTo('.personal-form__item-content dt strong', 0.4, {
					y: "20px",
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					delay: 0.1,
					ease: Power2.easeOut
				});
			});
		},

		checkAnswer(checked, score) {
			this.checked = checked;
			this.score = score;
		},

		nextQuestion() {
			if (!this.checked) return;

			this.currentStep++;

			let number = ((this.currentStep - 1) / this.totalStep) * 100; // (현재 문항-1 / 전체 문항) * 100
			this.percent = Math.floor(number);

			this.scoreSave();
			this.checked = false;

			this.questionShow();
			this.scrollTopMove();
		},

		scrollTopMove() {
			let sT = {
				y: window.scrollY || document.documentElement.scrollTop
			};

			gsap.to(sT, 0.3, {
				y: 0, onUpdate: () => {
					window.scrollTo(0, sT.y);
				}
			});
		},

		scoreSave() {
			if (this.scoreArray.length === this.totalStep) return;
			this.scoreArray.push(this.score);
			//console.log("각 항목의 점수 배열에 저장 : " + this.scoreArray);
		},

		showResult() {
			if (this.currentStep !== this.totalStep) return;

			this.scoreSave();
			// 합산
			const _this = this;
			_this.scoreArray.forEach(el => {
				_this.totalScore += el;
			});

			this.loadingShow = true;

			this.$nextTick(function () {
				const bar = document.querySelectorAll(".loading-content .bar");
				bar.forEach((el, index) => {
					gsap.delayedCall(index * 0.03 + 0.5, function () {
						el.classList.add("completed")
					})
				});
			});

			this.checkResult();
		},

		checkResult() {
			const _this = this;

			// 1~5,  6~10 기준 반올림하기 위함
			let lastNum = this.totalScore % 10;
			// console.log("점수 마지막 숫자 : " + lastNum);

			if (this.totalScore >= 31 && this.totalScore <= 40 ) { // 총점이 31 ~ 40점 사이일 경우 (즉, 미세먼지 공장장일 경우)
				if(this.scoreArray[5] === 6) { // 문항 6에서 도보(6점) 선택 확인
					if( lastNum < 6) { // 31 ~ 35
						this.totalScore = 30; // 폭염과 혹한의 아수라
					} else { // 36 ~ 40
						this.totalScore = 50; // 바다거북의 저승사자
					}
				}
			} else if (this.totalScore >= 71 && this.totalScore <= 80) { // 총점이 71 ~ 80점 사이일 경우 (즉, 입 짧은 기미상궁일 경우)
				if(this.scoreArray[9] === 6) { // 문항 10에서 마저 먹는다(6점) 선택 확인
					if( lastNum < 6) { // 71 ~ 75
						this.totalScore = 70; // 무자비한 미니멀리스트
					} else { // 76 ~ 80
						this.totalScore = 90; // 유통기한 엿장수
					}
				}
			} else if (this.totalScore >= 51 && this.totalScore <= 60) { // 총점이 51 ~ 60점 사이일 경우 (즉, 완to the 벽 인간세척기일 경우)
				if(this.scoreArray[12] === 7) { // 문항 13에서 베이킹 소다로 닦는다(7점) 선택 확인
					if( lastNum < 6) { // 51 ~ 55
						this.totalScore = 50; // 바다거북의 저승사자
					} else { // 56 ~ 60
						this.totalScore = 70; // 무자비한 미니멀리스트
					}
				}
			}

			// console.log("총점!" + this.totalScore);

			setTimeout(function () {				_this.loadShow = false;
				_this.redirectResult();

			}, 1400); // 1400 origin
		},

		redirectResult() {
			// console.log(this.totalScore + " 점");
			switch (true) {
				case (this.totalScore > 90):
					location.href = "../result-level-8/";
					break;
				case (this.totalScore > 80):
					location.href = "../result-level-7/";
					break;
				case (this.totalScore > 70):
					location.href = "../result-level-6/";
					break;
				case (this.totalScore > 60):
					location.href = "../result-level-5/";
					break;
				case (this.totalScore > 50):
					location.href = "../result-level-4/";
					break;
				case (this.totalScore > 40):
					location.href = "../result-level-3/";
					break;
				case (this.totalScore > 30):
					location.href = "../result-level-2/";
					break;
				case (this.totalScore > 0):
					location.href = "../result-level-1/";
					break;
				default:
					location.href = "../sustainabilitytest/";
					break;
			}
		}
	}
}
</script>

<style scoped lang="scss">

	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.3s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}


	.comp-test-kv {
		position: relative;
		width: 100%;
		height: 100vh;
		background-color: #373836;

		/* S: common */
		.bar-wrap {
			display: flex;
			justify-content: space-between;
			width: pxtovw414(220);
			height: pxtovw414(8);


			.bar {
				display: inline-block;
				width: pxtovw414(9);
				height: pxtovw414(7);
				background-color: #293F44;
				transition: 0.3s ease-out;

				&.completed {
					background-color: #00F47A;
				}
			}
		}

		.bg-line {
			position: absolute;
			left: 0;
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;

			&.bg-before {
				top: 0;
				background-position: center 0;
				background-size: 100% pxtovw414(65);
			}

			&.bg-after {
				bottom: pxtovw414(100);
				background-position: center 100%;
				background-size: 100% pxtovw414(115);
			}
		}

		.test-wrap {
			position: absolute;
			width: 100%;
			height: 100%;
		}
		/* //E: common */

		/* S: Main */
		.personal-main {
			position: relative;
			width: 100%;
			height: 100%;
			min-height: 700px;
			text-align: center;

			.inner-wrap {
				position: relative;
				top: 0;
				left: 0;
				width: 100%;
			}

			.main-visual {
				width: 100%;
				height: 100%;

				.main-visual__text {
					z-index: 2;
					position: relative;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;
					flex-direction: column;
					width: 100%;
					height: 100%;

					dt {
						margin-top: 5vh;

						.img-title {
							position: relative;
							left: 0;
							top: 0;
							z-index: 1;
							width: pxtovw414(360);
							height: pxtovw414(200);


							.bg-m {
								width: 100%;
								height: 100%;
								background-repeat: no-repeat;
								background-position: center 100%;
								background-size: 100%;
							}
						}

						span {
							display: inline-block;
							width: auto;
							height: pxtovw414(40);
							padding: 0 pxtovw414(18);
							margin-top: pxtovw414(25);
							border-radius: 34px;
							background-color: #17262C;
							font-family: $font-family-bold;
							font-size: pxtovw414(16);
							color: #00F47A;
							line-height: pxtovw414(40);
							vertical-align: top;
							box-sizing: border-box;
						}
					}

					dd {
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
						/*position: absolute;*/
						/*bottom: pxtovw414(60);*/
						width: 100%;
						/*flex: none;*/
						/*margin-top: auto;*/
						/*margin-bottom: calc(var(--vh, 1vh) * 15);*/

						position: absolute;
						/*bottom: calc(var(--vh, 1vh) * 8);*/
						bottom: 20vw;

						p {
							width: pxtovw414( 300 );
							line-height: pxtovw414(23);
							font-family: $font-family-bold;
							font-size: pxtovw414(16);
							color: #D5FAE1;
							text-shadow: 0px 0px 20px #000;
						}

						.btn-start-wrap {
							position: relative;
							margin-top: pxtovw414(35);
							width: pxtovw414(222);
							height: pxtovw414(60);
							background-color: #24FC69;
						}

						.btn-start {
							overflow: hidden;
							position: absolute;
							top: pxtovw414(-3);
							left: pxtovw414(-4);
							width: 100%;
							height: 100%;
							background-repeat: no-repeat;
							background-size: 100%;
							background-position: 0 0;
							cursor: pointer;
							outline: 0;
						}
					}
				}
			}

			> .bg-wrap {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				min-width: 100%;
				width: 100%;
				height: 100%;

				.bg-m {
					width: 100%;
					height: 100%;
					background-repeat: no-repeat;
					background-position: 50% 100%;
					background-size: cover;
				}
			}
		}
		/* //E: Main */

		/* S: Form */
		.personal-form {
			position: relative;
			width: 100%;
			height: 100%;
			min-height: 700px;

			.inner-wrap {
				z-index: 2;
				position: relative;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				.personal-form__item {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					width: 100%;
					height: calc(100% - 40vw);
				}
			}

			> .bg-wrap {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				width: 100%;
				height: 100%;

				.bg-m {
					background-repeat: repeat-x;
					background-position: center center;
					background-size: contain;
					width: 100%;
					height: 100%;
				}

			}

			.personal-form__utils {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;

				.personal-progress {
					width: 100%;
					padding: 0 pxtovw414(95);
					box-sizing: border-box;

					.percent-text {
						display: block;
						padding-bottom: pxtovw414(18);
						text-align: center;
						font-family: $font-family-bold;
						font-size: pxtovw414(16);
						color: #00F47A;
					}
				}
			}
		}
		/* //E: Form */

		/* S: Loading */
		.loading-wrap {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			width: 100%;
			height: 100%;

			.loading-content {
				z-index: 2;
				position: relative;
				width: pxtovw414(370);
				height: pxtovw414(230);

				.loading-content__text {
					z-index: 2;
					position: absolute;
					width: 100%;
					height: 100%;

					.loading-content__text-wrap {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						width: 100%;
						height: 100%;

						p {
							line-height: 1.375;
							font-family: $font-family-bold;
							font-size: pxtovw414(24);
							color: #fff;
						}

						.bar-wrap {
							margin-top: pxtovw414(18);
						}
					}

					.bg-wrap {
						top: auto;
						left: auto;
					}
				}
			}

			.bg-wrap {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;
				width: 100%;
				height: 100%;

				.bg-m {
					background-repeat: repeat-x;
					background-position: center center;
					background-size: contain;
					width: 100%;
					height: 100%;
				}

				.bg-line {
					&.bg-after {
						bottom: 0;
					}
				}
			}
		}
	}
	/* //E: Loading */

	.desktop, .tablet {
		.comp-test-kv {
			/* S: common */
			.bar-wrap {
				width: 320px;
				height: 12px;
				margin: 0 auto;

				.bar {
					width: 15px;
					height: 12px;
				}
			}

			.bg-line {
				&.bg-before {
					background-size: 100% 225px;
				}

				&.bg-after {
					bottom: 0;
					background-size: 100% 225px;
				}
			}
			/* //E: common */

			.personal-main {
				min-width: 1280px;
				background-color: #25383F;
				overflow: hidden;

				.main-visual {
					.main-visual__text {
						dt {
							.img-title {
								width: 546px;
								height: 227px;

								.bg-pc {
									width: 100%;
									height: 100%;
									background-repeat: no-repeat;
									background-position: center center;
									background-size: 100%;
								}
							}

							span {
								height: 38px;
								padding: 0 20px;
								margin-top: 20px;
								font-size: $font-size-xs;
								line-height: 38px;
							}
						}

						dd {
							width: auto;
							bottom: 104px;

							p {
								width: 100%;
								font-size: $font-size-xs;
								line-height: 1.666;
							}

							.btn-start-wrap {
								width: 294px;
								height: 74px;
								margin-top: 38px;
							}

							.btn-start {
								top: -7px;
								left: -5px;
								height: 76px;
								transition: all 0.2s ease-in;

								&:hover {
									top: 0;
									left: 0;
									transition: all 0.1s ease-in-out;
								}
							}
						}
					}
				}

				> .bg-wrap {
					.bg-pc {
						width: 100%;
						height: 100%;
						background-repeat: no-repeat;
						background-position: 50% 100%;
						background-size: 100%;
					}
				}
			}

			.personal-form {
				min-width: 1280px;
				padding: 0 50px;
				box-sizing: border-box;

				.inner-wrap {
					.personal-form__item {
						height: 100%;
					}
				}


				.bg-wrap {
					.bg-pc {
						width: 100%;
						height: 100%;
						background-repeat: repeat-x;
						background-size: contain;
					}
				}

				.personal-form__utils {
					bottom: 100px;

					.personal-progress {
						padding: 0;

						.percent-text {
							padding-bottom: 20px;
							font-size: $font-size-xs;
						}
					}
				}
			}

			.loading-wrap {
				min-width: 1280px;

				.loading-content {
					width: 600px;
					height: 373px;

					.loading-content__text {
						.loading-content__text-wrap {
							p {
								font-size: $font-size-me;
							}

							.bar-wrap {
								margin-top: 28px;
							}
						}
					}

					.bg-wrap {
						&:before, &:after {
							display: none;
						}

						.bg-pc {
							background-repeat: no-repeat;
						}
					}
				}

				.bg-wrap {
					.bg-pc {
						width: 100%;
						height: 100%;
						background-repeat: repeat-x;
						background-position: center center;
						background-size: 100%;
					}
				}
			}
		}
	}

	@media screen and (orientation: landscape) {
		.mobile {
			.comp-test-kv {

				.bar-wrap {
					width: pxtovw414(120);
					height: pxtovw414(4);
					margin: 0 auto;

					.bar {
						display: inline-block;
						width: pxtovw414(6);
						height: pxtovw414(4);
						background-color: #293F44;
						transition: 0.3s ease-out;

						&.completed {
							background-color: #00F47A;
						}
					}
				}

				.bg-line {
					&.bg-before {
						background-size: 100% pxtovw414(32);
					}

					&.bg-after {
						bottom: pxtovw414(35);
						background-size: 100% pxtovw414(57);
					}
				}

				.personal-main {
					.main-visual {
						.main-visual__text {
							dt {
								margin-top: 10vh;

								.img-title {
									width: pxtovw414(180);
									height: pxtovw414(100);
									margin: 0 auto;
								}

								span {
									width: auto;
									height: pxtovw414(20);
									padding: 0 pxtovw414(9);
									margin-top: pxtovw414(10);
									border-radius: 34px;
									font-size: pxtovw414(9);
									line-height: pxtovw414(20);
								}
							}

							dd {
								bottom: 8vw;

								p {
									font-size: pxtovw414(9);
									line-height: pxtovw414(12);
								}

								.btn-start-wrap {
									margin-top: pxtovw414(17);
									width: pxtovw414(111);
									height: pxtovw414(30);
								}

							}
						}
					}

					& > .bg-wrap {
						.bg-m {
							background-position: 50% 50%;
						}
					}
				}

				.personal-form {
					.inner-wrap {
						.personal-form__item {
							height: calc(100% - 17vw);
						}
					}

					.personal-form__utils {
						.personal-progress {
							padding: 0 pxtovw414(95);

							.percent-text {
								padding-bottom: pxtovw414(9);
								font-size: pxtovw414(8);
							}
						}
					}
				}

				.loading-wrap {
					.loading-content {
						width: pxtovw414(185);
						height: pxtovw414(115);

						.loading-content__text {
							.loading-content__text-wrap {
								p {
									line-height: 1.375;
									font-size: pxtovw414(12);
								}

								.bar-wrap {
									margin-top: pxtovw414(9);
								}
							}
						}
					}
				}
			}
		}
	}

	.en {
		.comp-test-kv {
			.personal-main {
				.main-visual {
					.main-visual__text {
						dd {
							p {
								width: pxtovw414(385);
							}
						}
					}
				}
			}
		}
	}
</style>