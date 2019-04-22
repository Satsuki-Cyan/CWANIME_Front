<template>
  <div id="signUp">

    <!-- Login Image -->
    <div class="register-img">


    </div>

    <!-- Register Form -->
    <div class="register-form">
      <el-form ref="registerRef" label-position="right" :model="registerForm" label-width="160px">
        <el-form-item label="AccountNo">
          <el-input v-model="registerForm.accountNo"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="registerForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Password Confirm">
          <el-input v-model="registerForm.passwordConfirm" show-password></el-input>
        </el-form-item>
        <el-form-item label="Tel.">
          <el-input v-model="registerForm.telephone"></el-input>
        </el-form-item>
        <el-form-item label="Sex">
          <el-radio-group v-model="registerForm.sex">
            <el-radio label="1">Male</el-radio>
            <el-radio label="2">Female</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Birthday">
          <el-col :span="14">
            <el-date-picker type="date" placeholder="选择日期" v-model="registerForm.birthday"
                            style="width: 100%;"></el-date-picker>
          </el-col>
          <!--<el-col class="line" :span="2">-</el-col>-->
          <!--<el-col :span="11">-->
            <!--<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>-->
          <!--</el-col>-->
        </el-form-item>
        <!--<el-form-item label="即时配送">-->
          <!--<el-switch v-model="form.delivery"></el-switch>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="活动性质">-->
          <!--<el-checkbox-group v-model="form.type">-->
            <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
            <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
            <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
            <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
          <!--</el-checkbox-group>-->
        <!--</el-form-item>-->

        <el-form-item label="Address">
          <el-input type="textarea" v-model="registerForm.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">Sign Up Now !</el-button>
          <!--<el-button>取消</el-button>-->
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SignUp",
    data() {
      return {
        registerForm: {
          accountNo: '',
          password: '',
          passwordConfirm: '',
          telephone: '',
          sex: '1',
          birthday: '',
          address: ''
        }
      }
    },
    mounted() {
      // 禁止Register页面的textarea可调整大小
      document.getElementsByClassName("el-textarea")[0].childNodes[0].style.resize = 'none';
    },
    methods: {
      register() {
        console.log('register!');
      }
    }
  }
</script>

<style scoped>
  .register-img {
    width: 500px;
    height: 800px;
    float: left;
  }

  .register-form {
    width: auto;
    padding: 80px 10px;
    float: left;

  }

  .el-form {
    border-left: 2px dashed rgba(0,0,0,0.3);
    margin: 0 20px;
    padding: 30px 0 20px 30px;
  }

  .el-form-item {

  }

  .el-input {

  }

  .el-textarea > textarea {

  }

</style>
