// 为组件提供 install 方法，供组件对外按需引入
import Video from "./src/index";
Video.install = Vue => {
  Vue.component(Video.name, Video);
};
export default Video;
