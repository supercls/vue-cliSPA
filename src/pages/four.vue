<template>
    <div>
        <headers :megleft="megleft" :megright="megright" :meghref="hrefs"></headers>
        <p>我是第三个页面,meiyou子路由</p>
        <p>路由传递的参数值为{{this.$route.params}}</p>
    </div>
</template>

<script>
    import headers from '../components/header'
    export default{
        name:"four",
        data(){
            return {
                megleft:'返回',
                megright:'首页',
                hrefs:'/'
            }
        },
        components:{
            headers
        },
        mounted:function(){
            console.log(this.$route)
        }

    }
</script>
<style scoped>

</style>
