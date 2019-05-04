<template>
  <div id="rightAside">
    <img src="../../static/randomizedBackground.png" class="randomized-background" @click="randomizedBackground"
         title="try to click?"/>
    <div id="returnTop" :class="[returnTop,{active : returnTopActive==1}]" @click="returnTopFunc"><span
      class="el-icon-arrow-up"></span><br/>TOP
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightAside",
    data() {
      return {
        returnTop: 'returnTop',
        backgroundNum: 1,
        returnTopActive: 0
      }
    },
    mounted() {
      // 添加监听scroll事件
      window.addEventListener('scroll', this.rightScroll, true);
      // 加载组件时随机背景
      this.randomizedBackground();
    },
    methods: {
      randomizedBackground: function () {
        // 1. 获取区间的随机数（ignore值为backgroundNum）
        let num = this.COMMON_UTIL.randomNumStr(0, 21, this.backgroundNum, 4);
        // 2. 修复切换背景图时出现的“白色闪屏”现象
        let img = new Image();
        img.src = "./static/background_" + num + ".jpg";
        img.onload = function () {
          document.body.style.backgroundImage = "url(" + img.src + ")";
        }
        this.backgroundNum = num;
      },
      rightScroll: function () {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 400) {
          this.returnTopActive = 1;
        } else {
          this.returnTopActive = 0;
        }
      },
      returnTopFunc: function () {
        document.getElementById('componentHeader').scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    destroyed: function () {
      // 离开页面移除scroll事件
      window.removeEventListener('scroll', this.rightScroll);
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
  }

  .randomized-background:hover {
    margin-top: -50px;
  }

  .returnTop {
    width: 70px;
    height: 70px;
    /*margin: 450px auto;*/
    line-height: 30px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 10px;
    font-size: 18px;
    transition: all 1s;
    position: fixed;
    right: 100px;
    bottom: 100px;
    cursor: default;
  }

  .active {
    opacity: 1;
    cursor: pointer;
  }

  .returnTop:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  .returnTop:hover .el-icon-arrow-up {
    animation: returnTopMove 1s infinite;
  }

  @keyframes returnTopMove {
    0% {
      margin-top: 20px;
    }
    100% {
      margin-top: 0px;
    }
  }


</style>
