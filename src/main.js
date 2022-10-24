import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import './assets/app.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(bootstrap)
app.use(pinia)
app.mount('#app')
