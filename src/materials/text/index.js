// 为组件提供 install 方法，供组件对外按需引入
import Text from "./src/index";
Text.install = Vue => {
  Vue.component(Text.name, Text);
};
export default Text;
