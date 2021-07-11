import { createApp } from 'vue'

// import element-plus
import ElementPlus from 'element-plus'
import '@/style/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
