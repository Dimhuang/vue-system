import Vue from 'vue'
import Router from 'vue-router'
import {routers ,routerList} from './configJs'


Vue.use(Router)
const RouterConfig = {
  routes:routers
}


export const router = new Router(RouterConfig)
router.beforeEach((to, from, next)=>{
  console.log(to.matched)
  next()
})
