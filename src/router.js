//\\//\\//\\ LIBRARIES //\\//\\//\\
import Vue from 'vue'
import Router from 'vue-router'
import { auth } from './firebase'
//\\//\\//\\ LAYOUTS //\\//\\//\\
import Admin from './layouts/admin'
import Default from './layouts/default'

Vue.use(Router)

const routes = [
  { path: '/', name: 'home', component: () => import('./views/home') },
  {
    path: '/',
    component: Default,
    children: [
      { path: '/become_naz', name: 'become', component: () => import('./views/become') },
      { path: '/contacts', name: 'contacts', component: () => import('./views/contacts') },
      { path: '/info', name: 'info', component: () => import('./views/info') },
      { path: '/men', name: 'men', component: () => import('./views/models/men') },
      { path: '/women', name: 'women', component: () => import('./views/models/women') }
    ]
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      { path: 'dashboard', alias: '/', name: 'dashboard', component: () => import('./views/admin/dashboard') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  { path: '/login', name: 'login', component: () => import('./views/admin/login') }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router

