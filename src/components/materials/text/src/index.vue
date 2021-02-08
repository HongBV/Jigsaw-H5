<template>
  <p
    class="bv-text"
    :style="{
      fontSize: `${config.fontSize}px`,
      fontWeight: config.fontWeight,
      color: config.color
    }"
  >
    {{ config.text }}
  </p>
</template>

<script>
export default {
  name: "BvText",
  props: {
    config: {
      type: Object,
      default: () => ({
        text: "这是一段文本",
        fontSize: 14,
        fontWeight: 400,
        color: "#000000"
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
