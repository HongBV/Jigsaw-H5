<template>
  <div class="login">
    <header class="login__header">
      <h1>🌌 Jigsaw H5</h1>
      <span>进入官网</span>
    </header>
    <main class="login__main">
      <form class="form">
        <p class="title">登 录</p>
        <el-input
          class="account"
          ref="account"
          v-model="userInfo.account"
          clearable
        />
        <el-input
          class="password"
          ref="password"
          v-model="userInfo.password"
          show-password
        />
        <p class="forget-pwd">忘记密码?</p>
        <button class="submit-btn" type="button" @click="handleSubmit">
          确 认
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import { login } from "@/api/user";
import { debounce } from "lodash";
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        account: "",
        password: ""
      }
    };
  },
  created() {
    // 防抖处理
    this.handleSubmit = debounce(this.handleSubmit, 1000, { leading: true });
  },
  methods: {
    /**
     * 用户登录
     */
    async handleSubmit() {
      if (!this.checkField()) return;
      const { data } = await login(this.userInfo);
      if (data.success) {
        this.$router.push({ name: "OperatingFloor" });
      } else {
        this.$message.error(data.message);
      }
    },
    /**
     * 验证字段
     */
    checkField() {
      const { account, password } = this.userInfo;
      if (!account) {
        this.$message.error("账号不能为空");
        this.$refs.account.focus();
        return false;
      }
      if (!password) {
        this.$message.error("密码不能为空");
        this.$refs.password.focus();
        return false;
      }
      return true;
    }
  }
};
</script>
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__header {
    padding: 30px 40px 60px;
    display: flex;
    justify-content: space-between;
    h1 {
      margin: 0;
      font-size: 26px;
      color: #2f54eb;
    }
    span {
      font-size: 14px;
    }
  }
  &__main {
    flex: 1 1;
    background: url("http://h5.dooring.cn/h5_plus/static/login_draw.4b287e4f.png")
      no-repeat 0 0;
    background-size: 494px 602px;
    .form {
      margin-left: 50%;
      padding: 30px 40px 40px;
      width: 400px;
      border-radius: 20px;
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      box-shadow: 0 2px 12px 0 rgba(47, 84, 235, 0.1);
      .title {
        margin: 0;
        margin-bottom: 36px;
        padding-bottom: 20px;
        font-size: 30px;
        font-weight: 500;
        letter-spacing: 5px;
        text-align: center;
        user-select: none;
      }
      .account,
      .password {
        margin-bottom: 24px;
        ::v-deep.el-input__inner {
          padding: 4px 11px;
          height: 48px;
          line-height: 48px;
          border: none;
          border-radius: 30px;
          background-color: #f5f5f5;
          text-indent: 20px;
          transition: all 0.5s;
          &:focus {
            border-color: #597ef7;
            border-right-width: 1px !important;
            outline: 0;
            box-shadow: 0 0 0 2px rgba(47, 84, 235, 0.2);
          }
        }
        ::v-deep.el-input__icon {
          line-height: 48px;
        }
      }
      .forget-pwd {
        margin: -10px 10px 20px 0;
        color: #2f54eb;
        font-size: 14px;
        text-align: right;
        cursor: pointer;
      }
      .submit-btn {
        padding: 6.4px 20px;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 40px;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: normal;
        background-color: rgb(47, 84, 235);
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        touch-action: manipulation;
        cursor: pointer;
      }
    }
  }
}
</style>
