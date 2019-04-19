/**
 * 根据index来重新排序
 * for example :
 * param: index = 2
 * from [{"a":"a"},{"b":"b"},{"c":"c"}] to [{"c":"c"},{"b":"b"},{"a":"a"}]
 */
let sortJSONArray = (jsonArray, index) => {
  return jsonArray.slice(index).concat(jsonArray.slice(0, index));
}

/**
 * 获取一个指定区间的随机数（如果与ignore一致则继续random　）
 */
let randomNum = (minNum, maxNum, ignoreNum) => {
  let resNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  while (true) {
    if (resNum === ignoreNum) {
      resNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    } else {
      break;
    }
  }
  return resNum;
}

/**
 * 生成指定长度、区间的随机数字字符串
 */
let randomNumStr = (minNum, maxNum, ignoreNum, length) => {
  let resNum = randomNum(minNum, maxNum, ignoreNum) + "";
  let dealNum = length - resNum.length
  for (let i = 0; i < dealNum; i++) {
    resNum = "0" + resNum;
  }
  return resNum;
}


export default {
  sortJSONArray,
  randomNum,
  randomNumStr
}
