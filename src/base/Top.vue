<template>
  <div class="box">
    <div style="width: 40px;height: 45px; z-index: 999; text-align: center;line-height: 45px"><i @click="back" class="iconfont icon-fanhui"></i></div>
    <slot></slot>
    <div style="width: 58px; z-index:999;height: 45px;text-align: center;line-height: 45px;"><i class="iconfont icon-eclips-horizonal-copy"></i></div>
  </div>
</template>

<script>
    export default {
        name: "Top",
      methods:{
          back(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>
  .box{ display: flex;height:45px; z-index:999;line-height: 45px;width: 100%;background: white;position: fixed;top: 0px;left: 0px }
.icon-fanhui{ font-size: 20px}
.icon-eclips-horizonal-copy{ font-size: 45px; color:#666;text-align: center;margin-top: 10px; position: fixed;right: 0px;top: -20px}
</style>
