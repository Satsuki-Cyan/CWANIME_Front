<template>
  <div id="rightAside">
    <img src="../../static/randomizedBackground.png" class="randomized-background" @click="randomizedBackground"
         title="try to click?"/>
    <div class="returnTop" @click="returnTop"><span class="el-icon-arrow-up"></span><br />TOP</div>
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
        let num = this.COMMON_UTIL.randomNum(0, 9, this.backgroundNum);
        // 2. 修复切换背景图时出现的“白色闪屏”现象
        let img = new Image();
        img.src = "./static/background_000" + num + ".jpg";
        img.onload = function () {
          document.body.style.backgroundImage = "url(" + img.src + ")";
        }
        this.backgroundNum = num;
      },
      returnTop: function () {
        // window.scroll(0,0)
        // document.getElementById('componentHeader').scrollIntoView();
        // TOdo 带动画效果的锚

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

  .returnTop {
    width: 80px;
    height: 80px;
    line-height: 33px;
    background: rgba(255,255,255,1);
    border-radius: 10px;
    position: fixed;
    bottom: 100px;
    right: 100px;
    font-size: 20px;
    cursor: pointer;
    transition: all 1s;
  }

  .el-icon-arrow-up {

  }

  .returnTop:hover .el-icon-arrow-up {
    animation:returnTopMove 1s infinite;
  }

  @keyframes returnTopMove
  {
    0% {margin-top:20px;}
    100% {margin-top:0px;}
  }


</style>
