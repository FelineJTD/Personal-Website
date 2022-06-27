<script setup lang="ts"></script>

<template>
  <div class="bg-[url('./assets/footer.svg')] min-h-[24rem] -mt-36 xl:-mt-40 xl:min-h-[36rem] flex justify-between items-start px-[8%] shadow-lg w-full relative z-40 text-teal-t bg-cover bg-no-repeat top-0">
    <div class="flex flex-col md:flex-row mt-36 md:mt-48 xl:mt-60 pb-12 justify-between w-full items-end">
      <!-- FEEDBACK -->
      <section class="w-full md:w-auto mb-12 md:mb-0">
        <img src="../assets/Feedback.svg" alt="Feedback" class="h-[2.5rem] mb-3"/>
        <p class="mb-3">Thank you for visiting my site! Let me know your thoughts on it.</p>
        <form class="flex flex-col">
          <p class="font-bold text-coral-t">Feedback*</p>
          <textarea class="bg-teal-t rounded-lg text-white py-1 px-3 mb-2 font-semibold" placeholder="What can be better? Are there any features you'd like to see?" type="text" maxlength="5000" />
          <div class="flex flex-col md:flex-row justify-between">
          <div class="flex flex-col">
          Your name (optional)
          <input class="bg-teal-t rounded-lg text-white py-1 px-3 mb-2" placeholder="What should I call you?" type="text" maxlength="50" />
          </div>
          <div class="flex flex-col w-full md:ml-3">
          Contact (optional)
          <input class="bg-teal-t rounded-lg text-white py-1 px-3 mb-2" placeholder="Username (Platform)" type="text" maxlength="50" />
          </div>
          </div>
          Self-promotion :D (optional)
          <input class="bg-teal-t rounded-lg text-white py-1 px-3 mb-2" placeholder="Anything you'd like me to check out?" type="text" maxlength="50" />
          <button value="Submit" class="my-2 w-1/2 md:w-1/3 py-2 px-3 bg-coral-t rounded-3xl hover:bg-teal-t text-white duration-200 font-bold" disabled="true">Send feedback</button>
          *The feedback feature is still in development. It's a dummy.
        </form>
      </section>
      <!-- SOCIAL MEDIA -->
      <section class="text-right md:pl-24 lg:pl-12">
        <h1 class="md:hidden lg:block">Connect with me!</h1>
        <p class="md:hidden lg:block">We can collaborate on projects! Or just be friends \(OwO)/</p>
        <div class="flex flex-row md:flex-col lg:flex-row justify-end items-end">
          <!-- GMAIL -->
          <a href="mailto:feliciasutandijo@gmail.com" target="_blank" rel="noreferrer noopener">
          <div class="h-12 w-12 bg-coral-t mt-2 ml-2 rounded-xl hover:bg-[#F54336] hover:rotate-90 duration-200">
          <img src="../assets/icons/email.svg" alt="Email Icon" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
          <!-- LINKEDIN -->
          <a href="https://www.linkedin.com/in/felicia-sutandijo-57a570199/" target="_blank" rel="noreferrer noopener">
          <div class="h-12 w-12 bg-coral-t mt-2 ml-2 rounded-xl hover:bg-[#0A66C2] hover:rotate-90 duration-200">
          <img src="../assets/icons/linkedin.svg" alt="LinkedIn Icon" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
          <!-- GITHUB -->
          <a href="https://github.com/FelineJTD" target="_blank" rel="noreferrer noopener">
          <div class="h-12 w-12 bg-coral-t mt-2 ml-2 rounded-xl hover:bg-[#000000] hover:rotate-90 duration-200">
          <img src="../assets/icons/github.svg" alt="Github Icon" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
          <!-- INSTAGRAM -->
          <a href="https://www.instagram.com/felinejtd/" target="_blank" rel="noreferrer noopener">
          <div class="instabg h-12 w-12 bg-coral-t mt-2 ml-2 rounded-xl hover:bg-[#DD2A7B] -rotate-90 hover:rotate-0 duration-200">
        <img src="../assets/icons/instagram.svg" alt="Instagram Icon" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .instabg:hover {
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
  }
</style>