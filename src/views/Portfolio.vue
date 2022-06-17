<script lang="ts">
import PortfolioCard from "../components/PortfolioCard.vue";
import portfolios from "../data/portfolios.json";
export default {
  name: "Portfolio",
  data() {
    return {
      portfolios,
      window,
    };
  },
  methods: {
    mobile() {
      console.log('changing');
      return window.innerWidth > 480;
    }
  },
  created() {
    window.addEventListener("resize", this.window);
  },
  unmounted() {
    window.removeEventListener("resize", this.window);
  },
  components: { PortfolioCard }
}

</script>

<template>
  <div class="min-h-screen bg-coral-100 bg-texture bg-blend-overlay pt-12 px-[8%] pb-36">
    <img :src="window.innerWidth > 480 ? '/portfolio/Browse_My_Web_Portfolio.svg' : '/portfolio/Browse_my_web_portfolio_mobile.svg'" alt="Browse my web portfolio" class="h-[6rem] md:h-[3rem] my-16">
    <section class="flex w-full flex-wrap justify-between">
      <PortfolioCard v-for="portfolio in portfolios" :key='portfolio.title' :title="portfolio.title" :desc="portfolio.desc" :link="portfolio.link" :image="portfolio.image" :video="portfolio.video" />
    </section>
  </div>
</template>