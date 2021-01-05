<template>
  <div class="toolbar">
    <div class="toolbar__item" @click="toggleFullScreen">全屏</div>
    <div class="toolbar__item" @click="clearPage">清空</div>
  </div>
</template>

<script>
export default {
  methods: {
    // 切换全屏状态
    toggleFullScreen() {
      const isFull = !!(
        window.fullScreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenEnabled
      );
      isFull ? this.exitFullscreen() : this.fullScreen();
    },
    // 全屏
    fullScreen() {
      var element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }
    },
    // 退出全屏
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    // 清空页面
    clearPage() {
      this.$emit("clearPage");
    }
  }
};
</script>

<style scoped lang="scss">
.toolbar {
  position: fixed;
  top: 10px;
  left: 50%;
  display: flex;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #ffffff;
  transform: translateX(-50%);
  &__item {
    width: 60px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
