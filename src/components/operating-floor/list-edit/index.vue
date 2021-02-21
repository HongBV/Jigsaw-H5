<template>
  <div class="list-edit">
    <header>
      <span class="title">图片列表</span>
      <el-button type="primary" size="mini" @click="addItem('text')">
        增加图片
      </el-button>
    </header>
    <div class="scroll-list">
      <list-edit-item
        v-for="(item, idx) in list"
        :key="item + idx"
        :list="list"
        :idx="idx"
      >
      </list-edit-item>
    </div>
  </div>
</template>

<script>
import ListEditItem from "@/components/operating-floor/list-edit-item";

export default {
  name: "ListEdit",
  components: {
    ListEditItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     * 添加一项
     */
    addItem() {
      this.list.push("");
    }
  }
};
</script>
<style scoped lang="scss">
.list-edit {
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
  .scroll-list {
    height: 260px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .list-edit-item {
      border-top: 1px solid #cccccc;
      &:nth-last-child(1) {
        border-bottom: 1px solid #cccccc;
      }
    }
  }
}
</style>
