<template>
  <section class="p-4 text-white h-96 w-full" id="social-media-container">
    <div
      class="flex justify-center items-center gap-5 h-full"
      id="social-media-links"
    >
      <div>
        <ul class="flex gap-10">
          <li
            v-for="link in employee_contact"
            :key="link.id"
            class="bg-[#8db648] bg-gray-100 w-40 h-40 flex justify-center items-center rounded-full"
          >
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#8db648] text-2xl"
            >
              <i :class="link.icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppExtras",
  data() {
    return {
      employee_contact: [
        {
          id: 1,
          name: "Facebook",
          url: "https://www.facebook.com/",
          icon: "fab fa-facebook-f",
        },
        {
          id: 2,
          name: "LinkedIn",
          url: "https://linkedin.com/",
          icon: "fab fa-linkedin-in",
        },
        {
          id: 3,
          name: "GitHub",
          url: "https://github.com/",
          icon: "fab fa-github",
        },
        {
          id: 4,
          name: "Twitter",
          url: "https://twitter.com/",
          icon: "fab fa-twitter",
        },
        // Add more social media links here as needed
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 800px) {
  #social-media-links div ul {
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
  }

  #social-media-links div ul li {
    height: 4rem;
    width: 4rem;
  }
}
</style>
