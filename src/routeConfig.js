import Home from './components/Home.vue'
import News from './components/News.vue'
import User from './components/User.vue'
import Com404 from './components/Com404.vue'

// 配置
const routes=[{
    path:'/home',
    component:Home
  },{
    path:'/news',
    component:News
  },{
    path:'/user',
    component:User
  },{
    //定义默认页面
    path:'/',//如果路径是在根目录底下
    redirect:'/home', //重定向redirect,指向home页面
  },{
    //定义404页面
    path:'*',//检索所有页面路径
    component:Com404
    
  }]


  export default routes