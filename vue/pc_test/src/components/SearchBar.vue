<template>
  <div class="search-bar">
    <input type="text" placeholder="名称/拼音字母" />
    <i class="iconfont icon-icon-search"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/less/global.less";
* {
  margin: 0;
  padding: 0;
}
.search-bar {
  padding: @btn-tb @btn-lr;
  border: 1px solid #949292;
  border-radius: 2px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border: none;
  }
  i {
    &::before {
      font-size: 16px;
    }
  }
}
</style>