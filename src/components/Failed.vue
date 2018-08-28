<template>
  <div class="fail">
    <div class="failLine">:( Fail - Final Score: {{score}}</div>
    <div class="topScore">Top Score: {{topScore}}</div>
    <BaseButton class="restartButton" @click.native="restart()">Play again?</BaseButton>
  </div>
</template>

<script>
export default {
  name: "Failed",
  computed: {
    score() {
      return this.$store.state.currentSequence.length;
    },
    topScore() {
      return this.$store.state.topScore;
    }
  },
  methods: {
    restart() {
      this.$store.dispatch("restartGame");
    }
  }
};
</script>

<style scoped>
.fail {
  position: absolute;
  top: 20vh;
  padding: 3em;
  background: white;
  border: 1px solid black;
  z-index: 2;
  box-shadow: 0 0 11px -2px #666;
  color: black;
}
.failLine {
  font-size: larger;
}
.topScore {
  font-weight: bold;
  margin-top: 1em;
}
.restartButton {
  margin-top: 1em;
}
</style>
