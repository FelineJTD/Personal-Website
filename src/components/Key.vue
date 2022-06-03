<script setup lang="ts">
const Props = defineProps<{ 
  char: string, 
  disabled: boolean
}>()

</script>

<template>
  <div class="">
    <button class="hover:text-coral-t hover:-rotate-12 duration-100 px-2 py-1"><h4>{{ char }}</h4></button>
  </div>
</template>