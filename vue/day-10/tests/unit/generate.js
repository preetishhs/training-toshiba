import { mount, shallowMount } from '@vue/test-utils'

import { createStore } from 'vuex'

import vuexCartMock from './vuexMock/vuexCartMock'

import vuexProductMock from './vuexMock/vuexProductMock'

import vuexUserMock from './vuexMock/vuexUserMock'

export function generateStore(modules = {}) {
  return createStore({
    modules: {
      cart: vuexCartMock,
      product: vuexProductMock,
      user: vuexUserMock,
      ...modules
    }
  })
}

export function generateWrapper(type, component, attributes = {}) {
  let combinedPlugins = []
  if (attributes.store) {
    combinedPlugins = [attributes.store]
  } else {
    combinedPlugins = [generateStore()]
  }
  if (type === 'shallowMount') {
    return shallowMount(component, {
      global: {
        plugins: combinedPlugins,
        mocks: {
          $n: () => {},
          $tc: () => {}
        }
      },
      slots: attributes.slots,
      props: attributes.props
    })
  } else if (type === 'mount') {
    return mount(component, {
      global: {
        plugins: combinedPlugins,
        mocks: {
          $n: () => {},
          $tc: () => {}
        }
      },
      props: attributes.props
    })
  }
}
