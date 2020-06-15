import Vue from 'vue';

Vue.filter('gradeFilter',(data)=>{
    //console.log(data);
    //如果没有演员
    if(data){
        return data+'分';
    }else {
        return "暂无评分"
    }

});