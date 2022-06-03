<script lang="ts">
export default {
  name: 'HomePage',
  data() {
    return {
      keyboard_pressed: '',
    };
  },
  components: {
    'Key': Key,
    'Blank': Blank,
  },
}
import { ref } from 'vue'
// import Keyboard from '../components/Keyboard.vue'
import Key from '../components/Key.vue'
import Blank from '../components/Blank.vue'
// import Key1 from '../components/Key.vue';

// defineProps<{ msg: string }>()

// const count = ref(0)
let keyboard_pressed = new Map<string, boolean>([
  ["A", false],
  ["E", false]
]);
</script>

<template>
  <div class="bg-coral-100 min-h-screen text-teal-t pt-12">

    <!--- SECTION I -->
    <section class="flex flex-col lg:flex-row min-h-[90vh] w-full items-center justify-center -ml-12 -mb-24">
      <!-- left -->
      <div class="mr-6">
        <!-- image -->
        <div class="bg-coral-500 relative h-96 lg:h-[75vh] w-96 lg:w-[75vh] -p-12">
          <img src="../assets/homepage/bottom.png" class="absolute" />
          <img src="../assets/homepage/mid.png" class="absolute" />
          <img src="../assets/homepage/top.png" class="absolute" />
          <img src="../assets/homepage/circles.png" class="absolute" />
        </div>
      </div>
      <!-- right -->
      <div class="text-left">
        <img src="../assets/homepage/hi_im_feli.svg" alt="Hi, I'm Feli" class="h-[4.5rem] -translate-x-3 mb-12" />
        <h3 class="font-black">My <span class="text-coral-t">profession</span>?</h3>
        <h4>Why don't you guess it?</h4>
        <!-- hangman -->
        <div class="flex flex-col w-full items-center my-12">
          <div class="flex">
            <Blank char="W" :filled="false" class="mx-1" />
            <Blank char="E" :filled="true" class="mx-1" />
            <Blank char="B" :filled="true" class="mx-1" />
            <div id="spacer" class="w-6"></div>
            <Blank char="D" :filled="true" class="mx-1" />
            <Blank char="E" :filled="true" class="mx-1" />
            <Blank char="V" :filled="true" class="mx-1" />
            <Blank char="E" :filled="true" class="mx-1" />
            <Blank char="L" :filled="true" class="mx-1" />
            <Blank char="O" :filled="true" class="mx-1" />
            <Blank char="P" :filled="true" class="mx-1" />
            <Blank char="E" :filled="true" class="mx-1" />
            <Blank char="R" :filled="true" class="mx-1" />
          </div>
          <div class="flex">
            <!-- <Keyboard keyPressed="keyboard_pressed" /> -->
          </div>
        </div>
      </div>
    </section>

    <!--- SECTION II -->
    <section class="h-screen w-full bg-[url('./assets/homepage/section2.svg')] bg-no-repeat bg-cover pt-48 px-[8%]">
      <img src="../assets/homepage/im_a_web_developer.svg" alt="I'm a web developer." class="h-[3rem] mb-12" />
      <p class="text-left">
        I love art and coding. I specialise in frontend development, but I am currently expanding my knowledge of backend development. <br /><br />
        Let me show you some of the websites I&apos;ve made.
      </p>
      <div class="h-48 w-36 bg-coral-500 rounded-3xl">
        smth
      </div>
    </section>

  </div>
</template>