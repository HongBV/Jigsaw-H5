<template>
  <div class="toolbar">
    <div class="toolbar__item" @click="toggleFullScreen">
      <i class="el-icon-full-screen"></i>
    </div>
    <div class="toolbar__item" @click="savePage">
      <i class="el-icon-upload2"></i>
    </div>
    <div class="toolbar__item" @click="preview">
      <i class="el-icon-mobile-phone"></i>
    </div>
    <div class="toolbar__item" @click="clearPage">
      <i class="el-icon-delete"></i>
    </div>
    <div class="toolbar__item" @click="showHelpTip">
      <i class="el-icon-magic-stick"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { updatePage } from "@/api/page";
export default {
  name: "PropsEdit",
  computed: {
    ...mapState({
      page: state => state.editor.page,
      pageId: state => state.editor.pageId
    })
  },
  methods: {
    ...mapMutations(["setPage", "resetCurrentMaterial"]),
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
    // 保存页面
    async savePage() {
      const data = await updatePage(this.pageId, { page: this.page }).then(
        res => res.data
      );
      if (!data) return;
      this.$message({
        message: "保存成功",
        type: "success",
        duration: 800
      });
    },
    // 预览
    async preview() {
      await updatePage(this.pageId, { page: this.page });
      this.$router.push({ name: "Preview", query: { id: this.pageId } });
    },
    // 清空页面
    clearPage() {
      this.setPage([]);
      this.resetCurrentMaterial();
    },
    // 展示帮助提示
    showHelpTip() {}
  }
};
</script>

<style scoped lang="scss">
.toolbar {
  position: absolute;
  top: 10px;
  left: 50%;
  display: flex;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #ffffff;
  transform: translateX(-50%);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  z-index: 10;
  &__item {
    width: 40px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: rgb(47, 84, 235);
    }
  }
}
</style>
