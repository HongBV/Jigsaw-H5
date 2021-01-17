<template>
  <div class="toolbar">
    <el-tooltip content="全屏" placement="bottom">
      <div class="toolbar__item" @click="toggleFullScreen">
        <i class="el-icon-full-screen"></i>
      </div>
    </el-tooltip>
    <el-tooltip content="保存" placement="bottom">
      <div class="toolbar__item" @click="savePage">
        <i class="el-icon-folder-checked"></i>
      </div>
    </el-tooltip>
    <el-tooltip content="新建页面" placement="bottom">
      <div class="toolbar__item">
        <i class="el-icon-folder-add"></i>
      </div>
    </el-tooltip>
    <el-tooltip content="清空页面" placement="bottom">
      <div class="toolbar__item" @click="clearPage">
        <i class="el-icon-delete"></i>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PropsEdit",
  computed: {
    ...mapState({
      page: state => state.editor.page
    })
  },
  methods: {
    ...mapMutations(["resetPage"]),
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
    savePage() {
      localStorage.setItem("page", JSON.stringify(this.page));
      this.$message({
        message: "保存成功",
        type: "success"
      });
    },
    // 清空页面
    clearPage() {
      this.resetPage();
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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  &__item {
    width: 40px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
