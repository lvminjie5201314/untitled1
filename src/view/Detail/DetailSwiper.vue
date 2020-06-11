<template>
    <div :class="'swiper-container '+swipername">
        <div class="swiper-wrapper">
            <!--插槽-->
            <slot></slot>
        </div>
        <!--分页器-->
        <!--<div class="swiper-pagination"></div>-->
        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
        <!-- 如果需要滚动条 -->
        <!--<div class="swiper-scrollbar"></div>-->
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.css'

    export default {
        mounted() {
            //console.log("mounted")
            new Swiper('.'+this.swipername+'',{
                //不需要轮播
                //loop:true,
                slidesPerView:this.perview,
                spaceBetween:20,
                freeMode:true,


            });
        },
        //父传子
        props:["perview","swipername"]
    }
</script>

<style scoped>


</style>