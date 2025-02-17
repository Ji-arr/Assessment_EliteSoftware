<template>
  <div class="contact-container py-10">
    <h1 class="text-3xl text-center">Contact Us</h1>
    <p class="text-xl text-center mt-4 mx-[20%]">
      THIS WILL CONSOLE LOG THE FORM DATA. <br />
      We would love to hear from you! Reach out to us via the form below
      <br /><span class="text-sm">
        Note: This form does not actually submit data to a server.
      </span>
    </p>
    <form @submit.prevent="handleSubmit" class="mt-6 max-w-lg mx-auto">
      <div class="mb-4">
        <label for="name" class="block text-lg">Name</label>
        <input
          type="text"
          id="name"
          class="p-2 w-full border rounded"
          v-model="name"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-lg">Email</label>
        <input
          type="email"
          id="email"
          class="p-2 w-full border rounded"
          v-model="email"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-lg">Message</label>
        <textarea
          id="message"
          rows="4"
          class="p-2 w-full border rounded"
          v-model="message"
        ></textarea>
      </div>
      <button type="submit" class="bg-green-500 text-white px-6 py-2 rounded">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppContact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission here (e.g., send data to an API)
      console.log("Form submitted:", this.name, this.email, this.message);
    },
  },
};
</script>

<style scoped>
.contact-container {
  text-align: center;
  margin-top: 20px;
}
form {
  margin-top: 20px;
}
</style>
