import Placeholder from "./src/index";
Placeholder.install = Vue => {
  Vue.component(Placeholder.name, Placeholder);
};
export default Placeholder;
