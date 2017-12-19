// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    user: null
  }
})

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.fullPath === '/login') {
    next({
      path: '/login',
      query: {redirect: from.fullPath}
    })
  }
  next()
})
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
