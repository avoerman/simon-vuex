import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSequence: [1, 2, 3, 4],
    currentGuessSequence: []
  },
  mutations: {
    addToSequence(state, newNumber) {
      state.currentGuessSequence = [...state.currentGuessSequence, newNumber];
    }
  },
  actions: {
    addToSequence({ commit }, newNumber) {
      commit("addToSequence", newNumber);
    }
  }
});
