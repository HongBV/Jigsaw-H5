// 为组件提供 install 方法，供组件对外按需引入
import Button from "./src/index";
Button.install = Vue => {
  Vue.component(Button.name, Button);
};
export default Button;
