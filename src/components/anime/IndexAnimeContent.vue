<template>
  <div id="indexAnimeContent">
    <el-carousel arrow="never" :height="animeCarouselHeight" indicator-position="none" :autoplay="false" ref="animeCarousel">
      <el-carousel-item v-for="(val,i) in testAnimeContent" :key="val.key">
        <el-row>
          <el-col :span="animeContentSpan" v-for="(contentObj, index) in val.contentArr" :key="contentObj.id">
            <el-card>
              <img :src="contentObj.imgSrc"  class="image" ref="image" />
              <!--<img src="../../../static/logo.png" class="image" />-->
              <div class="content">
                <span :title="contentObj.title" class="content-setsumei">{{contentObj.title}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ contentObj.createTime }}</time>
                  <!--<el-button type="text" class="button">999</el-button>-->
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  // const testAnimeContent = [
  //   {"key" : "sun", "contentArr" : [{"id" : "1","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
  //       {"id" : "11","imgSrc" : "u=4083493357,2327411348&fm=26&gp=0.jpg","title" : "123123123","createTime":"2019-04-01"},
  //       {"id" : "111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
  //       {"id" : "1111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
  //       {"id" : "11111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
  //       {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
  //       {"id" : "1111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"}
  //   ]},
  //   {"key" : "mon", "contentArr" : [{"id" : "2","imgSrc" : "../../../static/logo.png","title" : "22222","createTime":"2019-04-11"}]},
  //   {"key" : "tues", "contentArr" : [{"id" : "3","imgSrc" : "../../../static/logo.png","title" : "333333","createTime":"2019-04-12"}]},
  //   {"key" : "wed", "contentArr" : [{"id" : "4","imgSrc" : "../../../static/logo.png","title" : "44444","createTime":"2019-03-01"}]},
  //   {"key" : "thur", "contentArr" : [{"id" : "5","imgSrc" : "../../../static/logo.png","title" : "5555","createTime":"2019-03-21"}]},
  //   {"key" : "fri", "contentArr" : [{"id" : "6","imgSrc" : "../../../static/logo.png","title" : "6666","createTime":"2019-05-21"}]},
  //   {"key" : "sat", "contentArr" : [{"id" : "7","imgSrc" : "../../../static/logo.png","title" : "7777","createTime":"2019-03-30"}]},
  //   {"key" : "movieToOva", "contentArr" : [{"id" : "8","imgSrc" : "../../../static/logo.png","title" : "88888","createTime":"2019-06-01"}]},
  // ];

  let testAnimeContent = [
    {"key" : "sun"},
    {"key" : "mon"},
    {"key" : "tues"},
    {"key" : "wed"},
    {"key" : "thur"},
    {"key" : "fri"},
    {"key" : "sat"},
    {"key" : "movieToOva"},
  ];

  // req get these data (for Sun.)
  let testContent = [{"id" : "1","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
    {"id" : "11","imgSrc" : "u=4083493357,2327411348&fm=26&gp=0.jpg","title" : "123123123","createTime":"2019-04-01"},
    {"id" : "111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
    {"id" : "1111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
    {"id" : "11111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
    {"id" : "111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"},
    {"id" : "1111111","imgSrc" : "../../../static/logo.png","title" : "123123123","createTime":"2019-04-01"}
  ];


  export default {
    name: "IndexAnimeContent",
    data() {
      return {
        "animeContentSpan" : 6,
        "animeCarouselHeight" : "33.75rem",
        "testAnimeContent": '',
        "currentDate": new Date()
      }
    },
    mounted() {
      this.SYS_CONST.addSystemResourcePrefix(testContent, "imgSrc")

      for( let testAnimeObj of testAnimeContent ) {
        if( testAnimeObj.key === "sun" ) {
          testAnimeObj.contentArr = testContent
        }
      }
      this.testAnimeContent = testAnimeContent
    },
    methods: {
      setActiveItem: function (index) {
        this.$refs.animeCarousel.setActiveItem(index);
      },
      initAnimeContent: function (day) {

      }
    }
  }
</script>

<style scoped>

  .el-col {
    width: 15.6875rem;
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
    width: 10rem;
    height: 10rem;
    cursor: pointer;
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
