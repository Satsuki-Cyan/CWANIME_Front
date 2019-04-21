import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Index from '@/components/Index'
import Anime from '@/components/anime/Anime'


import SystemConstant from '@/constants/systemConstant'
import CommonUtil from '@/utils/commonUtil'


// rememeber to modify
import AnimeDetail from '@/components/anime/animeDetail/AnimeDetail'

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
      component: Index,
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: 'anime',
          component: Anime,
          children: [
            {
              path: '/',
              component: Anime
            },{
              path: 'animeDetail',
              component: AnimeDetail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/animeDetail',
      name: 'animeDetail',
      component: AnimeDetail
    }
  ]
})
