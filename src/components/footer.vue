<template>
    <footer>
        <ul class="clearfix">
            <li v-for="item in items">
                {{item.meg}}
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            items:[
                {meg:'1'},{meg:'2'},{meg:'3'},{meg:'4'}
            ]
        }
    }
}
</script>
<style scoped>
    footer{
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 2rem;
        line-height: 2rem;
        background: #6AD3E9;
    }
    footer ul li{
        float: left;
        width:25%;
        text-align: center;
        line-height: 2rem;
        color: #fff;
    }
</style>
