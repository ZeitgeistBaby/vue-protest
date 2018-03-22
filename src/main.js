import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router' //下载vue-router 路由,在项目根目录下 npm install vue-router -D
import VueResource from 'vue-resource' //下载vue-resource 交互,在项目根目录下 npm install vue-resource -D
import routes from './routeConfig' //新建一个自己封装的配置文件
import 'animate.css' //引入css文件


Vue.use(Router)
Vue.use(VueResource)



//生成路由
const router=new Router({
  //默认状态下是hash mode
  // mode:'history',//更改为history模式，注意浏览器路径上的#号不见了，表示个有历史记录的模式，公司中常用
  routes
})

//应用路由
new Vue({
  el:'#app',
  router,    
  render:h => h(App)
})

