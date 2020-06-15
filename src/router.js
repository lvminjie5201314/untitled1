import Vue from 'vue'
import VueRouter from 'vue-router'


import Film from '@/view/Film'
import Cinema from '@/view/Cinema'
import Center from '@/view/Center'
import Detail from '@/view/Detail'
import Login from '@/view/Login'
import Comingsoon from '@/view/Film/Comingsoon'
import Nowplaying from '@/view/Film/Nowplaying'
Vue.use(VueRouter)//安装路由

//router-view，加到App.Vue中
const router = new VueRouter({
    //mode:'history',
    //base:process.env.BASE_URL,

    routes:[
        {
            path:'/film',
            name:'film',
            component:Film,
            children:[   //孩子组件2个
                {
                    path:'nowplaying',
                    component:Nowplaying
                },
                {
                    path: 'comingsoon',
                    component: Comingsoon
                },
                {
                    path: '', //直接打film地址。就重定向到nowplaying
                    redirect: '/film/nowplaying'
                }
            ]
        },
        {
            path:'/cinema',
            name:'cinema',
            component:Cinema
        },
        {
            path:'/center',
            name:'center',
            component:Center
        },
        {   //动态路由
            path:'/detail/:id',//可以传参的跳转。id占位符
            name:'detail',
            component: Detail
        },
        {
            path:'/login',//未登录就去login
            name:'login',
            component: Login
        },
        {
            path: '/',   //直接打根路径，就重定向到film页面
            redirect: '/film'   //根路径重定向
        }

    ]

});

//模拟用户没登陆
const user = {
    islogin(){
        return false
    }
}

//路由守卫,拦截
router.beforeEach((to, from, next) => {
    //拦截
    if(to.path==='/center'){
        if(user.islogin()){
            next();
        }else {
            next('/login');//去登陆页
        }
    }else {
        next();
    }
});

export default router;

