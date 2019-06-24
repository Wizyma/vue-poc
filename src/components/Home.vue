<template>
  <div v-if="name && age">
    <h1 v-if="name">My name is {{ name }}</h1>
    <h2 v-if="age">And i am {{ age }} years old</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  props: {
    name: {
      type: String,
      default: null
    },
    age: {
      type: Number,
      default: null
    }
  },
  data: () => {
    // @ts-ignore
    console.log(this);
    return {};
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
