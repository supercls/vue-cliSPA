<template>
    <div class="menu-content">
        <ul v-if="numF!=0">
            <li v-for="item in items" class="clearfix">
                <img :src="item.src" alt="" class="img-responsive"/>
                <p class="fzs-ellipsis-2">{{item.cont}}</p>
            </li>
        </ul>
        <p v-if="numF==0">不支持跨域访问或者您不在服务环境中，暂时为空！</p>
    </div>
</template>

<script>
import $ from 'jquery'
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
    mounted: function () {
    //解决跨域问题，在config index。js设置
//        $.ajax({
//            url:'/api/channel/listjson',
//            type:'GET',
//            dataType:'json',
//           // jsonp:'callback',
//          //  jsonpCallback:'callback',
//            data:{pn:1,
//                rn:6,
//                tag1:'搞笑'},
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
        axiosGetcontetn()
        $(window).scroll(function(){
            var srollPos = $(window).scrollTop();//插入元素高度/单位px//滚动条距顶部距离(页面超出窗口的高度)
            var range = 0;//距下边界长度/单位px 防止dom有距离
            var maxnum=6;  //设置允许加载次数
            var totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
            if(($(document).height()-range) <= totalheight && indexPage == maxnum){
                alert('已经到底啦！别刷了，接口不要钱啊')
                return false
            }
            if(($(document).height()-range) <= totalheight && indexPage != maxnum) {
                axiosGetcontetn()
                console.log(totalheight+'.'+($(document).height()-range)+'/'+indexPage)
            }
        });
        //
        function axiosGetcontetn(){
            axios.get('/api/channel/listjson', {    //加载数据
                params: {
                    pn:indexPage,
                    rn:6,
                    tag1:'搞笑'
                }
            })
            .then(function (response) {
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
    }
    .menu-content ul li img{
        float: left;
        width:25%;
        height: 4rem;
    }
    .menu-content ul li p{
        float: right;
        width: 75%;
        display: inline-block;
        overflow: hidden;
        text-align: left;
        padding:5px 20px;
    }
</style>
