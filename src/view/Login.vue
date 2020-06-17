<template>
    <div>
        <v-touch @swipeleft="onSwipeleft" tag="p">Swipe me</v-touch>

        <!--//index list-->
        <mt-index-list :style="{height:cityheigth}">
            <!--二位数组，第一维进行遍历-->
            <mt-index-section :index="data.index" v-for="(data,index) in datalist" :key="index">
                <!--二维数组进行遍历-->
                <mt-cell :title="item.name" v-for="item in data.city" :key="item.cityId">
                    CityID:{{item.cityId}}
                </mt-cell>
            </mt-index-section>
        </mt-index-list>

    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import {Indicator} from 'mint-ui'//引入加载中组件

    import { IndexList, IndexSection } from 'mint-ui';
    Vue.component(IndexList.name, IndexList);
    Vue.component(IndexSection.name, IndexSection);



    export default {
        data() {
            return {
                cityheigth:0,
                datalist:[]
            }
        },
        mounted(){
            //加载中效果
            Indicator.open({
                text:'努力加载中...',
                spinnerType:'fading-circle'
            })

            //计算页面的高度
            this.cityheigth = document.documentElement.clientHeight-71+'px'



            //请求数据
            axios({
                url:"https://m.maizuo.com/gateway?k=1373693",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273"}',
                    'X-Host': 'mall.film-ticket.city.list'
                }
            }).then(res=>{
                console.log(res.data)
                //赋值给datalist
                this.datalist = this.handleCityArr(res.data.data.cities)
                Indicator.close();//关闭加载中效果
            })


        },
        methods: {
            onSwipeleft(){
                console.log("左滑动")
            },

            //整理数据
            handleCityArr(list){
                var arr = []
                for (var i=65;i<91;i++){
                    //把26字母循环出来
                    arr.push(String.fromCharCode(i))
                }
                console.log(arr);

                var newlist = []
                for (var j=0;j<arr.length;j++){
                    //把数据拿出来。截取第一个字母。进行比较。
                    var newarr = list.filter(item=>item.pinyin.substring(0,1)===arr[j].toLowerCase())

                    //把v w  没用的去除掉
                    if(newarr.length!=0){
                        newlist.push({
                            index:arr[j],
                            city:newarr
                        })
                    }

                }
                console.log('newlist'+newlist)
                return newlist;

            }
        }
    }
</script>
<style scoped>
    .mint-indexlist-nav{
        border-left: none;
    }

</style>