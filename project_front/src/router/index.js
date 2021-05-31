import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookie from 'js-cookie';
import store from '@/store/index.js';
import Validation from '@/util/data/Validation.js';
Vue.use(VueRouter);
const routes = [

  {
    path: '/',
    name: 'main',
    beforeEnter: (to, from, next) => {
      next({
        path: '/shop/list/:category',
        query: {
          scode: '',
          page: 1,
          pageStart: 0,
          perPageNum: 9,
          t: new Date().getTime(),
        },
      });
    },
  },
  {
    path: '/shop/list/:category',
    name: 'shopList',
    component: () => import('@/components/main/FeaturedItem.vue'),
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    path: '/cart/list',
    name: 'cart',
    component: () => import('@/views/shop/Cart.vue'),
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    path: '/shop/view/:gds_num',
    name: 'ShowDetailView',
    component: () => import('@/views/shop/GoodsView'),
  },

  
  
];

const router = new VueRouter({
  mode: 'history',
  routes,
});


router.beforeEach(async function(to, from, next) {
  if (to.name == 'login' || to.name == 'admin' || to.name == 'signup') {
    store.state.isView = false;
  } else {
    store.state.isView = true;
  }
  if (
    !Validation.isNull(store.state.category.category) ||
    Validation.isLength(store.state.category.category, 1)
  )
    await store.dispatch('getCategoryList');
  if (store.state.user.USER_ID != '') {
    await store.dispatch('getCartList', store.state.user.USER_ID);
  }
  next();
});

export default router;
