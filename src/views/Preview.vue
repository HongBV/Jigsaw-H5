<template>
  <div class="preview">
    <section class="section__left">
      <div class="toolbar">
        <p class="logo">Jigsaw-H5</p>
        <p class="slogan">让页面搭建如拼凑拼图般简单</p>
        <div class="btn-group">
          <el-button @click="goback" type="info" round>返 回</el-button>
          <el-button @click="generatePoster" type="success" round>
            生成海报
          </el-button>
        </div>
        <div class="scan-qrcode">
          <p class="tip">🔖 手机扫码体验一下</p>
          <img class="qrcode" :src="qrcode" draggable="false" />
        </div>
      </div>
    </section>
    <section class="section__right">
      <simulation-phone />
    </section>
  </div>
</template>

<script>
import SimulationPhone from "@/components/preview/simulation-phone";
import domtoimage from "dom-to-image";
import QRCode from "qrcode";
import { saveAs } from "file-saver";
import { getPageById } from "@/api/page";
import { mapMutations } from "vuex";

export default {
  name: "Preview",
  components: {
    SimulationPhone
  },
  data() {
    return {
      pageId: null,
      qrcode: null
    };
  },
  created() {
    this.pageId = this.$route.query.id;
    if (!this.pageId) {
      this.$message({
        message: "预览失败,2S后将自动跳转至首页",
        type: "error",
        duration: 2000,
        onClose: () => {
          this.$router.replace({ name: "Dashboard" });
        }
      });
    }
    this.fetchPage(this.pageId);
    this.generateQR();
  },
  methods: {
    ...mapMutations(["setPage", "setPageId"]),
    /**
     * 获取页面数据
     */
    async fetchPage(id) {
      const { data } = await getPageById(id);
      this.setPage(JSON.parse(data.page));
      this.setPageId(id);
    },
    /**
     * 返回操作页
     */
    goback() {
      this.$router.push({ name: "OperatingFloor", query: { id: this.pageId } });
    },
    /**
     * 生成海报
     */
    async generatePoster() {
      const node = document.getElementById("page");
      domtoimage.toBlob(node).then(blob => saveAs(blob, "poster.png"));
    },
    /**
     * 生成二维码
     */
    async generateQR() {
      const url = `http://192.168.1.101:8080/#/page?id=${this.pageId}`;
      const options = { color: { dark: "#000000", light: "#f7f8fa" } };
      try {
        this.qrcode = await QRCode.toDataURL(url, options);
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
