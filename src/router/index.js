import Vue from 'vue'
import Router from 'vue-router'
import firstindex from '@/pages/firstIndex'
import secoundindex from '@/pages/secoundIndex'
import thereindex from '@/pages/there'
import fourIndex from '@/pages/four'
import fiveIndex from '@/pages/five'
import loginIndex from '@/pages/login'
import NotFoundComponent from '@/pages/404'

Vue.use(Router)

export default new Router({
 // mode: 'history',  //在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式前面加上#.
  routes: [
    {
      path: '/',
      //redirect:'/secound',  //重定向，会访问这个路由
      //alias: '/b',//别名，路劲会变但是路由不会
      name: 'firstindex',
      component: firstindex
    },
    {
      path:'/secound', //通过路由传递参数过去
      //name:"secound",     //多视图需要删除  父级的name属性 否则初始不显示 传递参数用query
      component:secoundindex,
      children:[
        {
          path:'/',
          name:'thereindex',
          components: {         //多视图驱动
            default:thereindex,
            numtwo:fiveIndex
          }
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
    },
    {
      path:'/login',
      name:"login",
      component:loginIndex
    },
    {
      path: '*',       //配置404页面
      component: NotFoundComponent
    }
  ]
})
