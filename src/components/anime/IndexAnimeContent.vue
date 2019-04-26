<template>
  <div id="indexAnimeContent">
    <el-carousel arrow="never" :height="animeCarouselHeight" indicator-position="none" :autoplay="false" ref="animeCarousel">
      <el-carousel-item v-for="(val,i) in weekContent" :key="val.key">
        <el-row v-if="JSON.stringify(val.contentArr)!='[]'">
          <el-col :span="animeContentSpan" v-for="(contentObj, index) in val.contentArr" :key="contentObj.id">
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
        <img src="../../../static/contentEmptyDefault.png" v-else />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  let weekContent = [
    {"key" : "sun", "day" : 0, "contentArr" : []},
    {"key" : "mon", "day" : 1, "contentArr" : []},
    {"key" : "tues", "day" : 2, "contentArr" : []},
    {"key" : "wed", "day" : 3, "contentArr" : []},
    {"key" : "thur", "day" : 4, "contentArr" : []},
    {"key" : "fri", "day" : 5, "contentArr" : []},
    {"key" : "sat", "day" : 6, "contentArr" : []}
  ];

  let movieToOvaContent = {"key" : "movieToOva", "day" : "7", "contentArr" : []};

  // req get these data (for today) month 记得用util做个转换，曜日也是
  let testContent = [{"id" : "1","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "11","imgSrc" : "u=4083493357,2327411348&fm=26&gp=0.jpg","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "1111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "11111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"},
    {"id" : "1111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01","year":"2019","month": "4"}
  ];

  const today = new Date().getDay();

  export default {
    name: "IndexAnimeContent",
    data() {
      return {
        "animeContentSpan" : 6,
        "animeCarouselHeight" : "615px",
        "weekContent": '',
        "currentDate": new Date()
      }
    },
    mounted() {
      // 1. 配合日期，给keys进行排序
      if(weekContent.length === 7) {
        weekContent = this.COMMON_UTIL.sortJSONArray(weekContent, today);
        weekContent.push(movieToOvaContent);
      }
    },
    methods: {
      setActiveItem: function (index) {
        this.$refs.animeCarousel.setActiveItem(index);
      },
      initAnimeContent: function (index, day) {
        // 1. 加载过内容的曜日不再进行数据请求
        if( weekContent[index].contentArr.length === 0 ) {
          // 2. 获取当前选中的曜日的内容
          // TODO 暂时用的 testContent，修改后用day去查询

          // 3. 处理文件src路径的前缀
          this.SYS_CONST.addSystemResourcePrefix(testContent, "imgSrc");
          // 4. 注入对应曜日的内容
          for(let animeObj of weekContent) {
            if( animeObj.day === day ) {
              animeObj.contentArr = testContent;
              break;
            }
          }
        }
        this.weekContent = weekContent;
      },
      GoToDetail: function (obj) {
        // 对path进行处理
        let path = '/bangumi/' + obj.year + '/' + this.COMMON_UTIL.convertNum2Month(+obj.month) + '/detail/' + obj.id;

        this.$router.push({
          path: path,
          params: {
            id: obj.id
          }
        });
      }
    }
  }
</script>

<style scoped>

  #indexAnimeContent {
    padding: 1.25rem;
  }

  .el-col {
    width: 15.9375rem;
    border-radius: 0.625rem;
    margin: 0 0.3125rem;
    padding: 0.3125rem;
  }

  .content {
    margin-top: -3.75rem;
    position: relative;
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

</style>
