<template>
  <div id="rightAside">
    <img src="../../static/randomizedBackground.png" class="randomized-background" @click="randomizedBackground"
         title="try to click?"/>
  </div>
</template>

<script>
  export default {
    name: "RightAside",
    data() {
      return {
        backgroundNum: 1
      }
    },
    methods: {
      randomizedBackground: function () {
        // 1. 获取区间的随机数（ignore值为backgroundNum）
        let num = this.COMMON_UTIL.randomNum(1, 6, this.backgroundNum);
        // 2. 修复切换背景图时出现的“白色闪屏”现象
        let img = new Image();
        img.src = "./static/background_000" + num + ".jpg";
        img.onload = function () {
          document.body.style.backgroundImage = "url(" + img.src + ")";
        }
        this.backgroundNum = num;
      }
    }
  }
</script>

<style scoped>
  .randomized-background {
    width: 200px;
    height: 300px;
    cursor: pointer;
    margin-top: -100px;
    transition: all 1s;
    /*position: fixed;*/
  }

  .randomized-background:hover {
    margin-top: -50px;
  }


</style>
