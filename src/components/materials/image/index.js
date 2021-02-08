import Image from "./src/index";
Image.install = Vue => {
  Vue.component(Image.name, Image);
};
export default Image;
