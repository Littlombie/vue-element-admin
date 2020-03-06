import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './http/mock'
import api from './http/index'
import './plugins/element.js'
import echarts from 'echarts' 
import i18n from './i18n/i18n';
import { storage, session } from './common/storage'

import 'prismjs/themes/prism.css'
import './assets/css/markdown-segmentfault.css';
import './assets/css/style.less'


Vue.use(api)

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;
Vue.prototype.$storage = storage;
Vue.prototype.$session = session;


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
