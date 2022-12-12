import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'

createApp(App).use(store).use(VueAxios, axios).mount('#app')
