<script lang="ts">
import PortfolioThumbnail from "../components/PortfolioThumbnail.vue";
import uniqueId from "lodash/uniqueId";
export default {
    name: "Portfolio",
    data() {
        return {
          portfolios: [
            { id: uniqueId('portfolio-'), title: 'Wispril ITB 2022', desc: 'A graduation website created to celebrate the April 2022 graduation of ITB students. This website includes features like wall of fame, success stories, and more.', link: 'https://paradewisudaitb.com', image: '/portfolio-thumbnail/wispril.png', video: '/portfolio-thumbnail/wispril.mp4'},
            { id: uniqueId('portfolio-'), title: 'Wispril ITB 2022', desc: 'A graduation website created to celebrate the April 2022 graduation of ITB students. This website includes features like wall of fame, success stories, and more.', link: 'https://paradewisudaitb.com', image: '/portfolio-thumbnail/wispril.png', video: '/portfolio-thumbnail/wispril.mp4'}
          ]
        };
    },
    components: { PortfolioThumbnail }
}

</script>

<template>
  <div class="min-h-screen bg-coral-100 bg-texture bg-blend-overlay pt-12 px-[8%]">
    <img src="../assets/portfolio/Browse_My_Web_Portfolio.svg" alt="Browse my web portfolio" class="h-[3rem] my-16">
    <section class="flex">
      <PortfolioThumbnail v-for="portfolio in portfolios" :key='portfolio.id' :title="portfolio.title" :desc="portfolio.desc" :link="portfolio.link" :image="portfolio.image" :video="portfolio.video" />
    </section>
  </div>
</template>