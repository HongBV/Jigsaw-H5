<template>
  <div class="dashboard">
    <!-- 左侧侧边栏 -->
    <div class="left-nav">
      <div class="logo">
        <img :src="logoImg" alt="logo" />
        <span> Jigsaw H5 </span>
      </div>
      <p>让页面搭建如拼凑拼图般简单</p>
      <el-button @click="createPage">新建页面</el-button>
    </div>
    <!-- 右侧内容区 -->
    <div class="right-content">
      <div class="toolbar">
        <el-input
          class="filter-search"
          prefix-icon="el-icon-search"
          placeholder="请输入项目名称"
          v-model="filterValue"
          clearable
        >
        </el-input>
        <div>
          <el-dropdown @command="handleDropdownCommand" placement="bottom">
            <div class="user">Hong</div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="center">个人中心</el-dropdown-item>
              <el-dropdown-item command="exit" divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="my-page">
        <p class="card-list__title">我的 H5 页面</p>
        <div class="card-list">
          <page-card
            v-for="page in filterPageList"
            :key="page.id"
            :page="page"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPages } from "@/api/page";
import { createPage } from "@/api/page";
import { mapMutations } from "vuex";
import PageCard from "@/components/dashboard/page-card";
export default {
  name: "Dashboard",
  components: {
    PageCard
  },
  data() {
    return {
      logoImg: require("../../public/img/Puzzle.png"),
      filterValue: "",
      pageList: []
    };
  },
  async created() {
    this.pageList = await getAllPages().then(res => res.data);
  },
  computed: {
    filterPageList() {
      return this.pageList.filter(
        item => item.name.indexOf(this.filterValue) > -1
      );
    }
  },
  methods: {
    ...mapMutations(["setPageId", "setPage"]),
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
    async createPage() {
      this.$prompt("", "给新页面取个名字吧", {
        showCancelButton: false,
        confirmButtonText: "确定",
        inputPattern: /^\S{2,8}$/,
        inputErrorMessage: "页面名称长度为2-8"
      }).then(async res => {
        const name = res.value;
        const page = await createPage({ page: [], name }).then(res => res.data);
        this.setPageId(page.id);
        this.setPage(JSON.parse(page.page));
        this.$router.push({ name: "OperatingFloor" });
      });
    }
  }
};
</script>

<style lang="scss">
$blue: #2f55eb;
.dashboard {
  display: flex;
  width: 100%;
  height: 100%;
  .left-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 80px;
    width: 270px;
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.05);
    z-index: 1;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $blue;
      font-size: 24px;
      font-weight: 600;
      img {
        margin: 0 5px;
        width: 28px;
        height: 28px;
      }
    }
    p {
      margin: 20px 0;
      font-size: 16px;
      color: $blue;
      text-align: center;
      font-weight: 600;
      &:nth-child(1) {
        font-size: 24px;
      }
    }
    .el-button {
      margin: 30px;
      border: none;
      color: #ffffff;
      background-color: $blue;
    }
  }
  .right-content {
    flex: 1;
    padding: 20px 40px;
    background-color: #f5f5f5;
    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .filter-search {
        width: 260px;
        .el-input__inner:focus {
          border-color: $blue;
        }
      }
      .user {
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        background-color: $blue;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
      }
    }
    .card-list {
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
</style>
