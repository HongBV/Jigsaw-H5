<template>
  <div class="page-card">
    <header class="header">
      <p class="name">{{ page.name }}</p>
      <el-dropdown size="small" @command="handleDropdownCommand">
        <span class="dropdown"><i class="el-icon-more"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="command in commandList"
            :key="command.key"
            :command="command.key"
          >
            {{ command.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <div @click="selectPage">
      <el-image class="img" fit="cover">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { deletePage, updatePage } from "@/api/page";
export default {
  name: "PageCard",
  props: {
    page: {
      type: Object,
      default: () => ({})
    },
    mode: {
      type: String,
      isrequired: true
    }
  },
  computed: {
    commandList() {
      if (this.mode === "h5")
        return [
          { key: "modifyName", label: "改名" },
          { key: "deletePage", label: "删除" }
        ];
      if (this.mode === "trash")
        return [
          { key: "recover", label: "还原" },
          { key: "deletePage", label: "删除" }
        ];
      return [];
    }
  },
  methods: {
    ...mapMutations(["setPageId", "setPage"]),
    /**
     * 处理下拉框触发事件
     * @param {string} command 指令
     */
    async handleDropdownCommand(command) {
      switch (command) {
        case "modifyName":
          this.$prompt("", `为「 ${this.page.name} 」重命名`, {
            showCancelButton: false,
            confirmButtonText: "确定",
            inputPattern: /^\S{2,8}$/,
            inputErrorMessage: "页面名称长度为2-8"
          }).then(async res => {
            const name = res.value;
            await updatePage(this.page.id, { name });
            this.page.name = name;
          });
          break;
        case "recover":
          await updatePage(this.page.id, { is_delete: false });
          this.$emit("deleteItem", this.page.id);
          break;
        case "deletePage":
          await deletePage(this.page.id);
          this.$emit("deleteItem", this.page.id);
          break;
      }
    },
    /**
     * 选中该页面
     */
    selectPage() {
      this.setPageId(this.page.id);
      this.$router.push({
        name: "OperatingFloor",
        query: { id: this.page.id }
      });
    }
  }
};
</script>

<style lang="scss">
.page-card {
  .header {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      width: calc(100% - 20px);
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dropdown {
      width: 20px;
      height: 20px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .img {
    width: 100%;
    height: 180px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .image-slot {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #909399;
      font-size: 20px;
      background-color: #ffffff;
      transition: all 1s;
    }
  }
}
</style>
