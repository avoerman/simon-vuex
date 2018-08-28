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
  opacity: 1;
  border: 1px solid black;
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
</style>
