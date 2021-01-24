<template>
  <van-button
    class="bv-button"
    :color="config.color"
    :disabled="config.disabled"
    :style="{
      width: `${config.width}px`,
      borderRadius: `${config.borderRadius}px`,
      fontSize: `${config.fontSize}px`,
      fontWeight: config.fontWeight,
      backgroundColor: config.backgroundColor
    }"
  >
    {{ config.text }}
  </van-button>
</template>

<script>
export default {
  name: "BvButton",
  props: {
    config: {
      type: Object,
      default: () => ({
        text: "按钮",
        width: 100,
        borderRadius: 10,
        fontSize: 14,
        fontWeight: 400,
        color: "#000000",
        backgroundColor: "#ffffff",
        disabled: false
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-button {
  display: inline-block;
  margin: 5px 0;
  padding: 0 20px;
  height: calc(100% - 10px);
  min-height: 20px;
}
</style>
