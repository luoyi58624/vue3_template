import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:uno.css'

import './styles/index.scss'

createApp(App).use(createPinia()).mount('#app')
