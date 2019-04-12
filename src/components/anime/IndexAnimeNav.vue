<template>
  <div id="indexAnimeNav">
    <el-row>
      <el-col :span="3">
        <div class="grid-content week-sun"><span class="week-english">Sun.</span> 日曜日</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content week-mon"><span class="week-english">Mon.</span> 月曜日</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content week-tues"><span class="week-english">Tues.</span> 火曜日</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content week-wed"><span class="week-english">Wed.</span> 水曜日</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content week-thur"><span class="week-english">Thur.</span> 木曜日</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content week-fri"><span class="week-english">Fri.</span> 金曜日</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content week-sat"><span class="week-english">Sat.</span> 土曜日</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content movieToOva"><span class="week-english">剧场版 & OVA</span></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "IndexAnimeNav"
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {

  }

  .grid-content {
    line-height: 36px;
    border-radius: 30px;
    margin: 10px;
  }

  .week-english {
    padding: 0px 5px;
    border-radius: 30px;
  }

  .week-sun {
    color: #000;
    background: #FFF;
  }

  .week-sun > .week-english {
    color: #FFF;
    background: #000;
  }

  .week-mon {
    color: #FFF;
    background: #000;
  }

  .week-mon > .week-english {
    color: #000;
    background: #FFF;
  }

  .week-tues {
    color: #FFF;
    background: #FE7B67;
  }

  .week-tues > .week-english {
    color: #FE7B67;
    background: #FFF;
  }

  .week-wed {
    color: #FFF;
    background: #6CF;
  }

  .week-wed > .week-english {
    color: #6CF;
    background: #FFF;
  }

  .week-thur {
    color: #FFF;
    background: #65E4BA;
  }

  .week-thur > .week-english {
    color: #65E4BA;
    background: #FFF;
  }

  .week-fri {
    color: #FFF;
    background: #E8E7A0;
  }

  .week-fri > .week-english {
    color: #E8E7A0;
    background: #FFF;
  }

  .week-sat {
    color: #FFF;
    background: #BA8BF8;
  }

  .week-sat > .week-english {
    color: #BA8BF8;
    background: #FFF;
  }

  .movieToOva {
    background: #DE74D6;
    color: #fff;
  }

  .movieToOva > .week-english {
    font-size: 14px;
    padding: 0px 5px;
  }

</style>
