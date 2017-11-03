<template>
    <div>
        <headers :megleft="megleft" :megright="megright" :meghref="hrefs"></headers>
        <p>我是页面二组件</p>
        <router-link :to="{path:'/'}">跳转到首页</router-link>
        <router-link to="/secound/five">跳转到第四个</router-link>
        <router-link :to="hrefDs">跳转到首页</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
import headers from '../components/header'
export default {
    name:'secoundIndex',
    data (){
        return{
            megleft:'首页',
            megright:'第三页',
            hrefs:'/four',
            hrefDs:'/'   //需传参来执行跳转
        }
    },
    components:{
        headers
    }
}
</script>

<style scoped>

</style>
