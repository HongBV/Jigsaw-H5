<template>
  <van-swipe :autoplay="config.interval" ref="swipe" class="swipe">
    <van-swipe-item v-for="(image, index) in config.images" :key="index">
      <img :src="image" draggable="false" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "BvSwipe",
  props: {
    config: {
      type: Object,
      default: () => ({
        interval: 3000,
        images: [
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        ]
      })
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.swipe.resize();
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
.swipe {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
