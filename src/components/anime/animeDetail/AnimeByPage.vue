<template>
  <div id="animeByPage">

    <!-- Breadcrumb -->
    <el-header class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!--<el-breadcrumb-item v-for="(item, i) in breadcrumb" :key="item.title" :to="{ path: item.path }">{{item.title}}</el-breadcrumb-item>-->
        <el-breadcrumb-item :to="{ path: '/index' }">Index</el-breadcrumb-item>
        <el-breadcrumb-item>Bangumi</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>

    <el-main>
      <!-- 查询出的bangumi集合 -->

    </el-main>

    <el-main class="main-footer">
      <el-pagination background layout="prev, pager, next" :pager-count="pagerCount" :total="1000">
      </el-pagination>
    </el-main>

  </div>
</template>

<script>

  // req get these data (for today) month 记得用util做个转换，曜日也是
  let testContent = [{"id" : "1","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "11","imgSrc" : "u=4083493357,2327411348&fm=26&gp=0.jpg","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "1111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "11111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "1111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"}
  ];

  const breadcrumb = [
    {"title":"Index","path":"/index"},
    {"title":"Bangumi","path":"/bangumi"},
  ]

  export default {
    name: "AnimeByPage",
    data() {
      return {
        // 分页数，默认第1页
        page: 1,
        // 展示最大分页按钮数量
        pagerCount: 11,
        // 面包屑
        breadcrumb: ''
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
    background: rgba(255, 255, 255, 1);
    padding: 25px;
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
