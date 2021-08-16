import { createApp } from 'vue'
import App from './App.vue'
import NameForm from '@/components/NameForm'
import '@/assets/scss/app.scss'
import router from './router'

const app = createApp(App)
app.use(router)
app.component('NameLogger', NameForm)
app.mount('#app')
