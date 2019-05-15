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
      component: () => import("./components/Dashboard.vue"),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "latest",
          component: () => import("./pages/Latest.vue")
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "Settings",
          component: () => import("./pages/Settings.vue")
        }
      ]
    },
    {
      path: "/auth/oauth-callback",
      name: "Handle OAuth",
      component: () => import("./components/HandleOauth.vue")
    }
  ]
});
