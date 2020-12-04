
import {storage} from '../common/storage';
export default ({
  state: {
    themeMode:  storage.get('themeMode') || 'themeBlue'
  },
  getters: {
    ['THEME_MODE']: (state) => {
      // document.
      return state.themeMode || 'themeBlue'
    }
  },
  mutations: {
    ['CHANGE_THEME'] (state, val) {
      state.themeMode = val;
      storage.set('themeMode', state.themeMode);
    } 
  },
  actions: {
    ['CHANGE_THEME'] ({commit}, val){
      commit('CHANGE_THEME', val)
    }
  }
})