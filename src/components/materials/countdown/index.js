import Countdown from "./src/index";
Countdown.install = Vue => {
  Vue.component(Countdown.name, Countdown);
};
export default Countdown;
