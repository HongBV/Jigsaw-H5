const materialsList = [
  {
    component: "BvButton",
    name: "按钮",
    layout: {
      h: 17
    },
    editData: [
      {
        key: "text",
        name: "文字",
        type: "Text"
      },
      {
        key: "width",
        name: "宽度",
        type: "Number"
      },
      {
        key: "borderRadius",
        name: "圆角",
        type: "Number"
      },
      {
        key: "fontSize",
        name: "文字大小",
        type: "Number"
      },
      {
        key: "fontWeight",
        name: "文字粗细",
        type: "Number"
      },
      {
        key: "color",
        name: "文字颜色",
        type: "Color"
      },
      {
        key: "backgroundColor",
        name: "背景色",
        type: "Color"
      }
    ],
    config: {
      text: "按钮",
      width: 100,
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 400,
      color: "#000000",
      backgroundColor: "#ffffff"
    }
  },
  {
    component: "BvText",
    name: "文本",
    layout: {
      h: 15
    },
    editData: [
      {
        key: "text",
        name: "文字",
        type: "Text"
      },
      {
        key: "fontSize",
        name: "文字大小",
        type: "Number"
      },
      {
        key: "fontWeight",
        name: "文字粗细",
        type: "Number"
      },
      {
        key: "color",
        name: "文字颜色",
        type: "Color"
      }
    ],
    config: {
      text: "这是一行文本",
      fontSize: 14,
      fontWeight: 400,
      color: "#000000"
    }
  },
  {
    component: "BvImage",
    name: "图片",
    layout: {
      h: 83
    },
    editData: [
      {
        key: "url",
        name: "图片链接",
        type: "Text"
      },
      {
        key: "borderRadius",
        name: "圆角",
        type: "Number"
      }
    ],
    config: {
      url:
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      borderRadius: 0
    }
  },
  {
    component: "BvPlaceholder",
    name: "占位符",
    layout: {
      h: 50
    },
    editData: [
      {
        key: "height",
        name: "高度",
        type: "Number"
      },
      {
        key: "backgroundColor",
        name: "背景色",
        type: "Color"
      }
    ],
    config: {
      height: 100,
      backgroundColor: "#ffffff"
    }
  },
  {
    component: "BvSwipe",
    name: "轮播图",
    layout: {
      h: 55
    },
    editData: [
      {
        key: "interval",
        name: "播放间隔",
        type: "Number"
      }
    ],
    config: {
      interval: 3000,
      images: [
        "https://i0.hdslb.com/bfs/archive/441880fbbe88130a20a94a6e0b8512508f0499da.png@880w_388h_1c_95q",
        "https://i0.hdslb.com/bfs/archive/7935651568e55bbd523f0a96d48869257c873910.jpg@880w_388h_1c_95q",
        "https://i0.hdslb.com/bfs/archive/bb8338d370cc5b68a37e2c6bf2ee1510fb323c7e.jpg@880w_388h_1c_95q"
      ]
    }
  }
];
export default materialsList;
