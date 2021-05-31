<template>
  <div>
    <div class="header">
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
    <div class="container">
      <el-row type="flex" justify="center" style="align-items: center">
        <el-col :span="8" :xs="14">
          <img
            :src="`http://www.math.fcu.edu.tw/2021_new_website/data/img/teacher/${teacher.name}.jpg`"
          />
          <div class="py-2" style="text-align: center">
            <h5 style="display: inline">{{ teacher.name }}</h5>
            <span> | {{ teacher.tit_name }}</span>
          </div>
        </el-col>
      </el-row>
      <el-tabs v-model="activeName">
        <el-tab-pane label="請益時間／課表" name="1" v-if="teacher.weekday">
          <ClassTable :datas="teacher.weekday" />
        </el-tab-pane>
        <el-tab-pane label="專長" name="2" v-if="teacher.skill">
          <h4>專長</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.skill" :key="i">
              {{ item.ski_desc }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="學歷" name="3" v-if="teacher.edu">
          <h4>學歷</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.edu" :key="i">
              {{ item.edu_xmcname }}|{{ item.edu_xddname }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="校內經驗" name="4" v-if="teacher.Expfcu">
          <h4>校內經驗</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Expfcu" :key="i">
              {{ item.unt_lname }}|{{ item.tit_name }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="校外經歷" name="5" v-if="teacher.Expother">
          <h4>校外經歷</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Expother" :key="i">
              {{ item.exp_xmcname }}|{{ item.exp_unitname }}|{{ item.exp_titname }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`發表期刊論文（${teacher.Journal.length}）`"
          name="6"
          v-if="teacher.Journal"
        >
          <h4>發表期刊論文（{{ teacher.Journal.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Journal" :key="i">
              {{ item.jou_autgroup }},{{ item.jou_paper }},{{ item.jou_name }},{{
                item.jou_vol
              }}({{ item.v_index }})
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`會議論文（${teacher.Conference.length}）`"
          name="7"
          v-if="teacher.Conference"
        >
          <h4>會議論文（{{ teacher.Conference.length }}）</h4>
          <ul>
            <li class="list-group-item" v-for="(item, i) in teacher.Conference" :key="i">
              {{ item.con_autgroup }},{{ item.con_paper }},{{ item.con_name }},{{
                item.con_stdate
              }},{{ item.con_place }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`專書及技術報告（${teacher.Book.length}）`"
          name="8"
          v-if="teacher.Book"
        >
          <h4>專書及技術報告（{{ teacher.Book.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Book" :key="i">
              {{ item.bok_name }}|作者:{{ item.bok_autgroup }}|出版日:{{ item.bok_ym }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`專書論文（${teacher.Tech.length}）`"
          name="9"
          v-if="teacher.Tech"
        >
          <h4>專書論文（{{ teacher.Tech.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Tech" :key="i">
              {{ item.tec_report }}|作者:{{ item.tec_autgroup }}|出版日:{{ item.tec_ym }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`核准專利（${teacher.Patent.length}）`"
          name="10"
          v-if="teacher.Patent"
        >
          <h4>核准專利（{{ teacher.Patent.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Patent" :key="i">
              {{ item.pat_name }}|{{ item.pat_status }}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`科技部計畫（${teacher.Most.length}）`"
          name="11"
          v-if="teacher.Most"
        >
          <h4>科技部計畫（{{ teacher.Most.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Most" :key="i">
              <div>名稱:{{ item.proj_project }}</div>
              <div>身分:{{ item.kind_name }}</div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`產學合作計畫（${teacher.InduAca.length}）`"
          name="12"
          v-if="teacher.InduAca"
        >
          <h4>產學合作計畫（{{ teacher.InduAca.length }}）</h4>
          <li class="list-group-item" v-for="(item, i) in teacher.InduAca" :key="i">
            <div>名稱:{{ item.proj_project }}</div>
            <div>身分:{{ item.kind_name }}</div>
          </li>
        </el-tab-pane>
        <el-tab-pane
          :label="`獎勵及指導學生獲獎（${teacher.Reward.length}）`"
          name="13"
          v-if="teacher.Reward"
        >
          <h4>獎勵及指導學生獲獎（{{ teacher.Reward.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Reward" :key="i">
              <div>獎項:{{ item.rew_writing }}</div>
              <div>年度:{{ item.rew_year }}</div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`教材與作品（${teacher.Material.length}）`"
          name="14"
          v-if="teacher.Material"
        >
          <h4>教材與作品（{{ teacher.Material.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.Material" :key="i">
              <div>名稱:{{ item.rev_topic }}</div>
              <div>種類:{{ item.rev_vol }}</div>
              <div>作者:{{ item.rev_autgroup }}</div>
              <div>出版年:{{ item.rev_year }}</div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          :label="`校內外演講（${teacher.speech.length}）`"
          name="15"
          v-if="teacher.speech"
        >
          <h4>校內外演講（{{ teacher.speech.length }}）</h4>
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in teacher.speech" :key="i">
              <div>名稱:{{ item.sem_title }}</div>
              <div>地點:{{ item.sem_kind }}</div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
      <el-row type="flex" justify="center"> </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClassTable from "./components/ClassTable";
export default {
  components: { ClassTable },
  data() {
    return {
      teacher: "",
      activeName: "1",
    };
  },
  mounted() {
    this.getTeacher();
  },
  methods: {
    async getTeacher() {
      await axios.get("/fcu_api/Teacher.json").then((res) => {
        var data = res.data;
        for (var i = 0; i < data.length; i++) {
          if (data[i].emp_id === location.hash.split("id=")[1]) {
            this.teacher = data[i];
          }
        }
        for (var j = 0; j < this.teacher.Book.length; j++) {
          this.teacher.Book[j].bok_ym = this.teacher.Book[j].bok_ym.substr(0, 10);
        }
        for (var k = 0; k < this.teacher.Tech.length; k++) {
          this.teacher.Tech[k].tec_ym = this.teacher.Tech[k].tec_ym.substr(0, 10);
        }
      });
    },
  },
};
</script>

<style scoped>
h4 {
  padding: 10px;
}
img {
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0;
  height: 100%;
  object-fit: cover;
}
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
.header {
  text-align: center;
  background: linear-gradient(60deg, #ff5657 50%, #fec832 50%);
  color: white;
}

.inner-header-img {
  height: 40vh;
  width: 100%;
}
.inner-header-title {
  height: 20vh;
  width: 100%;
}
.inner-header h2 {
  font-weight: 700;
  margin: 0px;
}
.flex {
  /*Flexbox for containers*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
.mobile {
  display: none;
}
/*Shrinking for mobile*/
@media (max-width: 990px) {
  .inner-header img {
    width: 80%;
  }
  .pc {
    display: none;
  }
  .mobile {
    display: inline-block;
  }
}
</style>
