<template>
  <div>
    <Header title="最新消息" />
    <div class="container">
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
    </div>
  </div>
</template>
<script>
import axios from "axios"
import Header from "@/components/Header";
import Table from "@/components/Table";
export default {
  components: { Header, Table },
  data() {
    return {
      activeName: '1',
      newsKey: 0,
      speechKey: 0,
      electiveKey: 0,
      heightlightKey: 0,
      newsData: [],
      heightlightData:[],
      electiveData:[],
      speechData:[],
    };
  },
  mounted() {
    this.getNews();
    this.getHeightlight();
    this.getElective();
    this.getSpeech();
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
  }
};
</script>