import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//CHANGE_TABBER_STATE_AS_MUTATION通过常量来控制。提高可维护性
import {CHANGE_TABBER_STATE_AS_MUTATION} from '@/status/status'
Vue.use(Vuex)


//这是一个公共状态管理。


export default new Vuex.Store({
    //状态
    state: {
        //改变状态。显示，隐藏底部导航
        isTabberShow: true,
        comingsoonlist:[],

    },
    //记录状态，修改状态
    mutations:{
        //改变状态，控制显示隐藏底部导航栏
        //CHANGE_TABBER_STATE_AS_MUTATION通过常量来控制。提高可维护性
        [CHANGE_TABBER_STATE_AS_MUTATION](state,payload){
            state.isTabberShow = payload;
        },
        //缓存数据。从ajax获取而来
        comingsoonlist(state,payload){
            state.comingsoonlist = payload;
        }
    },
    //异步
    actions:{
        //方法快照缓存
        GetComingSoonAction(store){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=7019585",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159099352078198469558273","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log("调用了："+res);
                //提交给mutations   做缓存
                store.commit("comingsoonlist",res.data.data.films);
            })
        }

    },
    //过滤器。数据处理
    getters:{
        filterComingsoonList(state){
            return state.comingsoonlist.filter((item,index)=>index<5);
        }
    }


})

