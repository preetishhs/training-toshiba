import { createApp } from 'vue'
import App from './App.vue'
import NameForm from '@/components/NameForm'
import '@/assets/scss/app.scss'

const app = createApp(App)
app.component('NameLogger', NameForm)
app.mount('#app')
