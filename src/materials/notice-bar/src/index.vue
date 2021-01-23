<template>
  <van-notice-bar
    class="bv-notoce-bar"
    left-icon="volume-o"
    :text="config.text"
    :scrollable="config.scrollable"
    :wrapable="config.wrapable"
    :speed="config.speed"
    :color="config.color"
    :background="config.background"
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
}
</style>
