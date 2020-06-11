<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handClick(data.filmId)">
                <img :src="data.poster" />
                <h3>{{data.name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{data.actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
            <li  @click="handClick(datalist[0].filmId)">
                <img :src="datalist[0].poster" />
                <h3>{{datalist[0].name}}</h3>
                <!--主演是数组。需要过滤器-->
                <p>主演:{{datalist[0].actors | actorsfilter}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    import '@/Filter/Actorsfilter'

    export default {
        data(){
            return{
                datalist:[]
            }
        },
        methods:{
            handClick(id){
                //命名路由传参   name
                //this.$router.push({name:'detail',params: {id:id}});
                //简写
                this.$router.push({path:`/detail/${id}`})
            }


        },
        mounted(){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=1571679",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                //console.log(res);
                this.datalist = res.data.data.films
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