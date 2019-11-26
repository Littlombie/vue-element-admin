export default ({
  state: {
    changePassDialog: false,
    showDetails: false,
    alterdetail: []
  },
  mutations: {
    changePassDialogs (state, vm) {
      state.changePassDialog = vm
    },
    // detailMutains (state, vm) {
    //   state.showDetails = vm;
    // },
    changedetails (state, vm) {
      state.alterdetail =  vm
    }
  },
  actions: {
    changeChangePass (content, bl) {
      content.commit('changePassDialogs', bl)
    },
    // detailsActions (content, bl) {
    //   content.commit('detailMutains', bl);
    // },
    details (content, vm) {
      content.commit('changedetails', vm)
    }
  }
}) 