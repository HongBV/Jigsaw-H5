const materialsList = [
  // BvButton
  {
    component: "BvButton",
    name: "按钮",
    layout: {
      h: 45
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
        type: "Number",
        step: 1,
        min: 80,
        max: 400
      },
      {
        key: "borderRadius",
        name: "圆角",
        type: "Number",
        step: 1,
        min: 0,
        max: 100
      },
      {
        key: "fontSize",
        name: "文字大小",
        type: "Number",
        step: 1,
        min: 12,
        max: 42
      },
      {
        key: "fontWeight",
        name: "文字粗细",
        type: "Number",
        step: 100,
        min: 300,
        max: 800
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
  // BvText
  {
    component: "BvText",
    name: "文本",
    layout: {
      h: 50
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
        type: "Number",
        step: 1,
        min: 12,
        max: 42
      },
      {
        key: "fontWeight",
        name: "文字粗细",
        type: "Number",
        step: 100,
        min: 300,
        max: 800
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
  // BvImage
  {
    component: "BvImage",
    name: "图片",
    layout: {
      h: 160
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
        type: "Number",
        step: 1,
        min: 0,
        max: 800
      }
    ],
    config: {
      url:
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      borderRadius: 0
    }
  },
  // BvPlaceholder
  {
    component: "BvPlaceholder",
    name: "占位符",
    layout: {
      h: 45
    },
    editData: [
      {
        key: "backgroundColor",
        name: "背景色",
        type: "Color"
      }
    ],
    config: {
      backgroundColor: "#fafafa"
    }
  },
  // BvSwipe
  {
    component: "BvSwipe",
    name: "轮播图",
    layout: {
      h: 160
    },
    editData: [
      {
        key: "interval",
        name: "播放间隔",
        type: "Number",
        step: 500,
        min: 500,
        max: 5000
      }
    ],
    config: {
      interval: 3000,
      images: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      ]
    }
  },
  // BvVideo
  {
    component: "BvVideo",
    name: "视频",
    layout: {
      h: 160
    },
    editData: [
      {
        key: "url",
        name: "视频地址",
        type: "Text"
      },
      {
        key: "muted",
        name: "静音播放",
        type: "Switch"
      }
    ],
    config: {
      url:
        "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
      muted: true
    }
  }
];
export default materialsList;
