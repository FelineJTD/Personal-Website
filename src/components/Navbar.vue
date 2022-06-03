<script setup lang="ts">
  import Home from "../assets/Home.svg"
  import Portfolio from "../assets/Portfolio.svg"
  import About from "../assets/About.svg"

defineProps<{ homeColor: string }>()

// const count = ref(0)
</script>

<template>
  <div class="bg-white h-12 flex justify-around items-center px-36 py-0.5 shadow-lg fixed w-full z-50">
    <a href='/'><Home class="hover:fill-coral-t" /></a>
    <a href='/portfolio'><Portfolio class="hover:fill-coral-t" /></a>
    <a href="/about"><About class="hover:fill-coral-t" /></a>
  </div>
  <!-- <h1 class="text-white">{{ msg }}</h1> -->

  <!-- <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is aaa: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
</template>

<!-- <style scoped>
/* a {
  color: #42b983;
} */

/* label {
  margin: 0 0.5em;
  font-weight: bold;
} */

/* code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
} */

</style> -->
