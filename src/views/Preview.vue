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
          <p class="tip">🔖 手机扫码体验一下</p>
          <img class="qrcode" :src="qrcode" draggable="false" />
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
import QRCode from "qrcode";
import { saveAs } from "file-saver";
import { mapState } from "vuex";

export default {
  name: "Preview",
  components: {
    SimulationPhone
  },
  data() {
    return {
      qrcode: null
    };
  },
  computed: {
    ...mapState({
      page: state => state.editor.page
    })
  },
  created() {
    this.generateQR();
  },
  methods: {
    /**
     * 返回操作页
     */
    goback() {
      this.$router.push({ name: "OperatingFloor" });
    },
    /**
     * 发布页面
     */
    async publish() {
      const node = document.getElementById("page");
      domtoimage.toBlob(node).then(blob => saveAs(blob, "my-poster.png"));
    },
    /**
     * 生成二维码
     */
    async generateQR() {
      try {
        this.qrcode = await QRCode.toDataURL(
          "http://192.168.31.68:8080/#/page?id=3",
          {
            color: {
              dark: "#000000",
              light: "#f7f8fa"
            }
          }
        );
      } catch (err) {
        this.$message.error("二维码生成失败");
      }
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
