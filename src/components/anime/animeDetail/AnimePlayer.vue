<template>
  <div id="animePlayer">
    <!-- Player Header -->
    <el-header class="area-title">
      <el-button type="warning" class="btn-back-to-info" @click="backToInfo" round>
        <i class="el-icon-arrow-left"></i>
        Back To
      </el-button>
      <div class="player-info">
        <span>第 {{activeAnimeCount}} 话</span>
      </div>
    </el-header>
    <el-main>
      <video class="video" controls>
        <source src="" type="video/mp4">
      </video>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: "AnimePlayer",
    data() {
      return {
        activeAnimeCount: '1'
      }
    },
    methods: {
      backToInfo: function () {
        this.$emit('switchDetailView', '0', this.activeAnimeCount);
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

  .el-main {
    padding: 0 30px;
  }

  .video {
    width: 700px;
    height: 394px;
    float: left;
  }


</style>
