<script setup>
import Header from './components/Header.vue'
</script>
<template>
  <Header />
  
  <router-view />
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
