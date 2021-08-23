import { createApp } from 'vue'
import App from './App.vue'
import NameForm from '@/components/NameForm'
import '@/assets/scss/app.scss'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.component('NameLogger', NameForm)
app.mount('#app')
