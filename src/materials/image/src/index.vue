<template>
  <el-image
    class="bv-image"
    :src="config.url"
    :fit="'cover'"
    :style="{
      borderRadius: `${config.borderRadius}px`
    }"
  >
  </el-image>
</template>

<script>
export default {
  name: "BvImage",
  props: {
    config: {
      type: Object,
      default: () => ({
        url:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        borderRadius: 0
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-image {
  width: 100%;
}
</style>
