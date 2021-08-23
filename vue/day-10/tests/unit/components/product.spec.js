import Product from '@/components/Product'
import { productItem } from '../apiMock/productMock'
import vuexCartMock from '../vuexMock/vuexCartMock'
import { generateWrapper } from '../generate'

describe('Product card tests', () => {
  test('check if product time is rendered correctly in uppercase', () => {
    const wrapper = generateWrapper('shallowMount', Product, {
      props: {
        productItem: productItem
      }
    })
    expect(wrapper.find('.product-title').text()).toBe(
      'FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS'
    )
  })

  test('check if clicking on addToCart will dispatch an action', async () => {
    const wrapper = generateWrapper('shallowMount', Product, {
      props: {
        productItem: productItem
      }
    })
    wrapper.find('.add-to-cart').trigger('click')
    await wrapper.vm.$nextTick()
    expect(vuexCartMock.actions.setCartList).toHaveBeenCalled()
  })

  test('check if clicking on delete will emit deleteItem', async () => {
    const wrapper = generateWrapper('shallowMount', Product, {
      props: {
        productItem: productItem
      }
    })
    wrapper.find('.delete-item').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().deleteItem).toBeTruthy()
  })

  test('check if rendered product card matches snapshot', async () => {
    const wrapper = generateWrapper('shallowMount', Product, {
      props: {
        productItem: productItem
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
