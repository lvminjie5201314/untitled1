/*公共过滤器*/

import Vue from 'vue';

Vue.filter('actorsfilter',(data)=>{
    console.log(data);
    //如果没有演员
    if(!data){
        return "暂无主演";
    }
    /*把演员数组弄成map。*/
    var result = data.map(item=>item.name);
    /*join方法处理数据
    * 去掉[], 去掉,
    * */
    return result.join(" ");
});