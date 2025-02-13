import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const app = createApp(App)
const pinia = createPinia()

app.component('v-select', vSelect)
app.use(pinia)
app.mount('#app')
