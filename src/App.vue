<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

  // 设置body-width与屏幕width一致（减去20px进行修正）
  document.getElementsByTagName("body")[0].style.width = (window.screen.availWidth - 20) + "px";
</script>

<style>
  body {
    margin: 0;
    background: url("../static/background_0003.jpg") no-repeat fixed;
    background-size: cover;
    transition: background 1s;
  }

  #app {

  }
</style>
