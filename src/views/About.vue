<script lang="ts">
// import PortfolioCard from "../components/PortfolioCard.vue";
// import portfolios from "../data/portfolios.json";
export default {
  name: "About",
  data() {
    return { x: 0, window };
  },
  methods: {
    onMousemove(e: MouseEvent) {
      this.x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      this.y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    },
  },
};
</script>

<template>
  <div
    class="min-h-screen bg-coral-100 bg-texture25 bg-blend-overlay pt-12 px-[8%] pb-40 text-teal-t overflow-x-hidden"
    @mousemove="onMousemove"
  >
    <aside
      v-if="window.innerWidth > 976"
      class="invisible lg:visible fixed top-0 right-0 h-[101%] w-full overflow-hidden"
    >
      <img
        src="../assets/about/right.svg"
        alt=""
        class="absolute -right-[20px] top-0 h-full object-cover"
        :style="{ transform: `translateX(${x * 20}px)` }"
      />
      <img
        src="../assets/about/feli.png"
        alt="Feli's photo"
        class="absolute -right-12 bottom-0 h-[100vh]"
        :style="{ transform: `translateX(${x * 50}px)` }"
      />
      <img
        src="../assets/about/circles.svg"
        alt=""
        class="absolute -right-12 top-16 h-[25%]"
        :style="{ transform: `translateX(${x * 100}px)` }"
      />
    </aside>
    <section class="relative w-full lg:w-[67%]">
      <img
        :src="
          window.innerWidth > 480
            ? '/about/I_create_websites_tailored_to_your_needs.svg'
            : '/about/I_create_websites_tailored_to_your_needs_mobile.svg'
        "
        alt="I create websites tailored to your needs."
        class="h-[10rem] md:h-[7rem] mt-16 mb-10"
      />
      <p>
        My name is Felicia Sutandijo and I&apos;m a web developer based in
        Bandung, Indonesia. Right now, I am studying Computer
        Science/Informatics Engineering in Bandung Institute of Technology
        (ITB). I love coding, art, and cats. More than that, my passion lies in
        problem-solving and delivering products that will benefit people.
      </p>
      <a
        href="/Resume Felicia Sutandijo.pdf"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button
          class="my-12 -ml-1 py-3 px-8 bg-coral-t rounded-4xl hover:bg-teal-t text-white duration-200 font-bold text-xl"
        >
          Download CV/resume
        </button>
      </a>
      <h1 class="mb-4">Trivia</h1>
      <ul>
        <li>
          <p>
            I published my journal!
            <a
              href="https://journal.feliciasutandijo.my.id"
              class="text-coral-400 underline hover:text-coral-500 duration-300"
              >https://journal.feliciasutandijo.my.id</a
            >
          </p>
        </li>
        <li>
          <p>
            Favourite front-end tech stacks: Svelte, Vue, Tailwind CSS, React,
            Next
          </p>
        </li>
        <li><p>Favourite programming languages: Python, Typescript</p></li>
        <li>
          <p>
            I mostly learn from: YouTube, documentations, and Stack Overflow
          </p>
        </li>
      </ul>
      <!-- <p class="mt-12 text-base" v-if="window.innerWidth > 780">P.S. There is an easter egg on this page ;)</p>
      <p class="mt-2 md:mb-6 text-base" v-if="window.innerWidth > 780">P.S.S. Hit Ctrl+A</p> -->
      <!-- <p class="text-coral-100 text-xs md:text-xl" v-if="window.innerHeight >= 900">HIRE ME AAAAAAA <br /> I WANNA MAKE MORE PRETTY WEBSIIITEESSS</p> -->
      <!-- <p class="text-coral-100 text-xs md:text-xl" v-if="window.innerWidth > 780">IISMAAAA PLEASE ACCEPT MEEEE <br /> I WANNA MEET FOREIGNERS AND SHOW THEM INDONESIA IS COOOOLLL</p> -->
    </section>
  </div>
</template>
