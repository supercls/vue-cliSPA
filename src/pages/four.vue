<template>
    <div>
        <headers :megleft="megleft" :megright="megright" :meghref="hrefs"></headers>
        <p>我是第三个页面,meiyou子路由</p>
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
                hrefs:'#/'
            }
        },
        components:{
            headers
        }
    }
</script>
<style scoped>

</style>
