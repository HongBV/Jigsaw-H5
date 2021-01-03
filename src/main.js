import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Vant from "vant";
import { Lazyload } from "vant";
import "element-ui/lib/theme-chalk/index.css";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
