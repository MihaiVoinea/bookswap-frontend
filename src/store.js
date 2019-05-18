import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUri: "https://bookswap.ro/api/v1",
    id: undefined,
    isAuthenticated: false,
    jwt: undefined,
    displayName: undefined,
    fullName: undefined,
    region: undefined,
    location: undefined,
    photoUrl: undefined
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
    },
    SET_REGION: (state, status) => {
      state.region = status;
    },
    SET_LOCATION: (state, status) => {
      state.location = status;
    },
    SET_PHOTO_URL: (state, status) => {
      state.photoUrl = status;
    }
  },
  getters: {
    FULL_NAME: state => {
      return state.fullName;
    },
    DISPLAY_NAME: state => {
      return state.displayName;
    },
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
    },
    REGION: state => {
      return state.region;
    },
    LOCATION: state => {
      return state.location;
    }
  },
  actions: {
    loadUser(context) {
      Vue.axios({
        method: "get",
        url: context.state.apiUri + "/user"
      })
        .then(response => {
          context.commit("SET_DISPLAY_NAME", response.data.displayName);
          context.commit("SET_FULL_NAME", response.data.fullName);
          context.commit("SET_REGION", response.data.region);
          context.commit("SET_LOCATION", response.data.location);
          context.commit("SET_PHOTO_URL", response.data.photoUrl);
        })
        .catch(error => {
          console.log(error.response);
          return error;
        });
    },
    logout(context) {
      context.commit("SET_AUTHENTICATED_STATUS", false);
      context.commit("SET_DISPLAY_NAME", undefined);
      context.commit("SET_FULL_NAME", undefined);
      context.commit("SET_REGION", undefined);
      context.commit("SET_LOCATION", undefined);
      context.commit("SET_JWT", undefined);
      context.commit("SET_ID", undefined);
      context.commit("SET_PHOTO_URL", undefined);
    }
  },
  plugins: [vuexLocal.plugin]
});
