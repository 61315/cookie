<template>
  <Cookie />
</template>

<script setup>
import Cookie from './components/Cookie.vue'

function setViewport() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      var ww = window.screen.width;
      var mw = 460;
      var ratio =  ww / mw;
      var viewport = document.getElementById('Viewport');

      if ( ww < mw ){
        viewport.setAttribute('content', 'viewport-fit=cover, initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + ww);
      } else {
        viewport.setAttribute('content', 'viewport-fit=cover, initial-scale=1.0, maximum-scale=2, minimum-scale=1.0, user-scalable=yes, width=' + ww);
      }
    }
  }

window.addEventListener('resize', function(){
  setViewport();
});

setViewport();
</script>

<style>

#app {
  font-family: NotoSerifKR-Light, AppleMyungjo, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #565433;
  background-image: url('./assets/images/image_bg.gif');
}

html, body {
    overscroll-behavior: none;
}
</style>