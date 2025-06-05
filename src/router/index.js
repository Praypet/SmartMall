import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/LoginIndex'
import Layout from '@/views/layout/LayoutIndex'
import Pay from '@/views/pay/PayIndex'
import Prodetail from '@/views/prodetail/ProdetailIndex'
import Search from '@/views/search/SearchIndex'
import Myorder from '@/views/myorder/MyorderIndex'
import SearchList from '@/views/search/SearchList'

import Home from '@/views/layout/HomeIndex'
import Category from '@/views/layout/CategoryIndex'
import Cart from '@/views/layout/CartIndex'
import User from '@/views/layout/UserIndex'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/category', component: Category },
      { path: '/cart', component: Cart },
      { path: '/user', component: User }
    ]
  },
  { path: '/login', component: Login },
  { path: '/pay', component: Pay },
  { path: '/prodetail/:id', component: Prodetail },
  { path: '/search', component: Search },
  { path: '/myorder', component: Myorder },
  { path: '/searchlist', component: SearchList }

]

const router = new VueRouter({
  routes
})
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  if (authUrls.includes(to.path)) {
    // const token = store.state.user.userInfor.token
    const token = store.getters.token
    if (!token) return next('/login')
  }
  next()// 放行
})

export default router
