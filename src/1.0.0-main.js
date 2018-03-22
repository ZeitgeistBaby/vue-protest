import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import News from './components/News.vue'

Vue.use(Router)
// 配置
const routes=[{
  path:'/home',
  component:Home
},{
  path:'/news',
  component:News
}]

//生成路由
const router=new Router({
  routes
})

//应用路由
new Vue({
  el:'#app',
  router,
  render:h => h(App)
})

