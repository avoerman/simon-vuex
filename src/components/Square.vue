<template>
  <div class="block" v-bind:style="blockStyles"
       v-bind:class="{ lit: lit, hoverable: !demonstrating}"></div>
</template>

<script>
import Color from "color";

export default {
  name: "Square",
  props: {
    color: "",
    lit: false,
    demonstrating: false
  },
  computed: {
    blockStyles() {
      const subtleLight = Color(this.color).lighten(0.4);
      const veryLight = Color(this.color).lighten(0.6);

      return {
        background: this.color,
        ["background-image"]: this.lit
          ? `radial-gradient( ${veryLight}, ${this.color})`
          : `radial-gradient( ${subtleLight}, ${this.color})`
      };
    }
  }
};
</script>

<style scoped>
.block {
  width: 48vw;
  max-width: 20em;
  padding-top: 100%;
  border: 1px solid #666;
  border-radius: 2em;
  opacity: 0.25;
  transition: opacity 0.5s linear;
}

.lit {
  border: 1px solid black;
  animation: flash 1s ease-in;
}

.hoverable {
  cursor: pointer;
}

@media (pointer: fine) {
  .hoverable:hover {
    border: 1px solid black;
    opacity: 0.5;
  }
}

@keyframes flash {
  0% {
    opacity: 0.25;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 0.25;
  }
}
</style>
