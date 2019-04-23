import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Index from '@/components/Index'
import Body from '@/components/Body'
import Anime from '@/components/anime/Anime'
import AnimeDetail from '@/components/anime/animeDetail/AnimeDetail'
import AnimeByPage from '@/components/anime/animeDetail/AnimeByPage'


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
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'index',
          component: Body
        },
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'anime',
          component: Anime,
          children: [
            {
              path: ':year/:month',
              name: 'animeByPage',
              component: AnimeByPage
            },
            {
              path: ':year/:month/detail/:id',
              name: 'animeDetailAndPlayer',
              component: AnimeDetail
            }
          ]
        }
      ]
    }
  ]
})
