import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Hot from '../components/Hot'
import Movie from '../components/Movie'
import Top from '../components/Top'
import Detail from '../components/Detail'

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/hot'},
    {path: '/hot', name: 'hot', component: Hot},
    {path: '/movie', name: 'movie', component: Movie},
    {path: '/top', name: 'top', component: Top},
    {path: '/detail/:id', name: 'detail', component: Detail}
  ],
  // 通过路由的构造选项 linkActiveClass 来全局配置链接激活时使用的 CSS 类名
  linkActiveClass: 'active'
})
export default router