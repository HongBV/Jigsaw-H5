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
      <el-dropdown-menu slot="dropdown" class="userInfo">
        <p>{{ userInfo.account }}</p>
        <el-dropdown-item command="modifyPwd">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">注销账户</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { updateUser } from "@/api/user";
import { mapState } from "vuex";
const CryptoJS = require("crypto-js");
export default {
  name: "Toolbar",
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  methods: {
    /**
     * 处理下拉框触发事件
     * @param {string} command 指令
     */
    handleDropdownCommand(command) {
      this[command] && this[command]();
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
    },
    /**
     * 修改密码
     */
    modifyPwd() {
      this.$prompt("", "请输入新密码", {
        showCancelButton: false,
        confirmButtonText: "确定",
        inputPattern: /^[a-zA-Z0-9]{6,10}$/,
        inputErrorMessage: "密码只能为6到10位到数字或字母组合"
      }).then(async res => {
        const password = CryptoJS.AES.encrypt(
          res.value,
          "jigsaw-h5"
        ).toString();
        const user = await updateUser(this.userInfo.id, { password }).then(
          res => res.data
        );
        if (user && user.id) {
          this.$message({
            message: "修改成功",
            type: "success",
            duration: 800
          });
        }
      });
    },
    /**
     * 注销
     */
    logout() {
      sessionStorage.removeItem("isAuthenticated");
      this.$router.push({ name: "Login" });
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
      outline: none;
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
      .userinfo {
        font-size: 12px;
      }
    }
  }
}
.userInfo {
  p {
    margin: 0;
    line-height: 36px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    color: $blue;
    user-select: none;
  }
  .el-dropdown-menu__item {
    &:hover {
      padding-left: 18px;
      color: $blue;
      border-left: solid 2px $blue;
      background-color: #ffffff;
    }
  }
}
</style>
