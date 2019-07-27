// router.js
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  { name: 'Home', path: "/", component: () => import(/* webpackChunkName: "home" */"./components/Home.vue") },
  { name: 'About', path: "/about", component: () => import(/* webpackChunkName: "about" */"./components/About.vue") },
  { name: 'Items', path: "/items", component: () => import(/* webpackChunkName: "item" */"./components/Items.vue") }
];

export function createRouter() {
  return new Router({
    mode: "history",
    routes,
  });
}
