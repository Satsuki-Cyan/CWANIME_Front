import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login/Login'
import Index from '@/components/Index'
import SystemConstant from '@/constants/systemConstant'
import CommonUtil from '@/utils/commonUtil'

Vue.use(Router)
Vue.prototype.SYS_CONST = SystemConstant
Vue.prototype.COMMON_UTIL = CommonUtil

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
