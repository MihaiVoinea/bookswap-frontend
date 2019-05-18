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
      component: () => import("./pages/Landing.vue"),
      meta: {
        guest: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./pages/Login.vue"),
      meta: {
        guest: true
      }
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./pages/Register.vue"),
      meta: {
        guest: true
      }
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
          path: "latest",
          component: () => import("./pages/Latest.vue")
        },
        {
          path: "settings",
          component: () => import("./pages/Settings.vue")
        },
        {
          path: "mybooks",
          component: () => import("./pages/MyBooks.vue")
        },
        {
          path: "addbook",
          component: () => import("./pages/GoodreadsAddBook.vue")
        },
        {
          path: "manualaddbook",
          component: () => import("./pages/ManualAddBook.vue")
        },
        {
          path: "viewbook/:id",
          component: () => import("./pages/ViewBook.vue")
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
