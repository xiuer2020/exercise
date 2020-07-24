<template>
  <div class="base-flex" :style="{justifyContent: jc, flexWrap: fxw, alignItems: ai, display: 'flex'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  ame: "flex",
  props: {
    jc: {
      type: String,
      default: 'space-between'
    },
    fxw: {
      type: String,
      default: 'nowrap'
    },
    ai: {
      type: String,
      default: 'center'
    }
  }
};
</script>

<style>

</style>