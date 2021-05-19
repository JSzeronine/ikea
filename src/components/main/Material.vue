<template>
    <div class="material-wrap">
        <Plastic v-if="firstType"></Plastic>
        <Wool v-if="firstType"></Wool>
        <Bamboo v-if="firstType"></Bamboo>

        <Wood v-if="!firstType"></Wood>
        <Cotton v-if="!firstType"></Cotton>
        <Food v-if="!firstType"></Food>
    </div>
</template>

<script>
    import Plastic from "@/components/main/material/Material-Plastic";
    import Wool from "@/components/main/material/Material-Wool";
    import Bamboo from "@/components/main/material/Material-Bamboo";

    import Wood from "@/components/main/material/Material-Wood";
    import Cotton from "@/components/main/material/Material-Cotton";
    import Food from "@/components/main/material/Material-Food";

    export default {
        name: "Material",

        data(){
          return {
              firstType:window.isFirstMeterial
          }
        },

        components: {
            Plastic,
            Wool,
            Bamboo,
            Wood,
            Cotton,
            Food

        },

        props: ["isLoadComp"],

        created() {

        }


    }
</script>

<style scoped lang="scss">

    .material-wrap {
        position: relative;
        z-index: 1;
    }

    .desktop, .tablet {

    }


</style>