export default {
  namespaced: true,
  state: {
    user: {},
    isLoggedIn: false
  },
  getters: {},
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
      state.isLoggedIn = true
    },
    RESET_USER(state) {
      state.user = {}
      state.isLoggedIn = false
    }
  },
  actions: {
    loginUser({ commit }, payload) {
      return new Promise((resolve, reject) => {
        if (payload.password === 'test') {
          commit('SET_USER', payload)
          return resolve(true)
        } else {
          return reject(false)
        }
      })
    },
    logoutUser({ commit, dispatch, rootState, rootGetters, state, getters }) {
      console.log(rootState, rootGetters, state, getters)
      return new Promise((resolve) => {
        commit('RESET_USER')
        dispatch('cart/resetCart', null, { root: true })
        resolve(true)
      })
    }
  }
}
