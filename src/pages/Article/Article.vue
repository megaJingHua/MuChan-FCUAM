<template>
	<div class="container">
    <b-jumbotron class="title background" bg-variant="light">
      <h6 style="color:#4b2e83" v-html="datas.date"></h6>
      <b-row align-h="end">
        <b-col cols="10">
          <h4 style="color:#4b2e83">{{datas.title}}</h4>
        </b-col>
        <b-col cols="2">
          <b-button size="sm" variant="outline-secondary" href="javascript:history.go(-1)">回上一頁</b-button>
        </b-col>
      </b-row>
      <hr class="my-4">
      <p v-html="datas.content"></p>
      <li v-for="(image,index) in image" :key=index class="pb-4" style="display:flex; justify-content:center;">
        <b-img v-if="image !== ''" :src="'http://www.math.fcu.edu.tw/news_photo/'+image" fluid alt="Responsive image" style="width:90%"></b-img>
      </li>
    </b-jumbotron>
	</div>
</template>

<script>
import History from '@/datas/History'
import Recruit from '@/datas/Recruit'
import RecruitUniversity from '@/datas/RecruitUniversity'
import RecruitMaster from '@/datas/RecruitMaster'
import ScholarshipUniversity from '@/datas/ScholarshipUniversity'
import ScholarshipMaster from '@/datas/ScholarshipMaster'
import CourseUniversity from '@/datas/CourseUniversity'
import CourseMaster from '@/datas/CourseMaster'
import Program from '@/datas/Program'
export default {
components: {
  },
  data () {
    return { 
        History,
        Recruit,
        RecruitUniversity,
        RecruitMaster,
        ScholarshipUniversity,
        ScholarshipMaster,
        CourseUniversity,
        CourseMaster,
        Program,
        datas:[],
        image:[],
        file:[]
    }
  },
    created () {
      this.reorganizeData();
    },
    mounted () {
      // this.eventImage();
      //this.eventFile();
    },
    watch:{
      datas: {
        handler(val){
          this.eventImage();
          // this.eventFile();
        },
        deep:true
      }
    },
    methods:{
      reorganizeData: function () {
          localStorage.newsActive = location.hash.split('?')[1].split('&')[0];
          let newData = [];
          const index = location.hash.split('index=')[1];
          const type = location.hash
          if (type.indexOf('news')!== -1){
              this.getNewsData(index);
          } else if (type.indexOf('heighlight')!== -1){
              this.getHighlightData(index);
              this.datas = newData[0];
          } else if (type.indexOf('history')!== -1){
              newData.push(this.History.history[index]);
              this.datas = newData[0];
          } else if (type.indexOf('recruit&master')!== -1){
              newData.push(this.RecruitMaster.datas[index]);
              this.datas = newData[0];
          } else if (type.indexOf('recruit&university')!== -1){
              newData.push(this.RecruitUniversity.datas[index]);
              this.datas = newData[0];
          } else if (type.indexOf('recruit&text&university')!== -1){
              newData.push(this.Recruit.datas[0].inner[index]);
              this.datas = newData[0];
          } else if (type.indexOf('scholarship&master')!== -1){
              newData.push(this.ScholarshipMaster.datas[index]);
              this.datas = newData[0];
          } else if (type.indexOf('scholarship&university')!== -1){
              newData.push(this.ScholarshipUniversity.datas[index]);
              this.datas = newData[0];
          } else if (type.indexOf('course&university')!== -1){
              newData.push(this.CourseUniversity.datas[index]);
              this.datas = newData[0];
          } else if (type.indexOf('course&master')!== -1){
              newData.push(this.CourseMaster.datas[index]);
              this.datas = newData[0];
          } else if (type.indexOf('speech')!== -1){
              this.getSpeechData(index);
          }  else {
              this.getActionData(index);
          }
      },
      eventImage: function() {
        if (this.datas){
          let imageData = [];
          let data = this.datas.image.indexOf('') === 0 ? JSON.parse(this.datas.image):this.datas.image;
          for (let i = 0; i < data.length; i++) {
            const url = data[i];
            url !== '' ? imageData.push(url) : imageData.push('');
          }
          console.log(imageData)
          this.image = imageData;
        }

      },
      getActionData (index) {
        this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=850778207&single=true&output=csv').then(res=>{       
          const csv = this.$papa.parse( res.data, {
            header: true
          })
          this.$set(this,'datas',csv.data[index]);
        })
      },
      getNewsData (index) {
        this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=1354493919&single=true&output=csv').then(res=>{       
          const csv = this.$papa.parse( res.data, {
            header: true
          })
          this.$set(this,'datas',csv.data[index]);
        })
      },
      getHighlightData (index) {
        this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=1317431680&single=true&output=csv').then(res=>{       
          const csv = this.$papa.parse( res.data, {
            header: true
          })
          this.$set(this,'datas',csv.data[index]);
        })
      },
      getSpeechData (index) {
        this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=595304138&single=true&output=csv').then(res=>{       
          const csv = this.$papa.parse( res.data, {
            header: true
          })
          this.$set(this,'datas',csv.data[index]);
        })
      },
      // eventFile: function () {
      //   if (this.datas){
      //     let fileData = [];
      //     let data = this.datas.file?JSON.parse(this.datas.file):[];
      //     for (let i = 0; i < data.length; i++) {
      //       const url = data[i];
      //       url !== '' ? fileData.push(require('@/file/'+url)) : fileData.push('');
      //     }
      //     this.file = fileData;
      //   }
      // }
    }
}
</script>

<style scoped>
.title {
  padding: 2rem;
}
.background {
    background-color: #FFF!important;
}
li {
  list-style:none;
}
</style>