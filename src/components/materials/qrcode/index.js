// 为组件提供 install 方法，供组件对外按需引入
import QRcode from "./src/index";
QRcode.install = Vue => {
  Vue.component(QRcode.name, QRcode);
};
export default QRcode;
