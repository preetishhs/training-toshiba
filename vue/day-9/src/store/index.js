import { createStore } from 'vuex'
import cart from './modules/cart'
import product from './modules/product'
import user from './modules/user'
import lang from './modules/lang'
import vuexPersist from 'vuex-persist'

const vuexLocalStorage = new vuexPersist({
  storage: window.localStorage,
  modules: ['product', 'lang']
})

const vuexSessionStorage = new vuexPersist({
  storage: window.sessionStorage,
  modules: ['user', 'cart']
})

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    product,
    user,
    lang
  },
  plugins: [vuexLocalStorage.plugin, vuexSessionStorage.plugin]
})
