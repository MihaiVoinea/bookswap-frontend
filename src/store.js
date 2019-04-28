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
    name: {
      first_name: undefined,
      last_name: undefined
    }
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
  actions: {},
  plugins: [vuexLocal.plugin]
});
