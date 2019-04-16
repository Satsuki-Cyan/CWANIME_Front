const systemPath = 'http://img5.imgtn.bdimg.com';
const resourcePath = '/it/';

/**
 * 为数据集中的指定字段添加资源定位前缀
 */
let addSystemResourcePrefix = (dataList, ...keys) => {
  for( let data of dataList ) {
    for( let key of keys ) {
      data[key] = systemPath + resourcePath + data[key];
    }
  }
  return dataList;
}

export default {
  systemPath,
  resourcePath,
  addSystemResourcePrefix
}
