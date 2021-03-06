import Vue from 'vue';
import Vuex from 'vuex';
import user from './User/User.js';
import goods from './Goods/Goods.js';
import cart from './Cart/Cart.js';
import category from './Category/Category.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isView: false,
    loading: true,
    url: process.env.VUE_APP_API_URL,
  },
  mutations: {},
  actions: {},
  modules: { user, goods, cart, category },
});
