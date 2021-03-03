<template>
  <div class="icon-select">
    <header>
      <span class="title">图标库</span>
      <el-select class="style-select" v-model="style" size="mini">
        <el-option label="实体" value="solid" />
        <el-option label="线框" value="outline" />
      </el-select>
    </header>
    <ul class="icon-list">
      <li v-for="(item, idx) in iconList" :key="idx" @click="selectItem(item)">
        <van-icon :name="item" :class="{ selected: item == icon }" />
      </li>
    </ul>
  </div>
</template>

<script>
const outlineIcons = [
  "location-o",
  "like-o",
  "star-o",
  "phone-o",
  "setting-o",
  "fire-o",
  "coupon-o",
  "cart-o",
  "shopping-cart-o",
  "cart-circle-o",
  "friends-o",
  "comment-o",
  "gem-o",
  "gift-o",
  "point-gift-o",
  "send-gift-o",
  "service-o",
  "bag-o",
  "todo-list-o",
  "balance-list-o",
  "close",
  "clock-o",
  "question-o",
  "passed",
  "add-o",
  "gold-coin-o",
  "info-o",
  "play-circle-o",
  "pause-circle-o",
  "stop-circle-o",
  "warning-o",
  "phone-circle-o",
  "music-o",
  "smile-o",
  "thumb-circle-o",
  "comment-circle-o",
  "browsing-history-o",
  "underway-o",
  "more-o",
  "video-o",
  "shop-o",
  "shop-collect-o",
  "share-o",
  "chat-o",
  "smile-comment-o",
  "vip-card-o",
  "award-o",
  "diamond-o",
  "volume-o",
  "cluster-o",
  "wap-home-o",
  "photo-o",
  "gift-card-o",
  "expand-o",
  "medal-o",
  "good-job-o",
  "manager-o",
  "label-o",
  "bookmark-o",
  "bill-o",
  "hot-o",
  "hot-sale-o",
  "new-o",
  "new-arrival-o",
  "goods-collect-o",
  "eye-o",
  "delete-o",
  "font-o",
  "balance-o",
  "refund-o",
  "birthday-cake-o",
  "user-o",
  "orders-o",
  "tv-o",
  "envelop-o",
  "flag-o",
  "flower-o",
  "filter-o",
  "bar-chart-o",
  "chart-trending-o",
  "brush-o",
  "bullhorn-o",
  "hotel-o",
  "cashier-o",
  "newspaper-o",
  "warn-o",
  "notes-o",
  "calendar-o",
  "bulb-o",
  "user-circle-o",
  "desktop-o",
  "apps-o",
  "home-o",
  "back-top",
  "search",
  "points",
  "edit",
  "qr",
  "qr-invalid",
  "closed-eye",
  "down",
  "scan",
  "revoke",
  "free-postage",
  "certificate",
  "logistics",
  "contact",
  "cash-back-record",
  "after-sale",
  "exchange",
  "upgrade",
  "ellipsis",
  "description",
  "records",
  "sign",
  "completed",
  "failure",
  "ecard-pay",
  "peer-pay",
  "balance-pay",
  "credit-pay",
  "debit-pay",
  "cash-on-deliver",
  "other-pay",
  "tosend",
  "pending-payment",
  "paid",
  "aim",
  "discount",
  "idcard",
  "replay",
  "shrink"
];
const solidIcons = [
  "location",
  "like",
  "star",
  "phone",
  "setting",
  "fire",
  "coupon",
  "cart",
  "shopping-cart",
  "cart-circle",
  "friends",
  "comment",
  "gem",
  "gift",
  "point-gift",
  "send-gift",
  "service",
  "bag",
  "todo-list",
  "balance-list",
  "clear",
  "clock",
  "question",
  "checked",
  "add",
  "gold-coin",
  "info",
  "play-circle",
  "pause-circle",
  "stop-circle",
  "warning",
  "phone-circle",
  "music",
  "smile",
  "thumb-circle",
  "comment-circle",
  "browsing-history",
  "underway",
  "more",
  "video",
  "shop",
  "shop-collect",
  "share",
  "chat",
  "smile-comment",
  "vip-card",
  "award",
  "diamond",
  "volume",
  "cluster",
  "wap-home",
  "photo",
  "gift-card",
  "expand",
  "medal",
  "good-job",
  "manager",
  "label",
  "bookmark",
  "bill",
  "hot",
  "hot-sale",
  "new",
  "new-arrival",
  "goods-collect",
  "eye",
  "delete",
  "font",
  "wechat",
  "alipay",
  "photograph",
  "youzan-shield",
  "umbrella-circle",
  "bell",
  "printer",
  "map-marked",
  "card",
  "add-square",
  "live",
  "lock",
  "audio",
  "graphic",
  "column",
  "invition",
  "play",
  "pause",
  "stop",
  "weapp-nav",
  "ascending",
  "descending",
  "bars",
  "wap-nav",
  "enlarge",
  "photo-fail",
  "sort"
];
const baseIcons = [
  "arrow",
  "arrow-left",
  "arrow-up",
  "arrow-down",
  "success",
  "cross",
  "plus",
  "minus",
  "fail",
  "circle"
];
const icons = {
  solid: solidIcons,
  outline: outlineIcons,
  base: baseIcons
};
export default {
  name: "IconSelect",
  props: {
    icon: {
      type: String,
      default: "location-o"
    }
  },
  data() {
    return {
      style: "outline"
    };
  },
  computed: {
    iconList() {
      return icons[this.style];
    }
  },
  methods: {
    /**
     * 选择一项
     * @param {string} type
     */
    selectItem(type) {
      this.$emit("changeIcon", type);
    }
  }
};
</script>
<style scoped lang="scss">
.icon-select {
  width: 100%;
  header {
    margin: 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 600;
    }
    .style-select {
      width: 75px;
      ::v-deep input {
        border-radius: 15px;
      }
    }
  }
  .icon-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 5px;
    grid-column-gap: 5px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      i {
        padding: 5px;
        border-radius: 10px;
        font-size: 24px;
        color: #606266;
        cursor: pointer;
        transition: 0.1s linear;
        &:hover {
          background-color: #f0f0f0;
        }
      }
      .selected {
        color: #f0f0f0 !important;
        background-color: #2f55eb !important;
      }
    }
  }
}
</style>
