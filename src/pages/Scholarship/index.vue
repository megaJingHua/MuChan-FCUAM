<template>
  <div>
    <Header title="獎學金" />
    <div class="container">
      <TableFile :tableData="scholarshiptData" :key="scholarshiptKey"/>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import Header from "@/components/Header";
import TableFile from "@/components/TableFile";
export default {
  components: { Header, TableFile },
  data() {
    return {
      activeName: "1",
      scholarshiptKey: 0,
      scholarshiptData: [],
    };
  },
  mounted(){
    this.getScholarship()
  },
  methods: {
    getScholarship() {
      axios
        .get("/2021_new_website/data/scholarship_article.json")
        .then((res) => {
          this.scholarshiptData = res.data;
          this.scholarshiptKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>