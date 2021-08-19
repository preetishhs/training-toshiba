import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import NotFound from '@/views/NotFound.vue'
import store from '@/store'
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
    meta: { requireAuth: true },
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
    component: () => import('@/views/Cart'),
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUp')
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

// function checkLogin(to, from, next) {
//   const loggedIn = store.state.user.isLoggedIn
//   if (loggedIn) {
//     return next()
//   } else {
//     if (to.name !== 'login') {
//       return next({ name: 'login' })
//     }
//   }
//   return next()
// }

router.beforeEach((to, from, next) => {
  console.log('before Each', to, from)
  const loggedIn = store.state.user.isLoggedIn
  if (loggedIn || !to.meta.requireAuth) {
    return next()
  } else {
    if (to.name !== 'login') {
      return next({ name: 'login' })
    }
  }
  return next()
})

router.afterEach(() => {
  console.log('After each')
})

export default router
