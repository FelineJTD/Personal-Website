<script setup lang="ts">
defineProps<{ 
  char: string, 
  disabled: boolean
}>()

</script>

<template>
  <div class="">
    <button class="hover:text-coral-t hover:-rotate-12 duration-200"><h4>{{ char }}</h4></button>
  </div>
</template>