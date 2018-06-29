<template>
  <div class="classify">
    <!--<ul><a  v-for="m in msg" to="" @click="get(m.id)">{{m.title}}</a></ul>-->
    <!--<div class="container">-->
      <!--<div v-for="img in imgs" class="minbox">-->
        <!--<img :src="img.src" alt="">-->
        <!--<p>{{img.title}}</p>-->
      <!--</div>-->
    <!--</div>-->
    <LeftNav/>
    <router-view></router-view>
  </div>
</template>

<script>
  import LeftNav from './LeftNav'
  import {getNav,getHotImg} from "../api/getData";
  import Detail from '../base/Detail'
  export default {
        name: "Classify",
    components:{
          Detail,
      LeftNav
    },
    data(){
          return {
            msg:[],
            imgs:[]
          }
    },
      methods:{
          getLeftNav(){
            getNav().then(res=>{
              this.msg=res.data
            }).catch(err=>{
              console.log('服务器繁忙'+err)
            })
          },
        get(){
            getHotImg().then(res=>{
              this.imgs=res.data
            }).catch(err=>{console.log('服务器繁忙'+err)})
        }
      },
      created(){
            this.getLeftNav()
      }
    }
</script>

<style scoped>
  ul{width: 25%;background: #f8f8f8; display: inline-block;float: left}
ul a{ line-height: 46px;height: 46px; display: block; text-align: center;font-size: 14px;color: #333}
  .router-link-active{ color: red}
  /*.classify{ margin-bottom: 50px}*/
  /*.container{ width: 75%;display: inline-block;float: left; box-sizing: border-box;padding: 7px 10px 0px}*/
  /*.container img{ width: 50%}*/
  /*.container{}*/
  /*.minbox{ width: 33.3%;float: left;text-align: center}*/
  /*.minbox p{ height: 35px; font-size: 12px;margin-top: 2px}*/
</style>
