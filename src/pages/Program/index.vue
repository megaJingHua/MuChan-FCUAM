<template>
  <div>
    <Header title="學分學程" />
    <div class="container">
      <TableFile :tableData="programData" :key="programKey"/>
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
      activeName: '1',
      programKey: 0,
      programData: [],
    };
  },
  mounted() {
    this.getProgram();
  },
  methods: {
    getProgram() {
      axios
        .get("/2021_new_website/data/program_article.json")
        .then((res) => {
          this.programData = res.data;
          this.programKey += 1;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>