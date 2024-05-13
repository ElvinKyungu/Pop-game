<script setup lang="ts">
</script>
<template>
  <main class="bg-yellow-500 flex justify-center flex-col h-screen w-full fixed">
    <div class="relative w-full h-full flex  justify-between">
      <div class="flex flex-col w-full justify-start py-32 right-0 lg:w-1/2 h-full items-center px-20">
        <div class="relative mb-10 flex justify-start w-full">
          <span class="font-pop uppercase text-[2rem] text-white pop">Make it</span>
        </div>
        <div class="relative flex justify-start w-full font-pop">
          <div class="border-4 border-dashed rounded-2xl border-white flex px-10 text-white py-4">
            <input type="text" class="bg-transparent outline-none text-2xl font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 cursor-pointer h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col justify-start w-full mt-10">
          <ul class="flex gap-6 font-pop">
            <li class="bg-[#564abf] text-white py-2 px-4 font-semibold rounded-full cursor-pointer">Similaire</li>
            <li class="bg-black text-white py-2 px-4 font-semibold rounded-full cursor-pointer">Court</li>
            <li class="bg-white text-black font-semibold py-2 px-4 rounded-full cursor-pointer">Long</li>
          </ul>
          <p class="result font-pop uppercase text-2xl text-white mt-10">
            J'ai rien capté, on se sert de l'IA ?
          </p>
        </div>
      </div>
      <div class="w-full right-0 lg:w-1/2 flex flex-col justify-between h-full">
        <div class="h-full flex flex-col justify-center items-center relative">
          <h2 class="font-pop text-[12rem] absolute top-10 text-white pop">Pop</h2>
          <h2 class="font-pacifico text-[12rem] absolute top-56 font-extrabold creative text-white ">
            Fun Game 
          </h2>
          <img src="@/assets/fun-game.png" alt="" class="absolute bottom-32 sm:w-56 md:w-1/2 lg:w-[60%] lg:bottom-24 cursor-none" srcset="">
          <div class="absolute bottom-20">
            <img src="@/assets/ombre.png" alt="" class="w-full" srcset="">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:h-auto bg-red-600 bottom-0 absolute justify-between z-10 lg:relative lg:flex lg:items-center text-white">
      <div class="py-4 w-full flex">
        <h1 class="text-8xl font-pacifico lg:text-5xl lg:pl-4">Realy fun game</h1>
      </div>
      <div class="py-4 w-full flex">
        <h1 class="text-xl font-pacifico lg:text-5xl lg:pl-4">Coded by Elvin</h1>
      </div>
      <div class="absolute right-0 bottom-0 lg:static h-full bg-white flex justify-center items-center">
        <h3 class="text-black uppercase text-3xl font-pop font-extrabold text-center">Made to relax you</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>
.creative{ 
  text-shadow: 2px 0 #2e20ac, -2px 0 #2e20ac, 0 2px #2e20ac, 0 -2px #2e20ac,
  10px 1px #2e20ac, -1px -1px #2e20ac, 1px -1px #2e20ac, -1px 10px #2e20ac;
}
.pop{
  text-shadow: 2px 0 #2e20ac, -2px 0 #2e20ac, 0 2px #2e20ac, 0 -2px #2e20ac,
  10px 1px #2e20ac, -1px -1px #2e20ac, 1px -1px #2e20ac, -1px 10px #2e20ac;
}
.result{
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
  2px 1px #000, -1px -1px #000, 1px -1px #000, -1px 2px #000;

}
</style>