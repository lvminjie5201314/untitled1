<template>
    <!--滚动加载功能-->
    <div class="cinema_container" :style="{height:cinemaheigth}"><!--高度不能写死。为屏幕高度-->
        <ol>
            <li v-for="data in datalist" :key="data.cinemaId">
                <h4>{{data.name}}</h4>
                <p>{{data.address}}</p>
            </li>
        </ol>
    </div>
</template>

<script>
    import axios from 'axios'
    import BScroll from 'better-scroll'
    export default {
        data(){
            return{
                datalist:[],
                cinemaheigth:0
            }

        },
        mounted(){



            //获取屏幕高度
            this.cinemaheigth = document.documentElement.clientHeight-50+"px";
            axios({
               url:"https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=7160629",
               headers:{
                   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273","bc":"310100"}',
                   'X-Host': 'mall.film-ticket.cinema.list'
               }
            }).then(res=>{
                console.log(res.data)
                this.datalist = res.data.data.cinemas;

                //数据加载完毕，dom节点创建完毕。交给betterscroll
                //$nextTick   等待所有加载完毕才执行
                this.$nextTick(()=>{
                    var myscroll = new BScroll('.cinema_container',{
                        //滚动条
                        scrollbar:{
                            fade:true,
                            interactive:false
                        },
                        //下拉加载，懒加载
                        pullUpLoad:{
                            threshold:50
                        }


                    });

                    //监听下拉加载事件
                    myscroll.on("pullingUp",()=>{
                        console.log("到底了");
                        //到底后，加载数据  （模拟添加假数据）
                        this.datalist.push({
                            cinemaId:"65408",
                            name:"下拉加载的数据"
                        });
                        //添加数据后重新计算高度
                        //myscroll.refresh();
                    });
                });

            });

        },
        beforeDestroy(){

        }
    }
</script>

<style scoped>
    .cinema_container{
        /*把滚动交给betterscroll*/
        overflow: hidden;
        /*滚动条不要下去底部导航栏*/
        position: relative;
        margin-top: 20px;

    }
    ul{

    }
    p{
        margin: 10px;
    }
    h4{
        margin: 16px;
    }
</style>