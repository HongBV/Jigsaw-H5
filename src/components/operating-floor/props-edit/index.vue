<template>
  <div class="props-edit">
    <p>属性设置</p>
    <template v-for="(editItem, idx) in currentMaterial.editData">
      <div v-if="editItem.type === 'Text'" class="text-input" :key="idx">
        <span class="title">{{ editItem.name }}</span>
        <el-input
          class="input"
          v-model="currentMaterial.config[editItem.key]"
          placeholder="请输入内容"
        ></el-input>
      </div>
    </template>
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
  padding: 10px 20px;
  .text-input {
    display: flex;
    align-items: center;
    .title {
      flex: 1;
    }
    .input {
      flex: 5;
    }
  }
}
</style>
