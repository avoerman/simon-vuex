<template>
  <div class="wrap">
    <BaseButton class="startButton" v-if="gameNotStarted" @click.native="start()">Start</BaseButton>
    <Failed v-if="gameFailed"></Failed>
    <div class="squares">
      <div class="row">
        <Square color="#019A4A" :lit="litCell === 1" :demonstrating="demonstrating"
                @click.native="handleSquareClick(1)"/>
        <Square color="#EB1C24" :lit="litCell === 3" :demonstrating="demonstrating"
                @click.native="handleSquareClick(3)"/>
      </div>
      <div class="row">
        <Square color="#FFDA01" :lit="litCell === 2" :demonstrating="demonstrating"
                @click.native="handleSquareClick(2)"/>
        <Square color="#6891CC" :lit="litCell === 4" :demonstrating="demonstrating"
                @click.native="handleSquareClick(4)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Square from "@/components/Square";
import Failed from "@/components/Failed";
import { GAME_STATES } from "@/util/game-constants";

export default {
  name: "Game",
  components: {
    Square,
    Failed
  },
  computed: {
    demonstrating() {
      return this.$store.state.demonstrating;
    },
    litCell() {
      return this.$store.state.litCell;
    },
    gameNotStarted() {
      return this.$store.state.gameState === GAME_STATES.NOT_STARTED;
    },
    gameFailed() {
      return this.$store.state.gameState === GAME_STATES.FAIL;
    }
  },
  created() {
    this.$store.dispatch("updateGameState", GAME_STATES.NOT_STARTED);
  },
  methods: {
    start() {
      this.$store.dispatch("startRound");
    },
    handleSquareClick(guessNumber) {
      this.$store.dispatch("guess", guessNumber);
    }
  }
};
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  position: relative;
}

.startButton {
  position: absolute;
  top: 20vh;
  padding: 2em;
  z-index: 2;
}

.squares {
  flex: 1;
  display: flex;
}
</style>
