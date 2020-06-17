<template>
    <div>
        <ul>
            <li v-for="data in comingsoonlist" :key="data.filmId" @click="handClick(data.filmId)">
                <img :src="data.poster" />
                <h3>{{data.name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{data.actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(comingsoonlist[0].filmId)">
                <img :src="comingsoonlist[0].poster" />
                <h3>{{comingsoonlist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{'' | actorsfilter}}</p>
            </li>
            <li  @click="handClick(comingsoonlist[0].filmId)">
                <img :src="comingsoonlist[0].poster" />
                <h3>{{comingsoonlist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{comingsoonlist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(comingsoonlist[0].filmId)">
                <img :src="comingsoonlist[0].poster" />
                <h3>{{comingsoonlist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{comingsoonlist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(comingsoonlist[0].filmId)">
                <img :src="comingsoonlist[0].poster" />
                <h3>{{comingsoonlist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{comingsoonlist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(comingsoonlist[0].filmId)">
                <img :src="comingsoonlist[0].poster" />
                <h3>{{comingsoonlist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{comingsoonlist[0].actors | actorsfilter}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import '@/Filter/Actorsfilter'
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'
    import {Indicator} from 'mint-ui'//引入加载中组件


    export default {
        data(){
          return{

          }
        },

        mounted(){


            //判断数组中是否有数据。如果无数据。进行ajax请求。   否则读取缓存数据
            //alert(this.comingsoonlist.length);
            if(this.comingsoonlist.length==0){
                this.$store.dispatch("GetComingSoonAction","传参数");
                Indicator.close()//关闭加载中效果
            }else {
                console.log("使用缓存数据",this.comingsoonlist)
                console.log("使用getters",this.filterComingsoonList)

            }
        },
        //计算属性写法
        computed:{
            //缓存数据
            ...mapState(["comingsoonlist"]),
            //getters过滤数据。
            ...mapGetters(['filterComingsoonList'])
        },
        methods:{
            handClick(id){
                //命名路由传参   name
                //this.$router.push({name:'detail',params: {id:id}});
                //简写
                this.$router.push({path:`/detail/${id}`})
                //alert(JSON.stringify(this.datalist[0].poster) );
            },
        }
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