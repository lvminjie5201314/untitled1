import Vue from 'vue' //es6标准导入写法
import App from './App.vue'
import router from "./router";
import store from './store';

Vue.config.productionTip = false

new Vue({
  router:router,//初始化router
  store:store,//公共管理状态。调试代码，
  render: h => h(App),
}).$mount('#app')
