
<template class="full-background">
<div >
  <b-row class="verticla_area justify-content-center m-0" style="background:rgba(160, 160, 160, 0.65);position:relative;">
      <img :src="require('@/assets/icon/parent_home(2).jpg')" style="width:100%;height:100%;position:absolute;top:0px;">
    <div style="position:relative;">
      <img :src="require('@/assets/icon/parent_home(1).jpg')" style="width:100%;">
      <TitleImgCard v-if="window.width>=576"/>
    </div>
  </b-row>
  <Marquee />
  <b-row class="justify-content-center m-0" style="background:#ECE9E2"  v-if="window.width>=576">
    <div class="container justify-content-center" style="display:flex;">
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/characteristic" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/feature_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">本系特色</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/teacher" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/teacher_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">師資介紹</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/goal" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/target_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">教育目標</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/capability" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/molecule_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">核心能力</div>
      </a>
    </b-col>
    </div>
  </b-row>
  <b-row class="justify-content-center m-0" style="background:#ECE9E2"  v-if="window.width<=576">
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/characteristic" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/feature_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">本系特色</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/teacher" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/teacher_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">師資介紹</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/goal" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/target_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">教育目標</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/capability" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/molecule_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">核心能力</div>
      </a>
    </b-col>
  </b-row>
  <b-row class="m-0 p-5 justify-content-center recruit-area" v-if="window.width>=576">
    <div class="container" style="display:flex;background:#ECE9E2">
    <div class="col-8 p-0 m-0" >
      <img :src="require('@/assets/icon/13990305845_32ec4e1c05_o.jpg')" style="width:100%;">
    </div>
    <div class="col-4" >
      <div class="enter-card">
        <h6 style="text-align:left; padding-left:0px; " >大學部招生資訊</h6>
        <p>因應全球教改趨勢，108課綱強調「素養」教育，打造具備創新創造、數位移動、思考與解決問題、整合活用、跨領域及終身學習等關鍵能力的人才。為此，本系除了數理邏輯的基礎訓練外，也積極調整課程與發展方向，以打造面對複雜多變的未來人才。</p>
        <a href="./#/recruit/containe?university"><button>MORE<div> > </div></button></a>
      </div>
    </div>
    </div>
  </b-row>
  <b-row class="m-0 justify-content-center recruit-area" v-if="window.width<=576" style="background:#ECE9E2">
    <div class="col-12 p-0 m-0" >
      <img :src="require('@/assets/icon/13990305845_32ec4e1c05_o.jpg')" style="width:100%;">
    </div>
    <div class="col-12" >
      <div class="enter-card">
        <h6 style="text-align:left; padding-left:0px; ">大學部招生資訊</h6>
        <p>因應全球教改趨勢，108課綱強調「素養」教育，打造具備創新創造、數位移動、思考與解決問題、整合活用、跨領域及終身學習等關鍵能力的人才。為此，本系除了數理邏輯的基礎訓練外，也積極調整課程與發展方向，以打造面對複雜多變的未來人才。</p>
        <a href="./#/recruit/containe?university"><button>MORE<div> > </div></button></a>
      </div>
    </div>
  </b-row>
  <div v-if="window.width>=576">
  <b-row class="justify-content-center m-0 pr-5 pl-5 pt-5" style="background:#ECE9E2">
    <b-col lg="5" sm="6"><iframe width="100%" height="300" src="https://www.youtube.com/embed/tDZrqT0u_wI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
    <b-col lg="5" sm="6"><iframe width="100%" height="300" src="https://www.youtube.com/embed/sFpwY7TF5tI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
  </b-row>
  <b-row class="justify-content-center m-0 pr-5 pl-5 pt-5 pb-5" style="background:#ECE9E2">
    <b-col lg="5" sm="6"><iframe width="100%" height="300" src="https://www.youtube.com/embed/XCviMxk78vM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
    <b-col lg="5" sm="6"><iframe width="100%" height="300" src="https://www.youtube.com/embed/43RfPpjBT7k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
  </b-row>
  </div>
  <div v-if="window.width<=576">
  <b-row class="justify-content-center m-0" style="background:#ECE9E2">
    <b-col class="col-12 p-0 mt-4"><iframe width="100%" height="300" src="https://www.youtube.com/embed/tDZrqT0u_wI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
    <b-col class="col-12 p-0 mt-4 mb-4"><iframe width="100%" height="300" src="https://www.youtube.com/embed/sFpwY7TF5tI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></b-col>
  </b-row>
  </div>
</div>
</template>

<script>
import Marquee from '@/components/Marquee'
import TitleImgCard from '@/components/TitleImgCard'

export default {
  components: {
    Marquee,
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
      localStorage.homePage = 'parent';
    },
    handleResize() {
      this.window.width = window.innerWidth;
    }
  }
}
</script>

<style scoped>
.recruit-area{
  text-decoration:none;
  display:flex;
  justify-content:center;
  align-items:center;
  background:rgba(160, 160, 160, 0.65);
}

.important-button{
  display:flex;
  flex-direction:column;
  align-items:center;
  text-decoration:none;
}

.important-button div {
  font-size:135%;
  font-weight:600;
  color:#4b2e83;
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
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  padding:10px;
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

.enter-card {
	padding:10px 0px 10px 0px;
	margin:10px 0px 10px 10px;
}
.enter-card h6{
	color:rgb(72, 46, 179);
  font-size: 140%;
}

.enter-card button {
	font-size: 90%;
	display:flex;
	justify-content:flex-end;
	padding:0px 0px 0px 6px;
	background:white;
	border:none;
}

.enter-card button div{
	color:white;
	margin-left:5px;
	background: rgb(72, 46, 179);
	padding:0px 5px;
	border-left: 4px solid rgb(175, 164, 218);
}
.full-background {
  background:url('/fcu_applied-mathematics/img/background.png');
  /* background:url('http://pic.616pic.com/bg_w1180/00/24/33/inntL1qbfn.jpg'); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.imp-button{
  background:white;
  border-right: 1px solid #EBEBEB;
}

.imp-button-phone{
  border: 0px;
}
</style>