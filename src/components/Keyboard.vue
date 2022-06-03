<script lang="ts">
export default {
  name: 'Keyboard',
  data() {
    return {
      
    };
  },
  components: {
    'Key': Key,
  },
}
import Key from './Key.vue'
defineProps<{ 
  keyPressed: Map<string, boolean>, 
}>()
</script>

<template>
  <div class="">
    <Key char="Q" :keyPressed="keyPressed['Q']" />
    <button class="hover:text-coral-t hover:-rotate-12 duration-200"><h4>{{ char }}</h4></button>
  </div>

</template>