<template>
    <div>
        <headers :megleft="megleft" :megright="megright" :meghref="hrefs"></headers>
        <p>我是页面二组件</p>
        <a href="#/four">6666</a>
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
            hrefs:'#/four'
        }
    },
    components:{
        headers
    }
}
</script>

<style scoped>

</style>
