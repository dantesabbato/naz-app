//\\//\\//\\ LIBRARIES //\\//\\//\\
import Vue from "vue"
import Router from "vue-router"
import { auth } from "./firebase"
//\\//\\//\\ LAYOUTS //\\//\\//\\
import Admin from "./layouts/admin"
import Default from "./layouts/default"

Vue.use(Router)

const routes = [
  { path: "/", name: "home", component: () => import("./views/home") },
  {
    path: "/",
    component: Default,
    children: [
      { path: "/become_naz", name: "become", component: () => import("./views/become") },
      { path: "/contacts", name: "contacts", component: () => import("./views/contacts") },
      { path: "/info", name: 'info', component: () => import("./views/info/index") },
      { path: "/men", name: "men", component: () => import("./views/models/men") },
      { path: "/women", name: "women", component: () => import("./views/models/women") },
      { path: "/model/:id", name: "model", props: true, component: () => import("./views/models/show") }
    ]
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      { path: "dashboard", alias: "/", name: "dashboard", component: () => import("./views/admin/model-forms") },
      { path: "models", name: "admin-models", component: () => import("./views/admin/models") },
      { path: "content", name: "admin-content", component: () => import("./views/admin/content") },
      { path: "archive", name: "admin-archive", component: () => import("./views/admin/archive") }
    ],
    meta: { requiresAuth: true }
  },
  { path: "/login", name: "login", component: () => import("./views/admin/login") },
  { path: "/facebook", beforeEnter () { location.href = "https://m.facebook.com/nazmanagement" } },
  { path: "/vk", beforeEnter () { location.href = "https://vk.com/nazmgmt" } },
  { path: "/instagram", beforeEnter () { location.href = "https://www.instagram.com/nazmanagement" } }
]

const router = new Router({
  scrollBehavior() { return { x: 0, y: 0 } },
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  requiresAuth && !auth.currentUser ? next("/login") : next()
})

export default router
