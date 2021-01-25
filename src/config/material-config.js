const materialsList = [
  // BvButton
  {
    component: "BvButton",
    name: "按钮",
    layout: {
      h: 50
    },
    editData: [
      {
        key: "text",
        name: "按钮文字",
        type: "Text"
      },
      {
        key: "width",
        name: "按钮宽度",
        type: "Number",
        step: 10,
        min: 50,
        max: 400
      },
      {
        key: "borderRadius",
        name: "按钮圆角",
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
        key: "type",
        name: "按钮类型",
        type: "Select",
        options: [
          { label: "默认按钮", value: "default" },
          { label: "主要按钮", value: "primary" },
          { label: "信息按钮", value: "info" },
          { label: "警告按钮", value: "warning" },
          { label: "危险按钮", value: "danger" }
        ]
      },
      {
        key: "plain",
        name: "朴素按钮",
        type: "Switch"
      },
      {
        key: "disabled",
        name: "禁用按钮",
        type: "Switch"
      }
    ],
    config: {
      text: "按钮",
      width: 100,
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 400,
      type: "default",
      plain: false,
      disabled: false
    }
  },
  // BvText
  {
    component: "BvText",
    name: "文本",
    layout: {
      h: 47
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
      },
      {
        key: "fit",
        name: "填充模式",
        type: "Select",
        options: [
          { label: "自适应（不裁剪）", value: "contain" },
          { label: "自适应（裁剪）", value: "cover" },
          { label: "拉伸", value: "fill" },
          { label: "原图", value: "none" },
          { label: "自适应", value: "scale-down" }
        ]
      }
    ],
    config: {
      url:
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      fit: "cover",
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
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
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
  },
  // BvNotoceBar
  {
    component: "BvNotoceBar",
    name: "通知栏",
    layout: {
      h: 40
    },
    editData: [
      {
        key: "text",
        name: "文本",
        type: "Text"
      },
      {
        key: "scrollable",
        name: "滚动播放",
        type: "Switch"
      },
      {
        key: "wrapable",
        name: "多行展示",
        type: "Switch"
      },
      {
        key: "speed",
        name: "滚动速度",
        type: "Number",
        step: 10,
        min: 10,
        max: 200
      },
      {
        key: "color",
        name: "字体色",
        type: "Color"
      },
      {
        key: "background",
        name: "背景色",
        type: "Color"
      }
    ],
    config: {
      text: "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
      scrollable: true,
      wrapable: false,
      speed: 50,
      color: "#ff6600",
      background: "#fff7cc"
    }
  },
  // BvForm
  {
    component: "BvForm",
    name: "表单",
    layout: {
      h: 250
    },
    editData: [
      {
        key: "title",
        name: "表单标题",
        type: "Text"
      },
      {
        key: "form",
        name: "表单控件",
        type: "Form"
      }
    ],
    config: {
      title: "表单标题",
      form: [
        {
          type: "text",
          label: "姓名",
          value: ""
        },
        {
          type: "text",
          label: "爱好",
          value: ""
        }
      ]
    }
  }
];
export default materialsList;
