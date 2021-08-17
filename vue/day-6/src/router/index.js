import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(/* webpackChunkName: "profileCode" */ '@/views/Profile.vue'),
    redirect: () => {
      return { name: 'personal' }
    },
    children: [
      {
        path: 'personal',
        name: 'personal',
        component: () =>
          import(
            /* webpackChunkName: "profileCode" */ '@/views/profile/Personal.vue'
          )
      },
      {
        path: 'settings',
        name: 'settings',
        component: () =>
          import(
            /* webpackChunkName: "profileCode" */ '@/views/profile/Settings.vue'
          )
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: () =>
          import(
            /* webpackChunkName: "profileCode" */ '@/views/profile/Privacy.vue'
          )
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
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart')
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
