<template>
  <div class="bv-icon" @click="handleClick">
    <van-icon
      :name="config.type"
      :size="config.size"
      :color="config.color"
      :badge="config.badge"
      :dot="config.dot"
    />
    <span :style="{ 'font-size': config.textSize + 'px', color: config.color }">
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
        type: "location-o",
        size: 24,
        color: "#323233",
        badge: "",
        dot: false,
        text: "",
        textSize: 12,
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
.bv-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
