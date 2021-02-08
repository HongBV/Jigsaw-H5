<template>
  <div
    class="bv-placeholder"
    :style="{
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
        backgroundColor: "#fafafa"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-placeholder {
  height: 100%;
}
</style>
