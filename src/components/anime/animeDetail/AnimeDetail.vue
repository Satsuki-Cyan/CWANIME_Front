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
          asd123
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
      return {}
    },
    components: {
      AnimePlayer
    },
    mounted() {

    },
    methods: {
      asd: function () {

      }
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }

  .el-footer {
    background-color: #FFF;
    color: #333;
    text-align: center;
    line-height: 3.75rem;
    opacity: 0.8;
    margin-top: 50px;
    border-radius: 20px 20px 0 0;
  }

  .el-aside {
    background-color: rgba(255, 255, 255, 0);
    color: #333;
    text-align: center;
    line-height: 12.5rem;
  }

  .el-main {
    background: rgba(255, 255, 255, 0.6);
    text-align: center;
    line-height: 10rem;
    padding: 0 0 20px;
  }

  .area-title {
    background: rgba(255, 255, 255, 1);
    height: auto !important;
    padding-top: 20px;
    /*border-bottom: 2px dashed #E9EAEB;*/
  }

  .main-content {
    margin-top: 50px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    overflow: hidden;
  }


</style>
