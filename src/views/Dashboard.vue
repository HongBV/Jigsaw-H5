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
      <!-- 顶部操作区 -->
      <header class="right-content__header">
        <el-input
          class="search-input"
          prefix-icon="el-icon-search"
          placeholder="请输入项目名称"
          v-model="searchValue"
          clearable
        />
        <toolbar @showRecycleBin="showRecycleBin" />
      </header>
      <!-- 核心内容 -->
      <div class="content">
        <p class="page-list__title">我的 H5 页面</p>
        <div class="page-list">
          <page-card
            v-for="page in filterPageList"
            :key="page.id"
            :page="page"
            :mode="'h5'"
            @deleteItem="deleteItem"
          />
        </div>
      </div>
    </div>
    <recycle-bin ref="recycleBin" @fetchPageList="fetchPageList" />
  </div>
</template>

<script>
import { createPage, getAllPages } from "@/api/page";
import { mapState, mapMutations } from "vuex";
import PageCard from "@/components/dashboard/page-card";
import RecycleBin from "@/components/dashboard/recycle-bin";
import Toolbar from "@/components/dashboard/toolbar";

export default {
  name: "Dashboard",
  components: {
    PageCard,
    Toolbar,
    RecycleBin
  },
  data() {
    return {
      logoImg: require("../../public/img/Puzzle.png"),
      searchValue: "",
      pageList: []
    };
  },
  created() {
    this.fetchPageList();
  },
  computed: {
    ...mapState({
      userId: state => state.user.id
    }),
    filterPageList() {
      return this.pageList.filter(
        item => item.name.indexOf(this.searchValue) > -1
      );
    }
  },
  methods: {
    ...mapMutations(["setPageId", "setPage"]),
    /**
     * 获取页面列表
     */
    async fetchPageList() {
      this.pageList = await getAllPages(this.userId).then(res => res.data);
    },
    /**
     * 创建新页面
     */
    async createPage() {
      this.$prompt("", "给新页面取个名字吧", {
        showCancelButton: false,
        confirmButtonText: "确定",
        inputPattern: /^\S{2,8}$/,
        inputErrorMessage: "页面名称长度为2-8且不可含空格"
      }).then(async res => {
        const name = res.value;
        const page = await createPage({
          page: [],
          name,
          creatorId: this.userId
        }).then(res => res.data);
        this.setPageId(page.id);
        this.$router.push({
          name: "OperatingFloor",
          query: { id: page.id }
        });
      });
    },
    /**
     * 删除页面列表中的一项
     * @param {number} id
     */
    deleteItem(id) {
      this.pageList = this.pageList.filter(item => item.id !== id);
    },
    /**
     * 展示回收站
     */
    showRecycleBin() {
      this.$refs.recycleBin.showRecycleBin();
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
    &__header {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-input {
        width: 260px;
        .el-input__inner:focus {
          border-color: $blue;
        }
      }
    }
    .content {
      height: calc(100vh - 130px);
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .page-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        &__title {
          margin: 0 0 18px;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
