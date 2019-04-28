<template>
  <div id="componentHeader">
    <el-menu :default-active="defaultActive" active-text-color="#F60" class="el-menu-demo" mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="login" style="display: none;"></el-menu-item>
      <el-menu-item index="index">Main</el-menu-item>
      <el-submenu index="bangumi">
        <template slot="title"><i class="el-icon-menu"></i>Bangumi</template>
        <el-menu-item index="bangumi-2019-April">Apr. 2019</el-menu-item>
        <el-menu-item index="2-2">Jan. 2019</el-menu-item>
        <el-menu-item index="2-3">Oct. 2018</el-menu-item>
        <el-menu-item index="2-4">Jul. 2018</el-menu-item>
        <el-menu-item index="2-5">Apr. 2018</el-menu-item>
        <el-menu-item index="2-6">Jan. 2018</el-menu-item>
        <!--<el-submenu index="2-4">-->
          <!--<template slot="title">More</template>-->
          <!--<el-menu-item index="2-4-1">111</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">222</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">333</el-menu-item>-->
        <!--</el-submenu>-->
      </el-submenu>
      <el-menu-item index="image"><i class="el-icon-picture-outline"></i>Image</el-menu-item>
      <el-menu-item index="game">Game</el-menu-item>

      <!-- 全局的搜索框 -->
      <el-menu-item class="header-nav-search">
        <el-input placeholder="请输入内容" v-model="searchContent" class="input-with-select" size="small">
          <el-select v-model="searchPrefix" slot="prepend" placeholder="请选择">
            <el-option label="Bangumi" value="1"></el-option>
            <el-option label="Image" value="2"></el-option>
            <el-option label="Game" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>

      <!-- 成功后要渲染出头像及消息一类的选项 -->
      <el-button v-if="isSign==='2'" class="header-nav-sign-in" size="medium" @click="signInOrUp" round>Sign In / Up</el-button>
      <!-- 登录成功后的样子 -->
      <el-menu-item v-if="isSign==='1'">
        <div class="user-info">
          <img :src="testUserImg" class="user-img" />
          <span class="user-name">Satsuki.Cyan</span>
        </div>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        // header-nav高亮项
        defaultActive: this.processRoute(this.$route.path),
        // 用户是否已经登录（1.是；2.否）
        isSign: '1',
        searchPrefix: '',
        searchContent: '',
        testUserImg: '../../static/test_user_img.jpg'
      }
    },
    watch: {
      $route(to, from) {
        this.defaultActive = this.processRoute(to.path);
      }
    },
    mounted() {

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
      signInOrUp: function () {
        this.pageGoTo('login');
      },
      pageGoTo: function (address) {
        this.$router.push({
          path: address
        });
      },
      processRoute(routePath) {
        let key = this.COMMON_UTIL.routePath2Key(routePath);
        // 分割key并判断最后的元素是否为数字，是则进行截取
        let keySplit = key.split("-");
        if(!isNaN(keySplit[keySplit.length-1])) {
          key = key.substring(0, key.lastIndexOf("-detail"));
        }
        return key;
      }
    }
  }
</script>

<style scoped>

  .el-menu {
    padding: 0 20px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0 0 20px 20px;
    border: 0;
  }

  .header-nav-first {
    float: right;
  }

  .header-nav-sign-in {
    float: right;
    margin-top: 0.875rem;
  }

  .header-nav-sign-in :hover {

  }

  .el-menu-item:hover {
    background: #FFD48F;
  }

  .header-nav-search {
    margin-left: 2.5rem;
  }

  .el-select {
    width: 100px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .user-img {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background: #CCC;
    border: 0;
    margin-left: 20px;
  }

  .user-name {
    margin-left: 20px;
  }


</style>
