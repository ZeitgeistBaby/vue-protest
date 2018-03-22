<template>
<!-- 加动画时，注意每个组件都需要加一个class=animated -->
  <div id="404" class="animated box-position">
      <h2>404  not found</h2>
  </div>
</template>
<script>
  export default{
    //404页面自动跳转至首页
    mounted(){
      setTimeout(() => {
        this.$router.replace('./Home')
      },1000)
    }
  }
</script>
