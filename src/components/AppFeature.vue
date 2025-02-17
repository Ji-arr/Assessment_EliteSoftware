<template>
  <section class="p-10 bg-[#8db648]" id="features-container">
    <h3 class="text-6xl font-bold mb-4 text-white pb-10">Our Features</h3>
    <ul class="flex items-center p-4 justify-center gap-5">
      <li v-for="feature in features" :key="feature.id" class="mb-2">
        <div class="bg-white flex flex-col items-center p-10 rounded-lg">
          <strong>{{ feature.name }}</strong
          >{{ feature.description }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AppFeature",
  data() {
    return {
      features: [
        {
          id: 1,
          name: "Collaboration at its Core",
          description:
            "Our platform enables seamless collaboration, breaking down communication barriers to drive efficient teamwork. It empowers teams to share knowledge and innovate, no matter where they’re located.",
        },
        {
          id: 2,
          name: "Team Player",
          description:
            "We believe in the power of teamwork, providing tools that help your team work in sync and solve challenges together. Collaboration is key to achieving collective success.",
        },
        {
          id: 3,
          name: "Client-Centered",
          description:
            "We put clients at the center of everything, tailoring solutions to meet their unique needs. Our approach builds strong relationships and enhances satisfaction through personalized service.",
        },
      ],
    };
  },
};
</script>

<style>
@media screen and (max-width: 800px) {
  #features-container ul {
    flex-direction: column;
  }
  #features-container h3 {
    padding: 0;
  }
}
</style>
