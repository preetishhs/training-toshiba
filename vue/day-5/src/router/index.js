import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Category from '@/views/Category.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import NotFound from '@/views/NotFound.vue'
import Personal from '@/views/profile/Personal.vue'
import Settings from '@/views/profile/Settings.vue'
import Privacy from '@/views/profile/Privacy.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    redirect: () => {
      return { name: 'personal' }
    },
    children: [
      {
        path: 'personal',
        name: 'personal',
        component: Personal
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: Privacy
      }
    ]
  },
  {
    path: '/category/:categoryName',
    name: 'category',
    component: Category
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: ProductDetail
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
