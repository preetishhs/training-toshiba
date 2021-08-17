import { createStore } from 'vuex'
import { fetchProducts } from '@/services/product'

export default createStore({
  state: {
    cartList: [],
    productList: [],
    user: {},
    isLoggedIn: false
  },
  getters: {
    filterdProducts(state) {
      return state.productList.splice(0, 10)
    }
  },
  mutations: {
    SET_CART_LIST(state, payload) {
      let found = false
      state.cartList.find((item) => {
        if (item.id === payload.id) {
          found = true
          item.quantity = item.quantity + 1
        }
      })
      if (!found) {
        state.cartList.push({ ...payload, quantity: 1 })
      }
    },
    REMOVE_CART_ITEM(state, payload) {
      let quantity = null
      state.cartList.find((item) => {
        if (item.id === payload.id) {
          item.quantity--
          quantity = item.quantity
        }
      })
      if (quantity <= 0) {
        state.cartList = state.cartList.filter((item) => {
          return item.id !== payload.id
        })
      }
    },
    SET_PRODUCT_LIST(state, payload) {
      state.productList = payload
    },
    SET_USER(state, payload) {
      state.user = payload
      state.isLoggedIn = true
    }
  },
  actions: {
    setCartList(context, payload) {
      context.commit('SET_CART_LIST', payload)
    },
    deleteCartItem(context, payload) {
      context.commit('REMOVE_CART_ITEM', payload)
    },
    getProductList({ commit }) {
      fetchProducts().then((res) => {
        commit('SET_PRODUCT_LIST', res)
      })
    },
    loginUser({ commit }, payload) {
      return new Promise((resolve, reject) => {
        if (payload.password === 'test') {
          commit('SET_USER', payload)
          return resolve(true)
        } else {
          return reject(false)
        }
      })
    }
  }
})
