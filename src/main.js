import Vue from 'vue' //es6标准导入写法
import App from './App.vue'
import router from "@/router";


Vue.config.productionTip = false

new Vue({
  router,//初始化router
  render: h => h(App),
}).$mount('#app')
