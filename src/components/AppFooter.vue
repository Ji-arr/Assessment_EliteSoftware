<template>
  <footer
    class="footer bg-[#343A40] text-white flex flex-col justify-center items-center gap-5"
  >
    <div class="flex justify-center items-center gap-5 w-3/4 py-10">
      <div>
        <h1 class="font-bold mb-2 w-64">Website Links</h1>
        <ul>
          <li v-for="link in links" :key="link.id">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 class="font-bold mb-2 w-64">
          Elite Software and Data Security Contact
        </h1>
        <ul>
          <li v-for="contact in employer_contact" :key="contact.id">
            <a :href="contact.url">{{ contact.name }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h1 class="font-bold mb-2 w-64">Jay-Ar's Contact</h1>
        <ul>
          <li v-for="contact in employee_contact" :key="contact.id">
            <a :href="contact.url">{{ contact.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-[#8db648] w-full">
      <p>&copy; 2025 Jay-Ar - Technical Assessment</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      links: [
        {
          id: 1,
          name: "Home",
          url: "/",
        },
        {
          id: 2,
          name: "Features",
          url: "/#features-container",
        },
        {
          id: 3,
          name: "Contact",
          url: "/contact",
        },
        {
          id: 4,
          name: "Optionals",
          url: "/#optionals-container",
        },
      ],

      employee_contact: [
        {
          id: 1,
          name: "Website",
          url: "https://ji-arr.github.io/portfolio/",
        },
        {
          id: 2,
          name: "09267535388",
          url: "tel:09267535388",
        },
        {
          id: 3,
          name: "portaganajayar@gmail.com",
          url: "mailto:portaganjayar@gmail.com",
        },
      ],

      employer_contact: [
        {
          id: 1,
          name: "Website",
          url: "https://www.elitesdsi.com/",
        },
        {
          id: 2,
          name: "(02) 8247 2056",
          url: "tel:(02) 8247 2056",
        },
        {
          id: 3,
          name: "info@elitesdsi.com",
          url: "mailto:info@elitesdsi.com",
        },
      ],
    };
  },
};
</script>

<style>
@media screen and (max-width: 800px) {
  .footer div {
    flex-direction: column;
  }

  .footer div h1 {
    width: fit-content;
  }
}
</style>
