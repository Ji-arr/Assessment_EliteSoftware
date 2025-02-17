<template>
  <header class="header p-4 flex justify-between shadow-lg" id="header-app">
    <h1 class="text-xl font-bold text-[#8db648] p-2">
      Jay-Ar - Technical Asssessment
    </h1>
    <nav class="w-auto">
      <ul class="flex space-x-4 bg-black p-2 rounded-md">
        <!-- <a
          href="#header-section"
          class="text-black hover:bg-green-500 hover:px-2 rounded-sm"
          >Home</a
        >
        <a
          href="#features-container"
          class="text-black hover:bg-green-500 hover:px-2 rounded-sm"
          >Features</a
        > -->
        <router-link
          to="/"
          class="text-black hover:bg-green-500 hover:px-2 rounded-sm"
          >Home</router-link
        >

        <router-link
          to="/contact"
          class="text-black hover:bg-green-500 hover:px-2 rounded-sm"
          >Contact</router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: white;
}
@media screen and (max-width: 800px) {
  #header-app {
    flex-direction: column;
    justify-content: center;
  }
  #header-app nav ul {
    padding: 10px 0px;
    justify-content: center;
    font-size: 16px;
  }
}
</style>
