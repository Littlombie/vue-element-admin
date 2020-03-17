/*
 * @Author: Littlombie
 * @Date: 2020-03-17 11:06:32
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-03-17 11:32:57
 */
import {session} from '../common/storage';
export default({
  state: {
    tags: session.get('router_tags')
  },
  getters: {
    ['GET_ROUTERTAGS']: state => {
      return state.tags || []
    },
  },
  mutations: {
    ['SET_ROUTERTAGS'](state, tag){
      console.log(tag, state.tags);
      // state.tags.push(tag)
      // session.set('router_tags', state.tags)
    },
  },
  actions: {
    ['SET_ROUTERTAGS']({commit}, tag) {
      commit('SET_ROUTERTAGS', tag)
    }
  }
})