<script setup lang="ts"></script>

<template>
  <div class="bg-[url('./assets/footer.svg')] min-h-[24rem] -mt-48 xl:-mt-60 xl:min-h-[36rem] flex justify-between items-start px-[8%] shadow-lg w-full relative z-50 text-[#44312E] bg-cover bg-no-repeat top-0">
    <div class="flex flex-col md:flex-row mt-60 xl:mt-80 pb-12">
      <!-- FEEDBACK -->
      <div>
        <img src="../assets/Feedback.svg" alt="Feedback" class="h-[2.5rem] mb-3"/>
        <p class="mb-3">Thank you for visiting my site! Let me know your thoughts on it.</p>
        <form class="flex flex-col">
          Sender
          <input class="bg-brown-t rounded-lg text-white py-1 px-3 md:w-1/2 mb-2" placeholder="Anonymous is ok!" type="text" maxlength="50" />
          Contact
          <input class="bg-brown-t rounded-lg text-white py-1 px-3 mb-2" placeholder="Username (Platform). Again, anonymous is ok!" type="text" maxlength="50" />
          Feedback*
          <textarea class="bg-brown-t rounded-lg text-white py-1 px-3 mb-2" placeholder="What can be better? Are there any features you'd like to see?" type="text" maxlength="5000" />
          Self-promotion :D
          <input class="bg-brown-t rounded-lg text-white py-1 px-3 mb-2" placeholder="Anything you'd like me to check out?" type="text" maxlength="50" />
          <button value="Submit" class="my-2 w-1/2 md:w-1/3 py-2 px-3 bg-teal-t rounded-3xl hover:bg-brown-200 text-white duration-200 font-bold" disabled="true">Send feedback</button>
          *The feedback feature is still in development. It's a dummy.
        </form>
      </div>
      <!-- SOCIAL MEDIA -->
    </div>
  </div>
</template>