import { fetchProducts } from '@/services/product'

export default {
  namespaced: true,
  state: {
    productList: [],
    timestamp: ''
  },
  getters: {
    filterdProducts(state) {
      return state.productList.splice(0, 10)
    }
  },
  mutations: {
    SET_PRODUCT_LIST(state, payload) {
      state.productList = payload
      state.timestamp = new Date()
    }
  },
  actions: {
    getProductList({ commit }) {
      fetchProducts().then((res) => {
        commit('SET_PRODUCT_LIST', res)
      })
    },
    update() {
      console.log('update from product')
    }
  }
}
