// 为组件提供 install 方法，供组件对外按需引入
import Tab from "./src/index";
Tab.install = Vue => {
  Vue.component(Tab.name, Tab);
};
export default Tab;
