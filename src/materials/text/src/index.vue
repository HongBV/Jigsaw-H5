<!--button.vue-->
<template>
  <p class="bv-text">
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
        text: "这是一段文本"
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
