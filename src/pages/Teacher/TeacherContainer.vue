<template>
<div>
  <b-container class="containerCss">
    <!-- loading -->
    <Spinner v-if="loading"/>
    <!-- 畫面 -->
    <b-row class="justify-content-md-center title" v-if="!loading">
      <b-col>
        <TitleCard 
          :title="teacher.name"
          :tit="teacher.tit_name"
          :text="{email: this.email, phone: teacher.emp_ext}"
          :img="teacher.name+'.jpg'"/>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center m-3 weekdayRowCss" v-if="!loading">
      <b-col lg="4" md="6" sm="12" class="colCss">
        <b-button
          class="buttonCss timeButton animated zoomIn"
          variant="outline-info" 
          @click="getWeekday()"><h5>請益時間／課表</h5>
        </b-button>
      </b-col>
      <ClassTable v-if="WeekdayOpen" :datas="this.Weekday"/>
    </b-row>
    <b-row class="justify-content-md-center m-3" v-if="!loading">
      <b-col lg="3" md="6" sm="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getSkill()">
          <h5>專長</h5><hr>
        </b-button>
        <div v-if="skillOpen">
          <h6 class="dataText" v-for="(data, index) in this.skill" :key="index">{{data.ski_desc_c}}</h6>
        </div>
      </b-col>
      <b-col lg="3" md="6" sm="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getEdu()">
          <h5>學歷</h5><hr>
        </b-button>
        <div v-if="EduOpen">
          <h6 class="dataText" v-for="(data, index) in this.Edu" :key="index">{{data.edu_xmcname}} {{data.edu_xddname}} {{data.xdl_name}}</h6>
        </div>
      </b-col>
      <b-col lg="3" md="6" sm="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getExpfcu()">
          <h5>校內經驗</h5><hr>
        </b-button>
        <div v-if="ExpfcuOpen">
          <h6 class="dataText" v-for="(data, index) in this.Expfcu" :key="index">{{data.unt_lname}} {{data.tit_name}}</h6>
        </div>
      </b-col>
      <b-col lg="3" md="6" sm="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getExpother()">
          <h5>校外經歷</h5><hr>
        </b-button>
        <div v-if="this.Expother.length==0 & this.ExpotherOpen"><h6>無校外經歷</h6></div>
        <div v-else-if="this.ExpotherOpen"><h6 class="dataText" v-for="(data, index) in this.Expother" :key="index">{{data.exp_xmcname}} {{data.exp_titname}}</h6></div>
      </b-col>
    </b-row>
    <!-- 電腦版 -->
    <div v-if="window.width>576">
    <b-row class="justify-content-md-center m-3 animated slideInUp" v-if="!loading">
      <!-- <b-col cols="12" class="bottomRowTitle dataArea">
        <h5 class="dataTitle" style="text-align: center">論文及參與計畫</h5>
        <hr>
      </b-col> -->
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getJournal()">
          <h5>發表期刊論文（{{this.detail.Journal.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Journal.length >0 & JournalOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Journal" :key="index">{{data.jou_autgroup}},{{data.jou_paper}},{{data.jou_name}},{{data.jou_vol}},{{data.jou_ym}} ({{data.v_index}})</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getConference()">
          <h5>會議論文（{{this.detail.Conference.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Conference.length > 0 & ConferenceOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Conference" :key="index">{{data.con_autgroup}},{{data.con_paper}},{{data.con_name}},{{data.con_vol}},{{data.con_stdate}},{{data.con_place}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getBook()">
          <h5>專書及技術報告（{{this.detail.Book.length}}）</h5><hr>
        </b-button>
        <TablePage v-if="BookOpen & this.Book.length > 0" :datas="this.Book" :fields="Bookfields" :date="'bok_ym'"/>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getTech()">
          <h5>專書論文（{{this.detail.Tech.length}}）</h5><hr>
        </b-button>
        <TablePage v-if="TechOpen & this.Tech.length > 0" :datas="this.Tech" :fields="Techfields" :date="'tec_ym'"/>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getPatent()">
          <h5>核准專利（{{this.detail.Patent.length}}）</h5><hr>
        </b-button>
        <TablePage v-if="PatentOpen & this.Patent.length > 0" :datas="this.Patent" :fields="Patentfields" :date="'pat_stdate'" :end_date="'pat_eddate'"/>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getMost()">
          <h5>科技部計畫（{{this.detail.Most.length}}）</h5><hr>
        </b-button>
        <TablePage v-if="MostOpen & this.Most.length > 0" :datas="this.Most" :fields="Mostfields"/>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getInduAca()">
          <h5>產學合作計畫（{{this.detail.InduAca.length}}）</h5><hr>
        </b-button>
        <TablePage v-if="InduAcaOpen & this.InduAca.length > 0" :datas="this.InduAca" :fields="InduAcafields"/>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getReward()">
          <h5>獎勵及指導學生獲獎（{{this.detail.Reward.length}}）</h5><hr>
        </b-button>
        <TablePage v-if="RewardOpen & this.Reward.length > 0" :datas="this.Reward" :fields="Rewardfields" :date="'rew_date'"/>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getMaterial()">
          <h5>教材與作品（{{this.detail.Material.length}}）</h5><hr>
        </b-button>
        <TablePage v-if="MaterialOpen & this.Material.length > 0" :datas="this.Material" :fields="Materialfields" />
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getSpeech()">
          <h5>校內外演講（{{this.detail.speech.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Speech.length > 0 & SpeechOpen">
          <TablePage v-if="SpeechOpen & this.Speech.length > 0" :datas="this.Speech" :fields="Speechfields" :date="'sem_stdate'" />
        </div>
      </b-col>
    </b-row>
    </div>
    <!-- 手機板本 -->
    <div v-if="window.width<=576">
    <b-row class="justify-content-md-center m-3 animated slideInUp" v-if="!loading">
      <!-- <b-col cols="12" class="bottomRowTitle dataArea">
        <h5 class="dataTitle" style="text-align: center">論文及參與計畫</h5>
        <hr>
      </b-col> -->
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getJournal()">
          <h5>發表期刊論文（{{this.detail.Journal.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Journal.length >0 & JournalOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Journal" :key="index">{{data.jou_autgroup}},"{{data.jou_paper}}",{{data.jou_name}},{{data.jou_vol}},{{data.jou_ym}} ({{data.v_index}})</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getConference()">
          <h5>會議論文（{{this.detail.Conference.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Conference.length > 0 & ConferenceOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Conference" :key="index">{{data.con_autgroup}},"{{data.con_paper}}",{{data.con_name}},{{data.con_vol}},{{data.con_stdate}},{{data.con_place}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getBook()">
          <h5>專書及技術報告（{{this.detail.Book.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Book.length > 0 & BookOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Book" :key="index">{{data.bok_categ}},{{data.bok_autgroup}},{{data.bok_name}},{{data.bok_edit}},{{data.xnt_name}},{{data.bok_ym}},{{data.bok_source}},{{data.bok_string}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getTech()">
          <h5>專書論文（{{this.detail.Tech.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Tech.length > 0 & TechOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Tech" :key="index">{{data.tec_autgroup}},{{data.tec_report}},{{data.tec_editor}},{{data.tec_org}},{{data.tec_ym}},{{data.tec_vol}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getPatent()">
          <h5>核准專利（{{this.detail.Patent.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Patent.length > 0 & PatentOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Patent" :key="index">{{data.pat_name}},{{data.pat_category}},{{data.pat_docuno}},{{data.pat_stdate}},{{data.pat_eddate}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getMost()">
          <h5>科技部計畫（{{this.detail.Most.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Most.length > 0 & MostOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Most" :key="index">{{data.proj_project}},{{data.proj_start_date}},{{data.proj_end_date}},{{data.proj_contract}},{{data.proj_name}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getInduAca()">
          <h5>產學合作計畫（{{this.detail.InduAca.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.InduAca.length > 0 & InduAcaOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.InduAca" :key="index">{{data.proj_project}},{{data.proj_start_date}},{{data.proj_end_date}},{{data.kind_name}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getReward()">
          <h5>獎勵及指導學生獲獎（{{this.detail.Reward.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Reward.length > 0 & RewardOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Reward" :key="index">{{data.rew_year}},{{data.rew_writing}},{{data.rew_org}},{{data.rew_date}},{{data.rew_memo}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getMaterial()">
          <h5>教材與作品（{{this.detail.Material.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Material.length > 0 & MaterialOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Material" :key="index">{{data.id}},{{data.rev_magazine}},{{data.rev_topic}},{{data.rev_autgroup}},{{data.rev_vol}}</li>
          </ol>
        </div>
      </b-col>
      <b-col cols="12" class="colCss">
        <b-button squared class="buttonCss animated zoomIn" variant="light" @click="getSpeech()">
          <h5>校內外演講（{{this.detail.speech.length}}）</h5><hr>
        </b-button>
        <div class="olPadding" v-if="this.Speech.length > 0 & SpeechOpen">
          <ol class="olData">
            <li v-for="(data, index) in this.Speech" :key="index">{{data.sem_title}},{{data.sem_kind}},{{data.sem_stdate}}</li>
          </ol>
        </div>
      </b-col>
    </b-row>
    </div>
  </b-container>
</div>
</template>

<script>
import TitleCard from '@/pages/Teacher/TeacherTitleCard'
import TablePage from '@/pages/Teacher/TeacherTablePage'
import ClassTable from '@/pages/Teacher/ClassTable'
import Spinner from '@/components/Spinner'

export default {
  components: {
    TitleCard,
    TablePage,
    Spinner,
    ClassTable
  },
  data() {
    return {
      loading: true,
      window: {
        width: 0,
        height: 0
      },
      detail: Object, //詳細資料
      skill: [],//專長
      skillOpen: false,
      teacher: Object,//教師資料
      email: String,
      Weekday: [],//教師課表及請益時間
      WeekdayOpen: false,
      Expfcu: [], //校內經驗
      ExpfcuOpen: false,
      Expother: [],//校外經歷
      ExpotherOpen: false,
      Edu: [],//學歷
      EduOpen: false,
      Journal: [],//發表期刊論文
      JournalOpen: false,
      Conference: [],//會議論文
      ConferenceOpen: false,
      Book: [],//專書及技術報告
      BookOpen: false,
      Bookfields: [
        {key: 'bok_categ', label: '類別', thStyle: {color: '#4b2e83'}}, 
        {key: 'bok_name', label: '書名', thStyle: {color: '#4b2e83'}}, 
        {key: 'bok_autgroup', label: '作者群', thStyle: {color: '#4b2e83'}}, 
        {key: 'bok_edit', label: '出版單位', thStyle: {color: '#4b2e83'}}, 
        {key: 'xnt_name', label: '出版單位國別', thStyle: {color: '#4b2e83'}}, 
        {key: 'bok_ym', label: '出版日期', thStyle: {color: '#4b2e83'}}, 
        {key: 'bok_source', label: '內容來源', thStyle: {color: '#4b2e83'}}, 
        {key: 'bok_string', label: '備註', thStyle: {color: '#4b2e83'}}],
      Tech: [],//專書論文
      TechOpen: false,
      Techfields: [
        {key: 'tec_autgroup', label: '作者群', thStyle: {color: '#4b2e83'}},
        {key: 'tec_report', label: '論文題目', thStyle: {color: '#4b2e83'}},
        {key: 'tec_editor', label: '書名(編輯者)', thStyle: {color: '#4b2e83'}},
        {key: 'tec_org', label: '出版單位', thStyle: {color: '#4b2e83'}},
        {key: 'tec_ym', label: '出版日期', thStyle: {color: '#4b2e83'}},
        {key: 'tec_vol', label: '卷期別頁數', thStyle: {color: '#4b2e83'}}],
      Patent: [],//核准專利
      PatentOpen: false,
      Patentfields: [
        {key: 'pat_name', label: '專利名稱', thStyle: {color: '#4b2e83'}},
        {key: 'pat_category', label: '類別', thStyle: {color: '#4b2e83'}},
        {key: 'pat_docuno', label: '證書號', thStyle: {color: '#4b2e83'}},
        {key: 'pat_stdate', label: '日期(起)', thStyle: {color: '#4b2e83'}},
        {key: 'pat_eddate', label: '日期(迄)', thStyle: {color: '#4b2e83'}}],
      Most: [],//科技部計畫
      MostOpen: false,
      Mostfields: [
        {key: 'proj_project', label: '計畫名稱', thStyle: {color: '#4b2e83'}},
        {key: 'proj_start_date', label: '日期(起)', thStyle: {color: '#4b2e83'}},
        {key: 'proj_end_date', label: '日期(迄)', thStyle: {color: '#4b2e83'}},
        {key: 'proj_contract', label: '計畫編號', thStyle: {color: '#4b2e83'}},
        {key: 'kind_name', label: '擔任工作', thStyle: {color: '#4b2e83'}}],
      InduAca: [],//產學合作計畫
      InduAcaOpen: false,
      InduAcafields: [
        {key: 'proj_project', label: '計畫名稱', thStyle: {color: '#4b2e83'}},
        {key: 'proj_start_date', label: '日期(起)', thStyle: {color: '#4b2e83'}},
        {key: 'proj_end_date', label: '日期(迄)', thStyle: {color: '#4b2e83'}},
        {key: 'kind_name', label: '擔任工作', thStyle: {color: '#4b2e83'}}],
      Reward: [],//獎勵及指導學生獲獎
      RewardOpen: false,
      Rewardfields: [
        {key: 'rew_year', label: '年度', sortable: true, thStyle: {color: '#4b2e83'}}, 
        {key: 'rew_writing', label: '獲獎名稱', thStyle: {color: '#4b2e83'}}, 
        {key: 'rew_org', label: '受獎單位', thStyle: {color: '#4b2e83'}}, 
        {key: 'rew_date', label: '獲獎日期', thStyle: {color: '#4b2e83'}}, 
        {key: 'rew_memo', label: '備註', thStyle: {color: '#4b2e83'}}],
      Material: [], //教材與作品
      MaterialOpen: false,
      Materialfields: [
        {key: 'id', label: '學年', thStyle: {color: '#4b2e83'}},
        {key: 'rev_magazine', label: '出版單位', thStyle: {color: '#4b2e83'}},
        {key: 'rev_topic', label: '作品名稱', thStyle: {color: '#4b2e83'}},
        {key: 'rev_autgroup', label: '作者群', thStyle: {color: '#4b2e83'}},
        {key: 'rev_vol', label: '作品類別', thStyle: {color: '#4b2e83'}}],
      Speech: [], //校內外演講
      SpeechOpen: false,
      Speechfields: [
        {key: 'sem_title', label: '演講題目', thStyle: {color: '#4b2e83'}},
        {key: 'sem_kind', label: '邀請單位', thStyle: {color: '#4b2e83'}},
        {key: 'sem_stdate', label: '演講日期', thStyle: {color: '#4b2e83'}}
      ]
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
  mounted (){
    this.getTestr();
    this.getDetail();
  },
  methods:{
    // 本地端開發的 url: 'https://cors-anywhere.herokuapp.com/http://www.math.fcu.edu.tw + 原本的 url'
    eventNavHome() {
      localStorage.homePage = '';
    },
    handleResize() {
      this.window.width = window.innerWidth;
    },
    getTestr: function () {
      this.$axios.get('/fcu_api/Teacher.json').then(res=>{
        for (var i = 0; i < res.data.length; i++) {
          if( res.data[i].emp_id === location.hash.split('?')[1]){
            this.teacher = res.data[i];
          }
        }
        this.teacherEmail();
      })
    },
    getDetail: function () {
      var id = location.hash.split('?')[1];
      this.$axios.get('/fcu_api/'+id+'.json').then(res=>{
        this.detail = res.data;
        this.loading = false;
      })
    },
    teacherEmail: function () {
      if (this.teacher.per_email) {
        this.email = this.teacher.per_email.split('@');
      }
      else if (this.teacher.emp_email) {
        this.email = this.teacher.emp_email.split('@');
      }
    },
    getSkill: function () {
      if (!this.skillOpen) {
        this.skill = this.detail.skill;
        this.skillOpen = true;
      }
      else {this.skillOpen = false;}
    },
    getWeekday: function () {
      if (this.WeekdayOpen & this.Weekday.length == 0) {
        this.WeekdayOpen = true;
      }
      else if (this.WeekdayOpen) {
        this.WeekdayOpen = false;
      }
      else {
        let weekday = []
        this.detail.weekday.forEach(weeks => { if (weeks.week !== 6 && weeks.week !== 7){ weekday.push(weeks)}});
        this.Weekday = weekday;
        this.WeekdayOpen = true;
      }
    },
    getExpfcu: function () {
      this.Expfcu = this.detail.Expfcu.reverse();
      if (!this.ExpfcuOpen) { this.ExpfcuOpen = true; }
      else {this.ExpfcuOpen = false;}
    },
    getExpother: function () {
      this.Expother = this.detail.Expother.reverse();
      if (!this.ExpotherOpen){ this.ExpotherOpen = true; }
      else {this.ExpotherOpen = false;}
    },
    getEdu: function () {
      this.Edu = this.detail.edu.reverse();
      if (!this.EduOpen){ this.EduOpen = true; }
      else { this.EduOpen = false; }
    },
    getJournal: function () {
      if (this.JournalOpen) {
        this.JournalOpen = false;
      }
      else if ( !this.JournalOpen & this.Journal.length > 0) {
        this.JournalOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Journal.length; i++){
          this.detail.Journal[i].jou_ym = this.detail.Journal[i].jou_ym.split('T')[0];
        }
        this.detail.Journal.sort(function(a,b){return Date.parse(b.jou_ym) - Date.parse(a.jou_ym)});
        this.Journal = this.detail.Journal;
        this.JournalOpen = true;
      }
    },
    getConference: function () {
      if (this.ConferenceOpen) {
        this.ConferenceOpen = false;
      }
      else if ( !this.ConferenceOpen & this.Conference.length > 0) {
        this.ConferenceOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Conference.length; i++){
          this.detail.Conference[i].con_stdate = this.detail.Conference[i].con_stdate.split('T')[0];
          this.detail.Conference[i].con_eddate = this.detail.Conference[i].con_eddate.split('T')[0];
        }
        this.detail.Conference.sort(function(a,b){return Date.parse(b.con_stdate) - Date.parse(a.con_stdate)});
        this.Conference = this.detail.Conference;
        this.ConferenceOpen = true;
      }
    },
    getBook: function () {
      if (this.BookOpen) {
        this.BookOpen = false;
      }
      else if ( !this.BookOpen & this.Book.length > 0) {
        this.BookOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Book.length; i++){
          this.detail.Book[i].bok_ym = this.detail.Book[i].bok_ym.split('T')[0];
        }
        this.detail.Book.sort(function(a,b){return Date.parse(b.bok_ym) - Date.parse(a.bok_ym)});
        this.Book = this.detail.Book
        this.BookOpen = true;
      }
    },
    getTech: function () {
      if (this.TechOpen) {
        this.TechOpen = false;
      }
      else if ( !this.TechOpen & this.Tech.length > 0) {
        this.TechOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Tech.length; i++){
          this.detail.Tech[i].tec_ym = this.detail.Tech[i].tec_ym.split('T')[0];
        }
        this.detail.Tech.sort(function(a,b){return Date.parse(b.tec_ym) - Date.parse(a.tec_ym)});
        this.Tech = this.detail.Tech;
        this.TechOpen = true;
      }
    },
    getPatent: function () {
      if (this.PatentOpen) {
        this.PatentOpen = false;
      }
      else if ( !this.PatentOpen & this.Patent.length > 0) {
        this.PatentOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Patent.length; i++){
          this.detail.Patent[i].pat_stdate = this.detail.Patent[i].pat_stdate.split('T')[0];
          this.detail.Patent[i].pat_eddate = this.detail.Patent[i].pat_eddate.split('T')[0];
        }
        this.detail.Patent.sort(function(a,b){return Date.parse(b.pat_stdate) - Date.parse(a.pat_stdate)});
        this.Patent = this.detail.Patent;
        this.PatentOpen = true;
      }
    },
    getMost: function () {
      if (this.MostOpen) {
        this.MostOpen = false;
      }
      else if ( !this.MostOpen & this.Most.length > 0) {
        this.MostOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Most.length; i++){
          this.detail.Most[i].proj_start_date = this.detail.Most[i].proj_start_date.split('T')[0];
          this.detail.Most[i].proj_end_date = this.detail.Most[i].proj_end_date.split('T')[0];
        }
        this.detail.Most.sort(function(a,b){return Date.parse(b.proj_start_date) - Date.parse(a.proj_start_date)});
        this.Most = this.detail.Most;
        this.MostOpen = true;
      }
    },
    getInduAca: function () {
      if (this.InduAcaOpen) {
        this.InduAcaOpen = false;
      }
      else if ( !this.InduAcaOpen & this.InduAca.length > 0) {
        this.InduAcaOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.InduAca.length; i++){
          this.detail.InduAca[i].proj_start_date = this.detail.InduAca[i].proj_start_date.split('T')[0];
          this.detail.InduAca[i].proj_end_date = this.detail.InduAca[i].proj_end_date.split('T')[0];
        }
        this.detail.InduAca.sort(function(a,b){return Date.parse(b.proj_start_date) - Date.parse(a.proj_start_date)});
        this.InduAca = this.detail.InduAca;
        this.InduAcaOpen = true;
      }
    },
    getReward: function () {
      if (this.RewardOpen) {
        this.RewardOpen = false;
      }
      else if ( !this.RewardOpen & this.Reward.length > 0) {
        this.RewardOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Reward.length; i++){
          this.detail.Reward[i].rew_date = this.detail.Reward[i].rew_date.split('T')[0];
        }
        this.detail.Reward.sort(function(a,b){return Date.parse(b.rew_date) - Date.parse(a.rew_date)});
        this.Reward = this.detail.Reward;
        this.RewardOpen = true;
      }
    },
    getMaterial: function () {
      if (this.MaterialOpen){
        this.MaterialOpen = false;
      }
      else if ( !this.MaterialOpen & this.Material.length > 0) {
        this.MaterialOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.Material.length; i++){
          this.detail.Material[i].id = this.detail.Material[i].id.split('T')[0];
        }
        this.Material = this.detail.Material;
        this.MaterialOpen = true;
      }
    },
    getSpeech: function () {
      if (this.SpeechOpen){
        this.SpeechOpen = false;
      }
      else if ( !this.SpeechOpen & this.Speech.length > 0) {
        this.SpeechOpen = true;
      }
      else {
        for (var i = 0; i < this.detail.speech.length; i++){
          this.detail.speech[i].sem_stdate = this.detail.speech[i].sem_stdate.split('T')[0];
        }
        this.detail.speech.sort(function(a,b){return Date.parse(b.sem_stdate) - Date.parse(a.sem_stdate)});
        this.Speech = this.detail.speech;
        this.SpeechOpen = true;
      }
    }
  }
}
</script>

<style scoped>
.containerCss {
  margin-top: 20px;
}
.weekdayRowCss {
  padding-bottom: 15px;
  border-bottom: solid 1px #efece4;
}
.timeButton h5{
  margin-bottom: 0px;
}
.buttonCss {
  width: 100%;
  margin-bottom: 15px;
  
  border:1px solid #b39ddf;
  border-radius: 10px !important;
}
.buttonCss:hover hr{
  border: solid 1px #01a5d9;
  background-color: #01a5d9;
  width: 90%;
}
hr {
  margin: 10px auto;
  border: solid 1px #fec526;
  background-color: #fec526;
  transition: 0.8s;
  width: 50px;
}
.bottomRowTitle {
  margin-top: 10px;
  padding: 15px; 
  border-top: solid 1px #efece4; 
}
</style>