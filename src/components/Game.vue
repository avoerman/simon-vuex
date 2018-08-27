<template>
  <div class="wrap">
    <button @click="start()">Start</button>
    <div class="squares">
      <div class="row">
        <Square color="#019A4A" :lit="tlLit" :demonstrating="demonstrating"
                @click.native="handleSquareClick(1)"/>
        <Square color="#EB1C24" :lit="blLit" :demonstrating="demonstrating"
                @click.native="handleSquareClick(2)"/>
      </div>
      <div class="row">
        <Square color="#FFDA01" :lit="trLit" :demonstrating="demonstrating"
                @click.native="handleSquareClick(3)"/>
        <Square color="#6891CC" :lit="brLit" :demonstrating="demonstrating"
                @click.native="handleSquareClick(4)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Square from "@/components/Square";

export default {
  name: "Game",
  components: {
    Square
  },
  props: {},
  data() {
    return {
      tlLit: false,
      trLit: false,
      blLit: false,
      brLit: false,
      demonstrating: false
    };
  },
  computed: {},
  created() {},
  methods: {
    start() {
      const currentSequence = this.$store.state.currentSequence;

      const light = lightNumber => {
        this.tlLit = lightNumber === 1;
        this.trLit = lightNumber === 2;
        this.blLit = lightNumber === 3;
        this.brLit = lightNumber === 4;
      };

      const lightSequence = (index = 0) => {
        this.demonstrating = true;
        setTimeout(() => {
          if (currentSequence[index]) {
            light(currentSequence[index]);
            lightSequence(index + 1);
          } else {
            this.demonstrating = false;
            light(-1);
          }
        }, 1000);
      };

      lightSequence();
    },
    handleSquareClick(guess) {
      console.log("click", guess);
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
}

.squares {
  flex: 1;
  display: flex;
}
</style>
