<template>
  <div class="main">
    <h2>SIMON</h2>
    <router-link to="/play" tag="button">Play</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.main {
  max-width: 20em;
  background: white;
  border: 1px solid black;
  box-shadow: 0 0 11px -2px #666;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6em;
  padding: 2em;
}

h2 {
  color: black;
}

button {
  padding: 0.75em;
  border: 1px solid black;
  color: white;
  background: black;
  transition: all 0.25s;
}
button:hover {
  background: white;
  color: black;
}
</style>
