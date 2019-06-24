<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Continents />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Continents from "./components/Continents.vue";

export default Vue.extend({
  name: "app",
  data: () => ({
    name: "André Gomes",
    age: 25
  }),
  components: {
    Continents
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
