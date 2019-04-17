<template>
  <div id="rightAside">
    <img src="../../static/randomizedBackground.png" class="randomized-background" @click="randomizedBackground" />
  </div>
</template>

<script>
  export default {
    name: "RightAside",
    methods: {
      randomizedBackground: function () {
        let num = this.COMMON_UTIL.randomNum(1, 6);
        console.log(num)
        document.body.style.backgroundImage = "url(./static/background_000" + num + ".jpg)";
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
