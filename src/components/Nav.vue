<template>
<div>
  <b-navbar  toggleable="sm" type="dark" variant="light" fixed="top" id="nav_bar" >
    <!-- 標題 -->
    <b-navbar-brand class="animated jackInTheBox" href="./#/" ><p class="title">{{navData.title}}</p></b-navbar-brand>
    <!-- 選單按鈕 -->
    <b-navbar-toggle type="light" align="left" target="nav-collapse"  v-if="navButton"></b-navbar-toggle>
    <!-- 選單內容 -->
    <b-collapse id="nav-collapse" is-nav v-if="navButton">
      <b-navbar-nav >
        <!-- 首頁 -->
        <!-- <b-nav-item class="animated zoomIn" :href="'./#/'+this.homePage">{{navData.nav[0].menuName}}</b-nav-item> -->
        <!-- 最新消息 -->
        <b-nav-item class="animated zoomIn" href="./#/news">{{navData.nav[1].menuName}}</b-nav-item>
        <!-- 招生資訊 -->
        <b-nav-item class="animated zoomIn" href="./#/recruit" >{{navData.nav[4].menuName}}</b-nav-item>
        <!-- 關於本系 -->
        <b-nav-item-dropdown text="關於本系" class="animated zoomIn" toggle-class="text-light">
          <li v-for="nav in navData.nav[2].menuContent" :key='nav.menuName' >
            <b-dropdown-item v-bind:href="nav.href">{{nav.name}}</b-dropdown-item>
          </li>
        </b-nav-item-dropdown>
        <!-- 課程規劃 -->
        <b-nav-item-dropdown text="課程規劃" class="animated zoomIn" toggle-class="text-light">
          <li v-for="nav in navData.nav[3].menuContent" :key='nav.menuName' >
            <b-dropdown-item v-bind:href="nav.href">{{nav.name}}</b-dropdown-item>
          </li>
        </b-nav-item-dropdown>
        <!-- 師資介紹 -->
        <b-nav-item class="animated zoomIn" href="./#/teacher" >{{navData.nav[5].menuName}}</b-nav-item>
        <!-- 學生專區 -->
        <b-nav-item-dropdown text="學生專區" class="animated zoomIn" toggle-class="text-light">
          <li v-for="nav in navData.nav[6].menuContent" :key='nav.menuName' >
            <b-dropdown-item v-bind:href="nav.href">{{nav.name}}</b-dropdown-item>
          </li>
        </b-nav-item-dropdown>
        <!-- 微積分資源 -->
        <b-nav-item-dropdown text="微積分資源" class="animated zoomIn" toggle-class="text-light">
          <li v-for="nav in navData.nav[7].menuContent" :key='nav.menuName' >
            <b-dropdown-item v-bind:href="nav.href">{{nav.name}}</b-dropdown-item>
          </li>
        </b-nav-item-dropdown>  
                <b-nav-item class="animated zoomIn" target="_blank" href="https://www.facebook.com/groups/681977315178475"><i class="fa fa-facebook-square fa-2x" style="color:white"></i></b-nav-item>
      </b-navbar-nav>
      <b-col>
      </b-col>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import navData from '../datas/Nav.json'
export default {
  props: {
    navButton: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      navData,
      homePage:''
    }
  },
  methods: {
    eventHomePage: function () {
      this.homePage = localStorage.homePage;
    }
  },
  mounted () {
    this.eventHomePage();
  }
}
</script>
<style scoped>
span {
  color:white;
}
#nav_bar{
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-box-shadow: 0 4px 30px -5px rgba(0,0,0,.05);
  box-shadow: 0 4px 30px -5px rgba(0,0,0,.05);
  background: #4b2e83 !important;
}
.title{
  color:white;
  font-size: 115%;
  font-weight: 400;
  margin: 0px;
  text-align:center;
}
.subtitle{
  color:white!important;
  font-size: 75% !important;
  margin: 0px;
  text-align:center;
}
.navbar-dark .navbar-nav .nav-link{
  color:white!important
}
</style>