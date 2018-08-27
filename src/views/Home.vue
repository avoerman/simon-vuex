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
  border: 1px solid dodgerblue;
  box-shadow: 2px 2px 3px 0 #ccc;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6em;
  padding: 2em;
}

button {
  padding: 1em;
  border: 1px solid teal;
  color: teal;
  background: white;
  transition: all 0.25s;
}
button:hover {
  background: teal;
  color: white;
}
</style>
