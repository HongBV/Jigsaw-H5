<template>
  <div class="toolbar">
    <div class="toolbar__item" @click="linkTo('Welcome')">
      <i class="el-icon-house"></i>
    </div>
    <div class="toolbar__item" @click="showRecycleBin()">
      <i class="el-icon-delete"></i>
    </div>
    <el-dropdown @command="handleDropdownCommand" placement="bottom">
      <div class="toolbar__item"><i class="el-icon-user"></i></div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="center">个人中心</el-dropdown-item>
        <el-dropdown-item command="exit" divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  methods: {
    /**
     * 处理下拉框触发事件
     * @param {string} command 指令
     */
    handleDropdownCommand(command) {
      switch (command) {
        case "center":
          // TODO
          break;
        case "exit":
          this.$router.push({ name: "Login" });
          sessionStorage.removeItem("isAuthenticated");
          break;
      }
    },
    /**
     * 展示回收站
     */
    showRecycleBin() {
      this.$emit("showRecycleBin");
    },
    /**
     * 跳转
     * @param {string} routerName
     */
    linkTo(routerName) {
      this.$router.push({ name: routerName });
    }
  }
};
</script>

<style lang="scss">
$blue: #2f55eb;
.dashboard {
  .toolbar {
    display: flex;
    &__item {
      margin: 0 10px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      text-align: center;
      font-size: 24px;
      color: $blue;
      background-color: #ffffff;
      box-shadow: 0 0 8px rgb(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
}
</style>
