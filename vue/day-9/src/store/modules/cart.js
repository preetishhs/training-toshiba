export default {
  namespaced: true,
  state: {
    cartList: [],
    timestamp: ''
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
    RESET_CART(state) {
      state.cartList = []
    }
  },
  actions: {
    setCartList(context, payload) {
      context.commit('SET_CART_LIST', payload)
    },
    deleteCartItem(context, payload) {
      context.commit('REMOVE_CART_ITEM', payload)
    },
    resetCart({ commit }) {
      commit('RESET_CART')
    },
    update() {
      console.log('update from product')
    }
  }
}
