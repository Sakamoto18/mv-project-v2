import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {setDomFontSize} from './utils/dom'

setDomFontSize()
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
