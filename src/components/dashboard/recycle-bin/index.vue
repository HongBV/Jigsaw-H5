<template>
  <el-drawer
    title="♻️ 回收站"
    custom-class="recycle-bin"
    size="35%"
    :visible.sync="visible"
    :before-close="handleClose"
  >
    <div class="page-list">
      <page-card
        v-for="page in pageList"
        :key="page.id"
        :page="page"
        :mode="'trash'"
        @deleteItem="deleteItem"
      />
    </div>
  </el-drawer>
</template>

<script>
import { getAllDeletedPages } from "@/api/page";
import PageCard from "@/components/dashboard/page-card";
export default {
  name: "RecycleBin",
  components: {
    PageCard
  },
  data() {
    return {
      visible: false,
      pageList: []
    };
  },
  methods: {
    /**
     * 展示回收站
     */
    async showRecycleBin() {
      this.pageList = await getAllDeletedPages().then(res => res.data);
      this.visible = true;
    },
    /**
     * 删除页面列表中的一项
     * @param {number} id
     */
    deleteItem(id) {
      this.pageList = this.pageList.filter(item => item.id !== id);
    },
    /**
     * 退出抽屉页前的钩子
     * @param {function} done
     */
    handleClose(done) {
      this.$emit("fetchPageList");
      done();
    }
  }
};
</script>

<style lang="scss">
.recycle-bin {
  background-color: #f5f5f5;
  .el-drawer {
    &__body {
      padding: 0 20px;
      .page-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        &__title {
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
