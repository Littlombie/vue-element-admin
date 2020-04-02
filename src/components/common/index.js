/*
 * @Author: Littlombie
 * @Date: 2020-04-02 17:27:42
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-04-02 17:32:08
 */

 import panel from './panel'

 
const commonComponents = {
  install(Vue) {
    Vue.component('v-panel', panel)
  }
}

export default commonComponents;