import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = { ...user };
    }
  },
  actions: {
    setUser(context, user) {
      context.commit("setUser", user);
    }
  },
  modules: {}
});
