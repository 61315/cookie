<template>
  <div class="min-h-screen" @click="play">
    <div class="box-container flex justify-center relative transition duration-500" :class="{ 'filter blur-sm' : !state.isActive }" >
      <label class="absolute right-0 m-4">
        <input type="checkbox" class="form-checkbox" v-model="state.showBounds">
        <span class="ml-2 text-sm font-sans text-white">Show Bounds</span>
      </label>
      <div class="box-cookie absolute transition-opacity duration-500"
      :class="[ state.isActive ? 'opacity-100' : 'opacity-0', { 'ring' : state.showBounds } ]" v-if="!state.isCracked">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="158px" width="183px"
          xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1.0, 0.0, 0.0, 1.0, 95 79)">
            <path class="cursor-pointer" fill-opacity="0.0" @click="crack"
              d="M45.05 36.65 Q32.6 47.7 31.25 47.3 12.65 36.85 0.25 -19.05 -3.75 -17.35 -15.65 9.0 -27.55 35.35 -35.15 39.65 -41.95 47.5 -46.4 42.75 -50.85 37.95 -51.7 36.3 -61.2 23.6 -62.25 1.5 -63.3 -20.6 -45.65 -37.45 -28.0 -54.3 -2.75 -54.3 22.45 -54.3 40.35 -37.45 58.15 -20.6 57.85 2.5 57.5 25.55 45.05 36.65"
              fill="#2d1804" fill-rule="evenodd" stroke="none" />
          </g> 
        </svg>
      </div>

      <div class="box-cookie-alt absolute" v-if="state.isCracked" :class="{ 'ring' : state.showBounds }">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="158px" width="183px"
          xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1.0, 0.0, 0.0, 1.0, 105, 52)">
            <path class="cursor-pointer opacity-100 sm:opacity-0 sm:hover:opacity-100 animate-ping sm:animate-none" @click="open"
              d="M23.95 -1.9 Q24.9 2.4 25.75 9.0 -6.15 6.3 -27.65 16.4 L-28.85 14.05 -27.75 11.15 -30.05 6.95 -33.95 5.65 -35.05 4.05 -34.05 2.45 -34.0 -1.05 -31.8 -1.1 -31.1 -3.1 -28.15 -2.85 -26.9 -5.65 -24.6 -7.45 -23.35 -9.25 Q-4.35 -13.65 11.15 -14.7 18.45 -15.05 23.1 -14.75 22.95 -6.25 23.95 -1.9"
              fill="url(#gradient0)" fill-rule="evenodd" stroke="none" />
          </g>
          <defs>
            <linearGradient gradientTransform="matrix(0.0332, 0.0139, -0.0114, 0.0272, -2.7, 0.65)"
              gradientUnits="userSpaceOnUse" id="gradient0" spreadMethod="pad" x1="-819.2" x2="819.2">
              <stop offset="0.01568627450980392" stop-color="#000000" stop-opacity="0.2" />
              <stop offset="0.5372549019607843" stop-color="#ffe1aa" stop-opacity="0.2" />
              <stop offset="1.0" stop-color="#000000" stop-opacity="0.101960786" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div class="box-slip absolute flex" v-if="state.isOpen" :class="{ 'ring' : state.showBounds }">
        <object data="src/assets/morphshapes/morphshape_slip.svg" type="image/svg+xml" id="slip" class="absolute" />
        <p class="whitespace-pre-wrap text-xl w-full mx-4 mt-12 mb-8 transform scale-y-90 tracking-tighter break-words leading-none self-center transition-opacity duration-500"
        :class="[ state.isFinish ? 'opacity-100' : 'opacity-0', { 'ring' : state.showBounds } ]">
          {{ message }}
        </p>
      </div>

      <div class="box-intro absolute transition-opacity duration-500" :class="[ state.isActive ? 'opacity-100' : 'opacity-0', { 'ring' : state.showBounds } ]" />

      <div class="box-footer absolute" :class="{ 'ring' : state.showBounds }" /> 

    </div>

    <div class="box-start absolute transition-opacity" :class="{ 'opacity-0' : state.isActive, 'ring' : state.showBounds }"/>
    <div class="box-start absolute cursor-pointer" :class="{ 'animate-ping' : !state.isActive, 'ring' : state.showBounds }" v-if="!state.isActive" @click="activate" />
        
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import sound_bgs from "../assets/sounds/sound_bgs.mp3";
import sound_crack from "../assets/sounds/sound_crack.mp3";

defineProps({
  msg: String,
});

const state = reactive({ count: 0, showBounds: false, isActive: false, isCracked: false, isOpen: false, isFinish: false });

const txt1 = `나만 없어. \n진짜 사람들 고양이 다 있고 나만 없어.`;

const txt2 = `키스의 고유 조건은 입술끼리 만나야 하고 \n특별한 기술은 필요치 않다.`;

const message = Math.random() < 0.3 ? txt1 : txt2;

const activate = () => {
  state.isActive = true;

  let audio = new Audio(sound_bgs);
  audio.loop = true;
  
  audio.addEventListener("canplaythrough", () => { 
    audio.play();
  });

  audio.load();
}

const crack = () => {
  state.isCracked = true;

  let audio = new Audio(sound_crack);
  
  audio.addEventListener("canplaythrough", () => { 
    audio.play();
  });

  audio.load();
}

const open = () => {
  state.isOpen = true;

  setTimeout(() => {
    state.isFinish = true;
  }, 750);
}

</script>

<style scoped>

div .box-container {
  width: 460px;
  height: 550px;
  background-image: url('../assets/images/image_container.png');
}

div .box-start {
  width: 183px;
  height: 158px;
  top: 200px;
  left: 132px;
  background-image: url('../assets/images/image_cookie.png');
}

div .box-cookie {
  width: 183px;
  height: 158px;
  top: 72px;
  left: 132px;
  background-image: url('../assets/images/image_cookie.png');
}

div .box-cookie-alt {
  width: 183px;
  height: 158px;
  top: 72px;
  left: 132px;
  background-image: url('../assets/images/image_cookie_alt.png');
}

div .box-slip {
  width: 398px;
  height: 163px;
  top: 72px;
}

div .box-intro {
  width: 248.15px;
  height: 88.35px;
  left: 110.5px;
  bottom: 106px;
  background-image: url('../assets/texts/text_intro.svg');
}

div .box-footer {
  width: 288.9px;
  height: 12.7px;
  left: 86px;
  bottom: 34px;
  background-image: url('../assets/texts/text_copyright.svg');
}
</style>
