
<template class="full-background">
<div>
	<div v-if="window.width>=576">
      <b-row class="verticla_area justify-content-center m-0" style="background:rgba(160, 160, 160, 0.65);position:relative">
        <img :src="require('@/assets/icon/home_header(2).jpg')" style="width:100%;height:100%;position:absolute;top:0px;">
        <div style="position:relative;">
          <img :src="require('@/assets/icon/home_header.jpg')" style="width:100%;">
          <TitleImgCard />
        </div>
      </b-row>
      <Marquee />
      <b-row class="m-0 p-5" style="background:rgba(160, 160, 160, 0.65)">
        <div class="container"><HomeEnter/></div>
      </b-row>
      <b-row class="m-0 p-5" style="background:#ECE9E2">
        <div class="container"><iframe width="100%" height="400" src="https://www.youtube.com/embed/cwXc6RDIqPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </b-row>
      <b-row  class="justify-content-center m-0"  style="background:#ECE9E2">
        <div class="col-9 p-2 m-2" style="width:100%">
            <div class="container"><HomeNews/></div>
        </div>
      </b-row>
	</div>
    <!-- 手機版本 -->
    <div class="container" v-if="window.width<=576">
      <b-row class="verticla_area justify-content-center">
        <div style="position:relative;">
          <img :src="require('@/assets/icon/home_header.jpg')" style="width:100%;">
        </div>
      </b-row>
      <PhoneMarquee />
      <b-row style="background:rgba(160, 160, 160, 0.65);">
        <HomeEnter/>
      </b-row>
      <b-row class="pt-3 pb-3" style="background:#ECE9E2">
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/cwXc6RDIqPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </b-row>
      <b-row  style="background:#ECE9E2">
        <div class="p-2 m-2">
            <HomeNews/>
        </div>
      </b-row>
    </div>
</div>
</template>

<script>
import Marquee from '@/components/Marquee'
import PhoneMarquee from '@/pages/Home/HomePhoneMarquee'
import HomeEnter from '@/pages/Home/HomeEnter'
import HomeNews from '@/pages/Home/HomeNews'
import TitleImgCard from '@/pages/Home/HomeTitleImgCard'

export default {
  components: {
    HomeNews,
    Marquee,
    PhoneMarquee,
    HomeEnter,
    TitleImgCard
  },
  data() {
    return{
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    this.eventNavHome();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    eventNavHome() {
      localStorage.homePage = '';
    },
    handleResize() {
      this.window.width = window.innerWidth;
    }
  }
}
</script>

<style scoped>
.text_run{
  display:block;
  margin: 8px;
  border-radius: 10px;
  width:70%;
  font-size: 110%;
  height: 25px;
}
.phone_area{
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #fec526;
}
.area_1{
  background-color: white;
  display: block;
  position:absolute;
  height:auto;
  bottom:0;
  top:0;
  left:0;
  right:0;
  border-radius: 5px;
}

h6 {
  font-weight: 400;
  text-align: center;
  border-radius: 5px;
  padding:10px;
  background-color: white;
  margin-bottom: 0px;
}

.student_title{
  display: block;
  padding: 8px;
  padding: 8px 20px 8px 20px;
  background-color: transparent;
  background-color: white;
}

.verticla_area{
  align-items: center;
  display: flex;
}

.area_yellow{
  background-color: #01a5d9;
}

.full-background {
  background:url('/mega-works-fcuam/img/background.png');
  /* background:url('http://pic.616pic.com/bg_w1180/00/24/33/inntL1qbfn.jpg'); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>