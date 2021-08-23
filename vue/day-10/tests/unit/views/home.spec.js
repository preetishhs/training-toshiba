import Home from '@/views/Home'
import Product from '@/components/Product'
import { shallowMount, config } from '@vue/test-utils'
import vuexProductMock from '../vuexMock/vuexProductMock'
import vuexUserMock from '../vuexMock/vuexUserMock'
import { createStore } from 'vuex'
import { productList } from '../apiMock/productMock'
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock
} from 'vue-router-mock'

const router = createRouterMock()
injectRouterMock(router)
config.plugins.VueWrapper.install(VueRouterMock)
let store = {},
  mocks = {}
beforeEach(() => {
  store = createStore({
    modules: {
      product: vuexProductMock,
      user: vuexUserMock
    }
  })
  mocks = {
    $tc: () => {},
    t: () => {},
    useI18n: () => {
      return {
        t: () => {}
      }
    }
  }
})

describe('Home page tests', () => {
  test('check if all product cards are rendered', () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store],
        mocks: mocks
      }
    })
    const productWrapperList = wrapper.findAllComponents(Product)
    expect(productWrapperList.length).toBe(4)
  })

  test('check if all product cards are rendered', async () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store],
        mocks: mocks
      }
    })
    const productWrapper = wrapper.findComponent(Product)
    productWrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(productWrapper.router.push).toHaveBeenCalledWith({
      name: 'product',
      params: { productId: productList[0].id }
    })
  })
})
