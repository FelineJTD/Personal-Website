<script lang="ts">
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
  <Navbar />
  <main>
    <component :is="currentView" />
  </main>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
