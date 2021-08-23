import ProductDetail from '@/views/ProductDetail'
import { generateWrapper } from '../generate'
import Features from '@/components/Features'
import Specs from '@/components/Specs'
import Review from '@/components/Review'
import { config, flushPromises } from '@vue/test-utils'

import MockAdapter from 'axios-mock-adapter'
import { productItem } from '../apiMock/productMock'
import { api } from '@/services/axiosInstance'
const axiosMock = new MockAdapter(api)
axiosMock.onGet('/products/1').reply(200, productItem)

import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
  getRouter
} from 'vue-router-mock'

const router = createRouterMock()
injectRouterMock(router)
config.plugins.VueWrapper.install(VueRouterMock)

test('check dynamic components', async () => {
  getRouter().setParams({ productId: 1 })
  const wrapper = generateWrapper('mount', ProductDetail)
  await wrapper.vm.$nextTick()
  await flushPromises()
  expect(wrapper.findComponent(Features)).toBeTruthy()
  wrapper.find('.specs-tab').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.findComponent(Specs)).toBeTruthy()
  wrapper.find('.review-tab').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.findComponent(Review)).toBeTruthy()
})
