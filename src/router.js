import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("./pages/Landing.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./pages/Login.vue")
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("./pages/Dashboard.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/auth/oauth-callback",
      name: "Handle OAuth",
      component: () => import("./components/HandleOauth.vue")
    }
  ]
});
