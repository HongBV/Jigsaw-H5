<template>
  <div class="props-edit" v-if="editable">
    <header class="header">
      {{ currentMaterial.name }}
    </header>
    <section class="collapse-wrapper">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="容器属性" name="container">
          <div class="text-input">
            <span class="label">宽度</span>
            <el-input-number
              v-model="currentMaterial.w"
              size="small"
              :step="1"
              :max="24"
              :min="1"
              @change="updatePage"
              step-strictly
            ></el-input-number>
          </div>
          <div class="text-input">
            <span class="label">高度</span>
            <el-input-number
              v-model="currentMaterial.h"
              size="small"
              :step="1"
              :max="1000"
              :min="1"
              @change="updatePage"
              step-strictly
            ></el-input-number>
          </div>
        </el-collapse-item>
        <el-collapse-item title="组件属性" name="component">
          <div
            class="text-input"
            v-for="(editItem, idx) in currentMaterial.editData"
            :key="idx"
          >
            <span
              class="label"
              v-if="
                !['Form', 'Icon', 'ImageList', 'Tab'].includes(editItem.type)
              "
            >
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
            <icon-select
              v-if="editItem.type === 'Icon'"
              :icon="currentMaterial.config[editItem.key]"
              @modifyProp="val => modifyProp(editItem.key, val)"
            />
            <list-edit
              v-if="editItem.type === 'ImageList'"
              :list="currentMaterial.config[editItem.key]"
            />
            <el-date-picker
              v-if="editItem.type === 'Datetime'"
              v-model="currentMaterial.config[editItem.key]"
              type="datetime"
              size="small"
              placeholder="选择截止日期与时间"
              popper-class="props-edit-date-picker"
              :clearable="false"
              :picker-options="pickerOptions"
              :firstDayOfWeek="1"
            >
            </el-date-picker>
            <tab-edit
              v-if="editItem.type === 'Tab'"
              :tabs="currentMaterial.config[editItem.key]"
            />
          </div>
        </el-collapse-item>
      </el-collapse>
    </section>
    <footer>
      <el-button @click="copyItem" type="primary" round plain>复 制</el-button>
      <el-button @click="deleteItem" type="danger" round plain>删 除</el-button>
    </footer>
  </div>
  <div class="props-edit" v-else>
    <header class="header">编辑器</header>
    <section class="collapse-wrapper">
      <div class="text-input">
        <span class="label">预览机型</span>
        <el-select
          class="select"
          v-model="machine"
          size="small"
          placeholder="请选择"
        >
          <el-option
            v-for="item in machineList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <template v-if="machine == '自定义'">
        <div class="text-input">
          <span class="label">页面宽度</span>
          <el-input-number
            v-model="viewportWidth"
            size="small"
            :max="600"
            :min="375"
            step-strictly
          ></el-input-number>
        </div>
        <div class="text-input">
          <span class="label">页面高度</span>
          <el-input-number
            v-model="viewportHeight"
            size="small"
            :max="1000"
            :min="667"
            step-strictly
          ></el-input-number></div
      ></template>
    </section>
  </div>
</template>

<script>
const machineSize = {
  "iphone 5/SE": [320, 568],
  "iphone 6/7/8": [375, 667],
  "iphone 6/7/8 Plus": [414, 736]
};
import { mapState, mapMutations } from "vuex";
import { throttle, debounce } from "lodash";
import FormEdit from "@/components/operating-floor/form-edit";
import ListEdit from "@/components/operating-floor/list-edit";
import IconSelect from "@/components/operating-floor/icon-select";
import TabEdit from "@/components/operating-floor/tab-edit";
export default {
  name: "PropsEdit",
  components: {
    FormEdit,
    ListEdit,
    IconSelect,
    TabEdit
  },
  data() {
    return {
      machine: "自定义",
      machineList: [
        "自定义",
        "iphone 5/SE",
        "iphone 6/7/8",
        "iphone 6/7/8 Plus"
      ],
      viewportWidth: 375,
      viewportHeight: 667,
      activeNames: ["component"],
      pickerOptions: {
        disabledDate: time => {
          return new Date(time) < new Date();
        }
      }
    };
  },
  computed: {
    ...mapState({
      page: state => state.editor.page,
      currentMaterial: state => state.editor.currentMaterial
    }),
    editable() {
      return !!this.currentMaterial.editData;
    }
  },
  watch: {
    viewportWidth(val) {
      this.setViewportWidth(val);
    },
    viewportHeight(val) {
      this.setViewportHeight(val);
    },
    machine(val) {
      if (!val || val === "自定义") return;
      const [width, height] = machineSize[val];
      this.viewportWidth = width;
      this.viewportHeight = height;
    }
  },
  created() {
    // 通过防抖与节流优化性能
    this.copyItem = throttle(this.copyItem, 500);
    this.updatePage = debounce(this.updatePage, 500);
  },
  methods: {
    ...mapMutations([
      "deleteMaterial",
      "addMaterial",
      "resetCurrentMaterial",
      "setViewportWidth",
      "setViewportHeight"
    ]),
    /**
     * 删除该组件
     */
    deleteItem() {
      this.deleteMaterial(this.currentMaterial);
      this.resetCurrentMaterial();
    },
    /**
     * 复制该组件
     */
    copyItem() {
      const currentMaterial = JSON.parse(JSON.stringify(this.currentMaterial));
      this.addMaterial(currentMaterial);
    },
    /**
     * @param {string} prop
     * @param {any} value
     */
    modifyProp(prop, value) {
      this.currentMaterial.config[prop] = value;
    },
    /**
     * 刷新页面
     */
    updatePage() {
      this.page.splice(0, 0);
    }
  }
};
</script>
<style scoped lang="scss">
.props-edit {
  position: relative;
  padding: 0 20px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  .header {
    margin: 0;
    padding: 16px 0;
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }
  .collapse-wrapper {
    height: calc(100vh - 130px);
    overflow: auto;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    ::v-deep.el-collapse-item {
      &__content {
        padding: 0;
      }
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
      .select,
      .el-date-editor.el-input {
        width: 180px;
        ::v-deep.el-input__inner {
          padding-right: 0;
        }
      }
    }
  }
  footer {
    position: absolute;
    left: 0;
    bottom: 10px;
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

<style lang="scss">
.props-edit-date-picker {
  transform: translateX(-20px);
}
</style>
