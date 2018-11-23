// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from './plugins/axios'

Vue.use(iView, {transfer: true})
Vue.use(axios)

Vue.config.productionTip = false

// 全局路由
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    return next({
      path: '/login'
    })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
