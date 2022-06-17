<script setup lang="ts">
defineProps<{ 
  curr: string
}>()
</script>

<template>
  <div class="bg-white h-12 flex justify-around items-center px-[5%] md:px-[10%] lg:px-36 py-0.5 shadow-lg fixed w-full z-50 text-teal-t">
    <a href='/'><h1 class="hover:text-coral-t duration-200" :class="curr=='/'?'text-coral-t':''">Home</h1></a>
    <p>|</p>
    <a href='/portfolio'><h1 class="hover:text-coral-t duration-200" :class="curr=='/portfolio'?'text-coral-t':''">Portfolio</h1></a>
    <p>|</p>
    <a href="/about"><h1 class="hover:text-coral-t duration-200" :class="curr=='/about'?'text-coral-t':''">About</h1></a>
  </div>
</template>