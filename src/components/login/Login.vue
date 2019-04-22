<!-- Sign In / Up -->
<template>
  <div id="login">

    <!-- Login/Register Content -->
    <el-container class="main-content">
      <el-carousel arrow="never" height="800px" indicator-position="none" :autoplay="false" ref="signCarousel">
        <el-carousel-item key="signIn">
          <!-- Login Title -->
          <el-header class="area-title">
            <img src="../../../static/signIn.png" class="image" />
            <el-button type="warning" class="btn-sign-up" @click="modelSwitch(1)" round>
              Sign Up
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-header>
          <!-- Login Content -->
          <el-main>
            <sign-in></sign-in>
          </el-main>
        </el-carousel-item>
        <el-carousel-item key="signUp">
          <!-- Register Title -->
          <el-header class="area-title">
            <img src="../../../static/signUp.png" class="image sign-up-img" />
            <el-button type="warning" class="btn-sign-in" @click="modelSwitch(0)" round>
              <i class="el-icon-arrow-left"></i>
              Sign In
            </el-button>
          </el-header>
          <!-- Register Content -->
          <el-main>
            <sign-up></sign-up>
          </el-main>
        </el-carousel-item>
      </el-carousel>
    </el-container>

  </div>
</template>

<script>

  import ComponentHeader from '../Header'
  import SignIn from './SignIn'
  import SignUp from './SignUp'


  export default {
    name: 'Login',
    data() {
      return {
        footer: 'ただ、一人のテストだ。。'
      }
    },
    components: {
      ComponentHeader,
      SignIn,
      SignUp
    },
    methods: {
      modelSwitch: function (model) {
        // 1. 走馬燈スイッチ
        this.$refs.signCarousel.setActiveItem(model);
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
    border-radius: 20px 20px 0 0;
  }

  .el-aside {
    background-color: rgba(255, 255, 255, 0);
    color: #333;
    text-align: center;
    line-height: 12.5rem;
  }

  .el-main {
    background: rgba(255, 255, 255, 0.9);
    text-align: center;
    line-height: 10rem;
    padding: 0 0 20px;
  }

  .area-title {
    background: rgba(255, 255, 255, 1);
    height: auto !important;
    padding-top: 20px;
    /*border-bottom: 2px dashed #E9EAEB;*/
  }

  .main-content {
    margin-top: 50px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    overflow: hidden;
  }

  .el-carousel {
    width: 100%;
  }

  .image {
    margin: 20px 0 0 20px;
  }

  .sign-up-img {
    margin-left: 780px;
  }

  .btn-sign-up {
    border: 0;
    float: right;
    margin: 20px 20px 0 0;
  }

  .btn-sign-in {
    border: 0;
    float: left;
    margin: 20px 0 0 20px;
  }

  .el-icon-arrow-right {
    margin-left: 8px;
  }

  .el-icon-arrow-left {
    margin-right: 8px;
  }


</style>
