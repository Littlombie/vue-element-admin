import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './http/mock'
import api from './http/index'
import './plugins/element.js'
import echarts from 'echarts' 

import 'prismjs/themes/prism.css'
import './assets/css/markdown-segmentfault.css';
import './assets/css/style.less'


Vue.use(api)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
