<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>我的vue</h2>
    <input type="text" v-model="mytext"/>
    <button type="button" @click="handclick()">add</button>
    <ul id="text-ul">
      <li v-for="data in datalist" :key="data">
        {{data}}<button type="button">del</button>
      </li>
    </ul>
    <child1 myname="来自父组件的问候"><br>
      <slot>slot演示</slot>
    </child1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Child1 from "@/components/Child1";


export default {
  data(){
    return{
      mytext:'11111111',
      datalist:[]
    }
  },
  name: 'App',
  components: {
    Child1,
    HelloWorld
  },
  methods:{
    handclick(){
      this.datalist.push(this.mytext);
    }
  }
}
</script>

<style scoped>
  #text-ul li{
    list-style: none;
    background-color: red;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

