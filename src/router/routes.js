import Login from '@/pages/Login/Login.vue'
import Home from '@/pages/Home/Home.vue'
import Personal from '@/pages/Personal/Personal.vue'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/personal',
    component: Personal
  }
]
