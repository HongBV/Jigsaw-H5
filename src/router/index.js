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
  },
  {
    path: "/preview",
    name: "Preview",
    component: () =>
      import(/* webpackChunkName: "Preview" */ "@/views/Preview.vue")
  },
  {
    path: "/page",
    name: "Page",
    component: () => import(/* webpackChunkName: "Page" */ "@/views/Page.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
