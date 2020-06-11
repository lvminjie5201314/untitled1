<template>
  <div id="app">
<!--底部导航-->
    <tabber></tabber>
<!--  路由插槽  -->
    <section>
        <router-view></router-view>
    </section>

  </div>
</template>

<script>
  // 导入组件
import tabber from '@/components/Tapbar'


export default {
  data(){
    return{

    }
  },
  components: {
      tabber




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

