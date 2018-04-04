import home from '@/view/home'
import mainIndex from '@/view/main/mainIndex'
import mainList from '@/view/main/mainList'

export const routerList = [
  {
    path: '/',
    name: 'home',
    component: home,
    children:[
      {
        path: '/main/mainIndex',
        name: 'mainIndex',
        component: mainIndex
      },
      {
        path: '/main/mainList',
        name: 'mainList',
        component: mainList
      }
    ],
    redirect:{
      path: '/main/mainIndex'
    }
  }
]

export const routers = [
  ...routerList
]
