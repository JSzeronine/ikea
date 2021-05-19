<template>
    <div v-if="isIE">
        <VersionUpdate />
    </div>
    <div v-else id="app">
        <Header/>

        <div class="content">
            <component :is="componentDetail"></component>
        </div>

        <Footer />
    </div>
</template>

<script>
import VersionUpdate from "@/components/main/VersionUpdate";
import Header from "@/components/common/comp-header";
import Footer from "@/components/common/comp-footer";
import {isIE} from "mobile-device-detect";

export default {
    name: "Detail.vue",
    data(){
        return{
            isIE : isIE
        }
    },

    props : {
        pageName : String
    },

    computed : {
        contentType(){
            let type = this.pageName;
            return type;
        },

        componentDetail(){
            return () => import( `@/components/detail/${ this.contentType }.vue` );
        }
    },

    components : {
        VersionUpdate,
        Header,
        Footer,
    },

    created() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    },

    mounted() {

    },

    methods : {

    }
}
</script>

<style scoped lang="scss">
.desktop, .tablet{
    .content{
        width: 100%;
        min-width: 1280px;
    }
}

</style>