import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import menu from '../dist/index.esm.js'
import '../dist/index.css'
import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)
app.use(menu)
app.mount('#app')
