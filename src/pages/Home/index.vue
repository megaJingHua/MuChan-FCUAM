<template>
  <div>
    <Header />
    <div class="container pa-sm-0">
      <!-- 圖片輪播牆 -->
      <CarouselImgMobile :imgData="imgData" :key="imgKey" />
      <CarouselImg :imgData="imgData" :key="imgKey" />
      <!-- 給高中生、給大學生、給研究生 -->
      <el-row :gutter="20" class="ma-0 pa-0" style="align-items: stretch">
        <el-col type="flex" :span="9" :xs="24" v-for="(item, i) in forData" :key="i">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" />
            <div style="padding: 16px">
              <h5>{{ item.title }}</h5>
              <p>{{ item.context }}</p>
              <el-button type="text"><a :href="item.url">More</a></el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :xs="24">
          <el-card :body-style="{ padding: '0px' }">
            <p class="py-2" style="text-align: center">
              <i class="el-icon-star-off"></i> 大學選才與高中育才
            </p>
            <a
              href="https://collego.ceec.edu.tw/Highschool/DepartmentIntro?dept_id=015019"
              ><img
                src="http://www.math.fcu.edu.tw/2021_new_website/data/img/1611806044457.jpg"
            /></a>
            <p class="py-2" style="text-align: center">
              <i class="el-icon-star-off"></i> 逢甲學記Check in at FCU
            </p>
            <a href="https://www.checkinatfcu.com/">
              <img
                src="http://www.math.fcu.edu.tw/2021_new_website/data/img/right_item_20.jpg"
            /></a>
            <p class="py-2" style="text-align: center">
              <i class="el-icon-star-off"></i> 應數粉絲專頁
            </p>
            <a
              href="https://www.facebook.com/%E9%80%A2%E7%94%B2%E5%A4%A7%E5%AD%B8%E6%87%89%E7%94%A8%E6%95%B8%E5%AD%B8%E7%B3%BB-309803282522102/"
            >
              <img
                src="http://www.math.fcu.edu.tw/2021_new_website/data/img/1613719936046.jpg"
            /></a>
          </el-card>
        </el-col>
      </el-row>

      <!-- 最新消息 -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="最新消息" name="1">
          <Table :tableData="newsData" :key="newsKey" />
        </el-tab-pane>
        <el-tab-pane label="本系亮點" name="2">
          <Table :tableData="heightlightData" :key="heightlightKey"
        /></el-tab-pane>
        <el-tab-pane label="選課通知" name="3">
          <Table :tableData="electiveData" :key="electiveKey"
        /></el-tab-pane>
        <el-tab-pane label="學術演講" name="4">
          <Table :tableData="speechData" :key="speechKey"
        /></el-tab-pane>
      </el-tabs>
      <!-- 影片輪播牆 -->
      <CarouselVideo :videoData="videoData" :key="videoKey" />
      <CarouselVideoMobile :videoData="videoData" :key="videoKey" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import CarouselImg from "@/components/CarouselImg";
import CarouselImgMobile from "@/components/CarouselImgMobile";
import CarouselVideo from "@/components/CarouselVideo";
import CarouselVideoMobile from "@/components/CarouselVideoMobile";
import Table from "@/components/Table";
export default {
  components: {
    CarouselImg,
    CarouselImgMobile,
    Header,
    CarouselVideo,
    CarouselVideoMobile,
    Table,
  },
  data() {
    return {
      activeName: "1",
      imgKey: 0,
      videoKey: 0,
      newsKey: 0,
      speechKey: 0,
      electiveKey: 0,
      heightlightKey: 0,
      newsData: [],
      heightlightData: [],
      electiveData: [],
      speechData: [],
      videoData: [],
      forData: [
        {
          img:
            "http://www.math.fcu.edu.tw/2021_new_website/data/img/Home%e7%b5%a6%e9%ab%98%e4%b8%ad%e7%94%9f.jpg",
          title: "給高中生",
          context:
            "由於108課綱對於「素養」的重視，本系重視邏輯思考與計算思維的基礎訓練，積極調整課程與發展方向，以打造未來人才。",
          url: "http://www.math.fcu.edu.tw/#/high-school",
        },
        {
          img:
            "http://www.math.fcu.edu.tw/2021_new_website/data/img/Home%e7%b5%a6%e7%a0%94%e7%a9%b6%e7%94%9f.jpg",
          title: "給研究生",
          context:
            "受惠於國內各企業在「數據分析」與「數位轉型」領域的迫切需求，帶動相關人才的成長。本系所鼓勵研究生們跨界跨域學習，將應用數學到各領域，在強化自身競爭力的同時也培養學習力",
          url: "http://www.math.fcu.edu.tw/ds/#/",
        },
      ],
      imgData: [],
    };
  },
  mounted() {
    this.getImg();
    this.getNews();
    this.getHeightlight();
    this.getElective();
    this.getSpeech();
    this.getVideo();
  },
  methods: {
    getNews() {
      axios
        .get("/2021_new_website/data/news_article.json")
        .then((res) => {
          this.newsData = res.data;
          this.newsKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getHeightlight() {
      axios
        .get("/2021_new_website/data/heightlight_article.json")
        .then((res) => {
          this.heightlightData = res.data;
          this.heightlightKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getElective() {
      axios
        .get("/2021_new_website/data/elective_article.json")
        .then((res) => {
          this.electiveData = res.data;
          this.electiveKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getSpeech() {
      axios
        .get("/2021_new_website/data/speech_article.json")
        .then((res) => {
          this.speechData = res.data;
          this.speechKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getVideo() {
      axios
        .get("/2021_new_website/data/home_video.json")
        .then((res) => {
          this.videoData = res.data;
          this.videoKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getImg() {
      axios
        .get("/2021_new_website/data/home_img.json")
        .then((res) => {
          console.log(res.data);
          this.imgData = res.data;
          this.imgKey += 1;
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
p {
  margin: 0px;
}
</style>
