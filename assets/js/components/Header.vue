<script setup>
</script>
<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "A list of words",
      words: []
    };
  },
  mounted() {

    let el = document.querySelector("div[data-words]");
    let mywords = el.dataset.words.split(",");

    this.words.push.apply(this.words, mywords);
  }
};
</script>

<style>
.center {
  text-align: center;
}
</style>
