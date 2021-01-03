<template>
  <el-button
    class="bv-button"
    :style="{
      width: `${config.width}px`,
      borderRadius: `${config.borderRadius}px`,
      fontSize: `${config.fontSize}px`,
      fontWeight: config.fontWeight,
      color: config.color,
      backgroundColor: config.backgroundColor
    }"
  >
    {{ config.text }}
  </el-button>
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
        backgroundColor: "#ffffff"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-button {
  display: inline-block;
  margin: 5px 0;
}
</style>
