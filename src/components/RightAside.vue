<template>
  <div id="rightAside">
    <img src="../assets/randomizedBackground.png" class="randomized-background" @click="randomizedBackground" />
  </div>
</template>

<script>
  export default {
    name: "RightAside",
    methods: {
      randomizedBackground: function () {
        console.log(document.body.style.background)
        document.body.style.backgroundImage = "url(\"../assets/background_0002.jpg\")";
      }
    }
  }
</script>

<style scoped>
  .randomized-background {
    width: 200px;
    height: 300px;
    cursor: pointer;
  }

  .randomized-background:hover {

  }


</style>
