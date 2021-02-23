<template>
<div>
  <b-container>
    <b-row class="justify-content-md-center title">
      <b-col>
        <TitleCard title="師資介紹-應數系" img="teacher_for.svg"/>
      </b-col>
    </b-row>
    <!-- loading -->
    <Spinner v-if="loading"/>
    <b-row class="justify-content-md-center">
      <!-- 介紹內容 -->
      <b-col lg="9" md="12" sm="12" v-if="!loading">
        <div v-for="(type, index) in teacherType" :key="index">
          <h5>{{type}}</h5>
          <div v-for="(teacher, index) in teachers" :key="index">
          <b-card
            class="overflow-hidden m-3 animated zoomIn"
            v-if="teacher.specail.substring(2) === type"
            >
            <b-row no-gutters align-h="around">
              <b-col lg="3" md="3" sm="5" class="photoCol">
                <b-img center :src="getPhoto(teacher.name+'.jpg')" class="rounded-0 photoCss"></b-img>
              </b-col>
              <b-col lg="8" md="8" sm="7">
                <b-card-text>
                  <!-- 姓名 -->
                  <h5 class="m-0 p-0 pt-2" style="display:inline-block">{{teacher.name}} │</h5>
                  <p class="m-0 p-0" style="display:inline-block">{{teacher.tit_name}}</p><hr class="m-2">
                  <!-- 信箱 -->
                  <span v-if="teacher.per_email" >
                    <span class="detailTitleCss">學校信箱：</span>
                    {{changeEmail(teacher.per_email)[0]}}
                    <b-img class="emailCss" :src="getPhoto('email.png')"></b-img>
                    {{changeEmail(teacher.per_email)[1]}}
                  </span>
                  <span class="m-0 p-0" v-else-if="teacher.emp_email">
                    <span class="detailTitleCss">個人信箱：</span>
                    {{changeEmail(teacher.emp_email)[0]}}
                    <b-img class="emailCss" :src="getPhoto('email.png')"></b-img>
                    {{changeEmail(teacher.emp_email)[1]}}</span>
                  <!-- 專長 -->
                  <p class="m-0 p-0" v-for="(data, index) in teachersSkill" :key="index">
                    <span
                      v-if="data.emp_id === teacher.emp_id && data.skills.length > 0"
                      class="detailTitleCss"
                    >專長：
                      <span 
                        v-for="(skill, index) in data.skills"
                        :key="index"
                        style="font-weight:100; color:black"
                      >{{skill.ski_desc_c}}
                        <span v-if="index!==data.skills.length-1">、</span>
                      </span>
                    </span>
                  </p>
                  <!-- 分機 -->
                  <p class="m-0 p-0 detailTitleCss" v-if="teacher.emp_ext!==' '">分機：
                    <span style="color:black">{{teacher.emp_ext}}</span>
                  </p>
                </b-card-text>
                <b-button 
                  style="margin-right:10px"
                  variant="outline-secondary" size="sm" 
                  :href="'#/teacher_container?'+teacher.emp_id">詳細介紹</b-button>
                <b-button v-if="teacher.per_url" variant="outline-secondary" size="sm" :href="teacher.per_url">個人網頁</b-button>
              </b-col>
            </b-row>
          </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import TitleCard from '@/components/TitleCard'
import teacherType from '@/datas/TeacherTit'
import Spinner from '@/components/Spinner'

export default {
  components: {
    TitleCard,
    Spinner
  },
  data() {
    return {
      teacherType: teacherType.type,
      teachers: Object,
      loading: true,
      teachersSkill: [],
      isactive: ""
    }
  },
  mounted (){
    this.getTestr();
  },
  methods:{
    // 本地端開發的 url: 'https://cors-anywhere.herokuapp.com/http://www.math.fcu.edu.tw + 原本的 url'
    getTestr: function () {
      this.$axios.get('/fcu_api/Teacher.json').then(res=>{
        this.teachers = res.data;
        for (var i = 0; i < this.teachers.length; i++){
          this.getTeachersSkill(this.teachers[i].emp_id);
          if ( (this.teachers[i].name == "李英豪") | (this.teachers[i].name == "黃新峰") | (this.teachers[i].name == "楊懿淑") | (this.teachers[i].name == "王凱城") ) {
            this.teachers[i].per_url ="";
          }
          if ( (this.teachers[i].name == "王凱城") | (this.teachers[i].name == "林世勇") ) {
            this.teachers.splice(i, 1);
          }
          
        }
        this.loading = false;
      })
    },
    getTeachersSkill: function (teacherId) {
      this.$axios.get('/fcu_api/'+teacherId+'.json').then(res=>{
        this.teachersSkill.push({
          emp_id: teacherId,
          skills: res.data.skill
        });
      })
    },
    getPhoto: function (src) {
      if (src === 'email.png') {
        return require('@/assets/'+ src);
      } else {
        try {
          return require("@/assets/teacher-photo/" + src);
        } catch (err) {
          return require("@/assets/teacher-photo/undefind.jpg");
        }
      }
    },
    changeEmail: function(email) {
      return email.split('@');
    },
    openSkill: function(index) {
      this.isactive = index;
    }
  }
}
</script>

<style scoped>
.buttonCss {
  width: 90%;
  text-shadow: 0.1em 0.1em 0.1em #efece4;
}
.photoCol {
  overflow: hidden;
}
.photoCss {
  width: 100%;
}
.buttonCss:hover hr{
  width: 100%;
}
hr {
  transition: 0.8s;
}
.emailCss {
  width: 13px;
}
.detailTitleCss {
  font-weight:500;
  color:#4b2e83;
}
.dataCss {
  -webkit-line-clamp: 1; /* 設置超出多少行隐藏 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  /* 設置 display 為 -webkit-box 或者 -webkit-inline-box 時為隐藏狀態 */
}
</style>