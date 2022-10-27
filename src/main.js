import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.scss'

//yarn add bootstrap bootstrap-vue-3 @popperjs/core
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

app.use(createPinia())
app.use(BootstrapVue3)
app.use(router)

app.mount('#app')
