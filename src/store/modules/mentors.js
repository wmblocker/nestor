import mentors from "../../api/mentors";

const state = () => ({ all: [] });

const getters = {};

const actions = {
  getAllMentors({ commit }) {
    mentors.getMentors((mentors) => {
      commit("setMentors", mentors);
    });
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
