<template>
  <div id="componentBody">
    <el-container class="main-content">
      <!-- Anime Title -->
      <el-header class="area-title">
        <img src="../../static/index_bangumi.png"/>
      </el-header>

      <el-main>
        <index-anime-nav></index-anime-nav>
      </el-main>

    </el-container>

    <!-- Picture Content -->
    <el-container class="main-content">
      <!-- Picture Title -->
      <el-header class="area-title">
        <img src="../../static/index_picture.png"/>
      </el-header>

      <el-main>
        Content
      </el-main>

    </el-container>
  </div>
</template>

<script>
  import IndexAnimeNav from './anime/IndexAnimeNav'
  import IndexAnimeContent from './anime/IndexAnimeContent'

  export default {
    name: "Body",
    components: {
      IndexAnimeNav,
      IndexAnimeContent,
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }

  .el-footer {
    background-color: #FFF;
    color: #333;
    text-align: center;
    line-height: 3.75rem;
    opacity: 0.8;
    margin-top: 50px;
    border-radius: 20px 20px 0 0;
  }

  .el-aside {
    background-color: rgba(255, 255, 255, 0);
    color: #333;
    text-align: center;
    line-height: 12.5rem;
  }

  .el-main {
    background: rgba(255, 255, 255, 0.6);
    text-align: center;
    line-height: 10rem;
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

</style>
