<script lang="ts">
import { defineProps, defineComponent } from "vue";

export default defineComponent({
  name: "PortfolioCard",
  data() {
    return {
      play: false,
    };
  },
  props: {
    isThumbnail: Boolean,
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
  isThumbnail: boolean;
  title: string;
  desc: string;
  islinkactive: boolean;
  link: string;
  image: string;
  video: string;
}>();
</script>

<template>
  <div
    class="min-w-64 rounded-xl bg-coral-500 bg-[url('./assets/texture-25.png')] bg-blend-overlay relative w-full text-center p-4 md:p-6 shadow-xl text-white"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="relative shadow-xl w-fit m-auto">
      <img :src="image" alt="" class="rounded-xl md:max-h-[36rem]" />
      <video
        :src="video"
        v-if="play"
        class="absolute rounded-xl bottom-0"
        autoplay
        loop
        muted
      />
    </div>
    <h1 class="mt-6">{{ title }}</h1>
    <a
      :href="islinkactive ? link : undefined"
      target="_blank"
      :class="
        islinkactive ? 'hover:text-coral-300 hover:underline' : 'opacity-30'
      "
      class="text-teal-t duration-300 w-full"
      ><p class="font-bold text-base break-words">{{ link }}</p></a
    >
    <p class="font-normal text-sm lg:hidden py-2">(tap to play video)</p>
    <p class="mt-6" v-if="!isThumbnail">{{ desc }}</p>
  </div>
</template>
