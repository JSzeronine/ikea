<template>
    <div v-if="isIE">
        <VersionUpdate />
    </div>
    <div v-else id="app">
        <div class="content">
            <CompTestKv />
        </div>
    </div>
</template>

<script>
import {isIE} from "mobile-device-detect";

import CompTestKv from "@/components/sustainabilitytest/comp-sustainabilitytest-kv";
import VersionUpdate from "@/components/main/VersionUpdate";

export default {
    name: 'Test',
    data(){
        return{
            isIE : isIE,
        }
    },

    components: {
        CompTestKv,
        VersionUpdate
    },

    created() {
    }
}
</script>

<style scoped lang="scss">
</style>
