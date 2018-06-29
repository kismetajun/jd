// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入插件
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//导入组件
import MinApp from './base/MinApp'
import Home from './components/Home'
import Classify from './components/Classify'
import Found from './components/Found'
import Buy from './components/Buy'
import Me from './components/Me'
import Detail from './base/Detail'
import One from './components/One'
import Bottom from './base/Bottom'
import Collect from './components/Collect'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
const router=new VueRouter({
  routes:[
    {path:'/',redirect:'/minapp'},
    {path:'/bottom',component:Bottom,name:'bottom'},
    {path:'/detail',component:Detail,name:'detail'},
    {path:'/buy',component:Buy,name:'buy'},
    {path:'/minapp',component:MinApp,children:[
      {path:'home',component:Home},
        {path:'classify',component:Classify,children:[
          {path:'one',component:One},
            {path:'',redirect:'one'}]},
        {path:'found',component:Found},
        {path:'me',component:Me},
        {path:'',component:Home}]},
    ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
