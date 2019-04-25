<template>
  <div id="anime">
    <el-container class="main-content">
      <!-- Anime Title -->
      <el-header class="area-title">
        <img src="../../../static/index_bangumi.png"/>
      </el-header>

      <!-- Breadcrumb -->
      <el-header class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">Index</el-breadcrumb-item>
          <el-breadcrumb-item>Bangumi</el-breadcrumb-item>
          <el-breadcrumb-item>{{videoSource.animeTitle}}</el-breadcrumb-item>
        </el-breadcrumb>
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
          <el-tab-pane  v-for="(episodesSpacing, index) in episodesList" :label="episodesSpacing.label" :name="'episodesSpacing_' + (index + 1)">
            <el-button v-for="(episode, i) in episodesSpacing.counts" class="video-count" @click="switchVideo(episode.episodes)">{{episode.episodes}}</el-button>
          </el-tab-pane>
        </el-tabs>
        <!-- 如果没有查到集数，要显示“暂无资源哦~” -->

      </el-main>

    </el-container>
  </div>
</template>

<script>

  // test videoDataSource
  const videoSource = {
    "id": "2333",
    "animeTitle": "于离别之朝，竖起约定之花",
    "imgSrc": "../../../../static/background_0000.jpg",
    "language": "日本語",
    "startDate": "木曜日",
    "releaseDate": "2019-04-01",
    "bangumiBOList": [
      {"id":"23333", "episodes": "1","title":"The 1st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23334", "episodes": "2","title":"The 2nd Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23335", "episodes": "3","title":"The 3rd Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23336", "episodes": "4","title":"The 4th Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23337", "episodes": "5","title":"The 5th Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23338", "episodes": "6","title":"The 6th Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23339", "episodes": "7","title":"The 7th Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23340", "episodes": "8","title":"The 8th Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23341", "episodes": "9","title":"The 9th Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23342", "episodes": "10","title":"The 10st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23343", "episodes": "11","title":"The 11st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23344", "episodes": "12","title":"The 12st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23345", "episodes": "13","title":"The 13st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23346", "episodes": "14","title":"The 14st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23347", "episodes": "15","title":"The 15st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"},
      {"id":"23348", "episodes": "16","title":"The 16st Episode.","videoPath":"","videoName":"big_buck_bunny.mp4"}
    ]
  };

  // 以默认的基数进行集数拆分
  let episodesList = [];

  export default {
    name: "Anime",
    data() {
      return {
        // 展示最大分页按钮
        pagerCount: 11,
        // 1. 分页按钮；2. 集数按钮
        viewType: '2',
        // 默认选中的集数区间
        activeName: 'episodesSpacing_1',
        // 用来给集数拆分区间的基数
        episodesSplitNum: 12,
        // 详细视频参数
        videoSource: videoSource,
        // 分好区间的集数
        episodesList: episodesList
      }
    },
    mounted() {
      if(episodesList.length == 0) {
        // 1. 获得一共多少个区间（向下取整）
        let episodesSpacingCount = Math.floor(videoSource.bangumiBOList.length/this.episodesSplitNum);
        for(let i=1;i<=episodesSpacingCount;i++) {
          let episodesObj = {};
          episodesObj.label = i + " - " + i * this.episodesSplitNum;
          episodesObj.counts = videoSource.bangumiBOList.slice((i - 1) * this.episodesSplitNum, i * this.episodesSplitNum);
          episodesList.push(episodesObj);
        }
        // 2. 将剩余不足基数的部分作为一个区间注入
        let lastEpisodesSpacingCount = Math.floor(videoSource.bangumiBOList.length%this.episodesSplitNum);
        let episodesObj = {};
        episodesObj.label = videoSource.bangumiBOList.length - lastEpisodesSpacingCount + 1 + " - " + videoSource.bangumiBOList.length;
        episodesObj.counts = videoSource.bangumiBOList.slice(-lastEpisodesSpacingCount);
        episodesList.push(episodesObj);
      }
    },
    methods: {
      viewDetail: function (id) {
        // 1. 切换底部(main-footer)内容
        this.viewType = '2';
      },
      switchVideo: function (index) {
        // 1. 切换走馬燈至player
        this.$refs.animeInfoAndPlayer.switchDetailView(1, index);
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
    padding: 0;
  }

  .area-title {
    background: rgba(255, 255, 255, 1);
    height: auto !important;
    padding-top: 20px;
  }

  .breadcrumb {
    background: rgba(255, 255, 255, 1);
    padding: 20px 0 0 30px;
  }

  .el-breadcrumb-item {

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
