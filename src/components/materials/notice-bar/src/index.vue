<template>
  <van-notice-bar
    class="bv-notoce-bar"
    :left-icon="config.showIcon ? 'volume-o' : ''"
    :text="config.text"
    :scrollable="config.scrollable"
    :wrapable="config.wrapable"
    :speed="config.speed"
    :color="config.color"
    :background="config.background"
    :style="{
      padding: `8px ${config.padding}px`,
      fontSize: `${config.fontSize}px`
    }"
  />
</template>

<script>
export default {
  name: "BvNotoceBar",
  props: {
    config: {
      type: Object,
      default: () => ({
        text: "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
        scrollable: true,
        wrapable: false,
        speed: 50,
        padding: 8,
        showIcon: true,
        fontSize: 14,
        color: "#ff6600",
        background: "#fff7cc"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-notoce-bar {
  width: 100%;
  box-sizing: border-box;
  ::v-deep.van-notice-bar__content {
    transition-property: transform;
  }
}
</style>
