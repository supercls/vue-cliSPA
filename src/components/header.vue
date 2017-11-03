<template>
    <header class="clearfix">
        <span class="left"><router-link :to="{path:'/'}">{{megleft}}</router-link></span>
        <span class="right" @click="changes"><router-link :to="meghref">{{megright}}</router-link></span>
    </header>
</template>

<script>
export default {
    name: 'header',
    props:{
        megleft:{
            default:'首页'
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
