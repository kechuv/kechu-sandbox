import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },

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
        },
        {
          path: "parallax-demo",
          component: () =>
            import(/* webpackChunkName: "parallaxdemo" */ "./components/sandbox/ParallaxDemo.vue")
        }
      ]
    }
  ]
});
