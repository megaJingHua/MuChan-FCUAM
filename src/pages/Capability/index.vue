<template>
  <div>
    <Header title="核心能力" />
    <div class="container">
      <el-row :gutter="10" class="ma-0 pa-0" style="align-items: stretch">
        <el-col type="flex" :span="12" :xs="24" v-for="(item, i) in capabilityData" :key="i" class="pb-2">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" />
            <div style="padding: 16px">
              <h5>{{ item.title }}</h5>
              <p v-html="item.context"></p>
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
      capabilityData: [
        {
          title: "大學部",
          img:
            "http://www.math.fcu.edu.tw/2021_new_website/data/img/Capability1.jpg",
          context:
            "<li>運用數學、統計、資訊、管理的能力。</li><li>分析與詮釋數據的能力。</li><li>溝通與團隊合作的能力。</li><li>獨立思考、解決問題的能力。</li><li>跨領域學習與整合數學的能力。</li>",
        },
        {
          title: "碩士班",
          img:
            "http://www.math.fcu.edu.tw/2021_new_website/data/img/Capability2.jpg",
          context:
            "<li>建構及運用數學、統計、資訊、管理的能力。</li><li>整合、分析與詮釋數據的能力。</li><li>獨立思考、解決問題的能力。</li><li>專業論文撰寫的能力。</li><li>有效溝通、團隊合作及跨領域學習與整合的能力。</li><li>專業倫理、社會責任感和國際觀。</li>",
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
