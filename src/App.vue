<script lang="ts">
import HomePage from './views/HomePage.vue'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import Ads from './views/Ads.vue'
import NotFound from './views/NotFound.vue'
import ComingSoon from './views/ComingSoon.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Countdown from './views/Countdown.vue'

const routes = {
  '/': HomePage,
  '/portfolio': Portfolio,
  '/about': About,
  '/ads': Ads,
  '/countdown': Countdown,
}

export default {
  data() {
    return {
      currentPath: window.location.pathname
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    currentView() : any {
      //@ts-ignore
      return (routes[this.currentPath] || NotFound);
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.pathname
    })
  }
}
</script>

<template>
  <nav>
    <Navbar :curr="currentPath" />
  </nav>
  <main>
    <component :is="currentView" />
  </main>
  <footer>
    <Footer :curr="currentPath" />
  </footer>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
