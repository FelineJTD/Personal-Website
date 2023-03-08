<script lang="ts">
import { defineProps, defineComponent } from "vue";

export default defineComponent({
  name: 'PortfolioCard',
  data() {
    return {
      play: false,
    };
  },
  props: {
    title: String,
    desc: String,
    islinkactive: Boolean,
    link: String,
    image: String,
    video: String,
  },
  methods: {
    onMouseEnter() {
      this.play = true;
    },
    onMouseLeave() {
      this.play = false;
    },
  },
});

defineProps<{ 
  title: string,
  desc: string,
  islinkactive: boolean,
  link: string,
  image: string,
  video: string,
}>()

</script>

<template>
  <div class="rounded-xl bg-coral-500 bg-[url('./assets/texture-25.png')] bg-blend-overlay relative w-[100%] md:w-[48%] lg:w-[32%] text-center p-[1rem] md:p-[2%] shadow-xl text-white mb-6" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="relative shadow-xl">
      <img :src="image" class="rounded-xl" />
      <video :src="video" v-if="play" class="absolute rounded-xl bottom-0" autoplay loop muted />
    </div>
    <h1 class="mt-6">{{ title }}</h1>
    <a :href="islinkactive? link : undefined" target="_blank" :class="islinkactive ? 'hover:text-coral-300 hover:underline' : 'opacity-30'" class="text-teal-t duration-300 w-full"><p class="font-bold text-base">{{ link }}</p></a>
    <p class="mt-6">{{ desc }}</p>

  </div>
</template>