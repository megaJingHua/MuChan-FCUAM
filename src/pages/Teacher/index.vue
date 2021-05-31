<template>
  <div>
    <Header title="師資介紹" />
    <div class="container pt-5">
      <h5>特聘教授</h5>
      <hr />
      <TeacherCard :teacher="th17" />

      <h5>專任教授</h5>
      <hr />
      <TeacherCard :teacher="th15" />

      <h5>專任副教授</h5>
      <hr />
      <TeacherCard :teacher="th14" />

      <h5>專任助理教授</h5>
      <hr />
      <TeacherCard :teacher="th13" />

      <h5>特約講座</h5>
      <hr />
      <TeacherCard :teacher="th10" />

      <h5>兼任副教授</h5>
      <hr />
      <TeacherCard :teacher="th03" />

      <h5>兼任助理教授</h5>
      <hr />
      <TeacherCard :teacher="th02" />

      <h5>兼任講師</h5>
      <hr />
      <TeacherCard :teacher="th01" />

      <h5>系辦公室</h5>
      <hr />
      <TeacherCard :teacher="th" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import _ from "lodash";
import Header from "@/components/Header";
import TeacherCard from "./components/TeacherCard";
export default {
  components: { Header, TeacherCard },
  data() {
    return {
      teacherKey: 0,
      th01: [],
      th02: [],
      th03: [],
      th10: [],
      th13: [],
      th14: [],
      th15: [],
      th17: [],
      th: [
        {
          name: "蔡佩憙",
          specail: "00組員",
          emp_email: "phtsai@fcu.edu.tw",
          skill: [
            {
              ski_desc_c:
                "學生課務處理：選課抵免、註冊選課、加退選、成績核對審核、離校手續、轉系作業",
            },
            { ski_desc_c: "排課作業：全校微積分排課、大學部專業課程" },
            { ski_desc_c: "招生作業：甄試申請入學、新生座談、簡介製作" },
            { ski_desc_c: "輔系/雙主修/學分學程學生輔導：學分抵免、第二專長認定" },
            {
              ski_desc_c:
                "庶務管理：預算編列、經費執行及核銷、非電腦設備採購、 財產管理、彙整換發全系教職員年度汽車通行證、教職員教育補助費彙整申請、全系物品修繕維修等",
            },
            {
              ski_desc_c:
                "學術發展基金經費申請：運動競賽獎學金、專業科目成績優良獎學金、系學會經費補助申請等",
            },
            {
              ski_desc_c:
                "會議記錄：系務會議、校務會議報告、系課程委員會、系招生委員會、轉系會議等",
            },
            { ski_desc_c: "優良導師、教師遴選作業" },
            {
              ski_desc_c: "學生事務：系週會、系師生座談會、系學會指導、學生諮商轉介聯絡",
            },
          ],
          emp_ext: "#5102",
        },
        {
          name: "廖盈宣",
          specail: "00組員",
          emp_email: "yhliao@mail.fcu.edu.tw",
          skill: [
            { ski_desc_c: "應數系碩、博士班相關業務" },
            { ski_desc_c: "應數系辦理推廣教育學分班及非學分班相關業務" },
            { ski_desc_c: "應數系教師主持之教育部計畫" },
            { ski_desc_c: "應數系專屬款預算管理核銷" },
            { ski_desc_c: "研討會及演講相關事務" },
            { ski_desc_c: "聘審作業" },
            { ski_desc_c: "工讀生管理" },
            { ski_desc_c: "公文收發" },
            { ski_desc_c: "應數系評鑑各項業務" },
          ],
          emp_ext: "#5103",
        },
      ],
    };
  },
  mounted() {
    this.getTeacher();
  },
  methods: {
    getTeacher() {
      axios
        .get("/fcu_api/Teacher.json")
        .then((res) => {
          var data = res.data;
          var initData = _.groupBy(data, "specail");
          this.th01 = _.orderBy(initData["01兼任講師"], ["name"], ["asc"]);
          this.th02 = _.orderBy(initData["02兼任助理教授"], ["name"], ["asc"]);
          this.th03 = _.orderBy(initData["03兼任副教授"], ["name"], ["asc"]);
          this.th10 = _.orderBy(initData["10特約講座"], ["name"], ["asc"]);
          this.th13 = _.orderBy(initData["13專任助理教授"], ["name"], ["asc"]);
          this.th14 = _.orderBy(initData["14專任副教授"], ["name"], ["asc"]);
          this.th15 = _.orderBy(initData["15專任教授"], ["name"], ["asc"]);
          this.th17 = _.orderBy(initData["17特聘教授"], ["name"], ["asc"]);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    eventEmail(email, type) {
      if (!email) return;
      if (type) {
        return email.split("@")[0];
      }
      return email.split("@")[1];
    },
  },
};
</script>

<style scoped>
h5 {
  display: inline;
}
span {
  display: inline;
  font-size: 14px;
}
.el-row {
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px;
}

.el-card {
  height: 100%;
}
.el-card h5 {
  font-weight: 600;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0;
  height: 100%;
  object-fit: cover;
}
li {
  display: inline-block;
  list-style-type: none;
  padding: 0;
}
</style>
