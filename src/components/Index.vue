<template>
  <div id="index">
    <el-container>

      <!-- Left Nav -->
      <el-aside width="17rem">Aside</el-aside>

      <!-- Body -->
      <el-container>
        <!--　Header-Menu　-->
        <el-header>
          <component-header></component-header>
        </el-header>

        <!-- Anime Content -->
        <el-container class="main-content">
          <!-- Anime Title -->
          <el-header class="area-title">
            <img src="../assets/index_bangumi.png" />
          </el-header>

          <el-main>
            <index-anime-nav></index-anime-nav>
            <index-anime-content></index-anime-content>
          </el-main>

        </el-container>

        <!-- Picture Content -->
        <el-container class="main-content">
          <!-- Picture Title -->
          <el-header class="area-title">
            <img src="../assets/index_picture.png" />
          </el-header>

          <el-main>
            Content
          </el-main>

        </el-container>

        <!-- Footer -->
        <el-footer>{{footer}}</el-footer>
      </el-container>

      <!-- Right Nav -->
      <el-aside width="17rem">Aside</el-aside>
    </el-container>
  </div>
</template>

<script>

  import ComponentHeader from './Header'
  import IndexAnimeNav from './anime/IndexAnimeNav'
  import IndexAnimeContent from './anime/IndexAnimeContent'

  export default {
    name: "Index",
    data() {
      return {
        footer: 'ただ、一人のテストだ。。'
      }
    },
    components: {
      ComponentHeader,
      IndexAnimeNav,
      IndexAnimeContent
    }
  }
</script>

<style scoped>
  #index {
    margin-top: 0;
  }

  .el-header {
    padding: 0;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 3.75rem;
    opacity: 0.5;
    margin-top: 50px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 12.5rem;
    opacity: 0.5;
  }

  .el-main {
    background: rgba(255,255,255,0.9);
    text-align: center;
    line-height: 10rem;
  }

  .area-title {
    background: rgba(255,255,255,1);
    height: auto!important;
    /*border-bottom: 2px dashed #E9EAEB;*/
  }

  .main-content {
    margin-top: 50px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }




</style>
