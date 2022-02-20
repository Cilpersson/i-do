import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import SaveTheDate from "../views/SaveTheDate.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: SaveTheDate,
  },
  {
    path: "/login",
    name: "login",

    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
