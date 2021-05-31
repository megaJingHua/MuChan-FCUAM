<template>
  <div>
    <Header title="系史" />
    <div class="container">
      <el-row :gutter="10" class="ma-0 pa-0" style="align-items: stretch">
        <el-col
          type="flex"
          :span="12"
          :xs="24"
          v-for="(item, i) in historyData"
          :key="i"
          class="pb-2"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" />
            <div style="padding: 16px">
              <h5>{{ item.title }}</h5>
              <p v-html="item.context"></p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 16px">
              <h5>應用數學系大小事!</h5>
              <p>歷任主管介紹、師資、傑出教師、大事記、本系專任教師兼任其他單位主管</p>
              <el-button type="text"><a href="http://www.math.fcu.edu.tw/2021_new_website/data/pdf/Math-%e5%96%ae%e4%bd%8d%e5%b0%8f%e5%8f%b21090422(%e6%9b%b4%e6%96%b0%e7%b6%b2%e9%a0%81)%20.pdf" target="_blank">More</a></el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: { Header },
  data() {
    return {
      historyData: [
        {
          title: "中華民國61年，教育部派了一位督學到逢甲查詢",
          img: "http://www.math.fcu.edu.tw/2021_new_website/data/img/History1.jpg",
          context:
            "<h5>逢甲是否有設立數學系的必要？</h5>逢甲各學系每系必修微積分 8 學分，合計需支援高等數學的專業科目學分十分繁重，必須有專人負責籌畫管理、研究支援，實有設立數學系的必要。",
        },
        {
          title: "為何設立應用數學系？",
          img: "http://www.math.fcu.edu.tw/2021_new_website/data/img/History2.jpg",
          context:
            "數學為科學之母，這是眾人皆知的名言。只是有許多人一見數學便認為是門學術著作，而生排斥。殊不知在科學上，瞭解一門科學是一回事，要將它寫出來，又是另一回事，要用正確的數字來闡釋這觀念又可能費時甚久，仍不得要領。這時如果使上數學上的技巧、概念、定理等，就可使您得到最簡單、最清楚的結論，這些被用來解決科學上各種問題的數學，就是應用數學。",
        },
        {
          title: "是不是有些數學是沒有用的？",
          img: "http://www.math.fcu.edu.tw/2021_new_website/data/img/History3.jpg",
          context:
            "這不一定，數學家 G.H.Hardy 稱這種數學為純數學，純數學可能一時找不出它的用途，但在數學的世界中，純數學像是一幅畫那麼美麗，像一首詩般含有高貴的情愫，一旦發現它的用途時，便稱為應用數學。應用數學亦可能需用特殊數學來解決問題，因此引伸出一系列的研究，而進入純數學的領域中。",
        },
        {
          title: "逢甲應用數學系誕生",
          img: "http://www.math.fcu.edu.tw/2021_new_website/data/img/History4.jpg",
          context:
            "張校長、廖教務長及多位老師對於上列提出的說明，均有徹底的瞭解，於是在民國61年5月11日獲得教育部台高 10854 號文核准逢甲自61學年度起設應用數學系，招收新生一班 60 人，於是逢甲應用數學系就在張校長任內誕生了。",
        },
      ],
    };
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
