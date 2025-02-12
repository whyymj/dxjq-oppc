import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import emElementUI from 'em-element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'em-element-ui/lib/theme/index.css'
import '@/assets/styles/index.scss' // global css
import * as filters from '@/utils/filters' // 过滤器
import { setSessionStorage, removeSessionStorage, getSessionStorage, clearSessionStorage } from '@/utils/storage'
import VueBMap from 'vue-bmap-gl'

Vue.use(VueBMap)
VueBMap.initBMapApiLoader({
  ak: 'dfhycORtYDMz78dNLo9oNiDO1ufI2TZS',
  v: '1.0'
})

Vue.use(ElementUI)
Vue.use(emElementUI)
Vue.config.productionTip = false

// 注册全局函数
Vue.prototype.$setSessionStorage = setSessionStorage
Vue.prototype.$getSessionStorage = getSessionStorage
Vue.prototype.$clearSessionStorage = clearSessionStorage
Vue.prototype.$removeSessionStorage = removeSessionStorage

// 加载全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
