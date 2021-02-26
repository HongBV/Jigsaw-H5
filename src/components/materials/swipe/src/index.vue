<template>
  <van-swipe
    ref="swipe"
    class="swipe"
    :autoplay="config.interval"
    :vertical="config.vertical"
    :touchable="config.touchable"
    :show-indicators="config.showIndicators"
  >
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
        vertical: false,
        touchable: true,
        showIndicators: true,
        interval: 3000,
        images: [
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
          "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
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
