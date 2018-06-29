<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{padding: 0;margin: 0}
  a{text-decoration: none}
li{ list-style: none}
.router-link-active{ color: red}
.swiper-pagination-bullet-active{background: #e4393c}
</style>
