<template>
  <div>
    <Header />
    <div class="container pt-5">
      <h5>{{ articleData.title }}</h5>
      <p>{{ articleData.updated }}</p>
      <hr />
      <p class="informationContent" v-html="articleData.context"></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./components/Header";
export default {
  components: { Header },
  data() {
    return {
      articleData: {},
      articleKey: 0,
    };
  },
  mounted() {
    this.getContext(this.getQueryVariable("type"), this.getQueryVariable("id"));
  },
  methods: {
    async getContext(type, id) {
      await axios.get(`/2021_new_website/data/${type}_article.json`).then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          var data = res.data[i];
          if (data.id == id) {
            this.articleData = data;
          }
        }
        this.articleKey += 1;
      });
    },
    getQueryVariable(variable) {
      var query = window.location.href.split("?")[1];
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
  },
};
</script>
<style scoped>
img {
  border-style: none;
  width: 100%;
}
.informationContent >>> img {
  width: 100%;
}
</style>
