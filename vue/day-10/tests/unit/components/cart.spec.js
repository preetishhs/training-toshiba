import Cart from '@/views/Cart'
import vuexCartMock from '../vuexMock/vuexCartMock'
import { cartListMock } from '../apiMock/cartMock'
import { cloneDeep } from 'lodash'
import { generateWrapper, generateStore } from '../generate'

describe('cart tests', () => {
  test('check if cart items are rendered', () => {
    let tempVuexCartMock = cloneDeep(vuexCartMock)
    tempVuexCartMock.state.cartList = cartListMock
    const store = generateStore({ cart: tempVuexCartMock })
    const wrapper = generateWrapper('shallowMount', Cart, {
      store: store
    })
    expect(wrapper.find('.cart-item')).toBeTruthy()
  })

  test('check if empty cart message is seen on no products', () => {
    const wrapper = generateWrapper('shallowMount', Cart)
    expect(wrapper.text()).toContain('No Items in Cart')
  })
})
