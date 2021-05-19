import globalPreset from "@/assets/js/GlobalPreset";

import Vue from 'vue'
import App from './Detail.vue'
import VueI18n from 'vue-i18n'

Vue.use( VueI18n );
Vue.config.productionTip = false

window.init = function ( $name ){
    const Language = require( `./${ $name }.json` );
    const CommonLanguage = require( "@/assets/data/common.json" );

    const messages = {
        ko : Object.assign( Language.ko, CommonLanguage.ko ),
        en : Object.assign( Language.en, CommonLanguage.en )
    }

    // 언어 구분
    let lang = document.querySelector( "html" ).lang;
    document.querySelector( "html" ).classList.add( lang );

    const i18n = new VueI18n({
        locale: lang, // set locale
        messages, // set locale messages
    });

    new Vue({
        el : "#app",
        i18n,
        components : {
            App,
        },

        template : '<App :pageName="pageName"/>',
        // render: h => h(App),

        data(){
            return{
                pageName : "",
            }
        },

        async created() {
            this.pageName = $name;
        },

    });
}