<template>
    <div v-if="isIE">
        <VersionUpdate />
    </div>
    <div v-else id="app">
        <TeaserHeader :isLab="false" />

        <div class="content">
            <TeaserKv class="teaser-kv" v-if="isKv"></TeaserKv>

            <TeaserDay :isDayShow="isDay"></TeaserDay>

            <div class="teaser-info">
                <div class="teaser-info__bx">
                    <div class="teaser-info__bx-content">
                        <TeaserHorizonText class="teaser-info__txt"></TeaserHorizonText>
                        <TeaserHorizonVideo class="teaser-info__video"></TeaserHorizonVideo>
                    </div>
                </div>

                <ul class="teaser-info__guide">
                    <li class="teaser-info__guide-out"></li>
                    <li class="teaser-info__guide-in"></li>
                    <li class="teaser-info__guide-out"></li>
                    <li class="teaser-info__guide-in"></li>
                    <li class="teaser-info__guide-out"></li>
                    <li class="teaser-info__guide-in"></li>
                    <li></li>
                </ul>
            </div>

            <TeaserFuture></TeaserFuture>

            <!-- 2차 시작 -->
            <TeaserEffort class="section-padding-top_me">
                <template #title>
                    <span v-html="contents.effort.title"></span>
                </template>

                <template #description>
                    <span v-for="( item, index ) in contents.effort.description" v-html="item" :key="index"></span>
                </template>
            </TeaserEffort>

            <TeaserContact>
                <template #map-img>
                    <img class="img-pc" :src="contents.contact.map.img_pc" alt="이케아 지도">
                    <img class="img-mb" :src="contents.contact.map.img_m" alt="이케아 지도">
                </template>

                <template #map-title>
                    <span v-html="contents.contact.info.title"></span>
                </template>

                <template #address-title><span v-html="contents.contact.info.address.title"></span></template>
                <template #address-data><span v-html="contents.contact.info.address.data"></span></template>

                <template #operation-title><span v-html="contents.contact.info.operation.title"></span></template>

                <template #operation-lab-title><span v-html="contents.contact.info.operation.lab.title"></span></template>
                <template #operation-lab-time><span v-html="contents.contact.info.operation.lab.time"></span></template>

                <template #operation-food-title><span v-html="contents.contact.info.operation.food.title"></span></template>
                <template #operation-food-time1><span v-html="contents.contact.info.operation.food.time1"></span></template>
                <template #operation-food-time2><span v-html="contents.contact.info.operation.food.time2"></span></template>

                <template #important>
                    <span v-html="contents.contact.info.important"></span>
                </template>

                <template #map-link>
                    <ItemMapLink v-for="( item, index ) in contents.contact.map.links" :key="index" :link="item.link" >
                        <template #img>
                            <img :src="item.img_icon" alt="">
                        </template>

                        <template #title>
                            <span v-html="item.title"></span>
                        </template>
                    </ItemMapLink>
                </template>


            </TeaserContact>

            <EventInfo :isHeader="true">
                <template #header-title>
                    <span v-html="contents.event.section_title"></span>
                </template>

                <template #point>
                    <span v-html="contents.event.txt_point" id="hashtag"></span>
                </template>

                <template #title>
                    <span v-html="contents.event.title"></span>
                </template>

                <template #list>
                    <ItemEventInfo v-for="( pItem, pIndex ) in contents.event.list" :key="pIndex">
                        <template #img v-if="pItem.img">
                            <img class="img-pc" :src="pItem.img.pc" alt="">
                            <img class="img-mb" :src="pItem.img.m" alt="">
                        </template>

                        <template #description v-if="pItem.description">
                            <span v-for="( item, index ) in pItem.description" :key="index" v-html="item"></span>
                        </template>

                        <template #date v-if="pItem.date">
                            <div class="event-list__date">
                                <dl v-for="( item, index ) in pItem.date" :key="index">
                                    <dt>{{ item.title }}</dt>
                                    <dd>{{ item.day }}</dd>
                                </dl>
                            </div>
                        </template>

                        <template #product v-if="pItem.product">
                            <ul class="event-product__list">
                                <ItemProduct v-if="pItem.product" v-for="( item, index ) in pItem.product" :key="index">
                                    <template #img>
                                        <img :src="item.img" alt="">
                                    </template>

                                    <template #list>
                                        <dl v-for="( list, index ) in item.list">
                                            <dt>
                                                <span v-html="list.title"></span>
                                            </dt>
                                            <dd>
                                                <span v-html="list.description"></span>
                                            </dd>
                                        </dl>
                                    </template>
                                </ItemProduct>
                            </ul>
                        </template>

                    </ItemEventInfo>
                </template>
            </EventInfo>

            <EventInfo class="section-margin_xs" id="concert">
                <template #point>
                    <span v-html="contents.activity.txt_point"></span>
                </template>
                <template #title>
                    <span v-html="contents.activity.title"></span>
                </template>

                <template #list>
                    <ItemEventInfo v-for="( pItem, pIndex ) in contents.activity.list" :key="pIndex">
                        <template #description>
                            <span v-for="( item, index ) in pItem.description" :key="index" v-html="item"></span>
                        </template>

                        <template #date>
                            <div class="event-list__date">
                                <dl v-for="( item, index ) in pItem.date" :key="index">
                                    <dt v-html="item.title"></dt>
                                    <dd v-html="item.day"></dd>
                                </dl>
                            </div>
                        </template>

                        <template #join>
                            <a :href="pItem.join.link" target="_blank">
                                {{ pItem.join.title }}
                            </a>
                        </template>

                        <template #important>
                            <span v-for="( item, index ) in pItem.important" :key="index" v-html="item"></span>
                        </template>
                    </ItemEventInfo>
                </template>
            </EventInfo>

            <TeaserConcert class="section-margin_xs">
                <template #list-concert>
                    <ItemConcert v-for="( pItem, pIndex ) in contents.activity.concert.list" :key="pIndex">
                        <template #week>
                            <span v-html="pItem.week"></span>
                        </template>

                        <template #title>
                            <span v-html="pItem.title"></span>
                        </template>

                        <template #date>
                            <span v-html="pItem.date"></span>
                        </template>

                        <template #cource>
                            <ItemConcertCource v-for="( item, index ) in pItem.cource" :key="index" :breakInfo="item.break">
                                <template #photo>
                                    <img :src="item.photo" alt="">
                                </template>

                                <template #name>
                                    <span v-html="item.name"></span>
                                </template>

                                <template #description>
                                    <span v-html="item.description"></span>
                                </template>

                                <template #topic>
                                    <span v-html="item.topic"></span>
                                </template>

                                <template #time>
                                    <span v-html="item.time"></span>
                                </template>
                            </ItemConcertCource>
                        </template>

                        <template #button>
                            <!--
                                language.json -> concert.button.type : 1, 2, 3 으로 구분,
                                dimmed : 링크값 없을 시, 자동 dimmed 처리
                            -->
                            <!-- 신청하기, 콘서트종료 -->
                            <a v-if="pItem.button.type == 1" class="concert-btn__default" :class="{ dimmed : !pItem.button.link }" :href="pItem.button.link" target="_blank">
                                {{ pItem.button.title }}
                            </a>

                            <!-- NOW 보러가기 -->
                            <a v-if="pItem.button.type == 2" class="concert-btn__now" :class="{ dimmed : !pItem.button.link }" :href="pItem.button.link" target="_blank">
                                <img :src="`../img/teaser2/btn-icon-now.png`" alt="">
                                {{ pItem.button.title }}
                            </a>

                            <!-- NOW 다시보기 -->
                            <a v-if="pItem.button.type == 3" class="concert-btn__now-replay" :class="{ dimmed : !pItem.button.link }" :href="pItem.button.link" target="_blank">
                                <img :src="`../img/teaser2/btn-icon-now.png`" alt="">
                                {{ pItem.button.title }}
                            </a>

                        </template>

                        <template #possible>
                            <span v-html="pItem.possible"></span>
                        </template>
                    </ItemConcert>
                </template>
            </TeaserConcert>

            <EventInfo>
                <template #point>
                    <span v-html="contents.consult.txt_point"></span>
                </template>
                <template #title>
                    <span v-html="contents.consult.title"></span>
                </template>

                <template #list>
                    <ItemEventInfo v-for="( pItem, pIndex ) in contents.consult.list" :key="pIndex">
                        <template #img v-if="pItem.img">
                            <img class="img-pc" :src="pItem.img.pc" alt="">
                            <img class="img-mb" :src="pItem.img.m" alt="">
                        </template>

                        <template #description v-if="pItem.description">
                            <span v-for="( item, index ) in pItem.description" :key="index" v-html="item"></span>
                        </template>

                        <template #important>
                            <span v-for="( item, index ) in pItem.important" :key="index" v-html="item"></span>
                        </template>

                        <template #reservation>
                            <a :href="pItem.reservation.link" target="_blank">
                                {{ pItem.reservation.title }}
                            </a>
                        </template>

                    </ItemEventInfo>
                </template>
            </EventInfo>

            <!-- //2차 끝 -->
            <TeaserPlay id="tvc"></TeaserPlay>
        </div>
        <TeaserFooter />
    </div>
</template>

<script>
import VersionUpdate from "@/components/main/VersionUpdate";

import TeaserHeader from "@/components/common/comp-teaser-header";
import TeaserKv from "@/components/teaser/comp-teaser-intro";
import TeaserDay from "@/components/teaser/comp-teaser-day";
import TeaserHorizonText from "@/components/teaser/comp-teaser-horizon-text";
import TeaserHorizonVideo from "@/components/teaser/comp-teaser-horizon-video";
import TeaserFuture from "@/components/teaser2/comp-teaser-future";


import TeaserEffort from "@/components/teaser2/comp-teaser-effort";
import TeaserContact from "@/components/teaser2/comp-teaser-contact";
import ItemMapLink from "@/components/teaser2/teasercomponents/item-map-link";

import EventInfo from "@/components/event/comp-event-info";
import ItemEventInfo from "@/components/event/eventcomponents/item-info";
import ItemProduct from "@/components/event/eventcomponents/item-info-product";

import TeaserConcert from "@/components/teaser2/comp-teaser-concert";
import ItemConcert from "@/components/teaser2/teasercomponents/item-concert";
import ItemConcertCource from "@/components/teaser2/teasercomponents/item-concert-cource";

import TeaserPlay from "@/components/teaser/comp-teaser-play";
// import TeaserFooter from "@/components/common/comp-teaser-footer";
import TeaserFooter from "@/components/common/comp-footer";

import { isMobile, isChrome, isIE } from "mobile-device-detect";
import { gsap, Cubic, Back } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: 'Teaser',
    data(){
        return{
            isKv : true,
            isDay:false,
            isIE : isIE,
            contents : null,
        }
    },

    mixins : [
        MixinImgLoad
    ],

    components: {
        VersionUpdate,

        TeaserHeader,
        TeaserKv,
        TeaserDay,
        TeaserHorizonText,
        TeaserHorizonVideo,
        TeaserFuture,
        //2차 시작
        TeaserEffort,
        TeaserContact,
        ItemMapLink,

        EventInfo,
        ItemEventInfo,
        ItemProduct,

        TeaserConcert,
        ItemConcert,
        ItemConcertCource,

        //2차 끝
        TeaserPlay,

        TeaserFooter
    },

    created() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        this.contents = this.$t( "contents.future2" );
    },

    mounted() {
        if( this.isIE ){
            return;
        }

        this.showLoad();
        this.showKv();

        /* 인트로 보여줄지 안보여줄지 */
        this.isKv = true;
        document.querySelector( "html" ).classList.remove( "init-scroll" );

        gsap.registerPlugin( ScrollTrigger );

        if( isMobile ){
            this.showMobile();
        }

        const TL = gsap.timeline({});

        let gs = this.$el.querySelectorAll( ".teaser-info__guide li" );

        let t0 = this.$el.querySelector( ".text-01" );
        let t1 = this.$el.querySelector( ".text-02" );
        let t2 = this.$el.querySelector( ".text-03" );
        let t3 = this.$el.querySelector( ".text-04" );

        let v0Container = this.$el.querySelector( ".video-01" );
        let v1Container = this.$el.querySelector( ".video-02" );

        let video0 = ( isMobile ) ? v0Container.querySelector( ".img-mb" ) : v0Container.querySelector( ".img-pc" );
        let video1 = ( isMobile ) ? v1Container.querySelector( ".img-mb" ) : v1Container.querySelector( ".img-pc" );

        TL.fromTo( t0, {

        }, {
            scrollTrigger : {
                trigger : this.$el.querySelector( ".teaser-info" ),
                start : "top center",
                end : "top 49%",
                onEnter : () => {
                    video0.currentTime = 0;
                    video0.play();
                },

                onEnterBack : () => {
                    video0.pause();
                    video0.currentTime = 0;
                }
            }
        });

        TL.fromTo( t0, {
            y:0,
            opacity : 1,
        }, {
            y: -50,
            opacity : 0,
            ease:Cubic.easeIn,
            scrollTrigger : {
                trigger : gs[ 0 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
                onEnter : () => {
                    // video0.play();
                    // console.log( "start" );
                }
            }
        });

        TL.fromTo( t1, {
            y:50,
            opacity : 0,
        }, {
            y: 0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : gs[ 1 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t1, {
            y:0,
            opacity : 1,
        }, {
            y: -50,
            opacity : 0,
            ease:Cubic.easeIn,
            scrollTrigger : {
                trigger : gs[ 2 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t2, {
            y:50,
            opacity : 0,
        }, {
            y: 0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : gs[ 3 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t2, {
            y:0,
            opacity : 1,
        }, {
            y: -50,
            opacity : 0,
            ease:Cubic.easeIn,
            scrollTrigger : {
                trigger : gs[ 4 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
            }
        });

        TL.fromTo( t3, {
            y:50,
            opacity : 0,
        }, {
            y: 0,
            opacity : 1,
            ease:Cubic.easeOut,
            scrollTrigger : {
                trigger : gs[ 5 ],
                start : "top top",
                end : "bottom top",
                scrub : true,
                onEnter : () => {
                    video1.play();

                    gsap.killTweensOf( v1Container );
                    gsap.to( v1Container, 0.5, { opacity:1, display:"block", onComplete:() => {
                            video0.pause();
                            video0.currentTime = 0;
                        }});
                },

                onLeaveBack : () => {
                    video0.pause();
                    video0.currentTime = 0;
                    video0.play();

                    gsap.killTweensOf( v1Container );
                    gsap.to( v1Container, 0.5, { opacity:0, display:"none", onComplete: () => {
                            video1.pause();
                            video1.currentTime = 0;
                        }});
                }
            }
        });

        gsap.set( t1, { opacity : 0, y:-50 });
        gsap.set( t2, { opacity : 0, y:-50  });
        gsap.set( t3, { opacity : 0, y:-50  });
    },

    methods : {
        showMobile(){

        },

        showKv(){
            let teaserKv = this.$el.querySelector( ".teaser-kv__wrap" );
            let container = teaserKv.querySelector( ".teaser-kv__content" );

            let intro = teaserKv.querySelector( ".teaser-kv__intro" );
            let content = intro.querySelector( "ul" );

            let scale = ( isMobile ) ? "200vh" : "200vw";

            const _this = this;

            const TL = gsap.timeline({});


            TL
                .to( container, 0.3, { })
                .from( container, { duration:0.6, scale:50/content.offsetWidth, ease:Back.easeOut })
                .to( content, 1, { y:"-33.3333%", ease:Cubic.easeInOut }, "< 0.75" )
                .to( content, 1, { y:"-66.6666%", ease:Cubic.easeInOut, onComplete:function(){
                        _this.isDay = true;
                        _this.$el.querySelector(".teaser-kv__content").classList.add("show");
                    } }, "> 0.25" )


                .to( content, 1, { y:"-100%", ease:Cubic.easeInOut }, "> 0.25" )
                .to( intro, 1, { opacity:0, display:"none", ease:Cubic.easeInOut, onComplete:() => {
                    }}, "< 0.25" )
                .to( container, 1, { width:scale, height:scale, ease:Cubic.easeInOut, onComplete:() => {
                        this.isKv = false;

                        document.querySelector( "html" ).classList.remove( "init-scroll" );


                    }}, "< 0.5" )
                .to( container, 1, { onComplete:() => {
                        if( isMobile ){

                            let tl = this.$el.querySelector( ".day-wrap .title-wrap" )
                            let dday = this.$el.querySelector( ".day-wrap .d-day-m-wrap" );

                            dday.classList.add( "on" );
                            tl.classList.add( "on" );
                        }
                    }}, "< -1" );
        }
    },
}
</script>

<style lang="scss" scoped>
#app{
    .content{
        position: relative;
        .teaser-info{
            position: relative;
            margin-top: -1px;
            .teaser-info__bx{
                left: 0;
                top: 0;
                position: sticky;
                position: -webkit-sticky;
                width: 100%;
                height: 100vh;
                .teaser-info__bx-content{
                    position: relative;
                    .teaser-info__txt{
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                    }

                    .teaser-info__video{
                        position: relative;
                    }
                }
            }

            .teaser-info__guide{
                left: 0;
                top: 0;
                position: relative;
                width: 0%;
                margin-top: -80vh;
                li{
                    width: 0%;
                    height: 50vh;
                    margin-bottom: 20vh;
                    //border: 1px solid #000;
                    //background-color: rgba( 0, 0, 0, 0.5 );

                    &.teaser-info__guide-in{

                    }

                    &.teaser-info__guide-out{
                        margin-bottom: 5vh;
                    }

                    &:last-child{
                        height: 100vh;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}

.mobile{
    #app{
        .content{
            position: relative;
            .teaser-info{
                width: 100%;
                position: relative;
                .teaser-info__bx{
                    position: sticky;
                    position: -webkit-sticky;
                    width: 100%;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    .teaser-info__bx-content{
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        .teaser-info__txt{

                        }

                        .teaser-info__video{

                        }
                    }
                }

                .teaser-info__guide{
                    li{

                    }
                }
            }
        }
    }

}


@media screen and (orientation: landscape) {
    .mobile{
        #app{
            .content{
                .teaser-info{
                    .teaser-info__bx{
                        .teaser-info__bx-content{
                            position: relative;
                            width: 100%;
                            height: 100vh;
                            .teaser-info__txt{

                            }

                            .teaser-info__video{

                            }
                        }
                    }

                    .teaser-info__guide{
                        li{

                        }
                    }
                }
            }
        }
    }
}
</style>
