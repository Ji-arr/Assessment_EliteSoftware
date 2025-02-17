<template>
  <div>
    <AppHero />
    <AppFeature />
    <AppExtras />
    <AppOptionals />
  </div>
</template>

<script>
import AppHero from "../components/AppHero.vue";
import AppFeature from "../components/AppFeature.vue";
import AppExtras from "../components/AppExtras.vue";
import AppOptionals from "../components/AppOptionals.vue";

export default {
  name: "AppHome",
  components: {
    AppHero,
    AppFeature,
    AppExtras,
    AppOptionals,
  },
};
</script>
