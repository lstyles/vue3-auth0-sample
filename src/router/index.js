import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

import Callback from '@/views/Callback'
import ErrorPage from '@/views/Error'

import { routeGuard } from '@/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: routeGuard
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
