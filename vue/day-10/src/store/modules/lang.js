export default {
  namespaced: true,
  state: {
    selectedLocale: ''
  },
  mutations: {
    SET_LOCALE(state, payload) {
      state.selectedLocale = payload
    }
  },
  actions: {
    setLocale({ commit }, payload) {
      commit('SET_LOCALE', payload)
    }
  }
}
