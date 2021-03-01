import Audio from "./src/index";
Audio.install = Vue => {
  Vue.component(Audio.name, Audio);
};
export default Audio;
