<template>
    <div v-if="isIE">
        <VersionUpdate />
    </div>
    <div v-else id="app">
        <div class="content">
            <component :is="componentComplete"></component>
        </div>
    </div>
</template>

<script>
import {isIE} from "mobile-device-detect";
import VersionUpdate from "@/components/main/VersionUpdate";

export default {
    name: "Result.vue",
    data(){
        return{
            isIE : isIE,
        }
    },
    props: {
        pageName: String
    },

    components : {
        VersionUpdate
    },

    computed: {
        contentType() {
            let type = this.pageName;
            return type;
        },

        componentComplete() {
            return () =>
                import( `@/components/result/${this.contentType}.vue` );
        },
    },

    created() {
    },

    mounted() {

    }
}
</script>

<style scoped lang="scss">
</style>