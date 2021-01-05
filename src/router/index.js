import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/operating-floor"
  },
  {
    path: "/operating-floor",
    name: "OperatingFloor",
    component: () =>
      import(
        /* webpackChunkName: "OperatingFloor" */ "@/views/OperatingFloor.vue"
      )
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "@/views/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
