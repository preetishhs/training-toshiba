export default {
  namespaced: true,
  state: {
    cartList: []
  },
  mutations: {
    REMOVE_CART_ITEM: jest.fn()
  },
  actions: {
    setCartList: jest.fn(),
    deleteCartItem: jest.fn(),
    resetCart: jest.fn(),
    update: jest.fn()
  }
}
