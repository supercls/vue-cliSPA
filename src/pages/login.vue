<template>
    <div id="login">
        <input type="number" placeholder="请输入用户名"/>
        <input type="number" placeholder="请输入密码"/>
        <button @click="loginBtn">登录进首页</button>
    </div>
</template>

<script>
export default {
    name:'login',
    methods:{
        loginBtn: function () {
            this.$router.push({
                name:"name",
                params:{
                    user:'cls',
                    type:'555888999'
                }
            })
        }
    }
}
</script>
<style scoped>

</style>
