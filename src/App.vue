<template>
  <div>
    <navbar>
      <i class="iconfont icon-caidan" @click="isshow=!isshow" slot="index"></i>
      <i class="iconfont icon-ren" slot="person"></i>      
    </navbar>
    <section>    
    <router-view></router-view>
    </section>
    <transition name="changemoive">
      <asidebar v-show="isshow" @click="console.log(111)">
        <ul @click="isshow=!isshow">
          <router-link tag='li' to="/home">首页</router-link >
          <router-link tag='li' to="/movie">影片</router-link >
          <router-link tag='li' to="/cinema">影院</router-link >
          <router-link tag='li' to="/shop">商城</router-link >
          <router-link tag='li' to="/main">我的</router-link >
          <router-link tag='li' to="/card">卖座卡</router-link >
        </ul>
      </asidebar> 
    </transition>

  </div>
</template>


<script type="text/javascript">
  import Vue from "vue"
  import navbar from "./components/navbar"
  import asidebar from "./components/asidebar"
  import Router from "vue-router"
  export default{
    components:{
      navbar,
      asidebar
    },
    data(){
      return{
        isshow:false
      }
    }
  }
</script>
<style type="text/css" scoped>
  i{
    margin: 0 10px
  }
</style>
<style type="text/css">
  *{
    padding:0;
    margin:0;
  }
  .l{
    float: left;
  }
  .r{
    float: right;
  }
  section{
    position:absolute;
    top:50px;
    width:100%;
  }
  li{
    border-bottom: 1px solid #909090
  }
  .changemoive-enter-active{
    animation:changemoive .5s;
  }
  .changemoive-leave-active{
    animation: changemoive .5s reverse;
  }
  @keyframes changemoive{
    0%{
      transform: translateX(-100%);
    },
    100%{
      transform: translateX(0%);
    }
  }
</style>
