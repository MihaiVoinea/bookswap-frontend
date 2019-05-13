import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUri: "http://localhost:8081/api/v1",
    id: undefined,
    isAuthenticated: false,
    jwt: undefined,
    displayName: undefined,
    fullName: undefined
  },
  mutations: {
    SET_JWT: (state, newJwt) => {
      state.jwt = newJwt;
    },
    SET_ID: (state, newId) => {
      state.id = newId;
    },
    SET_AUTHENTICATED_STATUS: (state, status) => {
      state.isAuthenticated = status;
    },
    SET_DISPLAY_NAME: (state, status) => {
      state.displayName = status;
    },
    SET_FULL_NAME: (state, status) => {
      state.fullName = status;
    }
  },
  getters: {
    JWT: state => {
      return state.jwt;
    },
    AUTHENTICATED_STATUS: state => {
      return state.isAuthenticated;
    },
    API_URI: state => {
      return state.apiUri;
    },
    ID: state => {
      return state.id;
    }
  },
  actions: {
    loadUser(context) {
      Vue.axios({
        method: "get",
        url: "http://localhost:8081/api/v1/user"
      })
        .then(response => {
          console.log(response);
          context.commit("SET_DISPLAY_NAME", response.data.displayName);
        })
        .catch(error => {
          console.log(error.response);
          return error;
        });
    }
  },
  plugins: [vuexLocal.plugin]
});
