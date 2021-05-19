import globalPreset from "@/assets/js/GlobalPreset";
import Vue from 'vue'
import App from './Result.vue'
import VueI18n from 'vue-i18n'

import Language from "@/pages/teaser/language.json";
import CommonLanguage from "@/assets/data/common.json";

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

    // b700551ffda4d55888f5a19536886d7a ( IKEA 꺼 )
    // 남경주임님꺼 83b8a5c7f20bca1dbd8fcd9fd6355bb9
    window.Kakao.init("b700551ffda4d55888f5a19536886d7a"); // 추후 key값 변경 필요

    new Vue({
        el : "#app",
        i18n,
        components : {
            App,
        },

        componentComplete() {
            return () => {
                console.log( $name );
            }
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