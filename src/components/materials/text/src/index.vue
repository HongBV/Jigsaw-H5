<template>
  <div
    class="bv-text"
    :style="{
      fontSize: `${config.fontSize}px`,
      fontWeight: config.fontWeight,
      color: config.color,
      justifyContent: config.justifyContent,
      alignItems: config.alignItems
    }"
  >
    <span @click="handleClick">{{ config.text }}</span>
  </div>
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
        color: "#000000",
        justifyContent: "center",
        alignItems: "center",
        hyperlink: false,
        targetUrl: ""
      })
    }
  },
  methods: {
    handleClick() {
      if (this.config.hyperlink) {
        window.open(this.config.targetUrl);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-text {
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
