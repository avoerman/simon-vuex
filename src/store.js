import Vue from "vue";
import Vuex from "vuex";
import { GAME_STATES } from "@/util/game-constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameState: GAME_STATES.NOT_STARTED,
    litCell: "",
    demonstrating: false,
    currentSequence: [1, 2, 3, 4],
    currentGuessSequence: []
  },
  mutations: {
    addToSequence(state, newNumber) {
      state.currentGuessSequence = [...state.currentGuessSequence, newNumber];
    },
    toggleDemonstrating(state, toggleState) {
      state.demonstrating = toggleState;
    },
    lightSquare(state, square) {
      state.litCell = square;
    },
    updateGameState(state, gameState) {
      state.gameState = gameState;
    }
  },
  actions: {
    addToSequence({ commit }, newNumber) {
      commit("addToSequence", newNumber);
    },
    toggleDemonstrating({ commit }, toggleState) {
      commit("toggleDemonstrating", toggleState);
    },
    lightSquare({ commit }, square) {
      commit("lightSquare", square);
    },
    updateGameState({ commit }, gameState) {
      commit("updateGameState", gameState);
    }
  }
});
