import Form from "./src/index";
Form.install = Vue => {
  Vue.component(Form.name, Form);
};
export default Form;
