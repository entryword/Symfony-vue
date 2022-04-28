<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: { Header },
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
