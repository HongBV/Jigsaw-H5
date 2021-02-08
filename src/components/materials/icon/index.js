import Icon from "./src/index";
Icon.install = Vue => {
  Vue.component(Icon.name, Icon);
};
export default Icon;
