<template>
  <div class="block" v-bind:style="{ background: color }"
       v-bind:class="{ lit: lit, hoverable: !demonstrating}"></div>
</template>

<script>
export default {
  name: "Square",
  props: {
    color: "",
    lit: false,
    demonstrating: false
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
