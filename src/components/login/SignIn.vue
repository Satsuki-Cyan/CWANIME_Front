<template>
  <div id="signIn">

    <!-- Login Image -->
    <div class="login-img">
      <!--<img />-->
    </div>

    <!-- Login Form -->
    <div class="login-form">
      <el-form ref="loginRef" label-position="right" :model="loginForm" label-width="160px">
        <el-form-item label="AccountNo">
          <el-input v-model="loginForm.accountNo"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Sign In !</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SignIn",
    data() {
      return {
        loginForm: {
          accountNo: '',
          password: ''
        }
      }
    },
    mounted: function() {

    },
    methods: {
      login() {
        // 1. 拿着AccNo和PWD请求后台
        console.log(this.loginForm);
        // testData
        let userInfo = {"accountNo":"zhangfd", "userImg":"../../static/default_user_img.jpg", "nickname":"Satsuki.Cyan", "token":"123qweasdzxc"};
        // 2. 验证成功后将属性存入localStorage
        let storage = window.localStorage;
        storage.userInfo = JSON.stringify(userInfo);
        // 3. 转入登录前的页面
        this.$emit('goBackRoute');
      }
    }
  }
</script>

<style scoped>

  .login-img {
    width: 500px;
    height: 800px;
    float: left;
  }

  .login-form {
    width: auto;
    padding: 120px 10px;
    float: left;

  }

  .el-form {
    padding: 100px 0;
    border-left: 2px dashed rgba(0,0,0,0.3);
    margin: 0 20px;
  }

  .el-form-item {
    padding: 20px 0;

  }

  .el-input {
    width: 300px;
  }

</style>
