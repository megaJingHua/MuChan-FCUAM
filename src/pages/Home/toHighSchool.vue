<template>
  <div>
    <Header />
    <div class="container pa-sm-0">
      <!-- 熱鍵 -->
      <el-row class="guided-area">
        <el-col :span="6" :xs="12">
          <router-link to="/characteristic">
            <img :src="require('@/assets/stars.png')" />
            <h6 style="text-align: center">本系特色</h6>
          </router-link>
        </el-col>
        <el-col :span="6" :xs="12">
          <router-link to="/goal">
            <img :src="require('@/assets/bullseye.png')" />
            <h6 style="text-align: center">教育目標</h6>
          </router-link>
        </el-col>
        <el-col :span="6" :xs="12">
          <router-link to="/teacher">
            <img :src="require('@/assets/trophy.png')" />
            <h6 style="text-align: center">師資介紹</h6>
          </router-link>
        </el-col>
        <el-col :span="6" :xs="12">
          <router-link to="/capability">
            <img :src="require('@/assets/heart.png')" />
            <h6 style="text-align: center">核心能力</h6>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="ma-0 pa-0" style="align-items: stretch">
        <el-col :span="12" :xs="24" class="pb-2">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="http://www.math.fcu.edu.tw/2021_new_website/data/img/Home%e7%b5%a6%e9%ab%98%e4%b8%ad%e7%94%9f.jpg"
            />

            <div style="padding: 16px">
              <h5>大學部招生資訊</h5>
              <p>
                因應全球教改趨勢，108課綱強調「素養」教育，打造具備創新創造、數位移動、思考與解決問題、整合活用、跨領域及終身學習等關鍵能力的人才。為此，本系除了數理邏輯的基礎訓練外，也積極調整課程與發展方向，以打造面對複雜多變的未來人才。
                <el-button type="text"
                  ><router-link to="/recruit">More</router-link></el-button
                >
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" :xs="24" class="pb-2">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="http://www.math.fcu.edu.tw/2021_new_website/data/img/recruit_universty02.jpeg"
            />
            <div style="padding: 16px">
              <h5>臺灣最佳大學排行榜</h5>
              <p>
                《遠見》雜誌7月1日公布2019「臺灣最佳大學排行榜」，逢甲大學在綜合類大學中位居全國十一；其中私校前五名當中，逢甲大學是唯一沒有醫學相關科系的綜合大學，在評比上能名列前茅，實屬難得。此外，校長互評辦學績效部分，逢甲大學更獲選為私校第一，辦學聲望廣受肯定。
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 圖片輪播牆 -->
      <div class="pb-2">
        <CarouselImgMobile :imgData="imgData" :key="imgKey" />
        <CarouselImg :imgData="imgData" :key="imgKey" />
      </div>
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
export default {
  components: {
    CarouselImg,
    CarouselImgMobile,
    Header,
    CarouselVideo,
    CarouselVideoMobile,
  },
  data() {
    return {
      activeName: "1",
      imgKey: 0,
      videoKey: 0,
      videoData: [],
      imgData: [],
    };
  },
  mounted() {
    this.getImg();
    this.getVideo();
  },
  methods: {
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
a {
  display: flex;
  align-items: center;
  flex-direction: column;
}
p {
  margin: 0px;
}

.guided-area >>> img {
  width: 50%;
}
/* 未連結 */
a:link {
  color: #909399;
  text-decoration: none;
}
/* 已連結過 */
a:visited {
  color: #909399;
}
/* 滑鼠移至連結 */
a:hover {
  color: #303133;
}
/* 選擇的連結 */
a:active {
  color: #303133;
}
</style>
