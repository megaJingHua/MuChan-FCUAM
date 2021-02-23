<template>
<div>
  <div id="container" class="pt-5">
    <Nav/>
    <div id="app">
      <router-view :style="{background:require('@/assets/icon/background.png')}" class="full-background"/>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Nav,
    Footer
  },
  created(){
    localStorage.device=this.deveic();
  },
  methods:{
      deveic: function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }
        if (/android/i.test(userAgent)) {
            return "android";
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "ios";
        }
        return "unknown";
    }
  }
}
</script>

<style scoped>
#container {
    position:relative;
    font-weight: 100;
    font-family: "FZLanTingHeiS-R-GB","arial","Hiragino Sans GB","Microsoft Yahei","微软雅黑","宋体","Tahoma","Arial","Helvetica","STHeiti";
    font-size: 110%;
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3e %3crect width='2' height='2' fill='%23fec526'/%3e %3ccircle cx='22' cy='22' r='1' fill='%2301a5d9' /%3e %3c/svg%3e"); */
    min-height: 100vh;
    letter-spacing: 1.4px;
}
#app {
  position: relative;
  height: 100%;
  background-color: white;
}
.container {
  padding: 2%;
  margin-bottom:0px;
}
</style>
