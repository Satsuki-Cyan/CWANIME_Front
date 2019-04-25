<template>
  <div id="animeDetail">
    <el-carousel arrow="never" height="560px" indicator-position="none" :autoplay="false" ref="animeDetailCarousel">
      <el-carousel-item key="detailInfo">
        <!-- Login Title -->
        <!--<el-header class="area-title">-->
        <!--<el-button type="warning" class="btn-sign-up" @click="modelSwitch(1)" round>-->
        <!--Sign Up-->
        <!--<i class="el-icon-arrow-right"></i>-->
        <!--</el-button>-->
        <!--</el-header>-->
        <!-- Anime Detail Info -->
        <el-main>
          <div class="detail-img">
            <img src="../../../../static/background_0000.jpg" class="image"/>
            <el-button type="info" v-if="bangumiSource.length != 0" @click="switchDetailView(1)" round><span v-if="videoIsPlaying==='2'">Start</span><span v-else-if="videoIsPlaying==='1'">Continue</span></el-button>
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
  </div>
</template>

<script>

  import AnimePlayer from './AnimePlayer'



  export default {
    name: "animeDetail",
    props:[
      'bangumiSource'
    ],
    data() {
      return {
        videoIsPlaying: '2'
      }
    },
    components: {
      AnimePlayer
    },
    mounted() {
      if(this.bangumiSource.length != 0) {
        this.$refs.animePlayer.bangumiDetail = this.bangumiSource[0];
      }
    },
    methods: {
      switchDetailView: function (activeView, index) {
        console.log("success switchDetailView! index: ", index)
        // 切换至播放器view
        this.$refs.animeDetailCarousel.setActiveItem(activeView);
        if(index) {
          this.$refs.animePlayer.bangumiDetail = this.bangumiSource[index - 1];
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
    padding: 50px 0 20px;
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


</style>
