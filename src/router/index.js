import Vue from "vue";
import VueRouter from "vue-router";

// 处理路由跳转异常错误
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/welcome",
    component: () =>
      import(/* webpackChunkName: "Welcome" */ "@/views/Welcome.vue")
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "Welcome" */ "@/views/Welcome.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "OperatingFloor" */ "@/views/Dashboard.vue")
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
  const ignoreRoutes = ["Welcome", "Login", "Register", "Page"];
  if (isAuthenticated || ignoreRoutes.includes(to.name)) next();
  else next({ name: "Login" });
});

export default router;
