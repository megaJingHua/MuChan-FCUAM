<template>
  <div>
    <Header title="教育目標" />
    <div class="container">
      <el-row :gutter="10" class="ma-0 pa-0" style="align-items: stretch;justify-content: center;">
        <el-col type="flex" :span="18" :xs="24" v-for="(item, i) in goalData" :key="i" class="pb-2">
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
      goalData: [
        {
          title: "",
          img: "http://www.math.fcu.edu.tw/2021_new_website/data/img/Goal1.jpg",
          context:
            "培養學生具備數學專業知識、邏輯思考、實作能力、團隊精神，使其能適應國際化環境成為社會的中堅成員。",
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
