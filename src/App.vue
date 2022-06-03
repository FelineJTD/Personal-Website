<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HomePage from './views/HomePage.vue'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Navbar from './components/Navbar.vue'

const routes = {
  '/': HomePage,
  '/portfolio': Portfolio,
  '/about': About
}

let currentPath = window.location.pathname;

export default {
  data() {
    return {
      currentPath: window.location.pathname
    }
  },
  components: {
    Navbar
  },
  computed: {
    currentView() : any {
      return routes[currentPath] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      currentPath = window.location.pathname
      console.log(currentPath);
    })
  }
}
console.log(currentPath);
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div>
    <Navbar />
    <main>
      <component :is="currentView" />
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
