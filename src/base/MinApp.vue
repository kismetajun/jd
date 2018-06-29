<template>
    <div>
    <router-view></router-view>
      <tab></tab>
    </div>
</template>

<script>
  import Tab from './Tab'
  export default {
        name: "MinApp",
        components:{
           Tab
        }
    }
</script>

<style scoped>

</style>
