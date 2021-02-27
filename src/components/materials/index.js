/**
 * 组件库入口
 * */

import BvButton from "./button";
import BvText from "./text";
import BvImage from "./image";
import BvPlaceholder from "./placeholder";
import BvSwipe from "./swipe";
import BvVideo from "./video";
import BvNotoceBar from "./notice-bar";
import BvForm from "./form";
import BvQrcode from "./qrcode";
import BvIcon from "./icon";
import BvCountdown from "./countdown";
import BvDivider from "./divider";

// 所有组件列表
const components = [
  BvButton,
  BvText,
  BvImage,
  BvPlaceholder,
  BvSwipe,
  BvVideo,
  BvNotoceBar,
  BvForm,
  BvQrcode,
  BvIcon,
  BvCountdown,
  BvDivider
];
// 定义 install 方法，接收 Vue 作为参数
const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.forEach(component => Vue.component(component.name, component));
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

let _register_components_object = {};
components.forEach(item => {
  _register_components_object[item.name] = item;
});

export {
  BvButton,
  BvText,
  BvPlaceholder,
  BvImage,
  BvSwipe,
  BvVideo,
  BvNotoceBar,
  BvForm,
  BvQrcode,
  BvIcon,
  BvCountdown,
  BvDivider,
  _register_components_object
};

export default {
  install
  // 所有组件，必须具有 install，才能使用 Vue.use()
};
