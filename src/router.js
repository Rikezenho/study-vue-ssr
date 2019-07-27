// router.js
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      { name: 'About', path: "/about", component: () => import(/* webpackChunkName: "about" */"./components/About.vue") },
      { name: 'Item', path: "/item/:id", component: () => import(/* webpackChunkName: "item" */"./components/Item.vue") }
    ]
  });
}
