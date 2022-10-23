import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import i18n from './i18n'
import FontAwesomeIcon from './font-awasome'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)
app.use(VueAxios, axios)
app.use(VueToast)
app.use(router)
app.use(store)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')