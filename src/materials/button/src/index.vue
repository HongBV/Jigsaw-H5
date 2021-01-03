<!--button.vue-->
<template>
  <el-button class="bv-button">
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
        text: "按钮"
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
