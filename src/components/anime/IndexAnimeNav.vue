<template>
  <div id="indexAnimeNav">
    <el-row>
      <el-col :span="weekColSpan" v-for="(val, index) in weekArr" :key="val.dayUS">
        <div :class="[val.dayClass, {selected : navSelected==index}]" @click="changeDay(index, val.day)"><span
          class="week-english">{{val.dayUS}}</span>{{val.dayCN}}
        </div>
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

  const today = new Date().getDay();

  const weekArr = [
    {"dayUS": "Sun.", "dayCN": " 日曜日", "day": 0, "dayClass": "grid-content week-sun"},
    {"dayUS": "Mon.", "dayCN": " 月曜日", "day": 1, "dayClass": "grid-content week-mon"},
    {"dayUS": "Tues.", "dayCN": " 火曜日", "day": 2, "dayClass": "grid-content week-tues"},
    {"dayUS": "Wed.", "dayCN": " 水曜日", "day": 3, "dayClass": "grid-content week-wed"},
    {"dayUS": "Thur.", "dayCN": " 木曜日", "day": 4, "dayClass": "grid-content week-thur"},
    {"dayUS": "Fri.", "dayCN": " 金曜日", "day": 5, "dayClass": "grid-content week-fri"},
    {"dayUS": "Sat.", "dayCN": " 土曜日", "day": 6, "dayClass": "grid-content week-sat"}
  ];

  const movieToOva = {"dayUS": "剧场版 & OVA", "dayCN": "", "day": "7", "dayClass": "grid-content movieToOva"};

  export default {
    name: "IndexAnimeNav",
    data() {
      return {
        "weekColSpan": 3,
        "weekArr": '',
        navSelected: 0
      }
    },
    mounted() {
      // 2019.04.16 请求是分多段的，进主页默认加载当天的数据，第一次点击其他day才会去请求加载对应的数据（不要一开始全加载。。）
      // ———— 请求完再组装上面的testContent，并调用addSystemResourcePrefix进行src处理，加上key，再push进testAnimeContent

      // 1. 根据当日决定曜日排序
      let weekArrSort = this.COMMON_UTIL.sortJSONArray(weekArr, today);
      weekArrSort.push(movieToOva);
      this.weekArr = weekArrSort;
      // 2. 默认加载当日应该渲染的content
      this.$refs.animeContent.initAnimeContent(0, today);
    },
    methods: {
      changeDay: function (index, day) {
        // 1. 走馬燈スイッチ
        this.$refs.animeContent.setActiveItem(index);
        // 2. change nav-backgroundColor
        this.navSelected = index;
        // 3. 渲染选中曜日的content
        this.$refs.animeContent.initAnimeContent(index, day);
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
    background: #FFF;
    opacity: 1;
    padding: 20px;
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
    padding: 0 5px;
    border-radius: 30px;
  }

  .week-sun {
    color: #000;
    background: #FFF;
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
    color: #F1C234;
    background: #FFF;
  }

  .week-fri.selected {
    color: #FFF;
    background: #F1C234;
  }

  .week-fri > .week-english {
    color: #FFF;
    background: #F1C234;
  }

  .week-fri.selected > .week-english {
    color: #F1C234;
    background: #FFF;
  }

  .week-sat {
    color: #BA8BF8;
    background: #FFF;
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
  }

  .movieToOva.selected {
    background: #DE74D6;
    color: #FFF;
  }

  .movieToOva > .week-english {
    font-size: 14px;
    padding: 0 5px;
  }

  .movieToOva > .week-english {
    font-size: 14px;
    padding: 0 5px;
  }

</style>
