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
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "@/views/Register.vue")
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  const ignoreRoutes = ["Login", "Register", "Page"];
  if (isAuthenticated || ignoreRoutes.includes(to.name)) next();
  else next({ name: "Login" });
});

export default router;
