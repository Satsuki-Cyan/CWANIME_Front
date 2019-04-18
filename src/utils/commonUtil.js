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


export default {
  sortJSONArray,
  randomNum
}
