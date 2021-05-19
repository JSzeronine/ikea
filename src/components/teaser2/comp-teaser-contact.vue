<template>
    <section class="contact-wrap">
        <div class="inner-wrap">
            <div class="content">
                <div class="contact-map">
                    <slot name="map-img"></slot>
                </div>

                <div class="contact-txt">
                    <div class="lab-tl">
                        <slot name="map-title"></slot>
                    </div>
                    <div class="lab-contact__content">
                        <div class="contact-info">
                            <table>
                                <colgroup>
                                    <col width="23%">
                                    <col width="33%">
                                    <col width="45%">
                                </colgroup>

                                <tr>
                                    <th>
                                        <slot name="address-title"></slot>
                                    </th>
                                    <td colspan="2" class="pt0">
                                        <slot name="address-data"></slot>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <slot name="operation-title"></slot>
                                    </th>
                                    <td>
                                        <slot name="operation-lab-title"></slot>
                                    </td>
                                    <td class="align-right">
                                        <slot name="operation-lab-time"></slot>
                                    </td>
                                </tr>

                                <tr>
                                    <th></th>
                                    <td>
                                        <div>
                                            <slot name="operation-food-title"></slot>
                                        </div>
                                    </td>
                                    <td class="align-right">
                                        <div>
                                            <slot name="operation-food-time1"></slot>
                                        </div>
                                        <div>
                                            <slot name="operation-food-time2"></slot>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <div class="important-txt">
                                <slot name="important"></slot>
                            </div>
                        </div>

                        <ul>
                            <slot name="map-link"></slot>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap, Linear, Cubic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventBus } from "@/components/common/EventBus";

export default {
    name: "comp-teaser-contact",
    mounted() {
        EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.imgLoadComplete );
    },

    methods : {
        imgLoadComplete(){
            gsap.registerPlugin( ScrollTrigger );

            let Tl = gsap.timeline({});

            let map = this.$el.querySelector( ".contact-map" );
            Tl.fromTo( map.querySelectorAll( "img" ), {
                y:100,
            }, {
                y:0,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    trigger : map,
                    start : "top bottom",
                    end : "center center",
                    scrub : 0.5,
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
.contact-wrap {
    margin: pxtovw414(160) 0;
    position: relative;

    .inner-wrap {
        width: 100%;

        .content {
            .contact-map {
                margin-bottom: pxtovw414(50);

                .img-mb {
                    width: 100%;
                }
            }

            .contact-txt {
                padding: 0 pxtovw414(40);
                box-sizing: border-box;
                .lab-tl {
                    margin-bottom: pxtovw414(30);

                    font-size: pxtovw414(28);
                    line-height: pxtovw414(38);
                    font-family: $font-family-bold;
                }

                .lab-contact__content {
                    .contact-info {
                        table {
                            width: 100%;
                            margin-bottom: pxtovw414(30);

                            tr {
                                border-bottom: 1px solid #DFDFDF;

                                &:last-child {
                                    border-bottom: none;
                                }

                                th {
                                    padding: pxtovw414(21) 0;
                                    font-size: pxtovw414(16);
                                    line-height: pxtovw414(24);
                                    font-family: $font-family-bold;
                                    text-align: left;
                                }

                                td {
                                    padding: pxtovw414(14) 0;
                                    font-size: pxtovw414(16);
                                    line-height: pxtovw414(28);
                                }

                                .align-left {
                                    text-align: left;
                                }

                                .align-right {
                                    text-align: right
                                }
                            }
                        }

                        .important-txt {
                            margin-bottom: pxtovw414(80);
                            font-size: pxtovw414(14);
                            line-height: pxtovw414(24);
                            font-family: $font-family-regular;
                        }
                    }

                    ul {
                    }
                }
            }
        }
    }
}

.desktop, .tablet {
    .contact-wrap {
        margin: 220px 0;

        .inner-wrap {
            width: 100%;
            min-width: $stage-min-width;
            margin: 0 auto;

            .content {
                width: $stage-contents-width;
                box-sizing: border-box;
                margin: 0 auto;
                padding: 0 0 0 170px;

                .contact-map {
                    margin: 0 auto;
                    margin-bottom: 80px;

                    .img-pc {
                        width: 100%;
                    }
                }


                .contact-txt {
                    padding: 0;
                    .lab-tl {
                        margin-bottom: 40px;

                        font-size: $font-size-me;
                        line-height: 38px;
                    }

                    .lab-contact__content {
                        display: flex;
                        justify-content: space-between;
                        width: 845px;

                        .contact-info {
                            table {
                                width: 395px;
                                margin-bottom: 20px;

                                tr {
                                    th {
                                        font-size: 18px;
                                        line-height: 29px;
                                        padding: 21px 0;
                                    }

                                    td {
                                        font-size: 18px;
                                        line-height: 29px;
                                        padding: 21px 0;

                                        &.pt0 {
                                            padding-top: 0;
                                        }
                                    }

                                    .align-left {
                                    }

                                    .align-right {
                                        &.lab-contact__content-week {
                                            padding-right: 21px;
                                            box-sizing: border-box;
                                        }
                                    }
                                }
                            }

                            .important-txt {
                                margin-bottom: 0;
                                font-size: $font-size-2xs;
                                line-height: 24px;
                            }
                        }

                        ul {
                            width: 325px;
                        }
                    }
                }
            }
        }
    }
}


</style>