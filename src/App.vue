<template>
  <div id="app">
    <AppHeader />

    <!-- This will change based on the current route -->
    <router-view />

    <AppFooter />
  </div>
</template>

<script>
// Import your components
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
