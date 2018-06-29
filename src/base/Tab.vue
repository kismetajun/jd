<template>
    <div class="nav">
      <router-link to="/minapp/home">首页</router-link>
      <router-link to="/minapp/classify">分类</router-link>
      <router-link to="/minapp/found">发现</router-link>
      <router-link to="/buy">收藏</router-link>
      <router-link to="/minapp/me">我</router-link>
    </div>
</template>

<script>

    export default {
        name: "Classify"
    }
</script>

<style scoped>
.nav{ position: fixed;height: 50px;background: white; bottom: 0px; left: 0px; width: 100%;display: flex;line-height: 50px}
 .nav a{display: flex;flex: 1;align-items: center;justify-items: center;text-align: center; flex-direction: column;}
</style>
