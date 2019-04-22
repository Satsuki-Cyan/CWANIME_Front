<template>
  <div id="anime">
    <el-container class="main-content">
      <!-- Anime Title -->
      <el-header class="area-title">
        <img src="../../../static/index_bangumi.png"/>
      </el-header>

      <el-main class="">
        <transition name="componentChangeSlide">
          <router-view></router-view>
        </transition>
      </el-main>

      <el-main class="main-footer" v-if="viewType==='1'">
        <el-pagination background layout="prev, pager, next" :pager-count="pagerCount" :total="1000">
        </el-pagination>
      </el-main>
      <el-main class="total-count" v-if="viewType==='2'">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="1 - 12" name="first">1</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-main>

    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Anime",
    data() {
      return {
        pagerCount: 11,
        viewType: '2',
        activeName: 'second'
      }
    },
    mounted() {


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

  .main-footer {
    height: 75px;
    padding: 20px 0 0 0 ;
  }

  .total-count {
    padding: 20px;
    background: rgba(255,255,255, 1);
  }

  .componentChangeSlide-enter, .componentChangeSlide-leave, .componentChangeSlide-enter-to, .componentChangeSlide-leave-to {
    opacity: 0;
  }

  .componentChangeSlide-enter-active, .componentChangeSlide-leave-active {
    transition: opacity 500ms;
  }
</style>
