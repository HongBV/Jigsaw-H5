<template>
  <van-swipe :autoplay="config.interval">
    <van-swipe-item v-for="(image, index) in config.images" :key="index">
      <img :src="image" />
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
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  object-fit: cover;
}
</style>
