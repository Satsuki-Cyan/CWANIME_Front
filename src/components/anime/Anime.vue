<template>
  <div id="anime">
    <el-container class="main-content">
      <!-- Anime Title -->
      <el-header class="area-title">
        <img src="../../../static/index_bangumi.png"/>
      </el-header>

      <!-- Anime By Page / Anime Detail And Player -->
      <transition name="componentChangeSlide">
        <router-view></router-view>
      </transition>

    </el-container>
  </div>
</template>

<script>

  export default {
    name: "Anime",
    data() {
      return {

      }
    },
    created() {

    },
    mounted() {

    },
    watch: {
      $route(to, from) {

      }
    },
    beforeRouterUpdate(to, from, next) {
      // 离开该组件的对应路由时调用

    },
    methods: {

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
