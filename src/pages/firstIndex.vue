<template>
    <div id="app ">
        <headertop :megleft="megleft" :megright="megright" :meghref="hrefs" @chas="getchas" ></headertop>
        <button @click="chuandi">传参数到下一个页面</button>
        <hello></hello>
        <contents></contents>
        <footerbottom></footerbottom>
    </div>
</template>

<script>
import hello from '../components/HelloWorld'
import footerbottom from '../components/footer'
import headertop from '../components/header'
import contents from '../components/content'
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
        }
    },
    components:{
        hello,
        footerbottom,
        headertop,
        contents
    },
    mounted: function () {
        console.log(this.$route.params)
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
