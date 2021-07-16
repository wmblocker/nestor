import Vue from "vue";
import Vuex from "vuex";
import Rooms from "./modules/rooms";
import User from "./modules/user";
import Mentors from "./modules/mentors";
import Mentees from "./modules/mentees";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appID: "vpaas-magic-cookie-b34307fd6806488fa62b1f3631405801",
  },
  mutations: {},
  actions: {},
  modules: {
    Rooms,
    User,
    Mentees,
    Mentors,
  },
});
