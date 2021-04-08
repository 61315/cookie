<template>
  <div class="min-h-screen">
    <div class="box-container flex justify-center relative">

      <div class="box-slip absolute ring"></div>
 
      <div class="absolute box-cookie ring">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="158px" width="183px"
          xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1.0, 0.0, 0.0, 1.0, 95 79)">
            <path class="cursor-pointer" fill-opacity="0.5"
              d="M45.05 36.65 Q32.6 47.7 31.25 47.3 12.65 36.85 0.25 -19.05 -3.75 -17.35 -15.65 9.0 -27.55 35.35 -35.15 39.65 -41.95 47.5 -46.4 42.75 -50.85 37.95 -51.7 36.3 -61.2 23.6 -62.25 1.5 -63.3 -20.6 -45.65 -37.45 -28.0 -54.3 -2.75 -54.3 22.45 -54.3 40.35 -37.45 58.15 -20.6 57.85 2.5 57.5 25.55 45.05 36.65"
              fill="#2d1804" fill-rule="evenodd" stroke="none" />
          </g> 
        </svg>
      </div>

      <div class="absolute box-cookie-alt ring">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="158px" width="183px"
          xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1.0, 0.0, 0.0, 1.0, 105, 52)">
            <path class="cursor-pointer" @click="presentSlip"
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

      <div class="box-intro absolute ring">
        <img src="../assets/texts/text_intro.svg" />
      </div>

      <div class="box-footer absolute ring">
        <img src="../assets/texts/text_copyright.svg" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
const presentSlip = () => alert("Work in progress..");
</script>

<style scoped>

div .box-container {
  width: 460px;
  height: 550px;
  background-image: url('../assets/images/image_container.png');
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
  background-image: url('../assets/images/image_slip.png');
}

div .box-intro {
  left: 110.5px;
  bottom: 106px;
}

div .box-footer {
  left: 86px;
  bottom: 34px;
}
</style>
