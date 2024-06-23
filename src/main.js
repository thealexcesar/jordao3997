import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue'
import { createI18n } from 'vue-i18n'
import {MyScript} from "@/script";
const app = createApp(App);

const messages = {
    en: require('./locales/en.json'),
    es: require('./locales/es.yml'),
    pt: require('./locales/pt.json'),
    de: require('./locales/de.json')
}

const i18n = createI18n({
    locale: 'en',
    messages
})

library.add(fas, far);
app.component('font-awesome-icon', FontAwesomeIcon).use(i18n).mount('#app')

MyScript();