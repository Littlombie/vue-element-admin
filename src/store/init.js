export default ({
  state: {
    isNavMenuOpen: false,
    showInfoDia: false
  },
  mutations: {
    toggleMenuOpen(state, payload) {
      state.isNavMenuOpen = !state.isNavMenuOpen
    },
    showInfoDia (state, payload) {
      state.showInfoDia = payload
    }
  },
  actions: {
    changeInfoDia ({commit}, vm) {
      commit('showInfoDia', vm)
    }
  }
})