<template>
    <div id="login">
        <input type="number" placeholder="请输入用户名" v-model="username"/>
        <input type="password" placeholder="请输入密码" v-model="password"/>
        <p>{{actions}}</p>
        <button @click="loginBtn">登录</button>
        <button @click="registerBtn">注册</button>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        loginBtn: function () {
            var that=this;
            if(that.username==''||that.password==''){
                alert('不能为空')
                return false
            }
            _g.ajax('/rest/login',{
                username:that.username,
                password:that.password
            }, function (data) {
                console.log(data)
                if(data.code==0){
                    _g.useSessions('cls666')
                    that.$router.push({
                        name:"index",
                        params:{
                            user:'cls',
                            type:'555888999'
                        }
                    })
                }
                else{
                    alert(data.message)
                }
            })

        },
        registerBtn:function(){
            var that=this;
            if(that.username==''||that.password==''){
               alert('不能为空')
               return false
            }
            _g.ajax('/rest/create',{
                username:this.username,
                password:this.password
            }, function (data) {
                console.log(data)
                if(data.code==0){
                    alert(data.message)
                }
                else{
                    console.log(data.msg)
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
    #login button{
        text-align: center;
        display: block;
        margin:15px auto;
    }
    #login{
        margin:15px 0;
    }
</style>
