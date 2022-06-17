<script lang="ts">
import { defineProps, defineComponent } from "vue";

export default defineComponent({
  name: 'PortfolioThumbnail',
  data() {
    return {
      play: false,
    };
  },
  props: {
    title: String,
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
  link: string,
  image: string,
  video: string,
}>()

</script>

<template>
  <div class="rounded-xl bg-coral-500 bg-[url('./assets/texture-25.png')] bg-blend-overlay relative mr-6 min-w-[80%] md:min-w-[45%] lg:min-w-[15vw] text-center p-[1rem] md:p-[2%] shadow-xl text-white" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="relative shadow-xl">
      <img :src="image" class="rounded-xl" />
      <video :src="video" v-if="play" class="absolute rounded-xl bottom-0" autoplay loop muted />
    </div>
    <h1 class="mt-6">{{ title }}</h1>
    <a :href="link" target="_blank" rel="noreferrer noopener" class="text-teal-t hover:text-coral-300 hover:underline duration-300"><p class="font-bold break-words text-base lg:text-lg">{{ link }}</p></a>
    <p class="font-normal text-sm lg:hidden py-2">(tap to play video)</p>
  </div>
</template>