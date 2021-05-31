<template>
  <div class="banner">
    <div class="container">
          <div class="banner-caption">
               <img :src="require('@/assets/images/hero.jpg')"  width="100%"  />
          </div>
    </div>

    <div class="subTotal">
      <div class="total">
        <h2> Find the perfect product for you!</h2>      
      </div>
    </div>
  </div>
</template>
<style scoped>
.container{
  width:100%;
}
.form-inline {
  display: inline-flex;
}
.total{
  width: 100%;
}
.total h2{
  margin-top:50px;
  text-align: center;
}


</style>
