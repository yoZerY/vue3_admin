import { createApp } from 'vue'
import App from './App.vue'

// 样式初始化
import 'normalize.css/normalize.css'

// 全局样式
import './styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons'

import router from './router'
import store from './store'

const app = createApp(App)
installIcons(app)
app.use(store)
app.use(router)
app.mount('#app')
