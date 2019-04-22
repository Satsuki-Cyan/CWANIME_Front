<template>
  <div id="animeDetail">
    <el-carousel arrow="never" height="800px" indicator-position="none" :autoplay="false" ref="animeDetailCarousel">
      <el-carousel-item key="detailInfo">
        <!-- Login Title -->
        <!--<el-header class="area-title">-->
          <!--<el-button type="warning" class="btn-sign-up" @click="modelSwitch(1)" round>-->
            <!--Sign Up-->
            <!--<i class="el-icon-arrow-right"></i>-->
          <!--</el-button>-->
        <!--</el-header>-->
        <!-- Login Content -->
        <el-main>
          <div class="detail-img">
            <img src="../../../../static/background_0000.jpg" class="image" />
          </div>
          <div class="detail-text">
            // TODO 调整这里的文字说明
          </div>
        </el-main>
      </el-carousel-item>
      <el-carousel-item key="detailPlayer">
        <!-- Anime Player -->
        <el-main>
          <anime-player></anime-player>
        </el-main>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  import AnimePlayer from './AnimePlayer'

  export default {
    name: "animeDetail",
    data() {
      return {

      }
    },
    components: {
      AnimePlayer
    },
    mounted() {

    },
    methods: {
      switchDetailView: function () {

      }
    }
  }
</script>

<style scoped>

  .el-main {
    background: rgba(255, 255, 255, 0.6);
    text-align: center;
    line-height: 10rem;
    padding: 0 0 20px;
  }

  .detail-img {
    width: 280px;
    height: 350px;
    background: rgba(255,255,255, 1);
    margin: 50px 0 0 50px;
    border-radius: 10px;
    overflow: hidden;
  }

  .detail-img>.image {
    width: 280px;
    height: 350px;
  }


</style>
