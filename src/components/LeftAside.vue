<template>
  <div id="leftAside">
      <img src="../../static/toggleBackground.png" class="toggle-background" @click="hideBackground"
           title="Background Model Start !!!"/>
  </div>
</template>

<script>
  export default {
    name: "LeftAside",
    data() {
      return {
        imgUrl: ''
      }
    },
    mounted() {
      // 监听ESC按钮，显示页面所有元素（关闭壁纸模式）
      document.onkeydown = function(e) {
        if (window.event.keyCode === 27 && document.getElementById("app").style.display === "none") {
          document.getElementById("app").style.display = "block";
          // 不用setTimeout嵌套执行会丢失过渡效果
          setTimeout(() => {
            document.getElementById("app").style.opacity = "1";
          }, 0);
        }
      }
      // 添加监听scroll事件
      window.addEventListener('scroll', this.handleScroll, true);
    },
    methods: {
      // 隐藏页面所有元素（开启壁纸模式）
      hideBackground: function () {
        // 1. 保证只被点击一次
        let appOpacity = document.getElementById("app").style.opacity;
        if(appOpacity !== "0") {
          this.imgUrl = document.body.style.backgroundImage;
          // 截取并获得一个符合规范的url
          let imgPath = this.imgUrl.substring(5, this.imgUrl.length - 2);
          // 2. 弹出提示消息
          this.$notify({
            title: '',
            dangerouslyUseHTMLString: true,
            message: `按ESC退出壁纸模式，点击<a href="${imgPath}" download="">这里</a>下载该壁纸`,
            duration: 0
          });
          // 3. 通过过渡效果来隐藏页面元素
          document.getElementById("app").style.opacity = "0";
          // 4. 优化壁纸模式体验，隐藏全元素（只写这个会丢失过渡效果）
          setTimeout(() => {
            // 延迟时间与过渡效果时间保持一致（即过渡效果渲染结束时隐藏全元素）
            document.getElementById("app").style.display = "none";
          }, 1000);
        }
      },
      handleScroll: function () {
        // TODO 监听scroll滚动暂保留
        let scrollTop = document.documentElement.scrollTop;
      }
    },
    destroyed: function () {
      // 离开页面移除scroll事件
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  function downBackground () {
      // 获取background的路径
      console.log(document.body.style.backgroundImage)
      // window.open();
  }
</script>

<style scoped>

  .toggle-background {
    width: 150px;
    height: 150px;
    cursor: pointer;
    transition: all 1s;
    /*position: fixed;*/
    animation:leftAsideMove 2s infinite alternate;
  }

  .toggle-background:hover {
    animation-play-state: paused;
  }

  @keyframes leftAsideMove
  {
    from {margin-top:50px;}
    to {margin-top:150px;}
  }



</style>
