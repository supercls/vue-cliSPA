// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import './assets/js/flex_rem.js'
//import axios from 'axios'

//import jquert from 'jquery'

//css
require('./assets/css/mui.css')
require('./assets/css/style.css')
//Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.config.productionTip = false


//登录状态验证
router.beforeEach((to, from, next) => {
    //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
    if(to.path === '/login'){
            next()
    }  // 如果即将进入登录路由，则直接放行
    else {     //进入的不是登录路由
        if(to.meta.auth && JSON.stringify(_g.useSessions())=='{}') {
            alert('请重新登录')
            next({path: '/login'})//下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
        }
        else {
            next() //如果不需要登录验证，或者已经登录成功，则直接放行
        }
    }
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
