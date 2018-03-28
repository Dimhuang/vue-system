import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import mainIndex from '@/view/main/mainIndex'
import mainList from '@/view/main/mainList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: 'main/mainIndex',
          name: 'mainIndex',
          component: mainIndex
        },
        {
          path: 'main/mainList',
          name: 'mainList',
          component: mainList
        }
      ],
      redirect:{
        path: 'main/mainIndex'
      }
    }
  ]
})
