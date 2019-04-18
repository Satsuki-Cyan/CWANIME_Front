<template>
  <div id="app">
    <router-view/>
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
    background: url("../static/background_0003.jpg") no-repeat fixed;
    background-size: cover;
    transition: all 1s;
  }

  #app {
    transition: all 1s;
  }
</style>
