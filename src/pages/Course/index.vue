<template>
  <div>
    <Header title="課程列表" />
    <div class="container">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 16px 16px 0px 16px">
          <h5>本系課程區分</h5>
          <p class="mb-0">
            《哈佛商業評論》將數據科學家譽為「21世紀最性感工作」，市調機構 IDC
            也預測大數據市場在未來的驚人成長，為因應全球產業數位轉型及新興產業發展對數據科學人力需求殷切，本系將課程區分為「計算科學與金融應用」與「數據科學與智慧應用」兩大主軸，課程流程圖如下：
          </p>
        </div>
        <img
          src="http://www.math.fcu.edu.tw/2021_new_website/data/img/1577067361369.jpg"
          style="width:100%"
        />
      </el-card>
      <TableFile :tableData="courseData" :key="courseKey" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Header from "@/components/Header";
import TableFile from "@/components/TableFile";
export default {
  components: { Header, TableFile },
  data() {
    return {
      activeName: "1",
      courseKey: 0,
      courseData: [],
    };
  },
  mounted() {
    this.getCourse();
  },
  methods: {
    getCourse() {
      axios
        .get("/2021_new_website/data/course_article.json")
        .then((res) => {
          this.courseData = res.data;
          this.courseKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
