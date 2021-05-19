<template>

</template>

<script>
import { EventBus } from "@/components/common/EventBus";

export default {
    name: "mixin-img-load",
    data(){
        return{
            loadCount : 0,
            loadMax : 0,
        }
    },

    methods : {
        showLoad(){
            let imgs = this.$el.querySelectorAll( "img" );

            this.loadMax = imgs.length;

            [].forEach.call( imgs, ( $item, $index ) => {
                if( $item.complete ){
                    this.imgComplete();
                }else{
                    $item.addEventListener( "load", ( $e ) => {
                        this.imgComplete();
                    });
                }
            });
        },

        imgComplete(){
            this.loadCount++;

            if( this.loadCount == this.loadMax ){
                EventBus.$emit( EventBus.LOAD_COMPLETE_EVENT );
            }
        }
    }
}
</script>

<style scoped>

</style>