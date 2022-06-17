<!-- A hangman space, the letter displayed after guessed -->

<script setup lang="ts">

defineProps<{ 
  char: string, 
  filled: boolean,
  fin: boolean
}>()

</script>

<template>
  <div class="text-center relative px-0.5 md:px-1">
    <h4 v-if="filled" class="absolute font-bold duration-500" :class="{ 'text-coral-t': fin }">{{ char }}</h4>
    <h3 class="font-bold" :class="{ invisible: fin }">_</h3>
  </div>
</template>