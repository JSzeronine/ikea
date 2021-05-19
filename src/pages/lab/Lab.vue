<template>
    <div v-if="isIE">
        <VersionUpdate />
    </div>
    <div v-else id="app-lab" class="comp-lab">
        <Header />
        <div class="inner-wrap">
            <div class="lab-dot">
                <div class="lab-dot__bx">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div class="content">
                <TeaserFuture :isDot="true"></TeaserFuture>

                <TeaserEffort class="section-padding-top_me">
                    <template #title>
                        <span v-html="contents.effort.title"></span>
                    </template>

                    <template #description>
                        <span v-for="( item, index ) in contents.effort.description" v-html="item" :key="index"></span>
                    </template>
                </TeaserEffort>

                <TeaserContact id="minimap">
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

                <EventInfo class="section-margin_xs">
                    <template #point>
                        <span v-html="contents.space.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.space.title"></span>
                    </template>
                </EventInfo>

                <LabSpace v-for="( pItem, pIndex ) in contents.space.spaces" :key="pIndex" class="section-margin_xs">
                    <template #depth>
                        {{ pItem.depth }}
                    </template>

                    <template #list>
                        <ItemSpace v-for="( item, index ) in pItem.list" :key="index">
                            <template #img-map>
                                <img :src="item.img_map" alt="">
                            </template>

                            <template #img-space>
                                <img :src="item.img_space" alt="">
                            </template>
                        </ItemSpace>
                    </template>

                    <template #list-txt>
                        <ItemSpaceTxt v-for="( item, index ) in pItem.list" :key="index">
                            <template #title>
                                <span v-html="item.title"></span>
                            </template>
                            <template #description>
                                <span v-html="item.description"></span>
                            </template>
                        </ItemSpaceTxt>
                    </template>
                </LabSpace>

                <EventInfo :isHeader="true">
                    <template #header-title>
                        <span v-html="contents.event.section_title"></span>
                    </template>

                    <template #point>
                        <span v-html="contents.event.txt_point" id="event"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.event.title"></span>
                    </template>

                    <template #list>
                        <ItemEventInfo v-for="( pItem, pIndex ) in contents.event.list" :key="pIndex">
                            <template #shortcut v-if="pItem.shortcut">
                                <a :href="pItem.shortcut.link">
                                    <img :src="pItem.shortcut.img" alt="">
                                </a>
                            </template>

                            <template #img v-if="pItem.img">
                                <img class="img-pc" :src="pItem.img.pc" alt="">
                                <img class="img-mb" :src="pItem.img.m" alt="">
                            </template>
                        </ItemEventInfo>
                    </template>
                </EventInfo>

                <EventInfo :isHeader="true" class="section-margin_xs">
                    <template #header-title>
                        <span v-html="contents.activity1.section_title"></span>
                    </template>

                    <template #point>
                        <span v-html="contents.activity1.txt_point" id="concert"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.activity1.title"></span>
                    </template>

                    <template #list>
                        <ItemEventInfo v-for="( pItem, pIndex ) in contents.activity1.list" :key="pIndex">
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
                        <ItemConcert v-for="( pItem, pIndex ) in contents.activity1.concert.list" :key="pIndex">
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
                        <span v-html="contents.activity2.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.activity2.title"></span>
                    </template>

                    <template #list>
                        <ItemEventInfo v-for="( pItem, pIndex ) in contents.activity2.list" :key="pIndex">
                            <template #img v-if="pItem.img">
                                <img class="img-pc" :src="pItem.img.pc" alt="">
                                <img class="img-mb" :src="pItem.img.m" alt="">
                            </template>

                            <template #description v-if="pItem.description">
                                <span v-for="( item, index ) in pItem.description" :key="index" v-html="item"></span>
                            </template>

                            <template #gift>
                                <Gift>
                                    <template #list>
                                        <ItemGift v-for="( item, index ) in pItem.gift" :key="index">
                                            <template #img>
                                                <img :src="item.img" alt="">
                                            </template>

                                            <template #value>
                                                <span v-html="item.value"></span>
                                            </template>
                                            <template #brand>
                                                <span v-html="item.brand"></span>
                                            </template>
                                            <template #title>
                                                <span v-html="item.title"></span>
                                            </template>
                                        </ItemGift>
                                    </template>
                                </Gift>
                            </template>

                            <template #date v-if="pItem.date">
                                <div class="event-list__date">
                                    <dl v-for="( item, index ) in pItem.date" :key="index">
                                        <dt v-html="item.title"></dt>
                                        <dd v-html="item.day"></dd>
                                    </dl>
                                </div>
                            </template>

                            <template #important>
                                <span v-for="( item, index ) in pItem.important" :key="index" v-html="item"></span>
                            </template>

                            <template #reservation>
                                <a :href="pItem.tiktok.link" target="_blank">
                                    {{ pItem.tiktok.title }}
                                </a>
                            </template>

                        </ItemEventInfo>
                    </template>
                </EventInfo>

                <EventInfo id="hashtag">
                    <template #point>
                        <span v-html="contents.activity3.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.activity3.title"></span>
                    </template>

                    <template #list>
                        <ItemEventInfo v-for="( pItem, pIndex ) in contents.activity3.list" :key="pIndex">
                            <template #img v-if="pItem.img">
                                <img class="img-pc" :src="pItem.img.pc" alt="">
                                <img class="img-mb" :src="pItem.img.m" alt="">
                            </template>

                            <template #description v-if="pItem.description">
                                <span v-for="( item, index ) in pItem.description" :key="index" v-html="item"></span>
                            </template>

                            <template #gift>
                                <Gift>
                                    <template #list>
                                        <ItemGift v-for="( item, index ) in pItem.gift" :key="index">
                                            <template #img>
                                                <img :src="item.img" alt="">
                                            </template>

                                            <template #value>
                                                <span v-html="item.value"></span>
                                            </template>
                                            <template #brand>
                                                <span v-html="item.brand"></span>
                                            </template>
                                            <template #title>
                                                <span v-html="item.title"></span>
                                            </template>
                                        </ItemGift>
                                    </template>
                                </Gift>
                            </template>

                            <template #date v-if="pItem.date">
                                <div class="event-list__date">
                                    <dl v-for="( item, index ) in pItem.date" :key="index">
                                        <dt v-html="item.title"></dt>
                                        <dd v-html="item.day"></dd>
                                    </dl>
                                </div>
                            </template>
                        </ItemEventInfo>
                    </template>
                </EventInfo>

                <EventInfo id="app">
                    <template #point>
                        <span v-html="contents.activity4.txt_point"></span>
                    </template>
                    <template #title>
                        <span v-html="contents.activity4.title"></span>
                    </template>

                    <template #list>
                        <ItemEventInfo v-for="( pItem, pIndex ) in contents.activity4.list" :key="pIndex">
                            <template #img v-if="pItem.img">
                                <img class="img-pc" :src="pItem.img.pc" alt="">
                                <img class="img-mb" :src="pItem.img.m" alt="">
                            </template>

                            <template #description-point v-if="pItem.sub_title">
                                <span v-for="( item, index ) in pItem.sub_title" :key="index" v-html="item"></span>
                            </template>

                            <template #description v-if="pItem.description">
                                <span v-for="( item, index ) in pItem.description" :key="index" v-html="item"></span>
                            </template>
                        </ItemEventInfo>
                    </template>
                </EventInfo>

                <LabBenefit>
                    <template #point>
                        <span v-html="contents.benefit.txt_point"></span>
                    </template>

                    <template #title>
                        <span v-html="contents.benefit.title"></span>
                    </template>

                    <template #list>
                        <ItemBenefit v-for="(pItem, pIndex) in contents.benefit.list" :key="pIndex">
                            <template #number>
                                <span v-html="pItem.number"></span>
                            </template>

                            <template #title>
                                <h3 v-html="pItem.title"></h3>
                            </template>

                            <template #description>
                                <span v-html="pItem.description"></span>
                            </template>

                        </ItemBenefit>
                    </template>

                    <template #apply>
                        <a :href="contents.benefit.apply.link" target="_blank">
                            {{contents.benefit.apply.title}}
                        </a>
                    </template>

                    <template #important>
                        <span v-for="(item, index) in contents.benefit.important" :key="index" v-html="item"></span>
                    </template>
                </LabBenefit>

                <EventInfo id="IDS">
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

                            <template #important-list>
                                <dl v-for="( item, index ) in pItem.important_list" :key="index">
                                    <dt>
                                        <span v-html="item.title"></span>
                                    </dt>
                                    <dd>
                                        <span v-html="item.description"></span>
                                    </dd>
                                </dl>
                            </template>

                            <template #reservation>
                                <a :href="pItem.reservation.link" target="_blank">
                                    {{ pItem.reservation.title }}
                                </a>
                            </template>

                        </ItemEventInfo>
                    </template>
                </EventInfo>

                <TeaserPlay id="tvc"></TeaserPlay>

            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import VersionUpdate from "@/components/main/VersionUpdate";

import Header from "@/components/common/comp-header";
import Footer from "@/components/common/comp-footer";

import TeaserFuture from "@/components/teaser2/comp-teaser-future";

import TeaserEffort from "@/components/teaser2/comp-teaser-effort";
import TeaserContact from "@/components/teaser2/comp-teaser-contact";
import ItemMapLink from "@/components/teaser2/teasercomponents/item-map-link";

import LabInfo from "@/components/lab/comp-lab-info";

import TeaserConcert from "@/components/teaser2/comp-teaser-concert";
import ItemConcert from "@/components/teaser2/teasercomponents/item-concert";
import ItemConcertCource from "@/components/teaser2/teasercomponents/item-concert-cource";

import LabBenefit from "@/components/lab/comp-lab-benefit";
import ItemBenefit from "@/components/lab/labcomponents/item-benefit";

import Gift from "@/components/event/eventcomponents/item-info-gift-container";
import ItemGift from "@/components/event/eventcomponents/item-info-gift";

import EventInfo from "@/components/event/comp-event-info";
import ItemEventInfo from "@/components/event/eventcomponents/item-info";

import LabSpace from "@/components/lab/comp-lab-space";
import ItemSpace from "@/components/lab/labcomponents/item-space";
import ItemSpaceTxt from "@/components/lab/labcomponents/item-space-text";

import TeaserPlay from "@/components/teaser/comp-teaser-play";

import {isIE} from "mobile-device-detect";

import MixinImgLoad from "@/mixin/mixin-img-load";

export default {
    name: 'Lab',
    components: {
        VersionUpdate,
        Header,
        Footer,

        TeaserFuture,

        TeaserEffort,
        TeaserContact,
        ItemMapLink,

        Gift,
        ItemGift,

        TeaserConcert,
        ItemConcert,
        ItemConcertCource,

        LabBenefit,
        ItemBenefit,

        LabSpace,
        ItemSpace,
        ItemSpaceTxt,

        EventInfo,
        ItemEventInfo,

        TeaserPlay
    },

    mixins : [
        MixinImgLoad,
    ],

    data(){
        return{
            isIE : isIE,
        }
    },

    created() {
        this.contents = this.$t( "contents.future2" );
    },

    mounted() {
        this.showLoad();
    },

    methods : {

    }
}
</script>

<style scoped lang="scss">
    .comp-lab {
        width: 100%;
        .inner-wrap {
            position: relative;
            overflow: hidden;
            .lab-dot {
                width: 100%;
                position: absolute;
                z-index: 9;

                .lab-dot__bx{
                    ul{
                        position: relative;
                        top: 100vh;
                        li{
                            background-color: #009945;
                            border-radius: 100%;
                            position: absolute;

                            &:nth-child( 1 ){
                                left: pxtovw414( 385 ); top: pxtovw414( 55 ); width: pxtovw414( 44 ); height: pxtovw414( 44 )
                            }

                            &:nth-child( 2 ){
                                left: pxtovw414( -50 ); top: pxtovw414( 1900 ); width: pxtovw414( 79 ); height: pxtovw414( 79 );
                            }

                            &:nth-child( 3 ){
                                left: pxtovw414( 300 ); top: pxtovw414( 3780 ); width: pxtovw414( 80 ); height: pxtovw414( 80 );
                            }

                            &:nth-child( 4 ){
                                display: none;
                                left: pxtovw414( -10 ); top: pxtovw414( 4500 ); width: pxtovw414( 60 ); height: pxtovw414( 60 )
                            }

                            &:nth-child( 5 ){
                                left: pxtovw414( 315 ); top: pxtovw414( 6630 ); width: pxtovw414( 44 ); height: pxtovw414( 44 )
                            }
                        }
                    }
                }
            }

            .content {
                position: relative;
                z-index: 10;
            }
        }
    }

    .desktop, .table{
        .comp-lab{
            .inner-wrap{
                .lab-dot{
                    width: 100%;
                    .lab-dot__bx{
                        width: 1200px;
                        height: 1px;
                        margin: 0 auto;
                        ul{
                            margin-left: 170px;
                            li{
                                &:nth-child( 1 ){ left: 765px; top: 181px;  width: 53px;    height: 53px; }
                                &:nth-child( 2 ){
                                    display: none;
                                    left: -243px;
                                    top: 2170px;
                                    width: 105px;
                                    height: 106px;
                                }
                                &:nth-child( 3 ){
                                    left: 910px;
                                    top: 3823px;
                                    width: 150px;
                                    height: 150px;
                                }
                                &:nth-child( 4 ){
                                    left: 500px;
                                    top: 5150px;
                                    width: 50px;
                                    height: 50px;
                                }
                                &:nth-child( 5 ){ left: 666px; top: 9190px; width: 53px;    height: 53px; }
                            }
                        }
                    }
                }

                .content{

                }
            }
        }
    }
</style>
