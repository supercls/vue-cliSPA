<template>
    <div>
        <p>我是第四个页面，第三个页面路由被我切换了</p>
        <button @click="gotoLogin">点击我跳到登录页</button>
    </div>
</template>

<script>
export default {
    name:'five',
    data(){
        return {

        }
    },
    methods:{
        gotoLogin:function(){
            this.$router.push('/login')  //字符串  // 对象this.$router.push({ path: '/home/first' })
            console.log(this.$router)
        }
    }
}
</script>
<style scoped>

</style>
