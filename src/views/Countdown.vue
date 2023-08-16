<script lang="ts">
export default {
  name: 'Countdown',
  data() {
    return {
      start_date: new Date() > new Date("2023-08-21") ? new Date() : new Date("2023-08-21"),
      end_date: new Date("2024-02-06"),
    };
  },
  methods: {
  },
  components: {
  },
}

</script>

<template>
  <div class="flex flex-col justify-center items-center py-12 px-6 min-h-screen bg-coral-100">
    <h1 class="text-center">
      <span class="text-teal-t text-[5rem] leading-snug">{{Math.ceil((end_date.getTime() - start_date.getTime())/(1000*60*60*24))}}<br /></span>
      <span class="text-coral-t text-lg">days left in the Netherlands</span>
    </h1>
  </div>
</template>

<style>
html,
body {
  scroll-behavior: smooth;
  scrollbar-color: #1D3935 #C2685B;
  scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 0.5em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #C2685B;
}

body::-webkit-scrollbar-thumb {
  background-color: #1D3935;
}

#portfolio {
  -ms-overflow-style: none; 
  scrollbar-width: none;
  overflow: -moz-scrollbars-none;
}

#portfolio::-webkit-scrollbar {
  display: none;
}

.vertical-rl {
  writing-mode: vertical-rl;
}

</style>