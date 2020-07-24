<template>
  <div class="moudle-title">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped lang="less">
@import url("../assets/css/style.less");

.moudle-title {
  margin: 48px 15px;
  text-align: center;
  .title {
    margin-bottom: 8px;
    color: @c-b;
    font-size: 28px;
  }
  .content {
    color: @c-g;
    font-size: 14px;
  }
}
</style>