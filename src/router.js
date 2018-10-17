import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sandbox",
      components: {
        default: () =>
          import(/* webpackChunkName: "sandbox" */ "./views/Sandbox.vue")
      },
      children: [
        {
          path: "menu",
          component: () =>
            import(/* webpackChunkName: "sandboxmenu" */ "./components/sandbox/Menu.vue")
        },
        {
          path: "draw-scroll",
          component: () =>
            import(/* webpackChunkName: "drawscroll" */ "./components/sandbox/DrawScroll.vue")
        }
      ]
    }
  ]
});
