import Vue from 'vue' //es6标准导入写法
import App from './App.vue'
import router from "./router"
import store from './store'
import 'jquery'//引入jq
//引入pc端的组件库
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)//注册elementui

//引入移动端的组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入vue-touch
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})


Vue.config.productionTip = false

new Vue({
  router:router,//初始化router
  store:store,//公共管理状态。调试代码，
  render: h => h(App),
}).$mount('#app')
