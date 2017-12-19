import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Main from '@/components/Index/Main/Main'
import SafeShopping from '@/components/Index/SafeShopping/SafeShopping'
import ProductDetails from '@/components/Index/ProductDetails/ProductDetails'
import Login from '@/components/User/Login'
import Diary from '@/components/Diary/Diary'
import DiaryMain from '@/components/Diary/DiaryMain/DiaryMain'
import DiaryByItem from '@/components/Diary/DiaryByItem/DiaryByItem'
import Doctors from '@/components/Diary/Doctors/Doctors'
import EditDiary from '@/components/Diary/EditDiary/EditDiary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          name: 'Main',
          path: 'main',
          meta: { title: '首页' },
          component: Main
        },
        {
          name: 'SafeShopping',
          path: 'safe-shopping',
          meta: { title: '安心购' },
          component: SafeShopping
        },
        {
          name: 'ProductDetails',
          path: 'product-details/:id',
          meta: { title: '商品详情' },
          component: ProductDetails
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: { title: '登录' },
      component: Login
    },
    {
      path: '/diary',
      name: 'diary',
      component: Diary,
      children: [
        {
          name: 'DiaryMain',
          path: 'diary-main',
          meta: { title: '美丽日记' },
          component: DiaryMain
        },
        {
          name: 'DiaryByItem',
          path: 'diary-by-item',
          meta: { title: '按项目查询日记' },
          component: DiaryByItem
        },
        {
          name: 'Doctors',
          path: 'doctors',
          meta: { title: '查询医生' },
          component: Doctors
        },
        {
          name: 'EditDiary',
          path: 'edit-diary',
          meta: { title: '编辑日记' },
          component: EditDiary
        }
      ]
    }
  ]
})
