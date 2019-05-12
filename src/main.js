import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FontLoader from "./components/FontLoader.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Notifications from "vue-notification";
import("normalize.css");

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Notifications);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.AUTHENTICATED_STATUS) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

new Vue({
  mixins: [FontLoader],
  router,
  store,
  render: h => h(App)
}).$mount("#app");
