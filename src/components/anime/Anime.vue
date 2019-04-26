<template>
  <div id="anime">
    <el-container class="main-content">
      <!-- Anime Title -->
      <el-header class="area-title">
        <img src="../../../static/index_bangumi.png"/>
      </el-header>

      <!--&lt;!&ndash; Breadcrumb &ndash;&gt;-->
      <!--<el-header class="breadcrumb">-->
        <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
          <!--<el-breadcrumb-item v-for="(item, i) in breadcrumb" :key="item.title" :to="{ path: item.path }">{{item.title}}</el-breadcrumb-item>-->
          <!--&lt;!&ndash;<el-breadcrumb-item :to="{ path: '/index' }">Index</el-breadcrumb-item>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-breadcrumb-item :to="{ path: '/bangumi/' }">Bangumi</el-breadcrumb-item>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-breadcrumb-item v-if="videoSource.length!==0">{{videoSource.animeTitle}}</el-breadcrumb-item>&ndash;&gt;-->
        <!--</el-breadcrumb>-->
      <!--</el-header>-->

      <!--<el-main>-->
        <transition name="componentChangeSlide">
          <router-view></router-view>
        </transition>
      <!--</el-main>-->

      <!--<el-main class="main-footer" v-if="viewType==='1'">-->
        <!--<el-pagination background layout="prev, pager, next" :pager-count="pagerCount" :total="1000">-->
        <!--</el-pagination>-->
      <!--</el-main>-->
      <!--<el-main class="total-count" v-if="viewType==='2'">-->
        <!--<el-tabs v-model="activeName" v-if="episodesList.length!=0">-->
          <!--<el-tab-pane v-for="(episodesSpacing, index) in episodesList" :key="episodesSpacing.label" :label="episodesSpacing.label" :name="'episodesSpacing_' + (index + 1)">-->
            <!--<el-button v-for="(episode, i) in episodesSpacing.counts" :key="episode.episodes" class="video-count" @click="switchVideo(episode.episodes)">{{episode.episodes}}</el-button>-->
          <!--</el-tab-pane>-->
        <!--</el-tabs>-->
        <!--&lt;!&ndash; 如果没有查到集数，要显示“暂无资源哦~” &ndash;&gt;-->
        <!--<div class="empty-episodes" v-else>-->
          <!--暂无资源哦~-->
        <!--</div>-->
      <!--</el-main>-->

    </el-container>
  </div>
</template>

<script>



  const breadcrumb = [
    {"title":"Index","path":"/index"},
    {"title":"Bangumi","path":"/bangumi"},
  ]



  export default {
    name: "Anime",
    data() {
      return {
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
        // episodesList: episodesList,
        // 面包屑
        breadcrumb: ''
      }
    },
    created() {
      // TODO 根据请求参数查询各种应该准备好的渲染参数
      console.log("created!");
      this.breadcrumb = breadcrumb;
    },
    mounted() {
      console.log("id:",this.id);
      this.breadcrumb = breadcrumb;
      // 判断加载的时候是否为详情页
      // if(this.breadcrumb.length === 2) {
      //   this.breadcrumb[1].path += ("/" + this.videoSource.year + "/" + this.COMMON_UTIL.convertNum2Month(+this.videoSource.month));
      //   if(this.$route.path.indexOf("detail") !== -1) {
      //     this.viewType = '2';
      //     let activeAnimePath = this.breadcrumb[1].path + "/detail/" + videoSource.id;
      //     this.breadcrumb.push({"title": videoSource.animeTitle, "path": activeAnimePath});
      //   }
      // }


    },
    watch:{
      $route(to,from){
        console.log(to,from)
        // 处理面包屑
        // this.breadcrumb = breadcrumb;
        // this.breadcrumb[1].path += ("/" + this.videoSource.year + "/" + this.COMMON_UTIL.convertNum2Month(+this.videoSource.month));
        // let activeAnimePath = this.breadcrumb[1].path + "/detail/" + videoSource.id;
        // console.log(to.params.id)
        // if(to.params.id) {
        //   this.breadcrumb.push({"title": videoSource.animeTitle, "path": activeAnimePath});
        // }
        // this.videoSource = {};
      }
    },
    beforeRouterUpdate (to, from, next) {
      // 离开该组件的对应路由时调用，清空videoSource
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

  .empty-episodes {
    border-top: 1px solid #CCC;
    padding-top: 20px;
    font-size: 18px;
    color: #F60;
  }

  .componentChangeSlide-enter, .componentChangeSlide-leave, .componentChangeSlide-enter-to, .componentChangeSlide-leave-to {
    opacity: 0;
  }

  .componentChangeSlide-enter-active, .componentChangeSlide-leave-active {
    transition: opacity 500ms;
  }
</style>
