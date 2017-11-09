<template>
    <header class="clearfix">
        <!--<span class="left" onclick="window.history.go(-1)">{{megleft}}</span>-->
        <span class="left" @click="goback">{{megleft}}</span>
       <span class="right" @click="changes"><router-link :to="meghref">{{megright}}</router-link></span>
   </header>
</template>

<script>
export default {
   name: 'header',
   props:{
       megleft:{
           default:'返回'
       },
       megright:{
           default:'第二页'
       },
       meghref:{
           default:'/secound'
       }
   },
   data (){
       return {

       }
   },
   methods:{
       changes:function(){
           this.$emit('chas','我是组件header')
       },
       goback:function(){
            this.$router.go(-1)    //返回上一页
       }
   }
}
</script>
<style scoped>
   header{
       height: 2rem;
       line-height: 2rem;
       background: #41B883;
   }
   header span{
       color: #fff;
       margin:0 15px;
   }
   header img{
       margin:5px auto
   }
</style>
