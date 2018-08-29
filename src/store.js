import Vue from "vue";
import Vuex from "vuex";
import { GAME_STATES } from "@/util/game-constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameState: GAME_STATES.NOT_STARTED,
    litCell: "",
    demonstrating: false,
    currentSequence: [],
    guessIndex: 0,
    topScore: 0
  },
  mutations: {
    addToSequence(state, newNumber) {
      state.currentSequence = [...state.currentSequence, newNumber];
    },
    toggleDemonstrating(state, toggleState) {
      state.demonstrating = toggleState;
    },
    lightSquare(state, square) {
      state.litCell = square;
    },
    updateGameState(state, gameState) {
      state.gameState = gameState;
    },
    incrementGuessIndex(state) {
      state.guessIndex++;
    },
    resetGuessIndex(state) {
      state.guessIndex = 0;
    },
    resetSequence(state) {
      state.currentSequence = [];
    },
    topScore(state, newTopScore) {
      state.topScore = newTopScore;
    }
  },
  actions: {
    startRound({ dispatch, commit }) {
      dispatch("updateGameState", GAME_STATES.STARTED);
      commit("resetGuessIndex");
      dispatch("addToSequence");
      dispatch("toggleDemonstrating", true);
      dispatch("lightSequence", 0);
    },
    lightSequence({ dispatch, state }, sequenceIndex) {
      setTimeout(() => {
        if (state.currentSequence[sequenceIndex]) {
          dispatch("lightSquare", -1);
          setTimeout(() => {
            dispatch("lightSquare", state.currentSequence[sequenceIndex]);
            dispatch("lightSequence", sequenceIndex + 1);
          }, 100);
        } else {
          dispatch("toggleDemonstrating", false);
          dispatch("lightSquare", -1);
        }
      }, 1000);
    },
    restartGame({ commit, dispatch }) {
      commit("resetGuessIndex");
      commit("resetSequence");
      dispatch("startRound");
    },
    guess({ state, dispatch, commit }, guessNumber) {
      if (guessNumber === state.currentSequence[state.guessIndex]) {
        const lastGuess = state.guessIndex === state.currentSequence.length - 1;
        if (!lastGuess) {
          commit("incrementGuessIndex");
        } else {
          dispatch("startRound");
        }
      } else {
        dispatch("updateGameState", GAME_STATES.FAIL);
        dispatch("setTopScore", state.currentSequence.length);
      }
    },
    addToSequence({ commit }) {
      const newNumber = Math.floor(Math.random() * 4 + 1);
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
    },
    setTopScore({ state, commit }, score) {
      if (score > state.topScore) {
        commit("topScore", score);
      }
    }
  }
});
