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
 * 获取一个指定区间的随机数
 */
function randomNum(minNum, maxNum) {
  let resNum;
  switch (arguments.length) {
    case 1:
      resNum = parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      resNum =  parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      resNum = 0;
      break;
  }
  console.log(resNum)
}


export default {
  sortJSONArray,
  randomNum
}
