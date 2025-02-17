<template>
  <section id="header-section">
    <div
      class="herop-4 flex justify-between w-full h-96 flex items-center px-[10%] gap-4 h-[60vh]"
      id="hero"
    >
      <div class="w-1/2 flex flex-col justify-left gap-10">
        <h1
          v-if="showAbout === 'jayar'"
          class="text-3xl font-bold text-left text-[#414a4c]"
        >
          Welcome to my technical Assessment for Elite Softwares and Data
          Security Inc.
        </h1>
        <h1
          v-if="showAbout === 'company'"
          class="text-3xl font-bold text-left text-[#414a4c]"
        >
          Welcome to Elite Software and Data Security, Inc. <br />
          <span class="text-lg">
            We make sure your system is secured and always available.</span
          >
        </h1>
        <div class="button-container flex gap-4">
          <button
            class="bg-[#8db648] text-white p-2 rounded shadow-lg"
            @click="showAbout = 'company'"
          >
            About the company
          </button>
          <button
            class="bg-[#FFC54D] text-white p-2 rounded shadow-lg"
            @click="showAbout = 'jayar'"
          >
            About Jay-Ar
          </button>
        </div>
      </div>
      <div
        class="picture-container w-1/2 flex items-center justify-end gap-2 h-40"
      >
        <div
          class="h-full bg-[#f1f1f1] flex items-center justify-center aspect-[1/1] rounded-full overflow-hidden"
        >
          <img
            class="w-[160px] p-2 rounded-lg"
            src="https://www.elitesdsi.com/assets/img/elitelogo.png"
            alt="Elite Software"
          />
        </div>

        <div class="flex items-center justify-center">
          <h1 class="text-8xl font-bold text-black">x</h1>
        </div>
        <img
          class="h-[100%] aspect-[1/1] rounded-full"
          src="https://ji-arr.github.io/portfolio/assets/jiar2-DYlDNPXh.jpg"
          alt="ji-arr"
        />
      </div>
    </div>

    <!-- Dynamically show content -->
    <div
      class="flex flex-col mt-6 text-white bg-black px-[10%] p-12 items-center justify-center"
      id="selected-description"
    >
      <h1 class="pb-5 text-lg font-bold">
        Dynamically show info based on the buttons
      </h1>
      <p v-if="showAbout === 'company'">
        Established in 2018, Elite Software and Data Security (EliteSDSI) is an
        IT company composed of highly qualified and seasoned professionals,
        trained in different areas of business and management, programming, IT,
        technological development and communication. EliteSDSI provides
        applications support and maintenance, addressing security of information
        under proper and strict regulatory compliance.
      </p>
      <p v-if="showAbout === 'jayar'">
        Aspiring software engineer with a strong foundation in both front-end
        and back-end development, I bring experience in data analytics and a
        Bachelor of Science in Computer Science from Cavite State University,
        where I led my undergraduate thesis project. My professional experience
        includes internships at Straightforward Education and Endsofttech Web
        Solutions, where I successfully managed full project development cycles,
        handled website updates, and oversaw content management, ensuring high
        standards of quality and efficiency. I am proficient in a range of
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHero",
  data() {
    return {
      showAbout: "company", // to track which content to show
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 800px) {
  #hero {
    flex-direction: column;
    justify-content: center;
  }
  #hero div {
    font-size: 16px;
    width: 100%;
  }
  #hero h1 {
    text-align: center;
  }
  #hero .picture-container {
    height: 100px;
    gap: 0;
    font: bold;
  }
  #hero .picture-container div {
    height: 100px;
    padding: 0;
  }
  #hero .button-container {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  #hero button {
    font-size: 12px;
  }

  #selected-description {
    font-size: 14px;
  }
}
</style>
