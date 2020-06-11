<template>
    <div>
        <!--轮播图，插槽-->
        <filmswiper :key="datalist.length" ref="filmswiper">
            <div class="swiper-slide" v-for="data in datalist" :key="data.bannerId">
                <img :src="data.imgUrl">
            </div>
        </filmswiper>

        <!--子组件的导航条-->
        <filmNav :class="isfixed?'fixed':''"></filmNav>
        <div>
            <!--路由容器-->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import filmNav from '@/view/Film/FilmNav'
    import filmswiper from '@/view/Film/FilmSwiper'
    import axios from 'axios'

    export default {
        data(){
            return{
                datalist:[],
                isfixed:false
            }
        },
        mounted(){
            axios({
                url:"https://m.maizuo.com/gateway?type=2&cityId=310100&k=8820394",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273","bc":"310100"}',
                    'X-Host': 'mall.cfg.common-banner'
                }
            }).then(res=>{
                //console.log(res.data.data[0].imgUrl);
                this.datalist = res.data.data
            });

            //监听滚动  吸顶
            window.onscroll = this.haderScroll();
        },
        methods:{

            haderScroll(){
                //拿到当前节点的高度  filmswiper为节点名字
                //console.log(this.$refs.filmswiper.$el.offsetHeight)
                if(document.documentElement.scrollTop > 400+'px'){
                    //吸顶
                    this.isfixed = true;

                }else {
                    //
                    this.isfixed = false;
                }
            }
        },
        destroy(){
            window.onscroll = null
        },

        components:{
            filmNav,
            filmswiper

        }
    }
</script>
<style>
    .swiper-slide img{
        width: 100%;
    }
    .fixed{
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        width: 100%;
        height: 40px;

    }

</style>