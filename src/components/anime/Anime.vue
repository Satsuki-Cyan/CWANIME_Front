<template>
  <div id="anime">
    <el-container class="main-content">
      <!-- Anime Title -->
      <el-header class="area-title">
        <img src="../../../static/index_bangumi.png"/>
      </el-header>

      <el-main>
        <transition name="componentChangeSlide">
          <router-view ref="animeInfoAndPlayer"></router-view>
        </transition>
      </el-main>

      <el-main class="main-footer" v-if="viewType==='1'">
        <el-pagination background layout="prev, pager, next" :pager-count="pagerCount" :total="1000">
        </el-pagination>
      </el-main>
      <el-main class="total-count" v-if="viewType==='2'">
        <el-tabs v-model="activeName">
          <el-tab-pane label="1 - 12" name="first">
            <el-button class="video-count" @click="switchVideo(1)">1</el-button>
            <el-button class="video-count" @click="switchVideo(2)">2</el-button>
            <el-button class="video-count" @click="switchVideo(3)">3</el-button>
          </el-tab-pane>
          <el-tab-pane label="13-24" name="second">
            <el-button class="video-count" @click="switchVideo(13)">13</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-main>

    </el-container>
  </div>
</template>

<script>

  // test videoDataSource
  const videoSource = {
    "id":"2333",
    "animeTitle":"于离别之朝，竖起约定之花",
  };

  export default {
    name: "Anime",
    data() {
      return {
        pagerCount: 11,
        viewType: '2',
        activeName: 'first'
      }
    },
    mounted() {

    },
    methods: {
      viewDetail: function(id) {
        // 1. 切换底部(main-footer)内容
        this.viewType = '2';

      },
      switchVideo: function (index) {
        // 1. 切换走馬燈至player
        this.$refs.animeInfoAndPlayer.switchDetailView(1,index)
      }
    }
  }
</script>

<style scoped>

  .el-header {
    padding: 0;
  }

  .el-main {
    background: rgba(255, 255, 255, 0.6);
    text-align: center;
    /*line-height: 10rem;*/
    padding: 0;
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

  .main-footer {
    height: 75px;
    padding: 20px;
  }

  .total-count {
    padding: 20px 50px;
    background: rgba(255, 255, 255, 1);
  }

  .video-count {
    float: left;
  }

  .componentChangeSlide-enter, .componentChangeSlide-leave, .componentChangeSlide-enter-to, .componentChangeSlide-leave-to {
    opacity: 0;
  }

  .componentChangeSlide-enter-active, .componentChangeSlide-leave-active {
    transition: opacity 500ms;
  }
</style>
