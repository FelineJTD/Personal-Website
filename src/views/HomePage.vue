<script lang="ts">
export default {
  name: 'HomePage',
  data() {
    return {
      keyboard_pressed: new Map<string, boolean>(),
      win: ['W', 'E', 'B', 'D', 'V', 'L', 'O', 'P', 'R'],
      cont: false,
      x: 0,
      y: 0,
    };
  },
  methods: {
    keyPressed(char: string) {
      if (!this.cont) {
        this.keyboard_pressed.set(char, true);
        // delete from win
        const idx = this.win.indexOf(char);
        if (idx !== -1) {
          this.win.splice(idx, 1);
        }
        // check win
        if (this.win.length === 0) {
          this.cont = true;
        }
      }
    },
    keyState(char: string) : boolean {
      return this.keyboard_pressed.get(char) || false;
    },
    onMousemove(e: MouseEvent) {
      if (window.innerWidth > 976) {
        this.x = (e.clientX-window.innerWidth/2)/window.innerWidth;
        this.y = (e.clientY-window.innerHeight/2)/window.innerHeight;
      }
    },
    // scrollLeft() {
    //   let scrollAmount = 0;
    //   var interval = setInterval(() => {
    //     document.getElementById('portfolio').scrollLeft += 0.5;
    //     scrollAmount += 1;
    //     if (scrollAmount >= window.innerWidth) {
    //       clearInterval(interval);
    //     }
    //   }, 0.1);
    // },
  },
  components: {
    'Key': Key,
    'Blank': Blank,
    'PortfolioThumbnail': PortfolioThumbnail,
  },
}
// import { ref } from 'vue'
// import Keyboard from '../components/Keyboard.vue'
import Key from '../components/Key.vue'
import Blank from '../components/Blank.vue'
import PortfolioThumbnail from '../components/PortfolioThumbnail.vue';

</script>

<template>
  <div class="bg-coral-100 bg-[url('./assets/texture-25.png')] bg-blend-overlay bg-repeat min-h-screen text-teal-t pt-16 lg:pt-12 overflow-x-hidden">

    <!--- SECTION I -->
    <section class="flex flex-col lg:flex-row min-h-[90vh] w-full items-center justify-center lg:-ml-12 -mb-24 px-[8%]" @mousemove="onMousemove">
      <!-- left -->
      <div class="mb-12 lg:mb-0 lg:mr-6">
        <div class="bg-coral-500 relative h-64 md:h-96 lg:h-[75vh] w-64 md:w-96 lg:w-[75vh] -p-12 overflow-hidden">
          <img src="../assets/homepage/bottom.png" alt="" class="absolute" :style="{ transform: `translate(${-x*75}px, ${-y*30}px)` }" />
          <img src="../assets/homepage/mid.svg" alt="" class="absolute" :style="{ transform: `translate(${-x*50}px, ${-y*17}px)` }" />
          <img src="../assets/homepage/top.svg" alt="" class="absolute" :style="{ transform: `translate(${-x*35}px, ${-y*15}px)` }" />
          <img src="../assets/homepage/cover.svg" alt="" class="absolute object-cover" />
          <img src="../assets/homepage/circles.svg" alt="" class="absolute" :style="{ transform: `translate(${-x*20}px, ${-y*10}px)` }" />
          <img src="../assets/texture-25.png" alt="" class="absolute w-full h-full mix-blend-overlay" />
        </div>
      </div>
      <!-- right -->
      <div class="text-center lg:text-left">
        <img src="../assets/homepage/hi_im_feli.svg" alt="Hi, I'm Feli" class="h-[3rem] md:h-[4.5rem] lg:-translate-x-3 mb-12 w-full lg:w-auto" />
        <h3 class="font-black">My <span class="text-coral-t">profession</span>?</h3>
        <h4>Why don't you guess it?</h4>
        <!-- hangman -->
        <div class="flex flex-col w-full items-center my-12">
          <div class="flex">
            <Blank char="W" :filled="keyState('W')" :fin="cont" />
            <Blank char="E" :filled="keyState('E')" :fin="cont"/>
            <Blank char="B" :filled="keyState('B')" :fin="cont"/>
            <div id="spacer" class="w-3 lg:w-6" />
            <Blank char="D" :filled="keyState('D')" :fin="cont"/>
            <Blank char="E" :filled="keyState('E')" :fin="cont"/>
            <Blank char="V" :filled="keyState('V')" :fin="cont"/>
            <Blank char="E" :filled="keyState('E')" :fin="cont"/>
            <Blank char="L" :filled="keyState('L')" :fin="cont"/>
            <Blank char="O" :filled="keyState('O')" :fin="cont"/>
            <Blank char="P" :filled="keyState('P')" :fin="cont"/>
            <Blank char="E" :filled="keyState('E')" :fin="cont"/>
            <Blank char="R" :filled="keyState('R')" :fin="cont"/>
          </div>
          <!-- <Keyboard keyPressed="keyboard_pressed" /> -->
          <div class="flex mt-12">
            <Key @click="keyPressed('Q')" char="Q" :disabled="keyState('Q')" :fin="cont"/>
            <Key @click="keyPressed('W')" char="W" :disabled="keyState('W')" :fin="cont"/>
            <Key @click="keyPressed('E')" char="E" :disabled="keyState('E')" :fin="cont"/>
            <Key @click="keyPressed('R')" char="R" :disabled="keyState('R')" :fin="cont"/>
            <Key @click="keyPressed('T')" char="T" :disabled="keyState('T')" :fin="cont"/>
            <Key @click="keyPressed('Y')" char="Y" :disabled="keyState('Y')" :fin="cont"/>
            <Key @click="keyPressed('U')" char="U" :disabled="keyState('U')" :fin="cont"/>
            <Key @click="keyPressed('I')" char="I" :disabled="keyState('I')" :fin="cont"/>
            <Key @click="keyPressed('O')" char="O" :disabled="keyState('O')" :fin="cont"/>
            <Key @click="keyPressed('P')" char="P" :disabled="keyState('P')" :fin="cont"/>
          </div>
          <div class="flex">
            <Key @click="keyPressed('A')" char="A" :disabled="keyState('A')" :fin="cont"/>
            <Key @click="keyPressed('S')" char="S" :disabled="keyState('S')" :fin="cont"/>
            <Key @click="keyPressed('D')" char="D" :disabled="keyState('D')" :fin="cont"/>
            <Key @click="keyPressed('F')" char="F" :disabled="keyState('F')" :fin="cont"/>
            <Key @click="keyPressed('G')" char="G" :disabled="keyState('G')" :fin="cont"/>
            <Key @click="keyPressed('H')" char="H" :disabled="keyState('H')" :fin="cont"/>
            <Key @click="keyPressed('J')" char="J" :disabled="keyState('J')" :fin="cont"/>
            <Key @click="keyPressed('K')" char="K" :disabled="keyState('K')" :fin="cont"/>
            <Key @click="keyPressed('L')" char="L" :disabled="keyState('L')" :fin="cont"/>
          </div>
          <div class="flex">
            <Key @click="keyPressed('Z')" char="Z" :disabled="keyState('Z')" :fin="cont"/>
            <Key @click="keyPressed('X')" char="X" :disabled="keyState('X')" :fin="cont"/>
            <Key @click="keyPressed('C')" char="C" :disabled="keyState('C')" :fin="cont"/>
            <Key @click="keyPressed('V')" char="V" :disabled="keyState('V')" :fin="cont"/>
            <Key @click="keyPressed('B')" char="B" :disabled="keyState('B')" :fin="cont"/>
            <Key @click="keyPressed('N')" char="N" :disabled="keyState('N')" :fin="cont"/>
            <Key @click="keyPressed('M')" char="M" :disabled="keyState('M')" :fin="cont"/>
          </div>
        </div>
      </div>
    </section>
    <!-- cont. -->
    <div class="flex w-full justify-center translate-y-12">
      <a :href="cont? '#introduction': none">
        <button class="flex flex-col items-center animate-bounce mt-12 lg:mt-0 lg:absolute hover:font-bold hover:text-coral-t duration-200" :class="cont? 'visible':'invisible'">
          <p class="animate-fadeIn mb-1 font-semibold">continue</p>
          <img src="../assets/homepage/arrow-down.svg" alt="" class="w-4 h-4 animate-fadeIn" />
        </button>
      </a>
    </div>

    <!--- SECTION II -->
    <section id="introduction" class="min-h-screen w-full bg-[url('./assets/homepage/sec2.svg')] bg-no-repeat bg-cover pt-48 pb-24 px-[8%]">
      <img src="../assets/homepage/im_a_web_developer.svg" alt="I'm a web developer." class="h-[3rem] my-12" />
      <p class="text-left mb-12">
        I love art and coding. I specialise in front-end development, but I am currently expanding my knowledge of backend development. <br /><br />
        Let me show you some of the websites I&apos;ve made.
      </p>
        <div id="portfolio" class="flex flex-row w-full overflow-x-scroll lg:overflow-x-visible">
          <PortfolioThumbnail 
            title="Wispril ITB 2022"
            link="https://paradewisudaitb.com"
            image="/portfolio-thumbnail/wispril.png" 
            video="/portfolio-thumbnail/wispril.mp4"
          />
          <PortfolioThumbnail 
            title="Joyume"
            link="https://joyumefactory.com"
            image="/portfolio-thumbnail/joyume.png" 
            video="/portfolio-thumbnail/joyume.mp4"
          />
          <PortfolioThumbnail 
            title="Mealth"
            link="https://mealth.netlify.app"
            image="/portfolio-thumbnail/mealth.png" 
            video="/portfolio-thumbnail/mealth.mp4"
          />
          <!-- <div class="h-full flex flex-col justify-center absolute right-0 pr-3 pl-12 bg-gradient-to-r from-[rgba(256,256,256,0)] to-[rgba(256,256,256,0.5)] hover:to-coral-t rounded-3xl animate-pulse hover:animate-none duration-500"> -->
          <div class="flex flex-col justify-center">
            <a href="/portfolio" class="flex flex-row items-center animate-pulse hover:animate-none">
              <!-- Load more portfolio -->
              <h2 class="text-center vertical-rl rotate-180 -ml-2">more</h2>
              <img src="../assets/homepage/right-arrow.svg" class="w-6 h-6 ml-2" />
            </a>
          </div>
          <!-- </div> -->
        <!-- </div> -->
      </div>

      <p class="text-left my-12">
        By the way, <span class="text-white">this website</span> is designed, illustrated, and coded entirely by me ;)
      </p>
    </section>

  </div>
</template>

<style>
html,
body {
  scroll-behavior: smooth;
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

#portfolio {
  -ms-overflow-style: none; 
  scrollbar-width: none;
  overflow: -moz-scrollbars-none;
}

#portfolio::-webkit-scrollbar {
  display: none;
}

.vertical-rl {
  writing-mode: vertical-rl;
}

</style>