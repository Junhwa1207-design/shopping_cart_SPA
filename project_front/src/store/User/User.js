import Cookie from 'js-cookie';
import store from '@/store/index';
const state = {
  USER_ID:
    Cookie.get('user') != null ? JSON.parse(Cookie.get('user')).USER_ID : '',
  USER_NAME:
    Cookie.get('user') != null ? JSON.parse(Cookie.get('user')).USER_NAME : '',
  USER_VERIFY:
    Cookie.get('user') != null
      ? JSON.parse(Cookie.get('user')).USER_VERIFY
      : '',
  USER_ADDR1:
    Cookie.get('user') != null ? JSON.parse(Cookie.get('user')).USER_ADDR1 : '',
  USER_TOKEN: Cookie.get('user') != null ? Cookie.get('token') : '',
  USER_ADDR2:
    Cookie.get('user') != null ? JSON.parse(Cookie.get('user')).USER_ADDR2 : '',
  USER_PHONE:
    Cookie.get('user') != null ? JSON.parse(Cookie.get('user')).USER_PHONE : '',
  ISSNS: Cookie.get('user') != null ? JSON.parse(Cookie.get('user')).ISSNS : '',
  USER_THUMBNAIL:
    Cookie.get('user') != null
      ? JSON.parse(Cookie.get('user')).USER_THUMBNAIL
      : '',
};

const mutations = {
  logout(state) {
    state.USER_ID = '';
    state.USER_NAME = '';
    state.USER_VERIFY = '';
    state.USER_ADDR1 = '';
    state.USER_ADDR2 = '';
    state.USER_PHONE = '';
    state.ISSNS = '';
    state.USER_THUMBNAIL = '';
    state.USER_TOKEN = '';
    Cookie.remove('token');
    Cookie.remove('user');
    Cookie.remove('verify');
    Cookie.remove('_karmtea');
    Cookie.remove('_karmt');
    Cookie.remove('_kawlt');
    Cookie.remove('webid');
    Cookie.remove('webid_ts');
    Cookie.remove('_TI_NID');
    Cookie.remove('_kadu');
    Cookie.remove('TIARA');

    store.state.cart.cart = null;
    store.state.order.order = null;
    alert('Log out!');
  },
  login(state, data) {
    state.USER_ID = data.results[0].USER_ID;
    state.USER_NAME = data.results[0].USER_NAME;
    state.USER_VERIFY = data.results[0].USER_VERIFY;
    state.USER_PHONE = data.results[0].USER_PHONE;
    state.USER_ADDR1 = data.results[0].USER_ADDR1;
    state.USER_ADDR2 = data.results[0].USER_ADDR2;
    state.ISSNS = data.results[0].ISSNS;
    state.USER_THUMBNAIL = data.results[0].USER_THUMBNAIL;
    Cookie.set('token', data.token);
    Cookie.set('verify', data.results[0].USER_VERIFY);
    Cookie.set('user', data.results[0]);
    state.USER_TOKEN = Cookie.get('token');
    return data.token;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
};
