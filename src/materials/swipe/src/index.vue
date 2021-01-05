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
          "https://i0.hdslb.com/bfs/archive/441880fbbe88130a20a94a6e0b8512508f0499da.png@880w_388h_1c_95q",
          "https://i0.hdslb.com/bfs/archive/7935651568e55bbd523f0a96d48869257c873910.jpg@880w_388h_1c_95q",
          "https://i0.hdslb.com/bfs/archive/bb8338d370cc5b68a37e2c6bf2ee1510fb323c7e.jpg@880w_388h_1c_95q"
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
