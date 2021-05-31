<template>
  <div class="content">
    <div class="container">

      <div class="row">
        <div v-if="getGoods.length > 0">
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
            v-for="(goods, index) in getGoods"
            :key="index"
          >
         
            <div class="team-block">
              <div class="team-img">
                <router-link :to="`/shop/view/${goods.GDS_NUM}`">
                  <img
                    :src="`${getUrl}${goods.GDS_IMG}`"
                    alt=""
                    class="imgDiv"
                  />
                </router-link>

              </div>
              <p class="explain">
                <router-link :to="`/shop/view/${goods.GDS_NUM}`">
                  <span class="new-item" v-if="goods.IS_NEW < 3">new!</span>
                  {{ goods.GDS_NAME }}
                </router-link>
              </p>
              <span class="price">${{ goods.GDS_PRICE }}.00 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  } from '@/api/Cart.js';
export default {
  computed: {
    getGoods() {
      return this.$store.state.goods.goods;
    },
    getUrl() {
      return this.$store.state.url;
    },
  },
};
</script>

<style scoped>

body {
  letter-spacing: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  color: #11181f;
  margin: 0px 0px 15px 0px;
  font-family: 'Lato', sans-serif;
}
h1 {
  font-size: 44px;
}
h2 {
  font-size: 38px;
}
h3 {
  font-size: 24px;
  font-weight: 400;
}
h4 {
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
}
h5 {
  font-size: 16px;
  font-weight: 400;
}
h6 {
  font-size: 12px;
  font-weight: 400;
}
p {
  margin: 0 0 20px;
  line-height: 1.7;
}
p:last-child {
  margin: 0px;
}
.explain a{
  text-decoration: none;
}
.row{
  margin-top:100px;
}
.explain a:hover{
  color:orangered;
}

.team-block {
  margin-bottom: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
.team-content {
  position: absolute;
  background-color: rgba(17, 24, 31, 0.8);
  bottom: 0px;
  display: inline-block;
  color: #fff;
  padding: 30px;
}
.team-img {
  position: relative;
}
.team-img img {
  width: 200px;
  height: 150px;
}
.price {
  font-weight: bold;
}

</style>
