<template>

    <!--如果是空。就不渲染-->
    <div v-if="filminfo">

        <!--返回按钮-->
        <div :class="'film-header '+show">
            <div class="goBack" @click="goBack()">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
            </div>
            <div class="title"> {{filminfo.name}}</div> <!---->
        </div>


        <img class="img-t" :src="filminfo.poster">
        <div style="padding: 8px;">
            <h2> <p>{{filminfo.name}}<span>{{filminfo.grade}}分</span> </p></h2>
            <p>{{filminfo.category}}</p>

            <!--detail轮播组件-->
            <h3>演职人员</h3>
            <detailswiper perview="4" swipername="detail_actors"><!--给swiper传需要遍历多少张图片-->
                <div class="swiper-slide" v-for="(item,index) in filminfo.actors" :key="index">
                    <img :src="item.avatarAddress">
                    <div>
                        <div>{{item.name}}</div>
                        <span>{{item.role}}</span>
                    </div>
                </div>
            </detailswiper>

            <h3>剧照</h3>
            <detailswiper perview="3" swipername="detail_photos"><!--给swiper传需要遍历多少张图片-->
                <div class="swiper-slide" v-for="(item,index) in filminfo.photos" :key="index">
                    <img style="height: 100px" :src="item">
                </div>
            </detailswiper>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import detailswiper from './Detail/DetailSwiper'

    export default {
        data(){
            return{
                filminfo:null,
                show:''
            }
        },
        mounted() {
            //获取动态路由传过来的id
            //console.log(this.$route.params.id);
            var filmId = this.$route.params.id;

            //ajax根据id请求数据  拼接fimId
            axios({
                url:'https://m.maizuo.com/gateway?filmId='+filmId+'&k=3006339',
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.info'
                }
            }).then(res=>{
                //console.log(res.data);
                this.filminfo = res.data.data.film
            });

            window.onscroll = this.handleScroll;


        },
        methods:{
            //监听滚动事件。吸顶功能
            handleScroll(){
                if(document.documentElement.scrollTop){
                    //吸顶
                    this.show = 'show-film-header'

                }else {
                    //
                    this.show = ''
                }
            },
            //返回上一页
            goBack(){
                this.$router.push('/film')
            }
        },

        components:{
            detailswiper
        }
    }
</script>
<style scoped>
    .img-t{
        width: 100%;

    }
    p{
        display:flex;
        justify-content: space-between
    }
    .goBack{
        height: 30px;
        position: absolute;
        top: 5px;
        left: 5px;
    }
    .goBack img{
        height: 30px;
    }
    .film-header {
        position: fixed;
        background-color: hsla(0, 0%, 100%, 0);
        color: transparent;
        -webkit-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
        width: 100vw;
        height: 44px;
        z-index: 1;
        top: 0;
    }
    .title {
        font-size: 17px;
        line-height: 44px;
        width: 100vw;
        text-align: center;
    }
    .show-film-header {
        -webkit-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
        background-color: #fff;
        color: #191a1b;
    }

</style>