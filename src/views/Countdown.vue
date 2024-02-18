<script lang="ts">
export default {
  name: 'Countdown',
  data() {
    return {
      real_start_date: new Date("2023-08-21"),
      start_date: new Date() > new Date("2023-08-21") ? new Date() : new Date("2023-08-21"),
      end_date: new Date("2024-10-31"),
    };
  },
  methods: {
    monthsLeft() {
      return Math.ceil((this.end_date.getTime() - this.start_date.getTime())/(1000*60*60*24*30));
    },
    weeksLeft() {
      return Math.ceil((this.end_date.getTime() - this.start_date.getTime())/(1000*60*60*24*7));
    },
    daysLeft() {
      return Math.ceil((this.end_date.getTime() - this.start_date.getTime())/(1000*60*60*24));
    },
    totalDays() {
      return Math.ceil((this.end_date.getTime() - this.real_start_date.getTime())/(1000*60*60*24));
    },
  },
  components: {
  },
}

</script>

<template>
  <div class="flex flex-col justify-center items-center py-12 px-6 min-h-screen bg-coral-100">
    <h1 class="text-center mb-12">
      <span class="text-teal-t text-[5rem] leading-snug">{{daysLeft()}}<br /></span>
      <span class="text-coral-t text-lg">days left until Irfan comes home (maybe).</span>
    </h1>

    <p class="text-teal-t text-center">which roughly equals to</p>
    <p class="text-coral-t leading-snug text-center">{{weeksLeft()}}<span class="text-teal-t"> weeks left, or</span></p>
    <p class="text-coral-t leading-snug text-center">{{monthsLeft()}}<span class="text-teal-t"> months left, or</span></p>
    <p class="text-coral-t leading-snug text-center">{{(daysLeft()/totalDays()*100).toFixed(2)}}<span class="text-teal-t">% of time left.</span></p>
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
