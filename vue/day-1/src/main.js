import { createApp } from 'vue'
import App from './App.vue'
import NameForm from '@/components/NameForm'

const app = createApp(App)
app.component('NameLogger', NameForm)
app.mount('#app')
