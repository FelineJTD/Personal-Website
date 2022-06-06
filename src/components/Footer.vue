<script setup lang="ts"></script>

<template>
  <div class="bg-[url('./assets/footer.svg')] min-h-[24rem] -mt-36 xl:-mt-40 xl:min-h-[36rem] flex justify-between items-start px-[8%] shadow-lg w-full relative z-50 text-[#44312E] bg-cover bg-no-repeat top-0">
    <div class="flex flex-col md:flex-row mt-36 md:mt-48 xl:mt-60 pb-12 justify-between w-full items-end">
      <!-- FEEDBACK -->
      <div>
        <img src="../assets/Feedback.svg" alt="Feedback" class="h-[2.5rem] mb-3"/>
        <p class="mb-3">Thank you for visiting my site! Let me know your thoughts on it.</p>
        <form class="flex flex-col">
          <p class="font-bold">Feedback*</p>
          <textarea class="bg-brown-t rounded-lg text-white py-1 px-3 mb-2 font-semibold" placeholder="What can be better? Are there any features you'd like to see?" type="text" maxlength="5000" />
          <div class="flex flex-row justify-between">
          <div class="flex flex-col">
          Your name (optional)
          <input class="bg-brown-t rounded-lg text-white py-1 px-3 mb-2" placeholder="What should I call you?" type="text" maxlength="50" />
          </div>
          <div class="flex flex-col w-full ml-3">
          Contact (optional)
          <input class="bg-brown-t rounded-lg text-white py-1 px-3 mb-2" placeholder="Username (Platform)" type="text" maxlength="50" />
          </div>
          </div>
          Self-promotion :D (optional)
          <input class="bg-brown-t rounded-lg text-white py-1 px-3 mb-2" placeholder="Anything you'd like me to check out?" type="text" maxlength="50" />
          <button value="Submit" class="my-2 w-1/2 md:w-1/3 py-2 px-3 bg-teal-t rounded-3xl hover:bg-brown-200 text-white duration-200 font-bold" disabled="true">Send feedback</button>
          *The feedback feature is still in development. It's a dummy.
        </form>
      </div>
      <!-- SOCIAL MEDIA -->
      <div>
        <h1 class="text-right">Connect with me!</h1>
        <p>We can collaborate on projects! Or just be friends \(OwO)/</p>
        <div class="flex flex-row justify-end">
          <!-- GMAIL -->
          <a href="mailto:feliciasutandijo@gmail.com" target="_blank" rel="noreferrer noopener">
          <div class="bg-brown-t mt-2 ml-2 rounded-xl hover:bg-coral-400 hover:rotate-90 duration-200">
          <img src="../assets/icons/email.svg" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
          <!-- LINKEDIN -->
          <a href="https://www.linkedin.com/in/felicia-sutandijo-57a570199/" target="_blank" rel="noreferrer noopener">
          <div class="bg-brown-t mt-2 ml-2 rounded-xl hover:bg-coral-400 hover:rotate-90 duration-200">
          <img src="../assets/icons/linkedin.svg" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
          <!-- GITHUB -->
          <a href="https://github.com/FelineJTD" target="_blank" rel="noreferrer noopener">
          <div class="bg-brown-t mt-2 ml-2 rounded-xl hover:bg-coral-400 hover:rotate-90 duration-200">
          <img src="../assets/icons/github.svg" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
          <!-- INSTAGRAM -->
          <a href="https://www.instagram.com/felinejtd/" target="_blank" rel="noreferrer noopener">
          <div class="bg-brown-t mt-2 ml-2 rounded-xl hover:bg-coral-400 hover:rotate-90 duration-200">
        <img src="../assets/icons/instagram.svg" class="p-2 h-12 w-12 hover:-rotate-90 duration-300" />
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>