<template>
    <div v-if="datalist">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="isdisavled" infinite-scroll-immediate-check="false">
            <li v-for="data in datalist" :key="data.filmId" @click="handClick(data.filmId)">
                <img :src="data.poster" />
                <h3>{{data.name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{data.actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="this.datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{'' | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="this.datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="this.datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="this.datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="this.datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    import '@/Filter/Actorsfilter'
    import {Indicator} from 'mint-ui'//引入加载中组件
    import { InfiniteScroll } from 'mint-ui';//无限滚动
    Vue.use(InfiniteScroll);

    export default {
        data(){
            return{
                datalist:[],
                page:1,//默认请求第一页数据
                isdisavled:false,
                total:0
            }
        },
        methods:{
            handClick(id){
                //命名路由传参   name
                //this.$router.push({name:'detail',params: {id:id}});
                //简写
                this.$router.push({path:`/detail/${id}`})
                //alert(JSON.stringify(this.datalist[0].poster) );
            },


        },


        mounted(){
            //加载中效果
            Indicator.open({
                text:'努力加载中...',
                spinnerType:'fading-circle'
            })

            axios({//请求第一页数据
                url:`https://m.maizuo.com/gateway?cityId=310100&pageNum=${this.page}&pageSize=10&type=1&k=1571679`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                //console.log(res);
                this.datalist = res.data.data.films;
                this.total = res.data.data.total;//第一次加载数据时候。赋值total，总个数
                //数据加载完毕，隐藏加载效果
                Indicator.close();
            })


        },
        loadMore() {//无限滚动
            //加载中效果
            Indicator.open({
                text:'努力加载中...',
                spinnerType:'fading-circle'
            })
            console.log("到底了")
            this.isdisavled = true;//禁用无限滚动
            this.page++

            //如果等于总个数，就不加载
            if(this.total==this.datalist.length){
                return ;
            }

            axios({//请求第n页数据
                url:`https://m.maizuo.com/gateway?cityId=310100&pageNum=${this.page}&pageSize=10&type=1&k=1571679`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                //console.log(res);
                //把新数组加到老数组中
                this.datalist = [...this.datalist,...res.data.data.films];

                //数据加载完毕，隐藏加载效果
                Indicator.close();
                this.isdisavled = false;//开启无限滚动
            })



        },

    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0px;
    }
    li{
        overflow: hidden;
        padding: 8px;
    }
    img{
        width: 100px;
        float: left;
    }
</style>