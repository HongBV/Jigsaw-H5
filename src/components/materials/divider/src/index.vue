<template>
  <van-divider
    class="bv-divider"
    :style="{
      color: config.color,
      borderColor: config.borderColor,
      padding: `0 ${config.padding}px`
    }"
    :content-position="config.contentPosition"
    :dashed="config.dashed"
  >
    <span v-if="config.showText">{{ config.text }}</span>
  </van-divider>
</template>

<script>
export default {
  name: "BvDivider",
  props: {
    config: {
      type: Object,
      default: () => ({
        showText: false,
        dashed: false,
        contentPosition: "center",
        color: "#CCCCCC",
        borderColor: "#CCCCCC",
        padding: 0
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-divider {
  margin: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
