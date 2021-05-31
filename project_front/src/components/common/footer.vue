<template>
  <div class="footer-container">
   
      <div class="footer-container-logo">    
            <div class="footer-logo">
              <img :src="require('@/assets/images/logo.png')"  width="50px" height="50px" />
            </div>
            <p>
              &copy; 2021 Home Depot International, Inc. All Rights Reserved. Use of this website is subject to certain terms of use which constitute a legal agreement between you and Home Depot of Canada Inc. 
            </p>
     
          
 
      </div>
   
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  padding-top: 30px;
    padding-bottom: 30px;
    background: #1b1b1b;
  margin-top: 10%;
}
.footer-container-logo{
  padding-left: 30px;;
}
.footer-container p{
    color: #d7d8e1;
  font-size: 0.8em;
  margin: 15px 0;
}

.footer .footer-contents {
  padding-top: 80px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
}


.footer .footer-contents .footer-social a {
  display: inline-block;
  font-size: 1.5em;
}

</style>
