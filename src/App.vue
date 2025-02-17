<template>
  <AppHeader />
  <AppHero />
  <AppFeature />
  <AppExtras />
  <AppFooter />
  <!-- Make sure this is included in the template -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/AppHero.vue";
import AppFooter from "./components/AppFooter.vue";
import AppFeature from "./components/AppFeature.vue";
import AppExtras from "./components/AppExtras.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppHero,
    AppFeature,
    // HelloWorld,
    AppExtras,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
