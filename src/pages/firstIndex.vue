<template>
    <div id="app ">
        <headertop :megleft="megleft" :megright="megright" :meghref="hrefs" @chas="getchas" ></headertop>
        <button @click="chuandi">传参数到下一个页面</button>
        <hello></hello>
        <contents></contents>
        <footerbottom v-show="footerShow"></footerbottom>
    </div>
</template>

<script>
import hello from '../components/HelloWorld'
import footerbottom from '../components/footer'
import headertop from '../components/header'
import contents from '../components/content'
import {mapGetters} from 'vuex'
export default {
    name:'firstindex',
    data: function () {
        return{
            megleft:'返回',
            megright:'第二页',
            hrefs:{
                path:'/secound', //通过路由传递参数过去
                query:{
                    userId:'123'
                }
            }
        }
    },
    components:{
        hello,
        footerbottom,
        headertop,
        contents
    },
    computed:{
        ...mapGetters(['footerShow','loginstate']),   //多个工具函数直接复制对象属性；
    },
    methods:{
        getchas: function (e) {
           console.log(e)  //获取从header组件中传过来的数据
        },
        chuandi: function () {
            this.$router.push({
                path:"/secound",      //当没有name属性不能用name时候，用query传递
                query:{
                    user:'cls',
                    type:'555888999'
                }
            })
        },
        footerchange:function(path){
            console.log(path)
            if(path=='/index'){
                this.$store.dispatch('showFooter'); //触发action 提交到mutation
                this.$store.dispatch('loginsuccess');
            }
            else{
                this.$store.dispatch('hideFooter');
            }
        }
    },
    watch:{
        $route(to){
            var path=to.path;
            this.footerchange(path);
        }
    },
    mounted(){
        var path=this.$route.path;
        this.footerchange(path);
        this.$store.state.userinfore='888'
     //   _g.owner.settings('55')
       // console.log(_g.owner.settings())
    //   _g.useSessions('8888')
        //console.log(_g.useSessions())
    }

}
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }
    .logoimg{
        width: 5rem;
        height: auto;
    }
</style>
