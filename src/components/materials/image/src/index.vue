<template>
  <van-image
    class="bv-image"
    :src="config.url"
    :fit="config.fit"
    :radius="config.borderRadius"
    @click="handleClick"
  >
    <p
      v-if="config.showTitle"
      class="title"
      :style="{
        color: config.color,
        fontSize: config.fontSize + 'px',
        transform: `translate(calc(-50% + ${config.x}px), calc(-50% + ${config.y}px))`
      }"
    >
      {{ config.title }}
    </p>
  </van-image>
</template>

<script>
export default {
  name: "BvImage",
  props: {
    config: {
      type: Object,
      default: () => ({
        url: "https://img01.yzcdn.cn/vant/tree.jpg",
        fit: "cover",
        borderRadius: 0,
        hyperlink: false,
        targetUrl: "",
        showTitle: true,
        title: "",
        color: "#f0f0f0",
        fontSize: 14,
        x: 0,
        y: 0
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
.bv-image {
  position: relative;
  width: 100%;
  height: 100%;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    text-align: center;
  }
}
</style>
