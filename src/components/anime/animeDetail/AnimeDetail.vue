<template>
  <div id="animeDetail">

    <!-- Breadcrumb -->
    <el-header class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!--<el-breadcrumb-item v-for="(item, i) in breadcrumb" :key="item.title" :to="{ path: item.path }">{{item.title}}</el-breadcrumb-item>-->
        <el-breadcrumb-item :to="{ path: '/index' }">Index</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/bangumi/' }">Bangumi</el-breadcrumb-item>
        <el-breadcrumb-item v-if="videoSource.length!==0">{{videoSource.animeTitle}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>

    <el-main>
      <!-- Anime Detail Carousel -->
      <el-carousel arrow="never" height="560px" indicator-position="none" :autoplay="false" ref="animeDetailCarousel">
        <el-carousel-item key="detailInfo">
          <!-- Anime Detail Info -->
          <el-main>
            <div class="detail-img">
              <img src="../../../../static/background_0000.jpg" class="image"/>
              <el-button type="info" v-if="videoSource.length != 0" @click="switchDetailView(1)" round><span v-if="videoIsPlaying==='2'">Start</span><span v-else-if="videoIsPlaying==='1'">Continue</span></el-button>
            </div>
            <div class="detail-text">
              <el-row :gutter="20">
                <el-col :span="24">
                  <div class="grid-content text-main-title">朝花夕誓：于离别之朝，竖起约定之花</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="5">
                  <div class="grid-content text-title">StartDate：</div>
                </el-col>
                <el-col :span="19">
                  <div class="grid-content text-date-value">2019.04.01</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="5">
                  <div class="grid-content text-title">ReleaseDate：</div>
                </el-col>
                <el-col :span="19">
                  <div class="grid-content text-date-value">火曜日</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="5">
                  <div class="grid-content text-title">Language：</div>
                </el-col>
                <el-col :span="19">
                  <div class="grid-content text-date-value">日本語</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="5">
                  <div class="grid-content text-title">Profile：</div>
                </el-col>
                <el-col :span="19">
                  <div class="grid-content text-profile-value">
                    时为战国。
                    醍醐之国主景光，在某所寺院的大堂中，向12尊鬼神像许愿领土繁荣。作为交换而诞生的景光之后嗣，身体各处都有所欠缺，被视作不祥之子而抛弃到河川之中。时光流逝，鬼神实现了与景光的约定，国家迎来了平安。这样的某天，名为“多罗罗”的年幼盗贼，与某个男人相遇。
                    那是鬼，还是人——
                    两臂装有刀剑，全身皆为人造的男人“百鬼丸”，用他那无神光的双瞳紧紧盯着袭来的妖魔。
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-main>
        </el-carousel-item>
        <el-carousel-item key="detailPlayer">
          <!-- Anime Player -->
          <el-main>
            <anime-player ref="animePlayer" @switchDetailView="switchDetailView"></anime-player>
          </el-main>
        </el-carousel-item>
      </el-carousel>
    </el-main>

    <el-main class="total-count">
      <el-tabs v-model="activeName" v-if="episodesList.length!=0">
        <el-tab-pane v-for="(episodesSpacing, index) in episodesList" :key="episodesSpacing.label" :label="episodesSpacing.label" :name="'episodesSpacing_' + (index + 1)">
          <el-button v-for="(episode, i) in episodesSpacing.counts" :key="episode.episodes" class="video-count" @click="switchDetailView(1, episode.episodes)">{{episode.episodes}}</el-button>
        </el-tab-pane>
      </el-tabs>
      <!-- 如果没有查到集数，要显示“暂无资源哦~” -->
      <div class="empty-episodes" v-else>
        暂无资源哦~
      </div>
    </el-main>

  </div>
</template>

<script>

  import AnimePlayer from './AnimePlayer'

  // test videoDataSource
  const videoSource = {
    "id": "2333",
    "animeTitle": "于离别之朝，竖起约定之花",
    "imgSrc": "../../../../static/background_0000.jpg",
    "language": "日本語",
    "startDate": "木曜日",
    "releaseDate": "2019-04-01",
    "year": "2019",
    "month": "4",
    "bangumiBOList": [
      {"id":"23333", "episodes": "1","title":"The 1st Episode.","videoPath":"http://clips.vorwaerts-gmbh.de/","videoName":"big_buck_bunny.mp4"},
      {"id":"23334", "episodes": "2","title":"The 2nd Episode.","videoPath":"https://media.w3.org/2010/05/sintel/","videoName":"trailer.mp4"},
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

  const breadcrumb = [
    {"title":"Index","path":"/index"},
    {"title":"Bangumi","path":"/bangumi"},
  ];

  // 以默认的基数进行集数拆分
  let episodesList = [];

  export default {
    name: "animeDetail",
    data() {
      return {
        // 视频是否已播放
        videoIsPlaying: '2',
        // route传入的params
        id: this.$route.params.id,
        // 展示最大分页按钮
        pagerCount: 11,
        // 1. 分页按钮；2. 集数按钮
        viewType: '1',
        // 默认选中的集数区间
        activeName: 'episodesSpacing_1',
        // 用来给集数拆分区间的基数
        episodesSplitNum: 12,
        // 详细视频参数
        videoSource: '',
        // 分好区间的集数
        episodesList: episodesList,
        // 面包屑
        breadcrumb: ''
      }
    },
    components: {
      AnimePlayer
    },
    created() {
      console.log(videoSource.bangumiBOList)
      // this.$refs.animePlayer.bangumiDetail = videoSource.bangumiBOList[0];
    },
    mounted() {
      if(this.videoSource === '') {
        this.videoSource = videoSource;
        this.$refs.animePlayer.bangumiDetail = this.videoSource.bangumiBOList[0];
      }

      // 划分集数的区间
      if (episodesList.length === 0) {
        // 1. 获得一共多少个区间（向下取整）
        let episodesSpacingCount = Math.floor(videoSource.bangumiBOList.length / this.episodesSplitNum);
        if (episodesSpacingCount > 0) {
          for (let i = 1; i <= episodesSpacingCount; i++) {
            let episodesObj = {};
            episodesObj.label = i + " - " + i * this.episodesSplitNum;
            episodesObj.counts = videoSource.bangumiBOList.slice((i - 1) * this.episodesSplitNum, i * this.episodesSplitNum);
            episodesList.push(episodesObj);
          }
          // 2. 将剩余不足基数的部分作为一个区间注入
          let lastEpisodesSpacingCount = Math.floor(videoSource.bangumiBOList.length % this.episodesSplitNum);
          let episodesObj = {};
          episodesObj.label = videoSource.bangumiBOList.length - lastEpisodesSpacingCount + 1 + " - " + videoSource.bangumiBOList.length;
          episodesObj.counts = videoSource.bangumiBOList.slice(-lastEpisodesSpacingCount);
          episodesList.push(episodesObj);
        }
      }
    },
    methods: {
      switchDetailView: function (activeView, index) {
        console.log("success switchDetailView! index: ", index)
        // 切换至播放器view
        this.$refs.animeDetailCarousel.setActiveItem(activeView);
        if(index) {
          this.$refs.animePlayer.bangumiDetail = this.videoSource.bangumiBOList[index - 1];
          console.log(13123)
          // this.$refs.animePlayer.activeIndex = index - 1;
          this.$refs.animePlayer.videoPlay();
        }
        if(activeView === '0') {
          // 切换start按钮的文字变为"continue"
          this.videoIsPlaying = '1';
        }
      }
    }
  }
</script>

<style scoped>

  .el-main {
    background: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 10rem;
    padding: 20px 0 20px;
    min-height: 560px;
  }

  .detail-img {
    width: 280px;
    /*height: 392px;*/
    /*background: rgba(255,255,255, 1);*/
    margin-left: 50px;
    border-radius: 10px;
    /*overflow: hidden;*/
    float: left;
  }

  .detail-img > .el-button {
    width: 200px;
    font-size: 18px;
    background: #FFB71C;
    color: #FFF;
    border: 0;
  }

  .detail-img > .el-button:hover {
    background: #F2C25B;
  }

  .detail-img > .image {
    width: 280px;
    height: 392px;
    border-radius: 10px;
    float: left;
  }

  .detail-text {
    width: 600px;
    float: left;
    margin-left: 60px;
  }

  .el-row {
    margin-bottom: 20px;
    border-bottom: 1px solid #CCC;
  }

  .el-row:nth-last-child(1) {
    border: 0;
  }

  .grid-content {
    height: auto;
    background: #FFF;
    line-height: 35px;
    text-align: left;
  }

  .text-main-title {
    font-size: 20px;
  }

  .text-title {
    font-size: 14px;
    color: #B4B4B4;
  }

  .text-date-value {
    font-size: 16px;
    color: #B4B4B4;
  }

  .text-profile-value {
    font-size: 12px;
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

  .empty-episodes {
    border-top: 1px solid #CCC;
    padding-top: 20px;
    font-size: 18px;
    color: #F60;
  }


</style>
