<script lang="ts">
export default {
  name: 'Portfolio',
  data() {
    return {
    };
  },
}

</script>

<template>
  <div class="min-h-screen bg-coral-100 bg-texture bg-blend-overlay pt-12 px-[8%]">
    <img src="../assets/portfolio/Browse_My_Web_Portfolio.svg" alt="Browse my web portfolio" class="h-[3rem] my-16">
    {{ aaa }}
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