<template>
    <div id="app ">
        <headertop :megleft="megleft" :megright="megright" :meghref="hrefs" @chas="getchas"></headertop>
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
            megleft:'首页',
            megright:'第二页',
            hrefs:'#/secound'
        }
    },
    methods:{
        getchas: function (e) {
           console.log(e)  //获取从header组件中传过来的数据
        }
    },
    components:{
        hello,
        footerbottom,
        headertop,
        contents
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
