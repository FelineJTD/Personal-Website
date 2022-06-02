<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="bg-coral-100 min-h-screen text-teal-t">

    <!--- SECTION I -->
    <section class="flex flex-col lg:flex-row w-full h-screen items-center justify-center -ml-12">
      <!-- left -->
      <div>
        <!-- image -->
        <div class="bg-coral-500 relative h-[70vh] w-[70vh]">
          <img src="../assets/homepage/bottom.png" class="absolute" />
          <img src="../assets/homepage/mid.png" class="absolute" />
          <img src="../assets/homepage/top.png" class="absolute" />
          <img src="../assets/homepage/circles.png" class="absolute" />
        </div>
      </div>
      <!-- right -->
      <div class="text-left">
        <img src="../assets/homepage/hi_im_feli.svg" alt="Hi, I'm Feli" class="h-[5rem] -translate-x-3 mb-12" />
        <h3 class="font-black">My <span class="text-coral-t">profession</span>?</h3>
        <h4>Why don't you guess it?</h4>
      </div>
    </section>

  </div>
</template>