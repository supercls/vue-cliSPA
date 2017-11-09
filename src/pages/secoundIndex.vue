<template>
    <div>
        <headers :megleft="megleft" :megright="megright" :meghref="hrefs"></headers>
        <p>我是页面二组件{{this.$route.query}}</p>
        <router-link :to="{path:'/'}">跳转到首页</router-link>
        <router-link to="/secound/five">跳转到第四个</router-link>
        <router-link :to="{name:'name',params:{num:'2'}}">跳转到第1个</router-link>
        <router-link :to="hrefDs">跳转到首页</router-link>
        <router-view class="left one"></router-view>
        <router-view class="right two" name="numtwo"></router-view>
    </div>

</template>

<script>
import headers from '../components/header'
export default {
    name:'secoundIndex',
    data (){
        return{
            megleft:'返回',
            megright:'第三页',
            hrefs:'/four',
            hrefDs:'/'   //需传参来执行跳转
        }
    },
    components:{
        headers
    },
    mounted:function(){
        console.log(this.$route)
    },
    methods:{

    }
}
</script>

<style scoped>

</style>
