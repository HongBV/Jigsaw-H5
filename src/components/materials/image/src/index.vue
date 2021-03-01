<template>
  <van-image
    class="bv-image"
    :src="config.url"
    :fit="config.fit"
    :radius="config.borderRadius"
    @click="handleClick"
  >
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
.bv-image {
  width: 100%;
  height: 100%;
}
</style>
