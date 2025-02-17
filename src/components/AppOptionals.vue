<template>
  <section
    class="flex flex-col items-center justify-center bg-black p-20"
    id="optionals-container"
  >
    <h1
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white break-words"
    >
      API calls and Animation
    </h1>
    <div class="bg-black text-white h-96 w-[90%] m-20">
      <button @click="fetchData" class="bg-green-500 px-10 py-5 rounded-lg">
        Get Jokes From Public API
      </button>
      <div class="border m-10 h-96 flex items-center justify-center">
        <div v-if="loading" class="text-lg sm:text-xl md:text-2xl break-words">
          Loading...
        </div>
        <div
          v-else-if="error"
          class="text-lg sm:text-xl md:text-2xl break-words"
        >
          Error: {{ error }}
        </div>
        <div
          v-else-if="data"
          class="text-lg sm:text-xl md:text-2xl p-5 break-words"
        >
          <pre class="whitespace-pre-wrap">{{ jokeText }}</pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null);
    const jokeText = ref("");
    const fullText = ref("");
    const fetchData = async () => {
      loading.value = true;
      error.value = null;
      jokeText.value = "";
      try {
        const response = await fetch("https://icanhazdadjoke.com/slack");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        data.value = await response.json();
        if (data.value.attachments && data.value.attachments.length > 0) {
          fullText.value = data.value.attachments[0].text; // Set the joke text
          typeWriter(); // Call the typing effect
        }
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    // Typing effect function
    const typeWriter = () => {
      let i = 0;
      jokeText.value = ""; // Clear any previous text before typing new one
      const speed = 10; // Speed of typing (in ms)

      // Function to type each character one by one
      const interval = setInterval(() => {
        if (i < fullText.value.length) {
          jokeText.value += fullText.value.charAt(i); // Append each character
          i++;
        } else {
          clearInterval(interval); // Stop typing once the text is fully displayed
        }
      }, speed);
    };

    return { data, loading, error, fetchData, jokeText };
  },
};
</script>

<style>
/* Add any additional custom styles if needed */
</style>
