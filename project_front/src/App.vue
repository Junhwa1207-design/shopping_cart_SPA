<template>
  <div class="top">
    <header id="header">
      <ToolBar></ToolBar>

    </header>
    <router-view :key="$route.fullPath"></router-view>
 
    <Footer></Footer>
  </div>
</template>

<script>
import ToolBar from '@/components/main/ToolBar';
import Footer from '@/components/common/footer';
export default {
  components: {
    ToolBar,
    Footer,
  },
  data() {
    return {
      isAdminView: false,
    };
  },
};
</script>


