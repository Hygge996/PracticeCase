import { createApp } from 'vue'
import App from './App.vue'

// 导入 bootstrap 样式文件
import './assets/css/bootstrap.css'
import './index.css'

// 导入 axios 包
import axios from 'axios'

const app = createApp(App)

// 挂载 http
axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
