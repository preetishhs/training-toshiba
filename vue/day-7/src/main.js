import { createApp } from 'vue'
import App from './App.vue'
import NameForm from '@/components/NameForm'
import '@/assets/scss/app.scss'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('NameLogger', NameForm)
app.mount('#app')
