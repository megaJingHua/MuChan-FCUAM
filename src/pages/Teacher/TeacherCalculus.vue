<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center title">
        <b-col>
          <TitleCard title="師資介紹-微積分中心" subTitle="Teacher presentation - Calculus"/>
        </b-col>
      </b-row>
      <b-row >
        <!-- 師資介紹選項 -->
        <b-col lg="3" md="12" sm="12" class="colCss colButton">
          <b-button squared class="buttonCss animated zoomIn m-3" variant="light" href="#/teacher">
            <h5>應數系</h5>
            <hr class="am_hr">
          </b-button>
          <b-button squared class="buttonCss animated zoomIn m-3" variant="light" href="#/teacher_calculus">
            <h5>微積分中心</h5>
            <hr class="calculus_hr">
          </b-button>
          <b-button squared class="buttonCss animated zoomIn m-3" variant="light" href="#/teacher_office">
            <h5>系辦公室</h5>
            <hr class="office_hr">
          </b-button>
        </b-col>
        <!-- 介紹內容 -->
        <b-col lg="9" md="12" sm="12">
          <div class="d-flex justify-content-center" v-if="loading">
            <b-spinner variant="warning" label="Spinning"></b-spinner>
          </div>
          <b-card
            class="overflow-hidden m-3 animated zoomIn"
            v-for="(text, index) in this.teacher" :key="index">
            <b-row no-gutters align-h="around">
              <b-col md="3" sm="5" class="photoCol">
                <b-img center :src="getPhoto(text.name+'.jpeg')" class="rounded-0 photoCss"></b-img>
              </b-col>
              <b-col md="8" sm="7">
                <b-card-text>
                  <h5 style="display:block" class="pt-2">{{text.name}}</h5>
                  <h6 style="display:block">{{text.tit_name}}</h6><hr>
                  <p v-if="text.per_email">學校信箱：{{text.per_email}}</p>
                  <p v-else>個人信箱：{{text.emp_email}}</p>
                </b-card-text>
                <b-button variant="outline-secondary" size="sm" :href="'#/teacher_container?'+text.emp_id">詳細介紹</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import TitleCard from '@/components/TitleCard'
export default {
  components: {
    TitleCard
  },
  data() {
    return {
      teacher: Object,
      loading: true
    }
  },
  mounted (){
    this.getTeacher();
  },
  methods:{
    getTeacher: function () {
      this.$axios.get('fcuapi/api/TeacherInfo/Teacher',{params:{client_id:'22d0330f24e74fe6b96ddca5d1e717c9'}}).then(res=>{
        this.teacher = res.data.UserInfo;
        this.loading = false;
      })
    },
    getPhoto: function (src) {
      try {
        return require("@/assets/teacher-photo/" + src);
      } catch (err) {
        return require("@/assets/teacher-photo/undefind.jpg");
      }
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
  width: auto;
  height: 100%;

}
.buttonCss:hover hr{
  width: 100%;
}
hr {
  transition: 0.8s;
}
.am_hr {
  width: 100px;
  border: solid 1px #f29439;
  background-color: #f29439;
}
.calculus_hr {
  width: 100px;
  border: solid 1px #01a5d9;
  background-color: #01a5d9;
}
.office_hr {
  width: 100px;
  border: solid 1px #fec526;
  background-color: #fec526;
}
</style>