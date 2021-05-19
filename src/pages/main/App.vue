<template>
    <div v-if="isIE">
        <VersionUpdate :isMain="true" />
    </div>
    <div v-else id="app">
        <Header :isMain="true" :isLab="true" />

        <div class="content">
            <Intro :isLoadComp = "isLoadComp"></Intro>
            <Material :isLoadComp = "isLoadComp"></Material>

            <Manifesto v-if="isLoadComp"></Manifesto>
            <Sustainability v-if="isLoadComp"></Sustainability>
            <MainCf v-if="isLoadComp"></MainCf>
            <MainLab v-if="isLoadComp"></MainLab>
            <BetterLivingApp v-if="isLoadComp"></BetterLivingApp>
            <PersonalTest v-if="isLoadComp"></PersonalTest>
        </div>

        <Footer :isMain="true" />
    </div>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "@/components/common/EventBus"

    import VersionUpdate from "@/components/main/VersionUpdate";

    import Header from "@/components/common/comp-header";
    import Footer from "@/components/common/comp-footer";

    import Intro from "@/components/main/Intro";
    import Material from "@/components/main/Material";
    import Manifesto from "@/components/main/Manifesto";
    import Sustainability from "@/components/main/Sustainability";
    import MainCf from "@/components/main/MainCf";
    import MainLab from "@/components/main/MainLab";
    import BetterLivingApp from "@/components/main/BetterLivingApp";
    import PersonalTest from "@/components/main/PersonalTest";

    import gsap from "gsap"
    import scrollTrigger from "gsap/ScrollTrigger"

    export default {
        name: 'App',

        data(){
            return{
                language: null,
                isMobile : isMobile,
                isChrome : isChrome,
                isIE : isIE,
                isLoadComp: false
            }
        },

        components: {
            VersionUpdate,
            Header, Footer,
            Intro,
            Material, Manifesto, Sustainability, MainCf, MainLab, BetterLivingApp, PersonalTest
        },

        created() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);

            this.language = this.$t( "contents" );
        },

        mounted() {
            document.addEventListener( "scroll", this.scrollListener );
            EventBus.$on( EventBus.LOAD_COMPLETE_EVENT, this.firstSectionImagesLoaderComplete );
        },

        methods: {

            firstSectionImagesLoaderComplete(){
                this.isLoadComp = true;
            },

            scrollListener(e){
                var doc = document.documentElement;
                var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                EventBus.$emit( EventBus.SCROLL_EVENT, top);

                e.preventDefault();
                return false;
            }

            /*imagesLoader(){

                var _this = this;
                var imgs = document.images,
                    len = imgs.length,
                    counter = 0;

                if(len){
                    [].forEach.call( imgs, function( img ) {
                        if(img.complete)
                            incrementCounter();
                        else
                            img.addEventListener( 'load', incrementCounter, false );
                    } );

                    function incrementCounter() {
                        counter++;
                        if ( counter === len ) {
                            _this.init()
                        }
                    }
                } else {
                    this.init();
                }
            },*/
        }
    }
</script>

<style scoped lang="scss">

    #app{
        .content{

        }
    }
</style>
