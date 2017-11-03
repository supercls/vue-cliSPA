import Vue from 'vue'
import Router from 'vue-router'
import firstindex from '@/pages/firstIndex'
import secoundindex from '@/pages/secoundIndex'
import thereindex from '@/pages/there'
import fourIndex from '@/pages/four'
import fiveIndex from '@/pages/five'

Vue.use(Router)

export default new Router({
  mode: 'history',  //在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式前面加上#.
  routes: [
    {
      path: '/',
      name: 'firstindex',
      component: firstindex
    },
    {
      path:'/secound',
      name:"secound",
      component:secoundindex,
      children:[
        {
          path:'/',
          name:'thereindex',
          component:thereindex
        },
        {
          path:'five',
          name:'fiveindex',
          component:fiveIndex
        }
      ]
    },
    {
      path:'/four',
      name:'name',
      component:fourIndex
    }
  ]
})
