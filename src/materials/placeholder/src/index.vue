<template>
  <div
    class="bv-placeholder"
    :style="{
      height: `${config.height}px`,
      backgroundColor: config.backgroundColor
    }"
  ></div>
</template>

<script>
export default {
  name: "BvPlaceholder",
  props: {
    config: {
      type: Object,
      default: () => ({
        height: 50,
        backgroundColor: "#ffffff"
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
