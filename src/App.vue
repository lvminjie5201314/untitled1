<template>
  <div id="app">
<!--底部导航-->
    <tabber v-show="isTabberShow"></tabber>
<!--  路由插槽  -->
    <section>
        <router-view></router-view>
    </section>

  </div>
</template>

<script>
  // 导入组件
import tabber from '@/components/Tapbar'
import {mapState} from "vuex";
//import bus from "@/bus";
//es6导出方式1
//import obj from "@/moudule/moudleA";
//console.log(obj.mapFilter());
//es6导出方式2
//import {mapFilter,mapState} from "@/moudule/moudleB";
//console.log(mapFilter(),mapState());

  export default {
  data(){
    return{
        //isShow:true
    }
  },

  //计算属性
  computed:{
      ...mapState(["isTabberShow"])
  },
  components: {
      //注册组件
      tabber

  },

  mounted(){
      //监听底部导航栏事
      /*bus.$on("kerwin",(data)=>{
          this.isShow = data;
      })*/


  },
  methods:{


  }





}
</script>
<!--全局样式-->
<style>
  #text-ul li{
    list-style: none;
    background-color: yellow;
  }
  section{
      margin-bottom: 50px;
      padding: 0;

  }
    body{
        margin: 0;
    }

</style>

