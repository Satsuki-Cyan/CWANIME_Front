<template>
  <div id="animeDetail">
      <el-container>

        <!-- Left Nav -->
        <el-aside width="17rem">
          <!--<left-aside></left-aside>-->
        </el-aside>

        <!-- Body -->
        <el-container>
          <!--　Header-Menu　-->
          <el-header>
            <component-header ref="componentHeader"></component-header>
          </el-header>

          <!-- Login/Register Content -->
          <el-container class="main-content">

          </el-container>

          <!-- Footer -->
          <el-footer>{{footer}}</el-footer>
        </el-container>

        <!-- Right Nav -->
        <el-aside width="17rem">
          <!--<right-aside></right-aside>-->
        </el-aside>
      </el-container>
  </div>
</template>

<script>

  import ComponentHeader from '../../Header'
  import RightAside from '../../RightAside'
  import LeftAside from '../../LeftAside'

  export default {
    name: "animeDetail",
    data() {
      return {
        footer: 'ただ、一人のテストだ。。'
      }
    },
    components: {
      ComponentHeader,
      RightAside,
      LeftAside
    },
    mounted() {
      // 切换Header的active为Anime
      //TODO 应该根据bangumi所属的"季"来决定defaultActive
      this.$refs.componentHeader.defaultActive = '2-1';
    },
    methods: {
      asd: function() {

      }
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
    border-radius:  20px 20px 0 0;
  }

  .el-aside {
    background-color: rgba(255,255,255,0);
    color: #333;
    text-align: center;
    line-height: 12.5rem;
  }

  .el-main {
    background: rgba(255,255,255,0.6);
    text-align: center;
    line-height: 10rem;
    padding: 0 0 20px;
  }

  .area-title {
    background: rgba(255,255,255,1);
    height: auto!important;
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
