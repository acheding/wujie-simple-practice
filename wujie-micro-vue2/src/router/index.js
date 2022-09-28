import Vue from "vue";
import Router from "vue-router";
import Micro from "@/views/micro";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "micro",
    component: Micro,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
