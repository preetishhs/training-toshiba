import { createStore } from 'vuex'
import productStoreConfig from '@/store/modules/product'
import { flushPromises } from '@vue/test-utils'
import { api } from '@/services/axiosInstance'
import MockAdapter from 'axios-mock-adapter'
import { productList } from '../apiMock/productMock'
const store = createStore(productStoreConfig)

const axiosMock = new MockAdapter(api)
axiosMock.onGet('/products').reply(200, productList)

test('check if product list is successfully fetched from API', async () => {
  await store.dispatch('getProductList')
  await flushPromises()
  expect(store.state.productList).toEqual(productList)
})
