<template>
  <div id="app">
    <transition name="pageChangeSlide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted: function () {
      // 1. 设置body-width与屏幕width一致（减去20px进行修正）
      document.body.style.width = (window.screen.availWidth - 20) + "px";
    }
  }


</script>

<style>
  body {
    margin: 0;
  /*url("../static/background_0000.jpg")*/
    background: no-repeat fixed;
    background-size: cover;
    transition: all 1s;
  }

  #app {
    transition: all 1s;
  }

  .pageChangeSlide-enter, .pageChangeSlide-leave, .pageChangeSlide-enter-to, .pageChangeSlide-leave-to {
    opacity: 0;
  }

  .pageChangeSlide-enter-active, .pageChangeSlide-leave-active {
    transition: opacity 500ms;
  }

</style>
