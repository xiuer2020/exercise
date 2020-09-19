<template>
  <div id="app" @touchstart.stop="touchstart" @touchend.stop="touchend">
    <router-view></router-view>
    <!-- 一级路由出口 -->
  </div>
</template>
<script>

export default {
  
};
</script>
<style lang="less">
</style>
