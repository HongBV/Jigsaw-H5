<template>
  <div class="icon-select">
    <header>
      <span class="title">图标库</span>
      <el-select class="style-select" v-model="style" size="mini">
        <el-option label="实体" value="solid"></el-option>
        <el-option label="线框" value="outline"></el-option>
      </el-select>
    </header>
    <ul class="icon-list">
      <li
        v-for="(icon, index) in iconList"
        :key="index"
        @click="selectItem(icon)"
      >
        <i :class="icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
const outlineIcons = [
  "el-icon-delete",
  "el-icon-setting",
  "el-icon-user",
  "el-icon-phone-outline",
  "el-icon-more-outline",
  "el-icon-star-off",
  "el-icon-goods",
  "el-icon-warning-outline",
  "el-icon-zoom-in",
  "el-icon-zoom-out",
  "el-icon-remove-outline",
  "el-icon-circle-plus-outline",
  "el-icon-circle-check",
  "el-icon-circle-close",
  "el-icon-help",
  "el-icon-minus",
  "el-icon-plus",
  "el-icon-check",
  "el-icon-close",
  "el-icon-picture-outline",
  "el-icon-picture-outline-round",
  "el-icon-upload2",
  "el-icon-download",
  "el-icon-camera",
  "el-icon-video-camera",
  "el-icon-bell",
  "el-icon-c-scale-to-original",
  "el-icon-date",
  "el-icon-edit",
  "el-icon-edit-outline"
];
const solidIcons = [
  "el-icon-delete-solid",
  "el-icon-s-tools",
  "el-icon-user-solid",
  "el-icon-phone",
  "el-icon-more",
  "el-icon-star-on",
  "el-icon-s-goods",
  "el-icon-warning",
  "el-icon-question",
  "el-icon-info",
  "el-icon-remove",
  "el-icon-circle-plus",
  "el-icon-success",
  "el-icon-error",
  "el-icon-s-help",
  "el-icon-picture",
  "el-icon-upload",
  "el-icon-camera-solid",
  "el-icon-video-camera-solid",
  "el-icon-message-solid",
  "el-icon-s-cooperation",
  "el-icon-s-order",
  "el-icon-s-platform",
  "el-icon-s-fold",
  "el-icon-s-unfold",
  "el-icon-s-operation",
  "el-icon-s-promotion",
  "el-icon-s-home",
  "el-icon-s-release",
  "el-icon-s-ticket"
];
export default {
  name: "IconSelect",
  props: {
    icon: {
      type: String,
      default: "el-icon-edit"
    }
  },
  data() {
    return {
      style: "outline"
    };
  },
  computed: {
    iconList() {
      return this.style === "solid" ? solidIcons : outlineIcons;
    }
  },
  methods: {
    /**
     * 选择一项
     * @param {string} type
     */
    selectItem(type) {
      this.$emit("modifyProp", type);
    }
  }
};
</script>
<style scoped lang="scss">
.icon-select {
  width: 100%;
  header {
    margin: 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 600;
    }
    .style-select {
      width: 75px;
      ::v-deep input {
        border-radius: 15px;
      }
    }
  }
  .icon-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 5px;
    grid-column-gap: 5px;
    li i {
      display: block;
      font-size: 24px;
      margin-bottom: 15px;
      color: #606266;
      text-align: center;
      cursor: pointer;
      transition: color 0.15s linear;
      &:hover {
        color: #006aff;
      }
    }
  }
}
</style>
