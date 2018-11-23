import Vue from 'vue'
import Router from 'vue-router'
import { routers, base } from './config'

Vue.use(Router)

let route = []
routers.map(v => {
  route.push({
    path: `${base}/admin${v}`,
    component: () => import(`../pages${v}.vue`)
  })
})

let adminRoute = [
  {
    path: `${base}/login`,
    component: () => import('../pages/login/index.vue')
  },
  {
    path: `${base}/admin`,
    component: () => import('../pages/admin.vue'),
    children: route
  }
]

export default new Router({
  mode: 'history',
  routes: adminRoute
})
