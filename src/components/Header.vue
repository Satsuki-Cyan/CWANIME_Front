<template>
  <div id="component-header">
    <el-menu :default-active="defaultActive" active-text-color="#F60" class="el-menu-demo" mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">Main</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Anime</template>
        <el-menu-item index="2-1">Apr. 2019</el-menu-item>
        <el-menu-item index="2-2">Jan. 2019</el-menu-item>
        <el-menu-item index="2-3">Oct. 2018</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">More</template>
          <el-menu-item index="2-4-1">111</el-menu-item>
          <el-menu-item index="2-4-2">222</el-menu-item>
          <el-menu-item index="2-4-3">333</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3"><i class="el-icon-picture-outline"></i>Image</el-menu-item>
      <el-menu-item index="4">Game</el-menu-item>

      <!-- 全局的搜索框 -->
      <el-menu-item class="header-nav-search">
        <el-input placeholder="请输入内容" v-model="searchContent" class="input-with-select" size="small">
          <el-select v-model="searchPrefix" slot="prepend" placeholder="请选择">
            <el-option label="Anime" value="1"></el-option>
            <el-option label="Image" value="2"></el-option>
            <el-option label="Game" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>

      <!-- 这里考虑再给一个登录按钮之类的，成功后要渲染出头像及消息一类的按钮 -->
      <el-button class="header-nav-sign-in" size="medium " round>Sign In</el-button>

    </el-menu>

  </div>
</template>

<script>
  export default {
    el: "component-header",
    name: "Header",
    data() {
      return {
        defaultActive: '1',
        searchPrefix: '',
        searchContent: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

  #component-header {

  }

  .el-menu {
    padding: 0 20px;
    background: rgba(255, 255, 255, 1);
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


</style>
