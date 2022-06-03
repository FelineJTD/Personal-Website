<!-- A hangman space, the letter displayed after guessed -->

<script setup lang="ts">

defineProps<{ 
  char: string, 
  filled: boolean
}>()

</script>

<template>
  <div class="text-center relative">
    <h4 v-if="filled" class="w-full absolute font-bold">{{ char }}</h4>
    <h3 class="font-bold">_</h3>
  </div>
</template>