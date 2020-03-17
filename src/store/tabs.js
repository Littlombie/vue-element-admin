
import {session} from '../common/storage';
export default({
  state: {
    tags: session.get('router_tags') || []
  },
  getters: {
    ['GET_ROUTERTAGS']: state => {
      console.log(state.tags);
      return state.tags || []
    },
  },
  mutations: {
    ['SET_ROUTERTAGS'](state, tag){
      console.log(tag, state);
      let isRepeat = false;
      state.tags.forEach(item => {
        if (item.name == tag.name) {
          isRepeat = true;
          if (JSON.stringify(item.query) !== JSON.stringify(tag.query)) {
            item.query = tag.query
          }
        }
      });
      if (!isRepeat) {
        state.tags.push(tag);
      }
      session.set('router_tags', state.tags)
    },
  },
  actions: {
    ['SET_ROUTERTAGS']({commit}, tag) {
      commit('SET_ROUTERTAGS', tag)
    }
  }
})