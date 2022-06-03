<!-- A hangman space, the letter displayed after guessed -->

<script setup lang="ts">

defineProps<{ 
  char: string, 
  filled: boolean
}>()

</script>

<template>
  <div class="text-center relative px-1">
    <h4 v-if="filled" class="absolute font-bold">{{ char }}</h4>
    <h3 class="font-bold">_</h3>
  </div>
</template>