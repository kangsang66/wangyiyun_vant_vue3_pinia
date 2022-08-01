import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 解决项目离线问题
import './registerServiceWorker'
// 引入路由
import router from './router'
// 引入移动端适配
import '@/mobile/flexible.min.js'
// 引入初始化样式
import '@/styles/reset.css'
// import '@/styles/normalize.css'
// 引入函数式引入vant方式
import getVant from  '@/plugins/index.js'
// 引入字体样式
import '../public/assets/font/font.css'
// 引入icon样式
import '../public/assets/icon/iconfont.js'
import '../public/assets/icon/iconfont.css'
import 'default-passive-events'


const app = createApp(App)
// 使用getVant函数
getVant(app)
// 注意vue3的使用方式
app.use(router)
app.use(createPinia())
app.mount('#app')
