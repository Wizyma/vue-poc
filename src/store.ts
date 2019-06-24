import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Andre Gomes",
    age: "25"
  },
  mutations: {
    changeName: (state, payload) => ({
      ...state,
      name: payload.name
    }),
    changeAge: (state, payload) => ({
      ...state,
      age: payload.age
    })
  },
  actions: {}
});
