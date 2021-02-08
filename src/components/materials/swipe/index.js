// 为组件提供 install 方法，供组件对外按需引入
import Swipe from "./src/index";
Swipe.install = Vue => {
  Vue.component(Swipe.name, Swipe);
};
export default Swipe;
