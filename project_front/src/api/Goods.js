import { goods } from './index.js';

function getCategory(reqData) {
  return goods.get(`/category/${reqData}`);
}

function getCategoryList() {
  return goods.post('/getCategoryList');
}

function getGoodsOne(reqData) {
  return goods.get(`/getGoodsOne/${reqData}`);
}

function getGoodsList(reqData) {
  return goods.post(`/getGoodsList`, reqData);
}

export {
  getCategory,
  getGoodsList,
  getGoodsOne,
  getCategoryList,
};
