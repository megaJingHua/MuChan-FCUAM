<template>
  <div>
    <div id="app">
      <div class="app-container">
        <Nav />
        <NavMobile />
        <div>
          <router-view />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { Nav, NavMobile, Footer },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  position: relative;
  font-family: "FZLanTingHeiS-R-GB", "arial", "Hiragino Sans GB", "Microsoft Yahei",
    "微软雅黑", "宋体", "Tahoma", "Arial", "Helvetica", "STHeiti";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  letter-spacing: 1.4px;
}
.app-container {
  position: relative;
  height: 100%;
  background-color: white;
}
</style>
