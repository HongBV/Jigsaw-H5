<template>
  <div class="props-edit">
    <h2>属性设置</h2>
    <div
      class="text-input"
      v-for="(editItem, idx) in currentMaterial.editData"
      :key="idx"
    >
      <span class="title">{{ editItem.name }}</span>
      <el-input
        v-if="['Text', 'Number', 'Color'].includes(editItem.type)"
        class="input"
        v-model="currentMaterial.config[editItem.key]"
        :label="editItem.name"
        :type="editItem.type"
      ></el-input>
      <el-switch
        v-if="editItem.type === 'Switch'"
        v-model="currentMaterial.config[editItem.key]"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PropsEdit",
  components: {},
  computed: {
    ...mapState({
      currentMaterial: state => state.editor.currentMaterial
    })
  }
};
</script>
<style scoped lang="scss">
.props-edit {
  padding: 20px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
  h2 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }
  .text-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      width: 60px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      color: #4a4a4a;
    }
    .input {
      width: auto;
      ::v-deep.el-input__inner {
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        &[type="Text"] {
          width: 200px;
        }
        &[type="Number"] {
          width: 70px;
          padding-right: 0;
        }
        &[type="Color"] {
          width: 70px;
          padding: 0 3px;
        }
      }
    }
  }
}
</style>
