<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center title">
        <b-col>
          <TitleCard title="師資介紹-系辦公室" img="teacher_for.svg"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <!-- 介紹內容 -->
        <b-col lg="9" md="12" sm="12">
          <div v-for="(teacher, index) in datas" :key="index">
            <h5>{{teacher.specail}}</h5>
            <b-card class="overflow-hidden m-3 animated zoomIn">
              <b-row no-gutters align-h="around">
                <b-col lg="3" md="3" sm="5" class="photoCol">
                  <b-img center :src="eventPhone(teacher.name+'.png')" class="rounded-0 photoCss"></b-img>
                </b-col>
                <b-col lg="8" md="8" sm="7">
                  <b-card-text>
                    <h5 style="display:block">{{teacher.name}}</h5>
                    <h6 style="display:block">{{teacher.specail}}</h6><hr>
                    <p>分機：{{teacher.phone}}</p>
                    <p>
                      信箱：{{email[index][0]}}
                      <b-img class="emailCss" :src="eventPhone('email.png')"></b-img>
                      {{email[index][1]}}</p>
                  </b-card-text>
                  <b-button v-b-modal="'modal-'+teacher.id" variant="outline-secondary" size="sm">業務介紹</b-button>
                  <b-modal :id="'modal-'+teacher.id" title="業務介紹">
                    <ol>
                      <li class="my-4" v-for="(text, index) in teacher.content" :key="index">{{text}}</li>
                    </ol>
                  </b-modal>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import TitleCard from '@/components/TitleCard'
import teachers from '@/datas/TeacherOffice'

export default {
  components: {
    TitleCard
  },
  data() {
    return {
      datas: teachers.datas,
      email: []
    }
  },
  mounted() {
    this.changeEmail();
  },
  methods:{
    eventPhone: function (src) {
      if (src === 'email.png') {
        return require('@/assets/'+ src);
      }
      else if (src) {
        return require('@/assets/teacher-office-photo/'+ src);
      }
    },
    changeEmail: function() {
      for (var i=0 ; i < this.datas.length ; i++){
        var email = this.datas[i].email.split('@');
        this.email.push(email);
      }
    }
  }
}
</script>

<style scoped>
.photoCol {
  overflow: hidden;
}
.photoCss {
  width: 100%;
  height: auto;
}
.emailCss {
  width: 13px;
}
</style>