<template>
  <div id="signIn">

    <!-- Login Image -->
    <div>

    </div>

    <!-- Login Form -->
    <div class="login-form">
      <el-form ref="loginRef" label-position="right" :model="loginForm" label-width="80px">
        <el-form-item label="AccountNo">
          <el-input v-model="loginForm.accountNo"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="loginForm.password"></el-input>
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
    methods: {
      login() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

  .login-form {
    width: 300px;
    padding: 50px 0 0 50px;
  }

</style>
