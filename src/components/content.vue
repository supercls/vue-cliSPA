<template>
    <div class="menu-content">
        <ul v-if="numF!=0">
            <li v-for="item in items" class="clearfix" :id="item.id" @click="gotoDetail(item.id)">
                <img src="../assets/logo.png" alt="" class="img-responsive"/>
                <h5 class="fzs-ellipsis-1">{{item.title}}</h5>
                <p class="fzs-ellipsis-3">{{item.cont}}</p>
            </li>
        </ul>
        <p v-if="numF==0">不支持跨域访问或者您不在服务环境中，暂时为空！</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'content',
    data: function () {
        return {
            items:[
            ],
            numF:'0'
        }
    },
    //实例全部完成时触发生命周期
    updated: function () {
        this.numF=this.items.length;
    },
    methods:{
        gotoDetail: function (id) {
            this.$router.push({
                name:'detail',
                query:{
                    id:id
                }
            })
        }
    },
    mounted: function () {
    //解决跨域问题，在config index。js设置
//        $.ajax({
//            url:'http://192.168.6.252:50000/rest/login/',
//            type:'POST',
//            dataType:'json',
//          //  jsonp:'callback',
//            //jsonpCallback:'callback',
//            data:{
//                username:'cls666',
//                password:'123456',
//            },
//            success: function (e) {
//                console.log(e)
//            },
//            complete: function (e) {
//                console.log(e)
//            },
//            error: function (e) {
//                console.log(e)
//            }
//        })
        var that=this;
        var indexPage=1;
      //  axiosGetcontetn()
        indexContent.call(that);
        $(window).scroll(function(){
            var srollPos = $(window).scrollTop();//插入元素高度/单位px//滚动条距顶部距离(页面超出窗口的高度)
            var range = 0;//距下边界长度/单位px 防止dom有距离
            var maxnum=6;  //设置允许加载次数
            var totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
//            if(($(document).height()-range) <= totalheight && indexPage == maxnum){
//                alert('已经到底啦！别刷了，接口不要钱啊')
//                return false
//            }
            if(($(document).height()-range) <= totalheight && indexPage != maxnum) {
              //  axiosGetcontetn()
                indexContent();
                console.log(totalheight+'.'+($(document).height()-range)+'/'+indexPage)
            }
        });
        function indexContent(){
            _g.ajax('/rest/information/queryPageList',{
                pageId:indexPage,
                pageSize:'4'
            },function(data){
                if(data.code==0){
                    if(data.data.data.length==0){
                        alert('没有更多了')
                        return false
                    }
                    $.each(data.data.data, function (index) {
                        var str={
                            title:this.title,
                            cont:this.content,
                            id:this.id
                        }
                        that.numF=index
                        that.items.push(str)
                    })
                }

            })
            indexPage++;
        }
        //
        function axiosGetcontetn(){
            axios.post('http://192.168.6.252:50000/rest/login/', {
                params: {
                    username:'cls666',
                    password:'123456'
                }
            })
            .then(function (response) {
                console.log(response)
                $.each(response.data.data, function (index) {
                    var str={
                        src:this.share_url,
                        cont:this.abs
                    }
                    if(index!=6){
                        that.items.push(str)
                        that.numF=index
                    }
                })
                indexPage++;

            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
<style scoped>
    .menu-content{
        margin:15px 2% 50px 2%;
    }
    .menu-content ul li{
        background: #fff;
        margin:5px auto;
        height: 4.5rem;
        overflow: hidden;
        padding:5px 0;
    }
    .menu-content ul li h5{
        color: #f00;
    }
    .menu-content ul li img{
        float: left;
        width:25%;
        height: 4rem;
    }
    .menu-content ul li p{
        float: right;
        width: 75%;
        overflow: hidden;
        text-align: left;
        padding:5px 8px;
        font-size: 0.7rem;
        line-height:1rem;
        height:3rem;
        overflow:hidden;

    }
</style>
