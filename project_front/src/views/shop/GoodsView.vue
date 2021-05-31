<template>
  <div class="container">
    <div class="card">
      <i
        class="fas fa-times closeModalBtn"
        @click="$router.go(-1)"
        style="float:right"
      ></i>
      <div class="container-fliud">
        <div class="wrapper row">
          <div class="preview col-md-6">
            <div class="preview-pic tab-content">
              <div class="tab-pane active" id="pic-1" v-if="showImg">
                <img :src="`${getUrl}${item.GDS_IMG}`" />
              </div>
                <div class="tab-pane active" id="pic-1" v-if="showVideo">          
                <video controls :src="`${getUrl}${item.GDS_VIDEO}` " width="370px" height="250px" />
              </div>
            </div>
          </div>
          <div class="details col-md-6">
            <h3 class="product-title">{{ item.GDS_NAME }}</h3>
      
            <div class="product-description" v-html="item.GDS_DESC"></div>
            <h4 class="price">
              Price: <span> ${{ item.GDS_PRICE }}.00</span>
            </h4>
            <h4 class="stock">
              Stock: <span>{{ item.GDS_STOCK }}</span>
            </h4>

            <div class="col-xs-4 buy_stock_scope">
              <i class="fas fa-minus fa-2x" @click="minusStock"></i>
              <input
                type="text"
                name="GDS_STOCK_BUY"
                id="GDS_STOCK_BUY"
                class="form-control buy_stock"
                placeholder="Purchase qualtity"
                value="0"
                @keyup="validation()"
                v-model="buy_stock"
              />

              <i class="fas fa-plus fa-2x" @click="plusStock"></i>
            </div>

            <div class="action">
              <button
                class="add-to-cart btn btn-default"
                type="button"
                @click="addGoodsCart(1)"
              >Move to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addGoodsCart, getCartList } from '@/api/Cart.js';
import { getGoodsOne } from '@/api/Goods.js';

export default {
  data() {
    return {
      item: '',
      buy_stock: 0,
      showImg: false,
      showVideo: false,
    };
  },
  mounted() {
    this.showImg = true;
    this.showVideo = true;
  },
  computed: {
    getUrl() {
      return this.$store.state.url;
    },
  },
  async created() {
    const response = await getGoodsOne(this.$route.params.gds_num);

    this.item = response.data[0];
    console.dir(this.item);
  },
  methods: {
    async addGoodsCart(mode) {
      if (this.buy_stock < 1) {
        alert('Check your product.');
        return;
      }
      try {
        const reqData = {
          USER_ID: this.$store.state.user.USER_ID,
          GDS_NUM: this.item.GDS_NUM,
          CART_STOCK: this.buy_stock,
        };
        await addGoodsCart(reqData);
        alert(`${this.item.GDS_NAME} There are ${this.buy_stock} in the cart.`);
        const response1 = await getCartList(this.$store.state.user.USER_ID);
        this.$store.state.cart.cart = response1.data;
        if (mode === 2) {
          this.$router.push('/cart/list');
        }
      } catch (error) {
        alert(error);
      }
    },

    validation() {
      this.buy_stock = this.buy_stock.replace(/[^0-9]/g, '');
    },
    plusStock() {
      if (this.item.GDS_STOCK > this.buy_stock) {
        ++this.buy_stock;
      } else {
        alert('Empty stock');
        return;
      }
    },
    minusStock() {
      if (this.buy_stock > 0) {
        --this.buy_stock;
      }
    },
  },
};
</script>

<style scoped src="@/assets/css/ModalCss.css"></style>
