<template>
    <section class="comp-footer">
        <div class="inner-wrap">
            <div class="contents">
                <div class="comp-footer__share-language">
                    <div class="comp-footer__share">
                        <ul>
                            <li v-for="item in contents.share">
                                <a :href="item.link">
                                    <img :src="convertLink( item.img_icon )" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="comp-footer__language">
                        <select name="" id="" @change="showChange" v-model="link">
                            <option :value="item.link" v-for="( item, index ) in contents.languages" :key="index">
                                {{ item.country }}
                            </option>
                        </select>

                        <img class="comp-footer__language-icon__arrow" :src="convertLink( `./img/common/icon-select-arrow.png` )" alt="">
                    </div>
                </div>

                <div class="comp-footer__info">
                    <div class="comp-footer__info-system">
                        {{ contents.address.system }}
                    </div>

                    <div class="comp-footer__info-responsible">
                        <a :href="contents.address.link_responsible">{{ contents.address.responsible }}</a>
                    </div>
                </div>

                <div class="comp-footer__address">
                    <dl>
                        <dt>{{ contents.address.company }}</dt>

                        <dd v-for="item in contents.address.infos" v-html="item">
                        </dd>

                        <dd>
                            <a :href="`tel:${ contents.address.tel }`">
                                TEL : {{ contents.address.tel }}
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "comp-footer",

    data(){
        return{
            contents : null,
            link : "",
        }
    },

    props : {
        isMain : {
            type : Boolean,
            default : false,
        }
    },

    created() {
        this.contents = this.$t( "common.footer" );
        this.link = this.contents.languages[ 0 ].link;
    },

    mounted() {

    },

    methods : {
        convertLink(link){
            let convert = link;
            if(!this.isMain){
                convert = "."+link;
            }
            return convert;
        },

        showChange( $e ){
            // let url_list = window.location.pathname.split( "/" );
            // let lastURL = url_list[ url_list.length - 2 ]; // 나중에 수정 [ zeronine ]
            //
            // let url = this.link + lastURL + "/";

            window.location = this.link;
        }
    }
}
</script>

<style scoped lang="scss">

.comp-footer{
    position: relative;
    z-index: $z-index-footer;
    .inner-wrap{

        margin: 0 auto;
        width: 100%;
        min-width: $stage-min-width;
        .contents{
            background-color: #fff;
            padding: 60px 70px 90px;
            box-sizing: border-box;

            .comp-footer__share-language{
                display: flex;
                justify-content: space-between;
                margin-bottom:30px;
                padding-bottom: 30px;
                border-bottom: 1px solid #DCDCDC;
                .comp-footer__share{
                    ul{
                        display: flex;
                        justify-content: flex-start;
                        li{
                            margin-right: 16px;

                            &:last-child{
                                margin-right: 0px;
                            }

                            a{
                                display: inline-block;
                                width: 40px;
                                img{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }

                .comp-footer__language{
                    border-radius: 50px;
                    padding: 9px 22px;
                    border: 1px solid #D6D6D6;
                    display: inline-block;
                    display: flex;
                    align-items: center;
                    select{
                        -webkit-appearance:none;
                        -moz-appearance:none;
                        appearance:none;
                        border-radius: 0;
                        border: none;
                        text-align: left;
                        font-family: $font-family-bold;
                        //margin-right: 21px;
                        padding-right: 21px;
                        font-size: $font-size-2xs;
                        line-height: 19px;
                        background-color: transparent;
                    }

                    .comp-footer__language-icon__arrow{
                        width: 13px;
                    }
                }
            }

            .comp-footer__info{
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;

                .comp-footer__info-system{
                    font-size: $font-size-2xs;
                    line-height: 19px;
                }

                .comp-footer__info-responsible{
                    font-size: $font-size-2xs;
                    line-height: 19px;
                }
            }

            .comp-footer__address{
                dl{
                    dt{
                        font-size: $font-size-2xs;
                        line-height: 23px;
                        margin-bottom: 10px;
                        font-family: $font-family-bold;
                    }

                    dd{
                        font-size: $font-size-2xs;
                        line-height: 22px;
                    }
                }
            }
        }
    }
}

.mobile{
    .comp-footer{
        .inner-wrap{
            min-width: 100%;
            .contents{
                padding: pxtovw414( 40 ) pxtovw414( 30 ) pxtovw414( 174 );
                .comp-footer__share-language{
                    flex-wrap: wrap;
                    margin-bottom: pxtovw414( 16 );
                    border-bottom: none;
                    padding-bottom: 0;
                    .comp-footer__share{
                        width: 100%;
                        margin-bottom: pxtovw414( 30 );
                        ul{
                            li{
                                margin-right: pxtovw414( 16 );
                                &:last-child{
                                    margin-right: 0px;
                                }

                                a{
                                    width: pxtovw414( 40 );
                                    img{
                                    }
                                }
                            }
                        }
                    }

                    .comp-footer__language{
                    }
                }

                .comp-footer__info{
                    flex-wrap: wrap;
                    margin-bottom: pxtovw414( 30 );
                    .comp-footer__info-system{
                        width: 100%;
                        border-bottom: 1px solid #DCDCDC;
                        padding-bottom: pxtovw414( 30 );
                        margin-bottom: pxtovw414( 30 );
                        font-size: pxtovw414( 14 );
                    }

                    .comp-footer__info-responsible{
                        font-size: pxtovw414( 14 );
                        width: 100%;
                    }
                }

                .comp-footer__address{
                    dl{
                        dt{
                            font-size: pxtovw414( 14 );
                            line-height: pxtovw414( 23 );
                            margin-bottom: pxtovw414( 11 );
                        }

                        dd{
                            font-size: pxtovw414( 14 );
                            line-height: pxtovw414( 22 );
                        }
                    }
                }
            }
        }
    }
}

</style>