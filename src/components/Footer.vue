<template>
<div class="footerArea" v-if="footer">
  <b-container>
  <b-row align-v="end" class="justify-content-center" >
    <b-img v-if="window.width<=576" class="imgArea2" :src="require('@/assets/icon/background.png')" fluid></b-img >
    <b-col lg="12" md="12" sm="12" style="text-align: center">
      <h3 class="mb-2">逢甲大學 應用數學系</h3>
        <p>連絡電話：{{footerData.phone}}</p>
        <p>連絡信箱：{{footerData.email.split('@')[0]}} <b-img class="emailCss" :src="require('@/assets/email.png')"></b-img> {{footerData.email.split('@')[1]}}</p>
      <p>服務時間：{{footerData.time}}</p>
      <!-- <p>瀏覽人數：000000</p> -->
      <p style="font-size:100%;">{{footerData.copyright}}</p>
      <p>更新日期：{{this.date}}</p>
      <p></p>
    </b-col>
  </b-row>
  </b-container>
  
  
  
</div>
</template>

<script>
import footerData from '../datas/Footer.json'
import Action from '../datas/Action.json'
import CourseMaster from '../datas/CourseMaster.json'
import CourseUniversity from '../datas/CourseUniversity.json'
import Highlight from '../datas/Highlight.json'
import News from '../datas/News.json'
import RecruitMaster from '../datas/RecruitMaster.json'
import RecruitUniversity from '../datas/RecruitUniversity.json'
import ScholarshipMaster from '../datas/ScholarshipMaster.json'
import ScholarshipUniversity from '../datas/ScholarshipUniversity.json'

export default {
  props: {
    footer: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      footerData,
      date:[
        Action.datas[0].date,
        CourseMaster.datas[0].date,
        CourseUniversity.datas[0].date,
        Highlight.datas[0].date,
        News.datas[0].date,
        RecruitMaster.datas[0].date,
        RecruitUniversity.datas[0].date,
        ScholarshipMaster.datas[0].date,
        ScholarshipUniversity.datas[0].date,
      ],
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    update: function(){
      this.date.sort(function(a,b){
        return Date.parse(b) - Date.parse(a)
      })
      this.date=this.date[0];
    },
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  created(){
    this.update();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
.footerArea{
    font-family: "FZLanTingHeiS-R-GB","arial","Hiragino Sans GB","Microsoft Yahei","微软雅黑","宋体","Tahoma","Arial","Helvetica","STHeiti";
    background-color: rgba(75,46,131);
    height: auto;
    width: 100%;
    padding: 20px;
    padding-top: 40px; 
    position: absolute;
    color: white;
    border-top: 8px solid rgb(75,46,131);
}
.footerArea p {
    margin: 0px;
    font-size: 110%;
    padding-top: 5px; 
}

.footerArea h6 {
    font-size: 120%;
    padding-top: 10px; 
}
.footerArea h4::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 1px;
  background-color: white;
  top: 55px;
  left: 50%;
  margin-left: -50px;
}
.imgArea {
  position: absolute;
  height: 100%;
  z-index: -5;
  bottom: 0px;
  left:0px;
}
.emailCss {
  width: 13px;
}
.imgArea2 {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -8;
  bottom: 0px;
  left:0px;
}
</style>