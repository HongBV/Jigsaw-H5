<template>
  <van-button
    class="bv-button"
    :type="config.type"
    :disabled="config.disabled"
    :plain="config.plain"
    :style="{
      height: `${config.height}px`,
      width: `${config.width}px`,
      borderRadius: `${config.borderRadius}px`,
      fontSize: `${config.fontSize}px`,
      fontWeight: config.fontWeight
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
        height: 36,
        borderRadius: 10,
        fontSize: 14,
        fontWeight: 400,
        type: "default",
        plain: false,
        disabled: false
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-button {
  margin: 5px 0;
  padding: 0 10px;
}
</style>
