<template>
  <div class="top-bar" style="padding-top: 75px;">
    <div class="container">
      <nav class="navbar navbar-icon-top navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <router-link class="navbar-brand" to="/">
             <img :src="require('@/assets/images/logo.png')"  width="40px" height="40px" /></router-link>
          </div>
         
          
          
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown mega-dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-shopping-basket"></i>
                  Product category <span class="caret"></span>
                </a>
                <ul class="dropdown-menu mega-dropdown-menu">
                  <li
                    class="col-sm-3"
                    v-for="(item, index) in getCategory.fmenu"
                    :key="index"
                  >
                    <ul>
                      <li
                        class="dropdown-header"
                        v-if="item.CATEGORY_LEVEL == 1"
                      >
                        <router-link
                          to=""
                          @click.native="replaceUrl(item.CATEGORY_CODE)"
                        >
                          {{ item.CATEGORY_NAME }}</router-link
                        >
                      </li>

                      <li
                        v-for="(item2, index) in getCategory.smenu"
                        :key="index"
                      >
                        <router-link
                          to=""
                          @click.native="
                            replaceUrl(item.CATEGORY_CODE, item2.CATEGORY_CODE)
                          "
                          v-if="item.CATEGORY_CODE == item2.CATEGORY_REF"
                          >{{ item2.CATEGORY_NAME }}</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            
            <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link to="/cart/list" @click.native="replace"
                  ><i class="fa fa-shopping-cart">
                    <span class="badge badge-primary">{{
                      this.$store.state.cart.cart != null
                        ? this.$store.state.cart.cart.length
                        : 0
                    }}</span>
                  </i></router-link
                >
              </li>
            
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>




    </div>
  </div>
</template>

<script>
import Validation from '@/util/data/Validation.js';
export default {
  async created() {
    this.$http
      .post(this.getUrl + 'api/user/login' )
      .then(async response => {
        this.$store.commit('login', response.data);
        this.$router.push({path:'/'});
      })
      .catch(err => {
        alert(err.response.data);
      })
  },
  computed: {
    getUrl() {
      return this.$store.state.url;
    },
    getCategory() {
      let cate = this.$store.state.category.category;
      let fmenu = [];
      let smenu = [];
      let returnValue = {};
      fmenu = cate.filter(x => x.CATEGORY_LEVEL == 1);
      smenu = cate.filter(x => x.CATEGORY_LEVEL == 2);
      // for (let i = 0; i < cate.length; i++) {
      //   if (cate[i].CATEGORY_LEVEL == 1) {
      //     fmenu.push(cate[i]);
      //   } else {
      //     smenu.push(cate[i]);
      //   }
      // }
      returnValue.fmenu = fmenu;
      returnValue.smenu = smenu;

      return returnValue;
    },
  },

  methods: {
    refresh() {
      this.logout();
    },
    replace() {
      this.$router.replace({
        path: '/cart/list',
        query: {
          t: new Date().getTime(),
        },
      });
    },
    replaceUrl(fcode, scode) {
      this.$router.replace({
        path: '/shop/list/category',
        query: {
          fcode: !Validation.isNull(fcode) ? '' : fcode,
          scode: !Validation.isNull(scode) ? '' : scode,
          page: 1,
          pageStart: 0,
          perPageNum: 9,
          t: new Date().getTime(),
        },
      });
    },
  },
};
</script>

<style scoped>
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.login {
  cursor: pointer;
}
.badge-default {
  background-color: #777;
}
.badge-primary {
  background-color: #337ab7;
}
.badge-success {
  background-color: #5cb85c;
}
.badge-info {
  background-color: #5bc0de;
}
.badge-warning {
  background-color: #f0ad4e;
}
.badge-danger {
  background-color: #d9534f;
}

.navbar-icon-top .navbar-nav > li > a > .fa,
.navbar-icon-top .navbar-nav > li > a > .glyphicon {
  position: relative;
  width: 36px;
  font-size: 24px;
}
.navbar-icon-top .navbar-nav > li > a > .fa > .badge,
.navbar-icon-top .navbar-nav > li > a > .glyphicon > .badge {
  position: absolute;
  right: 0;
  font-family: sans-serif;
}
.navbar-icon-top .navbar-nav > li > a > .fa {
  top: 3px;
  line-height: 12px;
}
.navbar-icon-top .navbar-nav > li > a > .fa > .badge {
  top: -10px;
}
.navbar-icon-top .navbar-nav > li > a > .glyphicon {
  top: 6px;
  line-height: 6px;
}
.navbar-icon-top .navbar-nav > li > a > .glyphicon > .badge {
  top: -16px;
}

/* @media (min-width: 768px) {
  .navbar-icon-top .navbar-brand {
    padding: 25px 15px;
  }
  .navbar-icon-top .navbar-text {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .navbar-icon-top .navbar-btn,
  .navbar-icon-top .navbar-form {
    margin-top: 18px;
    margin-bottom: 18px;
  }
  .navbar-icon-top .navbar-nav > li > a {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }
  .navbar-icon-top .navbar-nav > li > a > .fa,
  .navbar-icon-top .navbar-nav > li > a > .glyphicon {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }
  .navbar-icon-top .navbar-nav > li > a > .fa > .badge,
  .navbar-icon-top .navbar-nav > li > a > .glyphicon > .badge {
    top: -7px;
  }
} */
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400);
body {
  font-family: 'Open Sans', 'sans-serif';
}
.mega-dropdown {
  position: static !important;
}
.mega-dropdown-menu {
  padding: 20px 0px;
  width: 100%;
  box-shadow: none;
  -webkit-box-shadow: none;
}
.mega-dropdown-menu > li > ul {
  padding: 0;
  margin: 0;
}
.mega-dropdown-menu > li > ul > li {
  list-style: none;
}
.mega-dropdown-menu > li > ul > li > a {
  display: block;
  color: #222;
  padding: 3px 5px;
}
.mega-dropdown-menu > li ul > li > a:hover,
.mega-dropdown-menu > li ul > li > a:focus {
  text-decoration: none;
}
.mega-dropdown-menu .dropdown-header {
  font-size: 18px;
  color: #b85505;
  font: bold;
  padding: 5px 60px 5px 5px;
  line-height: 30px;
}

.carousel-control {
  width: 30px;
  height: 30px;
  top: -35px;
}
.left.carousel-control {
  right: 30px;
  left: inherit;
}
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  font-size: 12px;
  background-color: #fff;
  line-height: 30px;
  text-shadow: none;
  color: #333;
  border: 1px solid #ddd;
}
</style>
