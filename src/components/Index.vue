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

        <!-- Main Content -->
        <el-container class="main-content">
          <!-- Anime Title -->
          <el-header class="area-title">
asd
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

  export default {
    name: "Index",
    data() {
      return {
        footer: 'ただ、一人のテストだ。。'
      }
    },
    components: {
      ComponentHeader
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
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 12.5rem;
  }

  .el-main {
    background: rgba(255,255,255,0.9);
    text-align: center;
    line-height: 10rem;
  }

  .area-title {
    background: rgba(255,255,255,0.9);
    border-bottom: 1px solid #000;
  }


  .main-content {
    margin-top: 50px;
  }


</style>
