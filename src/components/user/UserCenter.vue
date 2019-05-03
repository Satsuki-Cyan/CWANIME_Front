<template>
  <div id="userCenter">

    <el-form label-position="right" :model="userInfoForm" label-width="140px">
      <el-form-item class="user-img-item" label="UserImg：">
        <img :src="userInfoForm.userImg" class="user-img"/>
        <div class="user-img-text">Upload !</div>
      </el-form-item>
      <el-form-item label="NickName：">
        <el-input v-model="userInfoForm.nickName"></el-input>
      </el-form-item>

      <el-form-item label="Sex：">
        <el-radio-group v-model="userInfoForm.sex">
          <el-radio label="1">Male</el-radio>
          <el-radio label="2">Female</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Birthday：">
        <el-date-picker type="date" placeholder="选择日期" v-model="userInfoForm.birthday"></el-date-picker>
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

      <el-form-item label="Address：">
        <el-input type="textarea" v-model="userInfoForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">Save !</el-button>
        <!--<el-button>取消</el-button>-->
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: "UserCenter",
    data() {
      return {
        userInfoForm: {
          nickName: '',
          userImg: '../../../static/default_user_img.jpg',
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
    }
  }
</script>

<style scoped>

  #userCenter {

  }

  .el-form {
    width: 500px;
    padding: 50px 0;
  }

  .el-form-item {

  }

  .user-img-item > .el-form-item__label {
    display: none;
  }

  .user-img {
    width: 120px;
    height: 120px;
    border: 1px solid #E8E8E8;
    border-radius: 50%;
  }

  .user-img-text {
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    color: #FFF;
    width: 120px;
    height: 120px;
    border: 1px solid #E8E8E8;
    border-radius: 50%;
    text-align: center;
    line-height: 125px;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    top: 0;
    transition: opacity 300ms;
  }

  .user-img-text:hover {
    opacity: 1;
  }

  .user-info-title {
    padding-top: 10px;
    text-align: right;
  }

  .el-input {
    width: 300px;

  }

</style>
