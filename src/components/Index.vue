<template>
  <div id="index">
    <el-container>

      <!-- Left Nav -->
      <el-aside width="20rem">Aside</el-aside>
      <!-- Body -->
      <el-container>
        <!--　Header　-->
        <el-header>
          <component-header></component-header>
        </el-header>

        <!-- Main Content -->
        <el-container>
          <el-main>
            Content
          </el-main>
        </el-container>

        <!-- Footer -->
        <el-footer>{{footer}}</el-footer>
      </el-container>

      <!-- Right Nav -->
      <el-aside width="20rem">Aside</el-aside>
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
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 10rem;
  }


</style>
