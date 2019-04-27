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

    <!-- 需要渲染的bangumi分页集合 -->
    <el-main>
      <el-row v-if="bangumiList.length !== 0">
        <el-col :span="bangumiContentSpan" v-for="(contentObj, index) in bangumiList" :key="contentObj.id">
          <el-card>
            <img :src="contentObj.imgSrc" class="image" ref="image" @click="GoToDetail(contentObj)" />
            <div class="content">
              <span :title="contentObj.title" class="content-setsumei" @click="GoToDetail(contentObj)">{{contentObj.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ contentObj.createTime }}</time>
                <!--<el-button type="text" class="button">999</el-button>-->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <img src="../../../../static/contentEmptyDefault.png" v-else />
    </el-main>

    <el-main class="main-footer">
      <el-pagination @current-change="pageChange"  :current-page="page" :pager-count="pagerCount" :total="pageTotal" background layout="prev, pager, next">
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
    {"id" : "111112","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111113","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111114","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111115","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111116","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111117","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111118","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111119","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111120","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111121","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111122","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"}
  ];

  export default {
    name: "AnimeByPage",
    data() {
      return {
        // 分页数，默认第1页
        page: 1,
        // 每页最大显示数量
        pageSize: 16,
        // 展示最大分页按钮数量
        pagerCount: 11,
        // 分页总数
        pageTotal: 1000,
        // 每一个渲染的卡片元素的span
        bangumiContentSpan: 6,
        // 当前查询出的分页集合
        bangumiList: '',
        // bangumi-breadcrumb
        bangumiBreadcrumb: ``
      }
    },
    mounted() {
      // TODO 根据条件，查询bangumi分页集合，考虑下根据路由变化来请求分页数据，请求完直接处理imgSrc
      // test写法，真正请求做法参照上面TODO来做
      if(this.bangumiList.length === 0) {
        // 处理文件src路径的前缀
        this.SYS_CONST.addSystemResourcePrefix(testContent, "imgSrc");
        this.bangumiList = testContent;
      }
    },
    methods: {
      GoToDetail: function (obj) {
        // 对path进行处理并路由
        let path = '/bangumi/' + obj.year + '/' + this.COMMON_UTIL.convertNum2Month(obj.month) + '/detail/' + obj.id;
        this.$router.push({
          path: path,
          params: {
            id: obj.id
          }
        });
      },
      pageChange: function (val) {
        console.log(val)
        this.page = val;

        // 查询条件...
        let params = '';

        this.reqBangumiByPage(params,this.page,this.pageSize);
      },
      reqBangumiByPage: function (params, page, pageSize) {
        // TODO 发起数据请求

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

  .breadcrumb {
    background: rgba(255, 255, 255, 1);
    padding: 20px 0 0 30px;
  }

  .el-breadcrumb-item {

  }

  .main-footer {
    background: rgba(255, 255, 255, 1);
    padding: 25px;
  }

  .el-row {
    padding: 20px 25px;
  }

  .el-col {
    width: 15.9375rem;
    border-radius: 0.625rem;
    margin: 0 0.3125rem;
    padding: 0.3125rem;
  }

  .content {

  }

  .content-setsumei {
    width: auto;
    display: block;
    line-height: 1.875rem;
    cursor: pointer;
  }

  .time {
    font-size: 0.8125rem;
    color: #999;
  }

  .bottom {
    line-height: 0.75rem;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 12.5rem;
    height: 12.5rem;
    cursor: pointer;
    border-radius: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .componentChangeSlide-enter, .componentChangeSlide-leave, .componentChangeSlide-enter-to, .componentChangeSlide-leave-to {
    opacity: 0;
  }

  .componentChangeSlide-enter-active, .componentChangeSlide-leave-active {
    transition: opacity 500ms;
  }
</style>
