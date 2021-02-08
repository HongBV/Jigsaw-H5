<template>
  <div class="bv-icon">
    <i :class="config.type" :style="{ 'font-size': config.size + 'px' }"></i>
    <span :style="{ 'font-size': config.textSize + 'px' }">
      {{ config.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BvIcon",
  props: {
    config: {
      type: Object,
      default: () => ({
        type: "el-icon-edit",
        size: 24,
        text: "",
        textSize: 12
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
