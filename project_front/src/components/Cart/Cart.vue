<template>
  <div class="container">
    <div class="row">
      <div class=" col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Choice</th>
              <th>Product</th>
              <th>Qantity</th>
              <th class="text-center">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in CartItem" :key="index">
              <td class="col-sm-8 col-md-1">
                <input
                  type="checkbox"
                  name="checked_cart"
                  :value="item"
                  v-model="checkedItem"
                  :id="`item_${item.GDS_NUM}`"
                  @change="
                    isEmpty(`item_${item.GDS_NUM}`, item);
                    getSubTotalPrice();
                    getTotalPrice();
                  "
                />
              </td>
              <td class="col-sm-8 col-md-6">
                <div class="media">
                  <a class="pull-left" href="#">
                    <img
                      v-if="showImg"
                      class="media-object"
                      :src="`${getUrl}${item.GDS_IMG}`"
                      style="width: 72px; height: 72px;"
                    />
                  </a>
                  <div class="media-body">
                    <h4 class="media-heading">
                      <router-link to="#"></router-link>
                    </h4>
                    <span>Left Qantity </span
                    ><span class="text-success"
                      ><strong>{{ item.GDS_STOCK }}</strong></span
                    >
                  </div>
                </div>
              </td>
              <td class="col-sm-1 col-md-1" style="text-align: center">
                <input
                  type="texxt"
                  class="form-control"
                  id="exampleInputEmail1"
                  v-model="item.CART_STOCK"
                  @keyup="
                    getSubTotalPrice();
                    getTotalPrice();
                  "
                />
              </td>
              <td class="col-sm-1 col-md-1 text-center">
                <strong>{{ addNumComma(item.GDS_PRICE) }}</strong>
              </td>
              <td class="col-sm-1 col-md-1 text-center">
                <strong>{{
                  getOneItemTotal(item.CART_STOCK, item.GDS_PRICE, index)
                }}</strong>
              </td>
              <td class="col-sm-1 col-md-1">
                <span
                  class="glyphicon glyphicon-remove"
                  @click="deleteGoods(item.CART_NUM, item.USER_ID)"
                >
                </span>
              </td>
            </tr>



            <tr v-show="CartItem.length > 0">
              <td></td>
              <td></td>
              <td></td>
              <td><h5>price</h5></td>
              <td class="text-right">
                <h5>
                  <strong>{{ subPrice }}</strong>
                </h5>
              </td>
            </tr>
            <tr v-show="CartItem.length > 0">
              <td></td>
              <td></td>
              <td></td>
              <td><h5>Tax</h5></td>
              <td class="text-right">
                <h5>
                  <strong>{{tax * 100}} %</strong>
                </h5>
              </td>
            </tr>
            <tr v-show="CartItem.length > 0">
              <td></td>
              <td></td>
              <td></td>
              <td><h4>Total Price</h4></td>
              <td class="text-right">
                <h5>
                  <strong>{{ getTotalPriceNum }}</strong>
                </h5>
              </td>
            </tr>
            <tr v-show="CartItem.length > 0">
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  type="button"
                  class="btn btn-default"
                  @click="continueShop()"
                >
                  <span class="glyphicon glyphicon-shopping-cart"></span>
                  Keep Shopping
                </button>
              </td>
            </tr>
            <tr v-show="CartItem.length < 1">
              <td></td>
              <td></td>
              <td></td>
              <h1>No Product</h1>
              <td>
                <button
                  type="button"
                  class="btn btn-default"
                  @click="continueShop()"
                >
                  <span class="glyphicon glyphicon-shopping-cart"></span>
                  Keep shopping
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      CartItem: [],
      totalPrice: 0,
      tax: 0.15,
      subPrice: 0,
      showImg: false,
      checkedItem: [],
    };
  },
  mounted() {
    this.getSubTotalPrice();
    this.getTotalPrice();
    this.showImg = true;
    this.CartItem = this.$store.state.cart.cart;
  },
  computed: {
    getTotalPriceNum() {
      return this.addNumComma(this.totalPrice);
    },
    getUrl() {
      return this.$store.state.url;
    },
  },
  methods: {
    async isEmpty(el, item) {
      for (let i = 0; i < this.checkedItem.length; i++) {
        if (this.checkedItem[i].GDS_STOCK < 1) {
          this.checkedItem.splice(
            this.checkedItem.indexOf(this.checkedItem[i].GDS_STOCK < 0, 1),
          );
          document.querySelector(`#${el}`).checked = false;
          alert('There is no qualtity left for the product.');
          try {
            await this.deleteGoods(item.CART_NUM, item.USER_ID);
          } catch (error) {
            alert(error);
          }
        }
      }
    },
    async refreshCart() {
      try {
        await this.$store.dispatch(
          'getCartList',
          this.$store.state.user.USER_ID,
        );

        this.CartItem = this.$store.state.cart.cart;
      } catch (error) {
        alert(error);
      }
    },

    getOneItemTotal(CART_STOCK, GDS_PRICE, index) {
      const result = CART_STOCK * GDS_PRICE;
      this.CartItem[index].TOTAL_PRICE = result;
      return this.addNumComma(result);
    },
    getSubTotalPrice() {
      let sum = 0;
      for (let i = 0; i < this.checkedItem.length; i++) {
        sum += this.checkedItem[i].TOTAL_PRICE;
      }

      this.subPrice = this.addNumComma(sum);
    },
    getTotalPrice() {
      let sum = 0;
      for (let i = 0; i < this.checkedItem.length; i++) {
        sum += this.checkedItem[i].TOTAL_PRICE;
      }
      sum += this.tax * sum;

      this.totalPrice = sum;
    },
    addNumComma(num) {
      return num.toString().replace  (/\B(?=(\d{3})+(?!\d))/g, ',') + '00';
    },
    continueShop() {
      this.$router.go(-1);
    },
    async deleteGoods(ITEM_NUM, USER_ID) {
      const confirm1 = confirm('Do you want to remove all products?');
      if (confirm1) {
        const reqData = {
          CART_NUM: ITEM_NUM,
          USER_ID,
        };
        try {
          await this.$store.dispatch('deleteCart', reqData);
          await this.$store.dispatch(
            'getCartList',
             this.$store.state,
            this.$store.state.user.USER_ID,
          );
          this.CartItem = this.$store.state.cart.cart;
        } catch (error) {
          alert(error);
        }
      }
    },
  },
};
</script>

<style></style>
