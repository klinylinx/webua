import {
	createApp
} from 'vue'
import 'element-plus/dist/index.css' //引入element-plus 样式
import './style/reset.less'
import App from './App.vue'
import router from '@/router'
import compts from '@/components'

createApp(App).use(router).use(compts).mount('#app')