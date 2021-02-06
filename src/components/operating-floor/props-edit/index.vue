<template>
  <div class="props-edit">
    <header>
      属性设置
      <span v-if="currentMaterial.name && currentMaterial.name">
        - {{ currentMaterial.name }}
      </span>
    </header>
    <section v-if="editable">
      <div
        class="text-input"
        v-for="(editItem, idx) in currentMaterial.editData"
        :key="idx"
      >
        <span class="label" v-if="editItem.type !== 'Form'">
          {{ editItem.name }}
        </span>
        <el-input
          v-if="['Text', 'Color'].includes(editItem.type)"
          class="input"
          v-model="currentMaterial.config[editItem.key]"
          :type="editItem.type"
        ></el-input>
        <el-input-number
          v-if="editItem.type === 'Number'"
          v-model="currentMaterial.config[editItem.key]"
          size="small"
          :step="editItem.step"
          :max="editItem.max"
          :min="editItem.min"
          step-strictly
        ></el-input-number>
        <el-switch
          v-if="editItem.type === 'Switch'"
          v-model="currentMaterial.config[editItem.key]"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
        <el-select
          v-if="editItem.type === 'Select'"
          class="select"
          v-model="currentMaterial.config[editItem.key]"
          size="small"
          placeholder="请选择"
        >
          <el-option
            v-for="item in editItem.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <form-edit
          v-if="editItem.type === 'Form'"
          :form="currentMaterial.config[editItem.key]"
        />
      </div>
    </section>
    <section v-else>
      <p>选择组件后即可编辑</p>
    </section>
    <footer v-if="editable">
      <el-button @click="copyItem" type="primary" round plain>复 制</el-button>
      <el-button @click="deleteItem" type="danger" round plain>删 除</el-button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FormEdit from "@/components/operating-floor/form-edit";
export default {
  name: "PropsEdit",
  components: {
    FormEdit
  },
  computed: {
    ...mapState({
      page: state => state.editor.page,
      currentMaterial: state => state.editor.currentMaterial
    }),
    editable() {
      return this.currentMaterial.editData;
    }
  },
  methods: {
    ...mapMutations(["deleteMaterial", "addMaterial", "resetCurrentMaterial"]),
    deleteItem() {
      this.deleteMaterial(this.currentMaterial);
      this.resetCurrentMaterial();
    },
    copyItem() {
      this.addMaterial({
        ...JSON.parse(JSON.stringify(this.currentMaterial)),
        i: this.page.length
      });
    }
  }
};
</script>
<style scoped lang="scss">
.props-edit {
  position: relative;
  padding: 20px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
  header {
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
    .label {
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
          width: 180px;
        }
        &[type="Color"] {
          width: 70px;
          padding: 0 3px;
        }
      }
    }
    .select {
      width: 180px;
    }
  }
  footer {
    position: absolute;
    left: 0;
    bottom: 50px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-button {
      width: 40%;
    }
  }
}
</style>
