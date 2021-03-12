import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { authMiddleware } from "../middleware/auth";
import { rolesMiddleware } from "../middleware/roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test1",
    name: "Test1",
    component: Home,
    meta: {
      auth: true,
      roles: ["admin", "operator"]
    }
  },
  {
    path: "/test2",
    name: "Test2",
    component: Home,
    meta: {
      auth: true,
      roles: ["admin"]
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {
  await authMiddleware(to, from, next);
  await rolesMiddleware(to, from, next);
});

export default router;
