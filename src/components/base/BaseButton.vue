<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
};
</script>

<style scoped>
.base-button {
  padding: 0.75em;
  border: 1px solid black;
  color: white;
  background: black;
  font-size: large;
  transition: all 0.25s;
}

.base-button:hover {
  background: white;
  color: black;
}
</style>
