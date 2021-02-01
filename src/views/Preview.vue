<template>
  <div class="preview">
    <section class="section__left">
      <div class="toolbar">
        <p class="logo">Jigsaw-H5</p>
        <p class="slogan">让页面搭建如拼凑拼图般简单</p>
        <div class="btn-group">
          <el-button @click="goback" type="info" round>返 回</el-button>
          <el-button @click="publish" type="success" round>发 布</el-button>
        </div>
        <div class="scan-qrcode">
          <p class="tip">手机扫码可预览实际效果</p>
          <el-image class="qrcode">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </div>
    </section>
    <section class="section__right">
      <simulation-phone></simulation-phone>
    </section>
  </div>
</template>

<script>
import SimulationPhone from "@/components/preview/simulation-phone";
import domtoimage from "dom-to-image";
import { saveAs } from 'file-saver';
import { mapState } from "vuex";

export default {
  name: "Preview",
  components: {
    SimulationPhone
  },
  computed: {
    ...mapState({
      page: state => state.editor.page
    })
  },
  methods: {
    goback() {
      this.$router.push({ name: "OperatingFloor" });
    },
    publish() {
      const node = document.getElementById("page");
      domtoimage.toBlob(node).then(function(blob) {
        saveAs(blob, "my-poster.png");
      });
      // todo: 待后端接口实现
    }
  }
};
</script>
<style scoped lang="scss">
.preview {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #f7f8fa;
  .section {
    &__left {
      position: relative;
      flex: 1;
      .toolbar {
        position: absolute;
        top: 50%;
        left: 80%;
        height: 500px;
        width: 300px;
        transform: translate(-50%, -50%);
        .logo {
          margin: 20px 0 10px;
          font-size: 38px;
        }
        .slogan {
          margin-bottom: 50px;
          font-size: 20px;
        }
        .btn-group {
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          .el-button {
            width: 100px;
            font-weight: 500;
          }
        }
        .scan-qrcode {
          margin-top: 50px;
          .tip {
            margin-bottom: 10px;
            font-size: 13px;
            color: #bbbbbb;
            user-select: none;
          }
          .qrcode {
            display: block;
            margin: 0 auto;
            height: 150px;
            width: 150px;
            ::v-deep.image-slot {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
              background: #dddddd;
              color: #909399;
            }
          }
        }
      }
    }
    &__right {
      position: relative;
      flex: 2;
    }
  }
  p {
    margin: 0;
    text-align: center;
  }
}
</style>
