<script lang="ts">
export default {
  name: 'HomePage',
  data() {
    return {
      keyboard_pressed: new Map<string, boolean>(),
      win: ['W', 'E', 'B', 'D', 'V', 'L', 'O', 'P', 'R'],
      x: 0,
      y: 0,
    };
  },
  methods: {
    keyPressed(char: string) {
      this.keyboard_pressed.set(char, true);
      // delete from win
      const idx = this.win.indexOf(char);
      if (idx !== -1) {
        this.win.splice(idx, 1);
      }
      // check win
      if (this.win.length === 0) {
        alert('You win!');
      }
    },
    keyState(char: string) {
      return this.keyboard_pressed.get(char);
    },
    onMousemove(e: MouseEvent) {
      this.x = (e.clientX-window.innerWidth/2)/window.innerWidth;
      this.y = (e.clientY-window.innerHeight/2)/window.innerHeight;
      console.log(this.x, this.y);
    }
  },
  components: {
    'Key': Key,
    'Blank': Blank,
  },
}
// import { ref } from 'vue'
// import Keyboard from '../components/Keyboard.vue'
import Key from '../components/Key.vue'
import Blank from '../components/Blank.vue'
const HiImFeli = '../assets/homepage/hi_im_feli.svg'
import ImAWebDeveloper from '../assets/homepage/im_a_web_developer.svg'
// import Key1 from '../components/Key.vue';

// defineProps<{ msg: string }>()

// const count = ref(0)
// let keyboard_pressed = new Map<string, boolean>([
//   ["A", false],
//   ["E", false]
// ]);
</script>

<template>
  <div class="bg-coral-100 bg-[url('./assets/texture-25.png')] bg-blend-overlay bg-repeat min-h-screen text-teal-t pt-12">

    <!--- SECTION I -->
    <section class="flex flex-col lg:flex-row min-h-[90vh] w-full items-center justify-center -ml-12 -mb-24" @mousemove="onMousemove">
      <!-- left -->
      <div class="mr-6">
        <!-- image -->
        
        <!-- <div class="bg-coral-500 relative h-96 lg:h-[75vh] w-96 lg:w-[75vh] -p-12 overflow-hidden">
          <img src="../assets/homepage/bottom.png" class="absolute" :style="{ transform: `translate(${-x*20}px, ${-y*10}px)` }" />
          <img src="../assets/homepage/mid.svg" class="absolute" :style="{ transform: `translate(${-x*35}px, ${-y*15}px)` }" />
          <img src="../assets/homepage/top.svg" class="absolute" :style="{ transform: `translate(${-x*50}px, ${-y*15}px)` }" />
          <img src="../assets/homepage/cover.svg" class="absolute" />
          <img src="../assets/homepage/circles.svg" class="absolute" :style="{ transform: `translate(${-x*75}px, ${-y*30}px)` }" />
          <img src="../assets/texture.png" class="absolute w-full h-full mix-blend-overlay opacity-25" />
        </div> -->
        <div class="bg-coral-500 relative h-96 lg:h-[75vh] w-96 lg:w-[75vh] -p-12 overflow-hidden">
          <img src="../assets/homepage/bottom.png" class="absolute" :style="{ transform: `translate(${-x*75}px, ${-y*30}px)` }" />
          <img src="../assets/homepage/mid.svg" class="absolute" :style="{ transform: `translate(${-x*50}px, ${-y*17}px)` }" />
          <img src="../assets/homepage/top.svg" class="absolute" :style="{ transform: `translate(${-x*35}px, ${-y*15}px)` }" />
          <img src="../assets/homepage/cover.svg" class="absolute" />
          <img src="../assets/homepage/circles.svg" class="absolute" :style="{ transform: `translate(${-x*20}px, ${-y*10}px)` }" />
          <img src="../assets/texture.png" class="absolute w-full h-full mix-blend-overlay opacity-25" />
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
            <Blank char="W" :filled="keyState('W')" />
            <Blank char="E" :filled="keyState('E')" />
            <Blank char="B" :filled="keyState('B')" />
            <div id="spacer" class="w-6" />
            <Blank char="D" :filled="keyState('D')" />
            <Blank char="E" :filled="keyState('E')" />
            <Blank char="V" :filled="keyState('V')" />
            <Blank char="E" :filled="keyState('E')" />
            <Blank char="L" :filled="keyState('L')" />
            <Blank char="O" :filled="keyState('O')" />
            <Blank char="P" :filled="keyState('P')" />
            <Blank char="E" :filled="keyState('E')" />
            <Blank char="R" :filled="keyState('R')" />
          </div>
          <!-- <Keyboard keyPressed="keyboard_pressed" /> -->
          <div class="flex mt-12">
            <Key @click="keyPressed('Q')" char="Q" :disabled="keyState('Q')" />
            <Key @click="keyPressed('W')" char="W" :disabled="keyState('W')" />
            <Key @click="keyPressed('E')" char="E" :disabled="keyState('E')" />
            <Key @click="keyPressed('R')" char="R" :disabled="keyState('R')" />
            <Key @click="keyPressed('T')" char="T" :disabled="keyState('T')" />
            <Key @click="keyPressed('Y')" char="Y" :disabled="keyState('Y')" />
            <Key @click="keyPressed('U')" char="U" :disabled="keyState('U')" />
            <Key @click="keyPressed('I')" char="I" :disabled="keyState('I')" />
            <Key @click="keyPressed('O')" char="O" :disabled="keyState('O')" />
            <Key @click="keyPressed('P')" char="P" :disabled="keyState('P')" />
          </div>
          <div class="flex">
            <Key @click="keyPressed('A')" char="A" :disabled="keyState('A')" />
            <Key @click="keyPressed('S')" char="S" :disabled="keyState('S')" />
            <Key @click="keyPressed('D')" char="D" :disabled="keyState('D')" />
            <Key @click="keyPressed('F')" char="F" :disabled="keyState('F')" />
            <Key @click="keyPressed('G')" char="G" :disabled="keyState('G')" />
            <Key @click="keyPressed('H')" char="H" :disabled="keyState('H')" />
            <Key @click="keyPressed('J')" char="J" :disabled="keyState('J')" />
            <Key @click="keyPressed('K')" char="K" :disabled="keyState('K')" />
            <Key @click="keyPressed('L')" char="L" :disabled="keyState('L')" />
          </div>
          <div class="flex">
            <Key @click="keyPressed('Z')" char="Z" :disabled="keyState('Z')" />
            <Key @click="keyPressed('X')" char="X" :disabled="keyState('X')" />
            <Key @click="keyPressed('C')" char="C" :disabled="keyState('C')" />
            <Key @click="keyPressed('V')" char="V" :disabled="keyState('V')" />
            <Key @click="keyPressed('B')" char="B" :disabled="keyState('B')" />
            <Key @click="keyPressed('N')" char="N" :disabled="keyState('N')" />
            <Key @click="keyPressed('M')" char="M" :disabled="keyState('M')" />
          </div>
        </div>
      </div>
    </section>

    <!--- SECTION II -->
    <section class="h-screen w-full bg-[url('./assets/homepage/section2.svg')] bg-no-repeat bg-cover pt-48 px-[8%]">
      <ImAWebDeveloper class="h-[3rem] mb-12" />
      <!-- <img src="../assets/homepage/im_a_web_developer.svg" alt="I'm a web developer." class="h-[3rem] mb-12" /> -->
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

<style>
html,
body {
  scrollbar-color: #1D3935 #C2685B;
  scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 0.5em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #C2685B;
}

body::-webkit-scrollbar-thumb {
  background-color: #1D3935;
}
</style>