<template class="full-background">
<div>
  <b-row class="verticla_area justify-content-center m-0" style="background:rgba(160, 160, 160, 0.65);position:relative;">
    <img :src="require('@/assets/icon/university_home(2).jpg')" style="width:100%;height:100%;position:absolute;top:0px;">
    <div style="position:relative;">
      <img :src="require('@/assets/icon/university_home(1).jpg')" style="width:100%;">
      <TitleImgCard v-if="window.width>=576"/>
    </div>
  </b-row>
  <b-row class="m-0" style="background:#4b2e83;color:white;display:flex;justify-content:center">
    <div style="margin:auto 0px;font-weight:600">本系亮點：</div>
    <marquee direction="up" scrollamount="1" class="text_run">
      <a href="./#/article?heighlight&index=0" style="padding-left:10px;color:white">▶{{HighlightCSV.datas[0].title}}</a><br>
      <a href="./#/article?heighlight&index=1" style="padding-left:10px;color:white">▶{{HighlightCSV.datas[1].title}}</a><br>
      <a href="./#/article?heighlight&index=2" style="padding-left:10px;color:white">▶{{HighlightCSV.datas[2].title}}</a>
    </marquee>
  </b-row>
  <b-row class="justify-content-center m-0" style="background:#ECE9E2"  v-if="window.width>=576">
    <div class="container justify-content-center" style="display:flex;">
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/scholarship/containe?university" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/money_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">獎助學金</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/course/containe?university" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/book_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">課程列表</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/programUniversity" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/diploma_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">學分學程</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button" sm="3" lg="2">
      <a href="/#/teacher" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/teacher_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">師資介紹</div>
      </a>
    </b-col>
    </div>
  </b-row>
  <b-row class="justify-content-center m-0" style="background:#ECE9E2"  v-if="window.width<=576">
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/scholarship/containe?university" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/money_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">獎助學金</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/course/containe?university" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/book_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">課程列表</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/programUniversity" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/diploma_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">學分學程</div>
      </a>
    </b-col>
    <b-col class="p-4 imp-button imp-button-phone col-6">
      <a href="/#/teacher" class="important-button">
        <b-img class="icon-img" :src="require('@/assets/icon/teacher_for.svg')" style="width:55px"></b-img>
        <div style="text-align: center">師資介紹</div>
      </a>
    </b-col>
  </b-row>
<b-row class="m-0" style="background:rgba(160, 160, 160, 0.65)">
  <div class="container">
	<div v-if="window.width>=576" class="row justify-content-center enter-row pt-2 pb-2 pt-5 pb-5" style="margin:0px;">
		<div class="col-3 enter-area" >
			<img :src="require('@/assets/icon/13990305845_32ec4e1c05_o.jpg')" style="width:100%;">
			<div class="enter-card">
				<h6>課程地圖</h6>
				<p style="color:#000;">全球產業數位轉型及新興產業發展對數據科學人力需求殷切，本系將課程區分為「計算科學與金融應用」與「數據科學與智慧應用」兩大主軸。</p>
				<a href="./#/article?recruit&text&university&index=0"><button>MORE<div> > </div></button></a>
			</div>
		</div>
		<div class="col-3 enter-area">
			<img :src="require('@/assets/icon/20021122226_cca454d8a6_o.jpg')" style="width:100%;">
			<div class="enter-card">
				<h6>碩士班招生資訊</h6>
				<p style="color:#000;">數學為科學之母，本碩士班以基礎數理統計為主，以程式實作為輔，強調實務導向教學，培養各應用領域之未來人才。</p>
				<a href="./#/recruit/containe?master"><button>MORE<div> > </div></button></a>
			</div>
		</div>
		<div class="col-3 enter-area">
			<img :src="require('@/assets/icon/14009793803_f3dfe70b55_o.jpg')" style="width:100%;">
			<div class="enter-card">
				<h6>薪資分佈</h6>
				<p style="color:#000;">可透過104銀行提供的資料，查詢各職業與學、碩士薪資分佈，以做為就業及升學的考量。</p>
				<a href="https://www.104.com.tw/jb/wage/view?wf=alertbar"><button>MORE<div> > </div></button></a>
			</div>
		</div>
	</div>
  </div>
	<div v-if="window.width<=576" class="row justify-content-center enter-row pt-2 pb-2" style="margin:0px">
		<div class="col-12 pt-2">
			<img :src="require('@/assets/icon/13990305845_32ec4e1c05_o.jpg')" style="width:100%;">
			<div class="enter-card" style="background: #ECE9E2;margin: 0px 0px 10px 0px;">
				<h6>課程地圖</h6>
				<p style="color:#000;">全球產業數位轉型及新興產業發展對數據科學人力需求殷切，本系將課程區分為「計算科學與金融應用」與「數據科學與智慧應用」兩大主軸。</p>
				<a href="./#/article?recruit&text&university&index=0"><button>MORE<div> > </div></button></a>
			</div>
		</div>
		<div class="col-12 pt-2">
			<img :src="require('@/assets/icon/20021122226_cca454d8a6_o.jpg')" style="width:100%;">
			<div class="enter-card" style="background: #ECE9E2;margin: 0px 0px 10px 0px;">
				<h6>碩士班招生資訊</h6>
				<p style="color:#000;">數學為科學之母，本碩士班以基礎數理統計為主，以程式實作為輔，強調實務導向教學，培養各應用領域之未來人才。</p>
				<a href="./#/recruit/containe?master"><button>MORE<div> > </div></button></a>
			</div>
		</div>
		<div class="col-12 pt-2">
			<img :src="require('@/assets/icon/14009793803_f3dfe70b55_o.jpg')" style="width:100%;">
			<div class="enter-card" style="background: #ECE9E2;margin: 0px 0px 10px 0px;">
				<h6>薪資分佈</h6>
				<p style="color:#000;">可透過104銀行提供的資料，查詢各職業與學、碩士薪資分佈，以做為就業及升學的考量。</p>
				<a href="https://www.104.com.tw/jb/wage/view?wf=alertbar"><button>MORE<div> > </div></button></a>
			</div>
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
import TitleImgCard from '@/components/TitleImgCard'

export default {
  components: {
    TitleImgCard
  },
  data() {
    return{
      HighlightCSV:{"datas":[]},
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    this.getHighlightData();
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
    },
    getHighlightData () {
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=1317431680&single=true&output=csv').then(res=>{       
        const csv = this.$papa.parse( res.data, {
          header: true
        })
        this.$set(this.HighlightCSV,'datas',csv.data);
      })
    },
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

.text_run{
  font-size: 110%;
  display:block;
  margin: 8px;
  border-radius: 10px;
  width:70%;
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

.enter-area {
	padding-right: 0px;
	padding-left: 0px;
	border-radius: 3px;
	margin: 10px;
	background:#ECE9E2;
}
.enter-card {
	padding:15px;
	margin:5px;
}
.enter-card h6{
	color:rgb(72, 46, 179);
	font-weight: 600;
	font-size:130%;
}

.enter-card button {
	font-size: 90%;
	display:flex;
	justify-content:flex-end;
	padding:0px 0px 0px 6px;
	background:white;
	border:none;
	margin-bottom: 40px;
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
