// 为组件提供 install 方法，供组件对外按需引入
import Divider from "./src/index";
Divider.install = Vue => {
  Vue.component(Divider.name, Divider);
};
export default Divider;
