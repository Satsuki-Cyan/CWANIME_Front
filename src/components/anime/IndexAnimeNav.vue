<template>
  <div id="indexAnimeNav">
    <el-row>
      <el-col :span="weekColSpan" v-for="(val, index) in weekArr" :key="val.dayUS">
        <div :class="[val.dayClass, {selected : navSelected==index}]" @click="changeDay(index)"><span class="week-english">{{val.dayUS}}</span>{{val.dayCN}}</div>
      </el-col>
      <!--<el-col :span="3">-->
        <!--<div class="grid-content week-mon"><span class="week-english">Mon.</span> 月曜日</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3">-->
        <!--<div class="grid-content week-tues"><span class="week-english">Tues.</span> 火曜日</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3">-->
        <!--<div class="grid-content week-wed"><span class="week-english">Wed.</span> 水曜日</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3">-->
        <!--<div class="grid-content week-thur"><span class="week-english">Thur.</span> 木曜日</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3">-->
        <!--<div class="grid-content week-fri"><span class="week-english">Fri.</span> 金曜日</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3">-->
        <!--<div class="grid-content week-sat"><span class="week-english">Sat.</span> 土曜日</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3">-->
        <!--<div class="grid-content movieToOva"><span class="week-english">剧场版 & OVA</span></div>-->
      <!--</el-col>-->
    </el-row>
    <index-anime-content ref="animeContent"></index-anime-content>
  </div>
</template>

<script>
  import IndexAnimeContent from './IndexAnimeContent'

  const weekArr = [
    {"dayUS" : "Sun.", "dayCN" : " 日曜日", "dayClass" : "grid-content week-sun"},
    {"dayUS" : "Mon.", "dayCN" : " 月曜日", "dayClass" : "grid-content week-mon"},
    {"dayUS" : "Tues.", "dayCN" : " 火曜日", "dayClass" : "grid-content week-tues"},
    {"dayUS" : "Wed.", "dayCN" : " 水曜日", "dayClass" : "grid-content week-wed"},
    {"dayUS" : "Thur.", "dayCN" : " 木曜日", "dayClass" : "grid-content week-thur"},
    {"dayUS" : "Fri.", "dayCN" : " 金曜日", "dayClass" : "grid-content week-fri"},
    {"dayUS" : "Sat.", "dayCN" : " 土曜日", "dayClass" : "grid-content week-sat"},
    {"dayUS" : "剧场版 & OVA", "dayCN" : "", "dayClass" : "grid-content movieToOva"}
  ];

  export default {
    name: "IndexAnimeNav",
    data() {
      return {
        "weekColSpan": 3,
        "weekArr": weekArr,
        navSelected : 0
      }
    },
    mounted() {
      // 2019.04.16 请求是分多段的，进主页默认加载当天的数据，第一次点击其他day才会去请求加载对应的数据（不要一开始全加载。。）
      // ———— 请求完再组装上面的testContent，并调用addSystemResourcePrefix进行src处理，加上key，再push进testAnimeContent

    },
    methods: {
      changeDay: function (day) {
        // 1. 走馬燈スイッチ
        this.$refs.animeContent.setActiveItem(day);
        // 2. change nav-backgroundColor
        this.navSelected = day;
      }
    },
    components: {
      IndexAnimeContent
    }
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
    cursor: pointer;
  }

  .week-english {
    padding: 0px 5px;
    border-radius: 30px;
  }

  .week-sun {
    color: #000;
    background: #FFF;
    border: 1px solid;
  }

  .week-sun.selected {
    color: #FFF;
    background: #000;
  }

  .week-sun > .week-english {
    color: #FFF;
    background: #000;
  }

  .week-sun.selected > .week-english {
    color: #000;
    background: #FFF;
  }

  .week-mon {
    color: #CCC;
    background: #FFF;
    border: 1px solid;
  }

  .week-mon.selected {
    color: #FFF;
    background: #CCC;
  }

  .week-mon > .week-english {
    color: #FFF;
    background: #CCC;
  }

  .week-mon.selected > .week-english {
    color: #CCC;
    background: #FFF;
  }

  .week-tues {
    color: #FE7B67;
    background: #FFF;
    border: 1px solid;
  }

  .week-tues.selected {
    color: #FFF;
    background: #FE7B67;
  }

  .week-tues > .week-english {
    color: #FFF;
    background: #FE7B67;
  }

  .week-tues.selected > .week-english {
    color: #FE7B67;
    background: #FFF;
  }

  .week-wed {
    color: #6CF;
    background: #FFF;
    border: 1px solid;
  }

  .week-wed.selected {
    color: #FFF;
    background: #6CF;
  }

  .week-wed > .week-english {
    color: #FFF;
    background: #6CF;
  }

  .week-wed.selected > .week-english {
    color: #6CF;
    background: #FFF;
  }

  .week-thur {
    color: #65E4BA;
    background: #FFF;
    border: 1px solid;
  }

  .week-thur.selected {
    color: #FFF;
    background: #65E4BA;
  }

  .week-thur > .week-english {
    color: #FFF;
    background: #65E4BA;
  }

  .week-thur.selected > .week-english {
    color: #65E4BA;
    background: #FFF;
  }

  .week-fri {
    color: #E8E7A0;
    background: #FFF;
    border: 1px solid;
  }

  .week-fri.selected {
    color: #FFF;
    background: #E8E7A0;
  }

  .week-fri > .week-english {
    color: #FFF;
    background: #E8E7A0;
  }

  .week-fri.selected > .week-english {
    color: #E8E7A0;
    background: #FFF;
  }

  .week-sat {
    color: #BA8BF8;
    background: #FFF;
    border: 1px solid;
  }

  .week-sat.selected {
    color: #FFF;
    background: #BA8BF8;
  }

  .week-sat > .week-english {
    color: #FFF;
    background: #BA8BF8;
  }

  .week-sat.selected > .week-english {
    color: #BA8BF8;
    background: #FFF;
  }

  .movieToOva {
    background: #FFF;
    color: #DE74D6;
    border: 1px solid;
  }

  .movieToOva.selected {
    background: #DE74D6;
    color: #FFF;
  }

  .movieToOva > .week-english {
    font-size: 14px;
    padding: 0px 5px;
  }

  .movieToOva > .week-english {
    font-size: 14px;
    padding: 0px 5px;
  }

</style>
