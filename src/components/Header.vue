<template>
  <div id="component-header">
    <el-menu :default-active="1" active-text-color="#F60" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Main</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>

      <!-- 这里考虑再给一个登录按钮之类的，成功后要渲染出头像及消息一类的按钮 -->
      <!-- 改按钮 -->
      <el-button icon="el-icon-search" class="header-nav-sign-in" circle></el-button>
      <!--<el-menu-item index="5" class="header-nav-first">Sign In</el-menu-item>-->
    </el-menu>


  </div>
</template>

<script>
  export default {
    el: "component-header",
    name: "Header",
    data() {
      return {}
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .header-nav-first {
    float: right;
  }

  .header-nav-sign-in{
    float: right;
    margin-top: 0.625rem;
  }

  .header-nav {
    border-radius: 1.25rem;
  }

  .el-menu-item :hover {
    color: #F60;
  }



</style>
