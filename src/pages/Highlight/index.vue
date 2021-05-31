<template>
  <div>
    <Header title="本系亮點" />
    <div class="container">
      <Table :tableData="heightlightData" :key="heightlightKey"/>
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
      activeName: "1",
      heightlightKey: 0,
      heightlightData: [],
    };
  },
  mounted(){
    this.getHeightlight()
  },
  methods: {
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
  },
};
</script>
