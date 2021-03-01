<template>
  <div class="tab-edit">
    <header>
      <span class="title">标签项控件</span>
      <el-button type="primary" size="mini" @click="addItem">
        新增标签项
      </el-button>
    </header>
    <tab-edit-item
      v-for="(tab, idx) in tabs"
      :key="tab.title + idx"
      :tab="tab"
      :idx="idx"
      @remove="remove"
    >
    </tab-edit-item>
  </div>
</template>

<script>
import TabEditItem from "@/components/operating-floor/tab-edit-item";

export default {
  name: "tabEdit",
  components: {
    TabEditItem
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     * 添加一项
     */
    addItem() {
      const idx = this.tabs.length + 1;
      this.tabs.push({
        title: "标签" + idx,
        content: "内容" + idx,
        badge: "",
        dot: false,
        disabled: false
      });
    },
    /**
     * 删除一项
     * @param {number} idx
     */
    remove(idx) {
      this.tabs.splice(idx, 1);
    }
  }
};
</script>
<style scoped lang="scss">
.tab-edit {
  width: 100%;
  header {
    margin: 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 600;
    }
  }
  .tab-edit-item {
    border-top: 1px solid #cccccc;
    &:nth-last-child(1) {
      border-bottom: 1px solid #cccccc;
    }
  }
}
</style>
