<template>
  <div id="app">
    <AppHeader />

    <!-- Wrap the router-view in a transition for page animations -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

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

/* Animation for fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
