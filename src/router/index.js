import Vue from 'vue'
import Router from 'vue-router'
import firstindex from '@/pages/firstIndex'
import secoundindex from '@/pages/secoundIndex'
import thereindex from '@/pages/there'
import fourIndex from '@/pages/four'

Vue.use(Router)

export default new Router({
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
          path:'there',
          name:'thereindex',
          component:thereindex
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
