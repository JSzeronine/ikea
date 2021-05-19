import globalPreset from "@/assets/js/GlobalPreset";

//import App from './Teaser.vue'; // 티저 1차
import App from './Teaser2.vue'; // 티저 2차

import Language from "./language.json";

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import CommonLanguage from "@/assets/data/common.json";

const messages = {
    ko : Object.assign( Language.ko, CommonLanguage.ko ),
    en : Object.assign( Language.en, CommonLanguage.en )
}

// 국가
// let locale = navigator.language || navigator.userLanguage
// locale = locale.substring(0, 2)

Vue.use( VueI18n );

// 언어 구분
let lang = document.querySelector( "html" ).lang;
document.querySelector( "html" ).classList.add( lang );

const i18n = new VueI18n({
    locale: lang, // set locale
    messages, // set locale messages
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    i18n,
}).$mount('#app');
