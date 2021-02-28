<template>
  <div class="layout-edit">
    <i class="el-icon-back go-back" @click="goBack"></i>
    <el-backtop target=".viewport-wrapper" :right="320"></el-backtop>
    <toolbar />
    <div
      class="viewport-wrapper no-scrollbar"
      id="viewport-wrapper"
      @click="clearCurrentMaterial"
    >
      <div
        id="viewport"
        class="viewport"
        @click.stop
        @drop="onDrop($event)"
        @dragover="onDragover($event)"
      >
        <grid-layout
          :layout.sync="page"
          :col-num="24"
          :row-height="1"
          :is-draggable="true"
          :is-resizable="true"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[0, 0]"
          :use-css-transforms="true"
        >
          <grid-item
            class="item"
            v-for="item in page"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :key="item.i"
          >
            <layout-item :material="item" />
          </grid-item>
        </grid-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import LayoutItem from "@/components/operating-floor/layout-item";
import Toolbar from "@/components/operating-floor/toolbar";
import { getPageById } from "@/api/page";
import { mapState, mapMutations } from "vuex";
export default {
  name: "LayoutEdit",
  components: {
    GridLayout,
    GridItem,
    LayoutItem,
    Toolbar
  },
  computed: {
    ...mapState({
      page: state => state.editor.page
    })
  },
  created() {
    this.fetchPage();
  },
  methods: {
    ...mapMutations([
      "addMaterial",
      "setPage",
      "setPageId",
      "setCurrentMaterial"
    ]),
    /**
     * 获取页面数据
     */
    async fetchPage() {
      const id = this.$route.query.id;
      if (!id) return;
      const { data } = await getPageById(id);
      this.setPage(JSON.parse(data.page));
      this.setPageId(id);
    },
    goBack() {
      this.$router.push({ name: "Dashboard" });
    },
    onDragover(e) {
      e.preventDefault();
    },
    onDrop(e) {
      e.preventDefault();
      const material = JSON.parse(e.dataTransfer.getData("material"));
      this.addMaterial(material);
    },
    /**
     * 清空当前选中素材
     */
    clearCurrentMaterial() {
      this.setCurrentMaterial({});
    }
  }
};
</script>

<style scoped lang="scss">
.layout-edit {
  position: relative;
  height: 100%;
  background-color: #fafafa;
  .go-back {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    z-index: 10;
    &:hover {
      color: rgb(47, 84, 235);
    }
  }
  .el-backtop {
    color: #000000;
  }
  .viewport-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
    .viewport {
      margin: 70px auto;
      width: 375px;
      min-height: 667px;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
      .item {
        position: relative;
        overflow: hidden;
        touch-action: none;
        box-sizing: border-box;
        border: 2px solid transparent;
        &:hover {
          padding: 0;
          border: 2px solid #006aff;
          z-index: 1;
        }
        .mask {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
  .no-scrollbar {
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>
