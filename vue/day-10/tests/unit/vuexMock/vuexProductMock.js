import { productList } from '../apiMock/productMock'
export default {
  namespaced: true,
  state: {
    timestamp: ''
  },
  getters: {
    filterdProducts: jest.fn(() => productList)
  },
  actions: {
    getProductList: jest.fn(),
    update: jest.fn()
  }
}
