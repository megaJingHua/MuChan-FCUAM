<template>
  <div>
    <Header title="招生資訊" />
    <div class="container">
      <!-- 影片輪播牆 -->
      <CarouselVideo :videoData="videoData" />
      <CarouselVideoMobile :videoData="videoData" />
      <!-- 招生圖文牆 -->
      <el-row :gutter="10" class="ma-0 pa-0" style="align-items: stretch">
        <el-card :body-style="{ padding: '0px' }">
          <el-col :span="12" :xs="24" class="px-0">
            <img
              src="http://www.math.fcu.edu.tw/2021_new_website/data/img/recruit_universty01.jpeg"
            />
          </el-col>
          <el-col :span="12" :xs="24" class="px-0 pb-3">
            <img
              src="http://www.math.fcu.edu.tw/2021_new_website/data/img/recruit_universty02.jpeg"
            />
          </el-col>
          <div style="padding: 16px">
            <h5>臺灣最佳大學排行榜</h5>
            <p>
              《遠見》雜誌7月1日公布2019「臺灣最佳大學排行榜」，逢甲大學在綜合類大學中位居全國十一；其中私校前五名當中，逢甲大學是唯一沒有醫學相關科系的綜合大學，在評比上能名列前茅，實屬難得。此外，校長互評辦學績效部分，逢甲大學更獲選為私校第一，辦學聲望廣受肯定。
            </p>
          </div>
        </el-card>
      </el-row>
      <!-- 招生文章 -->
      <Table :tableData="recruitData" :key="recruitKey" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import CarouselVideo from "@/components/CarouselVideo";
import CarouselVideoMobile from "@/components/CarouselVideoMobile";
import Table from "@/components/Table";

export default {
  components: { Header, CarouselVideo, CarouselVideoMobile, Table },
  data() {
    return {
      videoData: [
        {
          url: "https://www.youtube.com/embed/tDZrqT0u_wI",
        },
        {
          url: "https://www.youtube.com/embed/sFpwY7TF5tI",
        },
        {
          url: "https://www.youtube.com/embed/XCviMxk78vM",
        },
      ],
      recruitData: [],
      recruitKey: 0,
      forData: [
        {
          img:
            "http://www.math.fcu.edu.tw/2021_new_website/data/img/recruit_universty01.jpeg",
          title: "",
          context:
            "《遠見》雜誌7月1日公布2019「臺灣最佳大學排行榜」，逢甲大學在綜合類大學中位居全國十一；其中私校前五名當中，逢甲大學是唯一沒有醫學相關科系的綜合大學，在評比上能名列前茅，實屬難得。此外，校長互評辦學績效部分，逢甲大學更獲選為私校第一，辦學聲望廣受肯定。",
          url: "/recruit",
        },
      ],
    };
  },
  mounted() {
    this.getRecruit();
  },
  methods: {
    getRecruit() {
      axios
        .get("/2021_new_website/data/recruit_article.json")
        .then((res) => {
          this.recruitData = res.data;
          this.recruitKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
<style scoped>
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
</style>
