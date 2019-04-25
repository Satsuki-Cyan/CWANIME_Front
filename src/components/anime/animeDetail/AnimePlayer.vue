<template>
  <div id="animePlayer">
    <!-- Player Header -->
    <el-header class="area-title">
      <el-button type="warning" class="btn-back-to-info" @click="backToInfo" round>
        <i class="el-icon-arrow-left"></i>
        Back To
      </el-button>
      <div class="player-info">
        <span class="episodes-count">第 {{bangumiDetail.episodes}} 话</span>
        <span class="episodes-title">{{bangumiDetail.title}}</span>
      </div>
    </el-header>
    <el-main>
      <video id="activeVideo" class="video" controls>
        <!--http://vjs.zencdn.net/v/oceans.mp4-->
        <source :src="bangumiDetail.videoPath + bangumiDetail.videoName" type="video/mp4">
      </video>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: "AnimePlayer",
    data() {
      return {
        bangumiDetail: ''
      }
    },
    methods: {
      backToInfo: function () {
        // stop video
        document.getElementById("activeVideo").pause();
        // back to video info
        this.$emit('switchDetailView', '0');
      },
      videoPlay: function () {
        // 切换视频源时需要触发一次play才能播放
        document.getElementById("activeVideo").play();
      }
    }
  }
</script>

<style scoped>
  .area-title {
    background: rgba(255, 255, 255, 1);
    height: auto;
    padding-left: 30px;
  }

  .btn-back-to-info {
    border: 0;
    float: left;
    margin: 0;
    font-size: 12px;
  }

  .player-info {
    height: auto;
    float: left;
    margin-left: 20px;
    line-height: 35px;
    font-size: 20px;
  }

  .episodes-count {

  }

  .episodes-title {
    font-size: 14px;
    margin-left: 10px;
  }

  .el-main {
    padding: 0 30px 55px;
  }

  .video {
    width: 680px;
    height: 381px;
    float: left;
    object-fit: cover;
    outline: 0;
  }




</style>
