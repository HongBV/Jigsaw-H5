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
        key: "height",
        name: "按钮高度",
        type: "Number",
        step: 1,
        min: 20,
        max: 100
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
      height: 36,
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
        key: "justifyContent",
        name: "水平布局",
        type: "Select",
        options: [
          { label: "左对齐", value: "flex-start" },
          { label: "居中对齐", value: "center" },
          { label: "右对齐", value: "flex-end" }
        ]
      },
      {
        key: "alignItems",
        name: "垂直布局",
        type: "Select",
        options: [
          { label: "顶部对齐", value: "flex-start" },
          { label: "居中对齐", value: "center" },
          { label: "底部对齐", value: "flex-end" }
        ]
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
        key: "hyperlink",
        name: "超链接",
        type: "Switch"
      },
      {
        key: "targetUrl",
        name: "链接地址",
        type: "Text"
      }
    ],
    config: {
      text: "这是一行文本",
      fontSize: 14,
      fontWeight: 400,
      color: "#000000",
      justifyContent: "center",
      alignItems: "center",
      hyperlink: false,
      targetUrl: ""
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
      },
      {
        key: "hyperlink",
        name: "超链接",
        type: "Switch"
      },
      {
        key: "targetUrl",
        name: "链接地址",
        type: "Text"
      },
      {
        key: "showTitle",
        name: "开启标题",
        type: "Switch"
      },
      {
        key: "title",
        name: "标题",
        type: "Text"
      },
      {
        key: "color",
        name: "标题颜色",
        type: "Color"
      },
      {
        key: "fontSize",
        name: "标题字号",
        type: "Number",
        step: 1,
        min: 12,
        max: 42
      },
      {
        key: "x",
        name: "水平偏移",
        type: "Number",
        step: 1,
        min: -300,
        max: 300
      },
      {
        key: "y",
        name: "垂直偏移",
        type: "Number",
        step: 1,
        min: -300,
        max: 300
      }
    ],
    config: {
      url: "https://img01.yzcdn.cn/vant/tree.jpg",
      fit: "cover",
      borderRadius: 0,
      hyperlink: false,
      targetUrl: "",
      showTitle: true,
      title: "",
      color: "#f0f0f0",
      fontSize: 14,
      x: 0,
      y: 0
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
      },
      {
        key: "vertical",
        name: "纵向滚动",
        type: "Switch"
      },
      {
        key: "touchable",
        name: "手势滑动",
        type: "Switch"
      },
      {
        key: "showIndicators",
        name: "指示器",
        type: "Switch"
      },
      {
        key: "images",
        name: "图片组控件",
        type: "ImageList"
      }
    ],
    config: {
      interval: 3000,
      vertical: false,
      touchable: true,
      showIndicators: true,
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
      },
      {
        key: "autoplay",
        name: "自动播放",
        type: "Switch"
      },
      {
        key: "loop",
        name: "循环播放",
        type: "Switch"
      },
      {
        key: "fluid",
        name: "平铺播放",
        type: "Switch"
      },
      {
        key: "notSupportedMessage",
        name: "失败提示",
        type: "Text"
      },
      {
        key: "poster",
        name: "封面链接",
        type: "Text"
      }
    ],
    config: {
      url:
        "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
      muted: true,
      autoplay: false,
      loop: false,
      fluid: false,
      notSupportedMessage: "此视频暂无法播放，请稍后再试",
      poster: "https://img01.yzcdn.cn/vant/apple-3.jpg"
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
        key: "padding",
        name: "内边距",
        type: "Number",
        step: 1,
        min: 0,
        max: 100
      },
      {
        key: "showIcon",
        name: "图标",
        type: "Switch"
      },
      {
        key: "fontSize",
        name: "字号",
        type: "Number",
        step: 1,
        min: 12,
        max: 30
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
      padding: 16,
      showIcon: true,
      fontSize: 14,
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
        key: "btnText",
        name: "按钮文案",
        type: "Text"
      },
      {
        key: "targetHost",
        name: "提交地址",
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
      btnText: "提交",
      targetHost: "",
      form: [
        {
          type: "text",
          typeName: "文本框",
          label: "姓名",
          value: ""
        },
        {
          type: "text",
          typeName: "文本框",
          label: "爱好",
          value: ""
        }
      ]
    }
  },
  // BvQrcode
  {
    component: "BvQrcode",
    name: "二维码",
    layout: {
      h: 80
    },
    editData: [
      {
        key: "text",
        name: "信息",
        type: "Text"
      },
      {
        key: "dark",
        name: "图案颜色",
        type: "Color"
      },
      {
        key: "light",
        name: "背景色",
        type: "Color"
      }
    ],
    config: {
      text: "https://www.baidu.com",
      dark: "#000000",
      light: "#fafafa"
    }
  },
  // BvIcon
  {
    component: "BvIcon",
    name: "图标",
    layout: {
      h: 60,
      w: 4
    },
    editData: [
      {
        key: "size",
        name: "图标大小",
        type: "Number",
        min: 12,
        max: 48
      },
      {
        key: "color",
        name: "颜色",
        type: "Color"
      },
      {
        key: "badge",
        name: "徽标",
        type: "Text"
      },
      {
        key: "dot",
        name: "圆点",
        type: "Switch"
      },
      {
        key: "text",
        name: "文案",
        type: "Text"
      },
      {
        key: "textSize",
        name: "文案大小",
        type: "Number",
        min: 12,
        max: 24
      },
      {
        key: "hyperlink",
        name: "超链接",
        type: "Switch"
      },
      {
        key: "targetUrl",
        name: "链接地址",
        type: "Text"
      },
      {
        key: "type",
        name: "图标",
        type: "Icon"
      }
    ],
    config: {
      type: "location-o",
      size: 24,
      color: "#323233",
      badge: "",
      dot: false,
      text: "图标",
      textSize: 12,
      hyperlink: false,
      targetUrl: ""
    }
  },
  // BvCountdown
  {
    component: "BvCountdown",
    name: "倒计时",
    layout: {
      h: 60,
      w: 24
    },
    editData: [
      {
        key: "endTime",
        name: "截至时间",
        type: "Datetime"
      },
      {
        key: "fontSize",
        name: "字体大小",
        type: "Number",
        min: 12,
        max: 54
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
        name: "字体颜色",
        type: "Color"
      },
      {
        key: "showDay",
        name: "显示天数",
        type: "Switch"
      },
      {
        key: "showHour",
        name: "显示小时",
        type: "Switch"
      },
      {
        key: "showMin",
        name: "显示分钟",
        type: "Switch"
      },
      {
        key: "showSec",
        name: "显示秒钟",
        type: "Switch"
      }
    ],
    config: {
      endTime: new Date().getTime() + 3600 * 24 * 1000,
      fontSize: 14,
      fontWeight: 400,
      color: "#000000",
      showDay: false,
      showHour: true,
      showMin: true,
      showSec: true
    }
  },
  // BvDivider
  {
    component: "BvDivider",
    name: "分割线",
    layout: {
      h: 50,
      w: 24
    },
    editData: [
      {
        key: "showText",
        name: "显示文本",
        type: "Switch"
      },
      {
        key: "dashed",
        name: "虚线",
        type: "Switch"
      },
      {
        key: "text",
        name: "文本",
        type: "Text"
      },
      {
        key: "contentPosition",
        name: "内容位置",
        type: "Select",
        options: [
          { label: "左侧", value: "left" },
          { label: "居中", value: "center" },
          { label: "右侧", value: "right" }
        ]
      },
      {
        key: "color",
        name: "文字颜色",
        type: "Color"
      },
      {
        key: "borderColor",
        name: "线条颜色",
        type: "Color"
      },
      {
        key: "padding",
        name: "边距",
        type: "Number",
        min: 0,
        max: 30
      }
    ],
    config: {
      showText: true,
      dashed: false,
      text: "文字",
      contentPosition: "center",
      color: "#CCCCCC",
      borderColor: "#CCCCCC",
      padding: 0
    }
  },
  // BvTab
  {
    component: "BvTab",
    name: "标签页",
    layout: {
      h: 118,
      w: 24
    },
    editData: [
      {
        key: "topBorderRadius",
        name: "顶部圆角",
        type: "Number",
        step: 1,
        min: 0,
        max: 20
      },
      {
        key: "bottomBorderRadius",
        name: "底部圆角",
        type: "Number",
        step: 1,
        min: 0,
        max: 20
      },
      {
        key: "color",
        name: "标签颜色",
        type: "Color"
      },
      {
        key: "navBgColor",
        name: "导航背景",
        type: "Color"
      },
      {
        key: "contentBgColor",
        name: "内容背景",
        type: "Color"
      },
      {
        key: "border",
        name: "导航边框",
        type: "Switch"
      },
      {
        key: "animated",
        name: "转场动画",
        type: "Switch"
      },
      {
        key: "tabs",
        name: "标签控件",
        type: "Tab"
      }
    ],
    config: {
      topBorderRadius: 0,
      bottomBorderRadius: 0,
      color: "#ee0a24",
      navBgColor: "#ffffff",
      contentBgColor: "#ffffff",
      border: true,
      animated: true,
      tabs: [
        {
          title: "标签1",
          content: "内容1",
          badge: "",
          dot: false,
          disabled: false
        },
        {
          title: "标签2",
          content: "内容2",
          badge: "",
          dot: false,
          disabled: false
        },
        {
          title: "标签3",
          content: "内容3",
          badge: "",
          dot: false,
          disabled: false
        }
      ]
    }
  },
  // BvAudio
  {
    component: "BvAudio",
    name: "音频",
    layout: {
      h: 36,
      w: 24
    },
    editData: [
      {
        key: "audio",
        name: "音频",
        type: "Text"
      },
      {
        key: "unsupported",
        name: "异常提示",
        type: "Text"
      },
      {
        key: "preload",
        name: "加载策略",
        type: "Select",
        options: [
          { label: "预加载", value: "auto" },
          { label: "仅预加载元信息", value: "metadata" },
          { label: "不预加载", value: "none" }
        ]
      },
      {
        key: "controls",
        name: "控制面板",
        type: "Switch"
      },
      {
        key: "autoplay",
        name: "自动播放",
        type: "Switch"
      },
      {
        key: "loop",
        name: "循环播放",
        type: "Switch"
      },
      {
        key: "muted",
        name: "默认静音",
        type: "Switch"
      }
    ],
    config: {
      audio: "http://h5.dooring.cn/audio.mp3",
      unsupported: "您的浏览器不支持audio标签。",
      preload: "auto",
      controls: true,
      autoplay: false,
      loop: false,
      muted: false
    }
  }
];
export default materialsList;
