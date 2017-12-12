import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Login from '@/components/User/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: { title: '首页' },
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      meta: { title: '登录' },
      component: Login
    }
  ]
})
