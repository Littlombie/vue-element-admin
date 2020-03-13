import {session} from '../common/storage'

export  default ({
  state: {
    userInfo: session.get('user_info')
  },
  getters: {
    // 获取用户信息
    ['GET_USER_INFO']: state => {
      return state.userInfo || {}
    },
    // 判断是否登录
    ['GET_IS_LOGIN']: state => !!state.userInfo && JSON.stringify(state.userInfo) !== '{}'
  },
  mutations: {
    ['SET_USER_INFO'] (state, userInfo) {
      state.userInfo = userInfo
      if (!userInfo) {
        session.remove('user_info');
      } else {
        session.set('user_info', userInfo);
      }
    }
  },
  actions: {
    ['SET_USER_INFO'] ({commit}, userInfo) {
      commit('SET_USER_INFO', userInfo)
    }
  }
})