<!-- A keyboard key -->

<script setup lang="ts">

defineProps<{ 
  char: string, 
  disabled: boolean,
  fin: boolean
}>()

</script>

<template>
  <div class="">
    <button class="px-2 py-1" :class="{'cursor-default hover:transform-none hover:text-coral-300 text-coral-300':disabled, 'cursor-default hover:transform-none':fin, 'hover:text-coral-t hover:-rotate-12 duration-100': !disabled && !fin}" ><h4>{{ char }}</h4></button>
  </div>
</template>