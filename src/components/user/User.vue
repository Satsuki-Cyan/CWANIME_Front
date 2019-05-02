<template>
  <div id="user">
    <el-container class="main-content">
      <!-- User Title -->
      <el-header class="area-title">
        <img src="../../../static/user_center.png"/>
      </el-header>


      <el-row :gutter="20">
        <el-col :span="6" class="user-menu">

          <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @select="handleSelect">
            <!-- User Home -->
            <el-menu-item index="user-center">
              <i class="el-icon-menu"></i>
              <span slot="title">User Center</span>
            </el-menu-item>

            <!-- User Settings -->
            <el-submenu index="user-settings">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>Settings</span>
              </template>
              <el-menu-item-group>
                <template slot="title">Base</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Safe">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--</el-submenu>-->
            </el-submenu>

            <!-- Personal Wallet -->
            <el-menu-item index="user-wallet">
              <i class="el-icon-menu"></i>
              <span slot="title">Personal Wallet</span>
            </el-menu-item>

            <el-menu-item index="user-news">
              <i class="el-icon-document"></i>
              <span slot="title">News</span>
            </el-menu-item>

            <el-menu-item index="user-4">
              <i class="el-icon-setting"></i>
              <span slot="title">Waiting...</span>
            </el-menu-item>
          </el-menu>
        </el-col>


        <el-col :span="17">
          <div class="user-content">
            <transition name="componentChangeSlide">
              <router-view></router-view>
            </transition>
          </div>
        </el-col>

      </el-row>

    </el-container>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        defaultActive: 'user-center'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if (key) {
          // 先对key进行处理再进行路由
          key = this.COMMON_UTIL.key2RoutePath(key);
          this.pageGoTo(key);
        }
      },
      pageGoTo: function (address) {
        this.$router.push({
          path: address
        });
      }
    }
  }
</script>

<style scoped>
  .area-title {
    background: rgba(255, 255, 255, 1);
    height: auto !important;
    padding-top: 20px;
  }

  .main-content {
    margin-top: 50px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
  }

  .el-row {
    margin: 30px 0;
  }

  .el-menu {
    width: 220px;
    border: 1px solid #E8E8E8;
    margin-left: 40px;
    border-radius: 10px;
    overflow: hidden;
  }

  .user-menu {
    /*border-right: 1px solid #E8E8E8;*/
  }

  .user-content {
    border: 1px dashed #E8E8E8;
    border-radius: 10px;
    margin-left: 15px;
  }
</style>
