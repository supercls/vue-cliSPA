<template>
    <div>
        <headers></headers>
        <h3>{{title}}</h3>
        <p>{{content}}</p>
    </div>
</template>

<script>
import headers from '@/components/header.vue'
export default{
    name:'detail',
    data(){
        return {
            title:'',
            content:''
        }
    },
    components:{
        headers
    },
    mounted:function(){
        var that=this;
        console.log(this.$route)
        var id=this.$route.query.id
        _g.ajax('/rest/information/queryDetail/'+id,{
            id:id
        },function (data) {
            if(data.code==0){
                that.title=data.data.title
                that.content=data.data.content
            }
        })
    }
}
</script>
<style scoped>

</style>
