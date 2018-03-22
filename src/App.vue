<template>
  <div>
    <div class="link-box">
      <router-link  to="/home">主页</router-link>
      <router-link  to="/news"> 新闻</router-link>
      <router-link  to="/user"> 用户</router-link>
    </div>
    <div class="router-view">
      <transition  enter-active-class="slideInLeft" leave-active-class="slideOutRight">      
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<style lang="scss" >
h3{
  $color:#ccc;
  background: $color;
  }
.router-view{
  
}
.box-position{
  width: 100%;
  position: absolute;
  top:30px;
  left: 0;
}
.link-box{
  a{
    color:#399
  }
  a.router-link-active{
    color:red;
    text-decoration: none;
    font-size:20px;
  }
}

</style>
