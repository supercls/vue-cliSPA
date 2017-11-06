<template>
    <div id="login">
        <input type="number" placeholder="请输入用户名"/>
        <input type="number" placeholder="请输入密码"/>
        <p>{{actions}}</p>
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
    },
    mounted: function () {
        console.log(this.$store.state.userinfore)
        console.log(this.$store.state.mutations.loginstate)
    },
    computed: {
        actions () {
             this.$store.state.navState=1;

            console.log(this.$store.state.navState)
        }
    }
}
</script>
<style scoped>

</style>
